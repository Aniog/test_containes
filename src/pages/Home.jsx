import HomeHero from '@/components/home/HomeHero';
import HomeFeaturedProducts from '@/components/home/HomeFeaturedProducts';
import HomeFeatures from '@/components/home/HomeFeatures';
import HomeAboutBanner from '@/components/home/HomeAboutBanner';
import HomeTestimonials from '@/components/home/HomeTestimonials';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeFeaturedProducts />
      <HomeFeatures />
      <HomeAboutBanner />
      <HomeTestimonials />
    </main>
  );
}
