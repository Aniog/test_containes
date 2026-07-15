import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import { Button } from '../components/ui/button';
import { useCart } from '../context/CartContext';

const Home = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pb-20">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="[hero-subhead] [hero-headline] warm lit close up gold jewelry on model"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-3xl flex flex-col items-center">
          <h1 id="hero-headline" className="font-serif text-5xl md:text-7xl mb-6">Crafted to be Treasured</h1>
          <p id="hero-subhead" className="text-lg md:text-xl font-light mb-10 max-w-xl mx-auto">
            Discover demi-fine gold jewelry designed for the modern romantic. Elevate your everyday with pieces meant to be worn and loved.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none uppercase tracking-widest px-10 py-6 text-sm">
            <Link to="/collections">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary text-secondary-foreground py-3 border-y border-border/50">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="flex justify-between items-center text-xs tracking-wider uppercase whitespace-nowrap overflow-x-auto gap-8 no-scrollbar">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">•</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-foreground">Bestsellers</h2>
          <Link to="/collections" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors">
            Shop All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.slice(0, 5).map((product) => (
            <div key={product.id} className="group relative group/card flex flex-col">
              <Link to={`/products/${product.id}`} className="block relative aspect-[3/4] mb-4 bg-secondary overflow-hidden">
                <img 
                  src={product.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[prod-desc-${product.id}] [prod-name-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover/card:opacity-0 absolute inset-0 z-10"
                />
                <img 
                  src={product.image2 || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                  alt={`${product.name} alternate view`}
                  data-strk-img-id={product.img2Id}
                  data-strk-img={`[prod-desc-${product.id}] alternate lifestyle view jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  className="w-full h-full object-cover absolute inset-0 z-0"
                />
                
                {/* Quick Add Button showing on hover */}
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300 z-20">
                  <Button 
                    className="w-full bg-white/90 backdrop-blur text-foreground hover:bg-white rounded-none uppercase tracking-widest text-xs py-5"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                  >
                    Quick Add
                  </Button>
                </div>
              </Link>
              <div className="text-center mt-auto flex flex-col">
                <h3 id={`prod-name-${product.id}`} className="font-serif text-sm uppercase tracking-widest mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm font-medium">${product.price}</p>
                <p id={`prod-desc-${product.id}`} className="sr-only">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 id="categories-title" className="font-serif text-3xl md:text-4xl text-center mb-16 text-foreground">Featured Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Earrings', 'Necklaces', 'Huggies'].map((cat, index) => (
              <Link to="/collections" key={cat} className="group relative aspect-square overflow-hidden block">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                  data-strk-bg-id={`cat-bg-${index}`}
                  data-strk-bg={`[cat-title-${index}] gold jewelry editorial aesthetic`}
                  data-strk-bg-ratio="1x1"
                  data-strk-bg-width="600"
                ></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <h3 
                    id={`cat-title-${index}`} 
                    className="font-serif text-3xl text-white tracking-wider outline outline-1 outline-white/50 bg-black/20 px-8 py-4 backdrop-blur-sm shadow-sm"
                  >
                    {cat}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 aspect-[4/5] relative">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Brand Story"
                data-strk-img-id="brand-story-img"
                data-strk-img="[story-desc] [story-title] women wearing gold jewelry lifestyle"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 max-w-lg">
              <h2 id="story-title" className="font-serif text-3xl md:text-5xl mb-6 text-foreground">The Art of Adornment</h2>
              <p id="story-desc" className="text-muted-foreground leading-relaxed mb-8">
                Velmora was founded on a simple belief: luxury shouldn't be reserved for special occasions. We design demi-fine jewelry that brings a touch of romance to your everyday life.
                <br/><br/>
                Every piece is thoughtfully crafted using premium materials, ethically sourced, and designed to become an enduring part of your personal style journey.
              </p>
              <Button variant="outline" className="rounded-none uppercase tracking-widest border-foreground text-foreground hover:bg-foreground hover:text-background px-8">
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/50 border-y border-border/50">
        <div className="container mx-auto px-4">
          <h2 id="reviews-title" className="font-serif text-3xl text-center mb-16 text-foreground">Loved by You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The Majestic Flora Necklace is stunning. It has the weight and feel of solid gold without the markup. I receive compliments every time I wear it.",
                name: "Sarah C."
              },
              {
                text: "Finally found huggies that don't irritate my sensitive ears. They haven't tarnished despite daily wear. Highly recommend!",
                name: "Jessica M."
              },
              {
                text: "The packaging alone made it feel like a luxury experience. The earrings are delicate yet make a statement. Will be buying more.",
                name: "Elena R."
              }
            ].map((review, index) => (
              <div key={index} className="bg-background p-10 flex flex-col items-center text-center shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-border/20">
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-foreground/80 italic font-serif leading-relaxed flex-grow mb-6">"{review.text}"</p>
                <p className="uppercase tracking-widest text-xs font-semibold">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reels Strip */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 mb-10 text-center">
          <h2 className="font-serif text-3xl text-foreground mb-3">#VelmoraFine</h2>
          <p className="text-sm text-muted-foreground uppercase tracking-widest">Tag us to be featured</p>
        </div>
        
        <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar snap-x pb-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="flex-none w-64 aspect-[9/16] relative snap-center group">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Customer styling"
                data-strk-img-id={`ugc-img-${item}`}
                data-strk-img="instagram reel style authentic lifestyle photo woman wearing gold jewelry selfie"
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              <p className="absolute bottom-4 left-4 right-4 text-white font-serif italic text-sm drop-shadow-md z-10 opacity-90">
                A daily essential. ✨
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-accent text-accent-foreground mt-10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join the Inner Circle</h2>
          <p className="mb-8 opacity-90 font-light">Sign up to receive 10% off your first order, plus early access to new collections and exclusive events.</p>
          
          <form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-grow px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-white rounded-none"
            />
            <Button type="submit" className="bg-white text-accent hover:bg-white/90 rounded-none px-8 py-6 uppercase tracking-widest text-sm sm:mt-0 mt-4">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
