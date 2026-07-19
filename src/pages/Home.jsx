import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { products, categories, testimonials, reels } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const Home = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
          alt="Gold jewelry editorial"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl text-white">
            <p className="text-xs uppercase tracking-widest text-white/80 mb-4">Demi-Fine Jewelry</p>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-5">Crafted to be Treasured</h1>
            <p className="text-sm md:text-base text-white/85 leading-relaxed mb-8">
              Modern heirlooms in 18K gold. Designed for everyday elegance and the moments that matter.
            </p>
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-brand-line bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 py-4 text-xs uppercase tracking-widest text-brand-muted">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline h-3 w-px bg-brand-line" />
            <span>30-Day Returns</span>
            <span className="hidden md:inline h-3 w-px bg-brand-line" />
            <span>18K Gold Plated</span>
            <span className="hidden md:inline h-3 w-px bg-brand-line" />
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="section-subtitle mb-2">Curated favorites</p>
            <h2 className="section-title">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-muted hover:text-brand-ink transition-colors">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="btn-outline">View all</Link>
        </div>
      </section>

      {/* Reel-style UGC Row */}
      <section className="border-y border-brand-line bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <p className="section-subtitle mb-6 text-center">@velmora</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="relative h-[420px] w-[260px] flex-shrink-0 snap-center overflow-hidden rounded-2xl bg-brand-warm"
              >
                <img
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80"
                  alt={reel.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-serif text-lg leading-snug">{reel.title}</p>
                  <p className="text-xs text-white/80 mt-1">{reel.handle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-10">
          <p className="section-subtitle mb-2">Find your signature piece</p>
          <h2 className="section-title">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative h-[360px] md:h-[420px] overflow-hidden rounded-2xl"
            >
              <img
                src={category.image}
                alt={category.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white tracking-wide">{category.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white border-y border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=900&q=80"
                alt="Brand story"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="section-subtitle mb-3">Our Story</p>
              <h2 className="section-title mb-5">Jewelry meant to be lived in</h2>
              <p className="text-sm md:text-base text-brand-muted leading-relaxed mb-6">
                Velmora was founded on a simple belief: fine jewelry should feel as good as it looks. We design demi-fine pieces in recycled 18K gold-plated brass, with hypoallergenic finishes and thoughtful details that hold up to real life.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-ink hover:text-brand-accent transition-colors">
                Read more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-10">
          <p className="section-subtitle mb-2">Kind words</p>
          <h2 className="section-title">What our customers say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <div key={review.id} className="rounded-2xl border border-brand-line bg-white p-6 md:p-8">
              <div className="flex items-center gap-1 text-brand-accent mb-4">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm md:text-base text-brand-ink leading-relaxed mb-5">“{review.text}”</p>
              <p className="text-xs uppercase tracking-widest text-brand-muted">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-ink text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Join for 10% off your first order</h2>
            <p className="text-sm text-white/75 mb-8">Be the first to know about new releases, styling stories, and exclusive offers.</p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks for subscribing!');
              }}
            >
              <input
                type="email"
                required
                placeholder="Email address"
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white/60"
              />
              <button type="submit" className="btn-primary bg-white text-brand-ink hover:bg-white/90">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;