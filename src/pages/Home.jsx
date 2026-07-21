import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UGCRow from '@/components/home/UGCRow'
import ShopCategories from '@/components/home/ShopCategories'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCRow />
      <ShopCategories />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  )
}

export default HomePage
