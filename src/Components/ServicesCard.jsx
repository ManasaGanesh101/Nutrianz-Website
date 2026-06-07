function ServicesCard(props){
    return(
        <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-md hover:shadow-xl transition-shadow duration-300">
            
            {/* Icon circle */}
            <div className="w-12 h-12 rounded-full bg-[#f0f5f0] flex items-center justify-center text-[#a8bfa8]">
                {props.icon}
            </div>

            {/* Title */}
            <p className="font-cormorant text-xl font-semibold text-gray-700">{props.title}</p>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed font-times">{props.desc}</p>

            {/* Duration tag */}
            <span className="text-xs px-3 py-1 rounded-full bg-[#f0f5f0] text-[#5f8f5f] w-fit mt-auto">
                {props.duration}
            </span>

        </div>
    )
}
export default ServicesCard