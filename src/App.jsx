import NavBar from './components/microcosmos/NavBar'
import Hero from './components/microcosmos/Hero'
import ExploreSection from './components/microcosmos/ExploreSection'
import GallerySection from './components/microcosmos/GallerySection'
import OrganismsSection from './components/microcosmos/OrganismsSection'
import ScienceSection from './components/microcosmos/ScienceSection'
import SpotlightSection from './components/microcosmos/SpotlightSection'
import PhotoGrid from './components/microcosmos/PhotoGrid'
import ContactSection from './components/microcosmos/ContactSection'
import Footer from './components/microcosmos/Footer'

function App() {
  return (
    <div className="bg-[#050d1a] min-h-screen">
      <NavBar />
      <Hero />
      <ExploreSection />
      <GallerySection />
      <OrganismsSection />
      <ScienceSection />
      <SpotlightSection />
      <PhotoGrid />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
