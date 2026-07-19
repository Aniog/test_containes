import BestsellersSection from '@/components/home/BestsellersSection'
import CategoryTiles from '@/components/home/CategoryTiles'
import HeroSection from '@/components/home/HeroSection'
import Newsletter from '@/components/home/Newsletter'
import StorySection from '@/components/home/StorySection'
import Testimonials from '@/components/home/Testimonials'
import TrustBar from '@/components/home/TrustBar'
import UgcStrip from '@/components/home/UgcStrip'

const Home = ({ onAdd }) => (
  <main>
    <HeroSection />
    <TrustBar />
    <BestsellersSection onAdd={onAdd} />
    <UgcStrip />
    <CategoryTiles />
    <StorySection />
    <Testimonials />
    <Newsletter />
  </main>
)

export default Home
