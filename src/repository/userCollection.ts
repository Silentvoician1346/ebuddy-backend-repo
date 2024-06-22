import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { firebaseDB } from "..";
import { UsersProps } from "../types/user.type";

export const fetchUser = async () => {
  const res = await getDocs(collection(firebaseDB, "users")).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return newData;
  });
  return res;
};
export const updateUser = async (data: UsersProps) => {
  await updateDoc(doc(firebaseDB, "users", data.id), {
    id: data.id,
    name: data.name,
    role: data.role,
    remote: data.remote,
  });
};
