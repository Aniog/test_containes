import HomeHero from '@/components/home/HomeHero'
import ProductHighlights from '@/components/home/ProductHighlights'
import PrecisionStrip from '@/components/home/PrecisionStrip'
import ProductShowcase from '@/components/home/ProductShowcase'
import WhyChooseSection from '@/components/home/WhyChooseSection'
import InquiryBanner from '@/components/home/InquiryBanner'

const Home = () => {
  return (
    <div className="bg-stone-50 text-slate-950">
      <HomeHero />
      <ProductHighlights />
      <PrecisionStrip />
      <ProductShowcase />
      <WhyChooseSection />
      <InquiryBanner />
    </div>
  )
}

export default Home
