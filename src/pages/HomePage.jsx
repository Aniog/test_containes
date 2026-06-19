import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustBar from '../components/TrustBar';
import Bestsellers from '../components/Bestsellers';
import UGCRow from '../components/UGCRow';
import ShopByCategory from '../components/ShopByCategory';
import BrandStory from '../components/BrandStory';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <ShopByCategory />
      <UGCRow />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
