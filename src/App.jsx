import './App.css'
import Navbar from './components/microcosmos/Navbar'
import HeroSection from './components/microcosmos/HeroSection'
import IntroSection from './components/microcosmos/IntroSection'
import GallerySection from './components/microcosmos/GallerySection'
import OrganismsSection from './components/microcosmos/OrganismsSection'
import WorldsSection from './components/microcosmos/WorldsSection'
import StatsSection from './components/microcosmos/StatsSection'
import Footer from './components/microcosmos/Footer'

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <GallerySection />
      <OrganismsSection />
      <WorldsSection />
      <StatsSection />
      <Footer />
    </div>
  )
}

export default App
