import HeroSection from '../components/home/HeroSection';
import FeaturedMemories from '../components/home/FeaturedMemories';
import ExploreBySection from '../components/home/ExploreBySection';
import MissionSection from '../components/home/MissionSection';

export default function Home() {
  return (
    <main className="bg-void">
      <HeroSection />
      <div className="section-divider" />
      <FeaturedMemories />
      <div className="section-divider" />
      <ExploreBySection />
      <div className="section-divider" />
      <MissionSection />
    </main>
  );
}
