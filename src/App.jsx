import './App.css'
import Navbar from './components/microcosmos/Navbar'
import HeroSection from './components/microcosmos/HeroSection'
import AboutSection from './components/microcosmos/AboutSection'
import GallerySection from './components/microcosmos/GallerySection'
import OrganismsSection from './components/microcosmos/OrganismsSection'
import FactsSection from './components/microcosmos/FactsSection'
import Footer from './components/microcosmos/Footer'

function App() {
  return (
    <div className="bg-[#050810] min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <OrganismsSection />
      <FactsSection />
      <Footer />
    </div>
  )
}

export default App
