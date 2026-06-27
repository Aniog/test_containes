import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import { useCart } from '@/contexts/CartContext';

// Using an empty config for now, will be populated by sdk
const strkImgConfig = {}; 

const Bestsellers = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    price: 42,
    variant: "Gold",
    imageQuery: "gold ear cuff with crystal accent close up jewelry editorial warm light",
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    price: 68,
    variant: "Gold",
    imageQuery: "multicolor floral crystal necklace gold editorial warm light close up",
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    price: 38,
    variant: "Gold",
    imageQuery: "chunky gold dome huggie earrings warm light editorial",
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    price: 54,
    variant: "Gold",
    imageQuery: "textured gold filigree drop earrings warm light close up",
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    price: 95,
    variant: "Gold",
    imageQuery: "elegant gold earring and necklace set in premium gift box warm light overlay",
  }
];

export default function Home() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 z-0 bg-secondary"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="close-up model wearing warm gold jewelry editorial fashion lighting quiet luxury"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/20 z-0" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 id="hero-headline" className="font-serif text-5xl md:text-7xl mb-6 tracking-wide drop-shadow-md">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="font-sans text-lg md:text-xl mb-10 max-w-2xl font-light drop-shadow">
            Discover our collection of demi-fine gold jewelry. Designed for everyday elegance, made to last.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-none uppercase tracking-widest px-8">
            <Link to="/products">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-border bg-background py-4 flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center sm:justify-center items-center gap-2 sm:gap-4 text-[10px] sm:text-xs md:text-sm tracking-[0.1em] sm:tracking-[0.2em] uppercase text-muted-foreground font-medium text-center">
            <span>Free Worldwide Shipping</span>
            <span className="opacity-50">&middot;</span>
            <span>30-Day Returns</span>
            <span className="opacity-50">&middot;</span>
            <span>18K Gold Plated</span>
            <span className="opacity-50 hidden sm:inline">&middot;</span>
            <span className="hidden sm:inline">Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-2">Coveted Pieces</h2>
              <p className="text-muted-foreground text-sm tracking-wider uppercase">Our Bestsellers</p>
            </div>
            <Link to="/products?collection=bestsellers" className="hidden sm:block text-sm tracking-widest uppercase border-b border-primary pb-1 hover:opacity-70 transition-opacity">
              Shop All
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {Bestsellers.map((item) => (
              <div key={item.id} className="group flex flex-col">
                <Link to={`/product/${item.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                  <img
                    data-strk-img-id={`bestseller-img-${item.id}`}
                    data-strk-img={item.imageQuery}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20">
                    <Button 
                      className="w-full bg-white/95 backdrop-blur-sm text-primary hover:bg-white rounded-none uppercase tracking-widest text-xs h-10 shadow-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(item);
                      }}
                    >
                      Quick Add
                    </Button>
                  </div>
                </Link>
                <div className="flex flex-col gap-1 text-center md:text-left flex-1 justify-between">
                  <Link to={`/product/${item.id}`} className="font-serif tracking-wide hover:opacity-70 uppercase text-sm md:text-base leading-tight">
                    {item.name}
                  </Link>
                  <p className="text-muted-foreground text-sm">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/products?collection=bestsellers" className="inline-block text-sm tracking-widest uppercase border-b border-primary pb-1">
              Shop All Bestsellers
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-2 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-6">
            {['Earrings', 'Necklaces', 'Huggies'].map((category, index) => (
              <Link 
                key={category} 
                to={`/products?category=${category.toLowerCase()}`}
                className="group relative aspect-[4/5] overflow-hidden bg-muted"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg-id={`cat-bg-${index}`}
                  data-strk-bg={`${category} jewelry model warm lighting elegant editorial`}
                  data-strk-bg-ratio="4x5"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-sm text-primary px-8 py-3 text-sm tracking-widest uppercase font-medium shadow-sm transition-transform group-hover:-translate-y-1">
                    {category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Story Split Section */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
            <div className="flex-1 w-full aspect-[3/4] relative bg-muted order-2 md:order-1">
               <div
                  className="absolute inset-0"
                  data-strk-bg-id="story-bg"
                  data-strk-bg="jewelry maker workshop gold editorial beautiful lighting craftsmanship"
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="800"
                />
            </div>
            <div className="flex-1 space-y-6 order-1 md:order-2 text-center md:text-left max-w-xl mx-auto md:mx-0">
              <h2 className="font-serif text-3xl md:text-5xl tracking-wide text-primary">Meaningful minimal.</h2>
              <p className="text-secondary-foreground/80 leading-relaxed font-light text-lg">
                Velmora was born from a desire for jewelry that feels luxurious but remains accessible. 
                We design pieces that elevate your everyday—crafted from premium materials without the traditional markup. 
                Quiet luxury, meant to be lived in.
              </p>
              <div className="pt-8">
                <Button variant="outline" asChild className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-widest px-8">
                  <Link to="/about">Our Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
       <section className="py-24 bg-background">
         <div className="container mx-auto px-4">
            <h2 className="font-serif text-center text-3xl mb-16 text-primary tracking-wide">Treasured by You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                { name: "Sarah M.", text: "The weight and color of the gold are perfect. It doesn't look like typical affordable jewelry—it looks genuinely expensive." },
                { name: "Elena R.", text: "I wear my huggies showering, working out, and sleeping. Six months later and they still look brand new. Incredible quality." },
                { name: "Jessica T.", text: "Bought the necklace set as a gift to myself. The packaging was beautiful and the piece itself elevates every outfit I wear." }
              ].map((review, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-4">
                  <div className="flex text-accent-foreground/50">
                     {/* Stars placeholder */}
                     ★★★★★
                  </div>
                  <p className="text-muted-foreground font-serif text-lg leading-relaxed flex-1">"{review.text}"</p>
                  <p className="text-xs uppercase tracking-widest font-medium border-t border-border pt-4 w-12 text-center">{review.name}</p>
                </div>
              ))}
            </div>
         </div>
       </section>

      {/* UGC / Reels Row */}
       <section className="pt-10 pb-20 bg-background overflow-hidden relative border-t border-border/50">
         <div className="container mx-auto px-4 mb-10 text-center">
           <h2 className="font-serif text-3xl mb-2 tracking-wide">Spotted in Velmora</h2>
           <a href="#" className="text-muted-foreground text-sm uppercase tracking-widest hover:text-primary transition-colors">@velmorajewelry</a>
         </div>
         
        {/* Simple horizontal scroll for UGC style */}
        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory gap-2 md:gap-4 px-4 md:px-0 md:justify-center" style={{ scrollbarWidth: 'none' }}>
          {[
            { id: 'ugc-1', query: "woman wearing gold necklace lifestyle selfie mirror aesthetic", text: "Everyday gold." },
            { id: 'ugc-2', query: "multiple ear piercings gold huggies close up aesthetic", text: "Ear stack goals." },
            { id: 'ugc-3', query: "woman in cafe wearing gold earrings aesthetic quiet luxury", text: "Coffee & pearls." },
            { id: 'ugc-4', query: "close up hand wearing gold rings aesthetic lifestyle", text: "The details." },
          ].map((item) => (
            <div key={item.id} className="relative w-[60vw] max-w-[280px] aspect-[9/16] shrink-0 snap-center bg-muted">
              <div
                className="absolute inset-0"
                data-strk-bg-id={item.id}
                data-strk-bg={item.query}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-serif text-lg md:text-xl italic shadow-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 tracking-wide">Join the Club</h2>
          <p className="mb-8 text-primary-foreground/80 font-light text-lg">Sign up for 10% off your first order, plus early access to new collections.</p>
          <form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 transition-colors rounded-none font-light"
              required
            />
            <Button type="submit" className="rounded-none bg-white text-primary hover:bg-white/90 py-6 sm:py-3 px-8 uppercase tracking-widest text-sm mt-4 sm:mt-0 font-medium">
              Join
            </Button>
          </form>
        </div>
      </section>

    </div>
  );
}