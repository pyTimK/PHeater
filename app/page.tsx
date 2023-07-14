import TempWrapper from "@/components/TempWrapper";
import { skyerFont } from "@/styles/fonts";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center columns-1 mt-1">
      <Title />
      <TempWrapper />
      <p className="text-sm font-thin absolute bottom-2">© 2023 PHeater</p>
    </div>
  );
};

const Title = () => {
  return (
    <div className="flex flex-row items-center justify-center opacity-90 mb-20">
      <img src="/icon.png" width={40} height={40} alt="Logo" />
      <h1 className={`${skyerFont.className} text-2xl text-white ml-3`}>
        P Heater
      </h1>
    </div>
  );
};

export default Home;
