import Hero from '../components/Hero.jsx'
import TrustBar from '../components/TrustBar.jsx'
import Bestsellers from '../components/Bestsellers.jsx'
import UGCReel from '../components/UGCReel.jsx'
import CategoryTiles from '../components/CategoryTiles.jsx'
import BrandStory from '../components/BrandStory.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Newsletter from '../components/Newsletter.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}