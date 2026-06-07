import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import aboutPic from '../assets/madhupic.jpeg'

const bioLines = [
  "Welcome to Nutrianz, your trusted destination for expert nutrition advice and personalised guidance.",
  "I'm Madhusmitha, an Accredited Nutritionist and Dietitian with over 15 years of experience",
  "across clinical nutrition, bariatrics, diabetes care, and personalised wellness.",
  "My journey has taken me from Apollo Hospitals in Chennai to Sydney Adventist Hospital,",
  "and now to running my own private practice right here in Schofields, NSW.",
  "I have worked with clients across all walks of life,",
  "helping them build sustainable habits, manage health conditions, and rediscover their relationship with food.",
  "At Nutrianz, there are no generic plans and no quick fixes.",
  "Everything is tailored specifically to you, your lifestyle, your goals, and your body.",
  "Whether you are just starting your wellness journey or looking for specialised support,",
  "I am here to guide you with evidence-based advice, genuine care, and a personalised approach.",
]

function About(){
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return(
    <div ref={ref} className="flex flex-col md:flex-row items-center justify-center gap-16 px-10 md:px-32 py-20 bg-[#faf9f7] w-full">
      
      {/* Left - image + name */}
      <motion.div className="flex flex-col items-center gap-4 shrink-0">
        <motion.img
          src={aboutPic}
          className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={isInView ? { 
            opacity: 1, 
            scale: 1,
            y: [0, -5, 0]
          } : {}}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }
          }}
        />

        {/* Name + title under image */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="font-ephesis text-3xl text-gray-700">Madhusmitha Krish</p>
          <p className="text-sm text-[#a8bfa8] tracking-widest uppercase">Nutritionist & Dietitian</p>
        </motion.div>
      </motion.div>

      {/* Right - text */}
      <div className="max-w-4xl text-justify md:text-center">

        {/* Decorative About Me label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#a8bfa8]" />
          <p className="text-[#a8bfa8] text-sm tracking-widest uppercase">About Me</p>
        </div>

        {/* Staggered text */}
        {bioLines.map((line, index) => (
        <motion.span
            key={index}
            className="font-times text-lg md:text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
        >
        {line}{" "}
        </motion.span>
        ))}
      </div>

    </div>
  )
}

export default About