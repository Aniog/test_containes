import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Star, Quote, Truck, RotateCcw, Shield, Gem } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { products, testimonials, ugcItems, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import strkImgConfig from '../strk-img-config.json';

/* ─── Hero ─────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative h-[85vh] md:h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="luxury gold jewelry warm lighting editorial model close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 bg-warmGray-900"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="text-label text-gold-300 mb-4 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-wide leading-tight animate-slide-up">
          Crafted to be<br />
          <span className="italic font-light">Treasured</span>
        </h1>
        <p className="mt-6 text-white/80 text-sm md:text-base max-w-lg leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          18K gold-plated pieces designed for the modern woman.
          Premium quality, accessible luxury, made to last.
        </p>
        <Link
          to="/shop"
          className="mt-8 btn-gold animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-white/40" />
      </div>
    </section>
  );
}

/* ─── Trust Bar ─────────────────────────────────────────── */
function TrustBar() {
  const items = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: Gem, label: '18K Gold Plated' },
    { icon: Shield, label: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-charcoal py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon size={14} className="text-gold-500" />
              <span className="text-[11px] md:text-xs font-sans tracking-wider text-warmGray-300 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Bestsellers ───────────────────────────────────────── */
function Bestsellers() {
  const bestsellers = products.filter((p) => p.isBestseller);

  return (
    <section className="section-padding bg-ivory">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-label mb-3">Curated Selection</p>
          <h2 className="heading-serif text-3xl md:text-5xl text-charcoal">
            Bestsellers
          </h2>
          <div className="w-16 h-[1px] bg-gold-500 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="btn-outline inline-flex items-center gap-2"
          >
            View All Jewelry
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── UGC Reel ──────────────────────────────────────────── */
function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir * 280,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-label mb-3">As Seen On You</p>
            <h2 className="heading-serif text-3xl md:text-5xl text-charcoal">
              #VelmoraStyle
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 border border-warmGray-300 rounded-full flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 border border-warmGray-300 rounded-full flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] relative rounded-lg overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`${item.caption} ${item.category} jewelry worn on woman editorial`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-lg text-white italic leading-snug">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Category Tiles ────────────────────────────────────── */
function CategoryTiles() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-label mb-3">Browse By Style</p>
          <h2 className="heading-serif text-3xl md:text-5xl text-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative aspect-[4/5] overflow-hidden rounded-sm group"
            >
              <img
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={`${cat.name} gold jewelry collection editorial photography`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-serif text-3xl md:text-4xl text-white tracking-wider mb-2">
                  {cat.name}
                </h3>
                <span className="font-sans text-xs tracking-ultra-wide uppercase text-white/80 group-hover:text-white transition-colors">
                  Explore Collection →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Brand Story ───────────────────────────────────────── */
function BrandStory() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-main"
              data-strk-img="jewelry artisan crafting gold piece workshop warm light editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-label mb-4">Our Philosophy</p>
            <h2 className="heading-serif text-3xl md:text-5xl text-charcoal mb-6 leading-tight">
              Jewelry That Feels<br />
              <span className="italic">Like You</span>
            </h2>
            <div className="w-16 h-[1px] bg-gold-500 mb-8" />
            <p className="text-warmGray-600 leading-relaxed mb-6">
              Velmora was born from a simple belief: everyone deserves to wear
              jewelry that makes them feel extraordinary. We create demi-fine
              pieces using 18K gold plating over premium base metals, delivering
              the look and feel of fine jewelry at a fraction of the cost.
            </p>
            <p className="text-warmGray-600 leading-relaxed mb-8">
              Every piece is designed to be worn, loved, and treasured — from
              your morning coffee run to your most special evenings. Because
              luxury shouldn&apos;t be reserved for special occasions.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-ultra-wide uppercase text-gold-600 hover:text-gold-700 transition-colors group"
            >
              Discover Our Story
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ──────────────────────────────────────── */
function Testimonials() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-label mb-3">Customer Love</p>
          <h2 className="heading-serif text-3xl md:text-5xl text-charcoal">
            What Our Customers Say
          </h2>
          <div className="w-16 h-[1px] bg-gold-500 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream border border-warmGray-100 p-8 rounded-sm relative"
            >
              <Quote size={24} className="text-gold-300 mb-4" />
              <p className="text-warmGray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="font-sans text-sm font-medium text-charcoal">
                {t.name}
              </p>
              <p className="text-xs text-warmGray-400 mt-1">
                Purchased: {t.product}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Newsletter ────────────────────────────────────────── */
function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-charcoal py-16 md:py-20">
      <div className="container-wide text-center px-4">
        <p className="text-label text-gold-400 mb-4">Stay Connected</p>
        <h2 className="heading-serif text-3xl md:text-5xl text-white mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-warmGray-400 text-sm max-w-md mx-auto mb-8">
          Subscribe to receive exclusive offers, early access to new collections,
          and styling tips delivered to your inbox.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-xl text-gold-400 italic">
              Thank you! Check your inbox for your discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex gap-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3.5 bg-warmGray-800 border border-warmGray-700 text-white text-sm placeholder-warmGray-500 focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button
              type="submit"
              className="bg-gold-500 text-white px-6 py-3.5 font-sans text-xs font-medium tracking-ultra-wide uppercase hover:bg-gold-600 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ─── Home Page ─────────────────────────────────────────── */
export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
