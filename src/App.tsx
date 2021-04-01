import "./styles.css";
import initFirestore from "./utils/initFirebase";
import SignIn from "./components/SignIn";
import GroupSelector from "./components/GroupSelector";
import useFirebaseAuth from "./store/useFirebaseAuth";
import useFirestore from "./store/useFirestore";
import { useAuthState } from "react-firebase-hooks/auth";

const { fs, auth } = initFirestore();

export default function App() {
  const setAuth = useFirebaseAuth((state) => state.setFirebaseAuth);
  setAuth(auth);
  const [user] = useAuthState(auth);
  const setFirestore = useFirestore((state) => state.setFirestore);
  setFirestore(fs);

  return (
    <div className="App">
      {user ? (
        <div>
          <h3>Welcome, {user?.displayName}</h3>
          <GroupSelector />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
