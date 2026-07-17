import Navbar from './components/microcosmos/Navbar'
import HeroSection from './components/microcosmos/HeroSection'
import GallerySection from './components/microcosmos/GallerySection'
import FeaturesSection from './components/microcosmos/FeaturesSection'
import ShowcaseSection from './components/microcosmos/ShowcaseSection'
import FactsSection from './components/microcosmos/FactsSection'
import EnvironmentsSection from './components/microcosmos/EnvironmentsSection'
import BannerSection from './components/microcosmos/BannerSection'
import Footer from './components/microcosmos/Footer'

function App() {
  return (
    <div className="min-h-screen bg-deep-dark text-text-primary font-sans">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <FeaturesSection />
      <ShowcaseSection />
      <BannerSection />
      <EnvironmentsSection />
      <FactsSection />
      <Footer />
    </div>
  )
}

export default App
