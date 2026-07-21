import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import ReelsRow from '@/components/home/ReelsRow';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';
import { useReveal } from '@/hooks/useReveal';

export default function Home() {
  const imageRef = useRef(null);
  const revealRef = useReveal();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, imageRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={imageRef}>
      <Hero />
      <div ref={revealRef}>
        <TrustBar />
        <Bestsellers />
        <ReelsRow />
        <CategoryTiles />
        <BrandStory />
        <Testimonials />
        <Newsletter />
      </div>
    </div>
  );
}
