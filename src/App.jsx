import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import ExploreSection from './components/ExploreSection'
import GallerySection from './components/GallerySection'
import SpecimensSection from './components/SpecimensSection'
import EcosystemSection from './components/EcosystemSection'
import PhotoGridSection from './components/PhotoGridSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#050d1a] min-h-screen">
      <NavBar />
      <HeroSection />
      <ExploreSection />
      <GallerySection />
      <SpecimensSection />
      <EcosystemSection />
      <PhotoGridSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
