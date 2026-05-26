import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import GallerySection from './components/GallerySection'
import OrganismsSection from './components/OrganismsSection'
import TechniquesSection from './components/TechniquesSection'
import EcosystemsSection from './components/EcosystemsSection'
import FactsSection from './components/FactsSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#050d1a] min-h-screen">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <GallerySection />
      <OrganismsSection />
      <TechniquesSection />
      <EcosystemsSection />
      <FactsSection />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default App
