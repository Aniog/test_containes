import Navbar from './components/Navbar'
import HeroSection from './components/home/HeroSection'
import ProductsSection from './components/home/ProductsSection'
import FeaturesSection from './components/home/FeaturesSection'
import AboutSection from './components/home/AboutSection'
import ContactSection from './components/home/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg-light">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
