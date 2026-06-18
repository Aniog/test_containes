import './App.css'
import NavBar from './components/microcosmos/NavBar'
import HeroSection from './components/microcosmos/HeroSection'
import ExploreSection from './components/microcosmos/ExploreSection'
import GallerySection from './components/microcosmos/GallerySection'
import SpecimensSection from './components/microcosmos/SpecimensSection'
import StatsShowcaseSection from './components/microcosmos/StatsShowcaseSection'
import TechniquesSection from './components/microcosmos/TechniquesSection'
import ScienceSection from './components/microcosmos/ScienceSection'
import ContactSection from './components/microcosmos/ContactSection'
import Footer from './components/microcosmos/Footer'

function App() {
  return (
    <div className="bg-[#050d1a] min-h-screen">
      <NavBar />
      <HeroSection />
      <ExploreSection />
      <GallerySection />
      <SpecimensSection />
      <StatsShowcaseSection />
      <TechniquesSection />
      <ScienceSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
