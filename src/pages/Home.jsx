import React from 'react';
import HomeHero from '../components/home/HomeHero';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UGCReel from '../components/home/UGCReel';
import ShopCategories from '../components/home/ShopCategories';
import BrandStory from '../components/home/BrandStory';

export default function Home() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <ShopCategories />
      <BrandStory />
    </>
  );
}
