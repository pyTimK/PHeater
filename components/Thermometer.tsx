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
        width="96"
        height="324"
        viewBox="0 0 96 324"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="48" cy="276.822" r="47.1777" fill="#D9D9D9" />
        <rect
          x="24.0879"
          y="0.864868"
          width="47.824"
          height="260.447"
          rx="23.912"
          fill="#D9D9D9"
        />
        <rect
          x="33.782"
          y="25.4231"
          width="28.4359"
          height="264.971"
          rx="14.2179"
          fill="#BFBFBF"
        />
        <circle cx="48" cy="276.822" r="34.8986" fill={`${"#EB2437"}`} />
        <rect
          x="33.782"
          y={`${260 - tempHeight}`}
          width="28.4359"
          height={`${tempHeight}`}
          rx="14.2179"
          fill={`${"#EB2437"}`}
        />
      </svg>
      <div className="flex flex-row items-start justify-center absolute inset-x-0 bottom-8">
        <p className={`${skyerFont.className} text-2xl`}>{temp}</p>
        <p className={`${skyerFont.className} text-sm`}>°C</p>
      </div>
    </div>
  );
};

export default Thermometer;
