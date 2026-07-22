import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustBar } from '@/components/home/TrustBar';
import { BestsellersSection } from '@/components/home/BestsellersSection';
import { UGCReelSection } from '@/components/home/UGCReelSection';
import { CategoryTilesSection } from '@/components/home/CategoryTilesSection';
import { BrandStorySection } from '@/components/home/BrandStorySection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCReelSection />
      <CategoryTilesSection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
