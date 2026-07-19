import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const seedProducts = [
  { id: 1, name: 'VIVID AURA JEWELS', price: 42, type: 'EAR CUFF', imgId: 'product-1-vivid-aura', titleId: 'prod-1-title', descId: 'prod-1-desc' },
  { id: 2, name: 'MAJESTIC FLORA NECTAR', price: 68, type: 'NECKLACE', imgId: 'product-2-flora', titleId: 'prod-2-title', descId: 'prod-2-desc' },
  { id: 3, name: 'GOLDEN SPHERE HUGGIES', price: 38, type: 'HUGGIES', imgId: 'product-3-sphere', titleId: 'prod-3-title', descId: 'prod-3-desc' },
  { id: 4, name: 'AMBER LACE EARRINGS', price: 54, type: 'EARRINGS', imgId: 'product-4-amber', titleId: 'prod-4-title', descId: 'prod-4-desc' },
  { id: 5, name: 'ROYAL HEIRLOOM SET', price: 95, type: 'SET', imgId: 'product-5-heirloom', titleId: 'prod-5-title', descId: 'prod-5-desc' },
];

const ugcItems = [
  { id: 1, handle: '@jewel.lover', imgId: 'ugc-1-ear', text: "Can't take these off" },
  { id: 2, handle: '@sarah.styles', imgId: 'ugc-2-neck', text: 'Everyday gold' },
  { id: 3, handle: '@golden.hour', imgId: 'ugc-3-stack', text: 'The perfect stack' },
  { id: 4, handle: '@minimal.chic', imgId: 'ugc-4-sun', text: 'Catching the sun' },
  { id: 5, handle: '@luxe.everyday', imgId: 'ugc-5-dinner', text: 'Date night ready' },
];

