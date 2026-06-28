import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import aboutPicAI from "../assets/madhupicAI.png"

const bioLines = [
  "As a Registered Nutritionist (Nutrition Society of Australia), I started Nutrianz to help people",
  "make confident food choices through personalised, evidence-based nutrition care. My passion is empowering",
  "individuals and families with the knowledge and practical skills they need to build healthier, more sustainable",
  "relationships with food. Whether you're managing a health condition or looking to improve your eating habits,",
  "I provide practical, science-backed nutrition guidance tailored to your needs. At Nutrianz, there are no crash diets, replacement shakes, or",
  "one-size-fits-all solutions—just realistic, sustainable strategies that help you build healthy",
  "eating habits for life.",
]

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <div
      ref={ref}
      className="relative bg-[#C8704C] px-8 md:px-24 md:py-40 lg:px-32 pt-20 pb-32 "
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

        {/* LEFT SIDE */}
        <motion.div
          className="relative shrink-0 flex items-center justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Cream Accent Ring */}
          <div
            className="
              absolute
              w-52 h-52
              md:w-72 md:h-72
              rounded-full
              border-[10px]
              border-[#FAF6F1]
              translate-x-4
              -translate-y-3
            "
          />

          {/* Portrait */}
          <motion.img
            src={aboutPicAI}
            alt="Madhu Krish"
            className="
              relative z-10
              w-52 h-52
              md:w-78 md:h-78
              object-cover
              rounded-full
              shadow-xl
            "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
            }}
          />
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="max-w-3xl text-center md:text-left relative z-10">

          <motion.div
            className="flex items-center gap-3 mb-6 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-10 bg-[#F3D9CE]" />
            <p className="text-[#F3D9CE] text-sm tracking-[0.25em] uppercase">
              About Me
            </p>
          </motion.div>

          <motion.h2
            className="font-ephesis text-4xl md:text-5xl text-[#FAF6F1] mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Dr. Madhu Krishnamurthy
          </motion.h2>

          <motion.p
            className="text-[#F3D9CE] uppercase tracking-[0.2em] text-xs mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            (PhD) and Registered nutritionist
          </motion.p>

          {bioLines.map((line, index) => (
            <motion.span
              key={index}
              className="font-times text-sm md:text-xl text-[#FAF6F1] leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.12,
              }}
            >
              {line}{" "}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      <svg
        className="absolute bottom-[-2px] left-0 w-full h-16 md:h-24 block"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 L0,40 C250,200 500,-100 1000,50 L1000,100 Z"
          fill="#FAF6F1"
        />
      </svg>
    </div>
  )
}

export default About