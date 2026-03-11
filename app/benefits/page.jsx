import Benefit_grid from "../components/benifit_grid";
import Image from "next/image";
import BenefitList from "../components/benifitlist"; 
import Discoverbtn from "../components/discoverbtn";

export default function benefits() {
  return (
    <div className="bg-white h-fit pb-10 w-full pt-30 ps-10">
      <p className="text-[#455910] font-sans">Benfits</p>
      <h1 className="text-7xl font-bold text-black pb-10 font-serif">
        We’ve cracked the code.
      </h1>
      <p className="text-[#455910] font-sans">
        Area provides real insights, without the data overload.
      </p>
      <Benefit_grid></Benefit_grid>

      <Image
        src="/benefit.png"
        width={900}
        height={400}
        className="rounded-4xl mx-auto mt-20   border-black "
        placeholder="blur"
        blurDataURL="..."
        alt="Picture of the  launch"
      />

<h1  className="text-5xl mt-30 text-black pb-10 font-serif">See the Big Picture</h1>
<p className="text-black ">Area turns your data into clear, vibrant visuals that show you exactly. What happening in each region.</p>

<BenefitList text={"Spot Trends in Seconds: No more digging through numbers. "}></BenefitList>
<BenefitList text={"Get Everyone on the Same Page: Share easy-to-understand reports with your team. "}></BenefitList>
<BenefitList text={"Make Presentations Pop: Interactive maps and dashboards keep your audience engaged. "}></BenefitList>
<BenefitList text={"Spot Trends in Seconds: No more digging through numbers. "}></BenefitList>
<BenefitList text={"Spot Trends in Seconds: No more digging through numbers. "}></BenefitList>
<BenefitList text={"Your Global Snapshot: Get a quick, clear overview of your entire operation. "}></BenefitList>


<Discoverbtn></Discoverbtn>


   
    </div>
  );
}
