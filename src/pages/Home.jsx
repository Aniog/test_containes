import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { ArrowRight, Star } from 'lucide-react';
import { useCart } from '../lib/CartContext';

const PRODUCTS = [
  {
    id: '1',
    name: 'Vivid Aura Jewels',
    price: 42,
    type: 'Ear Cuff',
    desc: 'Gold ear cuff with crystal accent',
    imgId: 'product-1-vivid-aura',
  },
  {
    id: '2',
    name: 'Majestic Flora Nectar',
    price: 68,
    type: 'Necklace',
    desc: 'Multicolor floral crystal necklace',
    imgId: 'product-2-majestic-flora',
  },
  {
    id: '3',
    name: 'Golden Sphere Huggies',
    price: 38,
    type: 'Huggies',
    desc: 'Chunky gold dome huggie earrings',
    imgId: 'product-3-golden-sphere',
  },
  {
    id: '4',
    name: 'Amber Lace Earrings',
    price: 54,
    type: 'Earrings',
    desc: 'Textured gold filigree drop earrings',
    imgId: 'product-4-amber-lace',
  },
  {
    id: '5',
    name: 'Royal Heirloom Set',
    price: 95,
    type: 'Set',
    desc: 'Gift-boxed earring + necklace set',
    imgId: 'product-5-royal-heirloom',
  }
];

const CATEGORIES = [
  { title: 'Earrings', imgId: 'cat-earrings' },
  { title: 'Necklaces', imgId: 'cat-necklaces' },
  { title: 'Huggies', imgId: 'cat-huggies' }
];

const REELS = [
  { id: '1', text: 'Daily staples', imgId: 'reel-1' },
  { id: '2', text: 'Evening elegance', imgId: 'reel-2' },
  { id: '3', text: 'Golden hour glow', imgId: 'reel-3' },
  { id: '4', text: 'Layering perfection', imgId: 'reel-4' },
  { id: '5', text: 'Statement pieces', imgId: 'reel-5' },
];

const REVIEWS = [
  { text: "Absolutely stunning quality. These huggies have become my daily uniform.", name: "Sarah M." },
  { text: "The perfect amount of shine. Looks so much more expensive than it is.", name: "Elena R." },
  { text: "Beautiful packaging and the necklace is gorgeous. Will be buying more for gifts!", name: "Chloe T." }
];

export default function Home() {
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    let cleanup = () => {};
    try {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    } catch (e) {
      console.log('ImageHelper not ready or config missing', e);
    }
    return () => cleanup && typeof cleanup === 'function' && cleanup();
  }, []);

  return (
    <div ref={containerRef} className="-mt-24">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center pt-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-secondary"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        ></div>
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-md tracking-wider">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-white/90 md:text-lg mb-10 max-w-xl mx-auto tracking-wide">
            Discover our collection of premium demi-fine gold jewelry, designed for everyday elegance.
          </p>
          <Link to="/collection" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 uppercase tracking-[0.2em] text-xs font-semibold transition-all hover:scale-105 border border-transparent">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-primary text-primary-foreground py-4 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-center text-primary-foreground/80">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-20 md:py-32 container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12 border-b border-border pb-4">
          <h2 id="bestsellers-title" className="text-2xl md:text-3xl font-serif uppercase tracking-[0.1em]">Bestsellers</h2>
          <Link to="/collection" className="text-xs font-semibold uppercase tracking-[0.2em] hover:text-accent transition-colors flex items-center gap-2">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {PRODUCTS.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group group/card block cursor-pointer">
              <div className="relative aspect-[3/4] bg-secondary/30 mb-4 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[prod-type-${product.id}] [prod-name-${product.id}] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <button 
                    className="w-full bg-background text-foreground py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-accent hover:text-accent-foreground transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 opacity-0 group-hover:opacity-100 border border-transparent"
                    onClick={(e) => { e.preventDefault(); addToCart(product); }}
                  >
                    Quick Add
                  </button>
                </div>
              </div>
              <div className="text-center">
                <p id={`prod-type-${product.id}`} className="text-[10px] text-foreground/50 uppercase tracking-[0.2em] mb-1 font-semibold">{product.type}</p>
                <h3 id={`prod-name-${product.id}`} className="font-serif uppercase tracking-[0.1em] text-sm mb-2">{product.name}</h3>
                <p className="text-sm font-medium text-foreground/80">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="bg-card">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-[600px] relative">
            <div 
              className="absolute inset-0 bg-secondary"
              data-strk-bg-id="story-bg"
              data-strk-bg="[story-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1200"
            ></div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 text-center md:text-left">
            <div className="max-w-md">
              <h2 id="story-title" className="text-3xl md:text-5xl font-serif uppercase tracking-[0.1em] mb-6 leading-tight">Elevating<br/>The Everyday</h2>
              <p className="text-foreground/80 mb-8 leading-relaxed font-light text-sm md:text-base">
                Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. We combine heritage craftsmanship with modern design to create demi-fine pieces that bring a touch of quiet luxury to your daily life.
              </p>
              <Link to="/collection" className="inline-block border border-foreground/30 px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-20 md:py-32 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {CATEGORIES.map((cat, i) => (
            <Link key={cat.title} to="/collection" className="group relative aspect-[3/4] overflow-hidden block">
              <div 
                className="absolute inset-0 bg-secondary transition-transform duration-1000 group-hover:scale-105"
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`[cat-title-${i}]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              ></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center z-10">
                <div className="border border-white/50 p-6 backdrop-blur-sm bg-black/10 w-full transform transition-transform duration-500 group-hover:scale-110">
                  <h3 id={`cat-title-${i}`} className="text-white font-serif text-2xl uppercase tracking-[0.2em]">{cat.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* UGC Reels Row */}
      <section className="py-12 md:py-24 bg-card border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-12 text-center">
          <h2 id="ugc-title" className="text-2xl md:text-3xl font-serif uppercase tracking-[0.1em]">Spotted in Velmora</h2>
          <p className="text-foreground/50 mt-4 text-xs font-semibold uppercase tracking-[0.2em]">@velmorajewelry</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 px-4 md:px-8 snap-x snap-mandatory">
          {REELS.map((reel) => (
            <div key={reel.id} className="min-w-[260px] md:min-w-[320px] aspect-[9/16] relative snap-center flex-shrink-0 group overflow-hidden bg-secondary">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={reel.text}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[reel-text-${reel.id}] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p id={`reel-text-${reel.id}`} className="text-white font-serif italic text-2xl drop-shadow-md">{reel.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 container mx-auto px-4 md:px-8">
        <h2 className="text-center text-3xl font-serif uppercase tracking-[0.1em] mb-16">Loved by You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto block">
          {REVIEWS.map((review, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-lg leading-relaxed italic mb-6 text-foreground/80">"{review.text}"</p>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground/50">{review.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}