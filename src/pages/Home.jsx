import HeroSection from '@/components/home/HeroSection'
import FeaturedDiscoveries from '@/components/home/FeaturedDiscoveries'
import RecentArtifacts from '@/components/home/RecentArtifacts'
import ParadoxReports from '@/components/home/ParadoxReports'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedDiscoveries />
      <RecentArtifacts />
      <ParadoxReports />
    </div>
  )
}

export default Home
