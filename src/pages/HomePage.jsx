import Hero from '../components/home/Hero';
import BrowseCategories from '../components/home/BrowseCategories';
import FeaturedMemories from '../components/home/FeaturedMemories';
import MissionBanner from '../components/home/MissionBanner';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BrowseCategories />
      <FeaturedMemories />
      <MissionBanner />
    </main>
  );
}
