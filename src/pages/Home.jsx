import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { products, testimonials, reels, categories } from '@/data/products';
import { useCart } from '@/components/cart/CartContext';

const Home = () => {
  const { addItem } = useCart();

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
        <img
          alt="Velmora hero"
          className="absolute inset-0 h-full w-full object-cover"
          src="https://picsum.photos/seed/velmora-hero/1600/900"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full items-center">
          <div className="container-editorial">
            <div className="max-w-2xl text-white animate-slide-up">
              <h1 className="font-serif text-5xl md:text-7xl">Crafted to be Treasured</h1>
              <p className="mt-4 text-base md:text-lg text-white/80">
                Demi-fine jewelry designed for quiet luxury. Warm gold, timeless silhouettes, and pieces meant to last.
              </p>
              <Link to="/shop" className="btn-primary mt-8">
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-b border-brand-border bg-white">
        <div className="container-editorial flex flex-wrap items-center justify-center gap-6 py-4 text-xs tracking-wide text-brand-muted md:gap-10">
          <span>Free Worldwide Shipping</span>
          <span className="hidden h-3 w-px bg-brand-border md:block" />
          <span>30-Day Returns</span>
          <span className="hidden h-3 w-px bg-brand-border md:block" />
          <span>18K Gold Plated</span>
          <span className="hidden h-3 w-px bg-brand-border md:block" />
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="section-padding bg-brand-bg">
        <div className="container-editorial">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-ink">Bestsellers</h2>
              <p className="mt-2 text-sm text-brand-muted">The pieces our community wears most.</p>
            </div>
            <Link to="/shop" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-brand-accent hover:text-brand-accentHover">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {products.slice(0, 5).map((product) => (
              <article key={product.id} className="group relative rounded-2xl bg-white p-3 shadow-soft transition hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-xl bg-brand-warm">
                  <img
                    alt={product.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                    src={product.images[0]}
                  />
                  <img
                    alt={`${product.name} alternate`}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
                    src={product.images[1]}
                  />
                  <button
                    onClick={() => addItem(product)}
                    className="absolute bottom-3 left-3 right-3 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-brand-ink opacity-0 transition group-hover:opacity-100 hover:bg-white"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="mt-4">
                  <p className="product-name text-sm">{product.name}</p>
                  <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
                </div>
              </article>
            ))}
          </div>

          <Link to="/shop" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-accent md:hidden">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Reel-style UGC row */}
      <section className="bg-white">
        <div className="container-editorial section-padding">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-ink">As Seen On</h2>
          <p className="mt-2 text-sm text-brand-muted">Real moments, real style.</p>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 pb-6 md:px-8">
          {reels.map((reel) => (
            <div key={reel.id} className="relative h-[420px] w-[260px] flex-shrink-0 overflow-hidden rounded-2xl">
              <img alt={reel.title} className="h-full w-full object-cover" src={reel.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif text-lg">{reel.title}</p>
                <p className="text-xs text-white/70">{reel.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by category */}
      <section className="section-padding bg-brand-bg">
        <div className="container-editorial">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-ink">Shop by Category</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative h-72 overflow-hidden rounded-2xl"
              >
                <img alt={category.label} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={category.image} />
                <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl text-white drop-shadow-md">{category.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="bg-white">
        <div className="container-editorial grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="overflow-hidden rounded-2xl">
            <img alt="Velmora brand story" className="h-full w-full object-cover" src="https://picsum.photos/seed/velmora-story/1000/1000" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-ink">Our Story</h2>
            <p className="mt-4 text-brand-muted">
              Velmora was born from a simple belief: fine jewelry should feel accessible, intentional, and deeply personal. Every piece is designed in California and crafted with care using premium materials that are kind to skin and the planet.
            </p>
            <Link to="/about" className="btn-outline mt-8 w-fit">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-bg">
        <div className="container-editorial">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-ink text-center">What Our Customers Say</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.id} className="rounded-2xl bg-white p-6 shadow-soft">
                <div className="flex gap-1 text-brand-gold">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-brand-ink">{item.text}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-muted">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-ink text-white">
        <div className="container-editorial section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl">Join for 10% off your first order</h2>
            <p className="mt-3 text-sm text-white/70">
              Be the first to know about new releases, styling stories, and exclusive offers.
            </p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Email address"
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/40"
              />
              <button type="submit" className="btn-primary">
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
