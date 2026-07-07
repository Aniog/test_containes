import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, RotateCcw, Shield, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { products, categories, testimonials } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import strkImgConfig from '../strk-img-config.json';

function getImgUrl(key) {
  const entry = strkImgConfig[key];
  return entry?.results?.[0]?.url || '';
}

/* ─── Hero Section ───────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          data-strk-bg-id="hero-bg-7a3f2e"
          data-strk-bg="luxury gold jewelry on model warm lighting editorial portrait"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold-muted mb-6 animate-fade-in">
          Demi-fine jewelry, crafted to be treasured
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream tracking-wide leading-tight mb-6 animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-base md:text-lg text-cream/70 max-w-xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          18K gold plated jewelry designed for the modern woman. Hypoallergenic, elegant, and made to last.
        </p>
        <Link
          to="/shop"
          className="btn-primary text-xs px-10 py-4 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="w-px h-8 bg-cream/30" />
      </div>
    </section>
  );
}

/* ─── Trust Bar ────────────────────────────────────────────── */
function TrustBar() {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Sparkles, text: '18K Gold Plated' },
    { icon: Shield, text: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-charcoal text-cream py-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon size={14} className="text-gold" />
              <span className="font-sans text-[11px] tracking-wider uppercase text-cream/70">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Bestsellers Section ──────────────────────────────────── */
function BestsellersSection() {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-4">
            Curated for you
          </p>
          <h2 className="heading-display mb-4">Bestsellers</h2>
          <div className="section-divider mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline text-xs">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── UGC Reel Section ────────────────────────────────────── */
function UGCReelSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const ugcItems = [
    { caption: 'Golden hour glow', query: 'woman wearing gold earrings close-up warm golden hour light portrait' },
    { caption: 'Layered perfection', query: 'gold necklaces layered on neck warm skin tone jewelry close-up' },
    { caption: 'Huggie season', query: 'gold huggie earrings on ear close-up warm lighting jewelry editorial' },
    { caption: 'Statement crystal', query: 'crystal necklace on collarbone warm lighting jewelry editorial portrait' },
    { caption: 'Everyday luxury', query: 'woman wearing gold jewelry warm light lifestyle portrait soft focus' },
    { caption: 'Ear stack goals', query: 'multiple gold earrings on ear warm lighting jewelry editorial close-up' },
    { caption: 'Gift worthy', query: 'luxury jewelry gift box gold warm lighting unboxing moment' },
    { caption: 'Date night ready', query: 'woman wearing gold necklace earrings elegant warm lighting portrait' },
  ];

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
    }
    return () => el?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">
              #VelmoraStyle
            </p>
            <h2 className="heading-section">Worn & Loved</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              className="p-2 border border-border hover:border-charcoal disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} className="text-charcoal" />
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              className="p-2 border border-border hover:border-charcoal disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} className="text-charcoal" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling reel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
      >
        {ugcItems.map((item, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] rounded-lg overflow-hidden group"
          >
            <img
              data-strk-img-id={`ugc-reel-${i}`}
              data-strk-img={`gold jewelry worn editorial lifestyle warm light ${item.query}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src={getImgUrl(`ugc-reel-${i}`)}
              alt={item.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream tracking-wide">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Category Tiles ───────────────────────────────────────── */
function CategorySection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-4">
            Explore
          </p>
          <h2 className="heading-display mb-4">Shop by Category</h2>
          <div className="section-divider mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden group"
            >
              <img
                data-strk-img-id={`cat-${cat.id}-img`}
                data-strk-img={`[cat-${cat.id}-name] [cat-${cat.id}-desc] gold jewelry product editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={getImgUrl(`cat-${cat.id}-img`)}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={`cat-${cat.id}-name`}
                  className="font-serif text-2xl md:text-3xl text-cream tracking-widest uppercase mb-2"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-${cat.id}-desc`}
                  className="font-sans text-xs text-cream/70 tracking-wider"
                >
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Brand Story Section ──────────────────────────────────── */
function BrandStorySection() {
  return (
    <section className="py-20 md:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-4e8c2a"
              data-strk-img="gold jewelry artisan craftsmanship workshop warm lighting editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src={getImgUrl('brand-story-img-4e8c2a')}
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-6">
              Our Story
            </p>
            <h2 className="heading-display mb-6">Jewelry That Tells Your Story</h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="body-text mb-6">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as
              special as she is. We create demi-fine pieces that bridge the gap between
              costume and fine jewelry — 18K gold-plated, hypoallergenic, and designed
              to be worn every single day.
            </p>
            <p className="body-text mb-10">
              Our pieces are crafted with intention, designed in New York, and made to
              last. Because we believe luxury should be accessible, not exclusive.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-sm tracking-wider uppercase text-charcoal hover:text-gold transition-colors group"
            >
              Read Our Story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials Section ─────────────────────────────────── */
function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-4">
            Loved by thousands
          </p>
          <h2 className="heading-display mb-4">What Our Customers Say</h2>
          <div className="section-divider mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-cream-dark/50 border border-border/50 rounded-sm p-8 text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-sans text-sm text-charcoal/80 leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-sans text-xs font-medium text-charcoal tracking-wider">
                {t.name}
              </p>
              <p className="font-sans text-[11px] text-warm-gray mt-1">
                on {t.product}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Newsletter Section ───────────────────────────────────── */
function NewsletterSection() {
  return (
    <section className="bg-gold py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white tracking-wide mb-3">
          Join for 10% off your first order
        </h2>
        <p className="font-sans text-sm text-white/80 mb-8">
          Be the first to discover new arrivals, exclusive offers, and styling tips.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3.5 bg-white/20 border border-white/30 text-white placeholder-white/50 font-sans text-sm focus:outline-none focus:border-white transition-colors"
            required
          />
          <button
            type="submit"
            className="px-8 py-3.5 bg-charcoal text-white font-sans text-xs tracking-wider uppercase hover:bg-charcoal-light transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        <p className="font-sans text-[11px] text-white/50 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

/* ─── Homepage ─────────────────────────────────────────────── */
export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <main ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCReelSection />
      <CategorySection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
