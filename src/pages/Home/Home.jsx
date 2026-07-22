import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getBestsellers } from '@/lib/data';
import { useCartStore } from '@/lib/store';
import { Star } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Home() {
  const bestsellers = getBestsellers().slice(0, 5);
  const { addItem } = useCartStore();
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ ...product, quantity: 1, tone: product.tones[0] });
  };

  return (
    <div className="flex flex-col w-full" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 bg-neutral-900">
          <img 
            src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
            data-strk-img="[hero-subtitle] [hero-title]"
            data-strk-img-id="home-hero-bg-2"
            data-strk-img-ratio="16x9"
            alt="Hero background"
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center text-white">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 max-w-4xl tracking-tight leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light tracking-wide max-w-xl mb-10 text-white/90">
            Demi-fine jewelry for the modern romantic. Experience quiet luxury with our meticulously designed collection.
          </p>
          <Button asChild size="lg" className="bg-white hover:bg-neutral-100 text-brand-dark rounded-none text-base px-10 h-14 transition-colors duration-300">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-neutral-50 border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs md:text-sm tracking-wide text-brand-dark/80 font-medium">
            <span className="flex items-center">Free Worldwide Shipping</span>
            <span className="hidden md:inline text-border">•</span>
            <span className="flex items-center">30-Day Returns</span>
            <span className="hidden md:inline text-border">•</span>
            <span className="flex items-center">18K Gold Plated</span>
            <span className="hidden md:inline text-border">•</span>
            <span className="flex items-center">Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl mb-4 text-brand-dark">Curated Favorites</h2>
            <p id="bestsellers-desc" className="text-muted-foreground w-full max-w-lg mx-auto">
              Our most-loved pieces, designed to elevate your everyday and celebrate your special moments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-6">
            {bestsellers.map((product) => (
              <div key={product.id} className="group flex flex-col cursor-pointer relative">
                <Link to={`/product/${product.id}`} className="aspect-[3/4] relative overflow-hidden bg-neutral-50 mb-4 block">
                  {/* Primary Image */}
                  <img 
                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                    data-strk-img={`[product-${product.id}-title]`}
                    data-strk-img-id={product.images.primary || `bestseller-${product.id}-fallback`}
                    data-strk-img-ratio="3x4"
                    alt={product.name}
                    className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                  />
                  {/* Hover Image */}
                  <img 
                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                    data-strk-img={`[product-${product.id}-title] hover`}
                    data-strk-img-id={product.images.hover || `bestseller-hover-${product.id}-fallback`}
                    data-strk-img-ratio="3x4"
                    alt={`${product.name} hover view`}
                    className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                  />
                  
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20">
                    <Button 
                      onClick={(e) => handleQuickAdd(e, product)}
                      className="w-full bg-white/90 hover:bg-white text-brand-dark border-none shadow-sm rounded-none backdrop-blur-sm"
                    >
                      Quick Add
                    </Button>
                  </div>
                </Link>
                
                <div className="flex flex-col">
                  <Link to={`/product/${product.id}`} id={`product-${product.id}-title`} className="font-serif uppercase tracking-widest text-xs font-semibold mb-1 group-hover:text-brand transition-colors">
                    {product.name}
                  </Link>
                  <p className="text-sm text-brand-dark/80 mb-2">${product.price}</p>
                  {/* <div className="flex items-center gap-1">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] text-muted-foreground ml-1">({product.reviews})</span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC / Editorial Reel */}
      <section className="py-16 bg-neutral-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-10">
          <div className="flex justify-between items-end">
            <h2 id="ugc-title" className="font-serif text-2xl md:text-3xl text-brand-dark">Worn by You</h2>
            <Link to="#" className="text-sm font-medium border-b border-brand-dark pb-0.5 hover:text-brand hover:border-brand transition-colors">
              @VelmoraJewelry
            </Link>
          </div>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto gap-4 px-4 md:px-6 pb-8 snap-x snap-mandatory no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {['neck-layers', 'ear-stack', 'ring-stack', 'holiday-glam', 'everyday-gold', 'evening-drop'].map((item) => (
            <div key={item} className="relative flex-shrink-0 w-[240px] md:w-[280px] aspect-[9/16] snap-center overflow-hidden cursor-pointer group rounded-sm">
              <img 
                src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                data-strk-img="vertical aesthetic portrait of a woman wearing gold jewelry detail shot"
                data-strk-img-id={`ugc-img-${item}`}
                data-strk-img-ratio="9x16"
                alt={`Styled jewelry ${item}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <p className="absolute bottom-4 left-4 right-4 text-white font-serif text-lg leading-tight drop-shadow-md">
                {item === 'neck-layers' ? 'Perfect layers.' : item === 'ear-stack' ? 'My daily stack.' : item === 'ring-stack' ? 'Obsessed with these.' : item === 'holiday-glam' ? 'Holiday ready.' : item === 'everyday-gold' ? 'Never taking it off.' : 'Statement details.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { id: 'earrings', title: 'Earrings', desc: 'Classic drops & hoops' },
              { id: 'necklaces', title: 'Necklaces', desc: 'Chains & pendants' },
              { id: 'huggies', title: 'Huggies', desc: 'Everyday essentials' }
            ].map((cat) => (
              <Link to="/shop" key={cat.id} className="group relative aspect-[4/5] overflow-hidden flex flex-col justify-end p-8 bg-neutral-100">
                <img 
                  src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                  data-strk-img={`[cat-title-${cat.id}]`}
                  data-strk-img-id={`category-editorial-${cat.id}`}
                  data-strk-img-ratio="4x5"
                  alt={`${cat.title} collection`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div className="relative z-10 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 id={`cat-title-${cat.id}`} className="font-serif text-3xl mb-2">{cat.title}</h3>
                  <p id={`cat-desc-${cat.id}`} className="text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="bg-brand text-white overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto bg-brand-dark/20 relative">
            <img 
              src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
              data-strk-img="[story-title] [story-desc]"
              data-strk-img-id="brand-story-home-img"
              data-strk-img-ratio="1x1"
              alt="Jewelry making process"
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-20 xl:p-32 relative">
            <div className="max-w-md">
              <h2 id="story-title" className="font-serif text-3xl md:text-5xl mb-6 leading-tight text-neutral-50">More Than An Accessory</h2>
              <div className="space-y-6 text-neutral-100 text-sm md:text-base font-light leading-relaxed mb-10">
                <p id="story-desc">
                  Velmora was born from a desire to bridge the gap between inaccessible fine jewelry and fleeting fashion pieces. We believe that what you wear closest to your skin should carry meaning, endure through seasons, and elevate your everyday.
                </p>
                <p>
                  Each piece is thoughtfully designed in our studio and crafted using thick 18k gold plating over recycled brass or sterling silver, ensuring hypoallergenic wear and lasting radiance.
                </p>
              </div>
              <Button asChild variant="outline" className="border-white/40 text-brand bg-white hover:bg-neutral-100 rounded-none w-auto">
                <Link to="#">Discover Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-neutral-50 text-center">
        <div className="container mx-auto px-4 md:px-max-w-5xl">
          <h2 className="font-serif text-3xl mb-16 text-brand-dark">Voices of Velmora</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              { name: "Sarah M.", text: "The quality is simply unmatched. I've worn my Vivid Aura ear cuff every day for months and it still looks brand new." },
              { name: "Elena R.", text: "Beautiful packaging and stunning jewelry. The Royal Heirloom set made the perfect gift for my sister's wedding." },
              { name: "Jessica T.", text: "Finally found huggies that don't irritate my sensitive ears. The Golden Spheres have become my absolute go-to." }
            ].map((review) => (
              <div key={review.name} className="flex flex-col items-center">
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-serif text-lg md:text-xl leading-relaxed italic text-brand-dark mb-6">"{review.text}"</p>
                <p className="text-sm font-semibold tracking-wider text-muted-foreground">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-brand-dark">Join the List</h2>
          <p className="text-muted-foreground mb-10">Sign up to receive 10% off your first order, plus early access to new arrivals and exclusive collections.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 border-b border-border py-3 px-2 bg-transparent focus:outline-none focus:border-brand-dark transition-colors placeholder:text-muted-foreground/60 w-full rounded-none"
              required
            />
            <Button type="submit" className="bg-brand hover:bg-brand-dark text-white rounded-none px-8 py-6 sm:py-3 w-full sm:w-auto h-auto">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

    </div>
  );
}