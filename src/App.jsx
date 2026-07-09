import './App.css'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/hero/HeroSection.jsx'
import GallerySection from './components/gallery/GallerySection.jsx'
import FeaturesSection from './components/features/FeaturesSection.jsx'
import OrganismsSection from './components/organisms/OrganismsSection.jsx'
import ImageBandSection from './components/gallery/ImageBandSection.jsx'
import ShowcaseSection from './components/gallery/ShowcaseSection.jsx'
import StatsSection from './components/features/StatsSection.jsx'
import FooterSection from './components/footer/FooterSection.jsx'

function App() {
  return (
    <div className="min-h-screen bg-midnight font-body">
      <Navbar />
      <HeroSection />
      <div id="gallery">
        <GallerySection />
      </div>
      <ImageBandSection />
      <div id="discover">
        <FeaturesSection />
      </div>
      <StatsSection />
      <div id="organisms">
        <OrganismsSection />
      </div>
      <div id="showcase">
        <ShowcaseSection />
      </div>
      <FooterSection />
    </div>
  )
}

export default App
