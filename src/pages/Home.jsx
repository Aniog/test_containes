import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UGCReels from '@/components/home/UGCReels'
import Categories from '@/components/home/Categories'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <TrustBar />
      <Bestsellers />
      <Categories />
      <BrandStory />
      <UGCReels />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
