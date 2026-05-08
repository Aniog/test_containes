import HeroSection from '../components/home/HeroSection'
import PlatformGrid from '../components/home/PlatformGrid'
import FeaturedArticles from '../components/home/FeaturedArticles'
import HotDeals from '../components/home/HotDeals'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <PlatformGrid />
      <FeaturedArticles />
      <HotDeals />
    </div>
  )
}
