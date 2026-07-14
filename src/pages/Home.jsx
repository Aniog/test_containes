import { HomeHero } from '../components/home/HomeHero';
import { TrustBar } from '../components/home/TrustBar';
import { Bestsellers } from '../components/home/Bestsellers';
import { UGCRow } from '../components/home/UGCRow';
import { Categories } from '../components/home/Categories';
import { BrandStory } from '../components/home/BrandStory';
import { Testimonials } from '../components/home/Testimonials';
import { Newsletter } from '../components/home/Newsletter';

export function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <HomeHero />
      <TrustBar />
      <Bestsellers />
      <UGCRow />
      <Categories />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}