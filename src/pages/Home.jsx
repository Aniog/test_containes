import React from 'react';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UGCStrip from '../components/home/UGCStrip';
import Categories from '../components/home/Categories';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCStrip />
      <Categories />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
