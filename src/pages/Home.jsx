import HeroSection from '../components/home/HeroSection'
import FeaturedSection from '../components/home/FeaturedSection'
import StatsBar from '../components/home/StatsBar'

export default function Home() {
  return (
    <div className="bg-cosmic-black">
      <HeroSection />
      <StatsBar />
      <FeaturedSection />
    </div>
  )
}
