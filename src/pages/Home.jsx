import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

// Reusing ImageHelper locally for the page to ensure scans run when components mount.
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);
  const addItem = useCartStore(state => state.addItem);
  const setIsOpen = useCartStore(state => state.setIsOpen);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  const handleAddToCart = (product) => {
    addItem(product, 1, 'gold');
    toast.success(`${product.name} added to cart!`);
    setIsOpen(true);
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center -mt-20">
        <div 
          className="absolute inset-0 w-full h-full"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-subtitle] gold jewelry model"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center mt-12">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide mb-6">
            Crafted to be <br className="hidden md:block"/> Treasured
          </h1>
          <p id="hero-subtitle" className="text-sm md:text-lg tracking-wider uppercase font-light mb-10 max-w-xl">
            Demi-fine gold jewelry for everyday elegance.
          </p>
          <Link to="/shop">
            <Button size="lg" className="px-10 py-6 uppercase tracking-widest text-xs bg-white text-black hover:bg-white/90 rounded-none border-none">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary/50 border-b border-border py-4">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs uppercase tracking-widest text-foreground/70">
            <li>Free Worldwide Shipping</li>
            <li className="hidden sm:block">•</li>
            <li>30-Day Returns</li>
            <li className="hidden sm:block">•</li>
            <li>18K Gold Plated</li>
            <li className="hidden sm:block">•</li>
            <li>Hypoallergenic</li>
          </ul>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl mb-4">Current Obsessions</h2>
            <p className="text-muted-foreground tracking-widest uppercase text-xs">Our Most Loved Pieces</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12">
            {bestsellers.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <Link to={`/product/${product.id}`} className="relative aspect-[4/5] bg-secondary mb-4 overflow-hidden block">
                  <img
                    alt={product.name}
                    data-strk-img-id={`bestseller-${product.id}`}
                    data-strk-img={`[product-${product.id}-title] [bestsellers-title]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* "Add to Cart" Quick Action Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <Button 
                      className="w-full uppercase text-[10px] tracking-widest bg-background/90 text-foreground hover:bg-background backdrop-blur-sm shadow-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                    >
                      Quick Add
                    </Button>
                  </div>
                </Link>
                <div className="text-center flex flex-col flex-1">
                  <h3 id={`product-${product.id}-title`} className="font-serif uppercase tracking-wider text-sm mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm font-light">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel Section */}
      <section className="bg-[#faf9f8] py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-center">Spotted in Velmora</h2>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex gap-4 px-4 md:px-6 overflow-x-auto pb-8 snap-x snap-mandatory">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="relative w-64 md:w-80 flex-shrink-0 aspect-[9/16] snap-start bg-secondary rounded-lg overflow-hidden group cursor-pointer shadow-sm">
              <img
                alt={`Instagram style ${i}`}
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img={`[ugc-title] woman wearing delicate gold jewelry`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-white/90 text-lg leading-snug">
                  "Everyday <br/>Essentials"
                </p>
                <p className="text-white/60 text-xs mt-2 uppercase tracking-wide">@stylemuse_{i}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Link to="/shop?category=earrings" className="group relative aspect-[3/4] overflow-hidden bg-secondary">
              <img
                alt="Earrings"
                data-strk-img-id="cat-earrings"
                data-strk-img="gold earrings collection close up"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-white text-3xl uppercase tracking-widest drop-shadow-md">Earrings</h3>
              </div>
            </Link>

            <Link to="/shop?category=necklaces" className="group relative aspect-[3/4] overflow-hidden bg-secondary mt-12 md:mt-0">
              <img
                alt="Necklaces"
                data-strk-img-id="cat-necklaces"
                data-strk-img="gold necklaces layering elegant"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-white text-3xl uppercase tracking-widest drop-shadow-md">Necklaces</h3>
              </div>
            </Link>

            <Link to="/shop?category=huggies" className="group relative aspect-[3/4] overflow-hidden bg-secondary mt-12 md:mt-0">
              <img
                alt="Huggies"
                data-strk-img-id="cat-huggies"
                data-strk-img="gold huggie hoops ears delicate"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-white text-3xl uppercase tracking-widest drop-shadow-md">Huggies</h3>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="bg-[#1f201e] text-white flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
          <img
            alt="Velmora Studio"
            data-strk-img-id="brand-story-img"
            data-strk-img="jewelry atelier artist workshop warm light"
            data-strk-img-ratio="1x1"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24">
          <div className="max-w-md">
            <p className="uppercase tracking-widest text-xs mb-6 text-white/70">The Atelier</p>
            <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">Elevating<br/>The Everyday</h2>
            <p className="font-light text-white/80 leading-relaxed mb-10 text-sm">
              We believe fine jewelry shouldn't wait in a box for special occasions. 
              Our demi-fine collection is crafted with intention—pairing responsibly sourced 
              materials with enduring design to create pieces you’ll want to wear and layer, every single day.
            </p>
            <Link to="#" className="inline-block uppercase tracking-widest text-xs border-b border-white pb-1 hover:text-white/70 transition-colors">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {[
              { id: 1, name: "Claire H.", text: "The quality is unbelievable for the price point. The Golden Sphere Huggies haven't left my ears since I bought them." },
              { id: 2, name: "Jessica T.", text: "Fast shipping, beautiful packaging, and the necklace is stunning. Received so many compliments already!" },
              { id: 3, name: "Amanda M.", text: "It's exactly as pictured—warm, refined, and elegant. Velmora has become my go-to for gifting." }
            ].map((review) => (
              <div key={review.id} className="flex flex-col items-center">
                <div className="flex space-x-1 mb-6 text-foreground">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-serif text-lg leading-relaxed mb-6">"{review.text}"</p>
                <p className="uppercase tracking-widest text-xs text-muted-foreground">- {review.name}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Newsletter Capture */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join The Insider List</h2>
          <p className="text-muted-foreground font-light mb-10 text-sm">
            Sign up to receive 10% off your first order, plus early access to new collections and exclusive events.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); toast.success("Subscribed successfully!"); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="flex-1 bg-transparent border-b border-foreground/30 py-3 px-4 focus:outline-none focus:border-foreground transition-colors text-sm"
            />
            <Button type="submit" className="mt-4 sm:mt-0 sm:ml-4 rounded-none uppercase tracking-widest text-xs px-8 h-12">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;