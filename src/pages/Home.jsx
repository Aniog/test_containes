import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCartStore } from '@/store/useCartStore';

const ugcItems = [
  { id: 'ugc-1', imgId: 'ugc-1-img', titleId: 'ugc-1-title' },
  { id: 'ugc-2', imgId: 'ugc-2-img', titleId: 'ugc-2-title' },
  { id: 'ugc-3', imgId: 'ugc-3-img', titleId: 'ugc-3-title' },
  { id: 'ugc-4', imgId: 'ugc-4-img', titleId: 'ugc-4-title' },
  { id: 'ugc-5', imgId: 'ugc-5-img', titleId: 'ugc-5-title' },
  { id: 'ugc-6', imgId: 'ugc-6-img', titleId: 'ugc-6-title' }
];

const categoryItems = [
  { id: 'cat-earrings', title: 'Earrings', imgId: 'cat-earrings-img', titleId: 'cat-earrings-title' },
  { id: 'cat-necklaces', title: 'Necklaces', imgId: 'cat-necklaces-img', titleId: 'cat-necklaces-title' },
  { id: 'cat-huggies', title: 'Huggies', imgId: 'cat-huggies-img', titleId: 'cat-huggies-title' }
];

const Home = () => {
  const containerRef = useRef(null);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-background w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-black/10"
          data-strk-bg-id="hero-bg-2a3b4c"
          data-strk-bg="[hero-subtitle] [hero-title] jewelry model editorial warm"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="relative z-10 text-center text-primary-foreground max-w-3xl px-6 flex flex-col items-center mt-16">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light mb-10 max-w-xl text-primary-foreground/90">
            Demi-fine jewelry designed for the modern muse. Timeless pieces to layer, love, and live in every day.
          </p>
          <Link 
            to="/shop" 
            className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 uppercase tracking-[0.2em] text-sm font-medium hover:bg-primary/90 transition-all duration-300"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-[#fbfaf8] border-b border-border/60 py-4 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-xs uppercase tracking-widest text-[#2b2624]/60 font-medium">
          <span>Free Worldwide Shipping</span>
          <span className="w-1 h-1 rounded-full bg-primary/40"></span>
          <span>30-Day Returns</span>
          <span className="w-1 h-1 rounded-full bg-primary/40"></span>
          <span>18K Gold Plated</span>
          <span className="w-1 h-1 rounded-full bg-primary/40"></span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 px-6 container mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-border/60 pb-6">
          <div>
            <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif">The Bestsellers</h2>
            <p id="bestsellers-subtitle" className="text-muted-foreground mt-2 font-light">Our most loved everyday pieces.</p>
          </div>
          <Link to="/collections/bestsellers" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest link-underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {products.slice(0, 5).map((product) => (
            <div key={product.id} className="group relative flex flex-col">
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                <img 
                  alt={product.name}
                  data-strk-img-id={product.mainImgId}
                  data-strk-img={`[${product.titleId}] jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img 
                  alt={`${product.name} worn`}
                  data-strk-img-id={product.hoverImgId}
                  data-strk-img={`[${product.titleId}] jewelry model worn`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                
                {/* Quick Add Button */}
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addItem(product);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur py-3 text-xs uppercase tracking-widest font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-primary-foreground border border-border"
                >
                  Quick Add
                </button>
              </Link>
              <h3 id={product.titleId} className="font-serif text-lg tracking-wide uppercase leading-tight line-clamp-1">
                {product.name}
              </h3>
              <p className="text-foreground/80 mt-1">${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-card px-6">
        <div className="container mx-auto">
          <h2 id="categories-title" className="text-3xl md:text-4xl font-serif text-center mb-16">Shop by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {categoryItems.map((cat) => (
              <Link 
                key={cat.id}
                to={`/shop?category=${cat.title}`}
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                <img 
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.titleId}] jewelry category editorial`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <h3 id={cat.titleId} className="text-primary-foreground font-serif text-3xl md:text-4xl tracking-widest uppercase">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* UGC / Editorial Reel */}
      <section className="py-24 border-y border-border/60 overflow-hidden bg-[#fbfaf8]">
        <div className="container mx-auto px-6 mb-12 text-center">
          <h2 id="ugc-title" className="text-2xl md:text-3xl font-serif mb-4">Seen on You</h2>
          <p className="font-light text-muted-foreground">Discover how our muses style their Velmora pieces.</p>
        </div>
        
        <div className="flex gap-4 px-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {ugcItems.map((ugc) => (
            <div key={ugc.id} className="relative flex-none w-[280px] md:w-[320px] aspect-[9/16] snap-center group">
              <span id={ugc.titleId} className="hidden">styling aesthetic jewelry portrait</span>
              <img 
                alt="Styled jewelry"
                data-strk-img-id={ugc.imgId}
                data-strk-img={`[${ugc.titleId}] styling aesthetic jewelry portrait`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-primary-foreground">
                <p className="font-serif italic text-lg leading-tight">"Obsessed with how these stack perfectly."</p>
                <p className="text-xs tracking-widest uppercase mt-4 opacity-80">Shop the look</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="flex-1 w-full aspect-[4/5] relative">
              <img 
                alt="Velmora Studio"
                data-strk-img-id="brand-story-img"
                data-strk-img="[story-title] jewelry craftsmanship studio editorial"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover grayscale-[0.2]"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center text-center md:text-left">
              <h2 id="story-title" className="text-4xl font-serif mb-6 leading-tight">
                Quiet Luxury for the Everyday
              </h2>
              <p className="text-muted-foreground font-light mb-8 leading-relaxed text-lg">
                Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. We design demi-fine pieces crafted in 18K gold vermeil and sterling silver, bringing editorial aesthetics to your daily uniform.
              </p>
              <Link 
                to="/about" 
                className="inline-block border border-foreground/20 text-foreground px-8 py-4 uppercase tracking-[0.2em] text-sm font-medium hover:bg-foreground hover:text-background transition-colors w-fit mx-auto md:mx-0"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#fbfaf8] border-t border-border/60">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              {
                text: "The quality is simply unmatched. My Golden Sphere Huggies haven't left my ears since they arrived.",
                name: "Sarah M."
              },
              {
                text: "Finally found demi-fine jewelry that doesn't tarnish. Beautiful packaging and stunning craftsmanship.",
                name: "Elena R."
              },
              {
                text: "I get compliments on the Vivid Aura cuff daily. It looks and feels like solid gold luxury.",
                name: "Chloe T."
              }
            ].map((review, idx) => (
              <div key={idx} className="flex flex-col items-center px-8 pt-8 md:pt-0">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-serif text-lg italic mb-6 leading-relaxed">"{review.text}"</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Join the Inner Circle</h2>
          <p className="mb-10 font-light text-primary-foreground/90 text-lg">
            Subscribe to receive 10% off your first order, plus early access to new collections and exclusive editorial content.
          </p>
          <form className="w-full flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-1 bg-transparent border-b border-primary-foreground/40 px-4 py-3 pb-2 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground transition-colors rounded-none"
              required
            />
            <button 
              type="submit" 
              className="mt-4 md:mt-0 bg-primary-foreground text-primary px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-primary-foreground/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;