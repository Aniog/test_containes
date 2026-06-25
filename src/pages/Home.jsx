import HomeHero from '@/components/home/HomeHero'
import ProductGrid from '@/components/home/ProductGrid'
import CapabilityStrip from '@/components/home/CapabilityStrip'
import PrecisionSection from '@/components/home/PrecisionSection'
import TrustBand from '@/components/home/TrustBand'
import ContactCta from '@/components/home/ContactCta'

const Home = () => {
  return (
    <div className="bg-stone-50 text-slate-950">
      <HomeHero />
      <CapabilityStrip />
      <ProductGrid />
      <PrecisionSection />
      <TrustBand />
      <ContactCta />
    </div>
  )
}

export default Home
