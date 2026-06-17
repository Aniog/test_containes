import Navbar from '@/components/home/Navbar'
import HeroSection from '@/components/home/HeroSection'
import ProductsSection from '@/components/products/ProductsSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import ContactSection from '@/components/home/ContactSection'
import Footer from '@/components/home/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
