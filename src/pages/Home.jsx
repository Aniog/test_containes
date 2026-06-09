import HeroSection from '@/components/home/HeroSection'
import ProductsPreview from '@/components/home/ProductsPreview'
import FeaturesSection from '@/components/home/FeaturesSection'
import StatsSection from '@/components/home/StatsSection'
import CTASection from '@/components/home/CTASection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProductsPreview />
      <FeaturesSection />
      <CTASection />
    </>
  )
}

export default Home
