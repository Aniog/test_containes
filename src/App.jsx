import './App.css'
import Navbar from './components/navigation/Navbar.jsx'
import HeroSection from './components/hero/HeroSection.jsx'
import GallerySection from './components/gallery/GallerySection.jsx'
import BannerSection from './components/gallery/BannerSection.jsx'
import FeaturesSection from './components/features/FeaturesSection.jsx'
import OrganismsSection from './components/organisms/OrganismsSection.jsx'
import ExploreSection from './components/explore/ExploreSection.jsx'
import AboutSection from './components/explore/AboutSection.jsx'
import Footer from './components/navigation/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-cosmos-dark">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <BannerSection />
      <FeaturesSection />
      <OrganismsSection />
      <ExploreSection />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default App
