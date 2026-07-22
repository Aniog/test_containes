import React from 'react';
import Hero from '../components/homepage/Hero';
import TrustBar from '../components/homepage/TrustBar';
import Bestsellers from '../components/homepage/Bestsellers';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TrustBar />
      <Bestsellers />
    </div>
  );
};

export default HomePage;
