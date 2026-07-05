import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pb-20">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 z-0 bg-secondary"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-sub] [hero-title] close up warm lit gold jewelry on model editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 z-0 bg-background/60 backdrop-blur-[2px]" />
        
        <div className="relative z-10 max-w-2xl px-4 mt-20">
          <p id="hero-sub" className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-foreground">Velmora Fine Jewelry</p>
          <h1 id="hero-title" className="text-5xl md:text-7xl font-serif mb-8 text-foreground drop-shadow-sm">Crafted to be Treasured</h1>
          <Button asChild size="lg" className="px-8 hover:bg-primary/90 transition-colors">
            <Link to="/collection">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-primary-foreground py-4 border-b border-border/10">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs md:text-sm tracking-widest uppercase font-medium">
            <li>Free Worldwide Shipping</li>
            <li className="hidden md:inline">•</li>
            <li>30-Day Returns</li>
            <li className="hidden md:inline">•</li>
            <li>18K Gold Plated</li>
            <li className="hidden md:inline">•</li>
            <li>Hypoallergenic</li>
          </ul>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif">Bestsellers</h2>
          <Link to="/collection" className="text-sm uppercase tracking-widest border-b border-foreground hover:text-primary hover:border-primary transition-colors pb-1">
            Shop All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.slice(0, 5).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-12 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, i) => (
            <Link 
              key={cat} 
              to={`/collection?category=${cat}`}
              className="group relative aspect-square overflow-hidden bg-muted flex items-center justify-center"
            >
              <img 
                data-strk-img-id={`cat-${i}`}
                data-strk-img={`[cat-title-${i}] fine gold jewelry editorial`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/50 transition-colors duration-300" />
              <h3 id={`cat-title-${i}`} className="relative z-10 text-background font-serif text-3xl uppercase tracking-widest drop-shadow-md">
                {cat}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Reel-style UGC Row */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-12">
          <h2 id="ugc-title" className="text-3xl md:text-4xl font-serif text-center">Spotted in Velmora</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x px-4 md:px-8 no-scrollbar scroll-smooth">
          {[
            "Weekend stack sorted.",
            "Never taking these off.",
            "Golden hour glow.",
            "The perfect everyday pieces.",
            "Layered to perfection."
          ].map((caption, i) => (
            <div key={i} className="relative flex-none w-[280px] md:w-[320px] aspect-[9/16] bg-muted snap-center rounded-lg overflow-hidden group">
              <img 
                data-strk-img-id={`ugc-${i}`}
                data-strk-img={`[ugc-caption-${i}] aesthetic women wearing gold jewelry lifestyle instagram`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Lifestyle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <p id={`ugc-caption-${i}`} className="absolute bottom-6 left-6 text-foreground font-serif text-lg italic right-6 text-pretty shrink-0 z-10 font-medium">
                "{caption}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="w-full md:w-1/2 aspect-[4/5] bg-muted relative overflow-hidden">
            <img 
              data-strk-img-id="story-img-1"
              data-strk-img="[story-title] artisan crafting fine gold jewelry editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 max-w-lg">
            <p className="text-secondary-foreground uppercase tracking-widest text-sm mb-4">The Brand</p>
            <h2 id="story-title" className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Elevating<br/>The Everyday.</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe that fine jewelry shouldn't be reserved for special occasions. Velmora was founded on the idea that every day is worth celebrating. Our demi-fine pieces are crafted with 18K gold vermeil to ensure lasting brilliance, offering the feeling of luxury at an accessible price point.
            </p>
            <Button asChild variant="outline">
              <Link to="#">Read Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 tracking-wide text-center">
          <h2 className="text-3xl font-serif mb-16">Loved by You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            {[
              { name: "Sarah J.", text: "The quality is absolutely stunning. I've worn my huggies every day for months and they still look brand new." },
              { name: "Emily R.", text: "Beautiful packaging and even more beautiful jewelry. It feels so much more expensive than it is." },
              { name: "Michelle T.", text: "Finally found my go-to jewelry brand. The designs are exactly what I've been looking for—elegant and understated." }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex gap-1 text-primary mb-6">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <p className="font-serif italic text-lg mb-6 leading-relaxed">"{review.text}"</p>
                <p className="text-sm uppercase tracking-widest">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif">Join the Insider List</h2>
          <p className="text-muted-foreground">Sign up to receive 10% off your first order, plus exclusive access to new drops and private sales.</p>
          <form 
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8"
            onSubmit={(e) => { e.preventDefault(); console.log("Thanks for subscribing!"); }}
          >
            <Input 
              type="email" 
              placeholder="Email address" 
              className="rounded-none border-border focus-visible:ring-primary h-12"
              required
            />
            <Button type="submit" className="rounded-none h-12 px-8 uppercase tracking-widest text-xs">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

    </div>
  );
}