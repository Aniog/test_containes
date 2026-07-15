import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UGCReel from '@/components/home/UGCReel';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import TestimonialSection from '@/components/home/TestimonialSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const Home = () => {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <TrustBar />
      <Bestsellers />
      <CategoryTiles />
      <UGCReel />
      <BrandStory />
      <TestimonialSection />
      <NewsletterSection />
    </div>
  );
};

export default Home;
