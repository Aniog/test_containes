import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper, DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import strkImgConfig from '@/strk-img-config.json';
import { MoveRight, Loader2 } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

// Seed product data
export const seedProducts = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    shortDesc: "Gold ear cuff with crystal accent",
    imgId1: "prod-vivid-aura-1",
    imgId2: "prod-vivid-aura-2",
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    shortDesc: "Multicolor floral crystal necklace",
    imgId1: "prod-majestic-flora-1",
    imgId2: "prod-majestic-flora-2",
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    shortDesc: "Chunky gold dome huggie earrings",
    imgId1: "prod-golden-sphere-1",
    imgId2: "prod-golden-sphere-2",
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    shortDesc: "Textured gold filigree drop earrings",
    imgId1: "prod-amber-lace-1",
    imgId2: "prod-amber-lace-2",
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    shortDesc: "Gift-boxed earring + necklace set",
    imgId1: "prod-royal-heirloom-1",
    imgId2: "prod-royal-heirloom-2",
  }
];

const ProductCard = ({ product }) => {
  const addItem = useCartStore(state => state.addItem);
  
  const handleQuickAdd = (e) => {
    e.preventDefault(); // Prevent link click
    addItem({ 
      id: product.id, 
      name: product.name, 
      price: product.price, 
      quantity: 1, 
      image: "", // Use empty or transparent pixel to avoid build error
      imgId1: product.imgId1,
      variant: 'Gold'
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="group flex flex-col group">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
        <img
          data-strk-img-id={product.imgId1}
          data-strk-img={`[product-name-${product.id}] [product-desc-${product.id}] warm gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[product-name-${product.id}] worn by model close up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-background/90 backdrop-blur text-foreground uppercase tracking-widest text-xs py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <h3 id={`product-name-${product.id}`} className="font-serif uppercase tracking-widest text-sm mb-1">{product.name}</h3>
        <p id={`product-desc-${product.id}`} className="text-muted-foreground text-xs mb-2 leading-relaxed hidden">{product.shortDesc}</p>
        <p className="text-sm mt-auto">${product.price}</p>
      </div>
    </Link>
  );
};

const Bestsellers = () => {
    return (
        <section className="py-24 px-4 md:px-8 max-w-[1600px] mx-auto">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl mb-4">Most Loved</h2>
                    <p id="bestsellers-desc" className="text-muted-foreground">The pieces our community treasures most.</p>
                </div>
                <Link to="/shop" className="hidden md:flex items-center text-sm font-medium uppercase tracking-widest hover:text-primary/70 transition-colors">
                    Shop All <MoveRight className="ml-2 w-4 h-4" />
                </Link>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-8">
                {seedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            
            <div className="mt-10 md:hidden flex justify-center">
                <Link to="/shop" className="border-b border-foreground pb-1 text-sm font-medium uppercase tracking-widest">
                    Shop All Bestsellers
                </Link>
            </div>
        </section>
    )
}

const Home = () => {
  const containerRef = useRef(null);
  
  // Newsletter state
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    setErrorMsg('');
    
    try {
      // Insert Newsletter mapping
      const { data: response, error } = await client.from('NewsletterSubscriber').insert({
        data: {
          email: email
        }
      }).select().single();
      
      if (error || response?.success === false) {
          setErrorMsg((error?.message) || 'Failed to subscribe.');
          setStatus('error');
          return;
      }
      
      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'Something went wrong');
      setStatus('error');
    }
  };

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center text-primary overflow-hidden">
        <div 
            className="absolute inset-0 z-0 bg-secondary"
            data-strk-bg-id="hero-bg-1"
            data-strk-bg="[hero-title] close up warm lighting elegant gold necklace on model neck collarbone aesthetic editorial"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            style={{ 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        />
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/30 z-0"></div>
        
        <div className="relative z-10 text-center px-4 flex flex-col items-center max-w-4xl mx-auto mt-16">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight !font-normal">
            Crafted to be Treasured
          </h1>
          <p id="hero-desc" className="text-base md:text-lg mb-10 max-w-xl mx-auto opacity-90 font-medium">
            Discover demi-fine everyday luxury. Designed for women who wear their gold with confidence.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-primary text-primary-foreground px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-border bg-background py-4 px-4 overflow-hidden">
          <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto gap-4 text-xs tracking-widest uppercase font-medium text-muted-foreground whitespace-nowrap overflow-x-auto no-scrollbar">
              <span className="shrink-0 flex items-center gap-2">Free Worldwide Shipping</span>
              <span className="shrink-0 hidden md:inline-block w-1.5 h-1.5 rounded-full bg-primary/20"></span>
              <span className="shrink-0 flex items-center gap-2">30-Day Returns</span>
              <span className="shrink-0 hidden md:inline-block w-1.5 h-1.5 rounded-full bg-primary/20"></span>
              <span className="shrink-0 flex items-center gap-2">18K Gold Plated</span>
              <span className="shrink-0 hidden md:inline-block w-1.5 h-1.5 rounded-full bg-primary/20"></span>
              <span className="shrink-0 flex items-center gap-2">Hypoallergenic</span>
          </div>
      </section>

      <Bestsellers />

      {/* Categories */}
      <section className="py-24 bg-card">
          <div className="container mx-auto px-4 md:px-8">
              <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">Shop by Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {['Earrings', 'Necklaces', 'Huggies'].map((cat, i) => (
                      <Link key={cat} to={`/shop?category=${cat.toLowerCase()}`} className="group relative aspect-square overflow-hidden block">
                          <img
                            data-strk-img-id={`cat-img-${i}`}
                            data-strk-img={`close up gold ${cat.toLowerCase()} jewelry on model aesthetic warm lighting`}
                            data-strk-img-ratio="1x1"
                            data-strk-img-width="600"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            alt={cat}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                              <h3 className="text-white text-2xl font-serif uppercase tracking-widest font-medium opacity-90 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
                                  {cat}
                              </h3>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-0 overflow-hidden flex flex-col md:flex-row items-center border-y border-border">
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-[700px] relative">
            <img
                data-strk-img-id="story-img-1"
                data-strk-img="women wearing layered gold necklaces and earrings aesthetic sunny soft focus"
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Our Story"
                className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center items-center md:items-start text-center md:text-left bg-background">
              <span className="text-xs tracking-widest uppercase mb-4 text-muted-foreground">The Velmora Ethos</span>
              <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">Elevating<br/>The Everyday</h2>
              <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
                We believe fine jewelry shouldn't wait in a safe for special occasions. 
                Velmora creates high-quality, demi-fine pieces meant to be lived in. 
                Our 18k gold vermeil designs bring quiet luxury to your daily rituals.
              </p>
              <Link to="/about" className="uppercase tracking-widest text-sm font-medium border-b border-foreground pb-1 hover:text-muted-foreground transition-colors">
                  Read Our Story
              </Link>
          </div>
      </section>

      {/* UGC / Social Reel Row */}
      <section className="py-24 bg-card px-4">
          <div className="text-center mb-12">
              <h2 className="font-serif text-3xl mb-3">Styled By You</h2>
              <p className="text-muted-foreground">Tag @velmorajewelry to be featured.</p>
          </div>
          {/* Horizontal scroll container */}
          <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 px-4 no-scrollbar snap-x snap-mandatory">
              {[1,2,3,4,5,6].map((item) => (
                  <div key={item} className="shrink-0 w-[240px] md:w-[300px] aspect-[9/16] relative snap-center group rounded-md overflow-hidden">
                      <img
                        data-strk-img-id={`ugc-img-${item}`}
                        data-strk-img="instagram style selfie wearing thin gold jewelry natural light"
                        data-strk-img-ratio="9x16"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`Social photo ${item}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="font-serif text-sm">"Absolutely in love."</p>
                          <p className="text-xs mt-1 uppercase tracking-widest">Shop Look</p>
                      </div>
                  </div>
              ))}
          </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4">
              <h2 className="font-serif text-3xl text-center mb-16">Words from our Community</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                      { name: "Sarah M.", quote: "The quality is unbelievable for the price. I haven't taken these huggies off since they arrived." },
                      { name: "Elena R.", quote: "Beautiful packaging and stunning jewelry. The perfect gift to myself after a long week!" },
                      { name: "Jessica T.", quote: "Finally found gold jewelry that doesn't irritate my skin. The aesthetic is exactly what I wanted." }
                  ].map((review, i) => (
                      <div key={i} className="flex flex-col items-center text-center">
                          <div className="flex space-x-1 mb-6">
                              {[1,2,3,4,5].map(star => (
                                  <svg key={star} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                              ))}
                          </div>
                          <p className="font-serif text-lg leading-relaxed mb-6 italic">"{review.quote}"</p>
                          <p className="uppercase tracking-widest text-xs tracking-tight font-medium">— {review.name}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
          <div className="max-w-xl mx-auto flex flex-col items-center">
              <h2 className="font-serif text-3xl md:text-5xl mb-4">Join the Inner Circle</h2>
              <p className="mb-10 text-primary-foreground/80">Sign up for early access to drops, exclusive events, and 10% off your first order.</p>
              <form className="w-full flex flex-col sm:flex-row gap-0" onSubmit={handleSubscribe}>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR EMAIL" 
                    className="flex-1 bg-transparent border border-primary-foreground/30 px-6 py-4 placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground focus:ring-0 uppercase text-sm tracking-widest text-primary-foreground"
                    required
                    disabled={status === 'loading' || status === 'success'}
                  />
                  <button 
                    type="submit" 
                    disabled={status === 'loading' || status === 'success'}
                    className="bg-primary-foreground flex justify-center items-center get-started-btn text-primary px-8 py-4 font-medium uppercase tracking-widest text-sm hover:bg-primary-foreground/90 transition-colors mt-4 sm:mt-0 sm:-ml-px shrink-0 border border-primary-foreground/30 disabled:opacity-80"
                  >
                      {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : status === 'success' ? 'Subscribed' : 'Subscribe'}
                  </button>
              </form>
              <div className="h-6 mt-4 flex items-center justify-center">
                  {status === 'error' && <p className="text-red-400 text-sm">{errorMsg}</p>}
                  {status === 'success' && <p className="text-green-400 text-sm">Welcome to the Inner Circle!</p>}
              </div>
          </div>
      </section>
    </div>
  );
};

export default Home;