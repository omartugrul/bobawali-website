'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAtInquiry, setIsAtInquiry] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (300px)
      setIsVisible(window.scrollY > 300)

      // Hide when near the inquiry section
      const inquiry = document.querySelector('#inquiry')
      if (inquiry) {
        const rect = inquiry.getBoundingClientRect()
        setIsAtInquiry(rect.top < window.innerHeight && rect.bottom > 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToInquiry = () => {
    const element = document.querySelector('#inquiry')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && !isAtInquiry && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-100 z-50 md:hidden"
        >
          <button
            onClick={scrollToInquiry}
            className="w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-primary/25"
          >
            Book Your Event
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
