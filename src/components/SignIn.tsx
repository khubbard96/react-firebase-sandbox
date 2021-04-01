import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import useFirebaseAuth from "../store/useFirebaseAuth";

const SignIn: React.FC = () => {
  const { auth } = useFirebaseAuth();

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    if (auth) {
      auth.signInWithPopup(provider);
    }
  };

  return (
    <>{auth ? <button onClick={signInWithGoogle}>Sign in</button> : <></>}</>
  );
};

export default SignIn;
