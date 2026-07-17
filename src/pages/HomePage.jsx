import HomeHero from '../components/home/HomeHero';
import TrustBar from '../components/home/TrustBar';
import PressBar from '../components/home/PressBar';
import BestsellersGrid from '../components/home/BestsellersGrid';
import UGCReels from '../components/home/UGCReels';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Journal from '../components/home/Journal';
import Newsletter from '../components/home/Newsletter';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <PressBar />
      <BestsellersGrid />
      <UGCReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Journal />
      <Newsletter />
    </>
  );
}