import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// --- Placeholder Data ---
const bestsellers = [
  { id: '1', name: 'VIVID AURA JEWELS', price: 42, type: 'Ear Cuff' },
  { id: '2', name: 'MAJESTIC FLORA NECTAR', price: 68, type: 'Necklace' },
  { id: '3', name: 'GOLDEN SPHERE HUGGIES', price: 38, type: 'Huggies' },
  { id: '4', name: 'AMBER LACE EARRINGS', price: 54, type: 'Earrings' },
  { id: '5', name: 'ROYAL HEIRLOOM SET', price: 95, type: 'Set' },
];

const categories = [
  { id: 'earrings', title: 'Earrings', link: '/shop?category=earrings' },
  { id: 'necklaces', title: 'Necklaces', link: '/shop?category=necklaces' },
  { id: 'huggies', title: 'Huggies', link: '/shop?category=huggies' },
];

const testimonials = [
  { id: 1, text: "The quality is absolutely stunning. I wear my huggies every day and they still look brand new.", name: "Sarah M." },
  { id: 2, text: "Beautiful packaging and even more beautiful jewelry. It feels so luxurious without the crazy markup.", name: "Elena R." },
  { id: 3, text: "I've received so many compliments on my Amber Lace earrings. Will definitely be ordering again!", name: "Jessica T." },
];

const Home = () => {
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    // Attempt to load images if ImageHelper is available, otherwise rely on the backend strk route parser
    if (window.ImageHelper && containerRef.current) {
        // window.ImageHelper.loadImages({}, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-background">
      {/* 1. Full-bleed Hero */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image using data-strk-bg */}
        <div 
          className="absolute inset-0 z-0 bg-neutral-900"
          data-strk-bg-id="hero-bg-v1"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          {/* Fallback pattern if needed, but the actual strk bg will replace this */}
           <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto flex flex-col items-center">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl mb-6 tracking-tight drop-shadow-md">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light mb-10 tracking-wide max-w-xl drop-shadow-sm">
            Elevate your everyday with demi-fine gold jewelry designed for mindful gifting and self-celebration.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-neutral-800 rounded-none h-14 px-10 uppercase tracking-widest text-sm transition-all border border-transparent">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="bg-secondary/50 py-4 border-y border-border">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs md:text-sm font-medium tracking-wider text-muted-foreground uppercase text-center">
            <li>Free Worldwide Shipping</li>
            <li className="hidden md:block">&middot;</li>
            <li>30-Day Returns</li>
            <li className="hidden md:block">&middot;</li>
            <li>18K Gold Plated</li>
            <li className="hidden md:block">&middot;</li>
            <li>Hypoallergenic</li>
          </ul>
        </div>
      </div>

      {/* 3. Bestsellers Grid */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="group cursor-pointer flex flex-col">
              <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary w-full block">
                {/* Primary Image */}
                <img 
                  alt={product.name}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  data-strk-img-id={`bestseller-img-${product.id}`}
                  data-strk-img={`[product-title-${product.id}] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                />
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addItem({ ...product, quantity: 1, variant: '18K Gold' });
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-white/90 text-foreground py-3 text-xs uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-primary-foreground text-center"
                >
                  Quick Add
                </button>
              </Link>
              <div className="text-center md:text-left flex-grow flex flex-col justify-between">
                <div>
                  <h3 id={`product-title-${product.id}`} className="font-serif uppercase tracking-widest text-sm mb-1 line-clamp-2 leading-snug">
                    {product.name}
                  </h3>
                </div>
                <p className="text-foreground tracking-wide mt-2">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Brand Story Split */}
      <section className="bg-secondary/30">
        <div className="flex flex-col md:flex-row bg-[#FDFCFB]">
          <div className="md:w-1/2 aspect-square md:aspect-[4/3] md:min-h-[500px] relative bg-neutral-200">
             <img 
                alt="Brand Story"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
                data-strk-img-id="brand-story-img"
                data-strk-img="[story-subtitle] [story-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
              />
          </div>
          <div className="md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-background">
            <div className="max-w-md text-center">
              <h2 id="story-title" className="font-serif text-3xl md:text-4xl mb-6 text-foreground">Quiet Luxury, Everyday.</h2>
              <p id="story-subtitle" className="text-muted-foreground mb-8 leading-relaxed font-light text-sm">
                Velmora was born from a simple desire: to create demi-fine jewelry that feels incredibly luxurious, without the traditional retail markups. We source premium materials, focusing on 18K gold vermeil and ethically sourced accents, to craft pieces you'll want to live in.
              </p>
              <Button variant="outline" asChild className="rounded-none border-foreground hover:bg-foreground hover:text-background h-12 px-8 uppercase tracking-widest text-xs transition-colors">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 id="categories-title" className="font-serif text-center text-3xl md:text-4xl mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link key={cat.id} to={cat.link} className="group relative aspect-[4/5] overflow-hidden bg-secondary block">
               <img 
                  alt={cat.title}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={`category-img-${cat.id}`}
                  data-strk-img={`[category-title-${cat.id}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                  <h3 id={`category-title-${cat.id}`} className="text-white font-serif text-3xl tracking-widest uppercase relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                    {cat.title}
                  </h3>
                </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. UGC Reel Row (Mockup) */}
      <section className="py-16 overflow-hidden bg-white border-y border-border">
        <div className="container mx-auto px-4 mb-8">
          <h2 id="ugc-title" className="font-serif text-center text-2xl md:text-3xl">Worn by You</h2>
          <p className="text-center text-sm text-muted-foreground mt-2">@velmorajewelry</p>
        </div>
        {/* Horizontal scroll container */}
        <div className="flex gap-4 overflow-x-auto pb-8 px-4 md:px-8 snap-x snap-mandatory hide-scrollbar">
          {[1,2,3,4,5,6].map((item) => (
            <div key={item} className="flex-none w-[240px] md:w-[280px] aspect-[9/16] relative bg-secondary snap-center rounded-sm overflow-hidden group">
               <img 
                  alt={`Social Post ${item}`}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id={`ugc-img-${item}`}
                  data-strk-img={`[ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-serif">"Absolutely in love with this stack!"</p>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            {testimonials.map((review) => (
              <div key={review.id} className="flex flex-col items-center">
                <div className="flex text-primary mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-serif text-lg md:text-xl mb-6 italic leading-relaxed text-foreground">"{review.text}"</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="py-24 px-4 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-primary-foreground">Join the Club</h2>
          <p className="mb-8 tracking-wide font-light text-primary-foreground/90">Subscribe to receive 10% off your first order, plus early access to new collections.</p>
          <form className="flex flex-col sm:flex-row gap-0 w-full max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-white/10 border border-white/30 text-white placeholder:text-white/60 px-4 h-12 focus:outline-none focus:border-white rounded-none"
              required
            />
            <Button type="submit" className="h-12 border border-white bg-white text-primary hover:bg-transparent hover:text-white rounded-none px-8 uppercase tracking-widest text-sm transition-colors mt-4 sm:mt-0">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;