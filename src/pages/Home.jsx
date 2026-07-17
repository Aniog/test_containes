import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/plugin/strk-img-config.json';

export const SEED_PRODUCTS = [
  {
    id: 'vivid-aura',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    description: 'Gold ear cuff with crystal accent.',
    imgId: 'product-vivid-aura-1',
    hoverImgId: 'product-vivid-aura-2'
  },
  {
    id: 'majestic-flora',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    description: 'Multicolor floral crystal necklace.',
    imgId: 'product-majestic-flora-1',
    hoverImgId: 'product-majestic-flora-2'
  },
  {
    id: 'golden-sphere',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    description: 'Chunky gold dome huggie earrings.',
    imgId: 'product-golden-sphere-1',
    hoverImgId: 'product-golden-sphere-2'
  },
  {
    id: 'amber-lace',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    description: 'Textured gold filigree drop earrings.',
    imgId: 'product-amber-lace-1',
    hoverImgId: 'product-amber-lace-2'
  },
  {
    id: 'royal-heirloom',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    description: 'Gift-boxed earring + necklace set.',
    imgId: 'product-royal-heirloom-1',
    hoverImgId: 'product-royal-heirloom-2'
  }
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      try {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      } catch(e) {}
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col w-full">
      {/* 1 & 2. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-primary/20 z-10" 
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-main-bg"
          data-strk-bg="[hero-sub] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        
        <div className="relative z-20 text-center text-white px-6 w-full max-w-4xl mx-auto flex flex-col items-center">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl mb-6 text-balance">
            Crafted to be Treasured
          </h1>
          <p id="hero-sub" className="text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl text-white/90">
            Discover demi-fine gold jewelry designed for the modern woman. Quiet luxury for everyday wear and meaningful gifting.
          </p>
          <Link 
            to="/shop" 
            className="inline-flex h-12 items-center justify-center bg-accent text-accent-foreground px-8 font-medium tracking-widest uppercase hover:bg-accent/90 transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <section className="bg-secondary py-6 border-b border-border">
        <div className="container mx-auto px-6 overflow-hidden">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 text-sm font-medium tracking-wider uppercase text-foreground/80 md:px-12 text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden sm:inline text-accent">•</span>
            <span>30-Day Returns</span>
            <span className="hidden sm:inline text-accent">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden sm:inline text-accent">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* 4. Bestsellers */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-title" className="text-3xl md:text-4xl mb-3">Our Bestsellers</h2>
              <p id="bestsellers-sub" className="text-muted-foreground">The pieces everyone is loving right now.</p>
            </div>
            <Link to="/shop" className="hidden sm:flex items-center text-sm uppercase tracking-widest font-medium hover:text-accent transition-colors group">
              View All <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
            {SEED_PRODUCTS.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 bg-secondary overflow-hidden">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}] [bestsellers-sub] [bestsellers-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                  />
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} Lifestyle`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    data-strk-img-id={product.hoverImgId}
                    data-strk-img={`woman wearing [product-desc-${product.id}] [product-name-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                  />
                  
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-sm tracking-widest font-medium uppercase hover:bg-foreground hover:text-background transition-colors">
                      Quick Add
                    </button>
                  </div>
                </Link>
                <div className="flex flex-col flex-1">
                  <h3 id={`product-name-${product.id}`} className="font-serif uppercase tracking-wider text-sm mb-1">{product.name}</h3>
                  <p id={`product-desc-${product.id}`} className="text-muted-foreground text-xs mb-3 hidden">{product.description}</p>
                  <p className="text-foreground tracking-wide mt-auto">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
            <Link to="/shop" className="inline-flex items-center text-sm uppercase tracking-widest font-medium hover:text-accent transition-colors">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. UGC Reels Row */}
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 mb-12 text-center">
           <h2 id="ugc-title" className="text-3xl md:text-4xl mb-3">Styled By You</h2>
           <p id="ugc-sub" className="text-muted-foreground">Tag @velmorajewelry to be featured.</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex gap-4 px-6 md:px-12 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="relative shrink-0 w-64 md:w-80 aspect-[9/16] snap-center bg-muted rounded-md overflow-hidden group cursor-pointer">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Customer wearing jewelry"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img={`woman modeling gold jewelry [ugc-sub] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-white font-serif text-lg leading-snug drop-shadow-md">
                  "The perfect everyday staple. I never take them off."
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Shop By Category */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
           <h2 id="categories-title" className="text-3xl md:text-4xl mb-12 text-center">Shop by Category</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Earrings', id: 'cat-earrings' },
                { title: 'Necklaces', id: 'cat-necklaces' },
                { title: 'Huggies', id: 'cat-huggies' }
              ].map((cat) => (
                <Link to={`/shop?category=${cat.title.toLowerCase()}`} key={cat.id} className="group relative aspect-square bg-secondary overflow-hidden block">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${cat.title} Category`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={`cat-img-${cat.id}`}
                    data-strk-img={`fine gold ${cat.title} [categories-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="800"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white font-serif text-3xl tracking-wide opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {cat.title}
                    </h3>
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* 7. Brand Story Split */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
             <div className="w-full lg:w-1/2 aspect-[4/5] bg-muted relative">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Jewelry making process"
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id="brand-story-img"
                  data-strk-img="jewelry artisan crafting gold pieces [story-title]"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                />
             </div>
             <div className="w-full lg:w-1/2 flex flex-col items-start max-w-xl">
               <h2 id="story-title" className="text-4xl md:text-5xl mb-6">Designed for the Everyday Elegance</h2>
               <div className="space-y-6 text-muted-foreground font-light leading-relaxed mb-10">
                 <p>
                   Velmora was born from a desire to bridge the gap between inaccessible fine jewelry and fleeting fast fashion. We believe that true luxury lies in pieces that you can wear every day, without compromising on quality or craftsmanship.
                 </p>
                 <p>
                   Each piece is thoughtfully designed and ethically crafted using premium 18K gold vermeil and ethically sourced crystals, ensuring they withstand the test of time while elevating your daily narrative.
                 </p>
               </div>
               <Link to="/about" className="text-accent underline underline-offset-8 decoration-accent/50 hover:decoration-accent tracking-widest uppercase font-medium transition-colors cursor-pointer">
                 Discover Our Story
               </Link>
             </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-5xl">
           <h2 id="reviews-title" className="text-3xl md:text-4xl mb-16">Loved by Our Community</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
             {[
               { name: "Sarah M.", text: "The quality is simply outstanding. These huggies have become my daily uniform—they don't tarnish and look so much more expensive than they are." },
               { name: "Elena T.", text: "I bought the Majestic Flora set for my sister's wedding and she was in tears. The packaging was beautiful and the pieces are truly heirloom quality." },
               { name: "Jessica R.", text: "Finally found a brand that understands quiet luxury. The ear cuff adds the perfect edge to my outfits without looking overdone." }
             ].map((review, i) => (
               <div key={i} className="flex flex-col">
                 <div className="flex space-x-1 mb-6 text-accent">
                   {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                 </div>
                 <p className="font-serif text-lg leading-relaxed mb-6 italic text-foreground/80 flex-1">"{review.text}"</p>
                 <p className="font-medium tracking-widest uppercase text-xs text-muted-foreground">— {review.name}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center max-w-2xl">
           <h2 className="text-3xl md:text-4xl mb-4 text-white">Join the Velmora Inner Circle</h2>
           <p className="text-background/80 mb-10 font-light">Subscribe to receive 10% off your first order, styling tips, and early access to new collections.</p>
           
           <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
             <input 
               type="email" 
               placeholder="Your email address" 
               className="flex-1 bg-transparent border-b border-background/30 px-4 py-3 placeholder:text-background/50 focus:outline-none focus:border-accent transition-colors"
               required
             />
             <button type="submit" className="bg-accent text-accent-foreground px-8 py-3 font-medium tracking-widest uppercase hover:bg-accent/90 transition-colors shrink-0">
               Subscribe
             </button>
           </form>
        </div>
      </section>
    </div>
  );
}