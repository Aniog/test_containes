import React from 'react';
import Hero from '../sections/Hero';
import TrustBar from '../sections/TrustBar';
import Bestsellers from '../sections/Bestsellers';
import UGCReel from '../sections/UGCReel';
import ShopByCategory from '../sections/ShopByCategory';
import BrandStory from '../sections/BrandStory';
import Testimonials from '../sections/Testimonials';
import Newsletter from '../sections/Newsletter';

const Home = () => {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <ShopByCategory />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
