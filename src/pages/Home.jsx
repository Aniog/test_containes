import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
// Using empty config since we will only use data-strk-img tags, not full config yet
const strkImgConfig = { images: {}, backgrounds: {} };

const SEED_PRODUCTS = [
  { id: '1', name: 'VIVID AURA JEWELS', price: 42.00, imageId: 'product-1-vivid-aura' },
  { id: '2', name: 'MAJESTIC FLORA NECTAR', price: 68.00, imageId: 'product-2-majestic-flora' },
  { id: '3', name: 'GOLDEN SPHERE HUGGIES', price: 38.00, imageId: 'product-3-golden-sphere' },
  { id: '4', name: 'AMBER LACE EARRINGS', price: 54.00, imageId: 'product-4-amber-lace' },
  { id: '5', name: 'ROYAL HEIRLOOM SET', price: 95.00, imageId: 'product-5-royal-heirloom' },
];

export default function Home() {
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center -mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="[hero-title] close up elegant gold jewelry on beautiful model warm lighting editorial style"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="container relative z-10 text-center text-primary-foreground px-4">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl mb-6">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide">
            Discover our collection of demi-fine gold jewelry. Designed for the modern muse, perfect for everyday elegance.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-primary-foreground text-primary px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary text-secondary-foreground py-4 border-b border-border">
        <div className="container overflow-x-auto whitespace-nowrap hide-scrollbar">
          <div className="flex items-center justify-center gap-8 md:gap-16 min-w-max px-4 text-xs md:text-sm uppercase tracking-widest font-medium">
            <span>Free Worldwide Shipping</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>30-Day Returns</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>18K Gold Plated</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <h2 id="bestsellers-title" className="text-3xl md:text-4xl text-foreground">Bestsellers</h2>
            <Link to="/shop" className="group flex items-center text-sm uppercase tracking-widest hover:text-accent transition-colors">
              View All <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {SEED_PRODUCTS.map((product) => (
              <div key={product.id} className="group relative flex flex-col group/card cursor-pointer">
                <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary">
                  {/* Primary Image */}
                  <img 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover/card:opacity-0"
                    data-strk-img-id={`${product.imageId}-1`}
                    data-strk-img={`[product-${product.id}-title] elegant simple gold jewelry product shot warm background`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  {/* Hover Image */}
                  <img 
                    alt={`${product.name} lifestyle`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                    data-strk-img-id={`${product.imageId}-2`}
                    data-strk-img={`[product-${product.id}-title] worn by model lifestyle editorial shot gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  
                  {/* Quick Add Button */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart({ ...product, image: `https://images.unsplash.com/photo-[replace-me]`, variant: 'Gold' }, 1, 'Gold');
                      }}
                      className="w-full bg-background/90 backdrop-blur text-foreground py-3 text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
                    >
                      Quick Add - ${product.price}
                    </button>
                  </div>
                </Link>
                <div className="flex flex-col gap-1 items-center text-center">
                  <h3 id={`product-${product.id}-title`} className="font-serif uppercase tracking-widest text-sm">{product.name}</h3>
                  <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC / Editorial Reel Row */}
      <section className="py-16 bg-secondary overflow-hidden">
        <div className="container mb-8 text-center">
          <h2 id="ugc-title" className="text-3xl text-foreground font-serif">Worn By You</h2>
          <p id="ugc-subtitle" className="text-muted-foreground mt-2">Tag @velmorajewelry to be featured.</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex gap-4 px-4 md:px-8 pb-8 overflow-x-auto hide-scrollbar shrink-0 snap-x snap-mandatory">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="relative w-64 md:w-72 shrink-0 aspect-[9/16] snap-center group overflow-hidden">
              <img 
                alt={`Customer photo ${i}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`ugc-reel-${i}`}
                data-strk-img="[ugc-title] aesthetic instagram style candid model wearing gold jewelry bright warm"
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <p className="absolute bottom-4 left-4 right-4 text-white font-serif italic text-lg leading-snug">
                {i % 2 === 0 ? '"The perfect everyday gold."' : '"Obsessed with the quality."'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { id: 'c1', title: 'Earrings', term: 'gold drop elegant earrings on stand' },
              { id: 'c2', title: 'Necklaces', term: 'layered gold chains necklaces editorial' },
              { id: 'c3', title: 'Huggies', term: 'small chunky gold hoop huggie earrings' }
            ].map((cat) => (
              <Link to={`/category/${cat.title.toLowerCase()}`} key={cat.id} className="group relative aspect-square overflow-hidden block bg-secondary">
                <img 
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={`category-${cat.id}`}
                  data-strk-img={`[cat-${cat.id}-title] ${cat.term} aesthetic luxury`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 id={`cat-${cat.id}-title`} className="text-white text-3xl font-serif tracking-widest uppercase relative overflow-hidden">
                    {cat.title}
                    <span className="block h-px w-full bg-white absolute bottom-0 left-0 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto">
             <div 
                className="absolute inset-0 bg-cover bg-center"
                data-strk-bg-id="brand-story-bg"
                data-strk-bg="[story-title] artisan crafting gold jewelry workshop tools aesthetics"
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="1200"
              />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 lg:p-32">
            <h2 id="story-title" className="text-3xl md:text-5xl mb-6">Redefining Demi-Fine</h2>
            <div className="w-12 h-px bg-foreground mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              We believe that luxury shouldn't be reserved for special occasions. Velmora was born from a desire to create demi-fine jewelry that bridges the gap between fast-fashion and fine jewelry. Every piece is crafted with thick 18K gold plating over sterling silver, ensuring it lasts beautifully through your everyday moments.
            </p>
            <Link to="/about" className="text-sm uppercase tracking-widest border-b border-foreground w-max pb-1 hover:text-accent hover:border-accent transition-colors">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-b border-border">
        <div className="container">
          <h2 className="text-center text-3xl font-serif mb-16">Loved by Thousands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Sarah M.", text: "I haven't taken these huggies off since I got them. No tarnishing, no irritation. Absolute perfection." },
              { name: "Elena R.", text: "The packaging is so luxurious, and the necklace itself is a dream. Looks way more expensive than it is." },
              { name: "Jessica T.", text: "Finally found a brand that does quiet luxury right. The gold tone is the perfect warm honey color, not yellow at all." }
            ].map((review, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="flex text-accent mb-6 gap-1">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-serif text-lg italic leading-relaxed mb-6">"{review.text}"</p>
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Join the Insider List</h2>
          <p className="mb-10 text-primary-foreground/80 text-lg font-light">
            Subscribe to receive 10% off your first order, plus early access to new collections and exclusive events.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="flex-1 bg-transparent border-b border-primary-foreground/50 px-4 py-3 pb-2 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground transition-colors"
            />
            <button 
              type="submit"
              className="bg-primary-foreground text-primary px-8 py-3 uppercase tracking-widest text-sm hover:bg-background hover:text-foreground transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
