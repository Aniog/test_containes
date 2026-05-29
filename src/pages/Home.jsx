import DreamBackground from '../components/home/DreamBackground';
import HeroSection from '../components/home/HeroSection';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedDreams from '../components/home/FeaturedDreams';
import TrendingSection from '../components/home/TrendingSection';
import TopCreators from '../components/home/TopCreators';
import DreamVisualizations from '../components/home/DreamVisualizations';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <DreamBackground />
      <HeroSection />
      <CategoryGrid />
      <FeaturedDreams />
      <TrendingSection />
      <DreamVisualizations />
      <TopCreators />
    </div>
  );
}
