import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import BestsellersSection from '@/components/home/BestsellersSection';
import UGCRow from '@/components/home/UGCRow';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStorySection from '@/components/home/BrandStorySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function HomePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCRow />
      <CategoryTiles />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
