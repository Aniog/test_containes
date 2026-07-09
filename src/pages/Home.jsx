import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, ChevronRight, Star } from 'lucide-react';
import { toast } from "sonner";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Home = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const { data: response } = await client
          .from('Products')
          .select('*')
          .eq('is_bestseller', true)
          .limit(5);
        
        if (response?.data?.list) {
          setBestsellers(response.data.list);
        }
      } catch (error) {
        console.error('Error fetching bestsellers:', error);
      }
    };
    fetchBestsellers();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-[#F5F2ED]"
          data-strk-bg="[hero-headline] [hero-subheadline]"
          data-strk-bg-id="hero-bg-v1"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="font-sans uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in">Demifine Collections</p>
          <h1 
            id="hero-headline"
            className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1]"
          >
            Crafted to be <br/> Treasured
          </h1>
          <p 
            id="hero-subheadline"
            className="font-serif italic text-lg md:text-xl mb-10 max-w-xl mx-auto opacity-90"
          >
            Timeless pieces for the modern silhouette.
          </p>
          <Button 
            asChild
            className="bg-accent hover:bg-accent/90 text-white px-10 py-7 text-xs uppercase tracking-widest rounded-none"
          >
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-background py-6 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-6 text-[10px] md:text-xs font-sans uppercase tracking-widest text-muted-foreground">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:block opacity-30">•</span>
          <span>30-Day Returns</span>
          <span className="hidden md:block opacity-30">•</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:block opacity-30">•</span>
          <span>Hypoallergenic</span>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-24 px-6 lg:px-20 max-w-screen-2xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="font-serif text-4xl tracking-wide uppercase">Bestsellers</h2>
            <p className="text-muted-foreground font-sans italic">The pieces our community loves most.</p>
          </div>
          <Link to="/shop" className="group flex items-center gap-2 text-xs uppercase tracking-widest font-sans border-b border-border pb-1 hover:border-accent transition-colors">
            View All <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
          {bestsellers.map((product) => (
            <div key={product.id} className="group space-y-4">
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={product.data?.image_url}
                  alt={product.data?.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-strk-img={`[product-name-${product.id}] [product-cat-${product.id}]`}
                  data-strk-img-id={`home-product-img-${product.id}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                    toast.success(`${product.data?.name} added to cart`);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 text-[#1A1A1A] py-3 text-[10px] uppercase tracking-widest font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-white"
                >
                  Quick Add
                </button>
              </Link>
              <div className="text-center space-y-1">
                <p 
                  id={`product-cat-${product.id}`}
                  className="text-[10px] uppercase tracking-widest text-muted-foreground font-sans"
                >
                  {product.data?.category}
                </p>
                <h3 
                  id={`product-name-${product.id}`}
                  className="font-serif text-lg tracking-wide uppercase"
                >
                  <Link to={`/product/${product.id}`}>{product.data?.name}</Link>
                </h3>
                <p className="font-sans text-sm">${product.data?.price}</p>
              </div>
            </div>
          ))}
          {!bestsellers.length && [1,2,3,4,5].map(i => (
            <div key={i} className="animate-pulse space-y-4">
              <div className="aspect-[3/4] bg-muted" />
              <div className="space-y-2">
                <div className="h-2 bg-muted w-1/3 mx-auto" />
                <div className="h-4 bg-muted w-2/3 mx-auto" />
                <div className="h-3 bg-muted w-1/4 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel Section */}
      <section className="bg-[#1A1A1A] py-24 overflow-hidden">
        <div className="px-6 lg:px-20 mb-12 flex justify-between items-end">
          <div className="text-white space-y-2">
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide uppercase">As Worn By You</h2>
            <p className="opacity-60 font-sans italic text-sm">Tag @VELMORA for a chance to be featured.</p>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto px-6 lg:px-20 pb-10 scrollbar-hide no-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative min-w-[280px] md:min-w-[320px] aspect-[9/16] bg-[#2A2A2A] overflow-hidden group">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'%3E%3C/svg%3E"
                alt="Social feature"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                data-strk-img={`[ugc-caption-${i}] golden jewelry lifestyle`}
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p 
                  id={`ugc-caption-${i}`}
                  className="text-white font-serif italic text-lg leading-snug"
                >
                  "The Golden Sphere Huggies are my daily essential."
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/20"></div>
                  <span className="text-[10px] text-white/60 uppercase tracking-widest">Elena B.</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[400px]">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat) => (
            <Link 
              key={cat}
              to={`/shop/${cat.toLowerCase()}`}
              className="relative group overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-muted"
                data-strk-bg={`[cat-label-${cat}] jewelry`}
                data-strk-bg-id={`cat-bg-${cat}`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  id={`cat-label-${cat}`}
                  className="text-white font-serif text-3xl tracking-widest uppercase transition-transform group-hover:scale-110"
                >
                  {cat}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-20">
          <div className="aspect-[4/5] bg-muted relative overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3C/svg%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
              data-strk-img="[brand-story-title] jewelry workshop gold"
              data-strk-img-id="story-img"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
            />
          </div>
          <div className="space-y-8">
            <h2 id="brand-story-title" className="font-serif text-4xl lg:text-5xl tracking-wide uppercase leading-tight">
              Honoring craftsmanship, <br/> valuing quality.
            </h2>
            <div className="space-y-6 text-muted-foreground font-sans leading-relaxed text-sm lg:text-base">
              <p>
                Velmora was born from a desire for jewelry that balances luxury with 
                longevity. Every piece is thoughtfully crafted using 18K gold plating 
                over recycled brass, ensuring a premium feel without the markup.
              </p>
              <p>
                We believe that jewelry is more than an accessory—it's an heirloom in 
                the making, a talisman of moments passed and memories yet to be made.
              </p>
            </div>
            <Link to="/about" className="inline-block border-b border-[#1A1A1A] pb-1 uppercase tracking-widest font-sans text-xs hover:text-accent hover:border-accent transition-colors">
              Our Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-20 text-center">
        <h2 className="font-serif text-3xl uppercase tracking-widest mb-16">The Velmora Woman</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto font-serif">
          {[
            { name: "Sarah J.", text: "The quality surpassed my expectations. The gold has such a rich, warm tone that looks incredibly high-end." },
            { name: "Olivia M.", text: "I wear my Golden Sphere Huggies every single day. They are the perfect weight and size for a polished look." },
            { name: "Maya R.", text: "Velmora has become my go-to for gifting. The packaging is as beautiful as the jewelry itself." }
          ].map((t, i) => (
            <div key={i} className="space-y-6">
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="fill-accent text-accent" />)}
              </div>
              <p className="text-xl italic leading-relaxed opacity-80">"{t.text}"</p>
              <p className="uppercase tracking-[0.2em] text-xs font-sans text-muted-foreground">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 lg:px-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl lg:text-5xl tracking-wide uppercase">Join the Collective</h2>
          <p className="font-serif italic text-lg opacity-90 max-w-xl mx-auto">
            Discover new collections before anyone else and receive 10% off your first order.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto h-12">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white/10 border border-white/20 px-6 font-sans text-sm focus:outline-none focus:bg-white/20 transition-colors placeholder:text-white/60"
            />
            <Button className="bg-white text-accent hover:bg-white/90 uppercase tracking-widest text-xs h-full px-10 rounded-none">
              Join
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
