import { HeroSection } from '@/components/home/HeroSection'
import { TrustBar } from '@/components/home/TrustBar'
import { Bestsellers } from '@/components/home/Bestsellers'
import { UgcReel } from '@/components/home/UgcReel'
import { CategoryTiles } from '@/components/home/CategoryTiles'
import { BrandStory } from '@/components/home/BrandStory'
import { Testimonials } from '@/components/home/Testimonials'
import { Newsletter } from '@/components/home/Newsletter'

export function Home() {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UgcReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
