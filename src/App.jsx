import './App.css'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import HeroSection from './components/hero/HeroSection'
import ProductsSection from './components/products/ProductsSection'
import FeaturesSection from './components/features/FeaturesSection'
import ContactSection from './components/contact/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
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
