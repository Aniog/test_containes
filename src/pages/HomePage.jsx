import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import ProductsSection from '@/components/home/ProductsSection'
import WhyUsSection from '@/components/home/WhyUsSection'
import ApplicationsSection from '@/components/home/ApplicationsSection'
import ContactSection from '@/components/home/ContactSection'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <WhyUsSection />
        <ApplicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
