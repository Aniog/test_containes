import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

// Use same config import pattern as provided in guidelines
// If strk-img-config.json doesn't exist, we will create it

// Dummy Seed Data
export const products = [
  { id: '1', name: 'Vivid Aura Jewels', price: 42, type: 'earrings', imageQuery: '[product-1-name] gold ear cuff with crystal accent', imageRatio: '1x1' },
  { id: '2', name: 'Majestic Flora Nectar', price: 68, type: 'necklaces', imageQuery: '[product-2-name] multicolor floral crystal necklace', imageRatio: '1x1' },
  { id: '3', name: 'Golden Sphere Huggies', price: 38, type: 'huggies', imageQuery: '[product-3-name] chunky gold dome huggie earrings', imageRatio: '1x1' },
  { id: '4', name: 'Amber Lace Earrings', price: 54, type: 'earrings', imageQuery: '[product-4-name] textured gold filigree drop earrings', imageRatio: '1x1' },
  { id: '5', name: 'Royal Heirloom Set', price: 95, type: 'sets', imageQuery: '[product-5-name] gift-boxed earring + necklace set', imageRatio: '1x1' },
];

const HeroSection = ({ containerRef }) => (
  <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center -mt-20 overflow-hidden text-center text-white" ref={containerRef}>
    <div 
      className="absolute inset-0 -z-10 bg-black/30"
    />
    <div 
      className="absolute inset-0 -z-20 object-cover w-full h-full"
      data-strk-bg-id="hero-bg-main"
      data-strk-bg="[hero-title] close up of gold jewelry on model warmly lit editorial"
      data-strk-bg-ratio="16x9"
      data-strk-bg-width="1600"
    />
    <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center">
      <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-wide mb-6">
        Crafted to be <br className="md:hidden" />Treasured
      </h1>
      <p id="hero-subtitle" className="text-lg md:text-xl font-light mb-10 max-w-lg opacity-90">
        Premium demi-fine gold jewelry for the modern woman. Designed for everyday luxury.
      </p>
      <Button asChild size="lg" className="rounded-none px-8 font-medium tracking-widest uppercase text-sm border-none bg-primary text-primary-foreground hover:bg-primary/90">
        <Link to="/shop">Shop the Collection</Link>
      </Button>
    </div>
  </section>
);

const TrustBar = () => (
  <section className="bg-secondary text-secondary-foreground py-4 border-b border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs tracking-wider uppercase font-medium text-center">
        <span>Free Worldwide Shipping</span>
        <span className="hidden md:inline">&middot;</span>
        <span>30-Day Returns</span>
        <span className="hidden md:inline">&middot;</span>
        <span>18K Gold Plated</span>
        <span className="hidden md:inline">&middot;</span>
        <span>Hypoallergenic</span>
      </div>
    </div>
  </section>
);

