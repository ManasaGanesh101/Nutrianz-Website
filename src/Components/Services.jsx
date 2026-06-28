import {
  IconHeart,
  IconUsers,
  IconScale,
  IconHeartRateMonitor,
  IconBabyCarriage,
  IconRun,
  IconActivityHeartbeat,
  IconSalad,
  IconLeaf,
  IconHeartbeat,
} from "@tabler/icons-react"

import ServicesCard from "../Components/ServicesCard.jsx"
import FadeUp from "./FadeUp.jsx"
import { motion } from "framer-motion"

function Services() {
  const accentColors = ["#C8704C", "#9CAF88", "#D9A24B", "#7A9E9F"]
  const services = [
  {
    title: "Weight Management",
    desc: {
      intro: "Evidence-based support for:",
      points: [
        "Sustainable weight loss and weight gain",
        "Protein and meal planning",
        "Healthy habit formation",
      ],
    },
    icon: <IconScale size={32} stroke={1.8} />,
  },
  {
    title: "Diabetes & Prediabetes",
    desc: {
      intro: "Personalised nutrition support for:",
      points: [
        "Blood glucose management",
        "Balanced meal planning",
        "Diabetes prevention and support",
      ],
    },
    icon: <IconHeartRateMonitor size={32} stroke={1.8} />,
  },
  {
    title: "PCOS & Hormonal Health",
    desc: {
      intro: "Nutrition strategies focused on:",
      points: [
        "Insulin resistance support",
        "Weight management strategies",
        "Hormonal health and symptom management",
      ],
    },
    icon: <IconHeart size={32} stroke={1.8} />,
  },
  {
    title: "Pregnancy & Postpartum",
    desc: {
      intro: "Nutrition guidance for:",
      points: [
        "Healthy pregnancy nutrition",
        "Managing common nutrition concerns",
        "Postpartum recovery and nourishment",
      ],
    },
    icon: <IconBabyCarriage size={32} stroke={1.8} />,
  },
  {
    title: "Healthy Ageing",
    desc: {
      intro: "Supporting healthy ageing through:",
      points: [
        "Muscle and bone health",
        "Cognitive health and wellbeing",
        "Chronic disease prevention",
      ],
    },
    icon: <IconLeaf size={32} stroke={1.8} />,
  },
  {
    title: "Sports Nutrition",
    desc: {
      intro: "Nutrition plans tailored for:",
      points: [
        "Performance nutrition",
        "Recovery and hydration strategies",
        "Training and competition support",
      ],
    },
    icon: <IconRun size={32} stroke={1.8} />,
  },
];

  return (
    <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-[#FAF6F1] overflow-hidden select-none">

      
<motion.div
  className="absolute -top-40 left-10 w-64 h-64 bg-[#F3D9CE] rounded-full opacity-70"
  animate={{
    y: ["0%", "140%"],
  }}
  transition={{
    duration: 25,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }}
/>
<motion.div
  className="absolute -top-40 left-150 w-70 h-70 bg-[#FFE4C4] rounded-full opacity-70"
  animate={{
    y: ["0%", "120%"],
  }}
  transition={{
    duration: 15,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }}
/>
<motion.div
  className="absolute top-1/3 right-20 w-40 h-40 bg-white rounded-full opacity-80"
  animate={{
    y: [0, -500, 0],
  }}
  transition={{
    duration: 30,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

      <FadeUp>
        <div className="relative text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-[#C8704C] mb-3">
            Services
          </p>

          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-gray-800">
            Areas of Expertise
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Personalised nutrition care designed to support your health goals,
            lifestyle, and long-term wellbeing.
          </p>
        </div>
      </FadeUp>

      <div className="relative grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
        <FadeUp key={index} delay={index * 0.08}>
            <ServicesCard
            title={service.title}
            desc={service.desc}
            icon={service.icon}
            accent={accentColors[index % accentColors.length]}
            />
        </FadeUp>
        ))}
      </div>
      
    </section>
  )
}

export default Services