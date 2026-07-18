import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { seedProducts } from '../lib/data';
import { useCart } from '../contexts/CartContext';

const Home = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

  const bestsellers = seedProducts.slice(0, 5);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-secondary"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-subhead] [hero-headline] warm gold jewelry on model"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 id="hero-headline" className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 uppercase tracking-wider">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
            Premium demi-fine gold jewelry for the modern romantic. Designed for everyday elegance.
          </p>
          <Link 
            to="/collections/all" 
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 uppercase tracking-widest text-sm font-medium transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary text-secondary-foreground py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex justify-between items-center min-w-max space-x-8 md:space-x-12 text-xs md:text-sm uppercase tracking-wider">
            <span className="flex items-center whitespace-nowrap"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" /> Free Worldwide Shipping</span>
            <span className="flex items-center whitespace-nowrap"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" /> 30-Day Returns</span>
            <span className="flex items-center whitespace-nowrap"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" /> 18K Gold Plated</span>
            <span className="flex items-center whitespace-nowrap"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" /> Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif uppercase tracking-wider mb-2">Bestsellers</h2>
            <p id="bestsellers-subtitle" className="text-muted-foreground italic font-serif text-lg">Our most loved pieces.</p>
          </div>
          <Link to="/collections/all" className="hidden md:flex items-center text-sm uppercase tracking-widest hover:text-accent transition-colors pb-1 border-b border-transparent hover:border-accent">
            View All <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-12">
          {bestsellers.map((product) => (
            <div key={product.id} className="group flex flex-col relative">
              <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-secondary mb-4 block w-full">
                <img
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
                  data-strk-img-id={`bs-img1-${product.id}`}
                  data-strk-img={`[prod-title-${product.id}] isolated on neutral background top down`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <img
                  alt={`${product.name} lifestyle`}
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  data-strk-img-id={`bs-img2-${product.id}`}
                  data-strk-img={`[prod-title-${product.id}] worn by model close up`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product, 1, { color: 'Gold' });
                    }}
                    className="w-full bg-white text-black py-3 uppercase tracking-widest text-xs font-medium hover:bg-black hover:text-white transition-colors"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>
              
              <div className="mt-auto">
                <h3 id={`prod-title-${product.id}`} className="font-serif uppercase tracking-wider text-sm mb-1 line-clamp-1">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="text-muted-foreground text-sm">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <Link to="/collections/all" className="inline-block border border-foreground px-8 py-3 text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors w-full">
            View All Bestsellers
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {[
            { id: 'earrings', title: 'Earrings', subtitle: 'Everyday statements' },
            { id: 'necklaces', title: 'Necklaces', subtitle: 'Layering essentials' },
            { id: 'huggies', title: 'Huggies', subtitle: 'Subtle textures' }
          ].map((cat) => (
            <Link key={cat.id} to="/collections/all" className="relative group overflow-hidden aspect-[4/5] bg-secondary">
              <img
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`cat-img-${cat.id}`}
                data-strk-img={`[cat-subtitle-${cat.id}] [cat-title-${cat.id}] warm minimal styling`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 id={`cat-title-${cat.id}`} className="text-3xl font-serif uppercase tracking-widest mb-2">{cat.title}</h3>
                <p id={`cat-subtitle-${cat.id}`} className="italic font-serif opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {cat.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-20 md:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-12 md:mb-0 relative">
              <div className="aspect-[3/4] relative w-5/6 mx-auto bg-secondary">
                <img
                  alt="Our craft"
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id="story-main-img"
                  data-strk-img="[story-title] [story-desc] jewelry making tools close up warm lighting"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 md:pl-16 lg:pl-24 flex flex-col justify-center">
              <h2 id="story-title" className="text-3xl md:text-5xl font-serif uppercase tracking-wider mb-8">Jewelry with Intention</h2>
              <div id="story-desc" className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
                <p>
                  At Velmora, we believe that fine jewelry shouldn't be reserved just for special occasions. It should be worn, loved, and lived in every single day.
                </p>
                <p>
                  Our demi-fine collections bridge the gap between costume jewelry and solid gold. Each piece is meticulously crafted with a thick layer of 18k gold over sterling silver or brass, resulting in heirloom-quality designs at an accessible price point.
                </p>
              </div>
              <div className="mt-10">
                <Link to="#" className="inline-block border-b border-foreground uppercase tracking-widest text-sm pb-1 hover:text-accent hover:border-accent transition-colors">
                  Read Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UGC / Instagram Reel Style */}
      <section className="py-20 overflow-hidden">
        <div className="mb-12 text-center px-4">
          <h2 id="ugc-title" className="text-3xl font-serif uppercase tracking-wider mb-2">As Seen On You</h2>
          <p className="text-muted-foreground italic font-serif">Tag @velmora to be featured</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar gap-4 px-4 md:px-12 w-full mx-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative flex-shrink-0 w-[240px] sm:w-[280px] aspect-[9/16] snap-center bg-secondary rounded-sm overflow-hidden group">
              <img
                alt={`Instagram look ${i}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img={`[ugc-title] everyday wear selfie mirror portrait warm lighting gold jewelry look ${i}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-white text-sm font-serif italic mb-2">"My everyday essentials."</p>
                <Link to="/collections/all" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                  Shop Look
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="sr-only">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
            {[
              { text: "The quality is absolutely stunning. I haven't taken the Aura ear cuff off since it arrived.", name: "Sarah M." },
              { text: "Finally found gold jewelry that doesn't tarnish after a week and didn't cost a fortune.", name: "Elena R." },
              { text: "Beautiful packaging and the huggies are perfectly chunky yet lightweight.", name: "Jessica T." }
            ].map((review, idx) => (
              <div key={idx} className="flex flex-col items-center pt-8 md:pt-0 px-4">
                <div className="flex text-accent mb-6 space-x-1">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p className="font-serif text-lg lg:text-xl italic mb-6 leading-relaxed">"{review.text}"</p>
                <p className="text-sm uppercase tracking-widest text-primary-foreground/70">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-accent/20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif uppercase tracking-wider mb-4">Join The Club</h2>
          <p className="text-muted-foreground mb-8">Sign up for early access to new collections and enjoy 10% off your first order.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="flex-1 bg-transparent border-b border-foreground px-4 py-3 placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent text-sm tracking-wider"
              required
            />
            <button type="submit" className="bg-foreground text-background px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;
