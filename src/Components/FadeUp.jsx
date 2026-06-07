import { motion } from "framer-motion"

function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      style={{ willChange: "transform", backfaceVisibility: "hidden" }}
    >
      {children}
    </motion.div>
  )
}

export default FadeUp