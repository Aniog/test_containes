import React, { useEffect, useState, useRef } from 'react';
import HomeHero from '@/components/home/HomeHero';
import TrustBar from '@/components/home/TrustBar';
import ProductCard from '@/components/home/ProductGrid';
import CategoryTiles from '@/components/home/CategoryTiles';
import UGCReel from '@/components/home/UGCReel';
import { fetchProducts } from '@/api/products';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    fetchProducts({ isBestseller: true }).then(setBestsellers);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="space-y-0" ref={containerRef}>
      <HomeHero />
      <TrustBar />

      {/* Bestsellers Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.4em] font-medium text-primary">Curated Favorites</p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">The Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm uppercase tracking-widest underline underline-offset-4 hover:text-primary transition-colors">
            View All Jewelry
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="bg-secondary/30 grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-square md:aspect-auto h-full min-h-[500px] relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110"
            data-strk-bg-id="brand-story-bg"
            data-strk-bg="elegant woman wearing gold jewelry editorial"
            data-strk-bg-ratio="1x1"
            data-strk-bg-width="1200"
          />
        </div>
        <div className="p-12 md:p-24 flex flex-col justify-center items-start space-y-8">
          <p className="text-[10px] uppercase tracking-[0.4em] font-medium text-primary text-center">About Velmora</p>
          <h2 className="text-4xl md:text-5xl font-serif max-w-md leading-snug">Designed for the modern woman who values subtlety and substance.</h2>
          <p className="text-muted-foreground leading-relaxed max-w-md">
            Our pieces are proof that luxury doesn't have to be loud. We create demi-fine jewelry using 18K gold plating over hypoallergenic bases, ensuring each piece lasts and remains gentle on your skin.
          </p>
          <Link to="/about" className="bg-foreground text-background px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-primary transition-colors">
            Our Story
          </Link>
        </div>
      </section>

      <UGCReel />
      <CategoryTiles />

      {/* Testimonials */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-3xl font-serif text-center italic">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Elena R.', body: 'The Golden Sphere Huggies are my new daily staple. Exceptional quality for the price.' },
              { name: 'Sarah M.', body: 'Beautifully packaged and even more stunning in person. Perfect for gifting.' },
              { name: 'Jessica L.', body: 'Obsessed with the 18K finish. It has that rich, true gold tone I been looking for.' },
            ].map((t, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="flex justify-center space-x-0.5 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg text-primary">★</span>
                  ))}
                </div>
                <p className="text-sm font-light leading-relaxed italic text-muted-foreground">"{t.body}"</p>
                <p className="text-xs uppercase tracking-widest font-bold">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 border-t border-b">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif italic">Join the Journal</h2>
            <p className="text-sm text-muted-foreground uppercase tracking-widest">Receive 10% off your first order and exclusive access to new launches.</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-0 border border-foreground/10 group focus-within:border-primary transition-colors">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-transparent px-6 py-4 outline-none text-xs tracking-widest"
            />
            <button className="bg-foreground text-background px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-primary transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
