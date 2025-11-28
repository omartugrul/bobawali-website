'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4"
            >
              <span className="w-2 h-2 bg-primary rounded-full" />
              Houston, TX
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text leading-tight mb-4">
              South Asian Fusion{' '}
              <span className="text-primary">Bubble Tea</span>{' '}
              for Your Event
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-base md:text-lg text-text/70 mb-6 max-w-xl mx-auto lg:mx-0"
            >
              Unique flavors like mango lassi boba, gulab jamun milk tea & falooda—halal-friendly, non-alcoholic drinks that make your event unforgettable.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6"
            >
              <button
                onClick={() => scrollToSection('#inquiry')}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl shadow-lg shadow-primary/25"
              >
                Book Your Event
              </button>
              <button
                onClick={() => scrollToSection('#services')}
                className="border-2 border-primary/30 text-primary hover:border-primary hover:bg-primary/5 px-6 py-3 rounded-full font-semibold transition-all"
              >
                See Event Types
              </button>
            </motion.div>

            {/* Top drinks preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
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

          {/* Hero image - using the drinks image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Gradient blob background */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-secondary/30 to-transparent rounded-full blur-3xl scale-125" />

              <Image
                src="/Drinks.png"
                alt="Boba Wali Drinks Menu"
                width={500}
                height={600}
                className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
