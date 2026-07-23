import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { products, testimonials, ugcPosts } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

/* ── Hero ── */
function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-velmora-base"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-white/80 text-xs md:text-sm tracking-widest-xl uppercase mb-4 md:mb-6">
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-4 md:mb-6"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-white/80 text-sm md:text-base font-light max-w-lg mx-auto mb-8 md:mb-10"
        >
          Timeless gold pieces designed for everyday elegance and unforgettable moments.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold text-white px-10 py-4 text-xs font-medium tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}

/* ── Trust Bar ── */
function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];
  return (
    <div className="bg-velmora-white border-b border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 md:py-4">
          {items.map((item, i) => (
            <React.Fragment key={item}>
              <span className="text-[11px] md:text-xs font-medium tracking-widest uppercase text-velmora-muted">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:inline text-velmora-border">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Bestsellers ── */
function BestsellersSection() {
  const bestsellers = products.filter(p => p.tags?.includes('bestseller'));
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-widest-xl uppercase text-velmora-muted mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-base">
            Our Bestsellers
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10 md:mt-14">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-velmora-base hover:text-velmora-gold transition-colors border-b border-velmora-base hover:border-velmora-gold pb-1"
          >
            View All Products
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── UGC Reels Row ── */
function UGCSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <div>
            <p className="text-xs tracking-widest-xl uppercase text-velmora-muted mb-2">
              @velmorajewelry
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-base">
              As Seen On You
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 border border-velmora-border flex items-center justify-center hover:border-velmora-base transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 border border-velmora-border flex items-center justify-center hover:border-velmora-base transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {ugcPosts.map((post, idx) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-52 md:w-64 snap-start relative group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-velmora-cream overflow-hidden rounded-sm">
              <img
                data-strk-img-id={`ugc-${post.id}`}
                data-strk-img={`[ugc-caption-${post.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${post.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
              >
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Shop by Category ── */
function CategorySection() {
  const cats = [
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'huggies', label: 'Huggies' },
  ];

  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-widest-xl uppercase text-velmora-muted mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-base">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cats.map(cat => (
            <Link
              key={cat.id}
              to="/shop"
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-base"
            >
              <img
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={`[cat-label-${cat.id}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3
                    id={`cat-label-${cat.id}`}
                    className="font-serif text-2xl md:text-3xl text-white tracking-wider"
                  >
                    {cat.label}
                  </h3>
                  <span className="inline-block mt-3 text-xs tracking-widest uppercase text-white/80 border-b border-white/40 pb-1 group-hover:border-white transition-colors">
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

/* ── Brand Story ── */
function BrandStorySection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="aspect-[4/5] bg-velmora-cream overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-title] [brand-text]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:py-8">
            <p className="text-xs tracking-widest-xl uppercase text-velmora-muted mb-4">
              Since 2019
            </p>
            <h2
              id="brand-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-base leading-tight mb-6"
            >
              Jewelry That Tells Your Story
            </h2>
            <p
              id="brand-text"
              className="text-velmora-muted leading-relaxed mb-6"
            >
              Velmora was born from a belief that beautiful, well-crafted jewelry should not be
              out of reach. Each piece in our collection is designed in-house and crafted with
              18K gold plating over premium base metals — delivering the look and feel of fine
              jewelry at a fraction of the price.
            </p>
            <p className="text-velmora-muted leading-relaxed mb-8">
              We obsess over details so you do not have to. From the weight of a huggie to the
              clasp on a necklace, every element is considered, tested, and refined until it
              feels exactly right.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-velmora-base hover:text-velmora-gold transition-colors border-b border-velmora-base hover:border-velmora-gold pb-1"
            >
              Our Story
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-widest-xl uppercase text-velmora-muted mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-base">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-velmora-white p-8 md:p-10 border border-velmora-border"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-velmora-gold fill-velmora-gold"
                  />
                ))}
              </div>
              <p className="text-velmora-base leading-relaxed mb-6 text-sm md:text-base">
                "{t.text}"
              </p>
              <p className="text-xs font-medium tracking-widest uppercase text-velmora-muted">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Newsletter ── */
function NewsletterSection() {
  return (
    <section className="py-16 md:py-20 bg-velmora-base">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-8 h-8 text-velmora-gold mx-auto mb-4" />
        <h2 className="font-serif text-2xl md:text-3xl text-white font-light mb-3">
          Join for 10% Off
        </h2>
        <p className="text-white/70 text-sm mb-8">
          Subscribe for exclusive offers, new arrivals, and styling inspiration.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={e => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/50 px-4 py-3 text-sm outline-none focus:border-velmora-gold transition-colors"
          />
          <button
            type="submit"
            className="bg-velmora-gold text-white px-8 py-3 text-xs font-medium tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
        <p className="text-white/40 text-[11px] mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

/* ── Home Page ── */
export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <CategorySection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
