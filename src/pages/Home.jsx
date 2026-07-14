import { useRef } from 'react'
import { useImageLoader } from '@/hooks/useImageLoader'
import HeroSection from '@/components/home/HeroSection?velmora-runtime=20260714d'
import TrustBar from '@/components/home/TrustBar?velmora-runtime=20260714d'
import BestsellersSection from '@/components/home/BestsellersSection'
import UGCReel from '@/components/home/UGCReel'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

const Home = () => {
  const pageRef = useRef(null)
  useImageLoader(pageRef, [])

  return (
    <main ref={pageRef} className="bg-velmora-ivory text-velmora-ink">
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}

export default Home
