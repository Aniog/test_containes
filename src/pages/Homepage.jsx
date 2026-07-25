import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Homepage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = [
    {
      id: 'prod-1',
      title: 'Vivid Aura Jewels',
      price: 42,
      desc: 'gold ear cuff with crystal accent',
      imgId: 'product-vivid-aura-1',
    },
    {
      id: 'prod-2',
      title: 'Majestic Flora Nectar',
      price: 68,
      desc: 'multicolor floral crystal necklace',
      imgId: 'product-majestic-flora-1',
    },
    {
      id: 'prod-3',
      title: 'Golden Sphere Huggies',
      price: 38,
      desc: 'chunky gold dome huggie earrings',
      imgId: 'product-golden-sphere-1',
    },
    {
      id: 'prod-4',
      title: 'Amber Lace Earrings',
      price: 54,
      desc: 'textured gold filigree drop earrings',
      imgId: 'product-amber-lace-1',
    },
    {
      id: 'prod-5',
      title: 'Royal Heirloom Set',
      price: 95,
      desc: 'gift-boxed earring + necklace set',
      imgId: 'product-royal-heirloom-1',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" ref={containerRef}>
      <Navbar />

      <main className="flex-grow">
        {/* Full-bleed Hero */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center">
          <div 
            className="absolute inset-0 z-0 bg-black/40"
            data-strk-bg-id="hero-bg-velmora"
            data-strk-bg="warm-lit close-up of gold jewelry on a model [hero-heading]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          >
            <div className="absolute inset-0 bg-black/30"></div> {/* Overlay for text readability */}
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
            <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-wide drop-shadow-md">
              Crafted to be Treasured
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-sans font-light drop-shadow-sm">
              Discover our collection of premium demi-fine jewelry. 
              Designed for the modern woman, crafted for everyday elegance.
            </p>
            <Link to="/shop" className="btn-primary border border-transparent shadow-premium">
              Shop the Collection
            </Link>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-secondary text-secondary-foreground py-4 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs md:text-sm tracking-widest uppercase font-medium">
              <div>Free Worldwide Shipping</div>
              <div className="hidden md:block">·</div>
              <div>30-Day Returns</div>
              <div className="hidden md:block">·</div>
              <div>18K Gold Plated</div>
              <div className="hidden md:block">·</div>
              <div>Hypoallergenic</div>
            </div>
          </div>
        </section>

        {/* Bestsellers */}
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="bestsellers-heading" className="text-3xl md:text-4xl mb-4">Curated Favorites</h2>
              <p className="text-muted-foreground font-sans uppercase tracking-widest text-sm">Shop our most-loved pieces</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {bestsellers.map((product) => (
                <div key={product.id} className="group relative flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-4">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[product-title-${product.id}] ${product.desc} jewelry elegant warm lighting`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                    />
                    
                    {/* Add to Cart Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <button className="w-full bg-background/95 backdrop-blur-sm text-foreground hover:bg-black hover:text-white py-3 font-serif text-sm tracking-widest uppercase transition-colors duration-300 shadow-soft">
                        Quick Add
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 id={`product-title-${product.id}`} className="font-serif text-base tracking-wider uppercase mb-2">
                      {product.title}
                    </h3>
                    <p className="font-sans text-muted-foreground">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/collections/bestsellers" className="btn-outline">
                View All Bestsellers
              </Link>
            </div>
          </div>
        </section>

        {/* UGC / Instagram Reel Style */}
        <section className="py-20 md:py-32 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
            <div>
              <h2 id="ugc-heading" className="text-3xl md:text-4xl">Styled by You</h2>
              <p className="text-muted-foreground font-sans mt-2">@velmorajewelry</p>
            </div>
          </div>
          
          <div className="pl-4 sm:pl-6 xl:px-8 w-full max-w-[1400px] mx-auto">
            <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-8 snap-x">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative w-64 md:w-80 shrink-0 aspect-[9/16] bg-muted snap-start overflow-hidden group">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Customer styling ${i}`}
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={`ugc-image-${i}`}
                    data-strk-img={`[ugc-heading] editorial elegant jewelry on person portrait`}
                    data-strk-img-ratio="9x16"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-serif italic text-lg leading-snug drop-shadow-md">
                      {i % 2 === 0 ? "My new everyday uniform." : "Obsessed with these huggies."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-10 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="sr-only" id="categories-heading">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              
              <Link to="/category/earrings" className="group relative aspect-square overflow-hidden bg-muted flex items-center justify-center">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Earrings"
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id="category-earrings"
                  data-strk-img="elegant gold earrings model close up [cat-label-1]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <h3 id="cat-label-1" className="relative z-10 text-white font-serif text-2xl tracking-widest uppercase py-3 border-b border-white/50 opacity-90 group-hover:opacity-100 transition-opacity">
                  Earrings
                </h3>
              </Link>

              <Link to="/category/necklaces" className="group relative aspect-square overflow-hidden bg-muted flex items-center justify-center">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Necklaces"
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id="category-necklaces"
                  data-strk-img="elegant gold layered necklaces model close up [cat-label-2]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <h3 id="cat-label-2" className="relative z-10 text-white font-serif text-2xl tracking-widest uppercase py-3 border-b border-white/50 opacity-90 group-hover:opacity-100 transition-opacity">
                  Necklaces
                </h3>
              </Link>

              <Link to="/category/huggies" className="group relative aspect-square overflow-hidden bg-muted flex items-center justify-center">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Huggies"
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id="category-huggies"
                  data-strk-img="elegant gold huggie earrings model ear close up [cat-label-3]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <h3 id="cat-label-3" className="relative z-10 text-white font-serif text-2xl tracking-widest uppercase py-3 border-b border-white/50 opacity-90 group-hover:opacity-100 transition-opacity">
                  Huggies
                </h3>
              </Link>

            </div>
          </div>
        </section>

        {/* Brand Story Split */}
        <section className="py-20 md:py-32 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[3/4] bg-muted shadow-premium">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Velmora Studio"
                    className="w-full h-full object-cover"
                    data-strk-img-id="story-image-1"
                    data-strk-img="elegant editorial jewelry studio behind the scenes [story-heading]"
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="800"
                  />
                  <div className="absolute -bottom-6 -right-6 w-1/2 aspect-square bg-primary/10 -z-10 hidden md:block"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <p className="font-sans uppercase tracking-widest text-primary text-sm font-medium">The Brand</p>
                <h2 id="story-heading" className="text-4xl lg:text-5xl leading-tight">Quiet Luxury, Everyday.</h2>
                <p className="font-sans text-muted-foreground text-lg leading-relaxed">
                  Velmora was born from a desire to create accessible, premium demi-fine jewelry that doesn't compromise on quality or design. 
                </p>
                <p className="font-sans text-muted-foreground text-lg leading-relaxed">
                  Each piece is thoughtfully crafted using 18k gold vermeil and ethically sourced materials, designed to be stacked, styled, and treasured for a lifetime.
                </p>
                <div className="pt-4">
                  <Link to="/about" className="nav-link text-foreground font-serif tracking-widest uppercase">
                    Discover Our Story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-background border-t border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              
              <div className="flex flex-col items-center">
                <div className="flex text-primary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-xl italic text-foreground mb-6 leading-relaxed">
                  "The quality is exceptional. My huggies haven't left my ears since I got them. They look perfectly editorial, just like the photos."
                </p>
                <p className="font-sans text-sm tracking-widest uppercase text-muted-foreground">
                  — Sarah M.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex text-primary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-xl italic text-foreground mb-6 leading-relaxed">
                  "Beautiful packaging and stunning jewelry. The Royal Heirloom set made the perfect gift for my sister's wedding."
                </p>
                <p className="font-sans text-sm tracking-widest uppercase text-muted-foreground">
                  — Emily T.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex text-primary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-xl italic text-foreground mb-6 leading-relaxed">
                  "I get compliments on my Amber Lace Earring every time I wear them. They look so much more expensive than they are."
                </p>
                <p className="font-sans text-sm tracking-widest uppercase text-muted-foreground">
                  — Jessica L.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-primary text-primary-foreground py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-transparent">
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Join the Velmora List</h2>
            <p className="font-sans text-primary-foreground/90 mb-10 max-w-xl mx-auto">
              Sign up for early access to new collections, editorial styling tips, and enjoy 10% off your first order.
            </p>
            <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                className="flex-grow px-6 py-4 bg-transparent border border-primary-foreground/30 focus:border-white focus:outline-none text-white placeholder:text-primary-foreground/60 font-sans transition-colors rounded-none"
              />
              <button type="submit" className="px-8 py-4 bg-white text-primary font-serif tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Homepage;