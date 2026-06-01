import Hero from '../components/home/Hero';
import StatsBar from '../components/home/StatsBar';
import FeaturedMemories from '../components/home/FeaturedMemories';
import BrowseByCategory from '../components/home/BrowseByCategory';
import MigrationCountdown from '../components/home/MigrationCountdown';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <FeaturedMemories />
      <BrowseByCategory />
      <MigrationCountdown />
    </main>
  );
}
