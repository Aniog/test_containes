import HomeHero from '../components/home/HomeHero';
import HomePillars from '../components/home/HomePillars';
import HomeStats from '../components/home/HomeStats';

export default function Home() {
  return (
    <div className="bg-[#050505]">
      <HomeHero />
      <HomePillars />
      <HomeStats />
    </div>
  );
}
