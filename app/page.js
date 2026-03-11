import Logos from "./components/Logos";
import HomeImg from "./components/home_img";

export default function Home() {
  return (
    <div
      className="bg-white h-300  w-full
    flex-row justify-center items-center overflow-x-hidden"
    >
      <h1 className="text-black font-bold font-serif text-9xl h-110 px-10 pt-10">
        Browse Everything
      </h1>

      <HomeImg></HomeImg>

      <h3 className="text-black font-serif text-2xl ps-10 pt-20 mt-10 mb-10">
        Trusted by
      </h3>
      <Logos></Logos>
    </div>
  );
}
