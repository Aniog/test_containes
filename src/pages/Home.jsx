import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/api/products';
import { useCart } from '@/lib/cart-context';
import { ArrowRight, Star } from 'lucide-react';
import { toast } from 'sonner';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-992a"
        data-strk-bg="close-up model gold jewelry natural light warm tones editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 z-[1] bg-black/20" />
      <div className="container px-4 md:px-8 relative z-10 text-center text-white">
        <h1 id="hero-title" className="font-serif text-5xl md:text-7xl mb-6 tracking-tight">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light tracking-wide opacity-90">
          Distinctive, demi-fine jewelry designed for your daily rituals and life's grandest moments.
        </p>
        <div className="">
          <Link 
            to="/shop" 
            className="inline-block bg-white text-black px-12 py-4 text-[10px] tracking-widest uppercase font-bold hover:bg-opacity-90 transition-all hover:scale-105"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <div className="bg-background border-b py-4">
      <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex justify-between items-center min-w-max md:min-w-0 gap-8 md:gap-0 text-[10px] tracking-widest uppercase font-bold text-muted-foreground whitespace-nowrap">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline text-border">•</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline text-border">•</span>
          <span>18K Gold Plated base</span>
          <span className="hidden md:inline text-border">•</span>
          <span>Hypoallergenic & Nickel-Free</span>
        </div>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span id="bestsellers-label" className="text-accent text-xs tracking-widest uppercase font-bold mb-2 block">Curated Favorites</span>
            <h2 id="bestsellers-title" className="font-serif text-4xl md:text-5xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-[10px] tracking-widest uppercase font-bold flex items-center gap-2 group border-b border-transparent hover:border-black transition-all pb-1 mb-2">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="group relative flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`best-primary-${product.id}`}
                    data-strk-img={`[bestsellers-title] ${product.name} jewelry editorial minimalism`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </Link>
                <button 
                  onClick={() => {
                    addToCart(product);
                    toast.success(`Added ${product.name} to bag`);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-white text-black py-3 text-[10px] tracking-widest uppercase font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white"
                >
                  Quick Add
                </button>
              </div>
              <div className="flex flex-col flex-1">
                <Link to={`/product/${product.id}`} className="hover:opacity-60 transition-opacity">
                  <h3 id={`product-name-${product.id}`} className="font-serif text-lg tracking-wider uppercase mb-1">{product.name}</h3>
                </Link>
                <p className="text-muted-foreground font-medium text-sm mt-auto">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UGCReel = () => {
  const cards = [
    { id: 1, title: 'Summer Staples', query: 'woman wearing delicate gold earrings beach warm sunlight' },
    { id: 2, title: 'Layered Elegance', query: 'gold necklaces layered on woman chest minimal style' },
    { id: 3, title: 'The Daily Glow', query: 'close up of gold huggies on ear aesthetically pleasing' },
    { id: 4, title: 'Gift of Gold', query: 'woman holding minimal jewelry gift box' },
    { id: 5, title: 'Night Out', query: 'gold jewelry editorial dramatic lighting lifestyle' },
    { id: 6, title: 'Simple Luxury', query: 'lifestyle detail jewelry hands gold rings' },
  ];

  return (
    <section className="py-24 bg-muted/30 border-y">
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-center">As Seen On You</h2>
      </div>
      <div className="flex overflow-x-auto pb-8 gap-4 px-4 md:px-8 no-scrollbar scroll-smooth">
        {cards.map((card) => (
          <div key={card.id} className="relative min-w-[280px] md:min-w-[320px] aspect-[9/16] overflow-hidden group flex-shrink-0">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id={`ugc-${card.id}`}
              data-strk-img={card.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              alt={card.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-bottom p-8">
              <p id={`ugc-label-${card.id}`} className="mt-auto font-serif text-white text-xl tracking-wide w-full text-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Categories = () => {
  const cats = [
    { title: 'Earrings', id: 'earrings', query: 'gold drop earrings macro detail' },
    { title: 'Necklaces', id: 'necklaces', query: 'gold necklace banner minimalistic' },
    { title: 'Huggies', id: 'huggies', query: 'gold huggie earrings ear close up' },
  ];

  return (
    <section className="py-24 bg-background border-b">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cats.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop?category=${cat.title}`} 
              className="relative aspect-square overflow-hidden group"
            >
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={`cat-tile-${cat.id}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/20 transition-colors duration-500">
                <div className="bg-white/90 px-10 py-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-sm">
                  <span id={`cat-name-${cat.id}`} className="text-xs tracking-widest uppercase font-bold text-black">{cat.title}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Story = () => {
  return (
    <section className="py-32 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 aspect-[4/5] bg-muted overflow-hidden shadow-2xl">
             <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id="story-img"
                data-strk-img="jewelry designer working workshop elegant portrait"
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                alt="Our Story"
                className="w-full h-full object-cover"
             />
          </div>
          <div className="w-full md:w-1/2 max-w-xl">
             <span id="story-label" className="text-accent text-xs tracking-widest uppercase font-bold mb-6 block">The Velmora Ethos</span>
             <h2 id="story-title" className="font-serif text-4xl md:text-6xl mb-8 leading-tight">Every piece tells a story of intention and grace.</h2>
             <p id="story-desc" className="text-muted-foreground leading-relaxed mb-12 text-lg font-light">
               Founded on the belief that luxury should be felt every day, not just on special occasions. We combine traditional artistry with modern design to create demi-fine jewelry that lasts.
             </p>
             <Link to="/about" className="text-sm tracking-widest uppercase font-bold border-b border-black pb-2 hover:opacity-60 transition-opacity">
               Explore Our Story
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'Elena R.', text: "Absolutely stunning quality. I've been wearing my Golden Sphere huggies every day for months and they still look brand new.", stars: 5 },
    { name: 'Sarah L.', text: "The packaging alone is an experience. Perfect for gifting, but I'll definitely be keeping this set for myself!", stars: 5 },
    { name: 'Maya T.', text: "So hard to find hypoallergenic jewelry that actually looks stylish. Velmora nailed it.", stars: 5 },
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {reviews.map((review, i) => (
            <div key={i} className="flex flex-col items-center max-w-sm mx-auto">
              <div className="flex gap-1 mb-8 text-accent">
                {[...Array(review.stars)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p id={`review-text-${i}`} className="font-serif text-2xl italic mb-8 leading-relaxed font-light">"{review.text}"</p>
              <span id={`review-name-${i}`} className="text-[10px] tracking-widest uppercase font-bold text-muted-foreground">{review.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-32 bg-secondary/50 border-t">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
        <h2 id="news-title" className="font-serif text-4xl md:text-6xl mb-6">Join the Circle</h2>
        <p id="news-desc" className="text-muted-foreground mb-12 font-light tracking-wide text-lg">
          Be the first to hear about new collections, editorial journal entries, and exclusive invitations. Enjoy 10% off your first order.
        </p>
        <form className="flex flex-col md:flex-row gap-6 justify-center" onSubmit={(e) => { e.preventDefault(); toast.success("Thank you for joining!"); }}>
          <input 
            type="email" 
            placeholder="Email Address" 
            className="bg-transparent border-b border-black md:w-96 py-4 text-sm focus:outline-none placeholder:text-muted-foreground/50 tracking-widest uppercase font-medium"
            required
          />
          <button type="submit" className="bg-black text-white px-16 py-4 text-[10px] tracking-widest uppercase font-bold hover:bg-opacity-80 transition-opacity">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="flex flex-col" ref={containerRef}>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <Categories />
      <Story />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
