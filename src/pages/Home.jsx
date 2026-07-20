import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fetchProducts } from '@/api/products';
import ProductCard from '@/components/products/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadBestsellers = async () => {
      try {
        // Since I'm using real data from DB
        const data = await fetchProducts({ isBestseller: true });
        setBestsellers(data);
      } catch (error) {
        console.error('Failed to load bestsellers', error);
      }
    };
    loadBestsellers();
  }, []);

  useEffect(() => {
    if (bestsellers.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [bestsellers]);

  return (
    <div ref={containerRef} className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-neutral-900 z-0"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/30 z-[1]" />
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl space-y-8 mt-16">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none">
            Crafted to be <br /> Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light tracking-[0.1em] uppercase opacity-90">
            Demi-fine gold jewelry for the modern woman.
          </p>
          <div className="pt-8">
            <Link 
              to="/shop" 
              className="inline-block bg-brand-gold text-white px-10 py-4 uppercase tracking-[0.2em] font-bold text-sm hover:bg-white hover:text-brand-onyx transition-all duration-300 transform' hover:-translate-y-1 shadow-xl"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-parchment py-4 border-y overflow-hidden whitespace-nowrap">
        <div className="flex justify-around items-center gap-12 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-neutral-500">
          <div className="animate-marquee">
            <span>Free Worldwide Shipping</span>
            <span className="text-brand-gold mx-12">•</span>
            <span>30-Day Returns</span>
            <span className="text-brand-gold mx-12">•</span>
            <span>18K Gold Plated</span>
            <span className="text-brand-gold mx-12">•</span>
            <span>Hypoallergenic</span>
            <span className="text-brand-gold mx-12">•</span>
            <span>Responsibly Sourced</span>
            <span className="text-brand-gold mx-12">•</span>
          </div>
          <div className="animate-marquee">
            <span>Free Worldwide Shipping</span>
            <span className="text-brand-gold mx-12">•</span>
            <span>30-Day Returns</span>
            <span className="text-brand-gold mx-12">•</span>
            <span>18K Gold Plated</span>
            <span className="text-brand-gold mx-12">•</span>
            <span>Hypoallergenic</span>
            <span className="text-brand-gold mx-12">•</span>
            <span>Responsibly Sourced</span>
            <span className="text-brand-gold mx-12">•</span>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold">Discover More</p>
            <h2 className="font-serif text-4xl md:text-5xl">The Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm uppercase tracking-widest font-bold flex items-center gap-2 hover:text-brand-gold transition-colors group border-b border-transparent hover:border-brand-gold pb-1">
            Browse All <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.length > 0 ? (
            bestsellers.slice(0, 5).map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
             Array(5).fill(0).map((_, i) => (
                <div key={i} className="space-y-4 animate-pulse">
                  <div className="bg-neutral-100 aspect-[3/4]" />
                  <div className="h-4 bg-neutral-100 w-2/3 mx-auto" />
                  <div className="h-4 bg-neutral-100 w-1/3 mx-auto" />
                </div>
             ))
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Earrings', slug: 'Earrings', bgId: 'cat-earrings' },
          { name: 'Necklaces', slug: 'Necklaces', bgId: 'cat-necklaces' },
          { name: 'Huggies', slug: 'Huggies', bgId: 'cat-huggies' },
        ].map((cat) => (
          <Link 
            key={cat.name} 
            to={`/shop?category=${cat.slug}`}
            className="group relative h-[450px] overflow-hidden bg-neutral-100 flex items-center justify-center"
          >
            <div 
              className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110"
              data-strk-bg-id={cat.bgId}
              data-strk-bg={`[cat-title-${cat.slug}] gold jewelry editorial close up`}
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
            <span id={`cat-title-${cat.slug}`} className="relative z-10 text-white font-serif text-3xl uppercase tracking-widest">
              {cat.name}
              <div className="h-0.5 bg-white w-0 group-hover:w-full transition-all duration-500 mt-2 mx-auto" />
            </span>
          </Link>
        ))}
      </section>

      {/* Story Section */}
      <section className="bg-brand-parchment overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div 
            className="w-full md:w-1/2 h-[500px] md:h-[700px] bg-neutral-200"
            data-strk-bg-id="story-img"
            data-strk-bg="fine jewelry artisan hands gold materials"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="1000"
          />
          <div className="w-full md:w-1/2 p-12 md:p-24 space-y-8">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold">Uncompromising Quality</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Our story is crafted with precision.</h2>
            <p className="text-neutral-600 leading-relaxed font-light">
              Velmora was born from a desire for jewelry that feels elevated yet wearable. 
              We blend heritage craftsmanship with contemporary silhouettes to create 
              pieces that stand the test of time.
            </p>
            <div className="pt-4">
              <Link to="#" className="text-sm border-b border-brand-onyx pb-2 uppercase tracking-widest font-bold hover:text-brand-gold hover:border-brand-gold transition-colors">
                Our Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* UGC Section */}
      <section className="px-6 space-y-12">
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold">As Seen On You</p>
          <h2 className="font-serif text-4xl md:text-5xl">Your Velmora Style</h2>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-8 no-scrollbar snap-x px-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative min-w-[280px] md:min-w-[320px] aspect-[9/16] bg-neutral-100 snap-center group overflow-hidden">
               <img 
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'%3E%3C/svg%3E"
                 data-strk-img-id={`ugc-${i}`}
                 data-strk-img={`woman wearing Velmora gold jewelry editorial style reel ${i}`}
                 data-strk-img-ratio="9x16"
                 data-strk-img-width="600"
                 alt="Velmora Community"
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                 <p className="text-white font-serif italic text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all delay-100">
                    "The perfect everyday staple."
                 </p>
                 <p className="text-white/70 text-xs uppercase tracking-widest mt-2">@velmora_muse</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-12">
         <div className="flex justify-center gap-1 text-brand-gold">
           {Array(5).fill(0).map((_, i) => <span key={i}>★</span>)}
         </div>
         <div className="relative">
           <span className="text-9xl font-serif text-brand-gold/10 absolute -top-12 left-1/2 -translate-x-1/2 -z-10 tracking-tighter">“</span>
           <p className="font-serif text-2xl md:text-3xl italic leading-relaxed">
             "I've finally found jewelry that doesn't irritate my skin and actually stays gold. 
             The packaging feels so premium, it was like opening a gift to myself."
           </p>
         </div>
         <p className="text-sm uppercase tracking-[0.3em] font-bold">Sophia R.</p>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t text-sm">
            {[
              { name: 'Emma L.', text: 'Absolutely love the ear cuffs! So unique and comfortable.' },
              { name: 'Sarah M.', text: 'Fast shipping and the quality is beyond what I expected for the price.' },
              { name: 'Jessica W.', text: 'My go-to for gifting. Every friend I’ve given a piece to is obsessed.' },
            ].map((t) => (
              <div key={t.name} className="space-y-4">
                <p className="text-neutral-500">"{t.text}"</p>
                <p className="font-bold tracking-widest">{t.name}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-onyx text-white p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            data-strk-bg-id="newsletter-bg"
            data-strk-bg="delicate gold chain textured background"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
          <div className="relative z-10 space-y-6 max-w-lg mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl">Join the Muse</h2>
            <p className="font-light tracking-wide opacity-80">
              Sign up for our newsletter and receive 10% off your first order, plus early access to new collections.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 pt-4">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="flex-1 bg-transparent border-b border-white/30 py-4 outline-none focus:border-brand-gold transition-colors uppercase text-xs tracking-widest"
              />
              <button className="bg-white text-brand-onyx px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-white transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
