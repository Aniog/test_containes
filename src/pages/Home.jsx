import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Star } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { fetchProducts } from '@/api/products';

const Home = () => {
  const containerRef = useRef(null);
  const [products, setProducts] = React.useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.slice(0, 5));
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [products]);

  const testimonials = [
    { name: "Sarah L.", text: "The quality is outstanding. It feels so heavy and premium, like actual heirlooms." },
    { name: "Emma R.", text: "The perfect everyday necklace. I never take it off and it hasn't tarnished at all." },
    { name: "Jessica W.", text: "Gifting these to all my bridesmaids. They are simply stunning in person." }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 scale-105"
          data-strk-bg-id="hero-bg-9922a"
          data-strk-bg="[hero-title] [hero-sub] warm luxury jewelry close up"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/20 z-[1]" />
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            id="hero-title"
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 drop-shadow-lg"
          >
            Crafted to be Treasured
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            id="hero-sub"
            className="text-xs md:text-sm uppercase tracking-[0.4em] mb-12 opacity-90 drop-shadow-md"
          >
            Refined Demi-Fine Jewelry for Every Moment
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link 
              to="/shop" 
              className="inline-block bg-white text-foreground px-12 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all duration-500 shadow-xl"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary border-b border-border py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium opacity-60 gap-4">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:block">30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:block">Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 id="bestsellers-title" className="text-4xl md:text-5xl font-serif mb-4">Our Bestsellers</h2>
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-50">Most loved pieces by our community</p>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-widest flex items-center group">
            View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                <img 
                  data-strk-img-id={`prod-img-${product.id}`}
                  data-strk-img={`[prod-name-${product.id}] jewelry mockup`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.data.name}
                />
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm text-foreground py-3 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500"
                >
                  Quick Add
                </button>
              </Link>
              <h3 id={`prod-name-${product.id}`} className="font-serif uppercase tracking-widest text-xs mb-1 group-hover:text-accent transition-colors">
                {product.data.name}
              </h3>
              <p className="font-serif text-sm opacity-60">\${product.data.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-secondary/30 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 id="ugc-title" className="text-3xl md:text-4xl font-serif">Worn by You</h2>
        </div>
        <div className="flex space-x-4 px-6 md:px-12 overflow-x-auto pb-8 scrollbar-hide no-scrollbar">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="flex-shrink-0 w-64 md:w-80 aspect-[9/16] relative overflow-hidden group">
              <img 
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img="vertical jewelry reel wearing ear neck lifestyle"
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-105"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt="Community Showcase"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6">
                 <p className="text-white font-serif italic text-sm opacity-0 group-hover:opacity-100 transition-all delay-100">"Obsessed with this layer."</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section id="collections" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat) => (
            <Link key={cat} to={`/collection/${cat}`} className="relative h-[500px] group overflow-hidden bg-secondary">
              <div 
                className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110"
                data-strk-bg-id={`cat-bg-${cat}`}
                data-strk-bg={`[cat-label-${cat}] editorial jewelry`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span id={`cat-label-${cat}`} className="text-white text-2xl font-serif uppercase tracking-[0.3em] border-b border-transparent py-2 group-hover:border-white transition-all duration-500">
                  {cat}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 aspect-square relative bg-secondary overflow-hidden">
          <img 
            data-strk-img-id="story-img"
            data-strk-img="jewelry designer working warm lit studio editorial"
            data-strk-img-ratio="1x1"
            data-strk-img-width="1200"
            className="w-full h-full object-cover"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Our Story"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">Quiet Luxury, <br/>Defined.</h2>
          <p className="text-foreground/70 leading-relaxed font-light text-lg italic font-serif">
            "We believe jewelry should be an effortless extension of yourself. Elevated, timeless pieces that tell your story without saying a word."
          </p>
          <p className="text-sm text-foreground/60 leading-relaxed">
            Founded in a small sun-drenched studio, Velmora was born from a desire for high-quality jewelry that doesn't demand diamond prices. Our demi-fine collection focuses on pure materials, conscious craftsmanship, and designs that endure.
          </p>
          <Link to="/about" className="inline-block text-xs uppercase tracking-widest border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-all">
            Our Story
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex justify-center space-x-1 text-accent">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((t) => (
              <div key={t.name} className="space-y-4">
                <p className="font-serif italic text-lg leading-relaxed">"{t.text}"</p>
                <p className="text-[10px] uppercase tracking-widest opacity-40">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-foreground text-white p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Join the Inner Circle</h2>
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] opacity-60 mb-12">Receive 10% off your first order & editorial news</p>
            <form className="flex flex-col md:flex-row max-w-md mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="bg-transparent border-b border-white/20 px-4 py-3 text-xs uppercase tracking-widest focus:outline-none focus:border-white transition-colors flex-grow"
              />
              <button type="submit" className="bg-white text-foreground px-8 py-3 text-[10px] uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all duration-300">
                Join Now
              </button>
            </form>
          </div>
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        </div>
      </section>
    </div>
  );
};

export default Home;
