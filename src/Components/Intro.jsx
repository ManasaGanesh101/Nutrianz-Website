
import Desktopbg from '../assets/bg.jpeg'
import bgMobile from '../assets/bg-mobile.png'
import Typewriter from '../Components/Typewriter.jsx'

function Intro(){
    return(
        <>
        <div className="relative ">
            <img src={Desktopbg} className="hidden md:block w-full h-[120vh] object-cover object-center"></img>
            <img src={bgMobile} className="block md:hidden w-full h-[120vh] object-cover"></img>
            <div className="absolute inset-0 bg-gradient-to-b from-amber-950/70 via-amber-900/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
                <Typewriter />
            </div>
        </div>
        </>
    )
}
export default Intro