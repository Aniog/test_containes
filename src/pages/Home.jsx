import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/products/ProductCard';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function Home() {
  const containerRef = useRef(null);
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    const fetchBestsellers = async () => {
      const { data: response } = await client
        .from('JewelryProducts')
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
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [bestsellers]);

  return (
    <div ref={containerRef} className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 scale-105"
          data-strk-bg-id="hero-bg-unique"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>
        
        <div className="relative z-20 text-center text-white px-6">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light tracking-widest uppercase mb-10 opacity-90 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            Fine jewelry for life's golden moments
          </p>
          <a 
            href="/shop" 
            className="inline-block bg-[#D4AF37] text-white px-10 py-4 text-sm tracking-[0.2em] font-medium uppercase hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 animate-in fade-in slide-in-from-bottom duration-1000 delay-500"
          >
            Shop the Collection
          </a>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-[#E5E5E5] py-4">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <div className="flex justify-between items-center min-w-[800px] text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B]">
            <span>Free Worldwide Shipping</span>
            <span className="w-1 h-1 bg-[#D4AF37] rounded-full" />
            <span>30-Day Returns</span>
            <span className="w-1 h-1 bg-[#D4AF37] rounded-full" />
            <span>18K Gold Plated</span>
            <span className="w-1 h-1 bg-[#D4AF37] rounded-full" />
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers Product Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 uppercase tracking-[0.1em]">Bestsellers</h2>
          <div className="w-12 h-[1px] bg-[#D4AF37]" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {bestsellers.length > 0 ? (
            bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            Array(5).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse flex flex-col gap-4">
                <div className="aspect-[3/4] bg-[#F5EFE6]" />
                <div className="h-4 bg-[#F5EFE6] w-2/3 mx-auto" />
                <div className="h-4 bg-[#F5EFE6] w-1/3 mx-auto" />
              </div>
            ))
          )}
        </div>
      </section>

      {/* Reel-style UGC Row */}
      <section className="py-24 bg-[#FAF9F6] border-y border-[#E5E5E5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-2xl font-serif italic text-center">Worn by You</h2>
        </div>
        <div className="flex overflow-x-auto gap-4 px-6 pb-4 no-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative flex-none w-[280px] aspect-[9/16] bg-[#F5EFE6] group overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img={`gold jewelry worn lifestyle editorial earring necklace huggie [ugc-caption-${i}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                alt="UGC"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <p id={`ugc-caption-${i}`} className="text-white text-sm font-serif italic opacity-90">
                  {i === 1 && "A daily essential that sparks joy."}
                  {i === 2 && "The perfect gold layering pieces."}
                  {i === 3 && "Waking up with Velmora radiance."}
                  {i === 4 && "Effortless elegance for every day."}
                  {i === 5 && "Treasures that last a lifetime."}
                  {i === 6 && "My new favorite jewelry brand."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category Tiles */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 'earrings', name: 'Earrings', img: 'cat-earrings' },
            { id: 'necklaces', name: 'Necklaces', img: 'cat-necklaces' },
            { id: 'huggies', name: 'Huggies', img: 'cat-huggies' }
          ].map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[3/4] bg-[#F5EFE6] overflow-hidden"
            >
              <div 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                data-strk-bg-id={`cat-tile-${cat.id}`}
                data-strk-bg="[cat-name-${cat.id}] luxury gold jewelry editorial"
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 id={`cat-name-${cat.id}`} className="text-white text-2xl font-serif tracking-[0.2em] uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="aspect-[4/5] bg-[#F5EFE6] overflow-hidden">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              data-strk-img-id="brand-story-img"
              data-strk-img="jewelry designer studio elegant details hands crafting gold"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              className="w-full h-full object-cover"
              alt="Our Story"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 id="brand-story-title" className="text-4xl lg:text-5xl font-serif">Democratizing Luxury</h2>
            <p className="text-[#6B6B6B] leading-relaxed text-lg">
              Velmora was born from a desire for jewelry that feels truly special but isn't kept for special occasions. We craft demi-fine pieces designed for your every day—modern heirlooms that are high-quality, ethically sourced, and fairly priced.
            </p>
            <Link to="/about" className="text-sm font-medium tracking-[0.2em] uppercase border-b border-[#1A1A1A] pb-1 w-fit hover:border-[#D4AF37] transition-colors">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F5EFE6] px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 h-full">
            {[
              { text: "Absolute perfection. The quality of the gold plating is incredible, it hasn't tarnished after months of wear.", author: "Sophia O." },
              { text: "I bought the Royal Heirloom Set as a gift and the packaging was so elegant. Highly recommend!", author: "Isabella L." },
              { text: "The Golden Sphere Huggies are my new go-to. They are lightweight but look so expensive.", author: "Elena R." }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4">
                <div className="flex gap-1 text-[#D4AF37]">
                  {Array(5).fill(0).map((_, j) => (
                    <span key={j} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text font-serif italic text-lg leading-relaxed">"{review.text}"</p>
                <p className="text-xs tracking-[0.2em] uppercase text-[#6B6B6B] font-medium">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Capture */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-[#1A1A1A] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="relative z-10 flex flex-col items-center gap-8">
            <h2 className="text-3xl md:text-5xl font-serif">Join the Inner Circle</h2>
            <p className="text-white/70 tracking-widest uppercase text-sm">Join for 10% off your first order</p>
            <form className="flex flex-col md:flex-row w-full max-w-md gap-4">
              <input 
                type="email" 
                placeholder="YOUR EMAIL"
                className="flex-1 bg-transparent border-b border-white/30 py-4 text-sm tracking-widest placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button type="submit" className="bg-[#D4AF37] text-white px-10 py-4 text-xs tracking-[0.2em] font-medium uppercase hover:bg-white hover:text-[#1A1A1A] transition-all">
                Join
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// Minimal Link component for internal usage until routes are set
function Link({ to, children, className, ...props }) {
  return (
    <a href={to} className={cn("", className)} {...props}>
      {children}
    </a>
  );
}
