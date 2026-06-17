import './App.css'
import Navbar from './components/home/Navbar.jsx'
import HeroSection from './components/home/HeroSection.jsx'
import ProductsSection from './components/home/ProductsSection.jsx'
import FeaturesSection from './components/home/FeaturesSection.jsx'
import ContactSection from './components/home/ContactSection.jsx'
import Footer from './components/home/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
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
