import { MouseEventHandler } from "react";
import { motion } from "framer-motion";

interface PlusProps {
  onClick: MouseEventHandler;
}

const Plus: React.FC<PlusProps> = ({ onClick }) => {
  return (
    <motion.div onClick={onClick} whileTap={{ scale: 0.8 }}>
      <svg
        width="51"
        height="52"
        viewBox="0 0 51 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.9">
          <rect
            x="0.168335"
            y="0.822617"
            width="50"
            height="49.1803"
            rx="24.5902"
            fill="#E1282D"
          />
          <path
            d="M23.5729 37.7587V26.5087H12.3729V23.3587H23.5729V12.1337H26.7479V23.3587H37.9729V26.5087H26.7479V37.7587H23.5729Z"
            fill="white"
          />
        </g>
      </svg>
    </motion.div>
  );
};

export default Plus;
