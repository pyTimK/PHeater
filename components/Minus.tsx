import { MouseEventHandler } from "react";

interface MinusProps {
  onClick: MouseEventHandler;
}

const Minus: React.FC<MinusProps> = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <svg
        width="51"
        height="50"
        viewBox="0 0 51 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.9">
          <rect
            x="0.831665"
            y="0.642288"
            width="50"
            height="49.1803"
            rx="24.5902"
            fill="#E1282D"
          />
          <path
            d="M16.9738 27.5231V24.0856H34.6838V27.5231H16.9738Z"
            fill="white"
          />
        </g>
      </svg>
    </div>
  );
};

export default Minus;
