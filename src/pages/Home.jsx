import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Mail } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, testimonials, ugcItems, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const heroRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) {
      return ImageHelper.loadImages(strkImgConfig, pageRef.current);
    }
  }, []);

  const heroTitleId = 'hero-title';
  const heroSubId = 'hero-subtitle';

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          data-strk-bg-id="hero-bg-main"
          data-strk-bg={`[${heroSubId}] [${heroTitleId}]`}
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-base"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base/40 via-base/20 to-base/80" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p
            id={heroSubId}
            className="font-serif italic text-lg sm:text-xl text-secondary mb-4"
          >
            Demi-Fine Jewelry
          </p>
          <h1
            id={heroTitleId}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-primary leading-[1.1] mb-6"
          >
            Crafted to be<br />Treasured
          </h1>
          <p className="text-secondary text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
            Timeless pieces designed for everyday elegance. 18K gold-plated, hypoallergenic, and made to last.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-accent text-base px-10 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-accent-hover transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 text-[11px] uppercase tracking-[0.15em] text-muted">
            <span>Free Worldwide Shipping</span>
            <span className="hidden sm:inline text-hairline">|</span>
            <span>30-Day Returns</span>
            <span className="hidden sm:inline text-hairline">|</span>
            <span>18K Gold Plated</span>
            <span className="hidden sm:inline text-hairline">|</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-3">Bestsellers</h2>
            <p className="text-secondary text-sm max-w-md mx-auto">
              Our most-loved pieces, chosen by women who know quality.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-12 sm:py-16 border-t border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-primary text-center">@velmorajewelry</h2>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 px-4 sm:px-6 lg:px-8 pb-2" style={{ minWidth: 'max-content' }}>
            {ugcItems.map((item, idx) => {
              const titleId = `ugc-title-${item.id}`;
              const subId = `ugc-sub-${item.id}`;
              return (
                <div
                  key={item.id}
                  className="relative w-[180px] sm:w-[220px] aspect-[9/16] bg-base overflow-hidden flex-shrink-0 group"
                >
                  <img
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${subId}] [${titleId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p id={titleId} className="font-serif text-sm text-primary">
                      {item.title}
                    </p>
                    <p id={subId} className="text-[11px] text-white/70 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 sm:py-24 border-t border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-3">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((cat) => {
              const titleId = `cat-title-${cat.id}`;
              return (
                <Link
                  key={cat.id}
                  to="/shop"
                  className="relative aspect-[4/5] bg-base overflow-hidden group"
                >
                  <img
                    data-strk-img-id={`cat-img-${cat.id}`}
                    data-strk-img={`[${titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      id={titleId}
                      className="font-serif text-xl sm:text-2xl text-primary tracking-[0.1em] group-hover:tracking-[0.2em] transition-all duration-300"
                    >
                      {cat.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 sm:py-24 border-t border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="aspect-[4/5] bg-base overflow-hidden">
              <img
                data-strk-img-id="brand-story-img"
                data-strk-img="[brand-story-body] [brand-story-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2
                id="brand-story-title"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight"
              >
                Designed with Intention
              </h2>
              <p
                id="brand-story-body"
                className="text-secondary leading-relaxed text-sm sm:text-base"
              >
                Velmora was born from a belief that luxury should be accessible, and that the jewelry you wear every day deserves to be extraordinary. Each piece is designed in small batches, using 18K gold plating on hypoallergenic bases. We believe in slow fashion, timeless silhouettes, and the quiet confidence of quality.
              </p>
              <p className="text-secondary leading-relaxed text-sm sm:text-base">
                From our studio to your jewelry box, every detail is considered. No trends. No compromises. Just pieces you will reach for, again and again.
              </p>
              <Link
                to="#"
                className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-[0.2em] font-medium hover:text-accent-hover transition-colors pt-2"
              >
                Our Story
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 border-t border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-3">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-surface p-6 sm:p-8 border border-hairline">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-secondary text-sm leading-relaxed mb-5">
                  "{t.text}"
                </p>
                <p className="text-xs uppercase tracking-[0.15em] text-primary font-medium">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-24 bg-light-surface">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-base mb-3">
            Join the Inner Circle
          </h2>
          <p className="text-muted text-sm sm:text-base mb-8">
            Be the first to know about new drops, exclusive offers, and styling inspiration. Plus, enjoy 10% off your first order.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-1">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white border border-hairline text-base placeholder:text-muted pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-accent text-base px-8 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-accent-hover transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[11px] text-muted mt-4">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
