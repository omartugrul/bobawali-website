import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Preloader from '@/components/Preloader'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Boba Wali – South Asian Fusion Bubble Tea Cart & Catering in Houston',
  description: 'Houston\'s first South Asian fusion bubble tea & refreshers cart. Book Boba Wali for weddings, corporate events, birthdays, and more. Halal-friendly, non-alcoholic drinks featuring mango lassi boba, Rooh Afza lemonade, and falooda milk tea.',
  openGraph: {
    title: 'Boba Wali – South Asian Fusion Bubble Tea Cart & Catering in Houston',
    description: 'Houston\'s first South Asian fusion bubble tea & refreshers cart. Book us for weddings, corporate events, birthdays, and more.',
    url: 'https://bobawali.com',
    siteName: 'Boba Wali',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Boba Wali - South Asian Fusion Bubble Tea Cart',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boba Wali – South Asian Fusion Bubble Tea Cart',
    description: 'Houston\'s first South Asian fusion bubble tea & refreshers cart.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Preloader />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
