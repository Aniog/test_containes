import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UgcReels from '@/components/home/UgcReels';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import JournalTeaser from '@/components/home/JournalTeaser';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  const pageRef = useReveal();

  return (
    <div ref={pageRef}>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UgcReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <JournalTeaser />
      <Newsletter />
    </div>
  );
}
