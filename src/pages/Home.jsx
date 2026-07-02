import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UGCStrip from '@/components/home/UGCStrip'
import CategoryTiles from '@/components/home/CategoryTiles'
import StorySection from '@/components/home/StorySection'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

export default function Home({ onAddToCart }) {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers onAddToCart={onAddToCart} />
      <UGCStrip />
      <CategoryTiles />
      <StorySection />
      <Testimonials />
      <Newsletter />
    </>
  )
}
