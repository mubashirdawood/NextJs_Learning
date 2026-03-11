import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-fit bg-white flex ps-10 pe-10 pt-5 pb-5 justify-between items-center h-fill overflow-x-hidden">
      <Link className=" text-5xl text-black" href="/">
        Area
      </Link>

      <nav
        className="text-black font-bold   flex gap-10 items-center justify-center h-16 w-fit rounded-4xl ps-10 pe-10
      fixed top-3 left-1/2  -translate-x-1/2  backdrop-blur-md z-50"
      >
        <Link href="benefits">Benefits</Link>
        <Link href="specs">specs</Link>
        <Link href="howto">How_to</Link>
        <Link href="contact">Contact</Link>
      </nav>

      <button className="bg-[#455910] text-white px-5 py-3 rounded-4xl">
        Learn more
      </button>
    </div>
  );
}
