import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Mail, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, testimonials, ugcItems } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import StarRating from '@/components/StarRating';

export default function Home() {
  const containerRef = useRef(null);
  const reelsRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const scrollReels = (dir) => {
    if (reelsRef.current) {
      reelsRef.current.scrollBy({ left: dir * 260, behavior: 'smooth' });
    }
  };

  const bestsellers = products.filter((p) => p.isBestseller);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden bg-ink">
        <img
          data-strk-img-id="hero-img-velmora"
          data-strk-img="[hero-subtitle] [hero-title]"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Velmora Fine Jewelry"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-cream">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="max-w-4xl font-serif text-5xl font-medium leading-[1.05] md:text-7xl lg:text-8xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mx-auto mt-6 max-w-lg font-sans text-base font-light leading-relaxed text-cream/90 md:text-lg"
          >
            Timeless pieces for everyday rituals and unforgettable moments.
          </p>
          <Link
            to="/shop"
            className="mt-10 bg-gold px-10 py-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-gold-deep"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-cream-dark bg-cream px-6 py-3.5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center">
          {[
            'Free Worldwide Shipping',
            '30-Day Returns',
            '18K Gold Plated',
            'Hypoallergenic',
          ].map((item) => (
            <span
              key={item}
              className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-ink-soft"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="bg-cream px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Most Loved
              </p>
              <h2 className="font-serif text-4xl font-medium text-ink md:text-5xl">
                Bestsellers
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden items-center gap-1 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-ink md:flex"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product}>
                <img
                  data-strk-img-id={`bestseller-${product.id}`}
                  data-strk-img={`${product.description} ${product.name} Velmora Bestsellers`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </ProductCard>
            ))}
          </div>

          <h2 id="bestsellers-heading" className="sr-only">
            Velmora Bestsellers
          </h2>

          <Link
            to="/shop"
            className="mt-10 flex items-center justify-center gap-1 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-ink md:hidden"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Reel-style UGC */}
      <section className="bg-cream-warm px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                @velmorafine
              </p>
              <h2 className="font-serif text-4xl font-medium text-ink md:text-5xl">
                Worn by You
              </h2>
            </div>
            <div className="hidden gap-2 md:flex">
              <button
                type="button"
                onClick={() => scrollReels(-1)}
                aria-label="Scroll left"
                className="rounded-full border border-ink/20 p-2 text-ink transition-colors hover:bg-ink hover:text-cream"
              >
                <ChevronRight size={18} className="rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => scrollReels(1)}
                aria-label="Scroll right"
                className="rounded-full border border-ink/20 p-2 text-ink transition-colors hover:bg-ink hover:text-cream"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            ref={reelsRef}
            className="hide-scrollbar -mx-6 flex snap-x gap-4 overflow-x-auto px-6 md:mx-0 md:px-0"
          >
            {ugcItems.map((item) => {
              const titleId = `ugc-title-${item.id}`;
              return (
                <div
                  key={item.id}
                  className="group relative w-[180px] flex-shrink-0 snap-start overflow-hidden rounded-sm md:w-[220px]"
                >
                  <div className="aspect-[9/16] overflow-hidden bg-ink">
                    <img
                      data-strk-img-id={`ugc-${item.id}`}
                      data-strk-img={`[${titleId}]`}
                      data-strk-img-ratio="9x16"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.caption}
                      className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/80 via-transparent to-transparent p-4 text-cream">
                    <p
                      id={titleId}
                      className="font-serif text-lg italic leading-tight"
                    >
                      {item.caption}
                    </p>
                    <p className="mt-1 font-sans text-[10px] uppercase tracking-wider text-cream/70">
                      {item.author}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shop by category */}
      <section className="bg-cream px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-serif text-4xl font-medium text-ink md:text-5xl">
            Shop by Category
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: 'Earrings', id: 'cat-earrings' },
              { label: 'Necklaces', id: 'cat-necklaces' },
              { label: 'Huggies', id: 'cat-huggies' },
            ].map((cat) => (
              <Link
                key={cat.label}
                to={`/shop?category=${cat.label}`}
                className="group relative aspect-[4/5] overflow-hidden bg-ink md:aspect-[3/4]"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg-id={`category-bg-${cat.id}`}
                  data-strk-bg={`[${cat.id}]`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-ink/30 transition-colors group-hover:bg-ink/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3
                    id={cat.id}
                    className="font-serif text-2xl font-medium uppercase tracking-[0.2em] text-cream md:text-3xl"
                  >
                    {cat.label}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section id="story" className="bg-cream-warm">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="relative aspect-square bg-ink md:aspect-auto">
            <img
              data-strk-img-id="story-image"
              data-strk-img="[story-title] [story-subtitle]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="h-full w-full object-cover opacity-90"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-16">
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Our Philosophy
            </p>
            <h2
              id="story-title"
              className="font-serif text-4xl font-medium text-ink md:text-5xl"
            >
              Made to Last, Made to Love
            </h2>
            <p
              id="story-subtitle"
              className="mt-6 font-sans font-light leading-relaxed text-ink-soft"
            >
              Velmora was born from a belief that fine jewelry should feel
              accessible without ever feeling ordinary. Each piece is designed
              in-house, cast in responsibly sourced brass, and finished with a
              thick layer of 18K gold — so you can wear it every day and treasure
              it forever.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:text-gold-deep"
            >
              Our Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-serif text-4xl font-medium text-ink md:text-5xl">
            What Our Customers Say
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((review) => (
              <div
                key={review.id}
                className="border border-cream-dark bg-cream-warm p-8 text-center"
              >
                <StarRating rating={review.rating} size={14} />
                <p className="mt-5 font-serif text-lg italic leading-relaxed text-ink">
                  “{review.text}”
                </p>
                <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-wider text-ink-soft">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gold px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <Mail className="mx-auto mb-5 text-ink" size={28} strokeWidth={1.5} />
          <h2 className="font-serif text-3xl font-medium text-ink md:text-4xl">
            Join for 10% Off Your First Order
          </h2>
          <p className="mt-3 font-sans text-sm text-ink/80">
            Be the first to know about new drops, styling tips, and member-only
            exclusives.
          </p>
          <form
            className="mt-8 flex flex-col gap-3 md:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border-b-2 border-ink/30 bg-transparent px-4 py-3 font-sans text-sm text-ink placeholder:text-ink/50 focus:border-ink focus:outline-none"
            />
            <button
              type="submit"
              className="bg-ink px-8 py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-ink-soft"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
