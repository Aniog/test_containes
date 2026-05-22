import Navbar from './components/microcosmos/Navbar'
import HeroSection from './components/microcosmos/HeroSection'
import AboutSection from './components/microcosmos/AboutSection'
import SpecimenSection from './components/microcosmos/SpecimenSection'
import GallerySection from './components/microcosmos/GallerySection'
import WorldsSection from './components/microcosmos/WorldsSection'
import TechniqueSection from './components/microcosmos/TechniqueSection'
import FactsSection from './components/microcosmos/FactsSection'
import CtaSection from './components/microcosmos/CtaSection'
import Footer from './components/microcosmos/Footer'

function App() {
  return (
    <div className="bg-[#050a0e] min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SpecimenSection />
        <GallerySection />
        <WorldsSection />
        <TechniqueSection />
        <FactsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
