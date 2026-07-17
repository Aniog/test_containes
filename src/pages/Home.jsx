import React from 'react';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import ReelsStrip from '@/components/home/ReelsStrip';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import { products } from '@/lib/store';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <TrustBar />
      <Bestsellers products={products} />
      <CategoryTiles />
      <ReelsStrip />
      <BrandStory />
      <Testimonials />
      
      {/* Newsletter Accent Block */}
      <section className="bg-velmora-stone py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xs uppercase tracking-widest font-medium mb-4 text-velmora-gold">Stay in Touch</h2>
          <p className="text-4xl md:text-5xl font-serif mb-8 italic">Join for 10% off your first order</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-velmora-ivory border-none px-6 py-4 text-sm focus:outline-none placeholder:opacity-40"
              required
            />
            <button className="bg-velmora-charcoal text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-velmora-gold transition-colors duration-500">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] mt-6 opacity-40 uppercase tracking-widest">
            By signing up, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
