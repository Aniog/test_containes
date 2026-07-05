import HomeHero from '@/components/home/HomeHero';
import TrustBar from '@/components/home/TrustBar';
import HomeBestsellers from '@/components/home/HomeBestsellers';
import HomeReels from '@/components/home/HomeReels';
import HomeCategories from '@/components/home/HomeCategories';
import HomeStory from '@/components/home/HomeStory';
import HomeTestimonials from '@/components/home/HomeTestimonials';
import HomeNewsletter from '@/components/home/HomeNewsletter';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <HomeHero />
      <TrustBar />
      <HomeBestsellers />
      <HomeReels />
      <HomeCategories />
      <HomeStory />
      <HomeTestimonials />
      <HomeNewsletter />
    </div>
  );
};

export default Home;