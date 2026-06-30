import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import BestsellersGrid from '@/components/home/BestsellersGrid';
import UgcReelRow from '@/components/home/UgcReelRow';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import NewsletterCta from '@/components/home/NewsletterCta';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersGrid />
      <div className="hairline mx-5 md:mx-10 lg:mx-16" />
      <UgcReelRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <NewsletterCta />
    </>
  );
}
