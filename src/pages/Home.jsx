import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getBestsellers, categories, ugcItems, testimonials } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCRow />
      <ShopByCategory />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-cream/80 text-xs md:text-sm tracking-[0.3em] uppercase font-medium mb-4">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-light leading-[1.1] max-w-3xl"
        >
          Crafted to be
          <br />
          Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-5 text-cream/80 text-sm md:text-base max-w-md font-light"
        >
          Elevated essentials designed for everyday luxury. Ethically crafted, meant to last.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block px-8 py-3.5 bg-gold text-espresso text-xs tracking-widest font-medium uppercase hover:bg-gold-hover transition-colors"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-10 bg-cream/40 animate-pulse" />
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 md:py-3.5">
          {items.map((item, i) => (
            <React.Fragment key={item}>
              <span className="text-[11px] md:text-xs tracking-wider text-cream/80 whitespace-nowrap">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:inline text-cream/30">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function Bestsellers() {
  const bestsellers = getBestsellers();

  return (
    <section className="py-16 md:py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso font-light">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-stone max-w-md mx-auto">
            Our most-loved pieces, worn and adored by thousands of women worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-espresso hover:text-gold transition-colors border-b border-espresso hover:border-gold pb-0.5"
          >
            View All
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso font-light">
              As Seen On You
            </h2>
            <p className="mt-2 text-sm text-stone">
              Tag @velmorajewelry to be featured.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-1.5 text-xs tracking-widest uppercase font-medium text-espresso hover:text-gold transition-colors"
          >
            Shop All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start relative group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-parchment rounded-sm overflow-hidden relative">
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-caption-${item.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={`ugc-caption-${item.id}`}
                  className="font-serif text-sm text-white italic"
                >
                  {item.caption}
                </p>
                <p className="text-[11px] text-white/70 mt-1">{item.user}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ShopByCategory() {
  return (
    <section className="py-16 md:py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso font-light">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] bg-parchment overflow-hidden rounded-sm"
            >
              <img
                data-strk-img-id={cat.imageId}
                data-strk-img={`[${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3
                    id={cat.titleId}
                    className="font-serif text-2xl md:text-3xl text-white tracking-wide"
                  >
                    {cat.label}
                  </h3>
                  <span className="inline-block mt-3 text-[11px] tracking-widest uppercase text-white/80 font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore
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

function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[4/5] md:aspect-[3/4] bg-parchment overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-body]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:py-8">
            <p className="text-xs tracking-[0.25em] uppercase text-gold font-medium mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso font-light leading-tight"
            >
              Designed with Intention. Made with Care.
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 text-stone leading-relaxed text-sm md:text-base"
            >
              Velmora was born from a simple belief: luxury should feel accessible, and beauty
              should never come at the cost of conscience. Every piece in our collection is
              designed in-house and crafted by skilled artisans using responsibly sourced
              materials.
            </p>
            <p className="mt-4 text-stone leading-relaxed text-sm md:text-base">
              We create jewelry that moves with you — from morning coffee to evening celebrations.
              Pieces that become part of your story.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs tracking-widest uppercase font-medium text-espresso hover:text-gold transition-colors border-b border-espresso hover:border-gold pb-0.5"
            >
              Read Our Story
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso font-light">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream p-6 md:p-8 rounded-sm border border-border"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="text-espresso text-sm leading-relaxed italic font-serif">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-xs tracking-wider uppercase text-stone font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-20 bg-espresso">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-cream font-light">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 text-sm text-stone-light">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8 p-4 bg-espresso-light rounded-sm">
            <p className="text-sm text-cream">
              Thank you for subscribing. Check your inbox for your discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-cream/10 border border-espresso-light text-cream text-sm placeholder:text-stone-light focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold text-espresso text-xs tracking-widest font-medium uppercase hover:bg-gold-hover transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
