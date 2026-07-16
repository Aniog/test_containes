import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '@/api/products';
import ProductCard from '@/components/ProductCard';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Home() {
  const [bestsellers, setBestsellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    fetchProducts({ is_bestseller: true })
      .then(data => {
        setBestsellers(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, []);

  const ugcItems = [
    { id: 'ugc-1', name: "Sofia M.", text: "Perfect for my daily stack.", titleId: "ugc-1-title" },
    { id: 'ugc-2', name: "Elena R.", text: "The quality is outstanding.", titleId: "ugc-2-title" },
    { id: 'ugc-3', name: "Chloe T.", text: "Always get compliments.", titleId: "ugc-3-title" },
    { id: 'ugc-4', name: "Maya S.", text: "My new favorite brand.", titleId: "ugc-4-title" },
    { id: 'ugc-5', name: "Isabella L.", text: "Elegant and lightweight.", titleId: "ugc-5-title" }
  ];

  return (
    <div className="w-full overflow-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img 
          data-strk-img-id="hero-main-6d34fa"
          data-strk-img="[hero-subtitle] [hero-title]"
          data-strk-img-ratio="16x9"
          data-strk-img-width="2000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-6">
          <motion.h1 
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-7xl font-serif mb-6 tracking-wide"
          >
            Crafted to be Treasured
          </motion.h1>
          <motion.p 
            id="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl font-sans mb-10 tracking-[0.1em] opacity-90 max-w-2xl mx-auto"
          >
            Timeless demi-fine jewelry designed for your everyday story.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link 
              to="/shop" 
              className="bg-velmora-accent text-white px-10 py-4 uppercase tracking-[0.3em] text-xs font-bold hover:bg-white hover:text-velmora-dark transition-all duration-300"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-dark py-4 px-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex justify-between max-w-7xl mx-auto gap-8 text-[10px] md:text-xs text-white uppercase font-bold tracking-[0.3em]">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </section>

      {/* Bestsellers Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-velmora-accent">Handpicked Essentials</span>
              <h2 className="text-3xl md:text-4xl font-serif tracking-wide">The Bestsellers</h2>
            </div>
            <Link to="/shop" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-velmora-dark pb-1 flex items-center gap-2 hover:text-velmora-accent hover:border-velmora-accent transition-colors">
              View All Products <ArrowRight size={14} />
            </Link>
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {loading ? (
              Array(5).fill(0).map((_, i) => (
                <div key={i} className="animate-pulse bg-gray-100 aspect-[3/4]" />
              ))
            ) : (
              bestsellers.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-24 bg-velmora-base overflow-hidden">
        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-velmora-accent">Community Stories</span>
            <h2 id="ugc-section-title" className="text-3xl md:text-4xl font-serif tracking-wide mt-2">Worn by You</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto px-6 md:px-12 pb-8 scrollbar-hide">
          {ugcItems.map((item, i) => (
            <div key={i} className="relative flex-shrink-0 w-64 aspect-[9/16] bg-gray-200 group overflow-hidden">
              <img 
                data-strk-img-id={`ugc-img-${item.id}`}
                data-strk-img={`[${item.titleId}] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                <p id={item.titleId} className="font-serif italic text-lg mb-1 leading-tight tracking-wide">{item.text}</p>
                <span className="text-[10px] uppercase tracking-widest opacity-80">— {item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24 bg-white px-6 md:px-12">
        <h2 id="shop-category-section-title" className="sr-only">Shop by Category</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 'cat-earrings', name: "Earrings", titleId: "cat-earrings-title" },
            { id: 'cat-necklaces', name: "Necklaces", titleId: "cat-necklaces-title" },
            { id: 'cat-huggies', name: "Huggies", titleId: "cat-huggies-title" }
          ].map((cat, i) => (
            <Link key={i} to={`/shop?category=${cat.name}`} className="group relative aspect-square overflow-hidden">
              <img 
                data-strk-img-id={`cat-img-${cat.id}`}
                data-strk-img={`[${cat.titleId}] [shop-category-section-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name} 
                className="w-full h-full object-cover grayscale-[20%] transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] font-bold text-velmora-dark shadow-xl">
                    Shop {cat.name}
                 </span>
              </div>
              <div className="absolute bottom-8 left-8 text-white group-hover:opacity-0 transition-opacity">
                <h3 id={cat.titleId} className="text-2xl font-serif tracking-widest uppercase">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-6 md:px-12 flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto items-center">
        <div className="lg:w-1/2">
            <img 
                data-strk-img-id="brand-story-img-9f8a1c"
                data-strk-img="[brand-story-subtitle] [brand-story-title]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Brand Story" 
                className="w-full aspect-[4/5] object-cover"
            />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-6 lg:pl-12">
            <span id="brand-story-subtitle" className="text-[10px] uppercase tracking-[0.4em] font-bold text-velmora-accent">The Velmora Ethos</span>
            <h2 id="brand-story-title" className="text-4xl md:text-5xl font-serif tracking-wide leading-tight text-velmora-dark">Jewelry That Tells Your Story</h2>
            <p className="text-velmora-muted leading-relaxed max-w-md">
                Founded on the belief that luxury should be accessible without compromising on quality or ethics. Each Velmora piece is thoughtfully designed in our studio and ethically handcrafted using 18K gold plating and premium crystals.
            </p>
            <p className="text-velmora-muted leading-relaxed max-w-md">
                We create jewelry for the modern woman who values understated elegance and timeless design. Pieces that transition seamlessly from morning meetings to evening soirées.
            </p>
            <Link to="/about" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-velmora-dark w-fit pb-1 mt-4 hover:text-velmora-accent hover:border-velmora-accent transition-colors">
              Our Story
            </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-velmora-base px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-16 tracking-wide">Shared Moments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { name: "Jessica K.", review: "The earrings are even more beautiful in person. The packaging was so premium, it felt like a real treat to open." },
                    { name: "Sarah W.", review: "I wear my Nectar necklace every day. It hasn't tarnished at all and I get so many compliments on the colors!" },
                    { name: "Michelle P.", review: "Fast shipping and the quality is amazing for the price point. Will definitely be purchasing again for gifts." }
                ].map((testimonial, i) => (
                    <div key={i} className="flex flex-col items-center gap-4">
                        <div className="flex gap-1 text-velmora-accent">
                            {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                        </div>
                        <p className="font-serif italic text-lg leading-relaxed text-velmora-dark mb-2">"{testimonial.review}"</p>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-velmora-muted">{testimonial.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Newsletter Accent Block */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-velmora-dark p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-black/20" />
            <div className="relative z-10 flex flex-col items-center gap-8">
                <h2 className="text-3xl md:text-5xl font-serif tracking-wide">Join the Velmora Circle</h2>
                <p className="text-sm md:text-base tracking-[0.1em] opacity-80 max-w-md">
                    Sign up for an exclusive 10% off your first order and stay updated on new collection launches.
                </p>
                <div className="w-full max-w-sm flex items-center border-b border-white/40 pb-2">
                    <input 
                        type="email" 
                        placeholder="ENTER YOUR EMAIL" 
                        className="bg-transparent border-none text-xs w-full focus:outline-none tracking-widest uppercase placeholder:text-white/40"
                    />
                    <button className="text-[10px] uppercase font-bold tracking-widest ml-4 hover:text-velmora-accent transition-colors">Submit</button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
