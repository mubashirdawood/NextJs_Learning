import Image from "next/image";
export default function HomeImg() {
  return (
    <div className="bg-[#8e9c78] mx-20 w-70vw h-100 pb-10px mt-40  rounded-4xl flex items-center justify-center">
      <Image
        src="/Gemini_Generated_Image_y5h1nfy5h1nfy5h1.png"
        width={950}
        height={400}
        className="rounded-t-4xl border-x-12 border-t-8 border-black relative -top-30"
        placeholder="blur"
        blurDataURL="..."
        alt="Picture of the Product launch"
      />
    </div>
  );
}
