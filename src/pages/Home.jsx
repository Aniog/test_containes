import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Instagram } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  return (
    <div ref={containerRef} className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-black/20"
          data-strk-bg-id="hero-bg-velmora"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto text-white mt-16">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide drop-shadow-lg">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-sans font-light tracking-widest mb-10 max-w-2xl mx-auto uppercase">
            Elevate the Everyday with Demi-Fine Gold Jewelry
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-primary text-primary-foreground px-10 py-4 font-sans font-medium uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="w-full bg-secondary text-secondary-foreground py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex items-center justify-center md:justify-between flex-wrap gap-y-2 gap-x-8 text-xs font-sans tracking-widest uppercase">
            <span className="flex items-center whitespace-nowrap"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>Free Worldwide Shipping</span>
            <span className="flex items-center whitespace-nowrap"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 hidden md:block"></span>30-Day Returns</span>
            <span className="flex items-center whitespace-nowrap hidden sm:flex"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>18K Gold Plated</span>
            <span className="flex items-center whitespace-nowrap hidden lg:flex"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 3. Bestsellers Product Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="text-3xl md:text-4xl text-foreground">Bestsellers</h2>
          <Link to="/shop" className="group flex items-center font-sans uppercase tracking-widest text-xs font-medium text-foreground hover:text-primary transition-colors">
            View All <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/product/${product.slug}`} className="relative aspect-[4/5] bg-secondary mb-4 overflow-hidden block">
                <span id={`bestseller-${product.id}-name`} className="hidden">{product.name} {product.category}</span>
                {/* Primary Image */}
                <img
                  alt={product.name}
                  data-strk-img-id={`product-${product.id}-main`}
                  data-strk-img={`[bestseller-${product.id}-name]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* Secondary Image (Hover) */}
                <img
                  alt={`${product.name} worn`}
                  data-strk-img-id={`product-${product.id}-hover`}
                  data-strk-img={`[bestseller-${product.id}-name] worn model`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                
                {/* Quick Add Button */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button 
                    onClick={(e) => { e.preventDefault(); addToCart(product); }}
                    className="w-full bg-background/90 backdrop-blur text-foreground py-3 text-xs uppercase tracking-widest font-medium hover:bg-foreground hover:text-background transition-colors"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>
              
              <div className="flex flex-col flex-1">
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">{product.category}</p>
                <Link to={`/product/${product.slug}`} className="font-serif text-base tracking-wider uppercase mb-2 group-hover:text-primary transition-colors line-clamp-1">
                  {product.name}
                </Link>
                <p className="font-sans text-sm mt-auto">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Shop by Category */}
      <section className="py-12 px-6 max-w-7xl mx-auto w-full">
        <h2 id="categories-title" className="sr-only">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/shop?category=earrings" className="group relative aspect-square overflow-hidden bg-secondary">
            <img
              alt="Shop Earrings"
              data-strk-img-id="category-earrings"
              data-strk-img="gold earrings collection editorial"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-3xl md:text-4xl tracking-wider select-none">Earrings</h3>
            </div>
          </Link>
          
          <Link to="/shop?category=necklaces" className="group relative aspect-square overflow-hidden bg-secondary">
            <img
              alt="Shop Necklaces"
              data-strk-img-id="category-necklaces"
              data-strk-img="gold necklaces pendants collection editorial"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-3xl md:text-4xl tracking-wider select-none">Necklaces</h3>
            </div>
          </Link>
          
          <Link to="/shop?category=huggies" className="group relative aspect-square overflow-hidden bg-secondary">
            <img
              alt="Shop Huggies"
              data-strk-img-id="category-huggies"
              data-strk-img="gold huggies hoop earrings collection editorial"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-3xl md:text-4xl tracking-wider select-none">Huggies</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* 5. Brand Story Split Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] lg:aspect-auto lg:h-[600px] w-full bg-secondary relative overflow-hidden">
             <img
              alt="Velmora Jewelry Craftsmanship"
              data-strk-img-id="story-image-1"
              data-strk-img="[story-title] jewelry craftsmanship gold editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-4 lg:px-12">
            <h2 id="story-title" className="text-3xl md:text-5xl mb-8">The Art of Subtlety</h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-6">
              Velmora was born from a desire to create demi-fine jewelry that doesn't scream for attention, but rather commands it through exquisite detail and timeless design.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed mb-10">
              Each piece is thoughtfully crafted using 18k gold vermeil, ensuring an accessible luxury that accompanies you from quiet mornings to elegant evenings. We believe in the power of refined simplicity.
            </p>
            <div>
              <Link to="/about" className="inline-block border-b border-foreground pb-1 font-sans uppercase tracking-widest text-xs font-medium hover:text-primary hover:border-primary transition-colors">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Reel-style UGC Row */}
      <section className="py-24 bg-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 id="ugc-title" className="text-3xl md:text-4xl text-center">Spotted in Velmora</h2>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar pl-6 md:pl-[calc((100vw-1280px)/2+24px)] pr-6 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={`ugc-${item}`} className="snap-start shrink-0 w-[280px] h-[500px] relative group overflow-hidden bg-background">
              <img
                alt="Customer wearing Velmora"
                data-strk-img-id={`ugc-image-${item}`}
                data-strk-img="woman wearing gold jewelry aesthetic instagram style lifestyle"
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-white font-serif text-lg leading-snug">
                "Simply obsessed with these daily staples."
              </p>
              <div className="absolute top-4 right-4 text-white">
                <Instagram size={20} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl text-center mb-16">Loved by You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: "Sarah M.", text: "The quality is unmatched for the price point. The Amber Lace earrings haven't left my ears since they arrived." },
            { name: "Elena R.", text: "Beautifully packaged and exactly as pictured. Feels so luxurious—a perfect gift to myself." },
            { name: "Jessica T.", text: "I have sensitive skin but the 18k plating is truly hypoallergenic. They look like solid gold." }
          ].map((review, idx) => (
            <div key={`review-${idx}`} className="flex flex-col items-center text-center">
              <div className="flex text-primary mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p className="font-serif text-xl leading-relaxed mb-6">"{review.text}"</p>
              <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="bg-primary text-primary-foreground py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-6">Join the Inner Circle</h2>
          <p className="font-sans font-light tracking-wide mb-10 md:text-lg">
            Subscribe to receive 10% off your first order, plus early access to new collections and exclusive events.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border border-primary-foreground/30 px-6 py-4 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground font-sans rounded-none"
              required
            />
            <button 
              type="submit" 
              className="bg-primary-foreground text-primary px-8 py-4 font-sans uppercase tracking-widest text-sm font-medium hover:bg-white transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;