import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import FeaturedGames from '@/components/home/FeaturedGames';
import LatestNews from '@/components/home/LatestNews';
import HotDeals from '@/components/home/HotDeals';

export default function Home() {
  return (
    <div>
      <HomeHero />
      <FeaturedGames />
      <LatestNews />
      <HotDeals />
    </div>
  );
}
