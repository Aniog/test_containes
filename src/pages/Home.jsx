import HomeHero from '@/components/home/HomeHero';
import HomeStats from '@/components/home/HomeStats';
import HomeFeatured from '@/components/home/HomeFeatured';
import HomeBrowse from '@/components/home/HomeBrowse';
import HomeCTA from '@/components/home/HomeCTA';

export default function Home() {
  return (
    <div className="bg-cosmos-950">
      <HomeHero />
      <HomeStats />
      <HomeFeatured />
      <HomeBrowse />
      <HomeCTA />
    </div>
  );
}
