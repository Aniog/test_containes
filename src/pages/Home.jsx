import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, RefreshCw, Shield, Sparkles } from 'lucide-react';
import { products, categories, testimonials, ugcItems } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';
import UGCReel from '@/components/home/UGCReel';
import CategoryTile from '@/components/home/CategoryTile';

const Home = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero */}
      <section className="relative h-[90vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
            alt="Velmora fine jewelry"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
            <div className="max-w-2xl animate-slide-up">
              <p className="text-white/80 text-sm tracking-widest uppercase mb-4">Demi-Fine Jewelry</p>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
                Crafted to be Treasured
              </h1>
              <p className="mt-6 text-white/80 text-base md:text-lg leading-relaxed max-w-lg">
                Modern heirlooms in 18K gold. Designed for the woman who values quiet luxury and timeless elegance.
              </p>
              <div className="mt-8">
                <Link to="/shop" className="btn-primary">
                  Shop the Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-brand-border bg-brand-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-border">
            {[
              { icon: Truck, label: 'Free Worldwide Shipping' },
              { icon: RefreshCw, label: '30-Day Returns' },
              { icon: Shield, label: '18K Gold Plated' },
              { icon: Sparkles, label: 'Hypoallergenic' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2 py-4">
                <item.icon className="h-4 w-4 text-brand-accent" />
                <span className="text-xs md:text-sm text-brand-muted tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="section-title">Bestsellers</h2>
              <p className="mt-2 text-brand-muted text-sm">Our most-loved pieces, chosen by you.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm text-brand-ink hover:text-brand-accent transition-colors">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 md:hidden text-center">
            <Link to="/shop" className="btn-outline">View All</Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-12 md:py-16 bg-brand-surface border-y border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-8">As Worn By You</h2>
          <UGCReel items={ugcItems} />
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category) => (
              <CategoryTile key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=1200&q=80"
                alt="Velmora brand story"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="mt-6 text-brand-muted leading-relaxed">
                Velmora was born from a belief that fine jewelry should feel accessible, personal, and enduring. Every piece is designed in our California studio using responsibly sourced materials and finished with 18K gold plating for lasting beauty.
              </p>
              <p className="mt-4 text-brand-muted leading-relaxed">
                From sketch to final polish, we obsess over the details so you can treasure each piece for years to come.
              </p>
              <Link to="/" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-ink hover:text-brand-accent transition-colors">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-brand-surface rounded-2xl p-8 border border-brand-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-brand-ink leading-relaxed mb-6">"{t.text}"</p>
                <p className="text-sm font-medium text-brand-ink">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-brand-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white">Join for 10% off your first order</h2>
            <p className="mt-4 text-white/70">Be the first to know about new releases, exclusive offers, and styling inspiration.</p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full bg-white/10 border border-white/20 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-xs text-white/50">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
