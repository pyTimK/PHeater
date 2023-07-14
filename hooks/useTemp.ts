import { db } from "@/app/firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const tempDocRef = doc(db, "temp", "temp");

const useTemp = () => {
  const [temp, setTemp] = useState(0);
  const [targetTemp, setTargetTemp] = useState(0);

  const updateTargetTemp = async (target_temp: number) => {
    await updateDoc(tempDocRef, { target_temp });
  };

  useEffect(() => {
    const unsub = onSnapshot(tempDocRef, (doc) => {
      const data = doc.data();
      setTemp(Math.floor(data?.temp ?? 0));
      setTargetTemp(Math.floor(data?.target_temp ?? 0));
    });
    return () => unsub();
  }, []);

  return { temp, targetTemp, updateTargetTemp };
};

export default useTemp;
