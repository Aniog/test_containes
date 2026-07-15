import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { getProducts } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { useCart } from '../context/CartContext';

export default function Home() {
  const containerRef = useRef(null);
  const bestsellers = getProducts().slice(0, 5);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-velmora-bg"
          data-strk-bg-id="hero-bg-v1"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black/20" /> {/* Dark overlay for contrast */}
        </div>
        
        <div className="relative z-10 container mx-auto px-6 px-4 md:px-0 mt-20 text-white">
          <h1 id="hero-title" className="text-5xl md:text-7xl mb-6 font-serif max-w-3xl mx-auto leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-sans font-light tracking-wide mb-10 max-w-xl mx-auto text-white/90">
            Demi-fine 18K gold essentials for the modern muse.
          </p>
          <Link 
            to="/shop"
            className="inline-block px-10 py-4 bg-velmora-accent hover:bg-velmora-accent-hover text-white uppercase tracking-widest text-sm transition-all shadow-lg hover:shadow-xl"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-velmora-light border-y border-border py-4">
        <div className="container mx-auto px-6 overflow-x-auto whitespace-nowrap hide-scrollbar">
          <div className="flex justify-between items-center text-xs md:text-sm tracking-wider uppercase min-w-max gap-8 mx-auto w-full md:w-4/5 text-velmora-text/80">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">•</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers Grid */}
      <section className="py-24 bg-velmora-bg container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="text-3xl md:text-4xl">Coveted Pieces</h2>
          <Link to="/shop" className="text-sm tracking-widest uppercase hover:text-velmora-accent transition-colors hidden md:flex items-center gap-2">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-velmora-light overflow-hidden mb-4 rounded-sm">
                <img 
                  data-strk-img-id={`${product.imgId}-main`}
                  data-strk-img={`[prod-name-${product.id}] [bestsellers-title]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Add to Bag */}
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 flex justify-center bg-gradient-to-t from-black/50 to-transparent">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product);
                    }}
                    className="w-full py-3 bg-velmora-bg/90 hover:bg-velmora-bg text-velmora-text uppercase tracking-widest text-xs font-medium backdrop-blur-sm transition-all shadow-md"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>
              
              <div className="flex flex-col text-center mt-2 flex-grow">
                <Link to={`/product/${product.id}`} className="hover:text-velmora-accent transition-colors">
                  <h3 id={`prod-name-${product.id}`} className="text-base uppercase tracking-wider mb-2 leading-tight">{product.name}</h3>
                </Link>
                <p className="text-velmora-text/70 mt-auto">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center md:hidden">
          <Link to="/shop" className="text-sm tracking-widest uppercase hover:text-velmora-accent border-b border-border pb-1 px-4 transition-colors">
            View All Pieces
          </Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-20 bg-velmora-light/50 overflow-hidden">
        <div className="container mx-auto px-6 mb-10 text-center">
          <h2 id="ugc-title" className="text-3xl md:text-4xl text-velmora-text">As Seen On You</h2>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto gap-4 px-6 md:px-12 pb-8 hide-scrollbar scroll-smooth snap-x">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative bg-velmora-light snap-center rounded-sm overflow-hidden flex-shrink-0 group">
              <img 
                data-strk-img-id={`ugc-${i}`}
                data-strk-img={`[ugc-caption-${i}] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Jewelry styled on model"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60 p-6 flex flex-col justify-end">
                <p id={`ugc-caption-${i}`} className="text-white font-serif text-lg italic opacity-90 transition-opacity">
                  "Simply perfect for my everyday layer."
                </p>
                <p className="text-white/70 text-xs uppercase tracking-widest mt-2">— Sarah L.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-24 bg-velmora-bg container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, i) => (
            <Link key={cat} to={`/shop?category=${cat}`} className="relative aspect-square md:aspect-[3/4] overflow-hidden group">
              <img 
                data-strk-img-id={`cat-${i}`}
                data-strk-img={`[cat-title-${i}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`Shop ${cat}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-velmora-bg/90 backdrop-blur-sm px-8 py-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 id={`cat-title-${i}`} className="text-xl uppercase tracking-widest">{cat}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-12 bg-velmora-bg">
        <div className="container mx-auto px-0 md:px-6">
          <div className="flex flex-col md:flex-row items-stretch border border-border/50 bg-velmora-bg">
            <div className="md:w-1/2 aspect-square relative bg-velmora-light">
              <img 
                data-strk-img-id="story-img"
                data-strk-img="[story-title] [story-text]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Brand Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center items-center text-center p-12 md:p-24">
              <h2 id="story-title" className="text-3xl md:text-4xl mb-6">Designed for the Muse in You.</h2>
              <p id="story-text" className="text-velmora-text/70 mb-8 max-w-md mx-auto leading-relaxed">
                Velmora was born out of a desire for jewelry that feels simultaneously vintage and contemporary. Pieces that echo silent luxury, crafted to adorn your every day, with warmth that flatters all skin tones.
              </p>
              <Link to="/about" className="inline-block border-b border-velmora-text pb-1 uppercase tracking-widest text-sm hover:text-velmora-accent hover:border-velmora-accent transition-colors">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-velmora-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 id="test-title" className="text-3xl mb-16 hidden">Customer Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { author: "Emily R.", quote: "I wear my Velmora huggies daily. The gold hue is perfectly warm and looks far more expensive than it is." },
              { author: "Jessica M.", quote: "Beautiful packaging and stunning jewelry. This was a gift for myself and I couldn't be happier with the quality." },
              { author: "Amanda K.", quote: "Finally found demi-fine jewelry that doesn't tarnish after a week. These pieces feel substantial and solid." }
            ].map((test, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex gap-1 text-velmora-accent mb-6">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="font-serif italic text-lg mb-6 leading-relaxed text-velmora-text/90">"{test.quote}"</p>
                <div className="w-6 h-px bg-velmora-accent mb-4" />
                <p className="uppercase tracking-widest text-xs">{test.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Capture */}
      <section className="py-24 bg-velmora-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-white">Join the Inner Circle</h2>
          <p className="mb-10 text-white/80 max-w-md mx-auto leading-relaxed">Sign up to receive 10% off your first order, plus early access to new collections and exclusive pieces.</p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 justify-center" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-b border-white/40 text-white placeholder-white/50 py-3 px-2 focus:outline-none focus:border-white w-full sm:flex-1 text-center sm:text-left transition-colors"
              required
            />
            <button 
              type="submit"
              className="bg-white text-velmora-accent uppercase tracking-widest text-sm px-8 py-3 hover:bg-velmora-light transition-colors sm:w-auto w-full font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}