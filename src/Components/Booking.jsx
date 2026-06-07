import FadeUp from '../Components/FadeUp.jsx'
function Booking(){
    return(
        <>
        <div className="p-3">
            <FadeUp delay={0.1}>
            <p className="font-semibold p-3">What to expect</p>
            </FadeUp>

            
            <ul className="space-y-4">
                <FadeUp delay={0.2}>
                <li className="flex items-start gap-4 ">
                    <span className="w-8 h-8 bg-[#9CAF88] rounded-full text-white flex items-center justify-center">1</span>
                    <div className="flex flex-col">
                    <p>Submit your request</p>
                    <p className="text-gray-500 text-sm">Fill in the form with 
                        your preferred date, time and service</p>
                    </div>
                </li>
                </FadeUp>

                <FadeUp delay={0.3}>
                <li className="flex items-center gap-4">
                    <span className="w-8 h-8 bg-[#9CAF88] rounded-full text-white flex items-center justify-center">2</span>
                    <div className="flex flex-col">
                    <p>Confirmation Email</p>
                    <p className="text-gray-500 text-sm">You'll receive a confirmation email within 24 hours.</p>
                    </div>
                    
                </li>
                </FadeUp>

                <FadeUp delay={0.4}>
                <li className="flex items-center gap-4">
                    <span className="w-8 h-8 bg-[#9CAF88] rounded-full text-white flex items-center justify-center">3</span>
                    <div className="flex flex-col">
                    <p>Your session</p>
                    <p className="text-gray-500 text-sm">Attend your appointment in person or via telehealth.</p>
                    </div>
                </li>
                </FadeUp>
            </ul>

        </div>
        </>
    )
}
export default Booking