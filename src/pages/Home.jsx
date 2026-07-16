import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, RefreshCcw, Sparkles, Star, ArrowRight, Instagram } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/common/ProductCard';
import products from '@/data/products.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  const categories = [
    { name: 'Earrings', slug: 'earrings', id: 'cat-earrings' },
    { name: 'Necklaces', slug: 'necklaces', id: 'cat-necklaces' },
    { name: 'Huggies', slug: 'huggies', id: 'cat-huggies' },
  ];

  const ugcPosts = [
    { id: 'ugc-1', caption: 'Effortless elegance with the Amber Lace set.' },
    { id: 'ugc-2', caption: 'That golden hour glow.' },
    { id: 'ugc-3', caption: 'Layering done right.' },
    { id: 'ugc-4', caption: 'The perfect dainty touch.' },
    { id: 'ugc-5', caption: 'A piece of luxury, every day.' },
  ];

  const testimonials = [
    { name: 'Sophia L.', text: 'The quality surpassed my expectations. It feels so much more expensive than it is.', stars: 5 },
    { name: 'Emma R.', text: 'Gorgeous packaging and even more gorgeous jewelry. My new go-to for gifts!', stars: 5 },
    { name: 'Olivia M.', text: 'I havent taken my necklace off in weeks and it looks perfect. Tarnish-free indeed!', stars: 5 },
  ];

  return (
    <div ref={containerRef} className="flex flex-col">
      {/* 1. Full-bleed Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-black/30 z-10"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)' }}
        />
        <div
          data-strk-bg-id="hero-bg-home"
          data-strk-bg="[hero-title] close-up gold jewelry editorial necklace earrings model warm lighting"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          className="absolute inset-0 w-full h-full"
        >
          {/* Fallback color if bg image fails */}
          <div className="w-full h-full bg-[#E5E1DA]" />
        </div>

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl md:text-8xl tracking-tight leading-tight mb-6"
          >
            Crafted to be <br className="hidden md:block" /> Treasured
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl font-light tracking-widest uppercase mb-12 max-w-2xl"
          >
            Demi-fine jewelry for the modern minimalist.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              to="/shop"
              className="bg-[#C5A059] text-white px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-white hover:text-black transition-all duration-500 rounded-sm"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
           <div className="w-[1px] h-20 bg-white/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full bg-white h-full animate-scroll-line" />
           </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-center justify-center space-x-3">
            <Truck size={18} className="text-[#C5A059]" strokeWidth={1.5} />
            <span className="uppercase-spaced text-[9px] font-semibold">Free Worldwide Shipping</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <RefreshCcw size={18} className="text-[#C5A059]" strokeWidth={1.5} />
            <span className="uppercase-spaced text-[9px] font-semibold">30-Day Returns</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Sparkles size={18} className="text-[#C5A059]" strokeWidth={1.5} />
            <span className="uppercase-spaced text-[9px] font-semibold">18K Gold Plated</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <ShieldCheck size={18} className="text-[#C5A059]" strokeWidth={1.5} />
            <span className="uppercase-spaced text-[9px] font-semibold">Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* 3. Bestsellers */}
      <section className="py-24 px-6 md:px-12 bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0 text-center md:text-left">
            <div>
              <h2 id="bestsellers-title" className="font-serif text-3xl md:text-5xl mb-2">The Favorites</h2>
              <p className="text-gray-400 uppercase tracking-[0.2em] text-[10px]">Most loved pieces by our community</p>
            </div>
            <Link to="/shop" className="group flex items-center space-x-2 uppercase tracking-[0.2em] text-[10px] font-bold border-b border-black pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
              <span>View All</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-12">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Reel-style UGC row */}
      <section className="py-24 overflow-hidden border-y border-gray-50">
        <div className="px-6 md:px-12 mb-12">
           <div className="flex items-center space-x-3 mb-2">
              <Instagram size={20} />
              <h2 className="font-serif text-2xl uppercase tracking-widest pt-1">Seen on You</h2>
           </div>
           <p className="text-gray-400 text-sm italic">Tag @velmora #velmorajewels to be featured</p>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto pb-8 snap-x no-scrollbar px-6 md:px-12">
          {ugcPosts.map((post) => (
            <div key={post.id} className="relative flex-shrink-0 w-[280px] aspect-[9/16] snap-start group overflow-hidden bg-gray-100">
               <img
                data-strk-img-id={post.id}
                data-strk-img="woman wearing gold jewelry lifestyle close-up aesthetic"
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="UGC"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <p className="text-white text-sm font-serif italic mb-2">"{post.caption}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Shop by category */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/shop?category=${cat.slug}`} className="group relative aspect-[4/5] overflow-hidden bg-gray-50">
               <img
                data-strk-img-id={cat.id}
                data-strk-img={`[cat-name-${cat.id}] gold jewelry category flatlay`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                 <h3 id={`cat-name-${cat.id}`} className="font-serif text-3xl md:text-4xl tracking-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{cat.name}</h3>
                 <span className="uppercase tracking-[0.3em] text-[9px] font-bold mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Discover More</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story Split Section */}
      <section className="py-24 bg-[#EAE7E1]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="md:w-1/2 relative aspect-[3/4] w-full max-w-sm md:max-w-none overflow-hidden h-[600px]">
             <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] jewelry craftsmanship gold workshop aesthetic woman hands"
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
              className="w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
            />
          </div>
          <div className="md:w-1/2 flex flex-col items-start text-left">
            <span className="uppercase-spaced text-[#C5A059] text-[10px] font-bold mb-6">Our Philosophy</span>
            <h2 id="story-title" className="font-serif text-4xl md:text-6xl mb-8 leading-tight">Every Piece Tells <br /> a Story</h2>
            <p className="text-gray-600 text-lg md:text-xl font-serif leading-relaxed italic mb-10 max-w-lg">
              "At Velmora, we believe that jewelry is more than an accessory. It is a memory, a marker of time, a quiet celebration of the self. We design demi-fine pieces that bridge the gap between costume and investment."
            </p>
            <Link to="/about" className="group flex items-center space-x-3 uppercase-spaced text-[10px] font-bold border-b border-black pb-2 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
              <span>Read Our Story</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
           <h2 className="font-serif text-3xl md:text-5xl mb-16">The Reviews</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {testimonials.map((t, i) => (
               <div key={i} className="flex flex-col items-center text-center space-y-4">
                  <div className="flex space-x-1 text-[#C5A059]">
                    {[...Array(t.stars)].map((_, j) => <Star key={j} size={14} fill="#C5A059" />)}
                  </div>
                  <p className="text-gray-700 font-serif italic text-lg leading-relaxed">"{t.text}"</p>
                  <p className="uppercase-spaced text-[10px] font-bold text-gray-400">— {t.name}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="py-24 px-6 md:px-12 bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
           <img
            data-strk-img-id="newsletter-bg"
            data-strk-img="delicate gold jewelry background texture bokeh"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1920"
            className="w-full h-full object-cover"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
           <h2 className="font-serif text-4xl md:text-6xl mb-6">Join the Circle</h2>
           <p className="text-gray-400 uppercase tracking-[0.2em] text-[10px] mb-12">Enjoy 10% off your first order and stay updated on new drops.</p>
           
           <form className="w-full max-w-lg flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="flex-grow bg-white/5 border border-white/20 px-6 py-4 text-[10px] uppercase tracking-widest focus:outline-none focus:border-[#C5A059] transition-colors"
                required
              />
              <button className="bg-[#C5A059] text-white px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-white hover:text-black transition-all duration-500">
                Subscribe
              </button>
           </form>
           
           <p className="mt-8 text-[9px] text-gray-500 uppercase tracking-widest">By subscribing you agree to our Privacy Policy</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
