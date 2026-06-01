import HomeHero from '../components/home/HomeHero';
import FeaturedMemories from '../components/home/FeaturedMemories';
import BrowseCategories from '../components/home/BrowseCategories';
import MissionBanner from '../components/home/MissionBanner';

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <FeaturedMemories />
      <BrowseCategories />
      <MissionBanner />
    </main>
  );
}
