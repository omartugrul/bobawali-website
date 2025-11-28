'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { clients } from '@/content/clients'

export default function LogoCarousel() {
  // Double the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients]

  return (
    <section className="py-12 bg-white overflow-hidden relative">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-text/50 text-sm font-medium mb-8 uppercase tracking-wider px-4"
      >
        Trusted by amazing brands & organizations
      </motion.p>

      {/* Gradient fades on edges - full screen width */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrolling logos */}
      <motion.div
        className="flex gap-6 items-center"
        animate={{
          x: [0, -50 * clients.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {duplicatedClients.map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="flex-shrink-0 h-16 flex items-center"
          >
            {client.logo ? (
              <Image
                src={client.logo}
                alt={client.name}
                width={150}
                height={64}
                className="h-14 w-auto object-contain max-w-[180px]"
              />
            ) : (
              <span className="text-text/40 font-medium text-sm whitespace-nowrap">
                {client.name}
              </span>
            )}
          </div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-text/40 text-xs mt-6"
      >
        and more...
      </motion.p>
    </section>
  )
}
