import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/lib/data';

const Home = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-black/30 z-10" 
          aria-hidden="true" 
        />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative z-20 space-y-8 px-6 max-w-4xl mx-auto">
          <p id="hero-subtitle" className="text-[10px] uppercase tracking-widestest animate-fade-in">
            New Collection 2026
          </p>
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight animate-slide-up">
            Crafted to be <br/> <span className="italic">Treasured</span>
          </h1>
          <div className="pt-8">
            <Link 
              to="/shop" 
              className="px-10 py-4 bg-white text-brand-charcoal text-[10px] uppercase tracking-widestest hover:bg-brand-gold hover:text-white transition-all duration-500 shadow-xl"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-brand-sand/30 py-4 border-b">
        <div className="container mx-auto px-6 overflow-x-auto whitespace-nowrap hide-scrollbar">
          <div className="flex justify-between items-center text-[9px] uppercase tracking-widestest text-gray-500 min-w-max md:min-w-0">
            <span className="px-4">Free Worldwide Shipping</span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span className="px-4">30-Day Returns</span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span className="px-4">18K Gold Plated</span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span className="px-4">Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-brand-gold mb-2">Editor's Choice</p>
            <h2 id="bestsellers-title" className="text-4xl md:text-5xl font-serif">Our Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-[10px] uppercase tracking-widestest border-b border-brand-charcoal pb-1 pb-[-2px] hover:text-brand-gold hover:border-brand-gold transition-colors">
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-brand-sand aspect-[3/4]">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Secondary Image for Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img
                        data-strk-img-id={product.hoverImgId}
                        data-strk-img={`worn detail [product-name-${product.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src={product.hoverImage}
                        alt={`${product.name} detail`}
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Quick Add overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/10 backdrop-blur-md">
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                        }}
                        className="w-full bg-brand-charcoal text-white py-3 text-[9px] uppercase tracking-widestest hover:bg-brand-gold transition-colors"
                    >
                        Quick Add
                    </button>
                </div>
              </Link>
              <div className="mt-6 text-center">
                <h3 id={`product-name-${product.id}`} className="text-[11px] font-medium uppercase tracking-widestest mb-1 group-hover:text-brand-gold transition-colors">
                  {product.name}
                </h3>
                <p id={`product-desc-${product.id}`} className="hidden">{product.description}</p>
                <p className="text-gray-500 text-sm italic font-serif">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reels Strip Section */}
      <section className="bg-brand-sand/20 py-24">
        <div className="container mx-auto px-6 mb-12 text-center">
          <p className="text-[10px] uppercase tracking-widest text-brand-gold mb-3">Velmora Muse</p>
          <h2 className="text-3xl font-serif">Worn & Loved By You</h2>
        </div>
        <div className="flex overflow-x-auto space-x-4 px-6 md:px-12 hide-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-shrink-0 w-64 md:w-80 aspect-[9/16] relative overflow-hidden group">
              <img
                data-strk-img-id={`ugc-${i}`}
                data-strk-img={`woman wearing jewelry influencer aesthetic [ugc-caption-${i}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'%3E%3Crect width='9' height='16' fill='%23F5F2EA'/%3E%3C/svg%3E"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt="Velmora user styling"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p id={`ugc-caption-${i}`} className="font-serif italic text-lg leading-snug">
                  {i === 1 ? "Golden hour perfection with the Aura Cuff." : "The only necklace I never take off."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="py-24 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 'cat-1', name: 'Earrings', imageId: 'cat-img-1' },
            { id: 'cat-2', name: 'Necklaces', imageId: 'cat-img-2' },
            { id: 'cat-3', name: 'Huggies', imageId: 'cat-img-3' }
          ].map((cat) => (
            <Link key={cat.id} to={`/shop?category=${cat.name.toLowerCase()}`} className="relative h-[600px] overflow-hidden group bg-brand-sand">
              <img
                data-strk-img-id={cat.imageId}
                data-strk-img={`editorial jewelry [cat-name-${cat.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3Crect width='3' height='4' fill='%23F5F2EA'/%3E%3C/svg%3E"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt={cat.name}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-white/90 backdrop-blur px-10 py-4">
                  <span id={`cat-name-${cat.id}`} className="text-[11px] uppercase tracking-widestest font-medium text-brand-charcoal">
                    {cat.name}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-10 left-10 md:hidden">
                <span className="text-xl font-serif text-white tracking-widest">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-0 relative overflow-hidden bg-brand-charcoal text-white">
        <div className="flex flex-col md:flex-row min-h-[700px]">
          <div className="md:w-1/2 relative h-[500px] md:h-auto">
            <img
              data-strk-img-id="story-img"
              data-strk-img="jewelry artisan workshop mood"
              data-strk-img-ratio="1x1"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23F5F2EA'/%3E%3C/svg%3E"
              className="w-full h-full object-cover"
              alt="Velmora story"
            />
          </div>
          <div className="md:w-1/2 flex items-center justify-center p-12 md:p-24 lg:p-32">
            <div className="max-w-md space-y-10">
              <div className="space-y-4">
                <p id="story-subtitle" className="text-[10px] uppercase tracking-widestest text-brand-gold">Our Philosophy</p>
                <h2 id="story-title" className="text-4xl md:text-5xl font-serif leading-tight">Quiet Luxury, Handcrafted for You.</h2>
              </div>
              <p className="font-serif italic text-lg leading-relaxed text-gray-400">
                "We believe jewelry should be more than an accessory–it should be a memory, a feeling, a legacy. At Velmora, we bridge the gap between luxury and longevity."
              </p>
              <div className="pt-4">
                <Link to="/about" className="text-[10px] uppercase tracking-widestest border-b border-brand-gold pb-1 text-brand-gold hover:text-white hover:border-white transition-all">
                  Discover Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-sand/10">
        <div className="container mx-auto px-6 md:px-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {[
                    { name: "Sophia L.", text: "The quality is unmatched for this price. My Golden Sphere Huggies haven't left my ears in months." },
                    { name: "Emma R.", text: "Beautifully packaged and even more stunning in person. Perfect for self-gifting!" },
                    { name: "Olivia M.", text: "I bought the Royal Heirloom Set for a wedding. I received so many compliments. Truly special." }
                ].map((testimonial, i) => (
                    <div key={i} className="space-y-6">
                        <div className="flex justify-center text-brand-gold">
                            {[1, 2, 3, 4, 5].map(s => <span key={s} className="px-[2px]">★</span>)}
                        </div>
                        <p className="font-serif italic text-xl leading-relaxed">"{testimonial.text}"</p>
                        <p className="text-[10px] uppercase tracking-widestest text-gray-500">— {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 container mx-auto px-6 md:px-12">
        <div className="bg-brand-charcoal text-white p-12 md:p-24 flex flex-col items-center text-center space-y-10">
          <div className="space-y-4">
            <h2 id="newsletter-title" className="text-3xl md:text-5xl font-serif">Join the Inner Circle</h2>
            <p id="newsletter-subtitle" className="text-sm font-serif italic text-gray-400">Subscribe for early access to new collections and 10% off your first order.</p>
          </div>
          <div className="w-full max-w-md flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="flex-grow bg-transparent border-b border-gray-600 focus:border-brand-gold outline-none py-3 text-xs tracking-widestest transition-colors"
            />
            <button className="px-10 py-4 bg-brand-gold text-white text-[10px] uppercase tracking-widestest hover:bg-white hover:text-brand-charcoal transition-all">
              Join Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
