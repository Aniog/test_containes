import HeroSection from '@/components/microcosmos/HeroSection'
import OrganismsGrid from '@/components/microcosmos/OrganismsGrid'
import CellStructures from '@/components/microcosmos/CellStructures'
import MicroEnvironments from '@/components/microcosmos/MicroEnvironments'
import ImagingTechniques from '@/components/microcosmos/ImagingTechniques'
import Gallery from '@/components/microcosmos/Gallery'
import FactsSection from '@/components/microcosmos/FactsSection'
import Footer from '@/components/microcosmos/Footer'

const MicroCosmosPage = () => {
  return (
    <div className="min-h-screen bg-cosmos-dark text-cosmos-text">
      <HeroSection />
      <OrganismsGrid />
      <CellStructures />
      <MicroEnvironments />
      <ImagingTechniques />
      <Gallery />
      <FactsSection />
      <Footer />
    </div>
  )
}

export default MicroCosmosPage
