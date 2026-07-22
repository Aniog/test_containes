import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, RotateCcw, Gem } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { cn } from '../lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function Home() {
  const { addToCart } = useCart();
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 5);
  const containerRef = useRef(null);

  useEffect(() => {
    let frameId;
    if (containerRef.current) {
        frameId = window.requestAnimationFrame(() => {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
    }
    return () => {
        if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {/* 1. Full-bleed Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-velmora-900">
        <div 
          className="absolute inset-0 z-0 opacity-70"
          data-strk-bg-id="home-hero-bg-2"
          data-strk-bg="[hero-subhead] [hero-headline]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-900/80 via-velmora-900/20 to-transparent z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <p id="hero-subhead" className="text-gold-light uppercase tracking-[0.3em] text-sm mb-6 font-medium">Velmora Fine Jewelry</p>
          <h1 id="hero-headline" className="text-white text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight">Crafted to be <br/><i className="font-light">Treasured</i></h1>
          <Link to="/shop" className="btn-primary bg-white text-velmora-900 hover:bg-gold-light hover:text-velmora-900">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-velmora-100 py-4 border-b border-velmora-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:justify-between items-center text-xs md:text-sm font-medium tracking-wider text-velmora-700 uppercase max-w-5xl mx-auto">
            <div className="flex items-center gap-2"><Truck size={16} className="text-gold-dark" /> Free Worldwide Shipping</div>
            <div className="flex items-center gap-2"><RotateCcw size={16} className="text-gold-dark" /> 30-Day Returns</div>
            <div className="flex items-center gap-2"><Gem size={16} className="text-gold-dark" /> 18K Gold Plated</div>
            <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-gold-dark" /> Hypoallergenic</div>
          </div>
        </div>
      </section>

      {/* 3. Bestsellers Carousel */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 id="bestsellers-title" className="text-3xl md:text-4xl">Our Most Loved</h2>
            <Link to="/collections/bestsellers" className="inline-block mt-4 text-sm uppercase tracking-widest text-velmora-500 hover:text-gold-dark link-hover">View All Bestsellers</Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {bestsellers.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-velmora-100 mb-4 overflow-hidden">
                  <Link to={`/product/${product.id}`} className="block h-full w-full">
                    {/* Primary Image */}
                    <img
                      key={`${product.imgId}-home`}
                      alt={product.name}
                      data-strk-img-id={`${product.imgId}-home`}
                      data-strk-img={`[${product.descId}] [${product.titleId}] jewelry`}
                      data-strk-img-ratio="2x3"
                      data-strk-img-width="600"
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    {/* Hover Image */}
                    <img
                      key={`${product.imgHoverId}-home`}
                      alt={`${product.name} on model`}
                      data-strk-img-id={`${product.imgHoverId}-home`}
                      data-strk-img={`[${product.descId}] [${product.titleId}] jewelry worn on model`}
                      data-strk-img-ratio="2x3"
                      data-strk-img-width="600"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </Link>
                  {/* Quick Add Button */}
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-velmora-900 font-serif tracking-widest uppercase text-xs py-3 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-900 hover:text-white"
                  >
                    Quick Add
                  </button>
                </div>
                <div className="text-center">
                  <h3 id={product.titleId} className="font-serif uppercase tracking-widest text-sm mb-1 line-clamp-1">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p className="text-velmora-600 font-light">${product.price}</p>
                  <p id={product.descId} className="sr-only">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Brand Story Split */}
      <section className="bg-velmora-50">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          <div className="w-full lg:w-1/2 relative min-h-[400px]">
             <div 
              className="absolute inset-0 bg-cover bg-center text-[0]"
              data-strk-bg-id="story-bg-1"
              data-strk-bg="[story-text] [story-title]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="1200"
            />
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24">
            <div className="max-w-md">
              <span className="text-gold-dark uppercase tracking-widest text-xs font-semibold mb-4 block">Our Story</span>
              <h2 id="story-title" className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Elevating the Everyday</h2>
              <p id="story-text" className="text-velmora-600 font-light text-lg leading-relaxed mb-8">
                We believe that fine jewelry shouldn't be reserved for special occasions. Velmora was born from a desire to create accessible, demi-fine pieces that add a touch of quiet luxury to your daily life. Every curve, every stone, and every metallic finish is thoughtfully designed and ethically sourced.
              </p>
              <Link to="/about" className="link-hover text-velmora-900 uppercase tracking-widest text-sm font-medium pb-1">
                Discover Our Craft
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. UGC Reels Row */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-12">
          <div className="flex justify-between items-end">
            <h2 id="ugc-title" className="text-3xl md:text-4xl font-serif">As Seen On You</h2>
            <a href="#" className="hidden md:inline-block text-sm uppercase tracking-widest hover:text-gold-dark link-hover">@velmorajewelry</a>
          </div>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="flex gap-4 px-4 md:px-8 overflow-x-auto hide-scrollbar snap-x pb-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-shrink-0 w-64 md:w-80 h-[400px] md:h-[500px] relative snap-center rounded overflow-hidden group cursor-pointer">
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`ugc-bg-${i}`}
                data-strk-bg="women wearing fine jewelry selfie instagram [ugc-title]"
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif italic text-lg mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">"Obsessed with this stack."</p>
                <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-white pb-1 inline-block">Shop the look</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[800px] md:h-[600px]">
            {/* Earrings */}
            <Link to="/category/earrings" className="relative group overflow-hidden bg-velmora-100 block md:col-span-1 md:row-span-1 h-full">
              <img
                 alt="Shop Earrings"
                 data-strk-img-id="cat-earrings"
                 data-strk-img="gold earrings collection stylish"
                 data-strk-img-ratio="2x3"
                 data-strk-img-width="800"
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-900/20 group-hover:bg-velmora-900/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur px-8 py-4 text-velmora-900 font-serif uppercase tracking-[0.2em] text-sm md:text-lg">Earrings</span>
              </div>
            </Link>

            {/* Necklaces */}
             <Link to="/category/necklaces" className="relative group overflow-hidden bg-velmora-100 block md:col-span-1 md:row-span-1 h-full">
              <img
                 alt="Shop Necklaces"
                 data-strk-img-id="cat-necklaces"
                 data-strk-img="gold necklaces layered elegant"
                 data-strk-img-ratio="2x3"
                 data-strk-img-width="800"
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-900/20 group-hover:bg-velmora-900/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur px-8 py-4 text-velmora-900 font-serif uppercase tracking-[0.2em] text-sm md:text-lg">Necklaces</span>
              </div>
            </Link>

            {/* Huggies */}
             <Link to="/category/huggies" className="relative group overflow-hidden bg-velmora-100 block md:col-span-1 md:row-span-1 h-full">
              <img
                 alt="Shop Huggies"
                 data-strk-img-id="cat-huggies"
                 data-strk-img="gold huggie hoop earrings close up"
                 data-strk-img-ratio="2x3"
                 data-strk-img-width="800"
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-900/20 group-hover:bg-velmora-900/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur px-8 py-4 text-velmora-900 font-serif uppercase tracking-[0.2em] text-sm md:text-lg">Huggies</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 bg-velmora-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif">A Word From You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             {[
               { id: 1, text: "The quality is absolutely unmatched for the price. I wear my huggies showering and sleeping, and they still look brand new.", name: "Sarah M.", stars: 5 },
               { id: 2, text: "Stunning. The heirloom set feels so heavy and luxurious. I've received countless compliments.", name: "Elena R.", stars: 5 },
               { id: 3, text: "Customer service was incredible when I needed to exchange a size, and the earrings themselves are gorgeous.", name: "Jessica T.", stars: 5 },
             ].map((review) => (
                <div key={review.id} className="p-8 bg-white border border-velmora-200">
                  <div className="flex justify-center gap-1 mb-6 text-gold-dark">
                    {[...Array(review.stars)].map((_, i) => <Gem key={`star-${review.id}-${i}`} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-lg font-serif italic text-velmora-700 mb-6 line-relaxed">"{review.text}"</p>
                  <p className="text-sm font-medium tracking-wider uppercase">— {review.name}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="py-24 bg-velmora-900 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <span className="text-gold uppercase tracking-widest text-xs font-semibold mb-4 block">Velmora Insider</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Join the List</h2>
          <p className="text-velmora-300 font-light mb-10 text-lg">Sign up for early access to new collections, exclusive events, and 10% off your first order.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-6 py-4 bg-transparent border border-velmora-700 text-white placeholder:text-velmora-500 focus:outline-none focus:border-gold w-full sm:w-96"
              required
            />
            <button type="submit" className="btn-primary bg-white text-velmora-900 hover:bg-gold-light hover:text-velmora-900 !px-10">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}