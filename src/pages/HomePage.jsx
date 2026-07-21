import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, ArrowRight } from 'lucide-react';
import { products, trustItems, testimonials } from '@/data/products';
import { useCart } from '@/context/CartContext';

const HomePage = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [newsletterStatus, setNewsletterStatus] = useState('idle');
  const [email, setEmail] = useState('');
  const { addItem, openCart } = useCart();
  const ugcRef = useRef(null);

  const handleAddToCart = (product) => {
    addItem(product, 'Gold', 1);
    openCart();
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterStatus('success');
    setEmail('');
    setTimeout(() => setNewsletterStatus('idle'), 4000);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] md:min-h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
            alt="Gold jewelry on model"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-10 md:pt-40">
          <div className="max-w-xl animate-slide-up">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Demi-Fine Jewelry</p>
            <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-white md:text-6xl">
              Crafted to be Treasured
            </h1>
            <p className="mt-5 text-base text-white/85 md:text-lg">
              Modern heirlooms in 18K gold. Designed for everyday elegance, made to last.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="btn-primary">
                Shop the Collection
              </Link>
              <Link to="/shop" className="btn-outline border-white text-white hover:bg-white hover:text-ink">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {trustItems.map((item) => (
              <span key={item} className="text-xs font-medium uppercase tracking-[0.16em] text-ink-secondary">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Curated for you</p>
              <h2 className="mt-2 font-serif text-3xl font-medium md:text-4xl">Bestsellers</h2>
            </div>
            <Link to="/shop" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink-secondary hover:text-ink">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {products.slice(0, 5).map((product) => (
              <article
                key={product.id}
                className="product-card"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-surface-warm">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {hoveredProduct === product.id && product.images[1] && (
                      <img
                        src={product.images[1]}
                        alt={`${product.name} alternate`}
                        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                      />
                    )}
                    {product.badge && (
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-serif text-base font-medium uppercase tracking-wide text-ink">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-medium">${product.price}</span>
                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-ink/90"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <Link to="/shop" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink-secondary hover:text-ink md:hidden">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-ink py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/70">As seen on</p>
          <h2 className="mt-2 text-center font-serif text-2xl font-medium text-white md:text-3xl">@velmora</h2>
        </div>
        <div ref={ugcRef} className="mt-8 flex gap-4 overflow-x-auto px-6 pb-2 md:px-10 md:pb-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="relative h-[420px] w-[260px] flex-shrink-0 overflow-hidden rounded-2xl md:h-[520px] md:w-[300px]">
              <img
                src={`https://images.unsplash.com/photo-${item === 1 ? '1611591437281-460bfbe1220a' : item === 2 ? '1599643478518-a784e5dc4c8f' : item === 3 ? '1630019852942-f89202989a59' : item === 4 ? '1535632066927-ab7c9ab60908' : '1602173574767-37ac01994b2a'}?w=600&q=80`}
                alt={`UGC ${item}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif text-sm font-medium text-white">Wear it your way</p>
                <p className="mt-1 text-xs text-white/80">Tag @velmora to be featured</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Browse</p>
            <h2 className="mt-2 font-serif text-3xl font-medium md:text-4xl">Shop by Category</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {['Earrings', 'Necklaces', 'Huggies'].map((category) => (
              <Link
                key={category}
                to="/shop"
                className="group relative h-72 overflow-hidden rounded-2xl md:h-80"
              >
                <img
                  src={`https://images.unsplash.com/photo-${category === 'Earrings' ? '1611591437281-460bfbe1220a' : category === 'Necklaces' ? '1599643478518-a784e5dc4c8f' : '1630019852942-f89202989a59'}?w=800&q=80`}
                  alt={category}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-xl font-medium uppercase tracking-[0.18em] text-white md:text-2xl">
                    {category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2">
            <div className="h-72 md:h-auto md:min-h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=80"
                alt="Brand story"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-14 md:px-16 md:py-20">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Story</p>
              <h2 className="mt-3 font-serif text-3xl font-medium md:text-4xl">Jewelry meant to move with you</h2>
              <p className="mt-5 text-sm leading-relaxed text-ink-secondary md:text-base">
                Velmora was born from a simple belief: fine jewelry should feel as good as it looks. We design
                demi-fine pieces in solid 18K gold plating, with careful attention to weight, finish, and
                everyday wearability. Every piece is made in small batches and packaged ready to gift.
              </p>
              <Link to="/" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent">
                Read our story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Reviews</p>
            <h2 className="mt-2 font-serif text-3xl font-medium md:text-4xl">What our customers say</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((review) => (
              <div key={review.id} className="rounded-2xl border border-border bg-white p-6">
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-secondary">“{review.text}”</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-surface-warm">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Stay in touch</p>
            <h2 className="mt-3 font-serif text-3xl font-medium md:text-4xl">Join for 10% off your first order</h2>
            <p className="mt-3 text-sm text-ink-secondary">
              Be the first to know about new releases, styling ideas, and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 rounded-full border border-border bg-white px-5 py-3 text-sm outline-none transition-colors focus:border-ink"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
            {newsletterStatus === 'success' && (
              <p className="mt-3 text-sm text-ink-secondary">Welcome to the Velmora world. Check your inbox.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
