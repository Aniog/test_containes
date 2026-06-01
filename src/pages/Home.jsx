import HeroSection from '../components/home/HeroSection';
import FeaturedMemories from '../components/home/FeaturedMemories';
import BrowseCategories from '../components/home/BrowseCategories';
import MissionSection from '../components/home/MissionSection';

export default function Home() {
  return (
    <div className="bg-space-black">
      <HeroSection />
      <FeaturedMemories />
      <BrowseCategories />
      <MissionSection />
    </div>
  );
}
