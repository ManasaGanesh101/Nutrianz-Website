import { motion } from "framer-motion"

const timelineData = [
  {
    year: "Jul 2010 - Mar 2011",
    title: "Clinical Dietitian",
    place: "Dr. Mohan's Diabetes Specialities Center · Chennai",
    desc: "Managed diabetic patients, planning diet plans for IGT, IDDM and NIDDM alongside therapeutic diets including tube feeds, low sodium and renal diets."
  },
  {
    year: "Sep 2011 - Apr 2015",
    title: "Nutritionist",
    place: "Freelance · Greater Chennai Area",
    desc: "Online diet consultations, nutrition talks at government, private and corporate sectors."
  },
  {
    year: "Apr 2015 - Apr 2016",
    title: "Clinical Nutritionist & Coordinator",
    place: "Apollo Institute of Bariatrics, Apollo Hospitals · Chennai",
    desc: "Delivered weight loss programs through medical and surgical management, meal planning, disease-condition diets, support groups and research presented at conferences."
  },
  {
    year: "Sep 2016 - May 2018",
    title: "Wellness Column Writer",
    place: "The Indian Telegraph · Remote",
    desc: "Authored articles on diet and wellness for a leading Indian-Australian publication."
  },
  {
    year: "Apr 2019 - Feb 2026",
    title: "Nutrition Assistant",
    place: "Sydney Adventist Hospital · Wahroonga, NSW",
    desc: "Nearly 7 years supporting clinical nutrition in a hospital setting."
  },
  {
    year: "Aug 2024 - Present",
    title: "Nutritionist",
    place: "Self-employed · Sydney, NSW",
    desc: "Personalised diet consultations through private practice, Nutri AnZ."
  },
  {
    year: "May 2025 - Present",
    title: "Casual Academic",
    place: "UNSW · Kensington, NSW",
    desc: "Contributing to nutrition academia at one of Australia's leading universities."
  },
  {
    year: "Jan 2026 - Present",
    title: "Research Officer",
    place: "NSW Health · Australia",
    desc: "Part-time research role involving stakeholder engagement and budgeting."
  },
]

function Timeline() {
  return (
    <div className="px-6 md:px-20 py-16 bg-[#faf9f7]">
      
      <motion.h2
        className="font-ephesis text-4xl text-center text-gray-700 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Journey
      </motion.h2>

      <div className="relative">

        {/* Vertical line that draws itself */}
        <motion.div
          className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-[#a8bfa8] origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ height: "100%" }}
        />

        {/* Timeline items */}
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0

          return (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 mb-12 pl-12 md:pl-0 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Content card */}
              <div className={`md:w-5/12 bg-white rounded-2xl p-5 shadow-[rgba(0,0,0,0.24)_0px_3px_8px] ${
                isLeft ? "md:text-right" : "md:text-left"
              }`}>
                <p className="text-[#a8bfa8] font-semibold text-sm mb-1">{item.year}</p>
                <p className="font-semibold text-gray-700">{item.title}</p>
                <p className="text-gray-400 text-sm">{item.place}</p>
                <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
              </div>

              {/* Center dot */}
              <motion.div
                className="absolute left-[9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#a8bfa8] border-4 border-white shadow-md"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
              />

              {/* Empty spacer for alternating layout */}
              <div className="hidden md:block md:w-5/12" />

            </motion.div>
          )
        })}

      </div>
    </div>
  )
}

export default Timeline