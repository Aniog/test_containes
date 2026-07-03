import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/products/ProductCard';
import { products, categories, testimonials } from '@/data/products';

const Home = () => {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[640px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-velmora"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 id="hero-title" className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-surface tracking-wide leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-4 sm:mt-6 text-surface/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Demi-fine jewelry designed for quiet luxury. Warm, editorial, and made to be worn every day.
          </p>
          <div className="mt-8 sm:mt-10">
            <Link to="/shop">
              <Button size="lg" className="shadow-gold">Shop the Collection</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-b border-base/5 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] tracking-widest-xl uppercase text-ink-muted">
            <span>Free Worldwide Shipping</span>
            <span className="hidden sm:inline text-base/10">·</span>
            <span>30-Day Returns</span>
            <span className="hidden sm:inline text-base/10">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden sm:inline text-base/10">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-ink">Bestsellers</h2>
              <p className="mt-2 text-sm text-ink-muted">The pieces our community wears most.</p>
            </div>
            <Link to="/shop" className="hidden md:inline-flex items-center gap-2 text-xs tracking-widest-xl uppercase text-gold hover:text-gold-light transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 md:hidden text-center">
            <Link to="/shop">
              <Button variant="outline" size="sm">View all</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel-style row */}
      <section className="py-12 md:py-16 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl tracking-wide text-ink mb-6">As seen on</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-40 h-72 md:w-48 md:h-80 rounded-sm overflow-hidden snap-center"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-strk-bg-id={`ugc-${i}`}
                  data-strk-bg="[ugc-caption]"
                  data-strk-bg-ratio="9x16"
                  data-strk-bg-width="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <p id="ugc-caption" className="hidden">gold jewelry editorial portrait</p>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-serif text-xs text-surface/90 italic">Worn by our community</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-ink mb-8 md:mb-12">Shop by category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-velmora group-hover:scale-105"
                  data-strk-bg-id={`category-${cat.id}`}
                  data-strk-bg={`[category-${cat.id}-name]`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="900"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span id={`category-${cat.id}-name`} className="hidden">{cat.name}</span>
                  <span className="font-serif text-xl md:text-2xl tracking-widest-xl text-surface group-hover:tracking-[0.32em] transition-all duration-500">
                    {cat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-surface">
              <div
                className="absolute inset-0 bg-cover bg-center"
                data-strk-bg-id="story-image"
                data-strk-bg="[story-heading]"
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="1000"
              />
              <span id="story-heading" className="hidden">Velmora fine jewelry brand story</span>
            </div>
            <div className="space-y-5">
              <h2 id="story-title" className="font-serif text-2xl md:text-3xl tracking-wide text-ink">Our Story</h2>
              <p className="text-sm md:text-base text-ink-muted leading-relaxed">
                Velmora was born from a simple belief: fine jewelry should feel effortless. We design demi-fine pieces in warm 18K gold plating, with careful attention to weight, finish, and how they sit against the skin.
              </p>
              <p className="text-sm md:text-base text-ink-muted leading-relaxed">
                Every piece is made in small batches, with recycled metals and hypoallergenic materials. Designed in studio. Worn in real life.
              </p>
              <Link to="/about">
                <Button variant="outline" size="sm">Read more</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-ink mb-8 md:mb-12">What they say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="p-6 md:p-8 border border-base/5 rounded-sm bg-surface-alt/50">
                <div className="flex gap-1 text-gold mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-ink leading-relaxed mb-4">“{t.text}”</p>
                <p className="text-xs tracking-widest-xl uppercase text-ink-muted">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-base text-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-surface">Join for 10% off your first order</h2>
            <p className="mt-3 text-sm text-surface/70">Sign up for early access, new arrivals, and journal stories.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Email address"
                className="flex-1 bg-base-soft border border-surface/10 rounded-sm px-4 py-3 text-sm text-surface placeholder:text-surface/40 focus:outline-none focus:border-gold transition-colors"
              />
              <Button size="lg" className="shadow-gold">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
