import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);
  const { addItem } = useCartStore();

  useEffect(() => {
    // We will create the strk-img-config.json mock later if needed or rely on the build
    try {
      if (typeof ImageHelper !== 'undefined') {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    } catch (e) {
      console.error("Image loader error", e);
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* 1 & 2. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-secondary"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="[hero-title] [hero-subtitle] model wearing gold jewelry"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 z-10 bg-black/30" />
        
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl tracking-wide text-primary-foreground mb-6 uppercase">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-primary-foreground/90 font-light max-w-xl mx-auto mb-10">
            Demi-fine jewelry for the modern romantic. Made to wear everywhere, designed to keep forever.
          </p>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 uppercase tracking-widest px-8">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <section className="border-b border-border py-4 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-medium text-center">
            <li>Free Worldwide Shipping</li>
            <li className="hidden md:block">•</li>
            <li>30-Day Returns</li>
            <li className="hidden md:block">•</li>
            <li>18K Gold Plated</li>
            <li className="hidden md:block">•</li>
            <li>Hypoallergenic</li>
          </ul>
        </div>
      </section>

      {/* 4. Bestsellers */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-title" className="text-3xl md:text-4xl uppercase tracking-wider mb-2">Bestsellers</h2>
              <p className="text-muted-foreground">Our most loved everyday pieces.</p>
            </div>
            <Link to="/shop" className="hidden md:block text-sm uppercase tracking-widest underline underline-offset-4 hover:text-muted-foreground transition-colors">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            {PRODUCTS.slice(0, 5).map((product) => (
              <div key={product.id} className="group flex flex-col">
                <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary block">
                  <img
                    alt={product.name}
                    data-strk-img-id={`product-${product.id}-main`}
                    data-strk-img={`[product-${product.id}-name] jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Button 
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product);
                      }} 
                      className="w-full bg-background/90 text-foreground hover:bg-background backdrop-blur-sm shadow-sm"
                    >
                      Quick Add
                    </Button>
                  </div>
                </Link>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-start gap-2">
                    <h3 id={`product-${product.id}-name`} className="font-serif uppercase tracking-wider text-base leading-snug">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h3>
                    <span className="font-medium tracking-wide">${product.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. UGC / Editorial Strip */}
      <section className="py-24 bg-card overflow-hidden border-y border-border">
        <div className="container mx-auto px-4 max-w-7xl mb-12 text-center">
          <h2 id="ugc-title" className="text-3xl md:text-4xl uppercase tracking-wider">In Real Life</h2>
          <p className="text-muted-foreground mt-2">How you wear Velmora.</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto pb-8 gap-4 px-4 md:px-8 snap-x snap-mandatory hide-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="relative w-64 md:w-80 flex-none aspect-[9/16] bg-secondary snap-center rounded-sm overflow-hidden group">
              <img
                alt="Customer wearing jewelry"
                data-strk-img-id={`ugc-img-${item}`}
                data-strk-img={`woman wearing aesthetic gold jewelry editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                className="object-cover w-full h-full"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <p className="text-primary-foreground font-serif text-xl">"My new daily uniform."</p>
                <p className="text-primary-foreground/80 text-xs font-sans mt-2 uppercase tracking-widest">Shop the look</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {['Earrings', 'Necklaces', 'Huggies'].map((cat, i) => (
              <Link key={cat} to={`/shop?category=${cat}`} className="relative group aspect-[4/5] bg-secondary overflow-hidden">
                <img
                  alt={`${cat} category`}
                  data-strk-img-id={`cat-img-${i}`}
                  data-strk-img={`gold ${cat} macro shot`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-primary-foreground text-3xl font-serif uppercase tracking-widest">{cat}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="aspect-[3/4] bg-secondary relative">
               <img
                  alt="Velmora Studio"
                  data-strk-img-id={`story-img-main`}
                  data-strk-img={`jewelry making studio or elegant lifestyle interior`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1000"
                  className="object-cover w-full h-full"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
            </div>
            <div className="flex flex-col items-start max-w-md">
              <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Our Heritage</span>
              <h2 className="text-4xl md:text-5xl uppercase tracking-wider mb-6 leading-tight">Elevating the Everyday</h2>
              <p className="text-muted-foreground font-serif text-lg leading-relaxed mb-8">
                We believe fine jewelry shouldn't be locked away in a safe. At Velmora, we create demi-fine pieces crafted to be worn, loved, and lived in. Meticulously designed with premium materials that withstand the test of time, without the traditional markup.
              </p>
              <Button variant="outline" asChild className="uppercase tracking-widest">
                <Link to="/about">Read Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-center text-3xl uppercase tracking-wider mb-16">Notes from our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { text: "The quality is absolutely stunning. I haven't taken the Aura ear cuff off since it arrived.", author: "Sarah M." },
              { text: "Quiet luxury perfectly captured. The packaging alone felt so premium. Will be gifting these.", author: "Elena R." },
              { text: "Finally, everyday pieces that don't tarnish. The Golden Sphere huggies are my new go-to.", author: "Chloe T." }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex gap-1 text-accent mb-6">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-serif text-xl leading-relaxed mb-6">"{review.text}"</p>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">— {review.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="py-32 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl flex flex-col items-center">
          <h2 className="text-4xl font-serif uppercase tracking-widest mb-4">Join the Collective</h2>
          <p className="text-primary-foreground/80 mb-10 max-w-md">Subscribe to receive 10% off your first order, plus early access to new collections and exclusive events.</p>
          <form className="flex w-full max-w-md flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border border-primary-foreground/30 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground rounded-none"
              required
            />
            <Button type="submit" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 uppercase tracking-widest py-3 px-8 rounded-none">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;