import Navbar from '@/components/home/Navbar'
import HeroSection from '@/components/home/HeroSection'
import ProductsSection from '@/components/products/ProductsSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import AboutSection from '@/components/home/AboutSection'
import ContactSection from '@/components/contact/ContactSection'
import Footer from '@/components/home/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
