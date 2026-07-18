import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

// Seed product data
const BESTSELLERS = [
  { id: '1', name: 'VIVID AURA JEWELS', price: 42, image: '1' },
  { id: '2', name: 'MAJESTIC FLORA NECTAR', price: 68, image: '2' },
  { id: '3', name: 'GOLDEN SPHERE HUGGIES', price: 38, image: '3' },
  { id: '4', name: 'AMBER LACE EARRINGS', price: 54, image: '4' },
];

const UGC_ITEMS = [
  { id: 'ugc1', title: 'Everyday stacking', imgRatio: '9x16', imgId: 'ugc-1' },
  { id: 'ugc2', title: 'Golden hour gleam', imgRatio: '9x16', imgId: 'ugc-2' },
  { id: 'ugc3', title: 'Date night details', imgRatio: '9x16', imgId: 'ugc-3' },
  { id: 'ugc4', title: 'Layered perfection', imgRatio: '9x16', imgId: 'ugc-4' },
  { id: 'ugc5', title: 'Subtle statements', imgRatio: '9x16', imgId: 'ugc-5' },
];

const Home = () => {
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-neutral-900">
        <div
          className="absolute inset-0 z-0 opacity-80"
          data-strk-bg-id="hero-bg-2"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto flex flex-col items-center">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl font-light mb-6 tracking-wide text-shadow-sm">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl">
            Quiet luxury and demi-fine jewelry designed for the modern romantic.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 text-sm tracking-[0.15em] uppercase transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary py-4 border-b border-neutral-200">
        <div className="container mx-auto px-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <ul className="flex items-center justify-between min-w-max gap-8 lg:gap-0 text-neutral-500 text-xs tracking-widest uppercase">
            <li className="flex items-center gap-2">• Free Worldwide Shipping</li>
            <li className="flex items-center gap-2">• 30-Day Returns</li>
            <li className="flex items-center gap-2">• 18K Gold Plated</li>
            <li className="flex items-center gap-2">• Hypoallergenic</li>
          </ul>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl mb-2">Bestsellers</h2>
              <p className="text-neutral-500 text-sm">Curated pieces loved by our community.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-sm uppercase tracking-widest text-amber-700 hover:text-amber-800 transition-colors">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {BESTSELLERS.map((product) => (
              <div key={product.id} className="group relative">
                <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary overflow-hidden mb-4">
                  <img
                    alt={product.name}
                    data-strk-img-id={`prod-img-${product.id}`}
                    data-strk-img={`[prod-title-${product.id}] [bestsellers-title]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="bg-white text-neutral-900 text-xs px-6 py-2 tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-colors translate-y-4 group-hover:translate-y-0 duration-300"
                    >
                      Quick Add
                    </button>
                  </div>
                </Link>
                <div>
                  <h3 id={`prod-title-${product.id}`} className="font-serif text-sm tracking-widest mb-1">{product.name}</h3>
                  <p className="text-neutral-500 text-sm">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 id="categories-title" className="font-serif text-3xl md:text-4xl mb-12 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
              <Link key={idx} to={`/shop?category=${cat.toLowerCase()}`} className="group relative aspect-square overflow-hidden block bg-neutral-200">
                <img
                  alt={cat}
                  data-strk-img-id={`cat-img-${idx}`}
                  data-strk-img={`[cat-title-${idx}] [categories-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors duration-300">
                  <h3 id={`cat-title-${idx}`} className="font-serif text-2xl text-white tracking-[0.1em]">{cat}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-24 bg-background overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-12 mb-12">
          <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-center">Spotted in Velmora</h2>
          <p className="text-neutral-500 text-center mt-4">Tag @velmorajewelry to be featured</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto gap-4 px-6 lg:px-12 pb-8 scrollbar-hide snap-x" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
          {UGC_ITEMS.map((item) => (
             <div key={item.id} className="relative w-64 md:w-72 flex-shrink-0 aspect-[9/16] snap-center rounded-sm overflow-hidden bg-secondary group">
                 <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[ugc-title-${item.id}] [ugc-title]`}
                  data-strk-img-ratio={item.imgRatio}
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p id={`ugc-title-${item.id}`} className="text-white font-serif italic text-lg">{item.title}</p>
                </div>
             </div>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto md:h-full">
            <img
              alt="Brand Story"
              data-strk-img-id="story-main-img"
              data-strk-img="[story-title] [story-desc]"
              data-strk-img-ratio="2x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-20 lg:p-24 text-center md:text-left">
            <h2 id="story-title" className="font-serif text-3xl md:text-4xl mb-6">Designed for the Modern Muse</h2>
            <p id="story-desc" className="text-neutral-500 leading-relaxed max-w-md mx-auto md:mx-0 mb-10">
              We believe that fine jewelry shouldn't be reserved for special occasions. Our collections are crafted with 18k gold vermeil and ethically sourced materials, creating demi-fine pieces that elevate your everyday style without the traditional markup. Every piece is an heirloom in the making.
            </p>
            <Link to="/about" className="inline-block border border-neutral-900 text-neutral-900 px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-neutral-900 hover:text-white transition-colors self-center md:self-start">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">Loved by You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Sarah M.", review: "The Golden Sphere Huggies are my new everyday staple. Amazing quality and they haven't tarnished at all after months of wear." },
              { name: "Elena R.", review: "I gifted the Royal Heirloom Set to my mom and she cried. The packaging is stunning and the pieces feel so heavy and luxurious." },
              { name: "Jessica T.", review: "Finally found elegant demi-fine jewelry that doesn't irritate my sensitive ears. Obsessed with the Vivid Aura ear cuff!" }
            ].map((testimonial, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="flex gap-1 text-amber-700 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-serif italic text-lg leading-relaxed text-neutral-700 mb-6">"{testimonial.review}"</p>
                <p className="text-xs uppercase tracking-widest text-neutral-400">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-amber-700 text-white py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join our inner circle.</h2>
          <p className="text-white/80 mb-8 font-light tracking-wide">
            Subscribe for 10% off your first order, early access to new collections, and styling inspiration.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-transparent border border-white/40 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
              required
            />
            <button type="submit" className="bg-white text-amber-900 px-8 py-3 tracking-widest text-sm font-medium uppercase hover:bg-neutral-100 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
