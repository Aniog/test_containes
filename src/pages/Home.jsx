import React from 'react';
import { products } from '@/api/products';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = ({ addToCart }) => {
  const bestsellers = products.slice(0, 5);

  return (
    <div className="overflow-x-hidden">
      <section className="relative h-screen w-full flex items-center justify-center text-center px-6">
        <div 
          className="absolute inset-0 bg-stone-300"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=2000')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-pearl max-w-4xl space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-serif font-light leading-tight"
          >
            Crafted to be Treasured
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto"
          >
            Timeless demi-fine jewelry designed for the modern woman.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Link 
              to="/shop" 
              className="inline-block bg-pearl text-onyx px-10 py-4 serif-uppercase text-sm tracking-widest hover:bg-gold hover:text-pearl transition-all"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-onyx text-pearl py-4 px-6">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-2 text-[10px] serif-uppercase tracking-[0.2em] font-medium opacity-80">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-pearl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif">The Bestsellers</h2>
          <p className="text-stone text-sm tracking-widest serif-uppercase font-light">Community Favorites</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] bg-stone-100 mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-stone-200" />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <button 
                      onClick={(e) => { e.preventDefault(); addToCart(product); }}
                      className="w-full bg-pearl/90 backdrop-blur-sm text-onyx py-3 text-[10px] serif-uppercase tracking-widest"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>
              </Link>
              <div className="text-center space-y-1">
                <Link to={`/product/${product.id}`} className="serif-uppercase text-xs tracking-widest block font-medium hover:text-gold transition-colors">
                  {product.name}
                </Link>
                <p className="text-sm font-light text-stone">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-[#F9F8F4] overflow-hidden">
        <div className="px-6 lg:px-12 mb-12">
           <h2 className="text-3xl font-serif">As Seen On You</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto px-6 lg:px-12 pb-8 no-scrollbar snap-x">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="min-w-[280px] aspect-[9/16] bg-stone-200 snap-start relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-6 left-6 right-6 text-pearl">
                <p className="font-serif italic text-lg line-clamp-2">"The only earrings I wear every single day."</p>
                <p className="text-[10px] serif-uppercase tracking-widest mt-2 opacity-70">@sarah_m</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Earrings', 'Necklaces', 'Huggies'].map(cat => (
            <Link key={cat} to={`/shop?cat=${cat.toLowerCase()}`} className="relative aspect-[4/5] bg-stone-100 group overflow-hidden">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-pearl">
                <h3 className="text-4xl font-serif tracking-tight">{cat}</h3>
                <span className="text-[10px] serif-uppercase tracking-widest mt-4 border-b border-pearl pb-1 opacity-0 group-hover:opacity-100 transition-all">Shop</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="aspect-square bg-stone-100 relative">
          <div className="absolute inset-10 border border-stone-200" />
        </div>
        <div className="space-y-8">
          <h2 className="text-5xl font-serif leading-tight">Quiet luxury, <br/>made for you.</h2>
          <p className="text-stone leading-relaxed font-light text-lg">
            We believe that fine jewelry shouldn't be reserved for special occasions. 
            Velmora pieces are designed to be part of your daily ritual, getting better with time and skin contact.
          </p>
          <Link to="/about" className="inline-flex items-center gap-3 serif-uppercase text-xs tracking-widest border-b border-onyx pb-2 hover:text-gold hover:border-gold transition-all">
            Our Story <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section className="py-24 bg-onyx text-pearl text-center px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex justify-center gap-1 text-gold">
            {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
          </div>
          <p className="text-2xl md:text-3xl font-serif italic font-light leading-relaxed">
            "Everything from the packaging to the weight of the jewelry is just perfect. Velmora is my new go-to for gifts and self-treats."
          </p>
          <p className="serif-uppercase text-[10px] tracking-[0.2em] opacity-60">Verified Purchase · Chloe B.</p>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif">Join the Circle</h2>
            <p className="text-stone font-light italic">Access early drops and exclusive offers.</p>
          </div>
          <form className="flex gap-4 max-w-md mx-auto">
             <input type="email" placeholder="EMAIL ADDRESS" className="flex-grow bg-transparent border-b border-onyx py-2 text-xs focus:outline-none" />
             <button className="serif-uppercase text-[10px] tracking-widest border-b border-onyx hover:text-gold hover:border-gold pb-1 transition-all">Join</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
