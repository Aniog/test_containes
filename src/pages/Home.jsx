import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import HomeBestsellers from '@/components/home/HomeBestsellers';
import HomeUGC from '@/components/home/HomeUGC';
import HomeCategories from '@/components/home/HomeCategories';
import HomeBrandStory from '@/components/home/HomeBrandStory';
import HomeTestimonials from '@/components/home/HomeTestimonials';
import HomeNewsletter from '@/components/home/HomeNewsletter';

const Home = () => {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <HomeBestsellers />
      <HomeCategories />
      <HomeUGC />
      <HomeBrandStory />
      <HomeTestimonials />
      <HomeNewsletter />
    </div>
  );
};

export default Home;