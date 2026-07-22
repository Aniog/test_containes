import HomeHero from '@/components/home/HomeHero';
import HomeStats from '@/components/home/HomeStats';
import HomeFeatures from '@/components/home/HomeFeatures';
import HomeAlertBanner from '@/components/home/HomeAlertBanner';
import HomeSafetyPreview from '@/components/home/HomeSafetyPreview';

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeStats />
      <HomeFeatures />
      <HomeAlertBanner />
      <HomeSafetyPreview />
    </div>
  );
}
