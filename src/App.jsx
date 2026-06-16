import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/home/Hero'
import ProductsSection from './components/products/ProductsSection'
import FeaturesSection from './components/home/FeaturesSection'
import AboutSection from './components/home/AboutSection'
import CtaSection from './components/home/CtaSection'
import ContactSection from './components/home/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductsSection />
      <FeaturesSection />
      <AboutSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
