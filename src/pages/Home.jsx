import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Truck, RotateCcw, Shield } from 'lucide-react';
import ProductCard from '@/components/home/ProductCard';
import { products, categories, testimonials } from '@/data/products';

const Home = () => {
  const bestsellers = products.filter((p) => p.badge === 'Bestseller' || p.rating >= 4.8).slice(0, 5);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[640px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1]">
              Crafted to be Treasured
            </h1>
            <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-base sm:text-lg text-white/85 leading-relaxed">
              Demi-fine jewelry designed for the modern woman. Quiet luxury, everyday elegance.
            </p>
            <div className="mt-8 sm:mt-10">
              <Link to="/shop" className="btn-primary">
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border)]">
            {[
              { icon: Truck, label: 'Free Worldwide Shipping' },
              { icon: RotateCcw, label: '30-Day Returns' },
              { icon: Shield, label: '18K Gold Plated' },
              { icon: Shield, label: 'Hypoallergenic' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-2 py-3 sm:py-4">
                <Icon className="h-4 w-4 text-[var(--color-accent)]" />
                <span className="text-xs sm:text-sm font-medium text-[var(--color-ink-secondary)]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[var(--color-ink)]">Bestsellers</h2>
              <p className="mt-2 text-sm text-[var(--color-ink-secondary)]">Our most-loved pieces, chosen by you.</p>
            </div>
            <Link to="/shop" className="hidden sm:inline-flex text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)]">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/shop" className="btn-outline">View all</Link>
          </div>
        </div>
      </section>

      {/* UGC Reel-style row */}
      <section className="py-12 sm:py-16 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-center text-[var(--color-ink)] mb-8">
            Worn with Love
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-40 sm:w-48 h-[28rem] sm:h-[32rem] rounded-2xl overflow-hidden snap-start"
              >
                <img
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1611652022419-a9419f74343d' : i === 2 ? '1599643478518-a784e5dc4c8f' : i === 3 ? '1535632066927-ab7c9ab60908' : i === 4 ? '1611591437281-460bfbe1220a' : '1599643477877-530eb83abc8e'}?w=600&q=80`}
                  alt={`Customer photo ${i}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
                  <p className="font-display text-sm sm:text-base text-white italic">@velmora.love</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by category */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-center text-[var(--color-ink)] mb-10">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-2xl sm:text-3xl font-medium text-white tracking-wide">
                    {cat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative h-72 sm:h-80 lg:h-[480px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80"
                alt="Velmora jewelry craftsmanship"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="max-w-lg">
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[var(--color-ink)]">Our Story</h2>
              <div className="hairline my-6" />
              <p className="text-base text-[var(--color-ink-secondary)] leading-relaxed">
                Velmora was born from a belief that fine jewelry should be accessible, meaningful, and made to last. Each piece is designed in our London studio and crafted from 18K gold-plated materials, with careful attention to detail and wearability.
              </p>
              <p className="mt-4 text-base text-[var(--color-ink-secondary)] leading-relaxed">
                We work with small, family-run workshops to ensure ethical production and exceptional quality — so every piece feels as good as it looks.
              </p>
              <Link to="/" className="mt-8 inline-flex btn-outline">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-center text-[var(--color-ink)] mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="card p-6 sm:p-8">
                <div className="flex gap-1 text-[var(--color-star)]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-[var(--color-ink-secondary)] leading-relaxed italic">"{t.text}"</p>
                <p className="mt-4 text-sm font-medium text-[var(--color-ink)]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-accent-soft)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-[var(--color-ink)]">
            Join for 10% off your first order
          </h2>
          <p className="mt-3 text-sm text-[var(--color-ink-secondary)]">
            Be the first to know about new arrivals, exclusive offers, and journal stories.
          </p>
          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks for subscribing!');
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="input-field flex-1"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
