import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeSections() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { name: 'Earrings', href: '/shop?category=earrings', label: 'EARRINGS' },
    { name: 'Necklaces', href: '/shop?category=necklaces', label: 'NECKLACES' },
    { name: 'Huggies', href: '/shop?category=huggies', label: 'HUGGIES' },
  ];

  const ugcPosts = [
    { id: 1, caption: 'Perfect Stack', query: 'gold jewelry ear curation minimalist' },
    { id: 2, caption: 'Everyday Essentials', query: 'minimalist gold necklace layer' },
    { id: 3, caption: 'Golden Hour', query: 'jewelry model sunset lighting' },
    { id: 4, caption: 'The Detail', query: 'gold jewelry texture close up' },
    { id: 5, caption: 'Our Muse', query: 'elegant woman wearing jewelry minimalist' },
  ];

  const testimonials = [
    { name: 'Sarah M.', text: 'The quality of these earrings is incredible for the price. I wear them every single day.', stars: 5 },
    { name: 'Elena R.', text: 'Packaged beautifully and arrived so quickly. The Golden Sphere Huggies are my new favorite.', stars: 5 },
    { name: 'James T.', text: 'Perfect gift for my sister. She hasnt taken the necklace off since she got it.', stars: 5 },
  ];

  return (
    <div className="bg-white" ref={containerRef}>
      {/* Shop By Category */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <a 
                key={cat.name} 
                href={cat.href}
                className="group relative aspect-[4/5] overflow-hidden bg-[#FAF9F6]"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  data-strk-bg-id={`cat-bg-${cat.name}`}
                  data-strk-bg={`luxury gold jewelry ${cat.name} editorial`}
                  data-strk-bg-ratio="4x5"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-10 left-0 right-0 text-center">
                  <span className="text-white text-xs tracking-[0.4em] font-medium uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Explore {cat.label}
                  </span>
                  <div className="mt-2 h-[1px] w-0 bg-white mx-auto group-hover:w-24 transition-all duration-500" />
                </div>
                {/* Fixed Overlay Label */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <h3 className="text-white text-3xl font-serif font-light tracking-widest">{cat.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-24 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div 
              className="aspect-square bg-[#FAF9F6] overflow-hidden"
              data-strk-bg-id="brand-story-img"
              data-strk-bg="elegant minimalist jewelry atelier hands working"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="1000"
            />
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-[10px] tracking-[0.4em] text-primary uppercase font-bold mb-6">Our Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-serif font-light mb-8 leading-tight">Crafting fine jewelry for your everyday ritual.</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-10 max-w-md">
                Velmora was born from a desire for high-quality, demi-fine jewelry that doesn't demand a special occasion. We create pieces that are meant to be lived in—quiet luxury that transitions seamlessly from morning coffee to evening cocktails.
              </p>
              <a 
                href="/about" 
                className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-800 border-b border-gray-200 hover:border-primary transition-all pb-1"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section className="py-24">
        <div className="px-6 md:px-12 mb-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <h3 className="text-xl md:text-2xl font-serif font-light italic">Seen on Velmora Muses</h3>
            <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">Share your story #VelmoraFine</span>
          </div>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-4 px-6 md:px-12 pb-8">
          {ugcPosts.map((post) => (
            <div 
              key={post.id} 
              className="relative min-w-[280px] md:min-w-[320px] aspect-[9/16] bg-gray-100 flex-shrink-0 group overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                data-strk-bg-id={`ugc-bg-${post.id}`}
                data-strk-bg={post.query}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-white text-sm font-serif italic font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {post.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {testimonials.map((t, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                        <div className="flex gap-1 mb-6">
                            {[...Array(t.stars)].map((_, j) => (
                                <Star key={j} size={14} className="fill-primary text-primary" />
                            ))}
                        </div>
                        <p className="text-lg font-serif font-light leading-relaxed mb-8 italic">"{t.text}"</p>
                        <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-gray-400">{t.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xs tracking-[0.4em] uppercase text-primary font-bold mb-8">Join the Inner Circle</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-light mb-8">Enjoy 10% off your first order</h3>
          <p className="text-muted-foreground font-light mb-12 max-w-md mx-auto">
            Receive exclusive early access to new collections and editorial stories.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
             <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-transparent border-b border-gray-300 py-3 px-1 text-xs tracking-widest uppercase focus:outline-none focus:border-primary transition-colors text-center md:text-left"
            />
            <button className="bg-primary text-white py-4 px-12 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-opacity-90 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
