import HeroSection from './components/microcosmos/HeroSection'
import AboutSection from './components/microcosmos/AboutSection'
import GallerySection from './components/microcosmos/GallerySection'
import OrganismsSection from './components/microcosmos/OrganismsSection'
import ShowcaseSection from './components/microcosmos/ShowcaseSection'
import FactsSection from './components/microcosmos/FactsSection'
import WondersSection from './components/microcosmos/WondersSection'
import FooterSection from './components/microcosmos/FooterSection'

function App() {
  return (
    <div className="min-h-screen bg-cosmos-dark text-cosmos-text font-body">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <OrganismsSection />
      <ShowcaseSection />
      <FactsSection />
      <WondersSection />
      <FooterSection />
    </div>
  )
}

export default App
