import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { SEED_PRODUCTS } from '../lib/data.js';
import { useCart } from '../components/cart/CartContext.jsx';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = SEED_PRODUCTS.slice(0, 5);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-black/30 z-10"
        />
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-98f2a1"
          data-strk-bg="[hero-subhead] [hero-headline] gold jewelry model editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            id="hero-subhead"
            className="uppercase-spaced text-[10px] sm:text-xs font-bold mb-4 tracking-[0.4em]"
          >
            Fine Jewelry for Every Day
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="hero-headline"
            className="text-5xl sm:text-7xl lg:text-8xl font-serif mb-8 leading-tight"
          >
            Crafted to be <br/><em className="italic">Treasured</em>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/shop" 
              className="inline-block bg-white text-primary px-10 py-4 uppercase-spaced text-xs font-bold hover:bg-opacity-90 transition-all tracking-[0.3em] shadow-xl"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary/50 border-b border-border py-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex justify-around items-center gap-8 whitespace-nowrap text-[10px] uppercase tracking-widest font-semibold opacity-60">
          <span>Free Worldwide Shipping</span>
          <span className="hidden sm:inline">•</span>
          <span>30-Day Returns</span>
          <span className="hidden sm:inline">•</span>
          <span>18K Gold Plated</span>
          <span className="hidden sm:inline">•</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers Grid */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="uppercase-spaced text-[10px] font-bold opacity-50 mb-2">Favorite pieces</p>
            <h2 id="bestsellers-title" className="text-4xl md:text-5xl font-serif">The Bestsellers</h2>
          </div>
          <Link to="/shop" className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold border-b border-primary pb-1">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
          {bestsellers.map((product) => (
            <div key={product.id} className="group flex flex-col gap-4">
              <Link to={`/product/${product.id}`} className="relative aspect-[3/4] bg-secondary overflow-hidden block">
                <img
                  data-strk-img-id={`product-thumb-${product.id}`}
                  data-strk-img={`[product-title-${product.id}] gold jewelry editorial close-up`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-primary py-3 text-[10px] font-bold uppercase tracking-widest opacity-0 transform translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0"
                >
                  Quick Add
                </button>
              </Link>
              <div className="text-center">
                <h3 id={`product-title-${product.id}`} className="uppercase tracking-[0.15em] text-[10px] font-bold mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-xs italic font-serif opacity-70 mb-2">${product.price}</p>
                <div className="flex justify-center gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-primary stroke-none opacity-20" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reel-style UGC Row */}
      <section className="bg-secondary/30 py-24">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 id="ugc-title" className="text-3xl font-serif">As Worn By You</h2>
          <p className="uppercase-spaced text-[10px] mt-2 opacity-50">Tag #VelmoraMoments to be featured</p>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-4 px-6 lg:px-12 pb-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative min-w-[280px] sm:min-w-[320px] aspect-[9/16] bg-secondary overflow-hidden group shadow-lg">
              <img
                data-strk-img-id={`ugc-reel-${i}`}
                data-strk-img="woman wearing gold jewelry ear necklace lifestyle 9:16 vertical"
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                className="w-full h-full object-cover"
                alt="Social feature"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="font-serif italic text-lg leading-tight mb-2">"The perfect everyday huggies. I never take them off!"</p>
                <span className="uppercase-spaced text-[8px] font-bold tracking-widest opacity-70">— Sarah M.</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Earrings', id: 'cat-earrings', query: 'gold earrings close up' },
            { name: 'Necklaces', id: 'cat-necklaces', query: 'gold necklace pendant luxury' },
            { name: 'Huggies', id: 'cat-huggies', query: 'gold huggie earrings ear luxury' }
          ].map((cat) => (
            <Link key={cat.id} to={`/shop?category=${cat.name.toLowerCase()}`} className="group relative aspect-square bg-secondary overflow-hidden">
              <img
                data-strk-img-id={`category-thumb-${cat.id}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'/%3E"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt={cat.name}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-x-0 bottom-10 flex flex-col items-center">
                <span id={cat.id} className="text-white text-3xl font-serif mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">{cat.name}</span>
                <span className="text-white uppercase-spaced text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 underline underline-offset-4">Explore</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split Section */}
      <section className="bg-secondary/20 py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
          <div className="relative aspect-square sm:aspect-video lg:aspect-square bg-white shadow-2xl p-6">
            <div className="w-full h-full overflow-hidden">
              <img
                data-strk-img-id="brand-story-img"
                data-strk-img="jewelry craftsmanship details gold aesthetic editorial"
                data-strk-img-ratio="1x1"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'/%3E"
                className="w-full h-full object-cover grayscale-[20%]"
                alt="Our craftsmanship"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent p-6 flex items-center justify-center text-center hidden sm:flex">
              <span className="uppercase-spaced text-[8px] font-bold leading-relaxed tracking-widest text-primary">Made to endure seasons.</span>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="uppercase-spaced text-[10px] font-bold opacity-50 tracking-[0.4em]">The Velmora Ethos</p>
            <h2 id="story-title" className="text-4xl sm:text-5xl font-serif leading-tight">Every piece tells <br/><em className="italic">your</em> unique story.</h2>
            <div className="divider opacity-20" />
            <p className="text-primary/70 leading-relaxed max-w-lg font-sans text-sm md:text-base">
              Founded on the principle that luxury should be felt, not just flaunted. At Velmora, we blend traditional craftsmanship with contemporary design to create pieces that transition seamlessly from your most momentous occasions to your quietest rituals.
            </p>
            <div>
              <Link to="/about" className="uppercase-spaced text-xs font-bold border-b border-primary pb-1 hover:opacity-70 transition-opacity">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-10 opacity-30">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary stroke-none" />)}
        </div>
        <div className="overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-12"
          >
            {[
              { text: "Beyond impressed with the weight and quality. It looks and feels like pure gold but at such an accessible price. Velmora is my new go-to for gifting.", author: "Elena R." },
              { text: "The wait was worth it! The Vivid Aura ear cuff is even more stunning in person. I get compliments every single time I wear it.", author: "Maya K." },
              { text: "Sophisticated packaging, fast shipping, and jewelry that actually lasts. Hypoallergenic status confirmed—no irritation at all.", author: "Sophie L." }
            ].slice(0, 1).map((t, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <p className="text-2xl sm:text-3xl font-serif leading-relaxed italic opacity-80">"{t.text}"</p>
                <p className="uppercase-spaced text-[10px] font-bold tracking-[0.3em] opacity-50">— {t.author}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Capture */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-primary text-white p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 id="newsletter-title" className="text-3xl sm:text-4xl font-serif mb-4">Join the Inner Circle</h2>
            <p className="uppercase-spaced text-[10px] mb-10 opacity-60 tracking-[0.2em]">Take 10% off your first order & receive early access</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-grow bg-white/10 border border-white/20 px-6 py-4 text-sm placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors uppercase-spaced"
              />
              <button className="bg-white text-primary px-10 py-4 text-xs font-bold uppercase-spaced tracking-[0.3em] hover:bg-secondary transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;