const categories = [
  { id: 'earrings', name: 'Earrings', imgId: 'cat-earrings' },
  { id: 'necklaces', name: 'Necklaces', imgId: 'cat-necklaces' },
  { id: 'huggies', name: 'Huggies', imgId: 'cat-huggies' },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (ImageHelper && ImageHelper.loadImages && containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            data-strk-bg-id="hero-bg-main"
            data-strk-bg="[hero-sub] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            style={{ backgroundColor: '#2a2015' }} // Fallback
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4 flex flex-col items-center">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 max-w-4xl mx-auto drop-shadow-lg">
            Crafted to be Treasured
          </h1>
          <p id="hero-sub" className="text-lg md:text-xl font-light mb-10 max-w-xl mx-auto drop-shadow-md">
            Premium demi-fine gold jewelry for the modern romantic.
          </p>
          <Link 
            to="/shop" 
            className="bg-primary text-primary-foreground hover:bg-white hover:text-foreground transition-colors px-10 py-4 font-medium uppercase tracking-widest text-sm"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-background border-b py-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-xs tracking-widest uppercase text-muted-foreground whitespace-nowrap overflow-x-auto gap-8 no-scrollbar pb-1 sm:pb-0">
            <span className="flex-shrink-0">Free Worldwide Shipping</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-primary/40" />
            <span className="flex-shrink-0">30-Day Returns</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-primary/40" />
            <span className="flex-shrink-0">18K Gold Plated</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-primary/40" />
            <span className="flex-shrink-0">Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif">Bestsellers</h2>
              <p id="bestsellers-sub" className="text-muted-foreground mt-2 font-light">Our most loved pieces.</p>
            </div>
            <Link to="/shop" className="hidden sm:flex items-center text-sm font-medium hover:text-primary transition-colors underline underline-offset-4 uppercase tracking-widest hidden sm:flex">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-12">
            {seedProducts.map((product) => (
              <div key={product.id} className="group relative group cursor-pointer flex flex-col">
                <div className="aspect-[4/5] bg-muted w-full overflow-hidden relative mb-4 relative z-0">
                  <Link to={`/product/${product.id}`} className="absolute inset-0 z-10 w-full h-full block">
                    <img
                      data-strk-img-id={`${product.imgId}-1`}
                      data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-sub] [bestsellers-title] gold jewelry white background`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover transition-opacity duration-500"
                    />
                    <img
                      data-strk-img-id={`${product.imgId}-2`}
                      data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-sub] model wearing gold jewelry`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} on model`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-muted"
                    />
                  </Link>
                  <button className="absolute bottom-4 left-4 right-4 z-20 bg-background/95 backdrop-blur py-3 text-xs tracking-widest uppercase font-medium translate-y-16 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground">
                    Quick Add
                  </button>
                </div>
                <div className="flex flex-col flex-1 justify-between text-center relative z-10">
                  <h3 id={product.titleId} className="text-sm font-medium tracking-widest uppercase mt-4 mb-2 hover:text-primary transition-colors">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p id={product.descId} className="text-secondary-foreground">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center sm:hidden">
            <Link to="/shop" className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors border-b border-foreground pb-1 uppercase tracking-widest">
              View All Bestsellers
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section className="py-12 bg-[#F8F6F2] overflow-hidden border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
            <h2 id="ugc-title" className="text-2xl md:text-3xl font-serif">In Your Element</h2>
            <p id="ugc-sub" className="text-muted-foreground mt-2 font-light text-sm">Tag @velmora to be featured.</p>
        </div>
        <div className="flex overflow-x-auto gap-4 px-4 sm:px-6 md:px-8 pb-8 no-scrollbar snap-x snap-mandatory">
          {ugcItems.map((item) => (
            <div key={item.id} className="snap-center shrink-0 w-64 md:w-72 aspect-[9/16] relative rounded-lg overflow-hidden group cursor-pointer group">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[ugc-title] [ugc-sub] selfie model gold jewelry ${item.text}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="UGC"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-muted"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif text-lg leading-tight mb-2">"{item.text}"</p>
                <p className="text-xs tracking-wider opacity-80">{item.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="categories-title" className="text-3xl md:text-4xl font-serif text-center mb-16">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/shop?category=${cat.id}`} className="group relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[categories-title] gold ${cat.name} jewelry on soft background editorial`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Shop ${cat.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="bg-background/95 backdrop-blur-sm px-8 py-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:translate-y-4 md:group-hover:translate-y-0">
                    <span className="font-serif text-xl md:text-2xl uppercase tracking-widest">{cat.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="border-t border-border">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          <div className="lg:w-1/2 relative bg-muted min-h-[400px]">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-p1] editorial artisan gold jewelry making warm light"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Artisan crafting jewelry"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 flex items-center justify-center bg-[#F8F6F2] p-12 md:p-24 text-center lg:text-left">
            <div className="max-w-md">
              <h2 id="brand-story-title" className="text-3xl md:text-5xl font-serif mb-8">Elevating the Everyday.</h2>
              <p id="brand-story-p1" className="text-muted-foreground leading-relaxed mb-6 font-light">
                We believe that fine jewelry shouldn't be reserved for special occasions. Founded by a third-generation jeweler, Velmora bridges the gap between fast fashion and unattainable luxury.
              </p>
              <p id="brand-story-p2" className="text-muted-foreground leading-relaxed mb-10 font-light">
                Our pieces are ethically crafted using premium 18k gold vermeil and semi-precious stones, designed to be layered, lived in, and loved.
              </p>
              <Link to="/about" className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors border-b border-primary pb-1 uppercase tracking-widest text-primary">
                Discover Our Story <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-foreground">Loved by Many</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-stretch">
            {[
              { text: "Absolutely stunning quality. These huggies have become my daily staple.", author: "Elena M." },
              { text: "The floral necklace gets me compliments every single time I wear it.", author: "Sarah T." },
              { text: "Beautiful packaging and the weight of the gold feels so premium.", author: "Jessica R." },
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center border border-border p-8 rounded-sm bg-card h-full justify-between shadow-sm">
                <div className="flex text-primary mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="font-serif text-xl italic leading-relaxed mb-8 flex-1 text-card-foreground">"{review.text}"</p>
                <p className="text-xs uppercase tracking-widest font-medium text-muted-foreground">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 drop-shadow-sm">Join the Inner Circle</h2>
          <p className="text-primary-foreground/90 font-light mb-10 max-w-lg mx-auto">
            Subscribe to receive 10% off your first order, plus early access to new collections and exclusive events.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border border-primary-foreground/30 px-6 py-4 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground transition-colors"
              required
            />
            <button 
              type="submit" 
              className="bg-primary-foreground text-primary px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-background transition-colors"
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