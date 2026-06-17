import './App.css'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/home/HeroSection'
import ProductsSection from './components/home/ProductsSection'
import AboutSection from './components/home/AboutSection'
import ContactSection from './components/home/ContactSection'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
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

export default App
