import { products } from '../data/products.js'
import { useImageLoader } from '../lib/useImageLoader.js'
import HeroSection from '../components/home/HeroSection.jsx'
import TrustBar from '../components/home/TrustBar.jsx'
import BestsellersSection from '../components/home/BestsellersSection.jsx'
import UGCReel from '../components/home/UGCReel.jsx'
import CategoryTiles from '../components/home/CategoryTiles.jsx'
import BrandStory from '../components/home/BrandStory.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import Newsletter from '../components/home/Newsletter.jsx'

export default function Home() {
  const containerRef = useImageLoader()

  return (
    <main ref={containerRef} className="bg-velmora-cream text-velmora-ink">
      <HeroSection />
      <TrustBar />
      <BestsellersSection products={products} />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
