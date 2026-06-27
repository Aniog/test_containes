import React from 'react';
import Hero from '@/components/home/Hero';
import Bestsellers from '@/components/home/Bestsellers';
import UGCReel from '@/components/home/UGCReel';
import Categories from '@/components/home/Categories';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {/* Trust Bar */}
      <div className="bg-primary/50 border-y border-black/5 py-6 px-6 overflow-hidden">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto whitespace-nowrap gap-12 text-[10px] md:text-sm font-sans uppercase tracking-[0.3em] font-medium opacity-50">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">•</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">•</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">•</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      <Bestsellers />
      <Categories />
      <UGCReel />
      <BrandStory />
      <Testimonials />

      {/* Newsletter Block */}
      <section className="py-32 px-6 bg-carbon text-white text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Exclusive Access</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-wide mb-8">Join the Velmora Inner Circle</h2>
          <p className="font-sans text-sm text-white/50 tracking-widest uppercase mb-12 italic">Join for 10% off your first order</p>
          <div className="w-full max-w-md flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-transparent border border-white/20 px-6 py-4 text-[10px] uppercase tracking-widest focus:border-gold outline-none text-center transition-all"
            />
            <button className="bg-gold text-white px-10 py-4 font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#C4A027] transition-all">
              Join
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
