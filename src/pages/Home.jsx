import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { initialProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '../lib/strk-sdk';

export default function Home() {
  const { addItem } = useCart();
  const bestsellers = initialProducts.filter(p => p.isBestseller);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const config = await import('../strk-img-config.json', { assert: { type: 'json' } }).catch(() => null);
        if (config && ImageHelper) {
          ImageHelper.loadImages(config.default || config, containerRef.current);
        }
      } catch (err) {
        // ignore
      }
    };
    loadImages();
  }, []);

  return (
    <div className="flex flex-col min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-black/40 z-10"
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'/%3E")' }}
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-title] close up warm lit gold jewelry model editorial luxury"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl mb-6 font-serif">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto opacity-90">
            Discover demi-fine jewelry designed for the modern romantic. 
            Everyday luxury that feels uniquely yours.
          </p>
          <Link 
            to="/shop" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm font-medium"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-muted py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs md:text-sm tracking-wide uppercase text-muted-foreground">
            <span className="flex items-center">Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span className="flex items-center">30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span className="flex items-center">18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span className="flex items-center">Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 id="bestsellers-title" className="text-3xl md:text-4xl">Featured Bestsellers</h2>
          <Link to="/shop" className="inline-flex items-center mt-4 text-primary hover:text-primary/80 uppercase tracking-widest text-sm font-medium transition-colors">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.concat(initialProducts[0]).map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-muted block">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={`home-${product.id}`}
                  data-strk-img={`[product-title-${product.id}] minimalist gold jewelry product shot on neutral background`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <button 
                  onClick={(e) => { e.preventDefault(); addItem({...product, cartImgId: `home-${product.id}`}); }}
                  className="absolute bottom-4 left-4 right-4 bg-white/90 text-foreground py-3 uppercase tracking-widest text-xs font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
                >
                  Quick Add
                </button>
              </Link>
              <div className="flex justify-between items-start">
                <div>
                  <h3 id={`product-title-${product.id}`} className="font-serif text-lg tracking-wide uppercase mb-1">
                    <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm">{product.category}</p>
                </div>
                <p className="font-medium">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {['Earrings', 'Necklaces', 'Huggies'].map((category, index) => (
              <Link 
                key={category} 
                to="/shop"
                className="group relative aspect-square md:aspect-[4/5] overflow-hidden flex items-center justify-center bg-muted"
                state={{ category }}
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Shop ${category}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={`cat-${category.toLowerCase()}`}
                  data-strk-img={`[cat-title-${index}] gold demi-fine jewelry styling`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <h3 id={`cat-title-${index}`} className="relative z-10 text-white font-serif text-3xl md:text-4xl tracking-widest uppercase py-4 px-8 border border-white/30 bg-black/10 backdrop-blur-sm group-hover:bg-black/30 group-hover:border-white/50 transition-all duration-300">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-square lg:aspect-auto h-[50vh] lg:h-auto min-h-[600px] relative bg-muted order-2 lg:order-1">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora Studio"
               className="absolute inset-0 w-full h-full object-cover"
               data-strk-img-id="brand-story-img"
               data-strk-img="[story-title] editorial jewelry making studio intimate authentic"
               data-strk-img-ratio="3x4"
               data-strk-img-width="1000"
            />
          </div>
          <div className="flex items-center justify-center p-12 lg:p-24 bg-background order-1 lg:order-2">
            <div className="max-w-md">
              <h2 id="story-title" className="text-3xl md:text-5xl font-serif mb-6">Designed for the Everyday Muse</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Velmora was born from a simple belief: fine jewelry shouldn't be reserved 
                only for special occasions. We craft approachable, demi-fine pieces using 
                18K gold plating over jewelers brass. 
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                The result? Warm, enduring pieces that transition effortlessly from your 
                morning coffee run to evening soirées.
              </p>
              <Link to="/about" className="inline-flex items-center uppercase tracking-widest text-sm font-medium border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* UGC / Reels Style Row */}
      <section className="py-24 px-4 max-w-7xl mx-auto w-full overflow-hidden">
        <div className="text-center mb-16">
          <h2 id="ugc-title" className="text-3xl md:text-4xl font-serif">As Seen On You</h2>
          <p className="text-muted-foreground mt-4">Tag @velmora to be featured</p>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="relative flex-none w-[280px] aspect-[9/16] snap-center rounded-sm overflow-hidden bg-muted group cursor-pointer">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`Customer review ${item}`}
                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 data-strk-img-id={`ugc-img-${item}`}
                 data-strk-img="[ugc-caption-1] selfie style woman wearing gold jewelry aesthetic neutral tone"
                 data-strk-img-ratio="9x16"
                 data-strk-img-width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <p id={`ugc-caption-${item}`} className="text-white font-serif italic text-lg leading-snug">
                  "My absolute favorite everyday pieces..."
                </p>
                <div className="mt-4 flex items-center text-white/80 text-xs">
                  <span className="font-sans uppercase tracking-widest">Shop The Look</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-16">Treasured by Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { text: "The quality is unmatched for the price point. These huggies haven't left my ears since they arrived.", name: "Sarah M." },
              { text: "Stunning presentation and the necklace is even more beautiful in person. A perfect gift to myself.", name: "Elena R." },
              { text: "I have sensitive skin and usually react to plated jewelry, but I've had zero issues with Velmora. Love them!", name: "Jessica T." }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex space-x-1 mb-6 text-primary">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="font-serif italic text-lg leading-relaxed mb-6">"{review.text}"</p>
                <p className="text-sm uppercase tracking-widest font-medium text-muted-foreground">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center bg-background border border-border p-12 md:p-24 rounded-sm shadow-sm relative overflow-hidden">
          {/* Subtle decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-primary/20" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-primary/10 rounded-br-3xl" />
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-primary/10 rounded-tl-3xl" />
          
          <h2 className="relative z-10 text-3xl md:text-4xl font-serif mb-4">Join the Club</h2>
          <p className="relative z-10 text-muted-foreground mb-10 max-w-md mx-auto">
            Subscribe to receive 10% off your first order, plus early access to new collections and exclusive offers.
          </p>
          <form className="relative z-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 border-b border-border bg-transparent px-4 py-3 focus:outline-none focus:border-primary transition-colors font-light"
              required
            />
            <button 
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
