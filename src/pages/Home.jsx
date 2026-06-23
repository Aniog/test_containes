import React from 'react';
import HomeHero from '../components/home/HomeHero';
import HomeServices from '../components/home/HomeServices';
import HomeTrust from '../components/home/HomeTrust';
import HomeProcess from '../components/home/HomeProcess';
import HomeProducts from '../components/home/HomeProducts';
import HomeFAQ from '../components/home/HomeFAQ';

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeServices />
      <HomeTrust />
      <HomeProcess />
      <HomeProducts />
      <HomeFAQ />
    </div>
  );
}
