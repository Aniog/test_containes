import NavBar from '@/components/microcosmos/NavBar'
import HeroSection from '@/components/microcosmos/HeroSection'
import AboutSection from '@/components/microcosmos/AboutSection'
import CategoriesSection from '@/components/microcosmos/CategoriesSection'
import GallerySection from '@/components/microcosmos/GallerySection'
import SpotlightSection from '@/components/microcosmos/SpotlightSection'
import WondersSection from '@/components/microcosmos/WondersSection'
import TechniquesSection from '@/components/microcosmos/TechniquesSection'
import PhotoBannerSection from '@/components/microcosmos/PhotoBannerSection'
import FooterSection from '@/components/microcosmos/FooterSection'

function App() {
  return (
    <div className="min-h-screen bg-[#050810]">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <GallerySection />
      <SpotlightSection />
      <WondersSection />
      <TechniquesSection />
      <PhotoBannerSection />
      <FooterSection />
    </div>
  )
}

export default App
