import HomeHero from '../components/home/HomeHero';
import HomeStats from '../components/home/HomeStats';
import HomeFeatured from '../components/home/HomeFeatured';
import HomeExplore from '../components/home/HomeExplore';

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeStats />
      <HomeFeatured />
      <HomeExplore />
    </div>
  );
}
