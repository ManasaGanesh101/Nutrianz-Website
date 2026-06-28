import { useState, useEffect } from "react"

function ServicesCard({ title, desc, icon, accent }) {
  const [flipped, setFlipped] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setFlipped(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // ---------------- DESKTOP ----------------
  if (!isMobile) {
    return (
      <div
        className="group relative w-full min-h-[22rem] bg-white rounded-3xl shadow-md hover:shadow-xl border border-transparent hover:border-[var(--accent)]/30 p-6 flex flex-col items-center justify-start text-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden"
        style={{ "--accent": accent }}
      >
        {/* Background icon */}
        <div className="absolute -bottom-1 -right-4 text-[var(--accent)] opacity-[0.08] md:scale-[7] group-hover:opacity-15 transition-opacity duration-300">
          {icon}
        </div>

        {/* Icon */}
        <div className="relative w-14 h-14 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-white">
          {icon}
        </div>

        <h3 className="relative font-cormorant text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-[var(--accent)] min-h-[3.5rem] flex items-center justify-center">
          {title}
        </h3>

        <div className="relative h-px w-8 bg-[var(--accent)]/40 my-3" />

        <div className="relative text-sm text-gray-500 mt-1">
          <p>{desc.intro}</p>

          <ul className="list-disc list-inside mt-2 space-y-1 text-left">
            {desc.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  // ---------------- MOBILE ----------------
  return (
    <div
      className="relative w-full min-h-[15rem] cursor-pointer [perspective:1000px]"
      onClick={() => setFlipped(!flipped)}
      style={{ "--accent": accent }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-3xl bg-white shadow-md border border-transparent p-5 flex flex-col items-center justify-center text-center overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute -bottom-1 -right-4 text-[var(--accent)] opacity-[0.08] scale-[7]">
            {icon}
          </div>

          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
            style={{
              backgroundColor: `${accent}25`,
              color: accent,
            }}
          >
            {icon}
          </div>

          <h3 className="font-cormorant text-lg font-semibold text-gray-800">
            {title}
          </h3>

          <div
            className="w-8 h-px my-3"
            style={{ backgroundColor: `${accent}70` }}
          />

          <p className="text-sm text-gray-500">
            Tap and scroll to view services
          </p>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-3xl bg-white shadow-md border border-transparent p-5 flex flex-col"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <h3
            className="font-cormorant text-lg font-semibold text-center mb-3"
            style={{ color: accent }}
          >
            {title}
          </h3>

          <div className="flex-1 overflow-y-auto">
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                {desc.points.map((point) => (
                  <li
                    key={point}
                    className="break-words leading-5"
                  >
                    {point}
                  </li>
                ))}
              </ul>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            Tap to go back
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServicesCard