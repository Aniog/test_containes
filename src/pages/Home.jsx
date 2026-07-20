import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { products, categories, testimonials } from "@/data/products";

const Home = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <main>
      <section className="relative h-[92vh] min-h-[640px]">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
          alt="Gold jewelry editorial"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-end pb-20">
          <div className="max-w-2xl text-white">
            <p className="eyebrow text-white/80 mb-4">New Collection</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">Crafted to be Treasured</h1>
            <p className="mt-5 text-base md:text-lg text-white/85 max-w-lg">
              Demi-fine jewelry designed for quiet luxury. Warm gold, considered details, and pieces meant to be worn every day.
            </p>
            <div className="mt-8">
              <Link to="/shop" className="btn-primary">
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border-soft bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-xs font-semibold tracking-[0.14em] uppercase text-ink-secondary">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline text-border">|</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline text-border">|</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline text-border">|</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow mb-2">Curated</p>
            <h2 className="section-heading text-3xl md:text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-ink-secondary hover:text-ink">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="btn-outline">View All</Link>
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-2">From the Community</p>
              <h2 className="section-heading text-3xl md:text-4xl">Worn by You</h2>
            </div>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="relative min-w-[220px] md:min-w-[260px] snap-center rounded-sm overflow-hidden bg-black text-white"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-[360px] w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <p className="product-name text-xs text-white/90">{product.name}</p>
                  <p className="mt-1 text-sm text-white/75">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <p className="eyebrow mb-2">Categories</p>
          <h2 className="section-heading text-3xl md:text-4xl">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative h-[420px] overflow-hidden rounded-sm"
            >
              <img
                src={category.image}
                alt={category.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="product-name text-white text-lg">{category.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-border-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=1200&q=80"
                alt="Velmora brand story"
                className="h-[480px] w-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <p className="eyebrow">Our Story</p>
              <h2 className="section-heading text-3xl md:text-4xl">Jewelry with intention</h2>
              <p className="text-ink-secondary leading-relaxed">
                Velmora was founded on a simple belief: fine jewelry should feel accessible, wearable, and meaningful. We design each piece in-house using recycled metals and ethically sourced crystals, finished with 18K gold plating for lasting warmth.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 btn-outline">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <p className="eyebrow mb-2">Reviews</p>
          <h2 className="section-heading text-3xl md:text-4xl">What our customers say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((review) => (
            <div key={review.id} className="card-surface rounded-sm p-8">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-ink-secondary leading-relaxed">“{review.text}”</p>
              <p className="mt-4 text-xs font-semibold tracking-[0.12em] uppercase text-ink-muted">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="eyebrow text-white/70 mb-3">Newsletter</p>
              <h2 className="font-serif text-3xl md:text-4xl">Join for 10% off your first order</h2>
              <p className="mt-3 text-white/75">Early access to new drops, styling stories, and exclusive offers.</p>
            </div>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for subscribing!");
              }}
            >
              <input
                type="email"
                required
                placeholder="Email address"
                className="flex-1 rounded-sm border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white/50"
              />
              <button type="submit" className="btn-primary bg-white text-ink border-white hover:bg-white/90 hover:text-ink">
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
