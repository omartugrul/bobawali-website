'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
              About <span className="text-primary">Boba Wali</span>
            </h2>

            <div className="space-y-4 text-lg text-text/70">
              <p>
                We're Houston's first South Asian fusion bubble tea & refreshers cart,
                bringing the vibrant flavors of South Asia to your celebrations.
              </p>

              <p>
                Boba Wali was created with a simple mission: to give people—especially
                non-drinkers and those who observe halal—something exciting and delicious
                to sip at weddings, parties, and corporate events.
              </p>

              <p>
                Our menu features unique drinks like <span className="text-primary font-medium">mango lassi boba</span>,{' '}
                <span className="text-primary font-medium">Rooh Afza lemonade boba</span>, and{' '}
                <span className="text-primary font-medium">falooda milk tea</span>—familiar
                flavors reimagined in refreshing new ways.
              </p>

              <p>
                Whether it's a mehndi, a birthday bash, or a corporate lunch, we roll up
                with our cart and crew to create a fun, memorable experience for everyone.
              </p>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Gradient background blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-orange-100 rounded-3xl blur-2xl scale-105" />

              {/* Placeholder for cart/drinks image */}
              <div className="relative bg-gradient-to-br from-white to-pink-50 rounded-3xl p-8 shadow-xl border border-primary/10">
                <div className="aspect-square flex items-center justify-center">
                  {/* Decorative illustration */}
                  <svg
                    width="280"
                    height="280"
                    viewBox="0 0 280 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full max-w-[280px]"
                  >
                    {/* Cart base */}
                    <rect x="40" y="160" width="200" height="80" rx="10" fill="#c42787" />
                    <rect x="50" y="150" width="180" height="20" rx="5" fill="#ee248b" />

                    {/* Wheels */}
                    <circle cx="80" cy="250" r="20" fill="#2B1A14" />
                    <circle cx="200" cy="250" r="20" fill="#2B1A14" />
                    <circle cx="80" cy="250" r="8" fill="#A02B80" />
                    <circle cx="200" cy="250" r="8" fill="#A02B80" />

                    {/* Umbrella */}
                    <path
                      d="M140 30 L140 80"
                      stroke="#A02B80"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M60 80 Q140 20 220 80"
                      fill="#ee248b"
                      stroke="#c42787"
                      strokeWidth="3"
                    />
                    <ellipse cx="140" cy="80" rx="80" ry="15" fill="#ee248b" />

                    {/* Boba cups on cart */}
                    <rect x="70" y="120" width="25" height="35" rx="3" fill="#FFF7F0" stroke="#c42787" strokeWidth="2" />
                    <rect x="110" y="115" width="30" height="40" rx="3" fill="#FFF7F0" stroke="#c42787" strokeWidth="2" />
                    <rect x="155" y="120" width="25" height="35" rx="3" fill="#FFF7F0" stroke="#c42787" strokeWidth="2" />
                    <rect x="195" y="125" width="22" height="30" rx="3" fill="#FFF7F0" stroke="#c42787" strokeWidth="2" />

                    {/* Straws */}
                    <rect x="80" y="105" width="4" height="25" rx="2" fill="#A02B80" />
                    <rect x="122" y="98" width="4" height="28" rx="2" fill="#A02B80" />
                    <rect x="165" y="105" width="4" height="25" rx="2" fill="#A02B80" />
                    <rect x="203" y="110" width="4" height="22" rx="2" fill="#A02B80" />

                    {/* Decorative elements */}
                    <circle cx="60" cy="100" r="8" fill="#ee248b" opacity="0.6" />
                    <circle cx="220" cy="110" r="6" fill="#ee248b" opacity="0.6" />
                    <circle cx="100" cy="60" r="5" fill="#A02B80" opacity="0.4" />
                    <circle cx="180" cy="55" r="4" fill="#A02B80" opacity="0.4" />
                  </svg>
                </div>

                {/* Caption */}
                <p className="text-center text-sm text-text/50 mt-4">
                  Replace with actual cart photo
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
