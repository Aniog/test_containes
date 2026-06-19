import React from 'react';
import { motion } from 'framer-motion';
import { products, ugcItems } from '@/lib/data';
import ProductCard from '@/components/shop/ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-v1"
          data-strk-bg="[hero-headline] [hero-subheadline]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-[10px] uppercase tracking-[0.4em] mb-6 font-sans"
          >
            Velmora Fine Jewelry
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            id="hero-headline"
            className="text-white text-5xl md:text-8xl font-serif mb-8 leading-tight"
          >
            Crafted to be <br/> Treasured
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            id="hero-subheadline"
            className="text-white/80 text-sm md:text-lg mb-10 max-w-lg mx-auto font-sans font-light tracking-wide"
          >
            Demi-fine gold jewelry designed for your daily rituals and life's grandest moments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              to="/shop" 
              className="inline-block bg-accent text-accent-foreground px-10 py-5 text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 shadow-xl"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary border-b py-4 overflow-hidden">
        <div className="flex whitespace-nowrap gap-12 md:justify-center animate-none md:animate-none overflow-x-auto px-6 no-scrollbar">
          {["Free Worldwide Shipping", "30-Day Returns", "18K Gold Plated", "Hypoallergenic"].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="w-1 h-1 bg-accent rounded-full" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">Editor's Picks</span>
            <h2 className="font-serif text-4xl md:text-5xl">The Bestsellers</h2>
          </div>
          <Link to="/shop" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] border-b border-black pb-1 hover:opacity-60 transition-opacity">
            View All <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-12">
          {products.filter(p => p.isBestseller).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-black py-24 text-white">
        <div className="px-6 md:px-12 mb-12 flex items-center justify-between">
          <h2 className="font-serif text-3xl italic">Inspired by You</h2>
          <span className="text-[10px] uppercase tracking-[0.2em] border-b border-white pb-1">@VELMORAJEWELRY</span>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar px-6 md:px-12">
          {ugcItems.map((item, i) => (
            <div key={item.id} className="relative flex-none w-64 md:w-80 aspect-[9/16] snap-start group overflow-hidden">
              <img 
                data-strk-img-id={`ugc-img-${item.id}`}
                data-strk-img={`[ugc-caption-${item.id}] jewelry lifestyle`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt="UGC"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p id={`ugc-caption-${item.id}`} className="font-serif text-xl italic leading-tight text-white/90">
                  "{item.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Earrings", id: "cat-earrings", subtitle: "Sculpted Essentials" },
          { name: "Necklaces", id: "cat-necklaces", subtitle: "Graceful Chains" },
          { name: "Huggies", id: "cat-huggies", subtitle: "Personal Stack" }
        ].map((cat) => (
          <Link 
            key={cat.id} 
            to={`/shop?category=${cat.name.toLowerCase()}`}
            className="relative aspect-square md:aspect-[4/5] overflow-hidden group"
          >
            <div 
              className="absolute inset-0 bg-secondary"
              data-strk-bg-id={`cat-bg-${cat.id}`}
              data-strk-bg={`[cat-name-${cat.id}] [cat-sub-${cat.id}] jewelry`}
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
              <h3 id={`cat-name-${cat.id}`} className="font-serif text-4xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{cat.name}</h3>
              <p id={`cat-sub-${cat.id}`} className="text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">{cat.subtitle}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Brand Story Split */}
      <section className="grid grid-cols-1 md:grid-cols-2 bg-secondary min-h-[600px]">
        <div 
          className="h-[400px] md:h-auto overflow-hidden"
          data-strk-bg-id="story-bg"
          data-strk-bg="behind the scenes jewelry craftsmanship studio"
          data-strk-bg-ratio="4x5"
          data-strk-bg-width="1200"
        />
        <div className="flex items-center justify-center p-12 md:p-24">
          <div className="max-w-md">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-4">Our Heritage</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Every piece tells a story of craftsmanship.</h2>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-10 font-light">
              Founded on the belief that luxury should be accessible without compromise, Velmora bridges the gap between high-end fine jewelry and everyday accessorizing. Each piece is meticulously designed in our studio and crafted with recycled gold and responsibly sourced stones.
            </p>
            <Link to="/about" className="inline-block border-b border-black pb-2 text-[10px] uppercase tracking-[0.3em] font-sans hover:opacity-60 transition-opacity">
              Our Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-background border-t">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl italic">What They Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: "Eleanor W.", text: "The quality of the Golden Sphere Huggies is exceptional. They have a weight to them that feels so high-end." },
            { name: "Sophia M.", text: "Received the Royal Heirloom Set as a gift. The packaging alone was beautiful, but the jewelry itself is stunning." },
            { name: "Isabella K.", text: "I wear my Vivid Aura Jewels cuff every single day. No tarnishing even after months of wear." }
          ].map((t, i) => (
            <div key={i} className="text-center flex flex-col items-center">
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-black border-none" />)}
              </div>
              <p className="font-serif text-lg leading-relaxed mb-6 italic max-w-xs leading-snug">"{t.text}"</p>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">— {t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 md:px-12 flex justify-center">
        <div className="bg-primary text-primary-foreground p-12 md:p-20 text-center max-w-4xl w-full shadow-2xl">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Join the Inner Circle</h2>
          <p className="text-primary-foreground/70 mb-10 text-sm md:text-base font-sans font-light tracking-wide">
            Subscribe for exclusive early access to collections and receive 10% off your first order.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border-b border-primary-foreground/30 py-4 px-2 text-sm focus:border-primary-foreground outline-none transition-colors placeholder:text-primary-foreground/40 font-sans"
            />
            <button className="bg-accent text-accent-foreground px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-colors font-sans">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
