import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { seedProducts } from '@/lib/data';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = seedProducts;

export default function Home() {
  const { addItem } = useCartStore();
  const containerRef = useRef(null);

  useEffect(() => {
     window.scrollTo(0, 0);
     const frameId = window.requestAnimationFrame(() => {
       ImageHelper.loadImages(strkImgConfig, containerRef.current);
     });
     return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col">
      {/* 1. Full-bleed Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background for Hero since data-strk-bg is for external Strikingly system */}
        <div 
          className="absolute inset-0 z-0 bg-neutral-900"
          data-strk-bg-id="hero-bg-2"
          data-strk-bg="model wearing gold jewelry editorial portrait"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl font-light mb-6">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light mb-10 max-w-xl mx-auto opacity-90">
            Discover our collection of demi-fine gold jewelry. Designed for the everyday editorial.
          </p>
          <Button asChild className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground border-none text-base px-10 py-6 tracking-widest uppercase">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="border-b border-border bg-background py-3 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-[11px] md:text-sm tracking-wider uppercase text-muted-foreground whitespace-nowrap md:overflow-hidden overflow-x-auto gap-8 no-scrollbar">
            <span className="flex-shrink-0">Free Worldwide Shipping</span>
            <span className="hidden md:inline-block">•</span>
            <span className="flex-shrink-0">30-Day Returns</span>
            <span className="hidden md:inline-block">•</span>
            <span className="flex-shrink-0">18K Gold Plated</span>
            <span className="hidden md:inline-block">•</span>
            <span className="flex-shrink-0">Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* 3. Bestsellers Product Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-foreground">Bestsellers</h2>
            <Link to="/shop" className="text-sm font-medium tracking-wide uppercase border-b border-foreground pb-1 hover:text-muted-foreground transition-colors">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <div key={`bestseller-${product.id}`} className="group relative">
                <Link to={`/product/${product.id}`} className="block block aspect-[3/4] overflow-hidden bg-secondary mb-4 relative">
                  <img
                    data-strk-img-id={`bestseller-${product.id}`}
                    data-strk-img={`[bestsellers-title] [product-title-${product.id}] on dark background`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Add to cart overlay on hover */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                     <Button 
                        className="w-full rounded-none tracking-widest uppercase bg-white text-black hover:bg-neutral-100 shadow-md"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addItem({ ...product, quantity: 1, variant: 'gold' });
                        }}
                     >
                        Quick Add
                     </Button>
                  </div>
                </Link>
                <div className="flex flex-col">
                  <h3 id={`product-title-${product.id}`} className="font-serif tracking-widest uppercase text-sm mb-1">{product.title}</h3>
                  <span className="text-muted-foreground text-sm">${product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Instagram/UGC Row */}
      <section className="py-20 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <h2 id="ugc-title" className="font-serif text-3xl text-center mb-12">Spotted In Velmora</h2>
           {/* Horizontal scrolling wrapper */}
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
             {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex-none w-64 md:w-80 aspect-[9/16] relative snap-center bg-secondary overflow-hidden group">
                  <img
                    data-strk-img-id={`ugc-image-${i}`}
                    data-strk-img={`[ugc-title] everyday styling woman wearing gold jewelry editorial lifestyle portrait`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Velmora styled by customer ${i}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <p className="absolute bottom-6 left-6 right-6 font-serif text-white text-lg italic tracking-wide">
                     "My everyday signature."
                  </p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h2 id="category-title" className="font-serif text-4xl text-center mb-16">The Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 'earrings', title: 'Earrings', link: '/shop?category=earrings' },
              { id: 'necklaces', title: 'Necklaces', link: '/shop?category=necklaces' },
              { id: 'huggies', title: 'Huggies', link: '/shop?category=huggies' }
            ].map((cat) => (
              <Link key={cat.id} to={cat.link} className="block relative aspect-[4/5] bg-secondary overflow-hidden group">
                 <img
                    data-strk-img-id={`cat-img-${cat.id}`}
                    data-strk-img={`[cat-title-${cat.id}] gold ${cat.title} jewelry on model editorial close up`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${cat.title} collection`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 id={`cat-title-${cat.id}`} className="font-serif text-3xl text-white uppercase tracking-[0.2em] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {cat.title}
                    </h3>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="aspect-[4/5] relative overflow-hidden bg-background">
               <img
                  data-strk-img-id="story-image-1"
                  data-strk-img={`[story-title] woman making fine jewelry close up editorial photography`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Velmora craftsmanship"
                  className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col justify-center">
               <span className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Our Philosophy</span>
               <h2 id="story-title" className="font-serif text-4xl md:text-5xl mb-8 leading-tight text-foreground">
                 Redefining Everyday Luxury.
               </h2>
               <p id="story-desc" className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
                 We believe that fine jewelry shouldn't be reserved for special occasions. 
                 Velmora is crafted to be worn, lived in, and treasured every single day. 
                 Ethically sourced materials meet timeless design in pieces that feel inherently yours.
               </p>
               <Button variant="outline" asChild className="self-start rounded-none tracking-widest uppercase border-foreground text-foreground hover:bg-foreground hover:text-background px-8">
                 <Link to="/about">Read Our Story</Link>
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 bg-background">
         <div className="container mx-auto px-4 max-w-4xl text-center">
           <h2 className="font-serif text-3xl mb-16 text-foreground">Words From You</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { quote: "The quality is unmatched. I haven't taken these huggies off since they arrived.", author: "Elena M." },
               { quote: "Exactly what I was looking for. Quiet, elegant, and perfect for layering.", author: "Sophia R." },
               { quote: "Beautiful packaging and stunning jewelry. Made the perfect gift for my sister.", author: "Claire T." }
             ].map((review, i) => (
               <div key={i} className="flex flex-col items-center">
                 <div className="flex gap-1 text-accent mb-6">
                   {[...Array(5)].map((_, j) => (
                     <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                   ))}
                 </div>
                 <p className="font-serif italic text-lg leading-relaxed mb-6 text-foreground">"{review.quote}"</p>
                 <span className="text-sm tracking-widest uppercase text-muted-foreground">— {review.author}</span>
               </div>
             ))}
           </div>
         </div>
      </section>

      {/* 8. Newsletter */}
      <section className="py-24 bg-accent text-accent-foreground text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl mb-4">Join the Inner Circle</h2>
          <p className="text-accent-foreground/90 mb-10 text-lg">Subscribe for exclusive access to new collections and receive 10% off your first order.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
               type="email" 
               name="email" 
               placeholder="Your email address" 
               required
               className="flex-1 px-4 py-3 bg-transparent border border-accent-foreground/30 text-accent-foreground placeholder-accent-foreground/60 focus:outline-none focus:border-accent-foreground transition-colors"
            />
            <Button type="submit" className="rounded-none bg-accent-foreground text-accent hover:bg-accent-foreground/90 tracking-widest uppercase h-auto py-3 px-8">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

    </div>
  );
}