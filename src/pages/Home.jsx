import React from 'react';
import HomeHero from '../components/home/HomeHero';
import TrustPoints from '../components/home/TrustPoints';
import HomeServices from '../components/home/HomeServices';
import HomeProcess from '../components/home/HomeProcess';
import HomeFAQ from '../components/home/HomeFAQ';
import HomeCTA from '../components/home/HomeCTA';

const Home = () => {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <TrustPoints />
      <HomeServices />
      <HomeProcess />
      <HomeFAQ />
      <HomeCTA />
    </div>
  );
};

export default Home;
