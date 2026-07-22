import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { products, categories, testimonials } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const Home = () => {
  const bestsellers = products.filter(p => p.bestseller);
  console.log('Home rendered', bestsellers.length);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
            alt="Gold jewelry on model"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <p className="text-white/80 text-sm tracking-widest uppercase mb-4">Demi-Fine Jewelry</p>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
                Crafted to be<br />Treasured
              </h1>
              <p className="mt-6 text-white/80 text-base md:text-lg leading-relaxed max-w-md">
                Warm, modern jewelry designed for everyday elegance. 18K gold-plated and made to last.
              </p>
              <div className="mt-8">
                <Link to="/shop" className="inline-flex items-center gap-2 bg-white text-brand-ink px-8 py-3.5 rounded-full text-sm font-medium hover:bg-brand-goldLight transition-colors">
                  Shop the Collection
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-brand-border bg-brand-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4 text-xs md:text-sm text-brand-muted">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline text-brand-border">|</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline text-brand-border">|</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline text-brand-border">|</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs tracking-widest uppercase text-brand-muted mb-2">Most Loved</p>
              <h2 className="section-title">Bestsellers</h2>
            </div>
            <Link to="/shop" className="hidden md:inline-flex items-center gap-2 text-sm text-brand-ink hover:text-brand-gold transition-colors">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/shop" className="btn-outline">View All</Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-12 md:py-16 bg-brand-surface border-y border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-widest uppercase text-brand-muted mb-6 text-center">As Seen On</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="relative flex-shrink-0 w-40 h-72 md:w-48 md:h-80 rounded-2xl overflow-hidden snap-start">
                <img
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1611591437281-460bfbe1220a' : i === 2 ? '1630019852942-f89202989a59' : i === 3 ? '1599643478518-a784e5dc4c8f' : i === 4 ? '1602173574767-37ac01994b2a' : '1605100804763-247f67b3557e'}?w=600&q=80`}
                  alt={`UGC ${i}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm leading-snug">
                  Wearing the Golden Sphere Huggies
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase text-brand-muted mb-2">Explore</p>
            <h2 className="section-title">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map(cat => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative h-72 md:h-96 rounded-2xl overflow-hidden"
              >
                <img src={cat.image} alt={cat.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl md:text-3xl text-white tracking-wide">{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 bg-brand-surface border-y border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=1200&q=80"
                alt="Velmora jewelry craftsmanship"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-brand-muted mb-3">Our Story</p>
              <h2 className="section-title mb-6">Designed for Real Life</h2>
              <p className="text-brand-muted leading-relaxed mb-4">
                Velmora was born from a simple belief: fine jewelry should feel as good as it looks. We design each piece to be worn daily—light enough for the office, polished enough for date night.
              </p>
              <p className="text-brand-muted leading-relaxed mb-8">
                Every design is crafted in recycled 18K gold-plated brass, finished by hand, and tested for comfort. Because luxury should be easy.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-medium text-brand-ink hover:text-brand-gold transition-colors">
                Read Our Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase text-brand-muted mb-2">Reviews</p>
            <h2 className="section-title">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map(t => (
              <div key={t.id} className="bg-brand-surface rounded-2xl p-6 md:p-8 border border-brand-border">
                <div className="flex gap-1 text-brand-gold mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-brand-ink leading-relaxed mb-6">“{t.text}”</p>
                <p className="text-sm font-medium text-brand-ink">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-brand-ink text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-widest uppercase text-white/60 mb-3">Stay in the loop</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Join for 10% off your first order</h2>
            <p className="text-white/70 mb-8">Be the first to know about new drops, restocks, and stories from the workshop.</p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full bg-white/10 border border-white/20 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-brand-gold"
              />
              <button type="submit" className="btn-primary bg-brand-gold hover:bg-brand-goldDark text-brand-ink">
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
