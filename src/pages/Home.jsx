import HeroSection from '../components/home/HeroSection';
import BrowseCategories from '../components/home/BrowseCategories';
import FeaturedMemories from '../components/home/FeaturedMemories';
import WorldMap from '../components/home/WorldMap';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrowseCategories />
      <FeaturedMemories />
      <WorldMap />
    </main>
  );
}
