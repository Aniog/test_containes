import React from 'react';
import ImageLoader from '@/components/home/ImageLoader';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import BestsellersSection from '@/components/home/BestsellersSection';
import UgcReelSection from '@/components/home/UgcReelSection';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStorySection from '@/components/home/BrandStorySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function Home() {
  return (
    <ImageLoader>
      <main className="bg-cream-100">
        <HeroSection />
        <TrustBar />
        <BestsellersSection />
        <UgcReelSection />
        <CategoryTiles />
        <BrandStorySection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
    </ImageLoader>
  );
}
