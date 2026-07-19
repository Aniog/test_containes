import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: "Vivid Aura Jewels", price: 42, category: "Earrings", desc: "Gold ear cuff with crystal accent", imgId: "prod-1" },
  { id: 2, name: "Majestic Flora Nectar", price: 68, category: "Necklaces", desc: "Multicolor floral crystal necklace", imgId: "prod-2" },
  { id: 3, name: "Golden Sphere Huggies", price: 38, category: "Huggies", desc: "Chunky gold dome huggie earrings", imgId: "prod-3" },
  { id: 4, name: "Amber Lace Earrings", price: 54, category: "Earrings", desc: "Textured gold filigree drop earrings", imgId: "prod-4" },
  { id: 5, name: "Royal Heirloom Set", price: 95, category: "Sets", desc: "Gift-boxed earring + necklace set", imgId: "prod-5" },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div
          className="absolute inset-0 bg-black/30 z-10"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-title] [hero-subtitle] gold jewelry model editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        
        <div className="relative z-20 text-white max-w-3xl">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Crafted to be <br /> Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light mb-10 tracking-wide uppercase font-sans">
            Timeless demi-fine jewelry for your everyday ritual.
          </p>
          <Button className="bg-white text-black hover:bg-[#C5A059] hover:text-white px-10 py-6 rounded-none uppercase tracking-[0.2em] text-xs transition-all duration-300">
            Shop the Collection
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#F5F2EA] py-4 border-b border-[#E5E2D9]">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-6 text-[10px] md:text-xs uppercase tracking-[0.15em] font-medium text-gray-600">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:block text-gray-300">|</span>
          <span>30-Day Returns</span>
          <span className="hidden md:block text-gray-300">|</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:block text-gray-300">|</span>
          <span>Hypoallergenic</span>
        </div>
      </section>

      {/* Bestsellers Grid */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 id="bestsellers-title" className="text-4xl font-serif mb-4">The Bestsellers</h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs">Curated favorites from the atelier.</p>
          </div>
          <Link to="/shop" className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-[#F5F2EA]">
                <img
                  data-strk-img-id={`prod-img-${product.id}`}
                  data-strk-img={`[prod-title-${product.id}] gold jewelry luxury lifestyle`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button className="absolute bottom-0 left-0 right-0 py-4 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 uppercase tracking-widest text-[10px] font-bold">
                  Quick Add
                </button>
              </div>
              <h3 id={`prod-title-${product.id}`} className="product-name text-xs mb-2">{product.name}</h3>
              <p className="text-sm font-light text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UGC / Reels Row */}
      <section className="py-24 bg-[#1A1A1A] text-white overflow-hidden">
        <div className="px-4 md:px-8 mb-12">
          <h2 className="text-3xl font-serif mb-2 tracking-wide">Seen on You</h2>
          <p className="text-gray-500 uppercase tracking-widest text-[10px]">Tag #VelmoraMoments to be featured.</p>
        </div>
        
        <div className="flex gap-4 px-4 md:px-8 overflow-x-auto no-scrollbar scroll-smooth pb-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-shrink-0 w-64 md:w-80 aspect-[9/16] relative group overflow-hidden">
              <img
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img="woman wearing gold jewelry lifestyle candid portrait"
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt="UGC"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-serif italic text-lg leading-snug">"The perfect addition to my morning ritual. So lightweight and luxurious."</p>
                <span className="mt-4 text-[10px] uppercase tracking-widest font-bold">@alexandra_j</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Earrings", id: "cat-1" },
            { name: "Necklaces", id: "cat-2" },
            { name: "Huggies", id: "cat-3" }
          ].map((cat) => (
            <Link to={`/shop?cat=${cat.name.toLowerCase()}`} key={cat.id} className="relative aspect-[4/5] overflow-hidden group">
              <img
                data-strk-img-id={`cat-img-${cat.id}`}
                data-strk-img={`close up [cat-name-${cat.id}] gold jewelry editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div id={`cat-name-${cat.id}`} className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors duration-500">
                <span className="text-white text-2xl font-serif tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="bg-[#F5F2EA] flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 aspect-square relative">
          <img
            data-strk-img-id="story-img"
            data-strk-img="minimal workspace jewelry design sketching gold pieces"
            data-strk-img-ratio="1x1"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Atelier"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-12 md:p-24">
          <h2 id="story-title" className="text-4xl font-serif mb-8 leading-tight">The Art of Living Well</h2>
          <p className="text-gray-600 font-light leading-relaxed mb-10 text-lg">
            Founded in Paris and crafted for the modern woman, Velmora translates the heritage of fine jewelry into accessible demi-fine pieces. We believe that luxury shouldn't be reserved for special occasions, but woven into the fabric of your daily life.
          </p>
          <Link to="/about" className="uppercase tracking-[0.3em] text-xs font-bold border-b border-black pb-2 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
            Our Story
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 text-center max-w-4xl mx-auto">
        <div className="flex justify-center gap-1 mb-10">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
          ))}
        </div>
        
        <div className="relative h-64 overflow-hidden">
          <div className="animate-fade-in">
            <p className="text-2xl md:text-3xl font-serif italic mb-10 leading-relaxed text-gray-800">
              "Velmora jewelry has become my signature. The quality is exceptional and the gold tone is absolutely perfect. I get compliments every single day."
            </p>
            <cite className="uppercase tracking-[0.2em] text-[10px] font-bold not-italic">— Elena K.</cite>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto rounded-none bg-[#1A1A1A] p-12 md:p-24 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-serif mb-8">Join the Inner Circle</h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto mb-12 tracking-wide uppercase text-xs md:text-sm">
            Sign up for early access to new collections and receive 10% off your first order.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-b border-gray-600 px-0 py-4 focus:outline-none focus:border-[#C5A059] flex-grow transition-colors font-light text-sm"
            />
            <Button className="bg-[#C5A059] hover:bg-white hover:text-black transition-all px-12 py-4 rounded-none uppercase tracking-widest text-xs font-bold">
              Join
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
