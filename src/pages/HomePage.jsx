import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { products, categories, testimonials, reels } from '@/data/products';

const HomePage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[92vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
          alt="Gold jewelry editorial"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="relative z-10 flex h-full items-end">
          <div className="container-editorial pb-16 md:pb-24">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white text-balance">
              Crafted to be Treasured
            </h1>
            <p className="mt-4 max-w-xl text-sm md:text-base text-white/80">
              Demi-fine jewelry designed for quiet luxury. Warm gold, considered details, and pieces meant to last.
            </p>
            <Link to="/shop" className="btn-primary mt-8">
              Shop the Collection <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-brand-line bg-brand-surface">
        <div className="container-editorial flex flex-wrap items-center justify-center gap-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-brand-muted md:gap-10">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline h-3 w-px bg-brand-line" />
          <span>30-Day Returns</span>
          <span className="hidden md:inline h-3 w-px bg-brand-line" />
          <span>18K Gold Plated</span>
          <span className="hidden md:inline h-3 w-px bg-brand-line" />
          <span>Hypoallergenic</span>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 md:py-24">
        <div className="container-editorial">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="section-title">Bestsellers</h2>
              <p className="mt-2 text-sm text-brand-muted">Our most-loved pieces, chosen again and again.</p>
            </div>
            <Link to="/shop" className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-ink hover:text-brand-accent">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products.slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/shop" className="btn-outline">View All</Link>
          </div>
        </div>
      </section>

      {/* Reel-style UGC row */}
      <section className="border-y border-brand-line bg-brand-surface">
        <div className="container-editorial py-10">
          <h2 className="section-title text-center">Worn by You</h2>
          <p className="mt-2 text-center text-sm text-brand-muted">Tag @velmora to be featured.</p>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 pb-6 md:px-8 md:pb-8">
          {reels.map((reel) => (
            <div key={reel.id} className="relative h-[420px] w-[220px] flex-shrink-0 overflow-hidden rounded-2xl bg-brand-warm">
              <img
                src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80"
                alt={reel.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="font-serif text-sm text-white">{reel.title}</p>
                <p className="text-xs text-white/70">{reel.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by category */}
      <section className="py-16 md:py-24">
        <div className="container-editorial">
          <h2 className="section-title text-center">Shop by Category</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative h-72 overflow-hidden rounded-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80"
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-2xl text-white">{category.name}</h3>
                  <p className="mt-1 text-xs text-white/80">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="border-y border-brand-line bg-brand-surface">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-16 md:py-24">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=80"
              alt="Velmora brand story"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="section-title">Our Story</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              Velmora was born from a simple belief: fine jewelry should feel within reach. We design demi-fine pieces in warm 18K gold plating, using ethically sourced materials and timeless silhouettes. Every piece is made to be worn, loved, and passed down.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-ink hover:text-brand-accent">
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container-editorial">
          <h2 className="section-title text-center">What Our Customers Say</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((item) => (
              <div key={item.id} className="rounded-2xl border border-brand-line bg-brand-surface p-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">"{item.text}"</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-ink">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-ink">
        <div className="container-editorial py-16 md:py-24 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-white/70">Be the first to know about new arrivals, stories, and exclusive offers.</p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/40"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
