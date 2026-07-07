import { HeroSection } from '@/components/home/HeroSection'
import { TrustBar } from '@/components/home/TrustBar'
import { BestsellersSection } from '@/components/home/BestsellersSection'
import { UgcReelSection } from '@/components/home/UgcReelSection'
import { CategoryTiles } from '@/components/home/CategoryTiles'
import { BrandStorySection } from '@/components/home/BrandStorySection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { Newsletter } from '@/components/Newsletter'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcReelSection />
      <CategoryTiles />
      <BrandStorySection />
      <TestimonialsSection />
      <Newsletter variant="accent" />
    </>
  )
}
