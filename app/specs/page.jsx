import PriceCard from "../components/price";
export default function specs() {
  return (
    <div className="bg-white pb-10">
      <section className="bg-white py-24 px-6 mb-10 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black font-serif">
            Why Choose Area?
          </h2>
          <p className="text-[#455910] mt-4 pt-20">
            You need a solution that keeps up. That’s why we developed Area. A
            developer-friendly approach to streamline your business.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          <PriceCard
            plan="Starter"
            price="0"
            features={["3 Projects", "Basic Analytics", "Community Support"]}
          />
          <PriceCard
            plan="Pro"
            price="30"
            isPopular={true}
            features={[
              "Unlimited Projects",
              "Advanced AI",
              "Priority Support",
              "Custom Branding",
            ]}
          />
          <PriceCard
            plan="Enterprise"
            price="100"
            features={[
              "Dedicated Server",
              "SSO & Security",
              "Custom Contracts",
              "24/7 Phone Support",
            ]}
          />
        </div>
      </section>

      <h1 className="text-black  text-center font-bold ms-40 me-40 text-4xl font-serif">
        “I was skeptical, but Area has completely transformed the way I manage
        my business. The data visualizations are so clear and intuitive, and the
        platform is so easy to use. I cant imagine running my company without
        it.”
      </h1>
    </div>
  );
}
