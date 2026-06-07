import { useRef, useState } from "react"
import { motion } from "framer-motion"

const articles = [
  {
    title: "Diet is What We Eat",
    publication: "The Indian Telegraph",
    date: "Sept 2016",
    excerpt: "Healthy eating tips and low-calorie meal ideas for busy lifestyles."
  },
  {
    title: "Avoid Weight Gain Before It Begins",
    publication: "The Indian Telegraph",
    date: "Oct 2016",
    excerpt: "How to stay healthy and indulge mindfully during festive season."
  },
  {
    title: "Improve Your Gut Feelings",
    publication: "The Indian Telegraph",
    date: "Oct 2016",
    excerpt: "Diet tips to improve digestion and manage gut health naturally."
  },
  {
    title: "De-Stress Your Diet",
    publication: "The Indian Telegraph",
    date: "Nov 2016",
    excerpt: "How the right foods can help you manage stress and anxiety."
  },
  {
    title: "Guide to Living Well with Diabetes",
    publication: "The Indian Telegraph",
    date: "Nov 2016",
    excerpt: "Evidence-based nutrition strategies for managing diabetes through diet."
  },
]

function PressCard({ title, publication, date, excerpt }) {
  return (
    <div className="shrink-0 w-72 bg-white rounded-2xl p-6 shadow-[rgba(0,0,0,0.24)_0px_3px_8px] flex flex-col gap-3 mx-4">
      <div className="flex items-center gap-2">
        <span className="text-xs px-3 py-1 rounded-full bg-[#f0f5f0] text-[#5f8f5f] font-medium">
          {publication}
        </span>
        <span className="text-xs text-gray-400">{date}</span>
      </div>
      <p className="font-cormorant text-xl font-semibold text-gray-700 leading-snug">{title}</p>
      <p className="text-sm text-gray-500 font-times leading-relaxed">{excerpt}</p>
      <div className="h-px w-full bg-gray-100 mt-auto" />
      <p className="text-xs text-[#a8bfa8] tracking-widest uppercase">As Featured In Press</p>
    </div>
  )
}

function Press() {
  const [paused, setPaused] = useState(false)

  return (
    <div className="py-16 bg-[#faf9f7] overflow-hidden">
      
      <motion.h2
        className="font-ephesis text-4xl text-center text-gray-700 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Published Articles
      </motion.h2>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex"
          animate={{ x: paused ? undefined : ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }
          }}
        >
          {/* render twice for seamless loop */}
          {[...articles, ...articles].map((article, index) => (
            <PressCard key={index} {...article} />
          ))}
        </motion.div>
      </div>

    </div>
  )
}

export default Press