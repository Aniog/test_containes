import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import GallerySection from './components/GallerySection'
import OrganismsSection from './components/OrganismsSection'
import TechniquesSection from './components/TechniquesSection'
import SpotlightSection from './components/SpotlightSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-950 font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <OrganismsSection />
      <TechniquesSection />
      <SpotlightSection />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default App
