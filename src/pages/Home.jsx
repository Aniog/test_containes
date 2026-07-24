import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { seedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const { addToCart } = useCart();
  const containerRef = React.useRef(null);
  
  React.useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = seedProducts.filter(p => p.isBestseller).slice(0, 5);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="w-full" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="model wearing gold jewelry close up editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="2000"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
          <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-90">Velmora Fine Jewelry</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium mb-6 leading-tight">
            Crafted to be Treasured
          </h1>
          <p className="font-sans text-lg md:text-xl font-light mb-10 max-w-2xl opacity-90 mx-auto">
            Elevated everyday pieces designed to catch the light and capture the heart.
          </p>
          <Link 
            to="/collections/all" 
            className="inline-flex items-center justify-center bg-primary hover:bg-white hover:text-primary text-primary-foreground px-10 py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300 transform min-w-[200px]"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-background border-b border-border/50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-xs md:text-sm font-sans tracking-wider uppercase text-foreground/80 gap-4 overflow-x-auto whitespace-nowrap">
            <span className="flex-shrink-0 flex items-center">&bull; Free Worldwide Shipping</span>
            <span className="flex-shrink-0 flex items-center">&bull; 30-Day Returns</span>
            <span className="flex-shrink-0 flex items-center">&bull; 18K Gold Plated</span>
            <span className="flex-shrink-0 flex items-center">&bull; Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 md:py-32 container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">Curated Favorites</h2>
            <p className="text-muted-foreground font-light text-lg">Our most loved everyday pieces.</p>
          </div>
          <Link to="/collections/bestsellers" className="hidden md:flex items-center text-sm tracking-widest uppercase hover:text-primary transition-colors pb-1 border-b border-foreground hover:border-primary group">
            View All <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
           {bestsellers.map(product => (
            <Link key={product.id} to={`/products/${product.id}`} className="group block">
              <div className="relative aspect-[3/4] mb-4 bg-muted overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  data-strk-img-id={product.imageId}
                  data-strk-img={`[product-title-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                />
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} worn`}
                  data-strk-img-id={product.imageHoverId}
                  data-strk-img={`model wearing [product-title-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-105 group-hover:scale-100"
                />
                
                <button 
                  onClick={(e) => handleQuickAdd(e, product)}
                  className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur text-foreground py-3 text-xs tracking-widest uppercase opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  Quick Add
                </button>
              </div>
              <div className="text-center px-2">
                <h3 id={`product-title-${product.id}`} className="font-serif text-base uppercase tracking-widest mb-1 truncate">{product.name}</h3>
                <p className="text-muted-foreground">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <Link to="/collections/bestsellers" className="inline-flex items-center text-sm tracking-widest uppercase hover:text-primary transition-colors pb-1 border-b border-foreground active:border-primary">
            View All Bestsellers
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-24 bg-[#F9F8F6]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { id: "earrings", title: 'Earrings', link: '/collections/earrings' },
              { id: "necklaces", title: 'Necklaces', link: '/collections/necklaces' },
              { id: "huggies", title: 'Huggies', link: '/collections/huggies' }
            ].map((cat) => (
              <Link key={cat.title} to={cat.link} className="group relative aspect-square overflow-hidden block">
                <div 
                  className="absolute inset-0 bg-cover bg-center w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  data-strk-bg-id={`cat-bg-${cat.id}`}
                  data-strk-bg={`[cat-title-${cat.id}]`}
                  data-strk-bg-ratio="1x1"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 id={`cat-title-${cat.id}`} className="text-white font-serif text-3xl tracking-widest uppercase">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 md:py-32 container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 aspect-[4/5] relative overflow-hidden bg-muted">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              data-strk-bg-id="brand-story-bg"
              data-strk-bg="[brand-story-title] [brand-story-subtitle]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="1200"
            />
          </div>
          <div className="w-full lg:w-1/2 max-w-xl">
            <p id="brand-story-subtitle" className="font-sans text-sm tracking-[0.2em] uppercase text-primary mb-6">Our Philosophy</p>
            <h2 id="brand-story-title" className="font-serif text-4xl md:text-5xl font-medium mb-8 leading-tight">
              Quiet Luxury for the Modern Muse
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg mb-10">
              <p>
                Velmora was born from a simple desire: to create demi-fine jewelry that feels exceptionally special, without the extraordinary price tag. 
              </p>
              <p>
                We believe that the pieces you wear close to your skin should be crafted with care, intention, and an eye for enduring style. Not loud, not fleeting—just beautifully made objects you reach for every morning.
              </p>
            </div>
            <Link 
              to="/about" 
              className="inline-block border border-foreground text-foreground px-8 py-4 font-sans text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* UGC / Instagram Reel Style */}
      <section className="py-24 bg-[#F9F8F6] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Worn by You</h2>
          <p className="text-muted-foreground">@velmorajewelry</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-4 md:px-6 gap-4 md:gap-6 max-w-[100vw]">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative w-[280px] md:w-[320px] aspect-[9/16] flex-shrink-0 snap-center rounded-sm overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                data-strk-bg-id={`ugc-bg-${i}`}
                data-strk-bg="influencer wearing gold jewelry everyday stack"
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-serif italic text-lg leading-snug">
                  "Absolutely in love with this everyday stack."
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-4xl text-center font-medium mb-16">Words from our Muses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { quote: "The weight and finish feel so much more expensive than they are. I haven't taken the Aura ear cuff off since it arrived.", name: "Sarah M." },
            { quote: "Finally, gold pieces that don't irritate my sensitive skin. The packaging was stunning—felt like opening a true gift to myself.", name: "Elena R." },
            { quote: "I get compliments on the Flora necklace every time I wear it. Perfect understated elegance.", name: "Jessica T." }
          ].map((review, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="flex gap-1 mb-6 text-primary">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-serif text-xl italic mb-6 leading-relaxed">"{review.quote}"</p>
              <p className="font-sans text-sm tracking-widest uppercase">— {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-primary-foreground py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">Join the Inner Circle</h2>
          <p className="font-light text-lg mb-10 opacity-90">
            Sign up to receive 10% off your first order, plus early access to new collections and exclusive events.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border border-primary-foreground/30 px-6 py-4 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground focus:ring-0"
              required
            />
            <button 
              type="submit" 
              className="bg-primary-foreground text-primary px-8 py-4 font-sans text-sm tracking-widest uppercase hover:bg-transparent hover:text-primary-foreground hover:border-primary-foreground border border-primary-foreground transition-colors duration-300"
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
