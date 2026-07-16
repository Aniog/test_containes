import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ImageHelper } from '@/lib/mock-sdk';
import { Star, ArrowRight } from 'lucide-react';
import { products } from '@/api/products';
import ProductCard from '@/components/products/ProductCard';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // ImageHelper is a mock or system tool that would be available in the real environment
    // For this preview, we'll assume it exists if it's in the spec
    if (window.ImageHelper) {
      window.ImageHelper.loadImages({}, containerRef.current);
    }
  }, []);

  const trustBarItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  const ugcItems = [
    { id: 'ugc-1', caption: 'Golden Hour Glow', imgId: 'ugc-ear-1' },
    { id: 'ugc-2', caption: 'The Perfect Stack', imgId: 'ugc-neck-1' },
    { id: 'ugc-3', caption: 'Everyday Essentials', imgId: 'ugc-ear-2' },
    { id: 'ugc-4', caption: 'Bridal Details', imgId: 'ugc-set-1' },
    { id: 'ugc-5', caption: 'Minimalist Magic', imgId: 'ugc-neck-2' },
  ];

  const categories = [
    { title: 'Earrings', imgId: 'cat-ear' },
    { title: 'Necklaces', imgId: 'cat-neck' },
    { title: 'Huggies', imgId: 'cat-hug' },
  ];

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          data-strk-bg-id="hero-bg-v1"
          data-strk-bg="[hero-sub] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          style={{ backgroundColor: '#242424' }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif mb-6 leading-tight"
          >
            Crafted to be Treasured
          </motion.h1>
          <motion.p
            id="hero-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-light mb-10 tracking-wide"
          >
            Demi-fine jewelry for the modern woman. Quiet luxury in every detail.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/shop"
              className="bg-accent text-white px-10 py-4 uppercase tracking-[0.2em] text-sm font-medium hover:bg-accent/90 transition-all shadow-lg"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-muted py-4 overflow-hidden border-b border-black/5">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-12 px-6">
              {trustBarItems.map((item) => (
                <span key={item} className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-muted-foreground flex items-center">
                   <span className="w-1 h-1 bg-accent rounded-full mr-3" />
                   {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-2">The Bestsellers</h2>
            <p className="text-muted-foreground tracking-wide uppercase text-xs">Most loved by our community</p>
          </div>
          <Link to="/shop" className="group flex items-center text-sm uppercase tracking-widest font-medium hover:text-accent transition-colors">
            View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Section */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="px-6 md:px-12 mb-12 text-center">
            <h2 className="text-3xl font-serif mb-2">As Worn By You</h2>
            <p className="text-muted-foreground tracking-wide uppercase text-xs">Tag @VELMORAFINE to be featured</p>
        </div>
        <div className="flex overflow-x-auto pb-12 hide-scrollbar px-6 md:px-12 space-x-4 md:space-x-6">
            {ugcItems.map((item) => (
              <div key={item.id} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative transition-transform hover:scale-[1.02] duration-500 overflow-hidden group">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img="[ugc-title] [ugc-concept]"
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                  className="w-full h-full object-cover"
                  alt={item.caption}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-serif italic text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                    "{item.caption}"
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif mb-12 text-center">Shop By Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link key={cat.title} to={`/shop?category=${cat.title}`} className="relative h-[500px] overflow-hidden group border border-black/5">
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-title-${cat.title}] luxury jewelry collection`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt={cat.title}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span id={`cat-title-${cat.title}`} className="text-white text-3xl font-serif tracking-[0.2em] relative">
                  {cat.title}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="aspect-[4/5] overflow-hidden">
          <img
              data-strk-img-id="story-image"
              data-strk-img="minimalist elegant jewelry story background"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              className="w-full h-full object-cover"
              alt="Our Story"
          />
        </div>
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">Our pieces are crafted to be lived in, and loved forever.</h2>
          <p className="text-muted-foreground leading-relaxed text-lg font-light">
            VELMORA was born from a desire for jewelry that balances high-end craftsmanship with accessible pricing. We use only the finest 18K gold plating over skin-friendly brass, creating demi-fine treasures that endure.
          </p>
          <div>
            <Link to="/about" className="inline-block border-b border-black pb-1 uppercase tracking-widest text-sm font-medium hover:text-accent hover:border-accent transition-all">
              Our Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-1 mb-10 text-accent">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <div className="space-y-12">
            <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed">
              "The most beautiful huggies I've ever owned. High-end look without the markup. I haven't taken them off in weeks!"
            </blockquote>
            <p className="uppercase tracking-[0.3em] text-xs font-semibold">Sarah M. — Verified Customer</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 md:px-12 bg-accent text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Join the Inner Circle</h2>
          <p className="text-white/80 tracking-wide mb-10 text-lg">Receive exclusive previews and 10% off your first treasure.</p>
          <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent border border-white/40 px-6 py-4 flex-grow placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
            />
            <button className="bg-white text-accent px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-white/90 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
