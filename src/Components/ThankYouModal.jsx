import { motion, AnimatePresence } from "framer-motion"
import { IconHeartHandshake } from '@tabler/icons-react'

function ThankYouModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* modal - drops from top */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-16 z-50 flex flex-col items-center gap-6 shadow-xl max-w-lg w-full mx-4"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="w-20 h-20 rounded-full bg-[#f0f5f0] flex items-center justify-center">
              <IconHeartHandshake size={40} color="#a8bfa8" />
            </div>
            <p className="font-ephesis text-5xl text-gray-700">Thank You!</p>
            <p className="text-gray-500 text-center font-times text-lg leading-relaxed">
              Your appointment request has been received. Madhu will be in touch with you shortly!
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-8 py-3 rounded-full bg-[#a8bfa8] text-white hover:bg-[#8fa88f] transition-colors"
            >
              Close
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ThankYouModal