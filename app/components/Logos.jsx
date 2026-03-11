import Image from "next/image";

export default function Logos() {
  
  const allLogos = ["logo1", "logo2", "logo3", "logo4", "logo5", "logo6", "logo7"];

  return (
    <div className="flex flex-wrap justify-center items-center gap-10 mt-20 mb-10 w-full px-10">
      {allLogos.map((name) => (
        <div key={name} className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition duration-300">
          <Image
            src={`/logos/${name}.svg`} 
            alt={`${name} icon`}
            width={150}
            height={80}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}