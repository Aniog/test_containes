import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { products, testimonials, categories, ugcItems } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      {/* Full-bleed hero */}
      <section className="relative h-screen flex items-center justify-center p-6 text-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-muted scale-105"
          data-strk-bg-id="hero-bg-99221"
          data-strk-bg="[hero-title] [hero-subtitle] luxury gold jewelry close up on model warm lighting"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          style={{ 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-[1] bg-black/10" />
        <div className="relative z-[2] max-w-2xl text-white">
          <motion.h1 
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl mb-8 leading-tight tracking-tight"
          >
            Crafted to be Treasured
          </motion.h1>
          <motion.p 
            id="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl font-light mb-12 opacity-90 tracking-wide"
          >
            Timeless demi-fine jewelry designed for your everyday narrative.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link 
              to="/shop" 
              className="bg-white text-black px-12 py-5 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-secondary/20 py-4 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium opacity-70">
          <span>Free Worldwide Shipping</span>
          <span className="hidden sm:inline">·</span>
          <span>30-Day Returns</span>
          <span className="hidden sm:inline">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden sm:inline">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl font-serif">The Bestsellers</h2>
          <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-2xl font-serif text-center">As Seen On You</h2>
        </div>
        <div className="flex overflow-x-auto gap-4 px-6 no-scrollbar pb-8">
          {ugcItems.map((item) => (
            <div key={item.id} className="relative shrink-0 w-[280px] aspect-[9/16] bg-muted group overflow-hidden">
              <div 
                className="w-full h-full transition-transform duration-1000 group-hover:scale-110"
                data-strk-bg-id={`ugc-${item.id}`}
                data-strk-bg={`luxury jewelry ${item.caption} worn on model`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
                style={{ 
                  backgroundSize: 'cover', 
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-8">
                <p className="text-white font-serif italic text-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  "{item.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif mb-16 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop?category=${cat.name.toLowerCase()}`}
              className="relative aspect-[3/4] group overflow-hidden bg-muted"
            >
              <div 
                className="w-full h-full transition-transform duration-1000 group-hover:scale-110"
                data-strk-bg-id={`cat-${cat.id}`}
                data-strk-bg={`luxury ${cat.name} jewelry gold editorial`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
                style={{ 
                  backgroundSize: 'cover', 
                }}
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl uppercase tracking-[0.3em] font-light translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split Section */}
      <section className="py-24 grid grid-cols-1 md:grid-cols-2">
        <div 
          className="h-[500px] md:h-auto bg-muted"
          data-strk-bg-id="story-bg"
          data-strk-bg="behind the scenes jewelry craftsmanship workshop"
          data-strk-bg-ratio="1x1"
          data-strk-bg-width="1000"
          style={{ 
            backgroundSize: 'cover', 
          }}
        />
        <div className="bg-secondary/10 flex items-center justify-center p-12 md:p-24">
          <div className="max-w-md">
            <h2 id="story-title" className="text-4xl font-serif mb-8 leading-tight">Quiet Luxury, Sustainable Roots.</h2>
            <p id="story-desc" className="text-muted-foreground leading-relaxed mb-12">
              At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. Each piece is thoughtfully designed in our London studio and handcrafted by master artisans using premium 18K gold plating over recycled base metals.
            </p>
            <Link 
              to="/about" 
              className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-12">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
          </div>
          <div className="relative">
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1 }}
               className="font-serif text-2xl md:text-3xl italic leading-relaxed mb-12"
             >
               "{testimonials[1].text}"
             </motion.div>
             <p className="text-[10px] uppercase tracking-widest font-semibold">{testimonials[1].name}</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 max-w-7xl mx-auto mb-24">
        <div className="bg-black text-white p-12 md:p-24 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-3xl font-serif mb-4 uppercase tracking-wider">Join The Circle</h2>
            <p className="text-sm opacity-70 mb-12 tracking-wide font-light">Subscribe to receive exclusive access to new launches and enjoy 10% off your first order.</p>
            <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-b border-white py-4 flex-grow text-xs tracking-widest outline-none focus:border-white/50 transition-colors uppercase"
              />
              <button className="bg-white text-black px-12 py-4 text-[10px] uppercase tracking-widest hover:bg-muted transition-colors whitespace-nowrap">
                Join Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
