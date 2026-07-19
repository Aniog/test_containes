import React from 'react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import { BestsellersGrid } from '@/components/home/ProductCard';
import UgcReels from '@/components/home/UgcReels';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <Navbar />
      <CartDrawer />
      <main>
        <Hero />
        <TrustBar />
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-center text-[#3d3229] mb-10">Bestsellers</h2>
            <BestsellersGrid />
          </div>
        </section>
        <UgcReels />
        <CategoryTiles />
        <BrandStory />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
