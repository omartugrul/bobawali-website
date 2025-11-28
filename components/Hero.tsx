'use client'

import { motion } from 'framer-motion'

const badges = [
  'Houston, TX',
  'Weddings · Birthdays · Corporate Events',
  'Halal-friendly · Non-alcoholic',
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
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-bg via-white to-secondary/20 -z-10"
        style={{
          backgroundImage: 'url(/gradient-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
              Houston's First{' '}
              <span className="text-primary">South Asian Fusion</span>{' '}
              Bubble Tea Cart
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-lg md:text-xl text-text/70 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              We bring South Asian–inspired bubble tea & refreshers like mango lassi boba,
              Rooh Afza lemonade, and falooda milk tea to your events—a fun,
              non-alcoholic, halal-friendly option for everyone to enjoy.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={() => scrollToSection('#inquiry')}
                className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl shadow-lg shadow-primary/25"
              >
                Book Us for Your Event
              </button>
              <button
                onClick={() => scrollToSection('#services')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105"
              >
                View Services
              </button>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-text/80 border border-primary/10 shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero image/illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Gradient blob background */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-secondary/30 to-transparent rounded-full blur-3xl scale-150" />

              {/* Large boba cup illustration */}
              <svg
                width="300"
                height="380"
                viewBox="0 0 300 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-2xl w-64 h-80 md:w-80 md:h-96 lg:w-[300px] lg:h-[380px]"
              >
                {/* Cup body */}
                <path
                  d="M50 90 L250 90 L225 340 C225 350 215 360 205 360 L95 360 C85 360 75 350 75 340 L50 90Z"
                  fill="url(#heroGradient)"
                  stroke="#790000"
                  strokeWidth="4"
                />

                {/* Drink fill */}
                <path
                  d="M58 120 L242 120 L220 320 C220 325 215 330 210 330 L90 330 C85 330 80 325 80 320 L58 120Z"
                  fill="url(#drinkGradient)"
                />

                {/* Cup lid */}
                <ellipse cx="150" cy="90" rx="105" ry="25" fill="#790000" />
                <ellipse cx="150" cy="82" rx="95" ry="20" fill="#EAB6C9" />

                {/* Lid dome */}
                <path
                  d="M80 82 C80 60 220 60 220 82"
                  fill="#790000"
                  opacity="0.3"
                />

                {/* Straw */}
                <rect x="142" y="20" width="16" height="120" rx="8" fill="#790000" />
                <rect x="144" y="25" width="12" height="110" rx="6" fill="#C27013" />

                {/* Boba pearls */}
                <circle cx="100" cy="290" r="18" fill="#001B2E" />
                <circle cx="145" cy="310" r="18" fill="#001B2E" />
                <circle cx="190" cy="295" r="16" fill="#001B2E" />
                <circle cx="125" cy="265" r="15" fill="#001B2E" />
                <circle cx="175" cy="275" r="16" fill="#001B2E" />
                <circle cx="110" cy="320" r="14" fill="#001B2E" />
                <circle cx="170" cy="320" r="13" fill="#001B2E" />

                {/* Pearl highlights */}
                <circle cx="95" cy="285" r="4" fill="#1a3a4a" />
                <circle cx="140" cy="305" r="4" fill="#1a3a4a" />
                <circle cx="185" cy="290" r="3" fill="#1a3a4a" />

                {/* Cup shine */}
                <path
                  d="M70 100 L72 320"
                  stroke="white"
                  strokeWidth="3"
                  opacity="0.4"
                  strokeLinecap="round"
                />

                <defs>
                  <linearGradient id="heroGradient" x1="150" y1="90" x2="150" y2="360" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFFFF" />
                    <stop offset="1" stopColor="#FFF0E8" />
                  </linearGradient>
                  <linearGradient id="drinkGradient" x1="150" y1="120" x2="150" y2="330" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EAB6C9" />
                    <stop offset="0.5" stopColor="#C27013" />
                    <stop offset="1" stopColor="#790000" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full opacity-60 blur-sm"
              />
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-tertiary-accent to-secondary rounded-full opacity-50 blur-sm"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
