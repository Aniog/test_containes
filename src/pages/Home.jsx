import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/data';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  const ugcItems = [
    { id: 1, caption: 'Golden Hour Glow' },
    { id: 2, caption: 'Everyday Essentials' },
    { id: 3, caption: 'The Perfect Stack' },
    { id: 4, caption: 'Gifted with Love' },
    { id: 5, caption: 'Timeless Beauty' },
  ];

  const categories = [
    { name: 'Earrings', id: 'earrings' },
    { name: 'Necklaces', id: 'necklaces' },
    { name: 'Huggies', id: 'huggies' },
  ];

  const testimonials = [
    { name: 'Elena R.', text: 'The quality of these earrings is stunning. They feel much more expensive than they are.', stars: 5 },
    { name: 'Sarah M.', text: 'Beautifully packaged and the gold color is just perfect—not too yellow.', stars: 5 },
    { name: 'Julianne K.', text: 'The huggies are my new favorite. So comfortable I forget I am wearing them.', stars: 5 },
  ];

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 z-0 scale-105"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-title] [hero-subtitle] luxury gold jewelry worn on model warm lighting editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/20 z-0" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <span className="text-white/80 uppercase tracking-[0.4em] text-[10px] mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            New Collection
          </span>
          <h1 id="hero-title" className="text-white text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight animate-fade-in-up">
            Crafted to be <br /> <span className="italic">Treasured</span>
          </h1>
          <p id="hero-subtitle" className="text-white/90 text-sm md:text-base max-w-lg mb-12 font-sans-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Direct-to-consumer demi-fine jewelry. 18K gold plated essentials for the modern muse.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/shop">
              <Button className="bg-white text-foreground hover:bg-white/90 border-none px-12 py-4">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 text-white">
          <div className="w-[1px] h-10 bg-white" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-platinum">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-foreground/40 font-medium overflow-x-auto whitespace-nowrap scrollbar-hide">
            {trustItems.map((item, idx) => (
              <React.Fragment key={item}>
                <span>{item}</span>
                {idx < trustItems.length - 1 && <span className="opacity-20 hidden md:inline">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent">Curated Selection</span>
              <h2 className="text-3xl md:text-4xl">Our Bestsellers</h2>
            </div>
            <Link to="/shop" className="group flex items-center space-x-2 text-[10px] uppercase tracking-widest hover:text-accent transition-colors">
              <span>View All</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
            {bestsellers.map((product) => (
              <div key={product.id} className="animate-fade-in-up">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section className="py-24 bg-[#E4E8EF]/30">
        <div className="container mx-auto px-6 mb-12">
            <h2 className="text-2xl text-center italic opacity-60">Worn by You</h2>
        </div>
        <div className="flex overflow-x-auto space-x-4 px-6 scrollbar-hide pb-8 snap-x">
          {ugcItems.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-64 md:w-72 snap-center group">
              <div className="aspect-[9/16] relative bg-platinum overflow-hidden">
                <img
                  data-strk-img-id={`ugc-${item.id}`}
                  data-strk-img={`[ugc-caption-${item.id}] person wearing gold jewelry lifestyle candid`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                  alt={`UGC ${item.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p id={`ugc-caption-${item.id}`} className="text-white font-serif italic text-lg leading-tight">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-24 md:py-32 border-t border-platinum">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/shop?category=${cat.id}`} className="group relative aspect-[4/5] overflow-hidden bg-platinum">
                <img
                  data-strk-img-id={`category-${cat.id}`}
                  data-strk-img={`[category-name-${cat.id}] luxury gold jewelry close up flatlay`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 id={`category-name-${cat.id}`} className="text-white text-3xl tracking-widest uppercase transition-transform duration-500 group-hover:scale-110">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-24 md:py-48 bg-white border-y border-platinum">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <div className="w-full lg:w-1/2 aspect-square md:aspect-[4/5] bg-platinum relative">
              <img
                data-strk-img-id="brand-story-img"
                data-strk-img="jewelry artisan workshop tools gold close up aesthetic"
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt="Brand Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent">The Foundation</span>
              <h2 className="text-4xl md:text-5xl leading-tight">Quiet Luxury, <br /> Built for Everyday.</h2>
              <p className="text-foreground/70 leading-relaxed font-sans max-w-lg">
                Velmora was born from a desire for jewelry that balances timeless elegance with accessible luxury. We believe in high-quality materials, intentional design, and pieces that move with you from dawn to dusk.
              </p>
              <div className="pt-4">
                <Link to="/about" className="inline-block border-b border-foreground pb-1 text-xs uppercase tracking-widest hover:text-accent transition-colors">
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center space-x-1 mb-8">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} className="fill-accent text-accent" />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {testimonials.map((t, idx) => (
                <div key={idx} className="space-y-4">
                  <p className="font-serif italic text-lg leading-relaxed">"{t.text}"</p>
                  <p className="text-[10px] uppercase tracking-widest text-accent font-medium">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-[#1A1A1A] py-20 px-6 text-center text-white space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl">Join the Inner Circle</h2>
            <p className="text-white/60 text-sm tracking-wide font-sans">Receive editorial stories and 10% off your first order.</p>
          </div>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email your address"
              className="flex-1 bg-transparent border border-white/20 px-6 py-4 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
            />
            <Button className="bg-white text-foreground hover:bg-white/90">Join Now</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
