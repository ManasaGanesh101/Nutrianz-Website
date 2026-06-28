
import { useState, useEffect } from "react"

function Header(){
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const navColor = scrolled ? "text-black" : "text-[#EEDEC5]"
    const underlineColor = scrolled ? "bg-black" : "bg-[#EEDEC5]"

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    

    return(
        <header className={`flex items-center justify-between px-4 py-4 md:px-10 md:py-6 fixed w-full top-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-[#EEDEC5]/80 backdrop-blur-md shadow-sm" : "bg-transparent "
        }`}>
            <div className={`font-ephesis text-5xl drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)] ${scrolled ? "text-black" : "text-[#F7F1E7] font-bold"}`} >Nutrianz</div>
            
            {/* Desktop nav existing styling */}
            <div className="hidden  items-center sm:flex sm:gap-3 md:gap-10 lg:gap-14">
                <a href="#about" className={`md:text-lg relative group pb-1  transition-colors duration-300 ${navColor}`}>
                        About
                    <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${underlineColor}`} />
                </a>
                <a href="#services" className={`md:text-lg relative group pb-1 transition-colors duration-300 ${navColor}`}>
                        Services
                    <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${underlineColor}`} />
                </a>
                <a href="#book" className={`rounded-full h-10 px-6 flex items-center justify-center font-medium transition-all duration-300 hover:scale-105
                        ${
                            scrolled
                                    ? "text-black border-1 border-black/30 bg-black/5 hover:bg-black/10"
                                    : "text-[#F7F1E7] border-1 border-white/60 bg-white/10 hover:bg-white/20"
                        }
                `}> Book an Appointment
                </a>
            </div>

            {/* Hamburger - only shows below sm */}
            <button
                className="sm:hidden text-2xl transition-transform duration-300"
                style={{ transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? "☰" : "☰"}
            </button>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="sm:hidden absolute top-full left-0 w-full bg-white flex flex-col items-center gap-6 py-6 shadow-md">
                    <p onClick={() => setMenuOpen(false)}>About</p>
                    <p onClick={() => setMenuOpen(false)}>Services</p>
                    <p onClick={() => setMenuOpen(false)}>Contact</p>
                    <p onClick={() => setMenuOpen(false)}>Book</p>
                </div>
            )}
        </header>
    )
}
export default Header