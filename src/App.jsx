import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import GallerySection from '@/components/GallerySection'
import CategoriesSection from '@/components/CategoriesSection'
import FeaturedSection from '@/components/FeaturedSection'
import FactsSection from '@/components/FactsSection'
import SpotlightSection from '@/components/SpotlightSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

function App() {
  return (
    <div className="bg-[#050a0e] min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <CategoriesSection />
      <FeaturedSection />
      <FactsSection />
      <SpotlightSection />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default App
