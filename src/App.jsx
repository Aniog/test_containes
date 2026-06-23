import './App.css'
import NavBar from './components/microcosmos/NavBar'
import HeroSection from './components/microcosmos/HeroSection'
import ExploreSection from './components/microcosmos/ExploreSection'
import GallerySection from './components/microcosmos/GallerySection'
import WorldsSection from './components/microcosmos/WorldsSection'
import ScienceSection from './components/microcosmos/ScienceSection'
import AboutSection from './components/microcosmos/AboutSection'
import Footer from './components/microcosmos/Footer'

function App() {
  return (
    <div className="bg-[#050a0f] min-h-screen">
      <NavBar />
      <HeroSection />
      <ExploreSection />
      <GallerySection />
      <WorldsSection />
      <ScienceSection />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default App
