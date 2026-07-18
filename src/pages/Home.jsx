import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import BestsellersGrid from '@/components/home/BestsellersGrid'
import UGReel from '@/components/home/UGReel'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'
import Footer from '@/components/home/Footer'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersGrid />
      <hr className="hairline-divider" />
      <UGReel />
      <hr className="hairline-divider" />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}
