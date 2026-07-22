import Bestsellers from '@/components/home/Bestsellers'
import CategoryTiles from '@/components/home/CategoryTiles'
import Hero from '@/components/home/Hero'
import Newsletter from '@/components/home/Newsletter'
import StorySection from '@/components/home/StorySection'
import Testimonials from '@/components/home/Testimonials'
import TrustBar from '@/components/home/TrustBar'
import UgcReel from '@/components/home/UgcReel'
import { products } from '@/data/products'

const Home = ({ onAddToCart }) => (
  <>
    <Hero />
    <TrustBar />
    <Bestsellers products={products} onAddToCart={onAddToCart} />
    <UgcReel />
    <CategoryTiles />
    <StorySection />
    <Testimonials />
    <Newsletter />
  </>
)

export default Home
