import React from 'react';
import Hero from '../components/Home/Hero';
import TrustBar from '../components/Home/TrustBar';
import Bestsellers from '../components/Home/Bestsellers';
import UGCSection from '../components/Home/UGCSection';
import CategoryTiles from '../components/Home/CategoryTiles';
import BrandStory from '../components/Home/BrandStory';
import Testimonials from '../components/Home/Testimonials';
import Newsletter from '../components/Home/Newsletter';

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCSection />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
