import React, { useEffect, useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingBag, ChevronRight, Star } from 'lucide-react';
import { useCart } from '@/lib/CartContext';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Home = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchBestsellers = async () => {
      const { data: response } = await client
        .from('Product')
        .select('*')
        .eq('isBestseller', true)
        .limit(5);
      
      if (response?.success) {
        setBestsellers(response.data.list);
      }
    };
    fetchBestsellers();
  }, []);

  return (
    <div className="flex flex-col">
      {/* 1. Full-bleed Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-secondary">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[20s] hover:scale-100"
          data-strk-bg-id="hero-bg-v1"
          data-strk-bg="[hero-subtitle] [hero-title] gold jewelry on model warm lighting"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 z-10 bg-primary/20" />
        <div className="relative z-20 text-center space-y-8 px-6 max-w-4xl mx-auto">
          <p id="hero-subtitle" className="uppercase tracking-[0.3em] text-sm font-sans animate-fade-in-up">Crafted to be Treasured</p>
          <h1 id="hero-title" className="text-5xl md:text-8xl font-serif italic leading-tight animate-fade-in-up delay-100">Velmora Fine Jewelry</h1>
          <div className="pt-4 animate-fade-in-up delay-200">
            <Link to="/shop">
              <Button size="lg" className="px-10 py-4 uppercase tracking-widest bg-secondary text-primary hover:bg-accent hover:text-secondary transition-all">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-primary text-secondary/70 py-4 border-b border-hairline overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee md:justify-around font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
          <span className="px-8">Free Worldwide Shipping</span>
          <span className="px-8">30-Day Returns</span>
          <span className="px-8">18K Gold Plated</span>
          <span className="px-8">Hypoallergenic</span>
          {/* Duplicate for mobile marquee if needed, but for now simple flex */}
        </div>
      </section>

      {/* 3. Bestsellers Product Grid */}
      <section className="py-24 px-6 md:px-12 bg-secondary">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end space-y-4 md:space-y-0">
            <div className="space-y-2">
              <h2 id="bestsellers-title" className="text-4xl font-serif uppercase tracking-widest">The Essentials</h2>
              <p className="text-muted-foreground font-sans tracking-wide">Our most coveted pieces, curated for you.</p>
            </div>
            <Link to="/shop" className="group flex items-center space-x-2 uppercase tracking-widest text-xs font-semibold hover:text-accent transition-colors">
              <span>View All</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {bestsellers.map((product) => {
              const fields = product.data;
              return (
                <div key={product.id} className="group flex flex-col space-y-4">
                  <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden">
                    <Link to={`/product/${fields.slug}`}>
                      <img
                        data-strk-img-id={`product-${product.id}`}
                        data-strk-img={`[prod-title-${product.id}] [prod-desc-${product.id}] [bestsellers-title]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        alt={fields.name}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                    </Link>
                    <button 
                      onClick={() => addToCart(fields, fields.variants[0])}
                      className="absolute bottom-0 left-0 w-full bg-secondary/90 backdrop-blur-sm py-3 text-[10px] uppercase tracking-[0.2em] font-semibold translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-accent hover:text-secondary"
                    >
                      Quick Add
                    </button>
                    {fields.isBestseller && (
                      <span className="absolute top-4 left-4 text-[8px] uppercase tracking-widest bg-accent text-secondary px-2 py-1">Bestseller</span>
                    )}
                  </div>
                  <div className="space-y-1 text-center">
                    <h3 id={`prod-title-${product.id}`} className="uppercase tracking-widest text-[11px] font-bold">
                      <Link to={`/product/${fields.slug}`} className="hover:text-accent transition-colors">
                        {fields.name}
                      </Link>
                    </h3>
                    <p id={`prod-desc-${product.id}`} className="hidden">{fields.description}</p>
                    <p className="text-sm text-muted-foreground">${fields.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Reel-style UGC Row */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <h2 className="text-3xl font-serif text-center italic">Worn by You</h2>
          <div className="flex space-x-4 overflow-x-auto pb-8 scrollbar-hide snap-x">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex-shrink-0 w-64 md:w-72 aspect-[9/16] relative group snap-start bg-stone-200">
                <img
                  data-strk-img-id={`ugc-${i}`}
                  data-strk-img="women wearing gold jewelry minimal outfit aesthetic"
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                  className="object-cover w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                  alt={`UGC ${i}`}
                />
                <p className="absolute bottom-6 left-6 right-6 text-secondary text-sm font-serif italic leading-snug drop-shadow-md">
                  "The perfect addition to my morning routine. Simplistic and stunning."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category Tiles */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Earrings', id: 'cat-earrings' },
            { name: 'Necklaces', id: 'cat-necklaces' },
            { name: 'Huggies', id: 'cat-huggies' }
          ].map((cat) => (
            <Link key={cat.name} to={`/shop?category=${cat.name}`} className="relative aspect-square group overflow-hidden bg-stone-100">
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                data-strk-bg-id={`bg-${cat.id}`}
                data-strk-bg={`[title-${cat.id}] collection gold jewelry aesthetic close up`}
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 id={`title-${cat.id}`} className="text-secondary text-3xl font-serif tracking-widest uppercase transition-transform duration-500 group-hover:translate-y-[-10px]">
                  {cat.name}
                </h3>
                <span className="absolute bottom-1/2 translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-500 text-secondary text-[10px] uppercase tracking-[0.3em] font-semibold border-b border-secondary/50 pb-1">
                  Discover More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story Split Section */}
      <section className="flex flex-col md:flex-row min-h-[600px]">
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            data-strk-bg-id="story-bg"
            data-strk-bg="elegant atelier jeweler workshop minimal aesthetic"
            data-strk-bg-ratio="1x1"
            data-strk-bg-width="1200"
          />
        </div>
        <div className="w-full md:w-1/2 bg-stone-100 flex items-center justify-center p-12 md:p-24">
          <div className="max-w-md space-y-8">
            <h2 className="text-4xl font-serif italic leading-tight">The Art of Understatement</h2>
            <div className="space-y-6 font-sans text-muted-foreground leading-relaxed">
              <p>Founded on the principle that luxury should be felt, not just seen. At Velmora, we create demi-fine pieces that bridge the gap between costume jewelry and investment fine art.</p>
              <p>Every piece is crafted with meticulous attention to detail, using high-quality 18K gold plating and responsibly sourced stones, ensuring our jewelry stays by your side as you move through every chapter of your life.</p>
            </div>
            <Link to="/about">
              <Button variant="outline" className="px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold border-primary text-primary hover:bg-primary hover:text-secondary rounded-none mt-4">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-secondary border-y border-hairline/10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { name: "Sophia L.", text: "The weight and shine of my huggies are incredible. Truly feels like solid gold." },
            { name: "Emma R.", text: "Ordered the Flora Nectar for my wedding guest outfit and received so many compliments." },
            { name: "Olivia M.", text: "Subtle, feminine, and perfect for everyday wear. I never take my ear cuff off." }
          ].map((t, i) => (
            <div key={i} className="space-y-4">
              <div className="flex justify-center text-accent space-x-1">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <p className="font-serif text-lg leading-relaxed italic">"{t.text}"</p>
              <p className="font-sans uppercase tracking-[0.2em] text-[10px] font-bold text-muted-foreground">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter Capture */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-stone-100 p-12 md:p-20 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-serif uppercase tracking-widest">Join the Circle</h2>
            <p className="text-muted-foreground font-sans tracking-wide">Subscribe for exclusive early access to collections and 10% off your first order.</p>
          </div>
          <form className="max-w-md mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-transparent border-b border-primary py-4 px-2 font-sans text-sm focus:outline-none focus:border-accent transition-colors uppercase tracking-widest"
            />
            <Button className="px-10 py-4 uppercase tracking-widest whitespace-nowrap">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
