import HeroSection from '@/components/home/HeroSection';
import FeaturedMatches from '@/components/home/FeaturedMatches';
import TopScorers from '@/components/home/TopScorers';
import FeaturedPlayers from '@/components/home/FeaturedPlayers';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedMatches />
      <TopScorers />
      <FeaturedPlayers />
    </div>
  );
}
