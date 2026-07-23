import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { seedProducts } from '../../data/products';
import { ArrowRight, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Home() {
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  
  // We'll just display the first 4 products as top sellers for now
  const bestsellers = seedProducts.slice(0, 4);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      
      {/* 1. Full-bleed hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-secondary"
          data-strk-bg-id="home-hero-bg-v1"
          data-strk-bg="[hero-subhead] [hero-headline]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <div className="relative z-20 text-center text-white px-4 max-w-3xl mx-auto flex flex-col items-center">
          <h1 id="hero-headline" className="text-5xl md:text-7xl font-serif mb-6 text-white drop-shadow-sm">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="text-lg md:text-xl font-light tracking-wide mb-10 text-white/90 drop-shadow-sm">
            Everyday luxury designed for the modern woman. Discover demi-fine gold jewelry that elevates every moment.
          </p>
          <Link 
            to="/shop" 
            className="bg-white text-foreground px-8 py-4 tracking-widest text-sm uppercase hover:bg-white/90 transition-colors shadow-lg"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust bar */}
      <section className="bg-primary text-primary-foreground py-4 border-b border-white/10">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="flex justify-between md:justify-center items-center gap-8 md:gap-16 text-xs tracking-widest uppercase whitespace-nowrap animate-marquee md:animate-none overflow-x-auto hide-scrollbar">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* 3. "Bestsellers" product grid */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif">Bestsellers</h2>
          <Link to="/collections/best-sellers" className="group flex items-center text-sm uppercase tracking-widest hover:text-primary transition-colors">
            View All <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {bestsellers.map((product) => (
            <div key={`bestseller-${product.id}`} className="group relative">
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                <img 
                  data-strk-img-id={`bestseller-img-${product.id}`}
                  data-strk-img={`[bestseller-title-${product.id}] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Add to Cart Button */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-sm tracking-widest uppercase hover:bg-background transition-colors shadow-sm"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>
              <div className="flex flex-col">
                <Link to={`/product/${product.id}`}>
                  <h3 id={`bestseller-title-${product.id}`} className="font-serif text-lg uppercase tracking-wide mb-1 hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <span className="text-muted-foreground">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Shop by category tiles */}
      <section className="py-12 px-4 md:px-8">
        <h2 id="categories-title" className="sr-only">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { id: 'earrings', title: 'Earrings', bgId: 'cat-bg-earrings' },
            { id: 'necklaces', title: 'Necklaces', bgId: 'cat-bg-necklaces' },
            { id: 'huggies', title: 'Huggies', bgId: 'cat-bg-huggies' }
          ].map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop?category=${cat.id}`}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden group block"
            >
              <div 
                className="absolute inset-0 bg-muted transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={cat.bgId}
                data-strk-bg={`[cat-label-${cat.id}] [categories-title]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  id={`cat-label-${cat.id}`} 
                  className="text-white font-serif text-3xl uppercase tracking-widest translate-y-4 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-md"
                >
                  {cat.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Brand story split section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-muted">
             <img 
                data-strk-img-id="brand-story-img"
                data-strk-img="[story-text] [story-title]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Woman wearing Velmora jewelry"
                className="w-full h-full object-cover"
              />
          </div>
          <div className="flex flex-col justify-center">
            <h2 id="story-title" className="text-4xl font-serif mb-8 text-primary">Elevating the Everyday</h2>
            <p id="story-text" className="text-lg leading-relaxed text-muted-foreground mb-8">
              Velmora was born from a simple belief: fine jewelry shouldn't be reserved only for special occasions. We design 18K gold vermeil pieces that bridge the gap between accessible fashion jewelry and expensive fine jewelry. 
              <br/><br/>
              Each piece is thoughtfully crafted to be layered, lived in, and loved daily. Quiet luxury, created for the modern woman.
            </p>
            <div>
              <Link 
                to="/about" 
                className="inline-block border-b border-foreground pb-1 text-sm uppercase tracking-widest hover:text-primary hover:border-primary transition-colors"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Reel-style UGC row */}
      <section className="py-16 overflow-hidden bg-accent/30">
        <div className="px-4 md:px-8 mb-8 text-center max-w-xl mx-auto">
          <h2 id="ugc-title" className="text-3xl font-serif mb-4">Worn by You</h2>
          <p id="ugc-sub" className="text-muted-foreground">Tag @velmorajewelry to be featured.</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex gap-4 px-4 md:px-8 pb-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={`ugc-${i}`} className="relative flex-none w-64 aspect-[9/16] snap-center rounded-sm overflow-hidden bg-muted group">
               <img 
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img={`[ugc-sub] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Customer wearing jewelry"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 font-serif md:text-sm">
                "Obsessed with my new huggies! The quality is amazing."
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto text-center">
        <h2 className="sr-only">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { name: "Sarah M.", text: "Beautiful packaging and the earrings are stunning. I wear them every day." },
            { name: "Elena R.", text: "The gold tone is so rich and warm. Doesn't look cheap at all. Will be buying more." },
            { name: "Jessica T.", text: "Perfect for gifting. Bought a set for my sister and she hasn't taken it off since." }
          ].map((review, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="font-serif text-lg leading-relaxed mb-6 italic">"{review.text}"</p>
              <p className="text-sm tracking-widest uppercase text-muted-foreground">— {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter capture */}
      <section className="py-24 px-4 md:px-8 bg-accent text-accent-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 id="newsletter-title" className="text-3xl md:text-4xl font-serif mb-4 text-primary">Join the Inner Circle</h2>
          <p id="newsletter-desc" className="text-muted-foreground mb-8">
            Subscribe for early access to new collections, exclusive styling tips, and 10% off your first order.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="flex-1 bg-background border border-border px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
            />
            <button 
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 tracking-widest text-sm uppercase hover:bg-primary/90 transition-colors shadow-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
