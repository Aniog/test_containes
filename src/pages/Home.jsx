import HomeHero from '@/components/home/HomeHero'
import FeatureCards from '@/components/home/FeatureCards'
import ProductPreview from '@/components/home/ProductPreview'
import CTABanner from '@/components/home/CTABanner'

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeatureCards />
      <ProductPreview />
      <CTABanner />
    </>
  )
}
