
import { useState, useEffect } from "react"

function Header(){
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    
    return(
        <header className={`flex items-center justify-between px-4 py-4 md:px-10 md:py-6 fixed w-full top-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}>
            <div className="font-ephesis text-4xl text-black">Nutrianz</div>
            
            {/* Desktop nav - your existing styling */}
            <div className="hidden sm:flex sm:gap-3 md:gap-8 lg:gap-10">
                <a href="#about" className="relative group pb-1 text-black transition-colors duration-300">
                        About
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
                </a>
                <a href="#services" className="relative group pb-1 text-black transition-colors duration-300">
                        Services
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
                </a>
                <a href="#contact" className="relative group pb-1 text-black transition-colors duration-300">
                         Contact
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
                </a>
                <a href="#book" className="relative group pb-1 text-black transition-colors duration-300">
                        Book
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
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