import React from 'react';
import Hero from '../components/home/Hero';
import Bestsellers from '../components/home/Bestsellers';
import UGCReel from '../components/home/UGCReel';
import CategoryTiles from '../components/home/CategoryTiles';
import StorySection from '../components/home/StorySection';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const TrustBar = () => (
  <div className="bg-velmora-dark text-velmora-light py-3 border-t border-velmora-light/10">
    <div className="container mx-auto px-4 overflow-hidden">
      <div className="flex justify-between md:justify-center items-center text-xs md:text-sm tracking-widest uppercase font-semibold w-full">
         {/* Marquee effect for mobile, static for desktop */}
         <div className="flex animate-marquee md:animate-none space-x-8 md:space-x-16 whitespace-nowrap min-w-full justify-around">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
            
            {/* Duplicates for Marquee wrap */}
            <span className="md:hidden">Free Worldwide Shipping</span>
            <span className="md:hidden">30-Day Returns</span>
         </div>
      </div>
    </div>
    <style jsx>{`
      @media (max-width: 767px) {
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      }
    `}</style>
  </div>
);

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <TrustBar />
      <CategoryTiles />
      <Bestsellers />
      <StorySection />
      <UGCReel />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;