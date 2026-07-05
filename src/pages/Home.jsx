import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/data';
import ProductCard from '@/components/shop/ProductCard';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { title: 'Earrings', id: 'cat-earrings' },
    { title: 'Necklaces', id: 'cat-necklaces' },
    { title: 'Huggies', id: 'cat-huggies' },
  ];

  const reels = [
    { id: 'reel-1', caption: 'Everyday Brilliance' },
    { id: 'reel-2', caption: 'The Perfect Gift' },
    { id: 'reel-3', caption: 'Celestial Stack' },
    { id: 'reel-4', caption: 'Morning Light' },
    { id: 'reel-5', caption: 'Golden Hour' },
  ];

  const testimonials = [
    { name: 'Sarah M.', text: 'The quality surpassed my expectations. It feels much more expensive than it is.', color: 'text-yellow-600' },
    { name: 'Elena R.', text: 'Beautifully gift-wrapped and the jewelry is absolutely stunning. My new go-to brand.', color: 'text-yellow-600' },
    { name: 'Jasmine L.', text: "I wear my Golden Sphere Huggies every single day. They haven't tarnished at all.", color: 'text-yellow-600' },
  ];

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 scale-105"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="[hero-title] close-up gold jewelry on model warm lighting editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
        
        <div className="relative z-20 text-center text-white px-6">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight max-w-4xl mx-auto">
            Crafted to be Treasured
          </h1>
          <p className="text-sm md:text-base uppercase tracking-[0.3em] font-light mb-10 opacity-90 max-w-2xl mx-auto">
            DEMI-FINE JEWELRY FOR EVERYDAY MOMENTS
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-black px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center text-[10px] uppercase tracking-[0.15em] font-medium text-muted-foreground gap-4 md:gap-0">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">•</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">•</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">•</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
            <div>
              <h2 className="text-3xl md:text-4xl text-black">Bestsellers</h2>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">MOST LOVED PIECES</p>
            </div>
            <Link to="/shop" className="text-xs uppercase tracking-widest flex items-center group">
              View All <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Reels Section */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-3xl text-center">As Worn By You</h2>
            <p className="text-[10px] text-center uppercase tracking-[0.3em] text-muted-foreground mt-2">@VELMORA_JEWELRY</p>
        </div>
        <div className="flex overflow-x-auto pb-8 hide-scrollbar space-x-4 px-6 md:px-12">
          {reels.map((reel, idx) => (
            <div key={reel.id} className="relative flex-shrink-0 w-64 aspect-[9/16] group overflow-hidden bg-secondary">
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                data-strk-bg-id={reel.id}
                data-strk-bg={`[reel-caption-${idx}] jewelry worn on woman ear neck lifestyle`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                <p id={`reel-caption-${idx}`} className="text-white text-lg serif italic tracking-wide">{reel.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link to="/shop" key={cat.id} className="relative group overflow-hidden block aspect-[4/5]">
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={cat.id}
                data-strk-bg={`[cat-title-${cat.id}] collection image`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 id={`cat-title-${cat.id}`} className="text-white text-3xl md:text-4xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {cat.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div 
          className="aspect-square bg-secondary lg:h-[700px]"
          data-strk-bg-id="brand-story-img"
          data-strk-bg="fine jewelry artisan crafting gold earrings editorial aesthetic"
          data-strk-bg-ratio="1x1"
          data-strk-bg-width="1200"
        />
        <div className="flex items-center justify-center p-12 md:p-20 lg:p-32 bg-[#F9F6F2]">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Our Story</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 serif italic text-lg">
              "We believe that every piece of jewelry carries a story. VELMORA was founded to bridge the gap between costume jewelry and luxury fine jewelry — creating demi-fine pieces that are accessible yet timeless."
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed mb-10 tracking-wide">
              Each piece is thoughtfully designed in our studio and crafted with recycled gold and responsibly sourced stones.
            </p>
            <Link to="/about" className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-black pb-1 hover:opacity-50 transition-opacity">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
             {testimonials.map((t, i) => (
               <div key={i} className="space-y-4">
                 <div className="flex justify-center space-x-1 text-yellow-600">
                   {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                 </div>
                 <p className="text-lg serif italic leading-relaxed">"{t.text}"</p>
                 <p className="text-[10px] uppercase tracking-widest text-muted-foreground">— {t.name}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto bg-[#F3EFE9] p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Join the Inner Circle</h2>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">Join for 10% off your first order</p>
          <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border-b border-black/20 focus:border-black outline-none px-2 py-3 text-xs tracking-wider"
            />
            <button className="bg-black text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
