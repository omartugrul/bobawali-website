'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const MENU_URL = process.env.NEXT_PUBLIC_MENU_URL || 'https://drive.google.com/file/d/1xVeqLmEDA5f0F1tLwyscPfAo7q4f8fPE/view'

const eventTypes = [
  { name: 'Weddings & Engagements', description: 'Mehndi nights, sangeets, receptions' },
  { name: 'Birthdays & Celebrations', description: 'Sweet 16s, graduations, baby showers' },
  { name: 'Corporate Events', description: 'Team building, office parties, launches' },
  { name: 'University Events', description: 'Cultural nights, org events, fundraisers' },
  { name: 'Festivals & Markets', description: 'Pop-ups, food festivals, community events' },
  { name: 'Private Parties', description: 'House parties, get-togethers, iftars' },
]

export default function ServicesSection() {
  const scrollToInquiry = () => {
    const element = document.querySelector('#inquiry')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-3">
            Events We <span className="text-primary">Cater</span>
          </h2>
          <p className="text-text/60 max-w-lg mx-auto">
            From intimate gatherings to large celebrations—we bring the boba bar to you.
          </p>
        </motion.div>

        {/* Event type grid - compact */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {eventTypes.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gradient-to-br from-bg to-white rounded-xl p-4 border border-primary/10 hover:border-primary/20 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-text text-sm mb-1">{event.name}</h3>
              <p className="text-text/50 text-xs">{event.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button
            onClick={scrollToInquiry}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl shadow-lg shadow-primary/25"
          >
            Check Availability
          </button>
          <p className="text-text/40 text-xs mt-3">
            We respond within 24 hours
          </p>
          <Link
            href={MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-sm mt-4 transition-colors"
          >
            Curious about our drinks? View our menu
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
