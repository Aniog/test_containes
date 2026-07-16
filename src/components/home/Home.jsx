import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/components/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/api/seedData';
import { Star } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    // Attempt loadImages if strictly imported correctly, or catch if sdk is not available yet
    try {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    } catch (e) {
      console.log('Image helper not loaded yet', e);
    }
  }, []);

  const bestsellers = products.filter(p => p.bestseller).slice(0, 5);

  const categories = [
    { title: 'Earrings', id: 'earrings', query: 'gold earrings jewelry editorial model close up' },
    { title: 'Necklaces', id: 'necklaces', query: 'gold necklace delicate layers model chest' },
    { title: 'Huggies', id: 'huggies', query: 'gold small huggie hoop earrings ear stack' },
  ];

  return (
    <div ref={containerRef} className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-[#e6ded5]"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="[hero-headline] warm lighting editorial gold jewelry model on neck"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 z-10 bg-black/20" />
        
        <div className="relative z-20 text-center text-white max-w-3xl px-6 flex flex-col items-center">
          <p id="hero-subline" className="uppercase tracking-[0.2em] text-sm mb-6">Velmora Fine Jewelry</p>
          <h1 id="hero-headline" className="text-5xl md:text-7xl mb-8 leading-tight">Crafted to be Treasured</h1>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trust bar Mobile version (Desktop in header) */}
      <div className="md:hidden bg-primary text-primary-foreground text-[10px] py-3 text-center tracking-widest px-4 leading-relaxed">
        FREE WORLDWIDE SHIPPING &middot; 30-DAY RETURNS<br />
        18K GOLD PLATED &middot; HYPOALLERGENIC
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 px-6 container mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="text-3xl md:text-4xl text-primary">Discover the Bestsellers</h2>
          <Link to="/shop" className="hidden md:inline-block text-sm uppercase tracking-widest border-b border-primary pb-1 hover:opacity-70 transition-opacity">View All</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <div key={product.id} className="group relative flex flex-col group">
              <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 bg-secondary overflow-hidden block">
                {/* Main Image */}
                <img 
                  data-strk-img-id={`prod-main-${product.id}`}
                  data-strk-img={`[product-name-${product.id}] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                />
                {/* Hover Image */}
                <img 
                  data-strk-img-id={`prod-hover-${product.id}`}
                  data-strk-img={`[product-name-${product.id}] close up jewelry detail macro`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
                
                {/* Quick Add Button */}
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button 
                    className="w-full bg-white/90 text-primary hover:bg-white hover:text-primary backdrop-blur-sm shadow-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product);
                    }}
                  >
                    Quick Add
                  </Button>
                </div>
              </Link>
              
              <div className="flex flex-col flex-1">
                <Link to={`/product/${product.id}`} className="flex-1">
                  <h3 id={`product-name-${product.id}`} className="font-serif text-lg tracking-wider uppercase mb-2">{product.name}</h3>
                </Link>
                <p className="text-muted-foreground">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6 container mx-auto">
        <h2 id="categories-title" className="sr-only">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(cat => (
            <Link key={cat.id} to={`/shop?category=${cat.id}`} className="group relative aspect-[4/5] md:aspect-square bg-secondary overflow-hidden flex items-center justify-center">
              <img 
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={`[cat-name-${cat.id}] ${cat.query}`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <h3 id={`cat-name-${cat.id}`} className="relative z-10 text-white font-serif text-3xl uppercase tracking-widest">{cat.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Split Story Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 aspect-[3/4] relative bg-secondary overflow-hidden">
            <div 
              className="absolute inset-0 w-full h-full"
              data-strk-bg-id="story-image"
              data-strk-bg="[story-headline] jewelry artisan crafting gold bench"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
          </div>
          <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
            <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-6">Our Heritage</p>
            <h2 id="story-headline" className="text-4xl md:text-5xl mb-8 leading-tight text-primary">Redefining Demi-Fine</h2>
            <p className="text-muted-foreground mb-10 leading-relaxed text-lg font-light">
              Velmora was born from a desire to bridge the gap between accessible fashion jewelry and unattainable fine pieces. We believe that everyday luxury should be crafted with intention, using only premium 18k gold plating and ethically sourced materials.
            </p>
            <Button variant="outline" asChild>
              <Link to="/about">Discover Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reel-style UGC row */}
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 mb-12 text-center text-primary">
          <h2 id="ugc-title" className="text-3xl md:text-4xl mb-4">Spotted In Velmora</h2>
          <p className="uppercase tracking-[0.2em] text-xs">@velmorafinejewelry</p>
        </div>
        
        <div className="flex gap-4 px-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {[1,2,3,4,5,6].map((item, i) => (
            <div key={i} className="flex-shrink-0 w-72 aspect-[9/16] relative snap-center bg-card rounded-md overflow-hidden group">
              <img 
                data-strk-img-id={`ugc-${i}`}
                data-strk-img={`[ugc-title] woman wearing gold jewelry lifestyle instagram selfie style v${i}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Worn jewelry"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-serif italic text-lg mb-2">"My everyday essential"</p>
                <p className="text-xs uppercase tracking-wider opacity-80">Shop the look</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 text-center text-primary border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-16">Stories from our Society</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Sarah M.", quote: "The quality is absolutely unmatched for this price. My Vivid Aura ear cuff hasn't tarnished after months of daily wear." },
              { name: "Elena R.", quote: "Beautiful packaging and stunning jewelry. I bought the Royal Heirloom set for my sister and she was in awe." },
              { name: "Chloe T.", quote: "Finally found huggies that don't irritate my ears and look genuinely expensive. Velmora is my new go-to." }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex gap-1 mb-6 text-accent">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="font-serif italic text-xl mb-6 flex-1 text-primary/80">"{review.quote}"</p>
                <p className="uppercase tracking-[0.2em] text-xs font-medium">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
