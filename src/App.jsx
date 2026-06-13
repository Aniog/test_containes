import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import ProductsSection from './components/sections/ProductsSection'
import AboutSection from './components/sections/AboutSection'
import CTASection from './components/sections/CTASection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
