import React from 'react';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UgcRow from '../components/home/UgcRow';
import Categories from '../components/home/Categories';
import Story from '../components/home/Story';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UgcRow />
      <Categories />
      <Story />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;