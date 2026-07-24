import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UgcReel from '@/components/home/UgcReel'
import ShopByCategory from '@/components/home/ShopByCategory'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UgcReel />
      <ShopByCategory />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  )
}
