import Booking from '../Components/Booking.jsx'
import FadeUp  from '../Components/FadeUp.jsx'
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"
import ThankYouModal from '../Components/ThankYouModal.jsx'
import { useState } from "react"

function BookingForm(){
    const [date, setDate] = useState(null)

    const isAllowedDay = (date) => {
        const day = date.getDay()
        return day === 1 || day === 2 || day === 6
    }

    const [showModal, setShowModal] = useState(false)
    const handleSubmit = () => {
    setShowModal(true)
    // later: add Google Sheets + email logic here
    // 1. send data to Google Sheets
    // 2. send confirmation email via Resend
    // 3. show modal
}


    return(
        <>
        <ThankYouModal isOpen={showModal} onClose={() => setShowModal(false)} />
        <div className="flex flex-col justify-content items-center gap-6 p-5 bg-[#faf9f7]">
        <p className="font-bold text-2xl md:text-4xl text-[#848F6D] text-justify">Book an Appointment</p>
        <p className="text-gray-500 text-xs md:text-md lg:text-lg">Ready to take the first step? Fill in the form below and I'll be in touch
            to confirm your session
        </p>
        <div className="flex flex-col md:flex-row gap-8">
            
            <Booking />
            <FadeUp delay={0.7}>
            <div className="flex flex-col gap-3 p-3">
                <div className="flex gap-2">
                    <input
                    type="text"
                    placeholder="John"
                    className="border border-[#D5DBCC] rounded-lg px-4 py-2 w-full text-sm"
                    />
                <input
                type="text"
                placeholder="Doe"
                className="border border-[#D5DBCC] rounded-lg px-4 py-2 w-full text-sm" 
                
                 />

            </div>
            <div className="flex gap-2">
                <input
                type="email"
                placeholder="JohnDoe@gmail.com"
                className="border border-[#D5DBCC] rounded-lg px-4 py-2 w-full text-xs" 
    
                />

                <input
                type="tel"
                placeholder="+61 925623458"
                className="border border-[#D5DBCC] rounded-lg px-4 py-2 w-full text-sm" 
                />

            </div>
            {/* service input */}
            <select defaultValue="" 
            className="border border-[#D5DBCC] rounded-lg px-4 py-2" >
                <option value="" disabled>Select a service</option>
                <option> weight loss consultation</option>
                <option> diet change consultation</option>
            </select>

            {/* preferred date picker */}
            <div className="flex gap-2">

                <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                filterDate={isAllowedDay}
                placeholderText="dd/mm/yyyy"
                dateFormat="dd/MM/yyyy"
                portalId="root"
                className="border border-[#D5DBCC] rounded-lg px-4 py-2 w-full"
            />

                <input
                type="time"
                className="border border-[#D5DBCC] rounded-lg px-4 py-2 w-full" 
                />
                
            </div>
            
            <button onClick={handleSubmit} className="border p-3 rounded-md bg-[#848F6D] text-white text-lg">
                Book Now
            </button>
            
        </div>
        </FadeUp>
        </div>

        </div>
        </>
    )
}
export default BookingForm