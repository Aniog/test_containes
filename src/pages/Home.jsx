import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UGCCarousel from '@/components/home/UGCCarousel'
import ShopByCategory from '@/components/home/ShopByCategory'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UGCCarousel />
      <ShopByCategory />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
