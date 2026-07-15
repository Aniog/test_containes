import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Bestsellers from '@/components/Bestsellers';
import ReelRow from '@/components/ReelRow';
import CategoryTiles from '@/components/CategoryTiles';
import BrandStory from '@/components/BrandStory';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <ReelRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}