import HeroSection from '@/components/home/HeroSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import ProductsPreview from '@/components/home/ProductsPreview'
import StatsSection from '@/components/home/StatsSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ProductsPreview />
      <StatsSection />
      <CTASection />
    </div>
  )
}
