import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { products, testimonials, trustBarItems, categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';
import { useCart } from '@/context/CartContext';

const Home = () => {
  const { addItem, setCartOpen } = useCart();
  const bestsellers = products.filter((p) => p.bestseller);

  const handleQuickAdd = (product) => {
    addItem(product, product.variants[0]);
    setCartOpen(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
            alt="Gold jewelry on model"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-full items-center">
          <div className="max-w-xl text-white">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-wide">
              Crafted to be Treasured
            </h1>
            <p className="mt-6 text-sm sm:text-base text-white/80 leading-relaxed max-w-md">
              Demi-fine jewelry designed for the modern woman. Warm gold, quiet luxury, and pieces meant to last.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 bg-white text-brand-ink px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-brand-warm transition-colors"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-brand-line bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-4 text-[11px] font-medium uppercase tracking-widest text-brand-muted">
            {trustBarItems.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-brand-gold" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-ink">Bestsellers</h2>
            <p className="mt-3 text-sm text-brand-muted">Our most-loved pieces, chosen by you.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} onQuickAdd={handleQuickAdd} />
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-16 bg-brand-warm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-center tracking-wide text-brand-ink mb-10">As Seen On You</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="relative h-[420px] w-[260px] flex-shrink-0 snap-center overflow-hidden rounded-sm"
              >
                <img
                  src={`https://images.unsplash.com/photo-${['1611591437281-460bfbe1220a', '1602173574767-37ac01994b2a', '1630019852942-f89202989a59', '1535632787350-4e68ef0ac584', '1602173574767-37ac01994b2a'][i - 1]}?w=600&q=80`}
                  alt={`UGC ${i}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-sm text-white/90 italic">Worn with love by our community</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center tracking-wide text-brand-ink mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative h-[360px] overflow-hidden"
              >
                <img src={cat.image} alt={cat.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl text-white tracking-widest">{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=900&q=80"
                alt="Brand story"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="max-w-md">
              <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-ink">Our Story</h2>
              <p className="mt-6 text-sm text-brand-muted leading-relaxed">
                Velmora was born from a belief that fine jewelry should feel accessible, personal, and enduring. Every piece is designed in-house using 18K gold-plated materials and thoughtfully sourced crystals. We create jewelry that moves with you — from morning meetings to evening celebrations.
              </p>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-accent hover:text-brand-accentHover">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center tracking-wide text-brand-ink mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="border border-brand-line bg-white p-8">
                <div className="flex gap-1 text-brand-gold">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 font-serif text-lg italic text-brand-ink leading-relaxed">“{t.text}”</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-muted">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28 bg-brand-ink text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">Join for 10% off your first order</h2>
          <p className="mt-4 text-sm text-white/70">Be the first to know about new drops, stories, and exclusive offers.</p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
            />
            <button type="submit" className="bg-white text-brand-ink px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-brand-warm transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
