import HeroSection from '@/components/home/HeroSection.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import Bestsellers from '@/components/home/Bestsellers.jsx'
import UgcReel from '@/components/home/UgcReel.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import BrandStory from '@/components/home/BrandStory.jsx'
import Testimonials from '@/components/home/Testimonials.jsx'
import Newsletter from '@/components/home/Newsletter.jsx'
import { useStrkImages } from '@/hooks/useStrkImages.js'

export default function Home() {
  const containerRef = useStrkImages([])

  return (
    <main ref={containerRef} className="bg-velmora-cream text-velmora-ink">
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UgcReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
