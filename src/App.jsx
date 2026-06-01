import NavBar from './components/microcosmos/NavBar'
import HeroSection from './components/microcosmos/HeroSection'
import IntroSection from './components/microcosmos/IntroSection'
import GallerySection from './components/microcosmos/GallerySection'
import SpecimensSection from './components/microcosmos/SpecimensSection'
import WorldsSection from './components/microcosmos/WorldsSection'
import StatsSection from './components/microcosmos/StatsSection'
import FooterSection from './components/microcosmos/FooterSection'

function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <NavBar />
      <HeroSection />
      <IntroSection />
      <GallerySection />
      <SpecimensSection />
      <WorldsSection />
      <StatsSection />
      <FooterSection />
    </div>
  )
}

export default App
