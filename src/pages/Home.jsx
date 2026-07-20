import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = [
    {
      id: 'vivid-aura-jewels',
      name: 'Vivid Aura Jewels',
      price: 42,
      imgId1: 'home-vivid-1-e4f',
      imgId2: 'home-vivid-2-e4f',
      titleId: 'bs-vivid-title',
      descId: 'bs-vivid-desc',
      desc: 'gold ear cuff with crystal accent'
    },
    {
      id: 'majestic-flora-nectar',
      name: 'Majestic Flora Nectar',
      price: 68,
      imgId1: 'home-majestic-1-a2c',
      imgId2: 'home-majestic-2-a2c',
      titleId: 'bs-majestic-title',
      descId: 'bs-majestic-desc',
      desc: 'multicolor floral crystal necklace'
    },
    {
      id: 'golden-sphere-huggies',
      name: 'Golden Sphere Huggies',
      price: 38,
      imgId1: 'home-golden-1-b9d',
      imgId2: 'home-golden-2-b9d',
      titleId: 'bs-golden-title',
      descId: 'bs-golden-desc',
      desc: 'chunky gold dome huggie earrings'
    },
    {
      id: 'amber-lace-earrings',
      name: 'Amber Lace Earrings',
      price: 54,
      imgId1: 'home-amber-1-c1e',
      imgId2: 'home-amber-2-c1e',
      titleId: 'bs-amber-title',
      descId: 'bs-amber-desc',
      desc: 'textured gold filigree drop earrings'
    },
  ];

  const ugcItems = [
    { id: 'ugc-1', imgId: 'ugc-img-1', textId: 'ugc-text-1', text: '"My everyday essential."' },
    { id: 'ugc-2', imgId: 'ugc-img-2', textId: 'ugc-text-2', text: '"Obsessed with the quality."' },
    { id: 'ugc-3', imgId: 'ugc-img-3', textId: 'ugc-text-3', text: '"Perfect for stacking."' },
    { id: 'ugc-4', imgId: 'ugc-img-4', textId: 'ugc-text-4', text: '"The shine is incredible."' },
    { id: 'ugc-5', imgId: 'ugc-img-5', textId: 'ugc-text-5', text: '"So lightweight!"' },
  ];

  const categories = [
    { id: 'cat-earrings', name: 'Earrings', imgId: 'cat-img-earrings', titleId: 'cat-title-earrings' },
    { id: 'cat-necklaces', name: 'Necklaces', imgId: 'cat-img-necklaces', titleId: 'cat-title-necklaces' },
    { id: 'cat-huggies', name: 'Huggies', imgId: 'cat-img-huggies', titleId: 'cat-title-huggies' },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-black/20" 
          data-strk-bg-id="home-hero-bg-9a2b"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}
        ></div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto mt-16">
          <h1 id="hero-title" className="text-5xl md:text-7xl mb-6 font-serif tracking-wide leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light tracking-wider mb-10 max-w-2xl mx-auto opacity-90">
            Demi-fine gold jewelry for the modern romantic.
          </p>
          <Link 
            to="/collections" 
            className="inline-block bg-accent hover:bg-accent-hover text-white px-10 py-4 tracking-widest uppercase text-sm transition-all duration-300 transform hover:scale-[1.02]"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-surface-alt py-4 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs md:text-sm tracking-widest uppercase text-muted text-center">
            <li>Free Worldwide Shipping</li>
            <li className="hidden md:block">&middot;</li>
            <li>30-Day Returns</li>
            <li className="hidden md:block">&middot;</li>
            <li>18K Gold Plated</li>
            <li className="hidden md:block">&middot;</li>
            <li>Hypoallergenic</li>
          </ul>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-title" className="text-3xl font-serif mb-2">Iconic Pieces</h2>
              <p id="bestsellers-subtitle" className="text-muted tracking-wide">Our most coveted designs.</p>
            </div>
            <Link to="/collections" className="hidden md:flex items-center text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors group">
              Shop All
              <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellers.map((item) => (
              <div key={item.id} className="group relative">
                <div className="aspect-[4/5] bg-surface-alt relative overflow-hidden mb-4">
                  {/* Primary Image */}
                  <img
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                    data-strk-img-id={item.imgId1}
                    data-strk-img={`[${item.descId}] [${item.titleId}] [bestsellers-subtitle] [bestsellers-title] primary`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  {/* Secondary/Hover Image */}
                  <img
                    alt={`${item.name} worn`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    data-strk-img-id={item.imgId2}
                    data-strk-img={`[${item.descId}] [${item.titleId}] [bestsellers-subtitle] [bestsellers-title] model worn`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  
                  {/* Quick Add Button */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-white/90 backdrop-blur text-foreground font-medium py-3 text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-colors">
                      Quick Add
                    </button>
                  </div>
                </div>
                
                <h3 id={item.titleId} className="font-serif text-lg uppercase tracking-widest mb-1">{item.name}</h3>
                <p className="text-muted mb-2">${item.price}</p>
                {/* Hidden description for image generation */}
                <span id={item.descId} className="hidden">{item.desc}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/collections" className="inline-flex items-center text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors">
              Shop All
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories / Shop by type */}
      <section className="py-12 bg-surface-alt">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/collections?category=${cat.name.toLowerCase()}`} className="group relative aspect-square overflow-hidden block">
                <img
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.titleId}] collection jewelry`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 id={cat.titleId} className="text-white text-3xl font-serif tracking-widest uppercase bg-black/20 px-8 py-3 backdrop-blur-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* UGC / Reels row */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 mb-10 text-center">
          <h2 id="ugc-title" className="text-3xl font-serif mb-2">Velmora Everyday</h2>
          <p id="ugc-subtitle" className="text-muted tracking-wide">Spotted in the wild. Tag @VelmoraJewelry.</p>
        </div>
        
        <div className="flex overflow-x-auto gap-4 px-6 md:px-12 pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {ugcItems.map((item) => (
            <div key={item.id} className="min-w-[280px] max-w-[280px] aspect-[9/16] relative snap-center rounded-lg overflow-hidden group">
              <img
                alt="User generated content"
                className="absolute inset-0 w-full h-full object-cover"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.textId}] [ugc-subtitle] [ugc-title] woman wearing jewelry lifestyle`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p id={item.textId} className="absolute bottom-6 left-6 right-6 text-white font-serif text-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-stretch gap-0">
            <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-auto">
              <img
                alt="Brand Story"
                className="w-full h-full object-cover"
                data-strk-img-id="brand-story-img-9f8"
                data-strk-img="[story-subtitle] [story-title] craft process workshop gold"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="w-full md:w-1/2 bg-surface-alt p-12 md:p-24 flex flex-col justify-center">
              <h2 id="story-title" className="text-3xl md:text-4xl font-serif mb-6 leading-tight">Quiet Luxury, Everyday.</h2>
              <div id="story-subtitle" className="space-y-4 text-muted leading-relaxed font-light mb-8">
                <p>
                  At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. It should be lived in, loved, and layered.
                </p>
                <p>
                  Our demi-fine pieces are deliberately crafted using recycled 18k gold over sterling silver, bridging the gap between accessible fashion and heirloom quality.
                </p>
              </div>
              <Link to="/about" className="inline-block border-b border-foreground pb-1 text-sm tracking-widest uppercase font-medium hover:text-accent hover:border-accent transition-colors self-start">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Sarah M.", text: "The Vivid Aura cuff is stunning. It looks exactly like pure gold and hasn't tarnished after months of daily wear." },
              { name: "Elena R.", text: "Beautiful packaging and the jewelry itself feels so substantial. My new favorite brand for gifting." },
              { name: "Chloe T.", text: "I get compliments on the Amber Lace earrings every time I wear them. So elegant and lightweight!" }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="font-serif text-lg leading-relaxed mb-4 italic">"{review.text}"</p>
                <p className="text-sm tracking-widest uppercase text-muted">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#ebe6df]">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-serif mb-4">Join the Inner Circle</h2>
          <p className="text-muted tracking-wide mb-8">Subscribe to receive 10% off your first order, plus early access to new collections.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white border border-transparent focus:border-accent px-6 py-3 outline-none transition-colors"
              required
            />
            <button type="submit" className="bg-foreground text-white px-8 py-3 tracking-widest uppercase text-sm hover:bg-accent transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;