import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { SEED_PRODUCTS } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';
// Using empty config since we don't have strk-img-config.json yet
const strkImgConfig = {};

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only load if SDK is available
    if (ImageHelper && ImageHelper.loadImages && containerRef.current) {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const bestsellers = SEED_PRODUCTS.slice(0, 4);

  return (
    <div ref={containerRef} className="pb-20">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/20 z-0" />
        
        <div className="relative z-10 text-center text-white px-6 w-full max-w-4xl">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl mb-6">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto">
            Demi-fine gold jewelry for the modern narrative. Designed to be layered, lived in, and loved.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-accent text-accent-foreground hover:bg-white hover:text-foreground px-10 py-4 tracking-widest uppercase text-sm transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center text-xs tracking-widest uppercase text-muted-foreground gap-4">
          <span className="flex-1 text-center min-w-[200px]">Free Worldwide Shipping</span>
          <span className="hidden md:inline text-border">|</span>
          <span className="flex-1 text-center min-w-[200px]">30-Day Returns</span>
          <span className="hidden md:inline text-border">|</span>
          <span className="flex-1 text-center min-w-[200px]">18K Gold Plated</span>
          <span className="hidden md:inline text-border">|</span>
          <span className="flex-1 text-center min-w-[200px]">Hypoallergenic</span>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="font-serif text-4xl">Bestsellers</h2>
          <Link to="/shop" className="hidden md:flex items-center text-sm tracking-widest uppercase hover:text-accent transition-colors">
            View All <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
            <Link to="/shop" className="inline-flex items-center text-sm tracking-widest uppercase hover:text-accent transition-colors border-b border-foreground pb-1">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
        </div>
      </section>

      {/* UGC / Editorial Row */}
      <section className="py-16 overflow-hidden bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
            <h2 id="ugc-title" className="font-serif text-3xl">Spotted in Velmora</h2>
            <p className="text-muted-foreground mt-4">Tag @velmorajewelry to be featured.</p>
        </div>
        
        {/* Horizontal scroll strip */}
        <div className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
            {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex-none w-[280px] aspect-[9/16] relative snap-center group select-none">
                    <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`Editorial ${item}`}
                        className="w-full h-full object-cover"
                        data-strk-img-id={`ugc-img-${item}`}
                        data-strk-img="[ugc-title] everyday wear"
                        data-strk-img-ratio="9x16"
                        data-strk-img-width="400"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-serif italic text-xl">Shop the Look</span>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                  { name: 'Earrings', id: 'cat-earrings' },
                  { name: 'Necklaces', id: 'cat-necklaces' },
                  { name: 'Huggies', id: 'cat-huggies' }
              ].map(cat => (
                  <Link to={`/shop?category=${cat.name.toLowerCase()}`} key={cat.id} className="group relative aspect-[4/5] overflow-hidden block">
                       <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={cat.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-strk-img-id={`cat-img-${cat.id}`}
                        data-strk-img={`[cat-title-${cat.id}]`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="600"
                      />
                      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                          <h3 id={`cat-title-${cat.id}`} className="text-white font-serif text-3xl uppercase tracking-widest bg-black/20 px-8 py-4 backdrop-blur-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{cat.name}</h3>
                      </div>
                  </Link>
              ))}
          </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-[4/5] relative">
                  <div 
                      className="absolute inset-0 bg-cover bg-center"
                      data-strk-bg-id="story-bg-1"
                      data-strk-bg="[story-title] [story-desc]"
                      data-strk-bg-ratio="4x5"
                      data-strk-bg-width="800"
                  />
              </div>
              <div className="max-w-xl">
                  <h2 id="story-title" className="font-serif text-4xl md:text-5xl mb-8">The Art of the Everyday</h2>
                  <p id="story-desc" className="text-primary-foreground/80 leading-relaxed mb-8">
                      We believe fine jewelry shouldn't be reserved for special occasions. Velmora was born from a desire to create demi-fine pieces that bridge the gap between costume jewelry and solid gold heirlooms.
                  </p>
                  <p className="text-primary-foreground/80 leading-relaxed mb-12">
                      Each piece is thoughtfully designed to be layered, mixed, and lived in. Crafted with a thick layer of 18k gold over a hypoallergenic base, delivering the look and feel of luxury at an accessible price point.
                  </p>
                  <Link to="/about" className="border-b border-accent text-accent hover:text-white hover:border-white pb-1 tracking-widest uppercase text-sm transition-colors cursor-pointer">
                      Read Our Story
                  </Link>
              </div>
          </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-background">
          <div className="max-w-5xl mx-auto text-center">
               <h2 className="font-serif text-3xl mb-16">Words from our Community</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                   {[
                       { quote: "Obsessed with my Golden Sphere Huggies. I haven't taken them off since they arrived. Amazing quality.", name: "Sarah M." },
                       { quote: "The packaging alone felt so luxurious. Bought a set as a gift for my sister and she was blown away.", name: "Elena R." },
                       { quote: "Finally, jewelry that doesn't tarnish after one wear. The weight and color are perfect.", name: "Jessica T." }
                   ].map((test, i) => (
                       <div key={i} className="flex flex-col items-center">
                           <div className="flex text-accent mb-6">
                               {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
                           </div>
                           <p className="font-serif italic text-lg leading-relaxed mb-6">"{test.quote}"</p>
                           <p className="tracking-widest uppercase text-xs text-muted-foreground">- {test.name}</p>
                       </div>
                   ))}
               </div>
          </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-24 bg-muted text-center px-6">
          <div className="max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl mb-4">Join the Inner Circle</h2>
              <p className="text-muted-foreground mb-10">Sign up to receive 10% off your first order, plus early access to new collections and exclusive events.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="flex-1 bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-3 px-4 transition-colors"
                      required
                  />
                  <button type="submit" className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 tracking-widest uppercase text-sm transition-colors">
                      Subscribe
                  </button>
              </form>
          </div>
      </section>

    </div>
  );
};

export default Home;