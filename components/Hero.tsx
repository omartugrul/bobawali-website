'use client'

import { motion } from 'framer-motion'

const topDrinks = [
  { name: 'Mango Lassi', color: 'bg-yellow-400' },
  { name: 'Gulab Jamun Milk Tea', color: 'bg-amber-600' },
  { name: 'Falooda Milk Tea', color: 'bg-pink-300' },
]

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center relative overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-white to-secondary/20 -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text leading-tight mb-4">
            Your Event Deserves{' '}
            <span className="text-shimmer">Better Boba</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-base md:text-lg text-text/70 mb-6 max-w-xl mx-auto"
          >
            We bring South Asian fusion drinks to Houston weddings, parties & corporate events. Non-alcoholic. Unforgettable.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mb-6"
          >
            <button
              onClick={() => scrollToSection('#inquiry')}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl shadow-lg shadow-primary/25"
            >
              Book Your Event
            </button>
          </motion.div>

          {/* Top drinks preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            <span className="text-text/50 text-sm">Fan favorites:</span>
            {topDrinks.map((drink, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-sm text-text/70"
              >
                <span className={`w-2 h-2 rounded-full ${drink.color}`} />
                {drink.name}
                {i < topDrinks.length - 1 && <span className="text-text/30 ml-1">·</span>}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
