import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../api/products';
import { toast } from 'sonner';

const Home = ({ addToCart }) => {
  const containerRef = useRef(null);

  const bestsellers = products.slice(0, 5);

  const testimonials = [
    { name: "Eleanor R.", text: "The quality surpassed my expectations. So delicate yet durable.", rating: 5 },
    { name: "Sophia M.", text: "Perfect for everyday wear. I never take my Golden Sphere Huggies off.", rating: 5 },
    { name: "Isabella K.", text: "The packaging is as beautiful as the jewelry. Made for the perfect gift.", rating: 5 },
  ];

  const ugcPosts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400', caption: "Golden Hour Glow" },
    { id: 2, image: 'https://images.unsplash.com/photo-1627225924765-552d44cfbc7b?auto=format&fit=crop&q=80&w=400', caption: "Ear Stacking 101" },
    { id: 3, image: 'https://images.unsplash.com/photo-1598560912005-538361956550?auto=format&fit=crop&q=80&w=400', caption: "Minimalist Luxe" },
    { id: 4, image: 'https://images.unsplash.com/photo-1635767798638-3e2827e8424b?auto=format&fit=crop&q=80&w=400', caption: "The Perfect Huggie" },
    { id: 5, image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&q=80&w=400', caption: "Timeless Texture" },
  ];

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div className="overflow-x-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1611085583191-a3b1318d33fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Editorial model wearing gold jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center space-y-8 px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-serif font-light leading-tight"
          >
            Crafted to be Treasured
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl tracking-widest uppercase font-light max-w-2xl mx-auto"
          >
            Essential demi-fine jewelry for the modern silhouette.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/shop" 
              className="inline-block bg-white text-velmora-dark px-10 py-4 uppercase text-xs tracking-[0.3em] hover:bg-velmora-gold hover:text-white transition-all duration-300"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-velmora-warm py-4 border-b border-gray-100 flex justify-center items-center overflow-x-auto no-scrollbar whitespace-nowrap px-6">
        <div className="flex items-center space-x-12 text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500">
          <span>Free Worldwide Shipping</span>
          <span className="w-1 h-1 bg-velmora-gold rounded-full" />
          <span>30-Day Returns</span>
          <span className="w-1 h-1 bg-velmora-gold rounded-full" />
          <span>18K Gold Plated</span>
          <span className="w-1 h-1 bg-velmora-gold rounded-full" />
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 space-y-4 md:space-y-0">
          <h2 className="text-4xl font-serif italic">Bestsellers</h2>
          <Link to="/shop" className="group flex items-center text-xs uppercase tracking-widest hover:text-velmora-gold transition-colors">
            View All <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {bestsellers.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-velmora-warm relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <img 
                  src={item.hoverImage} 
                  alt={`${item.name} alternate view`} 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
                <button 
                  onClick={(e) => handleAddToCart(e, item)}
                  className="absolute bottom-0 left-0 right-0 py-4 bg-white/90 backdrop-blur-sm text-velmora-dark text-[10px] uppercase tracking-widest font-semibold translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  Quick Add
                </button>
              </div>
              <div className="mt-6 space-y-2 text-center md:text-left">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-800">{item.name}</h3>
                <p className="text-sm font-light text-velmora-gold font-serif italic tracking-wider">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section className="bg-velmora-warm py-24 border-y border-gray-100">
        <div className="px-6 max-w-7xl mx-auto mb-12 text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.3em] text-velmora-gold font-semibold mb-4">Our Community</p>
          <h2 className="text-4xl font-serif">As Worn by You</h2>
        </div>
        <div className="flex overflow-x-auto no-scrollbar space-x-6 px-6 pb-6">
          {ugcPosts.map((post) => (
            <div key={post.id} className="relative min-w-[280px] aspect-[9/16] overflow-hidden group">
              <img src={post.image} alt={post.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-bottom p-8 flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white serif italic text-xl">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat) => (
            <div key={cat} className="group relative aspect-square overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500 z-10" />
              <img 
                src={cat === 'Earrings' ? 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=600' : (cat === 'Necklaces' ? 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600' : 'https://images.unsplash.com/photo-1630019058353-571407da5a70?auto=format&fit=crop&q=80&w=600')} 
                alt={cat} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white uppercase tracking-[0.4em] text-lg font-light translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{cat}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="flex flex-col md:flex-row min-h-[600px] border-y border-gray-100">
        <div className="flex-1 overflow-hidden relative min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1616460010072-a728b97ee542?auto=format&fit=crop&q=80&w=1200" 
            alt="Jewelry workspace" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 bg-velmora-beige flex items-center justify-center p-12 md:p-24 text-center md:text-left">
          <div className="space-y-8 max-w-md">
            <p className="text-[10px] uppercase tracking-[0.3em] text-velmora-gold font-semibold">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-serif italic">Jewelry for the Modern Soul</h2>
            <p className="text-sm text-gray-500 leading-relaxed font-light">
              Founded on the principle that luxury should be accessible without compromise. We create pieces that celebrate individuality, designed to be worn today and treasured forever. Each piece is meticulously crafted using high-quality 18K gold plating.
            </p>
            <button className="text-xs uppercase tracking-widest underline decoration-velmora-gold decoration-2 underline-offset-8 hover:text-velmora-gold transition-colors font-semibold">Learn More</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-velmora-warm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center space-y-6">
              <div className="flex justify-center space-x-1 text-velmora-gold">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <p className="serif italic text-xl font-light leading-relaxed">"{t.text}"</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-6 flex flex-col items-center justify-center text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-serif">Stay Inspired</h2>
          <p className="text-sm text-gray-500 tracking-wider">Join for 10% off your first order and exclusive early access.</p>
        </div>
        <div className="w-full max-w-md flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL" 
            className="flex-grow bg-transparent border-b border-gray-300 py-3 text-[10px] tracking-widest focus:border-velmora-dark outline-none transition-colors"
          />
          <button className="bg-velmora-dark text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-velmora-gold transition-colors">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
