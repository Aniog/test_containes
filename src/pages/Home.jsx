import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import EraTimeline from '../components/home/EraTimeline';
import FeaturedMemories from '../components/home/FeaturedMemories';
import BrowseCategories from '../components/home/BrowseCategories';
import CtaBanner from '../components/home/CtaBanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <EraTimeline />
      <FeaturedMemories />
      <BrowseCategories />
      <CtaBanner />
    </>
  );
}
