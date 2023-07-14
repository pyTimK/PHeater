import mapNumberRange from "@/func/map_number_range";
import { skyerFont } from "@/styles/fonts";

interface ThermometerProps {
  children?: React.ReactNode;
  temp: number;
}

const minTemp = 0;
const maxTemp = 70;
const minHeight = 0;
const maxHeight = 250;

const Thermometer: React.FC<ThermometerProps> = ({ temp }) => {
  //   const color = getColorFromGradient("#25ABE6", "#EB2437", temp / maxTemp);

  let tempHeight = mapNumberRange(temp, minTemp, maxTemp, minHeight, maxHeight);

  return (
    <div className="relative">
      <svg
        width="171"
        height="402"
        viewBox="0 0 171 402"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="86.5889" cy="342.705" r="58.5889" fill="#D9D9D9" />
        <rect
          x="56.8931"
          width="59.3914"
          height="323.443"
          rx="29.6957"
          fill="#D9D9D9"
        />
        <rect
          x="68.9319"
          y="30.4983"
          width="35.3138"
          height="329.061"
          rx="17.6569"
          fill="#BFBFBF"
        />
        <circle cx="86.589" cy="342.705" r="43.3397" fill="#EB2437" />
        <rect
          x="68.9319"
          y={`${323 - tempHeight}`}
          width="35.3138"
          height={`${tempHeight}`}
          rx="17.6569"
          fill="#EB2437"
        />

        <rect x="116" y="30" width="55" height="4" rx="2" fill="#EB2437" />
        <rect x="116" y="59" width="36.8902" height="4" rx="2" fill="#23A9E7" />
        <rect x="116" y="88" width="55" height="4" rx="2" fill="white" />
        <rect
          x="116"
          y="117"
          width="36.8902"
          height="4"
          rx="2"
          fill="#44C8F9"
        />
        <rect x="116" y="146" width="55" height="4" rx="2" fill="#EB2437" />
      </svg>

      <div className="flex flex-row items-start justify-center absolute inset-x-0 bottom-10">
        <p className={`${skyerFont.className} text-4xl`}>{temp}</p>
        <p className={`${skyerFont.className} text-sm`}>°C</p>
      </div>
    </div>
  );
};

export default Thermometer;
