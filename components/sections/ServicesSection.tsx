'use client'

import { motion } from 'framer-motion'
import { services } from '@/content/services'

export default function ServicesSection() {
  const scrollToInquiry = () => {
    const element = document.querySelector('#inquiry')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
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
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            From intimate gatherings to large corporate events, we bring the boba bar to you.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-gradient-to-br from-bg to-white rounded-2xl p-6 lg:p-8 border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text/70 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Perfect for list */}
              <div className="pt-4 border-t border-primary/10">
                <p className="text-sm font-medium text-primary mb-2">Perfect for:</p>
                <div className="flex flex-wrap gap-2">
                  {service.perfectFor.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 bg-primary/5 text-primary rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
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
            className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl shadow-lg shadow-primary/25"
          >
            Check Date Availability
          </button>
        </motion.div>
      </div>
    </section>
  )
}
