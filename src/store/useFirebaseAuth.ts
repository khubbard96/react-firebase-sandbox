import create from "zustand";
import { combine } from "zustand/middleware";
import firebase from "firebase/app";

const useFirebaseAuth = create(
  combine(
    {
      auth: {} as firebase.auth.Auth
    },
    (set) => ({
      setFirebaseAuth: (_auth: firebase.auth.Auth) =>
        set((s) => ({ auth: _auth }))
    })
  )
);

export default useFirebaseAuth;