const Bestsellers = ({ containerRef }) => {
  const { addItem } = useCartStore();

  return (
    <section className="py-20 md:py-28" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif">Bestsellers</h2>
          <Link to="/shop" className="text-sm border-b border-foreground pb-1 tracking-wide uppercase hover:text-primary hover:border-primary transition-colors mt-4 md:mt-0 self-start md:self-auto">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6">
          {products.map((product) => (
            <div key={product.id} className="group relative flex flex-col group/card cursor-pointer">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary/30 mb-4 overflow-hidden">
                <img 
                  data-strk-img-id={`product-${product.id}-img1`}
                  data-strk-img={product.imageQuery}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover/card:opacity-0"
                />
                <img 
                  data-strk-img-id={`product-${product.id}-img2`}
                  data-strk-img={`${product.imageQuery} different angle`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} alternate`}
                  className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                />
                
                {/* Quick Add Button overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300 md:block hidden">
                  <Button 
                    className="w-full rounded-none tracking-widest uppercase text-xs shadow-md"
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, 'Gold Tone');
                    }}
                  >
                    Quick Add
                  </Button>
                </div>
              </Link>
              <div className="text-center flex-grow flex flex-col">
                <h3 id={`product-${product.id}-name`} className="font-serif uppercase tracking-widest text-sm mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-auto">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UGCScroll = ({ containerRef }) => {
  const images = [
    { id: 1, text: "The perfect everyday hoop.", title: "Golden Sphere Huggies" },
    { id: 2, text: "Obsessed with these layers.", title: "Majestic Flora Nectar" },
    { id: 3, text: "Elevates any simple outfit.", title: "Vivid Aura Jewels" },
    { id: 4, text: "My new favorite statement.", title: "Amber Lace Earrings" },
    { id: 5, text: "Gifting myself today.", title: "Royal Heirloom Set" }
  ];

  return (
    <section className="py-16 md:py-24 bg-accent/30 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6 mb-10">
        <h2 id="ugc-title" className="text-2xl md:text-3xl font-serif text-center">Spotted in Velmora</h2>
      </div>
      
      {/* Horizontal scroll container */}
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 px-4 md:px-6 py-4 -mx-4 md:-mx-6 lg:mx-auto lg:px-6 lg:justify-center">
        {images.map((img) => (
          <div key={img.id} className="relative flex-none w-[280px] h-[500px] snap-center bg-secondary/50 group overflow-hidden">
            <img 
              data-strk-img-id={`ugc-img-${img.id}`}
              data-strk-img={`woman wearing [ugc-${img.id}-title] editorial natural light`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="UGC"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-0 inset-x-0 p-6 text-white text-center transform transition-transform">
              <span id={`ugc-${img.id}-title`} className="sr-only">{img.title}</span>
              <p className="font-serif italic text-lg opacity-90 leading-snug">"{img.text}"</p>
              <p className="text-xs tracking-widest uppercase mt-4 opacity-70">Shop this look</p>
            </div>
            {/* Absolute link to intercept clicks */}
            <Link to="/shop" className="absolute inset-0" aria-label={`Shop ${img.title}`}></Link>
          </div>
        ))}
      </div>
    </section>
  );
};

const Categories = ({ containerRef }) => {
  const cats = [
    { title: "Earrings", id: "cat-earrings" },
    { title: "Necklaces", id: "cat-necklaces" },
    { title: "Huggies", id: "cat-huggies" }
  ];

  return (
    <section className="py-20 md:py-28" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cats.map((cat) => (
            <Link to={`/category/${cat.title.toLowerCase()}`} key={cat.id} className="relative aspect-[3/4] block group overflow-hidden bg-secondary/30">
              <img 
                data-strk-img-id={`${cat.id}-img`}
                data-strk-img={`close up editorial photo of gold [${cat.id}-title] on neutral background`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 id={`${cat.id}-title`} className="text-white font-serif text-2xl tracking-widest uppercase border-b border-white pb-1">
                  {cat.title}
                </h3>
              </div>
              <div className="pl-6 pb-6 absolute bottom-0 left-0 text-white md:hidden">
                <span className="font-serif text-xl tracking-widest uppercase">{cat.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const BrandStory = ({ containerRef }) => (
  <section className="py-20 bg-primary text-primary-foreground" ref={containerRef}>
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1 w-full order-2 md:order-1 relative aspect-[4/5] bg-black/10">
          <img 
            data-strk-img-id="story-img"
            data-strk-img="editorial portrait of woman wearing gold jewelry elegant minimal"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 order-1 md:order-2 space-y-6">
          <h2 id="story-title" className="text-3xl md:text-5xl font-serif">Redefining Demi-Fine</h2>
          <p className="text-primary-foreground/80 leading-relaxed font-light text-lg">
            We believe that fine jewelry shouldn't be reserved for special occasions. 
            Velmora was born from a simple desire: to create beautifully crafted, accessible 
            gold pieces that you can wear every day, everywhere.
          </p>
          <p className="text-primary-foreground/80 leading-relaxed font-light">
            Each piece is thoughtfully designed using 18k gold vermeil over sterling silver, 
            ensuring longevity and sensitive skin compatibility. Our artisans employ heritage 
            techniques translated into modern silhouettes.
          </p>
          <div className="pt-6">
            <Link to="/about" className="inline-block tracking-widest uppercase text-sm border-b border-primary-foreground pb-1 hover:text-white hover:border-white transition-colors">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-accent/40 text-center">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex justify-center mb-10">
        <div className="flex gap-1 text-primary">
          {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div className="space-y-4">
          <p className="font-serif italic text-lg leading-relaxed text-foreground/80">
            "The quality is exceptional. I haven't taken these huggies off since they arrived."
          </p>
          <p className="text-sm tracking-widest uppercase text-muted-foreground">— Sarah M.</p>
        </div>
        <div className="space-y-4">
          <p className="font-serif italic text-lg leading-relaxed text-foreground/80">
            "Finally, gold jewelry that doesn't tarnish after a week and looks truly high-end."
          </p>
          <p className="text-sm tracking-widest uppercase text-muted-foreground">— Elena D.</p>
        </div>
        <div className="space-y-4">
          <p className="font-serif italic text-lg leading-relaxed text-foreground/80">
            "Beautiful packaging, making it the perfect gift. The necklace is stunning."
          </p>
          <p className="text-sm tracking-widest uppercase text-muted-foreground">— Jessica T.</p>
        </div>
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="py-24 text-center border-t border-border">
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="text-3xl font-serif mb-4">Join the Inner Circle</h2>
      <p className="text-muted-foreground mb-8">
        Subscribe for 10% off your first order, early access to new collections, and styling tips.
      </p>
      <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
        <Input 
          type="email" 
          placeholder="Email address" 
          className="rounded-none border-border h-12 focus-visible:ring-primary focus-visible:border-primary"
          required
        />
        <Button type="submit" className="rounded-none h-12 px-8 uppercase tracking-widest text-xs">
          Subscribe
        </Button>
      </form>
    </div>
  </section>
);

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Load images
    import('@strikingly/sdk').then(({ ImageHelper }) => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    }).catch(err => console.warn('Failed to load ImageHelper', err));
  }, []);

  return (
    <div ref={containerRef}>
      <Navbar />
      {/* We don't use Layout here so Hero can overlap the transparent Navbar */}
      <main>
        <HeroSection containerRef={containerRef} />
        <TrustBar />
        <Bestsellers containerRef={containerRef} />
        <UGCScroll containerRef={containerRef} />
        <Categories containerRef={containerRef} />
        <BrandStory containerRef={containerRef} />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Home;