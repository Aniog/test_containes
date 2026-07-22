import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button.jsx';
import { products } from '../data/mockProducts';
import { useStore } from '../store';
import { Star } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);
  const { addToCart } = useStore();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.filter(p => p.bestseller).slice(0, 5);
  const categories = [
    { title: 'Earrings', id: 'cat-earrings' },
    { title: 'Necklaces', id: 'cat-necklaces' },
    { title: 'Huggies', id: 'cat-huggies' }
  ];

  return (
    <div ref={containerRef} className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-neutral-900"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-sub] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center mt-16 md:mt-24">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl mb-6 font-normal drop-shadow-md">
            Crafted to be Treasured
          </h1>
          <p id="hero-sub" className="text-lg md:text-xl font-sans max-w-lg mx-auto mb-10 text-white/90 font-light drop-shadow-sm">
            Elevate your everyday with demi-fine jewelry designed for modern romance and timeless appeal.
          </p>
          <Button asChild size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-10 text-sm tracking-widest uppercase transition-all">
            <Link to="/collection">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-primary/10 border-b border-primary/20 py-4">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs md:text-sm tracking-widest uppercase text-foreground/80 font-medium">
            <li>Free Worldwide Shipping</li>
            <li className="hidden md:block">·</li>
            <li>30-Day Returns</li>
            <li className="hidden md:block">·</li>
            <li>18K Gold Plated</li>
            <li className="hidden md:block">·</li>
            <li>Hypoallergenic</li>
          </ul>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-title" className="text-3xl md:text-4xl mb-3">Our Signature Pieces</h2>
              <p className="text-muted-foreground font-sans">The foundations of your jewelry wardrobe.</p>
            </div>
            <Link to="/collection" className="hidden md:inline-block text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
            {bestsellers.map((product) => (
              <div key={product.id} className="group flex flex-col relative">
                <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0"
                    data-strk-img-id={`bs-img1-${product.id}`}
                    data-strk-img={`[bs-title-${product.id}] [bestsellers-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <img
                    alt={`${product.name} worn`}
                    className="w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 absolute inset-0"
                    data-strk-img-id={`bs-img2-${product.id}`}
                    data-strk-img={`[bs-title-${product.id}] lifestyle worn on model`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10 flex justify-center bg-gradient-to-t from-black/50 to-transparent">
                    <Button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="w-full rounded-none bg-background text-foreground hover:bg-primary hover:text-primary-foreground uppercase tracking-widest text-xs h-10"
                    >
                      Quick Add
                    </Button>
                  </div>
                </Link>
                <div className="text-center md:text-left flex flex-col flex-1">
                  <h3 id={`bs-title-${product.id}`} className="text-sm font-heading tracking-widest mb-1">{product.name}</h3>
                  <div className="flex justify-center md:justify-start gap-1 mb-2 text-primary">
                     {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-primary' : 'text-muted-foreground'}`} />
                      ))}
                  </div>
                  <p className="text-sm font-medium mt-auto">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link to="/collection" className="inline-block text-sm uppercase tracking-widest border-b border-foreground pb-1">
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reels Row */}
      <section className="py-16 md:py-24 bg-background overflow-hidden relative border-y border-border/50">
         <div className="container mx-auto px-4 mb-10">
            <h2 id="ugc-title" className="text-3xl text-center">Spotted in Velmora</h2>
            <p className="text-center text-muted-foreground mt-2 font-sans text-sm">@velmorajewelry</p>
         </div>
        
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory gap-4 md:gap-6 hide-scrollbar cursor-grab active:cursor-grabbing" style={{ scrollbarWidth: 'none' }}>
           {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="snap-center shrink-0 w-[240px] md:w-[280px] aspect-[9/16] relative bg-muted group rounded-md overflow-hidden">
                 <img
                    alt="Instagram Reel snippet"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={`ugc-img-${item}`}
                    data-strk-img={`girl wearing gold jewelry selfie [ugc-title]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                     <p className="text-white font-heading text-lg italic leading-tight">
                       "My everyday staple"
                     </p>
                  </div>
              </div>
           ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h2 id="categories-title" className="text-3xl md:text-4xl text-center mb-16">Curate Your Collection</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/collection?category=${cat.title}`} className="group relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    data-strk-img-id={`cat-img-${cat.id}`}
                    data-strk-img={`[${cat.id}-title] jewelry on model`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 id={`${cat.id}-title`} className="text-white text-3xl tracking-widest uppercase opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform">
                      {cat.title}
                    </h3>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-primary/5 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="w-full md:w-1/2 relative aspect-[4/5] bg-muted">
                <img
                    alt="Brand Story"
                    className="w-full h-full object-cover"
                    data-strk-img-id="story-img"
                    data-strk-img="[story-title] artisan jewelry making"
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
            </div>
            <div className="w-full md:w-1/2 md:pr-12 text-center md:text-left">
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-sans font-semibold mb-4 block">The Process</span>
              <h2 id="story-title" className="text-4xl md:text-5xl mb-8 leading-tight">Designed for Life, Crafted with Purpose.</h2>
              <div className="space-y-6 text-foreground/80 font-sans font-light leading-relaxed mb-10 mx-auto md:mx-0 max-w-lg">
                <p>
                  We believe that fine jewelry shouldn't be reserved for special occasions. Velmora was born from a desire to create demi-fine pieces that bridge the gap between costume jewelry and unattainable luxury.
                </p>
                <p>
                  Every piece is thoughtfully designed to be layered, lived in, and loved daily—crafted with high-quality 18k gold vermeil over sterling silver.
                </p>
              </div>
              <Link to="/about" className="inline-block text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors pb-2">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 id="reviews-title" className="text-center text-3xl mb-16 hidden">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              { name: "Sarah M.", text: "The huggies are a dream. I haven't taken them off since they arrived." },
              { name: "Jessica L.", text: "Finally found a brand that looks high-end without the crazy markup." },
              { name: "Emily R.", text: "Beautiful packaging and the necklace is even more stunning in person." }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary" />
                  ))}
                </div>
                <p className="font-heading text-xl italic mb-6 leading-relaxed">"{review.text}"</p>
                <p className="text-sm font-sans tracking-widest uppercase">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Join the Inner Circle</h2>
          <p className="font-sans mb-10 text-primary-foreground/80 font-light text-lg">Subscribe for early access to new collections and 10% off your first order.</p>
          <form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border border-primary-foreground/30 px-6 py-4 placeholder:text-primary-foreground/50 text-white outline-none focus:border-white transition-colors"
              required
            />
            <Button type="submit" className="rounded-none bg-white text-primary hover:bg-white/90 px-8 h-14 uppercase tracking-widest text-sm font-semibold">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}