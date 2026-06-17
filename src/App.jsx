import './App.css'
import Navbar from './components/home/Navbar'
import HeroSection from './components/home/HeroSection'
import ProductsSection from './components/home/ProductsSection'
import AboutSection from './components/home/AboutSection'
import ContactSection from './components/home/ContactSection'
import Footer from './components/home/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
