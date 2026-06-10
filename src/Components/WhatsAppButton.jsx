import { useState } from "react"

function WhatsAppButton() {
    const phoneNumber = "61470605451"
    const message = encodeURIComponent("Hi Madhu, I'd like to enquire about a booking!")
    const url = `https://wa.me/${phoneNumber}?text=${message}`
    const [hovered, setHovered] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
            {hovered && (
                <div className="bg-white rounded-2xl shadow-xl p-4 w-56 border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="bg-[#25D366] rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-4 h-4">
                                <path d="M16 0C7.164 0 0 7.164 0 16c0 2.823.736 5.476 2.027 7.788L.057 31.943a.5.5 0 00.6.6l8.155-1.97A15.93 15.93 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 01-6.771-1.854l-.486-.29-5.026 1.214 1.237-4.902-.318-.504A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.307-9.907c-.4-.2-2.365-1.166-2.731-1.3-.366-.133-.633-.2-.9.2-.266.4-1.033 1.3-1.266 1.566-.233.267-.466.3-.866.1-.4-.2-1.688-.623-3.215-1.984-1.188-1.06-1.99-2.369-2.223-2.769-.233-.4-.025-.616.175-.815.18-.18.4-.466.6-.7.2-.233.266-.4.4-.666.133-.267.066-.5-.034-.7-.1-.2-.9-2.168-1.233-2.968-.324-.778-.655-.672-.9-.684-.233-.011-.5-.014-.766-.014-.267 0-.7.1-1.067.5-.366.4-1.4 1.366-1.4 3.332s1.433 3.866 1.633 4.132c.2.267 2.82 4.305 6.833 6.035.955.412 1.7.658 2.281.842.958.305 1.83.262 2.52.159.768-.114 2.365-.967 2.699-1.9.333-.933.333-1.733.233-1.9-.1-.167-.366-.267-.766-.467z"/>
                            </svg>
                        </div>
                        <span className="font-semibold text-sm text-gray-800">Chat with Madhu</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">Drop us a line!</p>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center bg-[#25D366] text-white text-xs rounded-lg py-2 hover:bg-[#1ebe5d] transition-colors"
                    >
                        Start Chat
                    </a>
                </div>
            )}
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6">
                    <path d="M16 0C7.164 0 0 7.164 0 16c0 2.823.736 5.476 2.027 7.788L.057 31.943a.5.5 0 00.6.6l8.155-1.97A15.93 15.93 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 01-6.771-1.854l-.486-.29-5.026 1.214 1.237-4.902-.318-.504A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.307-9.907c-.4-.2-2.365-1.166-2.731-1.3-.366-.133-.633-.2-.9.2-.266.4-1.033 1.3-1.266 1.566-.233.267-.466.3-.866.1-.4-.2-1.688-.623-3.215-1.984-1.188-1.06-1.99-2.369-2.223-2.769-.233-.4-.025-.616.175-.815.18-.18.4-.466.6-.7.2-.233.266-.4.4-.666.133-.267.066-.5-.034-.7-.1-.2-.9-2.168-1.233-2.968-.324-.778-.655-.672-.9-.684-.233-.011-.5-.014-.766-.014-.267 0-.7.1-1.067.5-.366.4-1.4 1.366-1.4 3.332s1.433 3.866 1.633 4.132c.2.267 2.82 4.305 6.833 6.035.955.412 1.7.658 2.281.842.958.305 1.83.262 2.52.159.768-.114 2.365-.967 2.699-1.9.333-.933.333-1.733.233-1.9-.1-.167-.366-.267-.766-.467z"/>
                </svg>
            </a>
        </div>
    )
}

export default WhatsAppButton