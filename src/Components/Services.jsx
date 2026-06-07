import { 
  IconClipboardHeart,
  IconToolsKitchen2,
  IconScale,
  IconHeartRateMonitor,
  IconBuilding
} from '@tabler/icons-react'

import ServicesCard from '../Components/ServicesCard.jsx'
import FadeUp from './FadeUp.jsx'

function Services(){
    const services = [
  {
    title: "Initial Consultation",
    desc: "A comprehensive first session to assess your health goals, medical history, and dietary habits. Together we build the foundation for your nutrition journey.",
    duration: "45 min",
    icon: <IconClipboardHeart />
  },
  {
    title: "Personalised Meal Planning",
    desc: "Custom meal plans designed around your lifestyle, food preferences, and health goals. No generic plans — everything is tailored specifically to you.",
    duration: "60 min",
    icon: <IconToolsKitchen2 />
  },
  {
    title: "Weight Management",
    desc: "Structured and sustainable programs for healthy weight loss or gain. Focus on long-term habits rather than quick fixes.",
    duration: "75 min",
    icon: <IconScale />
  },
  {
    title: "Disease-Specific Nutrition",
    desc: "Specialised dietary management for conditions including diabetes, PCOS, thyroid disorders, and high cholesterol. Evidence-based guidance to help you manage your health.",
    duration:"90 min",
    icon: <IconHeartRateMonitor />
  },
  {
    title: "Corporate Wellness Talks",
    desc: "Engaging nutrition seminars and workshops tailored for workplaces. Empower your team with the knowledge to make healthier choices every day.",
    duration: "90 min",
    icon: <IconBuilding />
  },
]
    return (
    <div className="px-6 md:px-20 py-16 bg-[#faf9f7]">
        <FadeUp>
        <h2 className="font-ephesis text-4xl text-center text-gray-700 mb-10">Services Offered</h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <FadeUp key={index} delay={index * 0.15}>
                <ServicesCard
                    key={index}
                    title={service.title}
                    desc={service.desc}
                    icon={service.icon}
                    duration={service.duration}
                />
                </FadeUp>
            ))}
        </div>
    </div>
)
}
export default Services