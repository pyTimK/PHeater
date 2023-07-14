import TempWrapper from "@/components/TempWrapper";
import { skyerFont } from "@/styles/fonts";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start columns-1 min-h-screen">
      <div className="content flex-grow flex flex-col items-center justify-start mt-10">
        <Title />
        <TempWrapper />
      </div>
      <footer className="text-sm font-thin pb-1 pt-10">© 2023 PHeater</footer>
    </div>
  );
};

const Title = () => {
  return (
    <div className="flex flex-row items-center justify-center opacity-90 mb-10">
      <img src="/icon.png" width={40} height={40} alt="Logo" />
      <h1 className={`${skyerFont.className} text-2xl text-white ml-3`}>
        P Heater
      </h1>
    </div>
  );
};

export default Home;
