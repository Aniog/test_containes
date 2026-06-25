import './App.css'
import HeroSection from './components/microcosmos/HeroSection'
import AboutSection from './components/microcosmos/AboutSection'
import GallerySection from './components/microcosmos/GallerySection'
import OrganismsSection from './components/microcosmos/OrganismsSection'
import ShowcaseSection from './components/microcosmos/ShowcaseSection'
import TechniquesSection from './components/microcosmos/TechniquesSection'
import FullWidthBanner from './components/microcosmos/FullWidthBanner'
import MosaicSection from './components/microcosmos/MosaicSection'
import FooterSection from './components/microcosmos/FooterSection'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <FullWidthBanner />
      <OrganismsSection />
      <ShowcaseSection />
      <TechniquesSection />
      <MosaicSection />
      <FooterSection />
    </div>
  )
}

export default App
