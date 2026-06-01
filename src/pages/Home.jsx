import Hero from '../components/sections/Hero';
import FeaturedGames from '../components/sections/FeaturedGames';
import TopSellers from '../components/sections/TopSellers';
import Genres from '../components/sections/Genres';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedGames />
      <TopSellers />
      <Genres />
    </>
  );
}
