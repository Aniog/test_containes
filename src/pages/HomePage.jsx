import React from 'react';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UGCReel from '@/components/home/UGCReel';
import ShopByCategory from '@/components/home/ShopByCategory';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <ShopByCategory />
      <BrandStory />
      <Testimonials />
      <Footer />
    </main>
  );
}
