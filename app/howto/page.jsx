import Discoverbtn from "../components/discoverbtn";
import HowtoCard from "../components/howtoCard";

export default function Specs() {
  return (
    <div className="bg-white h-fit w-full px-10 py-10 ">
      <div className="flex justify-between items-center w-full mb-10">
        <h1 className="text-black text-4xl font-bold font-serif">
          Map Your Success
        </h1>
        <div className="-top-5 relative">
          <Discoverbtn />
        </div>
      </div>
      <div className="flex justify-between mt-20 pt-20">
        <HowtoCard
          number="01"
          title="Getting Started"
          description="With our intuitive setup, you’re up and running in minutes."
        />
        <HowtoCard
          number="02"
          title="Customize and Configure"
          description="Adapt Area to your specific requirements and preferences."
        />
        <HowtoCard
          number="03"
          title="Grow Your Business"
          description="Make informed decisions to exceed your goals."
        />
      </div>
    </div>
  );
}
