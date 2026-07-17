import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SEED_PRODUCTS } from '@/lib/seed-data';
import { Star, ArrowRight, Instagram } from 'lucide-react';
import { useCart } from '@/lib/CartContext';

const Home = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const bestsellers = SEED_PRODUCTS.slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const ugcItems = [
    { id: 'ugc-1', caption: 'Effortless everyday sparkle', query: 'woman wearing delicate gold earrings' },
    { id: 'ugc-2', caption: 'The perfect layering piece', query: 'gold necklace on neck luxury lighting' },
    { id: 'ugc-3', caption: 'Modern classics, redefined', query: 'minimalist jewelry lifestyle photography' },
    { id: 'ugc-4', caption: 'Confidence in every detail', query: 'close up of gold rings and bracelets' },
    { id: 'ugc-5', caption: 'Timeless heirlooms', query: 'jewelry gift box aesthetic' },
  ];

  const categories = [
    { name: 'Earrings', query: 'luxury gold earrings', path: '/shop?category=Earrings' },
    { name: 'Necklaces', query: 'elegant gold necklaces', path: '/shop?category=Necklaces' },
    { name: 'Huggies', query: 'gold huggie earrings aesthetic', path: '/shop?category=Huggies' },
  ];

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-luxury scale-105"
          data-strk-bg-id="hero-bg-velmora"
          data-strk-bg="[hero-headline] jewelry on model warm lighting"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/10 z-[1]" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.4em] mb-6"
          >
            Velmora Fine Jewelry
          </motion.p>
          <motion.h1
            id="hero-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1]"
          >
            Crafted to be <br /> Treasured
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/shop" 
              className="bg-accent text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-luxury"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-border py-4 px-6 overflow-x-auto no-scrollbar">
        <div className="flex justify-between items-center gap-12 min-w-max mx-auto text-[10px] uppercase tracking-widest text-muted-foreground max-w-7xl">
          <span>Free Worldwide Shipping</span>
          <span className="w-1 h-1 bg-border rounded-full" />
          <span>30-Day Returns</span>
          <span className="w-1 h-1 bg-border rounded-full" />
          <span>18K Gold Plated</span>
          <span className="w-1 h-1 bg-border rounded-full" />
          <span>Hypoallergenic</span>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Curated Selection</p>
            <h2 id="bestsellers-title" className="text-4xl md:text-5xl font-serif">The Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-widest group flex items-center gap-2 pb-1 border-b border-foreground/20 hover:border-accent transition-colors">
            View All Jewelry <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-10">
          {bestsellers.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/product/${product.id}`} className="relative aspect-[3/4] bg-secondary overflow-hidden mb-4 block">
                <img
                  alt={product.name}
                  data-strk-img-id={`product-img-${product.id}`}
                  data-strk-img={`[product-name-${product.id}] ${product.category} gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  className="w-full h-full object-cover transition-luxury group-hover:scale-105"
                />
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm py-3 text-[10px] uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-luxury hover:bg-accent hover:text-white"
                >
                  Quick Add
                </button>
              </Link>
              <div className="space-y-1">
                <Link to={`/product/${product.id}`}>
                  <h3 id={`product-name-${product.id}`} className="text-xs font-serif uppercase tracking-widest leading-relaxed">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm font-light">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#f8f6f2] py-24 border-y border-border overflow-hidden">
        <div className="px-6 max-w-7xl mx-auto mb-12 flex justify-between items-center">
            <h2 className="text-4xl font-serif">Seen on You</h2>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground cursor-pointer">
                <Instagram className="w-4 h-4" /> @velmora_jewelry
            </div>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar px-6 pb-4">
          {ugcItems.map((item) => (
            <div key={item.id} className="relative flex-none w-64 aspect-[9/16] bg-secondary overflow-hidden group">
              <img
                alt="Lifestyle jewelry"
                data-strk-img-id={item.id}
                data-strk-img={item.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                className="w-full h-full object-cover grayscale-[0.2] transition-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-serif text-lg leading-snug">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.name} 
              to={cat.path} 
              className="relative aspect-square overflow-hidden group"
            >
              <img
                alt={cat.name}
                data-strk-img-id={`cat-img-${cat.name.toLowerCase()}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-luxury group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-3xl font-serif tracking-widest opacity-0 group-hover:opacity-100 transition-luxury translate-y-4 group-hover:translate-y-0">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="w-full md:w-1/2 aspect-[4/5] bg-secondary overflow-hidden">
          <img
            alt="Craftsmanship"
            data-strk-img-id="story-img"
            data-strk-img="jewelry craftsmanship studio lighting"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Our Heritage</p>
          <h2 id="story-title" className="text-4xl md:text-6xl font-serif leading-tight">Quiet Luxury for Everyday Moments</h2>
          <p className="text-muted-foreground leading-loose md:text-lg italic">
            "We believe jewelry should be more than an accessory. It should be an extension of your essence — timeless, refined, and enduring."
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Founded on the principle of accessible elegance, Velmora bridges the gap between fast fashion and fine jewelry. Every piece is meticulously crafted using 18K gold plating over sterling silver or brass, ensuring your jewelry retains its luster through all of life's journeys.
          </p>
          <Link to="#" className="inline-block text-xs uppercase tracking-widest border-b border-accent pb-1 hover:text-accent transition-colors">
            Our Story
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-y border-border">
        <div className="px-6 max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-sm uppercase tracking-[0.4em] text-muted-foreground">What They're Saying</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { name: 'Sarah M.', text: 'The quality surpassed my expectations. I wear my huggies every single day.' },
                    { name: 'Elena R.', text: 'The packaging itself is a luxury experience. The perfect gift for myself.' },
                    { name: 'Jessica K.', text: 'Beautiful, weightless, and clearly high-end. I already have a waitlist for my next order.' }
                ].map((testimonial, i) => (
                    <div key={i} className="space-y-4">
                        <div className="flex justify-center gap-1 text-accent">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-accent" />)}
                        </div>
                        <p className="font-serif text-lg italic leading-relaxed">"{testimonial.text}"</p>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">— {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-[#f8f6f2] p-12 md:p-24 text-center space-y-8 border border-border">
            <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-serif">Join the Inner Circle</h2>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Receive 10% off your first order & early access to new collections.</p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow bg-white border border-border px-6 py-4 text-xs tracking-widest outline-none focus:border-accent"
                />
                <button 
                  type="submit"
                  className="bg-accent text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-black transition-luxury"
                >
                    Subscribe
                </button>
            </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
