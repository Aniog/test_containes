import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UGCReel from '@/components/home/UGCReel'
import ShopByCategory from '@/components/home/ShopByCategory'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'
import { FadeInSection } from '@/hooks/useAnimations'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FadeInSection>
        <Bestsellers />
      </FadeInSection>
      <FadeInSection>
        <UGCReel />
      </FadeInSection>
      <FadeInSection>
        <ShopByCategory />
      </FadeInSection>
      <FadeInSection>
        <BrandStory />
      </FadeInSection>
      <FadeInSection>
        <Testimonials />
      </FadeInSection>
      <FadeInSection>
        <Newsletter />
      </FadeInSection>
    </>
  )
}
