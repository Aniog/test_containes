import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { products, testimonials } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

/* ─── Hero Section ────────────────────────────────────────────── */
function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      return ImageHelper.loadImages(strkImgConfig, heroRef.current);
    }
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-headline] [hero-sub]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/60 via-charcoal-900/40 to-charcoal-900/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        <p className="text-gold-300 text-xs tracking-mega-wide uppercase mb-4 font-medium">
          Fine Jewelry Collection
        </p>
        <h1 id="hero-headline" className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 font-light leading-tight mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p id="hero-sub" className="text-cream-200/80 text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-8">
          18K gold-plated demi-fine jewelry, designed for the modern woman.
          Everyday luxury that lasts.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-500 text-charcoal-900 text-xs tracking-ultra-wide uppercase font-semibold hover:bg-gold-400 transition-all duration-300"
        >
          Shop the Collection
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-50/50">
        <span className="text-[10px] tracking-ultra-wide uppercase">Scroll</span>
        <div className="w-px h-8 bg-cream-50/30" />
      </div>
    </section>
  );
}

/* ─── Trust Bar ──────────────────────────────────────────────── */
function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-charcoal-900 border-y border-charcoal-700/30">
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 sm:gap-x-10">
        {items.map((item) => (
          <span
            key={item}
            className="text-[11px] tracking-ultra-wide uppercase text-cream-300/80 font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Bestsellers ────────────────────────────────────────────── */
function Bestsellers() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-gold-600 text-xs tracking-mega-wide uppercase mb-2 font-medium">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800 font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs tracking-ultra-wide uppercase font-medium text-charcoal-800 border-b border-charcoal-800 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors"
          >
            View All Jewelry
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── UGC Reel Strip ─────────────────────────────────────────── */
function UGCReel() {
  const scrollRef = useRef(null);
  const reelRef = useRef(null);

  useEffect(() => {
    if (reelRef.current) {
      return ImageHelper.loadImages(strkImgConfig, reelRef.current);
    }
  }, []);

  const ugcItems = [
    { id: 'ugc-1', caption: 'Golden hour glow', ratio: '9x16' },
    { id: 'ugc-2', caption: 'Stacking season', ratio: '9x16' },
    { id: 'ugc-3', caption: 'Date night ready', ratio: '9x16' },
    { id: 'ugc-4', caption: 'Everyday essentials', ratio: '9x16' },
    { id: 'ugc-5', caption: 'Gift-worthy details', ratio: '9x16' },
    { id: 'ugc-6', caption: 'Minimalist beauty', ratio: '9x16' },
  ];

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 220, behavior: 'smooth' });
    }
  };

  return (
    <section ref={reelRef} className="py-16 md:py-20 bg-charcoal-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-gold-400 text-xs tracking-mega-wide uppercase mb-2 font-medium">
              As Seen On You
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-cream-50 font-light">
              #VelmoraStyle
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 flex items-center justify-center border border-cream-50/20 text-cream-50/60 hover:text-cream-50 hover:border-cream-50/40 transition-colors bg-transparent rounded-none"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 flex items-center justify-center border border-cream-50/20 text-cream-50/60 hover:text-cream-50 hover:border-cream-50/40 transition-colors bg-transparent rounded-none"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 px-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-40 sm:w-48 aspect-[9/16] overflow-hidden snap-start group"
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={`[ugc-caption-${item.id}]`}
              data-strk-img-ratio={item.ratio}
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${item.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream-50/90 italic"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Category Tiles ─────────────────────────────────────────── */
function CategoryTiles() {
  const catRef = useRef(null);

  useEffect(() => {
    if (catRef.current) {
      return ImageHelper.loadImages(strkImgConfig, catRef.current);
    }
  }, []);

  const categories = [
    { id: 'earrings', label: 'Earrings', query: 'category=earrings' },
    { id: 'necklaces', label: 'Necklaces', query: 'category=necklaces' },
    { id: 'huggies', label: 'Huggies', query: 'category=huggies' },
  ];

  return (
    <section ref={catRef} className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-gold-600 text-xs tracking-mega-wide uppercase mb-2 font-medium">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800 font-light">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?${cat.query}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={`[cat-label-${cat.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal-900/30 group-hover:bg-charcoal-900/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3
                    id={`cat-label-${cat.id}`}
                    className="font-serif text-2xl md:text-3xl text-cream-50 font-light tracking-ultra-wide uppercase"
                  >
                    {cat.label}
                  </h3>
                  <span className="inline-block mt-2 text-[11px] tracking-ultra-wide uppercase text-cream-50/70 border-b border-cream-50/40 pb-0.5 group-hover:text-gold-300 group-hover:border-gold-300 transition-colors">
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Brand Story ────────────────────────────────────────────── */
function BrandStory() {
  const storyRef = useRef(null);

  useEffect(() => {
    if (storyRef.current) {
      return ImageHelper.loadImages(strkImgConfig, storyRef.current);
    }
  }, []);

  return (
    <section ref={storyRef} id="about" className="py-16 md:py-24 px-4 bg-warm-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-heading] [story-text]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora jewelry craftsmanship"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="py-4">
          <p className="text-gold-600 text-xs tracking-mega-wide uppercase mb-3 font-medium">
            Our Story
          </p>
          <h2 id="story-heading" className="font-serif text-3xl md:text-4xl text-charcoal-800 font-light leading-snug mb-6">
            Jewelry That Feels<br />Like You
          </h2>
          <div className="w-10 h-px bg-gold-400 mb-6" />
          <p id="story-text" className="text-charcoal-700/80 text-sm md:text-base leading-relaxed mb-4">
            Velmora was born from a simple belief: beautiful jewelry shouldn't cost a fortune
            or compromise on quality. We design pieces that transition seamlessly from
            morning coffee to evening cocktails.
          </p>
          <p className="text-charcoal-700/80 text-sm md:text-base leading-relaxed mb-8">
            Every piece is crafted with 18K gold plating over sterling silver,
            designed to be hypoallergenic and built to last. We work directly with
            artisans, cutting out middlemen to bring you luxury at an accessible price.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs tracking-ultra-wide uppercase font-medium text-charcoal-800 border-b border-charcoal-800 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors"
          >
            Discover Our Collection
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ───────────────────────────────────────────── */
function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-gold-600 text-xs tracking-mega-wide uppercase mb-2 font-medium">
            Loved By Thousands
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800 font-light">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-warm-50 border border-cream-300/50 p-6 md:p-8 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold-500 text-gold-500"
                  />
                ))}
              </div>

              <p className="text-charcoal-700 text-sm leading-relaxed mb-4 italic">
                "{review.text}"
              </p>

              <p className="text-xs tracking-ultra-wide uppercase font-medium text-charcoal-800">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Newsletter ─────────────────────────────────────────────── */
function Newsletter() {
  return (
    <section className="py-16 md:py-20 px-4 bg-charcoal-900">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gold-400 text-xs tracking-mega-wide uppercase mb-3 font-medium">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream-50 font-light mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-cream-300/70 text-sm mb-8">
          Be the first to discover new arrivals, exclusive offers, and styling inspiration.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3.5 bg-charcoal-800 border border-charcoal-700/50 text-cream-100 text-sm placeholder:text-cream-400/40 focus:outline-none focus:border-gold-600 transition-colors rounded-none"
          />
          <button
            type="submit"
            className="px-8 py-3.5 bg-gold-500 text-charcoal-900 text-xs tracking-ultra-wide uppercase font-semibold hover:bg-gold-400 transition-colors rounded-none border-none whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <p className="text-cream-400/40 text-[11px] mt-4">
          Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}

/* ─── Home Page ──────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div>
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
