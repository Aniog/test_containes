import React from 'react';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import BestsellersSection from '../components/home/BestsellersSection';
import UGCStrip from '../components/home/UGCStrip';
import CategorySection from '../components/home/CategorySection';
import BrandStory from '../components/home/BrandStory';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsletterSection from '../components/home/NewsletterSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BestsellersSection />
      <UGCStrip />
      <CategorySection />
      <BrandStory />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
