import React from 'react';
import Hero from '../components/home/Hero';
import Bestsellers from '../components/home/Bestsellers';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import UGC from '../components/home/UGC';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Bestsellers />
      <CategoryTiles />
      <BrandStory />
      <UGC />
      <Testimonials />
    </>
  );
};

export default Home;
