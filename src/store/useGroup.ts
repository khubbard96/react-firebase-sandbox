import create, { State } from "zustand";
import { combine } from "zustand/middleware";
import firebase from "firebase/app";

interface GroupState extends State {
  groupId: string;
  setGroupId: (gid: string) => void;
}

export const useGroup = create<GroupState>((set) => ({
  groupId: "",
  setGroupId: (gid: string) => set((s) => ({ groupId: gid }))
}));
