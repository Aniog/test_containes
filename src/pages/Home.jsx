import React, { useEffect, useRef, useState } from 'react';
import { productsApi } from '../api/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

const Home = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  // Static slugs for build-time tracing
  const seedSlugs = [
    'vivid-aura-jewels',
    'majestic-flora-nectar',
    'golden-sphere-huggies',
    'amber-lace-earrings',
    'royal-heirloom-set'
  ];

  useEffect(() => {
    productsApi.list().then(data => {
      setBestsellers(data.slice(0, 5));
    });
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [bestsellers]);

  const categories = [
    { title: 'Earrings', id: 'earrings' },
    { title: 'Necklaces', id: 'necklaces' },
    { title: 'Huggies', id: 'huggies' },
  ];

  const ugcPosts = [
    { id: '1', caption: 'Golden hour in our Aura cuff.' },
    { id: '2', caption: 'The necklace you will never take off.' },
    { id: '3', caption: 'Daily essentials: Golden Huggies.' },
    { id: '4', caption: 'Elegance is in the details.' },
    { id: '5', caption: 'Lace-inspired perfection.' },
  ];

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hidden Hints for Static Analyzer */}
      <div className="hidden" aria-hidden="true">
        {seedSlugs.map(slug => (
          <div key={`hints-${slug}`}>
            <img data-strk-img-id={`home-pd-${slug}`} data-strk-img={`[pd-name-${slug}] piece`} />
            <img data-strk-img-id={`shop-pd-${slug}`} data-strk-img={`[pd-name-${slug}] shop`} />
            <img data-strk-img-id={`pdp-main-${slug}`} data-strk-img="pdp main" />
            <img data-strk-img-id={`pdp-thumb-${slug}-1`} data-strk-img="pdp thumb 1" />
            <img data-strk-img-id={`pdp-thumb-${slug}-2`} data-strk-img="pdp thumb 2" />
            <img data-strk-img-id={`pdp-thumb-${slug}-3`} data-strk-img="pdp thumb 3" />
            <img data-strk-img-id={`pdp-thumb-${slug}-4`} data-strk-img="pdp thumb 4" />
            <img data-strk-img-id={`related-pd-${slug}`} data-strk-img="related" />
            <img data-strk-img-id={`cart-img-${slug}`} data-strk-img="cart" />
          </div>
        ))}
        {ugcPosts.map(p => (
          <img key={`ugc-hint-${p.id}`} data-strk-img-id={`ugc-${p.id}`} data-strk-img={`[ugc-caption-${p.id}]`} />
        ))}
        <img data-strk-img-id="brand-story-img" data-strk-img="jewelry atelier hands" />
        <div data-strk-bg-id="hero-bg-main" data-strk-bg="fine jewelry model editorial" />
      </div>

      {/* 1. Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          data-strk-bg="[hero-headline] [hero-subheadline]"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <h1 id="hero-headline" className="text-5xl md:text-7xl font-serif mb-6 drop-shadow-lg tracking-tight">Crafted to be Treasured</h1>
          <p id="hero-subheadline" className="text-sm md:text-base font-sans uppercase tracking-[0.3em] mb-10 max-w-xl mx-auto opacity-90">
            Premium demi-fine jewelry for your everyday luxury.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-[#C5A059] hover:bg-white hover:text-[#1A150E] transition-all duration-500 text-white px-10 py-4 font-sans uppercase tracking-[0.2em] text-xs font-semibold"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-[#1A150E] text-[#FAF9F6] py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-center">
          <span className="flex-1">Free Worldwide Shipping</span>
          <span className="hidden md:block text-[#A69B8F]">•</span>
          <span className="flex-1">30-Day Returns</span>
          <span className="hidden md:block text-[#A69B8F]">•</span>
          <span className="flex-1">18K Gold Plated</span>
          <span className="hidden md:block text-[#A69B8F]">•</span>
          <span className="flex-1">Hypoallergenic</span>
        </div>
      </section>

      {/* 3. Bestsellers Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 id="bestsellers-title" className="text-4xl md:text-5xl font-serif mb-4">The Bestsellers</h2>
            <p className="text-[#A69B8F] font-sans tracking-wide">Most-loved pieces designed to accentuate your natural elegance.</p>
          </div>
          <Link to="/shop" className="group font-sans uppercase tracking-widest text-xs flex items-center gap-2 border-b border-transparent hover:border-[#1A150E] transition-all pb-1">
            View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/product/${product.data.slug}`} className="relative aspect-[2/3] overflow-hidden bg-[#E5E2DD] mb-6 block">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'%3E%3Crect width='2' height='3' fill='%23E5E2DD'/%3E%3C/svg%3E"
                  alt={product.data.name}
                  data-strk-img={`[pd-name-${product.data.slug}] [bestsellers-title]`}
                  data-strk-img-id={`home-pd-${product.data.slug}`}
                  data-strk-img-width="400"
                  data-strk-img-ratio="2x3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="absolute bottom-0 left-0 right-0 py-3 bg-white/90 backdrop-blur-sm text-[#1A150E] font-sans uppercase tracking-widest text-[10px] translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  Quick Add
                </button>
              </Link>
              <h3 id={`pd-name-${product.data.slug}`} className="font-serif text-sm tracking-widest uppercase mb-1">{product.data.name}</h3>
              <p className="font-serif text-[#C5A059]">${product.data.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Reel-style UGC Row */}
      <section className="py-24 bg-[#FAF9F6] border-y border-[#E5E2DD]">
        <div className="px-6 max-w-7xl mx-auto mb-12">
            <h2 id="ugc-title-main" className="text-3xl md:text-4xl font-serif text-center uppercase tracking-widest">As Seen On You</h2>
        </div>
        <div className="flex overflow-x-auto gap-4 px-6 pb-6 scrollbar-hide">
          {ugcPosts.map((post) => (
            <div key={post.id} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative bg-[#E5E2DD] overflow-hidden group">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'%3E%3Crect width='9' height='16' fill='%23E5E2DD'/%3E%3C/svg%3E"
                data-strk-img={`[ugc-caption-${post.id}] [ugc-title-main]`}
                data-strk-img-id={`ugc-${post.id}`}
                data-strk-img-width="400"
                data-strk-img-ratio="9x16"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                alt="UGC"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p id={`ugc-caption-${post.id}`} className="text-[#FAF9F6] font-serif italic text-lg opacity-90 capitalize tracking-wide">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop?category=${cat.title}`}
              className="relative aspect-square overflow-hidden group block"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                data-strk-bg={`[cat-title-${cat.id}] jewelry`}
                data-strk-bg-id={`cat-bg-${cat.id}`}
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 id={`cat-title-${cat.id}`} className="text-white text-3xl font-serif tracking-[0.2em] uppercase">{cat.title}</h3>
              </div>
              <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white font-sans uppercase tracking-widest text-[10px] border-b border-white pb-1">Explore</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story Split */}
      <section className="grid grid-cols-1 md:grid-cols-2 bg-[#1A150E] overflow-hidden">
        <div className="aspect-square md:aspect-auto h-full relative overflow-hidden">
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23E5E2DD'/%3E%3C/svg%3E"
            data-strk-img="jewelry making process gold atelier hands"
            data-strk-img-id="brand-story-img"
            data-strk-img-width="1000"
            data-strk-img-ratio="1x1"
            className="w-full h-full object-cover opacity-80"
            alt="Atelier"
          />
        </div>
        <div className="flex flex-col justify-center items-center py-24 px-12 md:px-24 text-center">
          <span className="text-[#C5A059] font-sans uppercase tracking-[0.4em] text-[10px] mb-6 block">Our Legacy</span>
          <h2 id="story-title-main" className="text-[#FAF9F6] text-4xl md:text-5xl font-serif mb-8 leading-tight">Meticulously Crafted, Timelessly Elegant.</h2>
          <p className="text-[#A69B8F] font-sans leading-loose mb-10 max-w-sm">
            Velmora was born from a passion for refined aesthetics and the belief that everyday jewelry should be an heirloom in the making. Our pieces use ethically sourced materials and 18K gold plating.
          </p>
          <Link to="/about" className="text-[#FAF9F6] font-serif border-b border-[#FAF9F6] pb-1 uppercase tracking-widest text-sm hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
            Our Story
          </Link>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 px-6 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex gap-1 text-[#C5A059] mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill="#C5A059" />
                  ))}
                </div>
                <p className="text-xl font-serif italic mb-8 leading-relaxed">
                  "{i === 1 ? 'Every piece feels like a discovery. The quality of the gold plating is unmatched at this price.' : i === 2 ? 'The packaging is editorial-worthy and the jewelry is even more stunning in person. My new daily staples.' : 'Bought the Heirloom set as a gift, and ended up getting one for myself too. Truly treasures.'}"
                </p>
                <div className="uppercase tracking-[0.2em] font-sans text-[10px] text-[#A69B8F]">
                  — {i === 1 ? 'ELENA' : i === 2 ? 'SOPHIA' : 'MAYA'} K.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter Capture */}
      <section className="py-32 px-6 flex justify-center bg-[#FAF9F6] border-t border-[#E5E2DD]">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 uppercase tracking-widest">Join the Circle</h2>
          <p className="text-[#A69B8F] font-sans mb-10 tracking-wide">Be the first to explore new collections and enjoy 10% off your first order.</p>
          <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-1 bg-transparent border-b border-[#1A150E] py-4 px-2 font-sans text-sm focus:outline-none placeholder:text-[#A69B8F]/50"
            />
            <button className="bg-[#1A150E] text-[#FAF9F6] px-12 py-4 font-sans uppercase tracking-widest text-xs hover:bg-[#C5A059] transition-all duration-500">
              Join
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
