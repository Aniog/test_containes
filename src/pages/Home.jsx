import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SEED_PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; // We will create this

export function Home() {
  const containerRef = useRef(null);
  
  const bestsellers = SEED_PRODUCTS.filter(p => p.isBestseller).slice(0, 5);

  useEffect(() => {
    // Only call if strkImgConfig is valid, ignore error for now if it doesn't exist
    try {
      if (strkImgConfig) {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    } catch (e) {
      console.log('Skipping image load during setup');
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 z-0 bg-gray-200"
          data-strk-bg-id="hero-bg-99abc1"
          data-strk-bg="[hero-desc] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 z-10 bg-black/30" /> {/* Dark overlay for text readability */}
        
        <div className="container relative z-20 mx-auto px-4 md:px-8 text-center text-white mt-16">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide drop-shadow-md">
            Crafted to be Treasured
          </h1>
          <p id="hero-desc" className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto drop-shadow-sm">
            Elevate your everyday with demi-fine jewelry designed for the modern romantic.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-velmora-gold hover:bg-velmora-gold-dark text-white px-10 py-4 uppercase tracking-widest text-sm font-medium transition-colors cursor-pointer"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-velmora-border py-6">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-y-4 text-xs md:text-sm uppercase tracking-widest text-velmora-dark text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline text-velmora-gold mx-4">✦</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline text-velmora-gold mx-4">✦</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline text-velmora-gold mx-4">✦</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl mb-4 tracking-widest uppercase">Iconic Pieces</h2>
            <Link to="/collections/best-sellers" className="text-sm uppercase tracking-widest text-velmora-muted hover:text-velmora-dark border-b border-transparent hover:border-velmora-dark transition-colors pb-1">
              Shop All Bestsellers
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel Section */}
      <section className="bg-white py-24 border-y border-velmora-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-12">
          <h2 id="ugc-title" className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-center">Spotted in Velmora</h2>
          <p id="ugc-desc" className="text-center text-velmora-muted mt-4 text-sm">Tag @velmorajewelry to be featured</p>
        </div>
        
        {/* Horizontal scroll native implementation */}
        <div className="flex overflow-x-auto gap-4 px-4 pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {[
            {id: 1, uid: "ugc-1-e4f1"},
            {id: 2, uid: "ugc-2-a3b2"},
            {id: 3, uid: "ugc-3-c7d9"},
            {id: 4, uid: "ugc-4-f6a8"},
            {id: 5, uid: "ugc-5-b1c3"},
            {id: 6, uid: "ugc-6-d8e2"}
          ].map((item) => (
            <div key={item.id} className="flex-none w-[280px] h-[500px] snap-center relative group cursor-pointer aspect-[9/16]">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Women wearing Velmora jewelry"
                className="w-full h-full object-cover rounded-sm"
                data-strk-img-id={item.uid}
                data-strk-img="[ugc-desc] [ugc-title] aesthetic portrait jewelry"
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-sm">
                <span className="font-serif text-white uppercase tracking-widest text-sm border-b border-white pb-1">Shop Look</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Earrings", id: "cat-earrings", uid: "cat-earrings-a1" },
              { title: "Necklaces", id: "cat-necklaces", uid: "cat-nectar-b2" },
              { title: "Huggies", id: "cat-huggies", uid: "cat-huggies-c3" }
            ].map(cat => (
              <Link to={`/collections/${cat.title.toLowerCase()}`} key={cat.id} className="group relative aspect-[3/4] overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-strk-img-id={cat.uid}
                  data-strk-img={`[${cat.id}-title] jewelry editorial`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 id={`${cat.id}-title`} className="font-serif text-3xl text-white uppercase tracking-widest drop-shadow-md">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="bg-[#FAF9F6] py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 w-full aspect-square relative">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Brand Story"
                className="w-full h-full object-cover"
                data-strk-img-id="story-img-main"
                data-strk-img="[story-title] [story-desc] aesthetic lifestyle editorial"
                data-strk-img-ratio="1x1"
                data-strk-img-width="1000"
              />
            </div>
            <div className="md:w-1/2 w-full md:pr-12 lg:pr-24">
              <h2 id="story-title" className="font-serif text-3xl md:text-5xl mb-8 tracking-widest uppercase text-velmora-dark leading-tight">
                Designed for the<br/>Modern Romantic
              </h2>
              <p id="story-desc" className="text-velmora-muted leading-relaxed mb-10 text-base md:text-lg">
                Velmora was born from a desire to bridge the gap between inaccessible fine jewelry and short-lived fashion pieces. We create demi-fine, 18K gold-plated pieces that embody quiet luxury—designed to be layered, loved, and lived in.
              </p>
              <Link to="/about" className="inline-block border-b border-velmora-dark pb-1 text-sm uppercase tracking-widest text-velmora-dark hover:text-velmora-gold hover:border-velmora-gold transition-colors">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-y border-velmora-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divider-cols">
            {[
              { name: "Sarah J.", text: "The quality is unmatched for the price point. These are my new everyday staples." },
              { name: "Elena M.", text: "Stunning pieces that look exactly like solid gold. I constantly get compliments." },
              { name: "Chloe T.", text: "Beautifully packaged and even more beautiful in person. The perfect gift." }
            ].map((review, idx) => (
              <div key={idx} className="flex flex-col items-center px-4 relative">
                <div className="flex gap-1 text-velmora-gold mb-6">
                  {/* Stars */}
                  {"★★★★★".split("").map((star, i) => <span key={i} className="text-xl">{star}</span>)}
                </div>
                <p className="font-serif text-lg md:text-xl italic mb-6 leading-relaxed text-velmora-dark">"{review.text}"</p>
                <p className="text-xs uppercase tracking-widest text-velmora-muted">— {review.name}</p>
                {/* Visual divider for desktop between columns */}
                {idx < 2 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-1/2 w-[1px] bg-velmora-border" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-velmora-base py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 tracking-widest uppercase">The Inner Circle</h2>
          <p className="text-velmora-muted mb-10">Join for 10% off your first order, early access to new arrivals, and styling inspiration.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-1 bg-transparent border-b border-velmora-dark py-3 px-4 focus:outline-none focus:border-velmora-gold text-velmora-dark transition-colors rounded-none placeholder:text-velmora-muted/60"
              required
            />
            <button 
              type="submit" 
              className="bg-velmora-dark text-white hover:bg-velmora-gold py-3 px-8 uppercase tracking-widest text-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}

