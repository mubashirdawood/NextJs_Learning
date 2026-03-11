export default function HowtoCard({ number, title, description }) {
  return (
    <div>
      <div className="bg-white p-6 rounded-4xl border-t-2 border-4xl w-80  shadow-2xl hover:-translate-y-4 hover:shadow-lg hover:bg-gray-100 transition duration-300">
        <h1 className="text-9xl  text-[#929292] mb-4">{number}</h1>
        <h2 className="text-xl font-bold font-serif text-black mb-2">
          {title}
        </h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
