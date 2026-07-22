import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, Truck, RotateCcw, Shield } from 'lucide-react';
import ProductCard from '@/components/home/ProductCard';
import { products, testimonials, ugcItems, categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const bestsellers = products.filter((p) => p.bestseller);
  const heroRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, heroRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-velmora-1"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="relative z-10 flex h-full items-center">
          <div className="container-site">
            <div className="max-w-2xl">
              <h1 id="hero-title" className="font-serif text-5xl md:text-7xl text-white leading-[1.05]">
                Crafted to be Treasured
              </h1>
              <p id="hero-subtitle" className="mt-6 text-base md:text-lg text-white/85 leading-relaxed max-w-lg">
                Demi-fine jewelry in warm 18K gold plating, designed for everyday elegance and meaningful gifting.
              </p>
              <div className="mt-10">
                <Link to="/shop" className="btn-primary">
                  Shop the Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-brand-line bg-brand-surface">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-5 text-center text-xs md:text-sm text-brand-ink">
            <div className="flex items-center justify-center gap-2">
              <Truck className="h-4 w-4 text-brand-accent" />
              <span>Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <RotateCcw className="h-4 w-4 text-brand-accent" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-4 w-4 text-brand-accent" />
              <span>18K Gold Plated</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Star className="h-4 w-4 text-brand-accent" />
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="section-title">Bestsellers</h2>
              <p className="mt-3 text-brand-muted">Our most-loved pieces, chosen again and again.</p>
            </div>
            <Link to="/shop" className="hidden md:inline-flex text-sm font-semibold text-brand-accent hover:text-brand-accent-hover">
              View all
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 md:hidden text-center">
            <Link to="/shop" className="text-sm font-semibold text-brand-accent">
              View all
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel-style row */}
      <section className="pb-20 md:pb-28">
        <div className="container-site">
          <h2 className="section-title">As Worn By You</h2>
          <p className="mt-3 text-brand-muted">Tag @velmora to be featured.</p>
        </div>
        <div className="mt-8 flex gap-4 overflow-x-auto px-4 md:px-0 pb-4 snap-x snap-mandatory">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative h-[420px] w-[260px] shrink-0 snap-center overflow-hidden rounded-2xl bg-brand-warm"
            >
              <div className="absolute inset-0 flex items-center justify-center text-brand-subtle text-xs tracking-widest uppercase">
                UGC Preview
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-5">
                <p className="text-xs text-white/80">{item.handle}</p>
                <p className="font-serif text-lg text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by category */}
      <section className="pb-20 md:pb-28">
        <div className="container-site">
          <h2 className="section-title">Shop by Category</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative h-72 md:h-80 overflow-hidden rounded-2xl bg-brand-warm"
              >
                <div className="absolute inset-0 flex items-center justify-center text-brand-subtle text-xs tracking-widest uppercase">
                  {category.name}
                </div>
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-serif text-2xl text-brand-ink">{category.name}</p>
                  <p className="mt-1 text-sm text-brand-muted">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="pb-20 md:pb-28">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/5] rounded-2xl bg-brand-warm">
              <div className="h-full w-full flex items-center justify-center text-brand-subtle text-xs tracking-widest uppercase">
                Brand Story Image
              </div>
            </div>
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="mt-6 text-brand-ink leading-relaxed">
                Velmora was born from a simple belief: fine jewelry should feel within reach. We design demi-fine
                pieces in warm 18K gold plating, using responsibly sourced materials and timeless silhouettes that
                transition from day to evening.
              </p>
              <p className="mt-4 text-brand-ink leading-relaxed">
                Every piece is crafted to be worn, loved, and eventually passed down.
              </p>
              <Link to="/about" className="btn-outline mt-8">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-20 md:pb-28 bg-brand-warm">
        <div className="container-site">
          <h2 className="section-title text-center">What Our Customers Say</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="rounded-2xl bg-brand-surface p-8 shadow-sm">
                <div className="flex gap-1 text-brand-gold">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 font-serif text-lg text-brand-ink leading-relaxed">“{t.text}”</p>
                <p className="mt-4 text-sm font-semibold text-brand-ink">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-20 md:pb-28">
        <div className="container-site">
          <div className="rounded-2xl bg-brand-ink px-8 py-14 md:px-16 md:py-20 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white">Join for 10% off your first order</h2>
            <p className="mt-3 text-white/70">Be the first to know about new releases and exclusive offers.</p>
            <form
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks for subscribing!');
              }}
            >
              <input
                type="email"
                required
                placeholder="Email address"
                className="h-12 w-full sm:w-80 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
              <button type="submit" className="btn-primary bg-brand-gold hover:bg-brand-gold/90 text-brand-ink">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
