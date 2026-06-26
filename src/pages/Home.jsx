import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import ProductsSection from '@/components/products/ProductsSection'
import WhyUsSection from '@/components/home/WhyUsSection'
import ContactSection from '@/components/home/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
