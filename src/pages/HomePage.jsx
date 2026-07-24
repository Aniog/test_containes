import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import BestsellersSection from '../components/home/BestsellersSection';
import UGCSection from '../components/home/UGCSection';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStorySection from '../components/home/BrandStorySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsletterSection from '../components/home/NewsletterSection';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <CategoryTiles />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
