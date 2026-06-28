import FadeUp from '../Components/FadeUp.jsx'
function Contact(){
    return(
        <div className="flex flex-col items-center justify-content gap-3 py-10 px-20  w-full">
       
       <FadeUp>
        <p className="font-bold text-2xl md:text-4xl text-cocoa text-justify">Contact Us</p>
        </FadeUp>

       
        <p className="text-gray-500" >We love our customers. Feel free to reach out during normal business hours</p>
       
        
        <FadeUp>
        <div className="flex items-start gap-3 text-gray-600 w-full p-3 border border-gray-200 rounded-2xl shadow-md">
            <span>&#128205;</span>
            <div>
                <p>Address</p>
                <p>Schofields NSW-2762</p>
            </div>
        </div>
        </FadeUp>

        <FadeUp>
        <div className="flex items-start gap-3 text-gray-600 w-full p-3 border border-gray-200 rounded-2xl shadow-md">
            <span>&#128222;</span>
            <div>
                <p>Phone</p>
                <a href="tel:+61470605451">+61 470 605 451</a>
            </div>
        </div>
        </FadeUp>

        <FadeUp>
        <div className="flex items-start gap-3 text-gray-600 w-full p-3 border border-gray-200 rounded-2xl shadow-md">
            <span>&#128231;</span>
            <div>
                <p>Email</p>
                <p>nutrianz.mk@gmail.com</p>
            </div>
        </div>
        </FadeUp>
        
        <FadeUp>
        <div className="flex items-start  gap-3 text-gray-600 w-full p-3 border border-gray-200 rounded-2xl shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
            <div>
                <p>Linkedin</p>
                <a href="https://www.linkedin.com/in/madhu-madhusmitha-krishnamurthy-a3b3921a">Madhu Krishnamurthy</a>
            </div>
        </div>
        </FadeUp>
        
        </div>
    )
}
export default Contact