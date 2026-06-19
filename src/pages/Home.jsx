import React, { useEffect, useRef, useState } from 'react';
import Layout from '../Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { useCart } from '../context/CartContext';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { motion } from 'framer-motion';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Home = () => {
  const containerRef = useRef(null);
  const [bestsellers, setBestsellers] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchBestsellers = async () => {
      const { data: response } = await client
        .from('Product')
        .select('*')
        .eq('isBestseller', true)
        .limit(5);
      
      if (response?.data?.list) {
        setBestsellers(response.data.list);
      }
    };
    fetchBestsellers();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [bestsellers]);

  const categories = [
    { name: 'Earrings', id: 'cat-earrings' },
    { name: 'Necklaces', id: 'cat-necklaces' },
    { name: 'Huggies', id: 'cat-huggies' },
  ];

  const ugcPosts = [
    { id: 'ugc-1', caption: 'Elegant evenings with Aura' },
    { id: 'ugc-2', caption: 'Everyday luxe for her' },
    { id: 'ugc-3', caption: 'Stacking the favorites' },
    { id: 'ugc-4', caption: 'The perfect gift set' },
    { id: 'ugc-5', caption: 'Golden hour shimmer' },
  ];

  const testimonials = [
    { name: 'Elena B.', content: 'The quality is unmatched. I wear my huggies every single day and they still look brand new.' },
    { name: 'Sophia R.', content: 'Beautifully packaged and the delivery was so quick. The perfect self-care treat.' },
    { name: 'Maya K.', content: 'I get compliments on my necklace constantly. It has that premium weight and feel.' },
  ];

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center scale-105"
            data-strk-bg="[hero-headline] [hero-subhead] jewelry model closeup"
            data-strk-bg-id="hero-bg-9922a"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
          <div className="absolute inset-0 bg-brand-charcoal/20 z-0" />
          
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              id="hero-headline"
              className="text-5xl md:text-8xl text-white font-serif mb-6 leading-tight"
            >
              Crafted to be Treasured
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              id="hero-subhead"
              className="text-white/80 text-sm md:text-lg uppercase tracking-[0.4em] font-sans mb-12 max-w-2xl mx-auto"
            >
              A collection of demi-fine jewelry for the modern romantic.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              <Link 
                to="/shop" 
                className="inline-block bg-brand-gold text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-charcoal transition-soft shadow-xl"
              >
                Shop the Collection
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-white py-4 border-b border-brand-charcoal/5">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center md:justify-around gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-espresso/60">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:block opacity-20">|</span>
            <span>30-Day Returns</span>
            <span className="hidden md:block opacity-20">|</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:block opacity-20">|</span>
            <span>Hypoallergenic</span>
          </div>
        </section>

        {/* Bestsellers Grid */}
        <section className="py-24 px-6 md:px-12 bg-brand-cream">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 id="bestsellers-title" className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">The Bestsellers</h2>
                <p className="text-sm text-brand-espresso/50 uppercase tracking-widest">Our most-loved pieces, chosen by you.</p>
              </div>
              <Link to="/shop" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group border-b border-brand-charcoal/20 pb-1 hover:border-brand-gold transition-soft">
                View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10">
              {bestsellers.map((product) => {
                const fields = product.data;
                return (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-white shadow-sm">
                      <img
                        data-strk-img={`[item-${product.id}-title] jewelry product`}
                        data-strk-img-id={`product-${product.id}`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover transition-soft group-hover:scale-105"
                        alt={fields.name}
                      />
                      <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/5 transition-soft" />
                      
                      {/* Quick Add overlay */}
                      <button 
                        onClick={() => addToCart(product)}
                        className="absolute bottom-4 left-4 right-4 bg-white/95 text-brand-charcoal py-3 text-[10px] font-bold uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-soft backdrop-blur-sm"
                      >
                        Add to Cart
                      </button>
                    </div>
                    <h3 id={`item-${product.id}-title`} className="text-xs uppercase tracking-[0.2em] font-bold mb-2 text-brand-charcoal text-balance">
                      {fields.name}
                    </h3>
                    <p className="text-xs text-brand-espresso/40 font-semibold">$ {fields.price}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* UGC / Instagram Reels Row */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-3xl font-serif text-brand-charcoal text-center tracking-wide">Worn & Loved</h2>
          </div>
          <div className="flex overflow-x-auto gap-4 px-6 md:px-12 pb-8 no-scrollbar scroll-smooth">
            {ugcPosts.map((post) => (
              <div key={post.id} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative group overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-brand-cream transition-soft group-hover:scale-105"
                  data-strk-bg={`[ugc-caption-${post.id}] jewelry worn by user`}
                  data-strk-bg-id={post.id}
                  data-strk-bg-ratio="9x16"
                  data-strk-bg-width="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p id={`ugc-caption-${post.id}`} className="text-white font-serif italic text-lg leading-tight tracking-wide">
                    {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shop by Category Tiles */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link 
                key={cat.id} 
                to={`/shop?category=${cat.name}`}
                className="relative aspect-square overflow-hidden group flex items-center justify-center"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-soft group-hover:scale-110"
                  data-strk-bg={`[cat-name-${cat.id}] collection category image`}
                  data-strk-bg-id={cat.id}
                  data-strk-bg-ratio="1x1"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-brand-charcoal/10 group-hover:bg-brand-charcoal/20 transition-soft" />
                <div className="relative z-10 text-center">
                  <h3 id={`cat-name-${cat.id}`} className="text-3xl md:text-4xl text-white font-serif tracking-widest">{cat.name}</h3>
                  <span className="inline-block mt-4 text-[10px] uppercase tracking-[0.3em] text-white/0 group-hover:text-white/100 translate-y-4 group-hover:translate-y-0 transition-soft border-b border-white/40 pb-1">
                    Discover More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Brand Story split section */}
        <section className="bg-brand-cream overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div 
              className="aspect-square bg-cover bg-center"
              data-strk-bg="[story-title] artisan jewelry workshop"
              data-strk-bg-id="story-image"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="1200"
            />
            <div className="flex items-center justify-center p-12 md:p-24">
              <div className="max-w-sm">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6 block">Our Legacy</span>
                <h2 id="story-title" className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-8 leading-tight">Crafted with Conscious Intent</h2>
                <p className="text-sm text-brand-espresso/70 leading-relaxed font-sans mb-10">
                  Every piece in the Velmora collection is a testament to the belief that luxury should be meaningful, accessible, and enduring. We source only the finest materials, from 18k gold plating to sustainably sourced gems.
                </p>
                <Link to="/about" className="text-xs font-bold uppercase tracking-[0.2em] border-b border-brand-charcoal pb-1 hover:text-brand-gold hover:border-brand-gold transition-soft">
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 md:px-12 bg-white text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif text-brand-charcoal mb-16">Kind Words</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="flex flex-col items-center max-w-sm mx-auto">
                  <div className="flex space-x-1 mb-6 text-brand-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-sm font-sans italic text-brand-espresso/80 leading-relaxed mb-6">"{t.content}"</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-charcoal">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 px-6 md:px-12 bg-brand-charcoal text-white text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Join the Circle</h2>
            <p className="text-sm font-sans text-white/60 mb-10 tracking-wide">
              Sign up for our newsletter and receive 10% off your first order, plus early access to new collections and exclusive offers.
            </p>
            <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-grow bg-white/5 border border-white/10 px-6 py-4 text-xs font-sans tracking-widest focus:outline-none focus:border-brand-gold transition-colors"
                required
              />
              <button className="bg-brand-cream text-brand-charcoal px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-soft shrink-0">
                Join Now
              </button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
