import HeroSection from './components/microcosmos/HeroSection'
import AboutSection from './components/microcosmos/AboutSection'
import GallerySection from './components/microcosmos/GallerySection'
import OrganismsSection from './components/microcosmos/OrganismsSection'
import ShowcaseSection from './components/microcosmos/ShowcaseSection'
import FactsSection from './components/microcosmos/FactsSection'
import TechniquesSection from './components/microcosmos/TechniquesSection'
import FooterSection from './components/microcosmos/FooterSection'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <OrganismsSection />
      <ShowcaseSection />
      <FactsSection />
      <TechniquesSection />
      <FooterSection />
    </div>
  )
}

export default App

