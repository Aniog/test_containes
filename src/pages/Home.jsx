import React, { useEffect } from 'react';
import HomeHero from '@/components/home/HomeHero';
import HomeTrustBar from '@/components/home/HomeTrustBar';
import HomeBestsellers from '@/components/home/HomeBestsellers';
import HomeUGC from '@/components/home/HomeUGC';
import HomeCategories from '@/components/home/HomeCategories';
import HomeStory from '@/components/home/HomeStory';
import HomeTestimonials from '@/components/home/HomeTestimonials';
import HomeNewsletter from '@/components/home/HomeNewsletter';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HomeHero />
      
      {/* trust bar */}
      <HomeTrustBar />

      {/* Categories */}
      <HomeCategories />

      {/* Bestsellers */}
      <HomeBestsellers />

      {/* Brand Story */}
      <HomeStory />

      {/* UGC Reel */}
      <HomeUGC />

      {/* Testimonials */}
      <HomeTestimonials />

      {/* Newsletter */}
      <HomeNewsletter />
    </div>
  );
};

export default Home;
