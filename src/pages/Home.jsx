import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/lib/data';

import { Button } from '@/components/ui/button';
import { useStore } from '@/lib/store';

export default function Home() {
  const containerRef = useRef(null);
  const { addToCart } = useStore();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 4);

  return (
    <div ref={containerRef} className="pb-20">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-velmora"
          data-strk-bg="[hero-title] [hero-subtitle] gold jewelry worn on model warm lighting elegant"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto space-y-6 mt-16">
          <h1 id="hero-title" className="font-heading text-5xl md:text-7xl font-medium tracking-tight mb-4">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto mb-8">
            Demi-fine jewelry perfectly balancing everyday wearability with exceptional elegance.
          </p>
          <Button className="bg-white text-black hover:bg-white/90 text-sm tracking-widest uppercase px-8 h-12 rounded-none">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-primary text-primary-foreground py-3 border-y border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-2 gap-x-6 text-xs tracking-widest uppercase font-medium">
            <span className="flex items-center gap-2">Free Worldwide Shipping</span>
            <span className="hidden md:inline border-r border-primary-foreground/30 h-4"></span>
            <span className="flex items-center gap-2">30-Day Returns</span>
            <span className="hidden md:inline border-r border-primary-foreground/30 h-4"></span>
            <span className="flex items-center gap-2">18K Gold Plated</span>
            <span className="hidden md:inline border-r border-primary-foreground/30 h-4"></span>
            <span className="flex items-center gap-2">Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 px-4 container mx-auto">
        <div className="flex flex-col items-center mb-16 text-center space-y-4">
          <h2 id="bestsellers-title" className="font-heading text-3xl md:text-4xl">Our Signatures</h2>
          <p id="bestsellers-subtitle" className="text-muted-foreground max-w-lg">
            Discover the pieces loved by our community. Timeless designs crafted in vermeil and 18k gold over sterling silver.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {bestsellers.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-6 overflow-hidden bg-secondary w-full block">
                <img
                  data-strk-img-id={product.imageId}
                  data-strk-img={product.image}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Secondary image for hover effect (simulated with slightly different query) */}
                <img
                  data-strk-img-id={`${product.imageId}-hover`}
                  data-strk-img={`${product.image} detail view close up`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} alternate view`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                
                {/* Quick Add Button */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Button 
                    className="w-full bg-white/90 text-black hover:bg-white backdrop-blur-sm shadow-sm rounded-none uppercase tracking-widest text-xs py-3 h-auto relative z-10"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product, 'Gold', 1);
                    }}
                  >
                    Quick Add
                  </Button>
                </div>
              </Link>
              
              <div className="text-center space-y-2 mt-auto">
                <h3 id={`product-${product.id}-name`} className="font-heading tracking-widest text-sm uppercase">
                  <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <p id={`product-${product.id}-desc`} className="sr-only">{product.description}</p>
                <p className="text-muted-foreground text-sm">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" className="rounded-none tracking-widest uppercase text-xs h-12 px-8" asChild>
            <Link to="/shop">View All Jewelry</Link>
          </Button>
        </div>
      </section>

      {/* UGC / Editorial Reel Row */}
      <section className="py-12 overflow-hidden bg-secondary/30">
        <h2 id="editorial-title" className="font-heading text-2xl text-center mb-10">As Seen On You</h2>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto gap-1 pb-8 px-4 md:px-1 snap-x snap-mandatory hide-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="min-w-[280px] w-[280px] md:min-w-[320px] aspect-[9/16] relative shrink-0 snap-center bg-secondary">
              <img
                data-strk-img-id={`ugc-reel-${i}`}
                data-strk-img={`[editorial-title] beautiful woman wearing thin gold jewelry lifestyle candid warm lighting ${i}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`Lifestyle editorial ${i}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-6">
                <p className="text-white font-heading italic text-lg opacity-90">
                  "The perfect everyday piece."
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 'earrings', name: 'Earrings', query: 'gold earrings close up' },
            { id: 'necklaces', name: 'Necklaces', query: 'gold necklace pendant close up' },
            { id: 'huggies', name: 'Huggies & Cuffs', query: 'gold huggie hoop earrings close up' }
          ].map((cat) => (
            <Link key={cat.id} to={`/shop?category=${cat.id}`} className="group relative aspect-[4/5] overflow-hidden bg-secondary block">
              <img
                data-strk-img-id={`cat-${cat.id.replace(/\s+/g, '-')}`}
                data-strk-img={`[cat-name-${cat.id.replace(/\s+/g, '-')}] ${cat.query} luxury jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 id={`cat-name-${cat.id.replace(/\s+/g, '-')}`} className="text-white font-heading text-3xl tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="bg-primary text-primary-foreground">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-square lg:aspect-auto h-full min-h-[400px] relative">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] [story-desc] jewelry making craftsmanship atelier details"
              data-strk-img-ratio="1x1"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Brand story craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-start p-12 md:p-24 lg:p-32 space-y-8">
            <h2 id="story-title" className="font-heading text-3xl md:text-5xl">The Velmora Ethos</h2>
            <div className="h-px w-12 bg-primary-foreground/30"></div>
            <p id="story-desc" className="text-primary-foreground/80 leading-relaxed text-lg max-w-lg">
              We believe fine jewelry shouldn't be reserved for special occasions. By working directly with master jewelers and using premium materials like 18k gold vermeil, we create pieces designed to live with you, day in and day out.
            </p>
            <Button asChild variant="link" className="text-primary-foreground hover:text-primary-foreground/70 p-0 h-auto font-medium tracking-widest uppercase underline underline-offset-8">
              <Link to="/about">Read Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl text-center mb-16">Words from our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", text: "The Vivid Aura ear cuff is stunning. I receive compliments every time I wear it. Quality is exceptional for the price point." },
              { name: "Emma T.", text: "I haven't taken the Golden Sphere Huggies off since they arrived. They're so comfortable I sleep in them." },
              { name: "Jessica R.", text: "Purchased the Royal Heirloom Set as a gift for myself. The packaging was beautiful and the jewelry itself is breathtaking." }
            ].map((review, i) => (
              <div key={i} className="bg-background p-8 text-center space-y-6">
                <div className="flex justify-center text-[#d4af37] space-x-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg font-heading italic leading-relaxed">"{review.text}"</p>
                <p className="text-sm tracking-widest uppercase font-medium">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-4 text-center container mx-auto">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="font-heading text-4xl">Join the Club</h2>
          <p className="text-muted-foreground text-lg">
            Sign up for our newsletter to receive 10% off your first order, early access to new collections, and exclusive event invitations.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 pt-4 shrink-0 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-transparent border-b border-border py-3 px-2 focus:outline-none focus:border-foreground transition-colors"
              required
            />
            <Button type="submit" className="rounded-none tracking-widest uppercase px-8 shrink-0 border border-primary h-12">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}