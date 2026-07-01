import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { Star, ArrowRight } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-v1"
          data-strk-bg="[hero-sub] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative text-center text-white px-6">
          <p id="hero-sub" className="text-sm uppercase tracking-[0.3em] mb-4 opacity-90 font-medium">Fine Jewelry for the Modern Woman</p>
          <h1 id="hero-title" className="text-5xl md:text-7xl font-serif mb-8 max-w-2xl mx-auto leading-tight italic">Crafted to be Treasured</h1>
          <Link 
            to="/shop" 
            className="inline-block bg-white text-[#1A1A1A] px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-white transition-all duration-500"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-[#1A1A1A] text-white py-6 overflow-hidden border-y border-white/5">
        <div className="flex whitespace-nowrap space-x-12 px-12 justify-center">
          {["Free Worldwide Shipping", "30-Day Returns", "18K Gold Plated", "Hypoallergenic"].map((text, i) => (
            <span key={i} className="text-[10px] uppercase tracking-widest-extra whitespace-nowrap flex items-center">
               <span className="w-1 h-1 bg-accent rounded-full mr-4" /> {text}
            </span>
          ))}
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 px-6 md:px-12 bg-[#FAFAFA]">
        <div className="flex items-end justify-between mb-16 px-4">
          <div>
            <span className="text-xs uppercase tracking-widest-extra text-accent mb-4 block font-medium">Essentials</span>
            <h2 className="text-4xl font-serif">The Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-widest-extra flex items-center gap-2 hover:opacity-60 transition-opacity border-b border-black pb-1">
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-[#F0F0F0]">
                <img 
                  data-strk-img-id={`prod-thumb-${product.id}`}
                  data-strk-img={`[prod-title-${product.id}] [prod-cat-${product.id}] gold jewelry editorial close-up`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-[#1A1A1A] py-3 text-[10px] uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Quick View
                </button>
              </div>
              <div className="text-center px-2">
                <span id={`prod-cat-${product.id}`} className="text-[10px] uppercase tracking-widest-extra opacity-50 mb-3 block">{product.category}</span>
                <h3 id={`prod-title-${product.id}`} className="text-sm uppercase tracking-[0.2em] font-serif mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
                <p className="text-sm font-light text-muted-foreground">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* UGC Reel Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="text-center mb-16 px-6">
          <span className="text-xs uppercase tracking-widest-extra text-accent mb-4 block font-medium">As Worn By You</span>
          <h2 className="text-4xl font-serif">Velmora In The Wild</h2>
        </div>
        <div className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-8 scrollbar-hide">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="flex-none w-[300px] aspect-[9/16] relative group overflow-hidden bg-muted">
               <img 
                  data-strk-img-id={`ugc-${i}`}
                  data-strk-img="gold jewelry lifestyle aesthetic photography woman wearing earrings neck"
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt="Velmora lifestyle"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white text-lg font-serif italic italic font-light leading-relaxed">"Effortless elegance for every day. Truly pieces to treasure."</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-32 px-6 md:px-12 bg-[#FAFAFA]">
        <h2 className="text-4xl font-serif text-center mb-20 uppercase tracking-widest-extra">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat) => (
            <Link key={cat} to={`/shop?category=${cat.toLowerCase()}`} className="relative h-[600px] group overflow-hidden bg-muted">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                data-strk-bg-id={`cat-bg-${cat}`}
                data-strk-bg={`luxury gold ${cat.toLowerCase()} jewelry editorial model`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="1000"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-4xl font-serif mb-6 uppercase tracking-widest-extra font-light">{cat}</h3>
                  <span className="inline-block w-8 h-[1px] bg-white group-hover:w-24 transition-all duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-32 px-6 md:px-24 grid md:grid-cols-2 items-center gap-24 bg-white">
        <div className="relative">
           <div className="aspect-[4/5] bg-muted overflow-hidden">
              <img 
                  data-strk-img-id="brand-story-img"
                  data-strk-img="minimalist jewelry studio aesthetic gold craftsmanship details"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                  className="w-full h-full object-cover"
                  alt="Velmora Studio"
              />
           </div>
           <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/5 -z-10" />
        </div>
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-widest-extra text-accent mb-8 block font-semibold">Our Philosophy</span>
          <h2 className="text-5xl font-serif mb-10 leading-tight italic">Jewelry that tells a story, without saying a word.</h2>
          <p className="text-muted-foreground leading-relaxed mb-12 text-lg font-light">
            Founded with a vision of accessible luxury, Velmora bridges the gap between fast fashion and fine jewelry. Every piece is crafted using 18K gold plating over surgical-grade steel, ensuring beauty that lasts a lifetime. We believe that fine jewelry shouldn't be reserved for special occasions, but enjoyed every single day.
          </p>
          <Link to="/about" className="border-b border-[#1A1A1A] pb-3 text-xs uppercase tracking-widest-extra font-medium hover:text-accent hover:border-accent transition-all duration-300">
            Read Our Story
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-[#FAFAFA] text-center">
         <div className="flex justify-center gap-1 mb-8 text-accent">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
         </div>
         <div className="max-w-3xl mx-auto italic font-serif text-2xl md:text-3xl font-light mb-12">
            "I haven't taken off my Golden Sphere Huggies since they arrived. The quality is incredible for the price point. Velmora is my new go-to for gifts!"
         </div>
         <div className="text-xs uppercase tracking-widest-extra opacity-60">— Amanda K.</div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-6 md:px-12 bg-[#1A1A1A] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 italic italic italic font-light">Join the Inner Circle</h2>
          <p className="text-xs tracking-[0.3em] px-8 mb-12 opacity-70 uppercase leading-loose font-medium">
            Be the first to know about new collections and exclusive offers. 
            Enjoy 10% off your first treasure.
          </p>
          <form className="flex flex-col md:flex-row gap-4 px-4">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-grow bg-white/5 border border-white/10 px-8 py-5 text-xs tracking-widest uppercase focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/30"
            />
            <button className="bg-white text-[#1A1A1A] px-12 py-5 text-xs uppercase tracking-widest-extra font-semibold hover:bg-[#C5A059] hover:text-white transition-all duration-500">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
