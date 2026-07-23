import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/home/ProductCard.jsx';
import ReelCard from '@/components/home/ReelCard.jsx';
import CategoryTile from '@/components/home/CategoryTile.jsx';
import TestimonialCard from '@/components/home/TestimonialCard.jsx';
import { products } from '@/data/products.js';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);
  const bestsellers = products.filter((p) => p.badge === 'Bestseller').slice(0, 5);
  const reels = [
    { id: 1, title: 'Golden Hour Stack', subtitle: 'Layering tips for summer' },
    { id: 2, title: 'Office to Dinner', subtitle: 'One necklace, three ways' },
    { id: 3, title: 'Gift Edit', subtitle: 'Pieces she will treasure' },
    { id: 4, title: 'New In', subtitle: 'Majestic Flora Nectar' },
  ];
  const testimonials = [
    { name: 'Sophia M.', text: 'The quality is unreal for the price. I get compliments every time I wear the huggies.', rating: 5 },
    { name: 'Emma R.', text: 'Packaging felt so luxurious. It made the perfect gift for my best friend.', rating: 5 },
    { name: 'Olivia T.', text: 'Finally jewelry that looks expensive but does not break the bank. Obsessed.', rating: 5 },
  ];

  return (
    <main ref={containerRef}>
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <div
          data-strk-bg-id="hero-bg-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 id="hero-title" className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-lg">
              Demi-fine jewelry designed for the modern woman. Warm gold, quiet luxury, and pieces meant to last.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-ink hover:bg-brand-warm transition-colors"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-line bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
            <span>Free Worldwide Shipping</span>
            <span className="hidden sm:inline text-brand-line">·</span>
            <span>30-Day Returns</span>
            <span className="hidden sm:inline text-brand-line">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden sm:inline text-brand-line">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      <section className="bg-brand-bg py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-ink">Bestsellers</h2>
              <p className="mt-2 text-sm text-brand-muted">The pieces our community loves most.</p>
            </div>
            <Link to="/shop" className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-ink hover:text-brand-accent transition-colors">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Link to="/shop" className="md:hidden mt-8 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-ink">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-ink">From the Community</h2>
              <p className="mt-2 text-sm text-brand-muted">Real moments, real style.</p>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {reels.map((reel) => (
              <ReelCard key={reel.id} reel={reel} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-ink text-center mb-10">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <CategoryTile title="Earrings" to="/shop?category=Earrings" image="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" />
            <CategoryTile title="Necklaces" to="/shop?category=Necklaces" image="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80" />
            <CategoryTile title="Huggies" to="/shop?category=Huggies" image="https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="overflow-hidden rounded-2xl">
              <img
                data-strk-img-id="brand-story-img-8f2a9c"
                data-strk-img="[brand-story-title] [brand-story-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora brand story"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-brand-ink">Our Story</h2>
              <p id="brand-story-subtitle" className="mt-4 text-sm leading-relaxed text-brand-muted">
                Velmora was born from a simple belief: fine jewelry should feel accessible, intentional, and timeless. We design every piece to be worn daily, gifted freely, and kept forever.
              </p>
              <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-ink hover:text-brand-accent transition-colors">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-bg py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-ink text-center mb-10">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="font-serif text-3xl md:text-4xl text-white">Join for 10% off your first order</h2>
              <p className="mt-2 text-sm text-white/80">Be the first to know about new drops, stories, and offers.</p>
            </div>
            <form className="flex w-full md:w-auto gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full md:w-80 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button type="submit" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-warm transition-colors">
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
