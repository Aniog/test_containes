import HomeHero from '../components/home/HomeHero';
import FeaturedMemories from '../components/home/FeaturedMemories';
import EraTimeline from '../components/home/EraTimeline';
import EmotionCloud from '../components/home/EmotionCloud';
import MissionSection from '../components/home/MissionSection';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <FeaturedMemories />
      <EraTimeline />
      <EmotionCloud />
      <MissionSection />
    </main>
  );
}
