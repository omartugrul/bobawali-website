import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import {
  AboutSection,
  ServicesSection,
  MenuSection,
  ClientsSection,
  FeaturesSection,
  GallerySection,
  InquirySection,
} from '@/components/sections'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Menu Section */}
      <MenuSection />

      {/* Clients Section */}
      <ClientsSection />

      {/* News Features Section */}
      <FeaturesSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Inquiry Section */}
      <InquirySection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
