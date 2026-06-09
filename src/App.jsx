import Navbar from '@/components/Navbar.jsx'
import HeroSection from '@/components/home/HeroSection.jsx'
import ProductsSection from '@/components/products/ProductsSection.jsx'
import AboutSection from '@/components/home/AboutSection.jsx'
import ContactSection from '@/components/contact/ContactSection.jsx'
import Footer from '@/components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
