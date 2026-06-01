import HeroSection from '@/components/home/HeroSection';
import FeaturedMemories from '@/components/home/FeaturedMemories';
import EraTimeline from '@/components/home/EraTimeline';
import CallToAction from '@/components/home/CallToAction';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedMemories />
      <EraTimeline />
      <CallToAction />
    </main>
  );
}
