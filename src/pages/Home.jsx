import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Bestsellers from '../components/home/Bestsellers';
import UgcReels from '../components/home/UgcReels';
import Categories from '../components/home/Categories';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Bestsellers />
      <UgcReels />
      <Categories />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
