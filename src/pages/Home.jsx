import React from 'react';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UGCSection from '../components/home/UGCSection';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <TrustBar />
      <Bestsellers />
      <CategoryTiles />
      <BrandStory />
      <UGCSection />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
