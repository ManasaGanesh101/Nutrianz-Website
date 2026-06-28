import FadeUp from "./FadeUp.jsx"

const reasons = [
  {
    number: "01",
    title: "Evidence-Based Care",
    desc: "Recommendations grounded in the latest nutrition research.",
  },
  {
    number: "02",
    title: "Personalised Guidance",
    desc: "Nutrition plans tailored to your lifestyle, goals, and preferences.",
  },
  {
    number: "03",
    title: "Sustainable Habits",
    desc: "No crash diets or quick fixes—just realistic strategies that last.",
  },
  {
    number: "04",
    title: "Qualified Expertise",
    desc: "Combining advanced research knowledge with practical nutrition care.",
  },
]

function WhyNutrianz() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 bg-white">
      <FadeUp>
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-[#C8704C] mb-3">
            Our Approach
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-gray-800">
            Why Nutrianz?
          </h2>
        </div>
      </FadeUp>

      <div className="flex flex-col md:flex-row">
        {reasons.map((reason, index) => (
          <FadeUp key={index} delay={index * 0.1}>
            <div
              className={`flex-1 text-center px-6 py-8 md:py-0 ${
                index !== 0
                  ? "border-t md:border-t-0 md:border-l border-[#C8704C]/20"
                  : ""
              }`}
            >
              <p className="font-cormorant text-4xl text-[#C8704C] mb-3">
                {reason.number}
              </p>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}

export default WhyNutrianz