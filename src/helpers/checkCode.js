import { doc, getDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../firebase/config";

export const checkCode = async (code) => {
  const collectionRef = doc(firebaseDB, `codes/${code}`);
  const resp = await getDoc(collectionRef);

  const info = {
    ...resp.data(),
  };

  return info;
};
