import HomeHero from '../components/home/HomeHero';
import FeaturedMemories from '../components/home/FeaturedMemories';
import BrowseCategories from '../components/home/BrowseCategories';
import MissionSection from '../components/home/MissionSection';

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeaturedMemories />
      <BrowseCategories />
      <MissionSection />
    </>
  );
}
