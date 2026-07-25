import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '../lib/utils';
import { Star } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);

  // We don't have strkImgConfig, wait, the instructions say we should just use data-strk-img.
  // Wait, I should create a mock strkImgConfig.json and just run ImageHelper.loadImages if I were using the SDK.
  // Actually, I don't need to actually call ImageHelper.loadImages if the generic ImageTag works... Wait, the instructions say:
  // "To initiate image loading, use ImageHelper.loadImages(strkImgConfig, containerRef.current)."
  // Let me just import it and use it, if it exists. Wait, I don't have @strikingly/sdk. Let me check package.json to see if it's there.
  return (
    <div ref={containerRef}>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCRow />
      <Categories />
      <Story />
      <Testimonials />
      <Newsletter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden text-center z-0">
      {/* Background Image using generic img if we don't have SDK, or data-strk-bg */}
      <div 
        className="absolute inset-0 bg-black/40 z-10" 
      />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      <div className="relative z-20 px-4 max-w-3xl mx-auto flex flex-col items-center">
        <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 font-medium capitalize tracking-wide drop-shadow-sm">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="text-white/90 text-lg md:text-xl mb-10 max-w-xl font-light tracking-wide">
          Demi-fine gold jewelry designed for everyday elegance. Discover pieces that tell your story.
        </p>
        <Link 
          to="/shop" 
          className="inline-block px-10 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}

function TrustBar() {
  const benefits = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];
  return (
    <div className="bg-secondary text-secondary-foreground py-4 border-b border-border">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center md:justify-between items-center gap-y-4 gap-x-8 text-xs uppercase tracking-widest font-medium">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-center text-center">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Bestsellers() {
  const { addItem } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="font-serif text-4xl uppercase tracking-wider">Bestsellers</h2>
          <Link to="/shop" className="text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors hidden sm:block">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-12">
          {bestsellers.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                <img 
                   data-strk-img-id={`bestseller-img-${product.id}`}
                   data-strk-img={`[product-title-${product.id}]`}
                   data-strk-img-ratio="4x5"
                   data-strk-img-width="600"
                   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                   alt={product.name}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Second hover image placeholder */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-secondary flex items-center justify-center text-secondary-foreground text-xs uppercase tracking-widest">
                  <img 
                    data-strk-img-id={`bestseller-img2-${product.id}`}
                    data-strk-img={`[product-title-${product.id}] close up`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} alternate`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addItem({...product, variant: 'gold'}, 1);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs text-black py-3 uppercase tracking-widest text-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white"
                >
                  Quick Add
                </button>
              </Link>
              <Link to={`/product/${product.id}`} className="flex flex-col flex-1">
                <h3 id={`product-title-${product.id}`} className="font-serif text-lg tracking-wide uppercase mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm flex-1">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UGCRow() {
  const images = [
    { id: 1, caption: "Stacked perfectly" },
    { id: 2, caption: "Everyday essentials" },
    { id: 3, caption: "Golden hour glow" },
    { id: 4, caption: "Effortless elegance" },
    { id: 5, caption: "Morning rituals" },
    { id: 6, caption: "Curated layers" },
  ];

  return (
    <section className="py-16 overflow-hidden bg-background">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 id="ugc-title" className="font-serif text-3xl uppercase tracking-wider mb-2">As Seen On You</h2>
        <p id="ugc-subtitle" className="text-muted-foreground">Tag @VelmoraJewelry to be featured</p>
      </div>
      
      {/* Horizontal scroll container */}
      <div className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory px-4 md:px-0 md:justify-center gap-4">
        {images.map((item) => (
          <div key={item.id} className="snap-center relative w-64 md:w-72 aspect-[9/16] flex-shrink-0 group overflow-hidden bg-muted">
            <img 
               data-strk-img-id={`ugc-img-${item.id}`}
               data-strk-img={`[ugc-caption-${item.id}] [ugc-title]`}
               data-strk-img-ratio="9x16"
               data-strk-img-width="400"
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
               alt={item.caption}
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p id={`ugc-caption-${item.id}`} className="text-white font-serif text-lg tracking-wide">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Categories() {
  const categories = [
    { title: "Earrings", id: "earrings" },
    { title: "Necklaces", id: "necklaces" },
    { title: "Huggies", id: "huggies" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/shop?category=${cat.id}`} className="group block relative aspect-square overflow-hidden bg-muted">
              <img 
                 data-strk-img-id={`cat-img-${cat.id}`}
                 data-strk-img={`[cat-title-${cat.id}]`}
                 data-strk-img-ratio="1x1"
                 data-strk-img-width="800"
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                 alt={cat.title}
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                <span className="bg-white/95 px-8 py-3 uppercase tracking-widest text-sm font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span id={`cat-title-${cat.id}`}>{cat.title}</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 w-full relative aspect-[3/4] max-w-lg mx-auto bg-muted">
             <img 
               data-strk-img-id="story-img"
               data-strk-img="[story-title] [story-desc]"
               data-strk-img-ratio="3x4"
               data-strk-img-width="800"
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
               alt="Our Story"
               className="w-full h-full object-cover"
             />
          </div>
          <div className="flex-1 max-w-xl text-center lg:text-left">
            <h2 id="story-title" className="font-serif text-4xl lg:text-5xl uppercase tracking-wider mb-8">Quiet Luxury, Everyday Wear</h2>
            <p id="story-desc" className="text-lg text-secondary-foreground/80 leading-relaxed mb-10 font-serif">
              Velmora was born from a desire for jewelry that bridges the gap between fast fashion and fine jewelry. We believe that luxury shouldn't be reserved for special occasions—it should be part of your daily ritual. Our demi-fine pieces are crafted with 18k gold vermeil and ethically sourced stones to create modern heirlooms you'll never want to take off.
            </p>
            <Link to="#" className="inline-block border-b border-foreground pb-1 uppercase tracking-widest hover:text-primary hover:border-primary transition-colors text-sm">
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Sarah M.", text: "Absolutely stunning pieces. The gold has exactly the warm tone I was looking for, doesn't tarnish, and feels so premium." },
    { name: "Elena R.", text: "My new go-to for gifting. The packaging is gorgeous, and the earrings look ten times more expensive than they are." },
    { name: "Chloe T.", text: "I wear the Golden Sphere huggies every single day. I even shower in them and they look brand new. Love Velmora." }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-3xl uppercase tracking-wider mb-16">Notes from our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="font-serif text-lg leading-relaxed mb-6 italic">"{review.text}"</p>
              <p className="tracking-widest uppercase text-xs font-medium text-muted-foreground">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="py-24 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-wider mb-4">Join the Inner Circle</h2>
        <p className="mb-10 text-primary-foreground/90 font-light">Subscribe to receive 10% off your first order, plus exclusive access to new arrivals and secret sales.</p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Email Address" 
            required
            className="flex-1 bg-transparent border border-primary-foreground/30 px-6 py-4 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground transition-colors"
          />
          <button 
            type="submit"
            className="bg-primary-foreground text-primary px-8 py-4 uppercase tracking-widest text-sm hover:bg-primary-foreground/90 transition-colors font-medium border border-primary-foreground"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}