"use client";

import useTemp from "@/hooks/useTemp";
import Controller from "./Controller";
import Thermometer from "./Thermometer";

const TempWrapper = () => {
  const { temp, targetTemp, updateTargetTemp } = useTemp();
  return (
    <>
      <Thermometer temp={temp} />
      <Controller targetTemp={targetTemp} updateTargetTemp={updateTargetTemp} />
    </>
  );
};

export default TempWrapper;
