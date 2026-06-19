import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Home() {
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* 1 & 2. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 z-0 bg-brand-charcoal/20"
          data-strk-bg-id="hero-bg-2a9c4f"
          data-strk-bg="[hero-title] [hero-subtitle] gold jewelry portrait"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container relative z-10 text-center text-white px-4">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-serif mb-6 leading-tight max-w-4xl mx-auto">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-sans font-light tracking-wide mb-10 max-w-xl mx-auto opacity-90">
            Demi-fine jewelry designed for the modern woman. Everyday elegance, accessible luxury.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-primary text-primary-foreground font-sans font-medium tracking-widest uppercase text-sm py-4 px-10 hover:bg-brand-goldDark transition-colors duration-300 rounded-sm"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <section className="bg-brand-sand border-b border-black/5 py-4">
        <div className="container overflow-x-auto hide-scrollbar">
          <div className="flex items-center justify-between md:justify-center md:space-x-16 text-xs uppercase tracking-widest whitespace-nowrap px-4 font-medium text-brand-charcoal/80">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline text-brand-gold">•</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline text-brand-gold">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline text-brand-gold">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* 4. Bestsellers Grid */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif">Bestsellers</h2>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-sm tracking-widest uppercase font-medium hover:text-brand-gold transition-colors">
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {products.map((product) => (
              <div key={product.id} className="group relative flex flex-col">
                <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-brand-sand mb-4 block">
                  <img 
                    src={product.images[0]}
                    data-strk-img-id={product.strkImgId}
                    data-strk-img={`${product.strkImgQuery}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    alt={product.name}
                    className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img 
                    src={product.images[1]}
                    data-strk-img-id={`${product.strkImgId}-hover`}
                    data-strk-img={`[product-title-${product.id}] alternate angle jewelry lifestyle`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    alt={`${product.name} on model`}
                    className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </Link>
                <div className="flex flex-col flex-1">
                  <Link to={`/product/${product.id}`}>
                    <h3 id={`product-title-${product.id}`} className="font-serif text-lg tracking-wider uppercase mb-1">{product.name}</h3>
                    <p className="text-brand-charcoal/70">${product.price.toFixed(2)}</p>
                  </Link>
                  <button 
                    onClick={(e) => { e.preventDefault(); addToCart(product); }}
                    className="mt-auto opacity-100 md:opacity-0 group-hover:opacity-100 w-full py-2 border border-brand-charcoal text-xs uppercase tracking-widest transition-all duration-300 hover:bg-brand-charcoal hover:text-white mt-4"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
            <Link to="/shop" className="inline-flex items-center text-sm tracking-widest uppercase font-medium border-b border-brand-charcoal pb-1">
              View All Bestsellers
            </Link>
          </div>
        </div>
      </section>

      {/* 5. UGC Row */}
      <section className="py-20 bg-brand-sand overflow-hidden">
        <div className="container px-4 mb-10 text-center">
          <h2 id="ugc-title" className="text-3xl font-serif">Worn by You</h2>
          <p className="text-brand-charcoal/70 mt-2">@VelmoraJewelry</p>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar gap-4 px-4 pb-8 pl-[10%] md:pl-[calc(50vw-600px)] snap-x">
          {[1,2,3,4,5].map((item) => (
            <div key={item} className="flex-none w-[260px] md:w-[300px] aspect-[9/16] relative snap-center overflow-hidden rounded-sm group cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`ugc-bg-${item}`}
                data-strk-bg="[ugc-title] woman wearing gold jewelry editorial lifestyle"
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white font-serif text-lg leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                "The most perfect everyday pieces."
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Categories Tiles */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <Link to="/shop?category=earrings" className="group relative aspect-square md:aspect-[3/4] overflow-hidden flex items-center justify-center">
               <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg-id="cat-earrings"
                  data-strk-bg="gold earrings editorial"
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <h3 className="relative z-10 text-white font-serif text-3xl md:text-4xl tracking-widest uppercase py-4 px-8 border border-white/30 backdrop-blur-sm group-hover:border-white transition-colors duration-300">Earrings</h3>
            </Link>
            <Link to="/shop?category=necklaces" className="group relative aspect-square md:aspect-[3/4] overflow-hidden flex items-center justify-center">
               <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg-id="cat-neck"
                  data-strk-bg="gold necklaces layering editorial"
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <h3 className="relative z-10 text-white font-serif text-3xl md:text-4xl tracking-widest uppercase py-4 px-8 border border-white/30 backdrop-blur-sm group-hover:border-white transition-colors duration-300">Necklaces</h3>
            </Link>
            <Link to="/shop?category=huggies" className="group relative aspect-square md:aspect-[3/4] overflow-hidden flex items-center justify-center">
               <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg-id="cat-huggies"
                  data-strk-bg="gold huggie hoops ears editorial"
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <h3 className="relative z-10 text-white font-serif text-3xl md:text-4xl tracking-widest uppercase py-4 px-8 border border-white/30 backdrop-blur-sm group-hover:border-white transition-colors duration-300">Huggies</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="bg-brand-sand py-0 border-y border-black/5">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
            <div 
              className="w-full h-full bg-cover bg-center"
              data-strk-bg-id="brand-story-bg"
              data-strk-bg="[story-title] [story-desc] fine jewelry crafting details"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="1200"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 text-center md:text-left">
            <div className="max-w-md mx-auto">
              <h2 id="story-title" className="text-3xl md:text-5xl font-serif mb-6 leading-tight">The Art of<br/>Quiet Luxury</h2>
              <p id="story-desc" className="text-brand-charcoal/80 mb-10 leading-relaxed font-light">
                We believe that fine jewelry shouldn't be reserved for special occasions. Velmora was born from a desire to create accessible, heirloom-quality pieces that elevate your everyday rituals. Crafted with 18k solid gold plating and ethically sourced materials.
              </p>
              <Link to="/about" className="inline-block border-b border-brand-charcoal text-sm tracking-widest uppercase font-medium pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif">Loved by You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              {
                text: "I haven't taken these huggies off since I got them. The color is the perfect warm gold, and they never irritate my sensitive ears.",
                name: "Sarah M.",
              },
              {
                text: "Absolutely stunning quality. It feels much more expensive than it is. I get compliments on my Flora Nectar necklace every time I wear it.",
                name: "Elena R.",
              },
              {
                text: "Beautiful packaging and even more beautiful jewelry. The Amber Lace earrings are delicate but make such a statement. Highly recommend.",
                name: "Jessica T.",
              }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="flex space-x-1 text-brand-gold mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                </div>
                <p className="font-serif text-xl italic mb-6 leading-relaxed flex-1">"{review.text}"</p>
                <p className="text-sm font-medium tracking-widest uppercase">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="py-24 bg-brand-charcoal text-white">
        <div className="container px-4 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Join the Inner Circle</h2>
          <p className="text-white/70 mb-10 font-light">
            Subscribe for 10% off your first order, early access to new collections, and styling inspiration.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border border-white/30 px-6 py-4 outline-none focus:border-white transition-colors text-center sm:text-left rounded-sm"
              required
            />
            <button type="submit" className="bg-white text-brand-charcoal font-medium tracking-widest uppercase px-8 py-4 hover:bg-brand-sand transition-colors rounded-sm">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}