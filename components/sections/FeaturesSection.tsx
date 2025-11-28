'use client'

import { motion } from 'framer-motion'
import { newsFeatures } from '@/content/features'
import Link from 'next/link'

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Gradient band background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-bg to-secondary/5 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
            <span className="text-primary">As Seen In</span>
          </h2>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            We've been featured in some amazing publications sharing our story.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {newsFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link
                href={feature.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-primary/10 hover:border-primary/20 transition-all duration-300 h-full">
                  {/* Outlet name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {feature.outlet.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-text text-lg">{feature.outlet}</p>
                    </div>
                  </div>

                  {/* Article title */}
                  <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text/60 mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Read article link */}
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    <span>Read article</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
