import Navbar from '@/components/microcosmos/Navbar'
import HeroSection from '@/components/microcosmos/HeroSection'
import StatsBar from '@/components/microcosmos/StatsBar'
import WorldsSection from '@/components/microcosmos/WorldsSection'
import FeatureSpotlight from '@/components/microcosmos/FeatureSpotlight'
import GallerySection from '@/components/microcosmos/GallerySection'
import WondersSection from '@/components/microcosmos/WondersSection'
import TimelineSection from '@/components/microcosmos/TimelineSection'
import TechniquesSection from '@/components/microcosmos/TechniquesSection'
import CtaSection from '@/components/microcosmos/CtaSection'
import Footer from '@/components/microcosmos/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#050d1a] text-slate-50">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <WorldsSection />
      <FeatureSpotlight />
      <GallerySection />
      <WondersSection />
      <TimelineSection />
      <TechniquesSection />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default App

