import React from 'react';
import Hero from '@/components/home/Hero.jsx';
import TrustBar from '@/components/home/TrustBar.jsx';
import Bestsellers from '@/components/home/Bestsellers.jsx';
import UGC from '@/components/home/UGC.jsx';
import Categories from '@/components/home/Categories.jsx';
import BrandStory from '@/components/home/BrandStory.jsx';
import Testimonials from '@/components/home/Testimonials.jsx';
import Newsletter from '@/components/home/Newsletter.jsx';

const Home = () => {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGC />
      <Categories />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
