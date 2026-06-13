import BrandHeader from '@/components/home/BrandHeader'
import ContactBand from '@/components/home/ContactBand'
import HeroSection from '@/components/home/HeroSection'
import ProductHighlights from '@/components/home/ProductHighlights'
import ProductionFlow from '@/components/home/ProductionFlow'
import TrustStrip from '@/components/home/TrustStrip'
import WhyChooseUs from '@/components/home/WhyChooseUs'

const Home = () => {
  return (
    <div className="bg-slate-100 text-slate-950">
      <BrandHeader />
      <HeroSection />
      <TrustStrip />
      <ProductHighlights />
      <WhyChooseUs />
      <ProductionFlow />
      <ContactBand />
    </div>
  )
}

export default Home
