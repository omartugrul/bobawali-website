'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScWsa6uTG35rSlNw7PHiWKxZDdPnFQ2Bh0EP8IdGBpedgRr8Q/viewform?embedded=true'
const GOOGLE_FORM_DIRECT_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScWsa6uTG35rSlNw7PHiWKxZDdPnFQ2Bh0EP8IdGBpedgRr8Q/viewform'

interface InquirySectionProps {
  onSectionViewed?: () => void
  onFormLoaded?: () => void
  onFallbackClicked?: () => void
}

export default function InquirySection({
  onSectionViewed,
  onFormLoaded,
  onFallbackClicked,
}: InquirySectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [formLoaded, setFormLoaded] = useState(false)

  // Track when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onSectionViewed?.()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [onSectionViewed])

  const handleFormLoad = () => {
    setFormLoaded(true)
    onFormLoaded?.()
  }

  const handleFallbackClick = () => {
    onFallbackClicked?.()
  }

  return (
    <section
      ref={sectionRef}
      id="inquiry"
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-bg to-secondary/5 -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
            Book <span className="text-primary">Boba Wali</span> for Your Event
          </h2>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            Tell us about your event and we'll get back to you within 24 hours
            with availability and options.
          </p>
        </motion.div>

        {/* Form container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-3xl shadow-xl border border-primary/10 overflow-hidden">
            {/* Form header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-white text-center">
              <h3 className="text-xl font-semibold">Event Inquiry Form</h3>
              <p className="text-white/80 text-sm mt-1">
                Fill out the form below and we'll be in touch soon!
              </p>
            </div>

            {/* Google Form embed */}
            <div className="relative">
              {!formLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-bg">
                  <div className="text-center">
                    <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4" />
                    <p className="text-text/50">Loading form...</p>
                  </div>
                </div>
              )}

              <iframe
                src={GOOGLE_FORM_URL}
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                onLoad={handleFormLoad}
                className="w-full min-h-[600px] md:min-h-[800px]"
                title="Boba Wali Event Inquiry Form"
              >
                Loading...
              </iframe>
            </div>

            {/* Fallback link */}
            <div className="p-4 bg-bg/50 text-center border-t border-primary/10">
              <Link
                href={GOOGLE_FORM_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleFallbackClick}
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors"
              >
                <span>Having trouble? Open the form in a new tab</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-text/60 text-sm">
            Prefer to reach out directly?{' '}
            <Link
              href="https://www.instagram.com/bobawali.htx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-medium"
            >
              DM us on Instagram
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
