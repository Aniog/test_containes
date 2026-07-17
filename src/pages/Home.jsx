import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import Bestsellers from '@/components/home/Bestsellers';
import HomeSections from '@/components/home/HomeSections';

export default function Home() {
  return (
    <div className="animate-in fade-in duration-700">
      <HomeHero />
      <Bestsellers />
      <HomeSections />
    </div>
  );
}
