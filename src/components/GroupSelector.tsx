import React from "react";
import useFirestore from "../store/useFirestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

const GroupSelector: React.FC = () => {
  const fs = useFirestore((state) => state.fs);
  const groupsRef = fs.collection("groups").orderBy("name", "asc");
  const [groups] = useCollectionData(groupsRef, { idField: "id" });

  return (
    <>
      {groups?.map((grp, idx) => {
        return <button>{grp.name}</button>;
      })}
    </>
  );
};

export default GroupSelector;
