import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ShieldCheck, Truck, RefreshCcw, Sparkles } from 'lucide-react';
import { products, ugcItems, testimonials } from '@/lib/data';
import ProductCard from '@/components/shop/ProductCard';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="animate-fade-in">
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 scale-105"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[hero-title] close-up warm lighting gold jewelry model"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/30 z-[1]" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-12 lg:px-20 w-full text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-serif italic font-light tracking-tight leading-tight">
              Crafted to be Treasured
            </h1>
            <p className="max-w-xl mx-auto text-sm md:text-base font-sans font-light tracking-widest text-stone-200 uppercase">
              Demi-fine jewelry for modern heirlooms.
            </p>
            <div className="pt-4">
              <Link to="/shop" className="btn btn-primary min-w-[200px]">
                Shop the Collection
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-stone-950 text-stone-400 py-6 border-b border-stone-800">
        <div className="max-w-[1440px] mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex justify-between items-center min-w-[800px] md:min-w-0 md:px-12 gap-8 text-[10px] md:text-[11px] font-sans uppercase tracking-[0.25em] font-medium whitespace-nowrap">
            <div className="flex items-center gap-3">
              <Truck className="w-4 h-4 text-primary" />
              Free Worldwide Shipping
            </div>
            <div className="flex items-center gap-3">
              <RefreshCcw className="w-4 h-4 text-primary" />
              30-Day Returns
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-primary" />
              18K Gold Plated
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-primary" />
              Hypoallergenic
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bestsellers Product Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 id="bestsellers-title" className="text-4xl md:text-5xl font-serif italic text-foreground">Bestsellers</h2>
            <p className="text-stone-500 font-sans text-xs uppercase tracking-widest">Our most loved pieces</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-6 md:gap-x-8">
            {products.slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/shop" className="btn btn-outline min-w-[200px]">View All</Link>
          </div>
        </div>
      </section>

      {/* 4. UGC Reel Section */}
      <section className="bg-stone-50 py-20 border-y border-stone-100">
        <div className="max-w-[1440px] mx-auto overflow-hidden">
          <div className="px-4 md:px-12 mb-10 flex justify-between items-end">
             <div className="space-y-2">
                <h3 className="font-serif text-3xl italic text-foreground">As Worn By You</h3>
                <p className="text-[10px] uppercase font-sans tracking-widest text-primary font-bold">#VelmoraJournals</p>
             </div>
          </div>
          <div className="flex gap-4 overflow-x-auto px-4 md:px-12 pb-8 no-scrollbar snap-x snap-mandatory">
            {ugcItems.map((item) => (
              <div 
                key={item.id} 
                className="relative min-w-[280px] aspect-[9/16] bg-stone-200 snap-center group overflow-hidden"
              >
                <img 
                  data-strk-img-id={`ugc-${item.id}`}
                  data-strk-img={`[ugc-caption-${item.id}] luxury vertical close-up jewelry wearing`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="600"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                  alt={item.caption}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p id={`ugc-caption-${item.id}`} className="text-white font-serif text-xl italic select-none">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop By Category Tiles */}
      <section className="section-padding">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat) => (
            <Link 
              key={cat} 
              to={`/shop?category=${cat}`}
              className="group relative aspect-[4/5] overflow-hidden bg-stone-100"
            >
              <div 
                className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110"
                data-strk-bg-id={`cat-${cat}`}
                data-strk-bg={`[cat-title-${cat}] elegant jewelry close-up editorial`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 id={`cat-title-${cat}`} className="text-white font-serif text-4xl italic transition-transform duration-500 group-hover:-translate-y-2">{cat}</h3>
              </div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-white font-sans uppercase tracking-super-wide text-[10px] font-bold border-b border-white pb-1">Explore</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story Section */}
      <section className="bg-stone-950 text-stone-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div 
            className="h-[500px] md:h-[700px] w-full"
            data-strk-bg-id="brand-story-img"
            data-strk-bg="craftsmanship detail jewelry making workshop gold"
            data-strk-bg-ratio="1x1"
            data-strk-bg-width="1200"
          />
          <div className="p-10 md:p-20 lg:p-32 space-y-8">
            <span className="text-primary uppercase font-sans tracking-super-wide text-xs font-bold">Our Philosophy</span>
            <h2 id="story-title" className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white leading-tight">Beyond the Gilded Surface</h2>
            <p className="font-sans text-stone-400 leading-relaxed tracking-wide">
              Velmora was born from a desire for more. More quality, more meaning, more longevity. We believe the jewelry you wear shouldn't just be high-end — it should be a high-end experience that lasts.
            </p>
            <div className="pt-4">
              <Link to="/about" className="btn btn-outline !text-white !border-white hover:!bg-white hover:!text-stone-950">Read Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="section-padding bg-background text-center">
        <div className="max-w-4xl mx-auto space-y-12">
           <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Sparkles key={i} className="w-4 h-4 text-primary fill-primary" />
              ))}
           </div>
           
           <div className="relative overflow-hidden">
              <div className="flex gap-12 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8">
                 {testimonials.map((t) => (
                   <div key={t.id} className="min-w-full snap-center space-y-6">
                      <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-stone-700">"{t.text}"</p>
                      <cite className="block font-sans uppercase tracking-[0.25em] text-xs font-bold not-italic text-primary">— {t.name}</cite>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 8. Newsletter Capture */}
      <section className="section-padding bg-stone-100">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-stone-950 p-12 md:p-20 relative overflow-hidden text-center text-white">
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none grayscale"
              data-strk-bg-id="newsletter-bg"
              data-strk-bg="abstract luxury gold texture"
              data-strk-bg-ratio="21x9"
              data-strk-bg-width="1920"
            />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
               <h2 className="text-3xl md:text-5xl font-serif italic tracking-tight">The Golden Circle</h2>
               <p className="font-sans text-stone-400 uppercase tracking-widest text-xs leading-loose">
                 Join our community for styling tips, editorial updates, and 10% off your first order.
               </p>
               
               <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow bg-white/10 border border-white/20 px-6 py-4 text-sm font-sans focus:outline-none focus:border-primary transition-colors text-white placeholder:text-stone-500"
                  />
                  <button type="submit" className="btn btn-primary whitespace-nowrap">Join Us</button>
               </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
