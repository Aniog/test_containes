import React from 'react';
import Hero from '@/components/home/Hero';
import Bestsellers from '@/components/home/Bestsellers';
import UGCReels from '@/components/home/UGCReels';
import Categories from '@/components/home/Categories';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Home = () => {
  return (
    <div className="bg-background">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust Bar */}
      <div className="bg-stone-50 border-y border-border py-4 px-6 md:px-12 flex flex-wrap justify-center gap-x-12 gap-y-4">
        {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
          <span key={item} className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-70">
            {item}
          </span>
        ))}
      </div>

      {/* 3. Bestsellers */}
      <Bestsellers />

      {/* 4. UGC Reel Row */}
      <UGCReels />

      {/* 5. Shop by category */}
      <Categories />

      {/* 6. Brand Story */}
      <BrandStory />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
