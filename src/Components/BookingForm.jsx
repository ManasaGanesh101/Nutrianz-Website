import Booking from '../Components/Booking.jsx'
import FadeUp  from '../Components/FadeUp.jsx'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import ThankYouModal from '../Components/ThankYouModal.jsx'
import { useState } from "react"
import { useEffect } from "react"



function BookingForm(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [service, setService] = useState("")
    const [time, setTime] = useState("")
    const [loading, setLoading] = useState(false)
    const [date, setDate] = useState(null)
    const [bookedSlots, setBookedSlots] = useState([])
    const [loadingSlots, setLoadingSlots] = useState(true)

    useEffect(() => {
    const fetchBookings = async () => {
        try {
        const res = await fetch("/api/getBookings")
        const data = await res.json()
        setBookedSlots(data.bookings)
        } catch (error) {
        console.error("Failed to fetch bookings", error)
        } finally {
        setLoadingSlots(false)
        }
    }
    fetchBookings()
    }, [])

    const generateSlots = () => {
    const slots = []
    let hour = 9
    let minute = 0
    while (hour < 17 || (hour === 16 && minute === 15)) {
        const h = hour.toString().padStart(2, "0")
        const m = minute.toString().padStart(2, "0")
        const value = `${h}:${m}`
        const period = hour < 12 ? "AM" : "PM"
        const displayHour = hour > 12 ? hour - 12 : hour
        const label = `${displayHour}:${m} ${period}`
        slots.push({ value, label })
        minute += 45
        if (minute >= 60) {
        minute -= 60
        hour += 1
        }
    }
    return slots
    }

    const isSlotBooked = (slotTime) => {
    if (!date) return false
    const selectedDate = date.toISOString()
    return bookedSlots.some(
        (b) => b.date === selectedDate && b.time === slotTime
    )
    }

    const isDayFullyBooked = (day) => {
    const slots = generateSlots()
    const dayISO = day.toISOString()
    const bookedOnDay = bookedSlots.filter((b) => b.date === dayISO)
    return bookedOnDay.length >= slots.length
    }

    const isAllowedDay = (date) => {
        const day = date.getDay()
        return day === 1 || day === 2 || day === 6
    }

    const [showModal, setShowModal] = useState(false)
    const handleSubmit = async () => {
    if (!firstName || !lastName || !email || !phone || !service || !date || !time) {
        alert("Please fill in all fields before booking.")
        return
    }

    const timeValue = parseInt(time.replace(":", ""))
    if (timeValue < 900 || timeValue > 1700) {
        alert("Please select a time between 9:00 AM and 5:00 PM.")
        return
    }

    setLoading(true)

    try {
        const response = await fetch("/api/book", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
                service,
                date: date.toLocaleDateString("en-CA"),
                time,
            }),
        })

        if (!response.ok) throw new Error("Booking failed")
        setShowModal(true)

    } catch (error) {
        alert("Something went wrong. Please try again.")
        console.error(error)
    } finally {
        setLoading(false)
    }
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border border-[#D5DBCC] rounded-lg px-4 py-2 w-full text-sm"
                    />
                    <input
                    type="text"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border border-[#D5DBCC] rounded-lg px-4 py-2 w-full text-sm" 
                    />

            </div>
            <div className="flex gap-2">
                <input
                type="email"
                placeholder="JohnDoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-[#D5DBCC] rounded-lg px-4 py-2 w-full text-xs" 
    
                />

                <input
                type="tel"
                placeholder="+61 925623458"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-[#D5DBCC] rounded-lg px-4 py-2 w-full text-sm" 
                />

            </div>
            {/* service input */}
                <select defaultValue="" 
                className="border border-[#D5DBCC] rounded-lg px-4 py-2" 
                value={service}
                onChange={(e) => setService(e.target.value)}>
                    <option value="" disabled>Select a service</option>
                    <option value="Initial Consultation">Initial Consultation</option>
                    <option value="Personalised Meal Planning">Personalised Meal Planning</option>
                    <option value="Weight Management">Weight Management</option>
                    <option value="Disease-Specific Nutrition">Disease-Specific Nutrition</option>
                    <option value="Corporate Wellness Talks">Corporate Wellness Talks</option>
                </select>

            {/* preferred date picker */}
            <div className="flex gap-2">

                <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                filterDate={(day) => isAllowedDay(day) && !isDayFullyBooked(day)}
                dateFormat="dd/MM/yyyy"
                className="border border-[#D5DBCC] rounded-lg px-4 py-2 w-full"
            />

                <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="border border-[#D5DBCC] rounded-lg px-4 py-2 w-full"
                disabled={!date}
                >
                <option value="" disabled>Select a time</option>
                {generateSlots().map((slot) => (
                    <option
                    key={slot.value}
                    value={slot.value}
                    disabled={isSlotBooked(slot.value)}
                    >
                    {isSlotBooked(slot.value) ? `${slot.label} (Booked)` : slot.label}
                    </option>
                ))}
                </select>
                
            </div>
            
            <button 
                onClick={handleSubmit} 
                disabled={loading}
                className="border p-3 rounded-md bg-[#848F6D] text-white text-lg disabled:opacity-50 flex items-center justify-center gap-2"
            >
                {loading ? (
                    <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Booking...
                    </>
                ) : "Book Now"}
            </button>
            
        </div>
        </FadeUp>
        </div>

        </div>
        </>
    )
}
export default BookingForm

