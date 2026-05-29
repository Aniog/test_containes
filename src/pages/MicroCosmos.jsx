import HeroSection from '@/components/microcosmos/HeroSection'
import IntroSection from '@/components/microcosmos/IntroSection'
import SpecimensGrid from '@/components/microcosmos/SpecimensGrid'
import FeaturedSection from '@/components/microcosmos/FeaturedSection'
import PhotoGallery from '@/components/microcosmos/PhotoGallery'
import EcosystemSection from '@/components/microcosmos/EcosystemSection'
import QuoteSection from '@/components/microcosmos/QuoteSection'
import TechniquesSection from '@/components/microcosmos/TechniquesSection'
import ClosingSection from '@/components/microcosmos/ClosingSection'
import Footer from '@/components/microcosmos/Footer'

export default function MicroCosmos() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <HeroSection />
      <IntroSection />
      <SpecimensGrid />
      <FeaturedSection />
      <PhotoGallery />
      <EcosystemSection />
      <QuoteSection />
      <TechniquesSection />
      <ClosingSection />
      <Footer />
    </div>
  )
}
