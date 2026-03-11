export default function PriceCard({ plan, price, features, isPopular }) {
  return (
    <div
      className={`flex flex-col p-8 rounded-3xl border hover:bg-gray-100  bg-white h-full transition-transform hover:-translate-y-4 hover:shadow-lg hover:border-black  `}
    >
      <h3 className="text-2xl font-bold text-black mb-2">{plan}</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-bold text-black">${price}</span>
        <span className="text-gray-500">/mo</span>
      </div>

      <ul className="flex-grow space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-600">
            <span className="text-green-600">✓</span> {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 rounded-xl font-bold text-black hover:bg-black hover:text-white`}
      >
        Get Started
      </button>
    </div>
  );
}
