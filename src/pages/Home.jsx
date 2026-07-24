import React from 'react';
import HomeHero from '../components/home/HomeHero';
import HomeTrustBar from '../components/home/HomeTrustBar';
import HomeBestsellers from '../components/home/HomeBestsellers';
import HomeUGCReels from '../components/home/HomeUGCReels';
import HomeCategories from '../components/home/HomeCategories';
import HomeBrandStory from '../components/home/HomeBrandStory';
import HomeTestimonials from '../components/home/HomeTestimonials';
import HomeNewsletter from '../components/home/HomeNewsletter';

const Home = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <HomeHero />
      <HomeTrustBar />
      <HomeBestsellers />
      <HomeCategories />
      <HomeBrandStory />
      <HomeUGCReels />
      <HomeTestimonials />
      <HomeNewsletter />
    </div>
  );
};

export default Home;
