import './App.css'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/home/HeroSection'
import AboutSection from './components/home/AboutSection'
import ProductsSection from './components/home/ProductsSection'
import FeaturesSection from './components/home/FeaturesSection'
import ContactSection from './components/home/ContactSection'
import Footer from './components/layout/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
