import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import {
  ServicesSection,
  InquirySection,
  LogoCarousel,
} from '@/components/sections'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Social Proof - Logo Carousel */}
      <LogoCarousel />

      {/* Services/Event Types Section */}
      <ServicesSection />

      {/* Inquiry Section */}
      <InquirySection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
