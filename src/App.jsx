import Navbar from '@/components/microcosmos/Navbar'
import HeroSection from '@/components/microcosmos/HeroSection'
import AboutSection from '@/components/microcosmos/AboutSection'
import GallerySection from '@/components/microcosmos/GallerySection'
import OrganismsSection from '@/components/microcosmos/OrganismsSection'
import ScienceSection from '@/components/microcosmos/ScienceSection'
import ContactSection from '@/components/microcosmos/ContactSection'
import Footer from '@/components/microcosmos/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <OrganismsSection />
      <ScienceSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
