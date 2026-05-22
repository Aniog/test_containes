import HomeHero from '@/components/home/HomeHero';
import HomePlatformBanner from '@/components/home/HomePlatformBanner';
import HomeFeaturedDeals from '@/components/home/HomeFeaturedDeals';
import HomeLatestNews from '@/components/home/HomeLatestNews';

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomePlatformBanner />
      <HomeFeaturedDeals />
      <HomeLatestNews />
    </div>
  );
}
