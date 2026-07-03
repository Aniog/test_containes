import React from 'react';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import Reels from '../components/home/Reels';
import Categories from '../components/home/Categories';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <Reels />
      <Categories />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
