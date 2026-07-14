import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { seedProducts } from '../data/products';

export function Home() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      {/*...rest of home component code...*/}
      {/* 1 & 2. Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-black/20"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className="relative z-20 text-center text-white px-4 flex flex-col items-center mt-16 max-w-3xl mx-auto">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">
            Crafted to be <br/><i className="italic font-light text-primary-foreground/90">Treasured</i>
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-sans tracking-wide mb-10 text-white/90">
            Demi-fine gold jewelry for the modern romantic.
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-6 text-sm uppercase tracking-widest transition-transform hover:-translate-y-1">
            <Link to="/collection">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="bg-secondary py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-xs text-foreground uppercase tracking-widest font-medium text-center gap-y-4">
            <span className="w-1/2 md:w-auto">Free Worldwide Shipping</span>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <span className="w-1/2 md:w-auto">30-Day Returns</span>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <span className="w-1/2 md:w-auto">18K Gold Plated</span>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <span className="w-1/2 md:w-auto">Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif uppercase tracking-widest text-foreground">Bestsellers</h2>
          <Link to="/collection" className="hidden md:flex items-center text-sm font-medium hover:text-primary transition-colors tracking-widest uppercase pb-1 border-b border-transparent hover:border-primary">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {seedProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-accent mb-4">
                <img
                  alt={product.name}
                  data-strk-img-id={`bestseller-img-${product.id}`}
                  data-strk-img={`[product-${product.id}-desc] [product-${product.id}-name]`}
                  data-strk-img-ratio="2x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Button 
                    className="w-full bg-white text-foreground hover:bg-neutral-100 rounded-none shadow-sm uppercase tracking-widest text-xs"
                    onClick={(e) => {
                      e.preventDefault();
                      addItem({ ...product, quantity: 1, variant: 'gold' });
                    }}
                  >
                    Quick Add
                  </Button>
                </div>
              </Link>
              <div className="text-center">
                <h3 id={`product-${product.id}-name`} className="font-serif text-lg tracking-widest uppercase mb-1">
                  <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <p id={`product-${product.id}-desc`} className="hidden">{product.description}</p>
                <p className="text-muted-foreground">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center md:hidden">
            <Button variant="outline" asChild className="rounded-none uppercase tracking-widest text-xs px-8">
                <Link to="/collection">View All</Link>
            </Button>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 id="categories-title" className="text-3xl md:text-4xl font-serif text-center uppercase tracking-widest mb-16 text-foreground">Curated Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Earrings', 'Necklaces', 'Huggies'].map((category, idx) => (
              <Link to={`/collection?category=${category.toLowerCase()}`} key={category} className="group relative aspect-square overflow-hidden block bg-accent">
                <img
                  alt={`${category} category`}
                  data-strk-img-id={`cat-img-${idx}`}
                  data-strk-img={`${category} jewelry gold fine demi-fine`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl md:text-3xl text-white uppercase tracking-widest">{category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="py-0 flex flex-col lg:flex-row min-h-[600px] border-y border-border/50">
        <div className="w-full lg:w-1/2 relative bg-accent min-h-[400px] lg:min-h-full">
           <div 
             className="absolute inset-0"
             data-strk-bg-id="story-bg"
             data-strk-bg="[story-subtitle] [story-title]"
             data-strk-bg-ratio="3x4"
             data-strk-bg-width="1200"
            />
        </div>
        <div className="w-full lg:w-1/2 flex items-center bg-background px-8 py-20 lg:p-24">
          <div className="max-w-lg">
            <h2 id="story-title" className="text-3xl md:text-4xl font-serif uppercase tracking-widest mb-6 text-foreground">The Velmora Vision</h2>
            <p id="story-subtitle" className="text-muted-foreground leading-relaxed mb-10">
              We believe that fine jewelry shouldn't be reserved for special occasions. It should be lived in, layered, and loved every single day. <br/><br/>
              Our pieces are crafted using vermeil and solid 18k gold accents, bridging the gap between inaccessible luxury and fast fashion. Designed for the modern woman who buys jewelry for herself.
            </p>
            <Button variant="outline" asChild className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-widest text-xs px-8 h-12">
               <Link to="#">Discover Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

       {/* 5. UGC / Reel Style Row */}
      <section className="py-24 max-w-[1600px] mx-auto overflow-hidden pl-4 sm:pl-6 lg:pl-8">
        <h2 id="ugc-title" className="text-2xl font-serif uppercase tracking-widest mb-10 text-foreground">As seen on you <span className="text-muted-foreground lowercase text-sm ml-2 tracking-normal font-sans">@velmora_jewelry</span></h2>
        
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="flex-none w-[280px] aspect-[9/16] relative rounded-lg overflow-hidden snap-start bg-accent group cursor-pointer">
              <img
                alt="Customer wearing jewelry"
                 data-strk-img-id={`ugc-img-${i}`}
                data-strk-img="woman wearing gold jewelry sunny natural lifestyle [ugc-title]"
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
               <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-white font-serif italic text-lg leading-tight blur-[0.5px] group-hover:blur-none transition-all">
                    "{["Never taking these off.", "The perfect everyday staple.", "So many compliments!", "Obsessed with the quality.", "My new favorite stack.", "Gifting these to everyone."][i-1]}"
                  </p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="testimonials-title" className="text-3xl font-serif uppercase tracking-widest mb-16 text-foreground">Words of Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { text: "Such stunning quality. I wear my huggies in the shower and they haven't tarnished a bit.", name: "Sarah M." },
              { text: "The packaging alone felt so luxurious. The necklace sits perfectly on my collarbone.", name: "Elena R." },
              { text: "Finally found elegant, minimal pieces that don't cost a fortune. I'm a customer for life.", name: "Jessica T." }
            ].map((review, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="flex gap-1 mb-6 text-primary">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-lg font-serif italic leading-relaxed mb-6">"{review.text}"</p>
                <p className="text-sm font-medium tracking-widest uppercase">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
         <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-widest mb-4">Join the Inner Circle</h2>
            <p className="text-sm tracking-wide mb-10 opacity-90">Enjoy 10% off your first order, plus early access to new collections and exclusive events.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
               <div className="flex-1 bg-transparent border-b border-primary-foreground/50 relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-transparent py-3 px-2 outline-none placeholder:text-primary-foreground/60 text-sm focus:border-primary-foreground transition-colors"
                    required
                  />
               </div>
               <Button type="submit" variant="ghost" className="rounded-none border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary uppercase tracking-widest text-xs px-8 h-12 shrink-0">
                 Subscribe
               </Button>
            </form>
         </div>
      </section>

    </div>
  );
}