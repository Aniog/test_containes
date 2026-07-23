import React from 'react';
import Hero from '@/components/home/Hero.jsx';
import TrustBar from '@/components/home/TrustBar.jsx';
import Bestsellers from '@/components/home/Bestsellers.jsx';
import UGCReel from '@/components/home/UGCReel.jsx';
import Categories from '@/components/home/Categories.jsx';
import BrandStory from '@/components/home/BrandStory.jsx';
import Testimonials from '@/components/home/Testimonials.jsx';
import Newsletter from '@/components/home/Newsletter.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <Categories />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
