import Hero from '@/components/home/hero'
import TrustBar from '@/components/home/trust-bar'
import Bestsellers from '@/components/home/bestsellers'
import Reels from '@/components/home/reels'
import CategoryTiles from '@/components/home/category-tiles'
import BrandStory from '@/components/home/brand-story'
import Testimonials from '@/components/home/testimonials'
import Newsletter from '@/components/home/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <Reels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  )
}
