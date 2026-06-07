import image1 from '../assets/image1.jpg'
import Typewriter from '../Components/Typewriter.jsx'
function Intro(){
    return(
        <>
        <div className="relative">
            <img src={image1} className="w-full h-[120vh] object-cover object-center"></img>
            {/* black overlay for readability*/}<div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
                <Typewriter />
            </div>
        </div>
        
       
        </>
    )
}
export default Intro