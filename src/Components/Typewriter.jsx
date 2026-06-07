import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const phrases = ["Hi, I'm Madhu.", "I'm a Nutritionist.", "I help you eat better."]

function Typewriter() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % phrases.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-ephesis"
      >
        {phrases[index]}
      </motion.h1>
    </AnimatePresence>
  )
}
export default Typewriter