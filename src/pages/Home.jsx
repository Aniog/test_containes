import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const Home = () => {
  const containerRef = useRef(null);
  const bestsellers = products.slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const trustItems = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  const ugcPosts = [
    { id: 1, caption: "Golden hour glow with the Amber Lace Earrings.", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" },
    { id: 2, caption: "Effortless stacking with the Sphere Huggies.", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" },
    { id: 3, caption: "The Royal Heirloom set is a dream.", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" },
    { id: 4, caption: "Daily essentials that never leave my neck.", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" },
    { id: 5, caption: "The perfect ear cuff doesn't exist... oh wait.", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" }
  ];

  const categories = [
    { name: 'Earrings', image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" },
    { name: 'Necklaces', image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" },
    { name: 'Huggies', image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" }
  ];

  const testimonials = [
    { name: "Sarah L.", text: "The quality is outstanding. It feels much more expensive than it is.", stars: 5 },
    { name: "Emma R.", text: "Received so many compliments on my necklace. Perfect gift!", stars: 5 },
    { name: "Jessica M.", text: "My Go-to for all my jewelry now. Love the gold tone.", stars: 5 }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] scale-105"
          data-strk-bg-id="hero-bg-9f2a8c"
          data-strk-bg="[hero-title] [hero-subtitle] gold jewelry model close-up"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E")` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1 
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
          >
            Crafted to be Treasured
          </motion.h1>
          <motion.p 
            id="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/90 text-sm md:text-base uppercase tracking-[0.3em] mb-10 font-light"
          >
            Indulge in Quiet Luxury
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              asChild
              className="bg-white hover:bg-velmora-gold text-velmora-onyx hover:text-white px-10 py-7 text-xs uppercase tracking-widest transition-all duration-300 rounded-none h-auto"
            >
              <Link to="/shop">Shop the Collection</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 animate-bounce opacity-70">
          <div className="w-[1px] h-12 bg-white/50" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-gold/10 py-6 border-b border-velmora-gold/20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-4 text-center">
            {trustItems.map((item, idx) => (
              <div key={idx} className="flex-1 min-w-[200px] text-[10px] uppercase tracking-[0.2em] font-medium text-velmora-onyx/80">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.2em] text-velmora-gold font-semibold mb-3 block">
                Editor's Choice
              </span>
              <h2 id="bestsellers-title" className="font-serif text-4xl md:text-5xl text-foreground">
                Our Bestsellers
              </h2>
            </div>
            <Link to="/shop" className="text-xs uppercase tracking-widest text-foreground font-semibold flex items-center gap-2 group border-b border-velmora-onyx pb-2">
              View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Reel-style UGC row */}
      <section className="py-20 bg-velmora-cream overflow-hidden">
        <div className="px-6 md:px-12 mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-center">Seen on You</h2>
        </div>
        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar px-6 md:px-12 space-x-4">
          {ugcPosts.map((post) => (
            <div key={post.id} className="flex-none w-[280px] snap-start relative group aspect-[9/16] bg-muted overflow-hidden">
              <img
                src={post.image}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`ugc-img-${post.id}`}
                data-strk-img="jewelry on model aesthetic portrait close-up"
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                alt="Community Spotlight"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 text-white">
                <p className="font-serif text-sm italic italic leading-snug">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link 
                key={cat.name} 
                to={`/shop?category=${cat.name}`}
                className="group relative aspect-[4/5] bg-muted overflow-hidden overflow-hidden"
              >
                <img
                  src={cat.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={`cat-img-${cat.name}`}
                  data-strk-img={`[cat-label-${cat.name}] jewelry category`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  alt={cat.name}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span 
                    id={`cat-label-${cat.name}`}
                    className="font-serif text-3xl md:text-4xl text-white tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                  >
                    {cat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split Section */}
      <section className="py-24 bg-velmora-onyx text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2 aspect-[3/4] overflow-hidden" data-aos="fade-right">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover opacity-90 scale-105"
              data-strk-img-id="story-img-99a"
              data-strk-img="jewelry artisan workshop tools hands detail"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              alt="Our Craft"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <span className="text-xs uppercase tracking-[0.3em] text-velmora-gold font-semibold">Our Story</span>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">Crafted for Timeless Elegance</h2>
            <p className="text-white/70 leading-relaxed font-light text-lg">
              Velmora was born from a desire to create demi-fine jewelry that bridges the gap between fast fashion and fine jewelry. Every piece is thoughtfully designed in our studio, balancing contemporary aesthetics with timeless silhouettes.
            </p>
            <p className="text-white/70 leading-relaxed font-light">
              We believe that luxury should be accessible without compromise. Using only the finest 18K gold plating and high-grade crystals, we ensure each treasure is as resilient as it is beautiful.
            </p>
            <Link to="/about" className="inline-block border-b border-velmora-gold pb-2 text-xs uppercase tracking-widest text-velmora-gold font-bold hover:text-white hover:border-white transition-all duration-300">
              Discover Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-16">Kind Words</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((t, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex justify-center text-velmora-gold">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-serif text-xl italic text-foreground/80 leading-relaxed">
                  "{t.text}"
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Capture */}
      <section className="py-24 bg-velmora-cream px-6">
        <div className="container mx-auto max-w-2xl text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl">Join the World of Velmora</h2>
          <p className="text-muted-foreground tracking-wide">
            Subscribe to receive exclusive collection launches, editorial stories, and 10% off your first order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-1 bg-white border border-border px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <Button className="bg-velmora-onyx hover:bg-velmora-gold text-white px-10 py-4 text-xs uppercase tracking-widest transition-all h-auto shrink-0 rounded-none">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
