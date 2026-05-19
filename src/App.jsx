import './App.css'
import Navbar from './components/microcosmos/Navbar'
import HeroSection from './components/microcosmos/HeroSection'
import AboutSection from './components/microcosmos/AboutSection'
import GallerySection from './components/microcosmos/GallerySection'
import SpecimensSection from './components/microcosmos/SpecimensSection'
import WorldsSection from './components/microcosmos/WorldsSection'
import TechniquesSection from './components/microcosmos/TechniquesSection'
import CtaSection from './components/microcosmos/CtaSection'
import Footer from './components/microcosmos/Footer'

function App() {
  return (
    <div className="bg-[#050d12] min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <SpecimensSection />
      <WorldsSection />
      <TechniquesSection />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default App
