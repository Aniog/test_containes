import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { toast } from 'sonner';

const products = [
  { id: 1, name: "Vivid Aura Jewels", description: "Gold ear cuff with crystal accent", price: 42, category: "Earrings", imgId: "prod-1" },
  { id: 2, name: "Majestic Flora Nectar", description: "Multicolor floral crystal necklace", price: 68, category: "Necklaces", imgId: "prod-2" },
  { id: 3, name: "Golden Sphere Huggies", description: "Chunky gold dome huggie earrings", price: 38, category: "Earrings", imgId: "prod-3" },
  { id: 4, name: "Amber Lace Earrings", description: "Textured gold filigree drop earrings", price: 54, category: "Earrings", imgId: "prod-4" },
  { id: 5, name: "Royal Heirloom Set", description: "Gift-boxed earring + necklace set", price: 95, category: "Sets", imgId: "prod-5" },
];

const Home = ({ addToCart }) => {
  const containerRef = useRef(null);
  const ugcRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to bag`);
  };

  const scrollUGC = (direction) => {
    if (ugcRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      ugcRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-stone-200"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-title] [hero-subtitle] gold jewelry model close up warm lighting luxury"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/10 z-[1]" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h2 id="hero-subtitle" className="uppercase tracking-[0.4em] text-white text-xs lg:text-sm mb-6 animate-slide-up">The Essence of Modern Elegance</h2>
          <h1 id="hero-title" className="text-5xl lg:text-7xl font-serif text-white mb-10 leading-tight animate-slide-up [animation-delay:200ms]">
            Crafted to be <br/> Treasured
          </h1>
          <Link 
            to="/shop" 
            className="inline-block bg-white text-brand-black px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-brand-cream transition-colors animate-slide-up [animation-delay:400ms]"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-brand-cream border-y border-brand-stone py-4 overflow-hidden">
        <div className="flex justify-center items-center gap-8 md:gap-16 whitespace-nowrap animate-fade-in px-6">
          <span className="text-[10px] lg:text-xs uppercase tracking-widest font-medium">Free Worldwide Shipping</span>
          <span className="text-brand-stone hidden md:inline">•</span>
          <span className="text-[10px] lg:text-xs uppercase tracking-widest font-medium">30-Day Returns</span>
          <span className="text-brand-stone hidden md:inline">•</span>
          <span className="text-[10px] lg:text-xs uppercase tracking-widest font-medium">18K Gold Plated</span>
          <span className="text-brand-stone hidden md:inline">•</span>
          <span className="text-[10px] lg:text-xs uppercase tracking-widest font-medium">Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 px-6 lg:px-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 id="bestsellers-title" className="text-3xl font-serif mb-2">Bestsellers</h2>
            <p className="text-stone-500 uppercase tracking-widest text-[10px]">Most loved pieces by our community</p>
          </div>
          <Link to="/shop" className="group flex items-center gap-2 uppercase tracking-widest text-xs font-semibold hover:text-brand-gold transition-colors">
            View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
                <Link to={`/product/${product.id}`}>
                  <img 
                    data-strk-img-id={`best-${product.id}`}
                    data-strk-img={`[prod-${product.id}-name] jewelry product photography gold`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={product.name}
                  />
                  {/* Hover Image Reveal could be another data-strk-img here */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                      className="w-full bg-white/90 backdrop-blur-sm text-brand-black py-3 uppercase tracking-widest text-[10px] font-bold hover:bg-brand-black hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                      <Plus size={14} /> Add to Bag
                    </button>
                  </div>
                </Link>
              </div>
              <h3 id={`prod-${product.id}-name`} className="uppercase tracking-widest text-xs font-semibold mb-1 group-hover:text-brand-gold transition-colors">{product.name}</h3>
              <p className="text-stone-500 font-serif text-sm">${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-24 bg-brand-cream border-y border-brand-stone overflow-hidden">
        <div className="px-6 lg:px-20 mb-8 flex justify-between items-center">
          <h2 className="text-xl font-serif uppercase tracking-widest">Worn by You</h2>
          <div className="flex gap-2">
            <button onClick={() => scrollUGC('left')} className="p-2 border border-brand-stone rounded-full hover:bg-white transition-colors">
              <ChevronLeft size={16} strokeWidth={1} />
            </button>
            <button onClick={() => scrollUGC('right')} className="p-2 border border-brand-stone rounded-full hover:bg-white transition-colors">
              <ChevronRight size={16} strokeWidth={1} />
            </button>
          </div>
        </div>
        
        <div 
          ref={ugcRef}
          className="flex gap-4 overflow-x-auto no-scrollbar px-6 lg:px-20 pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-shrink-0 w-64 md:w-80 aspect-[9/16] relative group overflow-hidden scroll-snap-align-start bg-stone-200">
              <img 
                data-strk-img-id={`ugc-${i}`}
                data-strk-img="woman wearing gold jewelry ear neck close up aesthetic social media style"
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt="Worn by"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-serif italic text-lg leading-tight mb-2">"Absolutely love the quality. My new daily essential."</p>
                <span className="text-[10px] uppercase tracking-widest opacity-80">@customer_handle</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-24 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Earrings", id: "cat-earrings" },
            { name: "Necklaces", id: "cat-necklaces" },
            { name: "Huggies", id: "cat-huggies" }
          ].map((cat) => (
            <Link 
              to="/shop" 
              key={cat.id} 
              className="relative aspect-[4/5] overflow-hidden group bg-stone-100"
            >
              <img 
                data-strk-img-id={cat.id}
                data-strk-img={`[cat-${cat.id}-label] category jewelry gold`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={cat.name}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="px-8 py-3 bg-white/0 group-hover:bg-white text-transparent group-hover:text-brand-black transition-all duration-300">
                  <span id={`cat-${cat.id}-label`} className="uppercase tracking-[0.3em] text-sm font-medium">{cat.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split Section */}
      <section className="bg-brand-black text-white py-0 overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 aspect-square lg:aspect-auto h-[500px] lg:h-[700px] bg-stone-900">
            <img 
              data-strk-img-id="story-image"
              data-strk-img="[story-title] jewelry artisan workspace gold luxury editorial"
              data-strk-img-ratio="1x1"
              data-strk-img-width="1200"
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-1000"
              alt="Artisan Workspace"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-20 lg:py-0">
            <h2 id="story-title" className="text-4xl lg:text-5xl font-serif mb-8 leading-tight">The Art of <br/> Quiet Luxury</h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-10 max-w-lg">
              Velmora was born from a desire to create jewelry that feels like a second skin. 
              Our pieces are designed for the modern woman who values understated elegance over fleeting trends. 
              Each collection is a tribute to timeless design and meticulous craftsmanship.
            </p>
            <Link to="#" className="inline-flex items-center gap-4 group">
              <span className="uppercase tracking-widest text-sm border-b border-stone-700 pb-1 group-hover:border-white transition-colors">Our Story</span>
              <ArrowRight size={16} className="text-stone-500 group-hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-cream border-b border-brand-stone">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: "Sarah", initial: "L", text: "The quality exceeds all my expectations. The Golden Sphere Huggies haven't left my ears since they arrived." },
              { name: "Elena", initial: "M", text: "Finally found demi-fine pieces that actually last. The packaging was so thoughtful too!" },
              { name: "Jessica", initial: "K", text: "Elegant, timeless, and perfect for layering. I've already recommended Velmora to all my friends." }
            ].map((review, i) => (
              <div key={review.name} className="flex flex-col text-center">
                <div className="flex justify-center gap-1 mb-6 text-brand-gold">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" stroke="none" />)}
                </div>
                <p className="font-serif text-xl italic mb-6 leading-relaxed">"{review.text}"</p>
                <span className="uppercase tracking-widest text-[10px] font-semibold text-stone-500">{review.name} {review.initial}.</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center px-12 py-20 bg-stone-50 border border-brand-stone">
          <h2 id="newsletter-title" className="text-3xl font-serif mb-4">Join the Inner Circle</h2>
          <p id="newsletter-subtitle" className="text-stone-500 uppercase tracking-widest text-xs mb-10">Sign up for exclusive previews and 10% off your first order</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => { e.preventDefault(); toast.success("Thank you for joining!"); }}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-transparent border-b border-stone-300 py-3 px-2 focus:border-brand-black transition-colors outline-none text-sm placeholder:uppercase placeholder:tracking-widest placeholder:text-[10px]"
              required
            />
            <button className="bg-brand-black text-white px-10 py-4 uppercase tracking-widest text-[10px] font-bold hover:bg-stone-800 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;