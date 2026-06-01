import HomeHero from '../components/home/HomeHero';
import FeaturedMemories from '../components/home/FeaturedMemories';
import EraTimeline from '../components/home/EraTimeline';
import EmotionCloud from '../components/home/EmotionCloud';
import MissionBanner from '../components/home/MissionBanner';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <FeaturedMemories />
      <EraTimeline />
      <EmotionCloud />
      <MissionBanner />
    </main>
  );
}
