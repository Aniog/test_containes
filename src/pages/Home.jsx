import HeroSection from '@/components/home/HeroSection'
import ProductsSection from '@/components/home/ProductsSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import StatsSection from '@/components/home/StatsSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <FeaturesSection />
      <CTASection />
    </div>
  )
}
