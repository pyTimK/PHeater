import { skyerFont } from "@/styles/fonts";
import { useState } from "react";
import Minus from "./Minus";
import Plus from "./Plus";

interface ControllerProps {
  targetTemp: number;
  updateTargetTemp: (target_temp: number) => Promise<void>;
}

const Controller: React.FC<ControllerProps> = ({
  targetTemp,
  updateTargetTemp,
}) => {
  const incrementTargetTemp = () => updateTargetTemp(targetTemp + 1);
  const decrementTargetTemp = () => updateTargetTemp(targetTemp - 1);

  return (
    <div className="mt-20 flex flex-col items-center space-y-3">
      <div className="flex flex-row space-x-6 items-center">
        <Minus onClick={decrementTargetTemp} />
        <div className="flex flex-row items-start justify-center border-2 border-red rounded-xl py-4 w-24">
          <p className={`${skyerFont.className} text-5xl`}>{targetTemp}</p>
          <p className={`${skyerFont.className} text-sm`}>°C</p>
        </div>
        <Plus onClick={incrementTargetTemp} />
      </div>
      <p className={`${skyerFont.className}`}>TARGET</p>
    </div>
  );
};

export default Controller;
