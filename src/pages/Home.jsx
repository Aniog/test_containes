import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UGCRow from '@/components/home/UGCRow'
import ShopByCategory from '@/components/home/ShopByCategory'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCRow />
      <ShopByCategory />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  )
}
