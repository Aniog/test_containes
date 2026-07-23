import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { useCart } from '@/lib/cart';
import { formatPrice } from '@/lib/utils';
// Note: In a real environment we'd use ImageHelper, here we just use placeholders
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BESTSELLERS = [
  { id: '1', name: 'Vivid Aura Jewels', price: 42, variant: 'Gold', imgId: 'prod-vivid-aura-1', imgAltId: 'prod-vivid-aura-2' },
  { id: '2', name: 'Majestic Flora Nectar', price: 68, variant: 'Gold', imgId: 'prod-majestic-flora-1', imgAltId: 'prod-majestic-flora-2' },
  { id: '3', name: 'Golden Sphere Huggies', price: 38, variant: 'Gold', imgId: 'prod-golden-sphere-1', imgAltId: 'prod-golden-sphere-2' },
  { id: '4', name: 'Amber Lace Earrings', price: 54, variant: 'Gold', imgId: 'prod-amber-lace-1', imgAltId: 'prod-amber-lace-2' },
  { id: '5', name: 'Royal Heirloom Set', price: 95, variant: 'Gold', imgId: 'prod-royal-heirloom-1', imgAltId: 'prod-royal-heirloom-2' },
];

const REELS = [
  { id: 'r1', caption: 'Everyday elegance', imgId: 'reel-everyday-1' },
  { id: 'r2', caption: 'The perfect stack', imgId: 'reel-stack-1' },
  { id: 'r3', caption: 'Golden hour glow', imgId: 'reel-golden-1' },
  { id: 'r4', caption: 'Statement pieces', imgId: 'reel-statement-1' },
  { id: 'r5', caption: 'Effortless style', imgId: 'reel-effortless-1' },
];

const CATEGORIES = [
  { id: 'c1', name: 'Earrings', imgId: 'cat-earrings' },
  { id: 'c2', name: 'Necklaces', imgId: 'cat-necklaces' },
  { id: 'c3', name: 'Huggies', imgId: 'cat-huggies' },
];

const TESTIMONIALS = [
  { id: 't1', text: "The quality is absolutely stunning. It looks far more expensive than it actually is. My new everyday piece.", author: "Sarah M.", initials: "S" },
  { id: 't2', text: "I've worn my huggies every day for months and they haven't tarnished at all. Beautiful packaging too!", author: "Elena R.", initials: "E" },
  { id: 't3', text: "Bought the Royal Heirloom Set as a gift for myself and I couldn't be happier. Quiet luxury at its best.", author: "Jessica T.", initials: "J" },
];

export default function Home() {
  const containerRef = useRef(null);
  const addItem = useCart(state => state.addItem);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* 1. Full-bleed Hero */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 z-0 bg-secondary/50"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          {/* Fallback image if SDK not running */}
          <img 
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2670&auto=format&fit=crop" 
            alt="Warm-lit close-up of gold jewelry on a model" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl mb-6 font-serif drop-shadow-lg">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light tracking-wide max-w-2xl mb-10 drop-shadow-md">
            Premium demi-fine gold jewelry for the modern romantic.
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 font-medium tracking-widest uppercase text-sm border-none">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="bg-foreground text-background py-3 text-center border-y border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs md:text-sm tracking-widest uppercase font-medium md:divide-x md:divide-border/20">
            <span className="md:pr-8">Free Worldwide Shipping</span>
            <span className="md:px-8">30-Day Returns</span>
            <span className="md:px-8">18K Gold Plated</span>
            <span className="md:pl-8">Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 3. Bestsellers Grid */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl">Our Bestsellers</h2>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-primary transition-colors">
            Shop All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {BESTSELLERS.map((product) => (
            <div key={product.id} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[4/5] bg-secondary mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1599643478524-fb66f7f3bc75?q=80&w=800&auto=format&fit=crop"
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img 
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"
                  alt={`${product.name} alternate view`}
                  data-strk-img-id={product.imgAltId}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-105 group-hover:scale-100 transform"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Button 
                    className="w-full bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground backdrop-blur-sm rounded-none border-none uppercase tracking-widest text-xs"
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product);
                    }}
                  >
                    Quick Add
                  </Button>
                </div>
              </div>
              <h3 className="font-serif text-lg tracking-wide uppercase">{product.name}</h3>
              <p className="text-muted-foreground">{formatPrice(product.price)}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="outline" className="rounded-none uppercase tracking-widest w-full">
            <Link to="/shop">Shop All Bestsellers</Link>
          </Button>
        </div>
      </section>

      {/* 4. Reels Row */}
      <section className="py-24 bg-card border-y border-border/40 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-12">
          <h2 id="reels-title" className="font-serif text-3xl md:text-4xl text-center">Spotted In Velmora</h2>
        </div>
        <div className="flex overflow-x-auto pb-8 gap-4 px-4 md:px-8 snap-x scrollbar-hide no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {REELS.map((reel) => (
            <div key={reel.id} className="relative flex-none w-[280px] h-[500px] snap-center bg-secondary overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop"
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif text-xl italic">{reel.caption}</p>
                <div className="flex items-center gap-2 mt-2 text-xs uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Shop the look</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((category) => (
            <Link key={category.id} to="/shop" className="group relative aspect-[4/5] bg-secondary overflow-hidden block">
              <img 
                src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop"
                alt={category.name}
                data-strk-img-id={category.imgId}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/90 backdrop-blur px-8 py-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-serif text-xl md:text-2xl uppercase tracking-widest">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="bg-card">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          <div className="relative w-full h-[400px] md:h-auto bg-secondary">
             <img 
                src="https://images.unsplash.com/photo-1574344605996-512c1b1c67d6?q=80&w=1200&auto=format&fit=crop"
                alt="Jewelry making process"
                className="absolute inset-0 w-full h-full object-cover"
              />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 bg-secondary/30">
            <h2 id="story-title" className="font-serif text-3xl md:text-5xl mb-8">The Art of<br/>Quiet Luxury</h2>
            <p className="text-muted-foreground leading-relaxed font-light mb-8 max-w-md text-lg">
              Velmora was born from a desire to create demi-fine jewelry that doesn't compromise on quality. Every piece is thoughtfully designed to be an extension of you — crafted to be treasured, worn daily, and passed down.
            </p>
            <div>
              <Button asChild variant="outline" className="rounded-none uppercase tracking-widest hover:bg-primary hover:text-primary-foreground hover:border-primary px-8">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl text-center mb-16 uppercase tracking-widest">Loved by You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="text-center flex flex-col items-center">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-serif text-xl italic leading-relaxed mb-8 flex-1">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-serif text-lg text-foreground">
                  {testimonial.initials}
                </div>
                <span className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}