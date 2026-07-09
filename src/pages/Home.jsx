import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import Bestsellers from '@/components/home/Bestsellers';
import UGCReel from '@/components/home/UGCReel';
import Categories from '@/components/home/Categories';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HomeHero />

      {/* Trust Bar */}
      <div className="bg-[#1A1A1A] py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-infinite-scroll">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-12 px-12 text-[10px] text-white uppercase tracking-[0.3em] font-sans opacity-80">
              <span>Free Worldwide Shipping</span>
              <span className="opacity-20">|</span>
              <span>30-Day Returns</span>
              <span className="opacity-20">|</span>
              <span>18K Gold Plated</span>
              <span className="opacity-20">|</span>
              <span>Hypoallergenic</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bestsellers */}
      <Bestsellers />

      {/* UGC Reel */}
      <UGCReel />

      {/* Categories */}
      <Categories />

      {/* Brand Story */}
      <BrandStory />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
