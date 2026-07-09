import React, { useEffect, useState } from 'react';
import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { UGCReel } from '@/components/home/UGCReel';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { ProductCard } from '@/components/ProductCard';
import { fetchProducts } from '@/api/products';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    if (bestsellers.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, document.body);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [bestsellers]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchProducts({ isBestseller: true });
        setBestsellers(data.slice(0, 5));
      } catch (err) {
        console.error("Failed to load bestsellers", err);
      }
    };
    load();
  }, []);

  return (
    <div className="bg-white">
      <Hero />
      <TrustBar />

      {/* Bestsellers Section */}
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 id="bestseller-title" className="text-4xl md:text-6xl font-serif">The Bestsellers</h2>
            <p className="text-muted-foreground font-sans tracking-wide max-w-lg">
              Our most coveted pieces, loved by women who value the art of subtle luxury.
            </p>
          </div>
          <Link to="/shop" className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold border-b border-black pb-2 hover:opacity-60 transition-all">
            View All Pieces
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {bestsellers.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      <CategoryGrid />

      {/* Brand Story Split */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24 px-6">
          <div className="relative aspect-[4/5] bg-muted overflow-hidden">
             <img
              alt="Velmora Studio"
              data-strk-img-id="brand-story-img"
              data-strk-img="editorial jewelry design studio craftsmanship hands workspace"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="/placeholder.svg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8 animate-in slide-in-from-right-12 duration-1000">
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">Quiet Luxury, <br/>Defined.</h2>
            <div className="space-y-6 text-muted-foreground font-sans leading-relaxed text-lg font-light">
              <p>
                VELMORA was born from a desire for jewelry that bridges the gap between fast-fashion and high-fine jewelry. 
              </p>
              <p>
                We believe that every woman deserves access to beautifully crafted, demi-fine pieces that can be worn every day, layered together, and passed down. 
              </p>
            </div>
            <Link to="/about" className="inline-block px-12 py-4 bg-primary text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-primary/90 transition-colors shadow-2xl">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <UGCReel />

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-muted/20 border-y border-border">
         <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-serif">Treasured by Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { name: "Sarah J.", text: "The quality of the 18K plating is exceptional. It looks like solid gold." },
                  { name: "Elena M.", text: "I haven't taken off my Golden Sphere Huggies in weeks. So comfortable." },
                  { name: "Clara G.", text: "Beautifully packaged and arrived so quickly. The perfect gift for myself." }
                ].map((t, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="text-accent flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => <span key={i} className="text-sm">★</span>)}
                    </div>
                    <p className="font-serif italic text-lg leading-relaxed">"{t.text}"</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">— {t.name}</p>
                  </div>
                ))}
            </div>
         </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto bg-black text-white p-12 md:p-20 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif">Join the Inner Circle</h2>
          <p className="text-white/60 font-sans tracking-wide max-w-sm mx-auto text-sm">
            Sign up for our newsletter and receive 10% off your first order, plus early access to new collections.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email your address" 
              className="flex-grow bg-transparent border-b border-white/30 py-3 text-sm focus:border-white transition-colors outline-none font-sans"
            />
            <button className="bg-white text-black px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-accent hover:text-white transition-all">
              Join
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
