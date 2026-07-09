import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Button } from '../components/ui/button';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ArrowRight, Star } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  return (
    <div ref={containerRef}>
      {/* 1. Full-bleed hero */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center text-white text-center">
        <div 
          className="absolute inset-0 z-0 bg-black/30"
          data-strk-bg-id="hero-bg-2f8a1c"
          data-strk-bg="[hero-subhead] [hero-headline]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="relative z-10 max-w-3xl px-4 flex flex-col items-center">
          <h1 id="hero-headline" className="font-serif text-5xl md:text-7xl mb-6 tracking-wide drop-shadow-sm">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="text-lg md:text-xl font-light tracking-wide mb-10 max-w-xl text-white/90">
            Premium demi-fine gold jewelry for the modern romantic. Gift yourself or someone you love.
          </p>
          <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-sm h-14 px-10">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* 2. Trust bar */}
      <section className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x-0 md:divide-x divide-border">
            <div className="text-xs uppercase tracking-widest text-muted-foreground py-2 font-medium">Free Worldwide Shipping</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground py-2 font-medium">30-Day Returns</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground py-2 font-medium">18K Gold Plated</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground py-2 font-medium">Hypoallergenic</div>
          </div>
        </div>
      </section>

      {/* 3. Bestsellers */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl mb-3 text-foreground">Bestsellers</h2>
              <p id="bestsellers-desc" className="text-muted-foreground font-light">Our most loved everyday pieces.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-sm uppercase tracking-widest hover:text-primary transition-colors font-medium">
              Shop All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 gap-y-12">
            {bestsellers.map(product => (
              <div key={product.id} className="group cursor-pointer">
                <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`bestseller-img-${product.id}`}
                    data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`bestseller-img-hover-${product.id}`}
                    data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}] lifestyle`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    alt={`${product.name} lifestyle`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button 
                      className="w-full rounded-none bg-background/90 text-foreground hover:bg-background hover:text-primary backdrop-blur uppercase tracking-widest text-xs"
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product, 1, product.variants[0]);
                      }}
                    >
                      Quick Add
                    </Button>
                  </div>
                </Link>
                <div className="text-center">
                  <Link to={`/product/${product.id}`}>
                    <h3 id={`product-name-${product.id}`} className="font-serif uppercase tracking-widest text-sm mb-1 text-foreground">{product.name}</h3>
                    <p className="text-muted-foreground text-sm">${product.price}</p>
                    <span id={`product-desc-${product.id}`} className="sr-only">{product.description}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Button asChild variant="outline" className="rounded-none uppercase tracking-widest text-sm w-full h-12">
              <Link to="/shop">Shop All Bestsellers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. UGC / Inspiration Row */}
      <section className="py-16 overflow-hidden bg-[#faf9f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <h2 id="ugc-title" className="font-serif text-3xl mb-3 text-foreground">As Worn By You</h2>
          <p id="ugc-subtitle" className="text-muted-foreground font-light">Tag @velmorajewelry to be featured.</p>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto snap-x snap-mandatory pb-8 md:justify-center scrollbar-hide">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="snap-center flex-shrink-0 w-64 md:w-72 aspect-[9/16] relative bg-muted group">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img={`[ugc-title] [ugc-subtitle] woman wearing gold jewelry ${i}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                alt="Customer styling"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-serif text-lg">Everyday Elegance</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Earrings', id: 'cat-earrings', query: 'gold drop earrings model' },
              { title: 'Necklaces', id: 'cat-necklaces', query: 'gold layered necklaces model neck' },
              { title: 'Huggies', id: 'cat-huggies', query: 'gold huggie hoop earrings ear close up' }
            ].map(cat => (
              <Link to={`/shop?category=${cat.title.toLowerCase()}`} key={cat.id} className="relative aspect-square md:aspect-[3/4] group overflow-hidden bg-muted">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id={`cat-img-${cat.id}`}
                  data-strk-img={`[cat-title-${cat.id}] ${cat.query}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  alt={`Shop ${cat.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 id={`cat-title-${cat.id}`} className="text-white font-serif text-3xl md:text-4xl uppercase tracking-widest drop-shadow-md">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="bg-muted">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto md:h-full bg-[#e6e2db]">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] [story-desc]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              alt="Velmora Studio"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-20 md:px-16 lg:px-24">
            <h2 id="story-title" className="font-serif text-3xl md:text-4xl mb-6 text-foreground">Redefining Demi-Fine</h2>
            <p id="story-desc" className="text-muted-foreground font-light leading-relaxed mb-8">
              Velmora was born from a simple belief: luxury isn't a price tag, it's a feeling. 
              We craft thoughtfully designed, 18K gold-plated pieces intended to be worn, 
              loved, and lived in. Every piece from our collection marries classical elegance 
              with modern accessibility, ensuring you never have to save your best for a special occasion.
            </p>
            <div>
              <Button asChild variant="outline" className="rounded-none uppercase tracking-widest text-sm h-12 px-8">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="reviews-title" className="font-serif text-3xl md:text-4xl text-foreground mb-4">A Treasured Experience</h2>
            <div className="flex justify-center text-primary mb-4">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { id: 1, text: "I've never received so many compliments. The quality is astounding for the price. I wear the huggies every single day.", author: "Claire M." },
              { id: 2, text: "Beautiful packaging and stunning jewelry. The Vivid Aura cuff completely transformed my ear stack in seconds.", author: "Elena R." },
              { id: 3, text: "Finally, gold jewelry that doesn't tarnish after a week. Velmora is my new go-to for gifts and self-purchases.", author: "Sarah T." }
            ].map(review => (
              <div key={review.id} className="text-center px-4">
                <p className="font-serif text-lg leading-relaxed text-foreground mb-6">"{review.text}"</p>
                <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 8. Newsletter */}
      <section className="bg-primary text-primary-foreground py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join for 10% Off Your First Order</h2>
          <p className="font-light tracking-wide mb-8 opacity-90">
            Be the first to know about new collections, exclusive events, and styling tips.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border border-primary-foreground/30 px-4 py-3 placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground mb-4 sm:mb-0 sm:mr-4 rounded-none"
              required
            />
            <Button type="submit" variant="secondary" className="rounded-none uppercase tracking-widest px-8">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
