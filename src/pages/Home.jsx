import { Link } from 'react-router-dom';
import { ArrowRight, Truck, RotateCcw, Sparkles, ShieldCheck, Star } from 'lucide-react';
import { products, categories, testimonials, reels } from '@/data/products';
import { useStrkImages } from '@/lib/useStrkImages';
import ProductCard from '@/components/product/ProductCard';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function Home() {
  const ref = useStrkImages([]);

  return (
    <div ref={ref}>
      {/* 1. Hero */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-velmora-01"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="fade-up text-[11px] uppercase tracking-widest2 text-cream/80">
            Velmora Fine Jewelry
          </p>
          <h1
            id="hero-title"
            className="fade-up mt-4 max-w-3xl font-serif text-5xl leading-[1.05] text-cream md:text-7xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="fade-up mt-6 max-w-xl text-sm leading-relaxed text-cream/85 md:text-base"
          >
            Demi-fine gold jewelry, designed in studio and made to be worn every
            day. Quiet luxury, within reach.
          </p>
          <Link
            to="/shop"
            className="fade-up mt-9 bg-gold px-10 py-4 text-[11px] uppercase tracking-widest2 text-white transition-colors duration-300 hover:bg-gold-deep"
          >
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="h-12 w-px bg-cream/40" />
        </div>
      </section>

      {/* 3. Trust bar */}
      <section className="border-b border-hairline bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-hairline px-6 md:grid-cols-4 md:px-10">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 py-5 text-center"
            >
              <item.icon width={16} height={16} className="text-gold" strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-widest2 text-stone md:text-[11px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bestsellers */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">Most Loved</p>
          <h2
            id="bestsellers-title"
            className="mt-3 font-serif text-4xl text-ink md:text-5xl"
          >
            Bestsellers
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              sectionTitleId="bestsellers-title"
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-ink px-8 py-3.5 text-[11px] uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
          >
            View All
            <ArrowRight width={14} height={14} />
          </Link>
        </div>
      </section>

      {/* 5. Reel-style UGC row */}
      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-widest2 text-gold">
                #WornByVelmora
              </p>
              <h2 className="mt-3 font-serif text-4xl text-cream md:text-5xl">
                As Seen On You
              </h2>
            </div>
            <p className="hidden max-w-xs text-sm text-cream/60 md:block">
              Real moments, real wear. Tag us to be featured.
            </p>
          </div>
        </div>

        <div className="no-scrollbar flex gap-4 overflow-x-auto px-6 pb-4 md:px-10">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative aspect-[9/16] w-56 shrink-0 overflow-hidden bg-stone/30 md:w-64"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] worn on model jewelry`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-cream"
              >
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Shop by category */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">Explore</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4/5] overflow-hidden bg-sand"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 transition-colors duration-300 group-hover:bg-ink/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-3xl uppercase tracking-widest3 text-cream"
                >
                  {cat.name}
                </h3>
                <p id={cat.descId} className="sr-only">
                  {cat.name} collection
                </p>
                <span className="mt-3 translate-y-2 text-[11px] uppercase tracking-widest2 text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand story split */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
            <img
              alt="Velmora atelier"
              data-strk-img-id="story-img-velmora-01"
              data-strk-img="[story-subtitle] [story-title] jewelry atelier craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="px-6 py-16 md:px-16 md:py-24">
            <p className="text-[11px] uppercase tracking-widest2 text-gold">
              Our Story
            </p>
            <h2
              id="story-title"
              className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl"
            >
              Jewelry Made to Be Lived In
            </h2>
            <p
              id="story-subtitle"
              className="mt-6 text-sm leading-relaxed text-stone md:text-base"
            >
              Velmora was founded on a simple belief: that fine craftsmanship
              should not be reserved for special occasions. Each piece is
              designed in our studio and finished in 18K gold plating over
              sterling silver — hypoallergenic, durable, and made to be worn
              from morning to night.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone md:text-base">
              We work in small batches, refining every detail until it feels
              right. The result is demi-fine jewelry with the soul of an
              heirloom and the ease of an everyday favorite.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:text-gold"
            >
              Read Our Story
              <ArrowRight width={14} height={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">
            Loved by Thousands
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col items-center border border-hairline bg-white p-8 text-center"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} width={15} height={15} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-5 font-serif text-lg italic leading-relaxed text-ink">
                “{t.text}”
              </p>
              <p className="mt-6 text-[11px] uppercase tracking-widest2 text-stone">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">
            Join the Velmora Circle
          </p>
          <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
            10% Off Your First Order
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-cream/70">
            Be the first to know about new collections, private sales, and
            styling notes. Enjoy 10% off your first order.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 border border-cream/30 bg-transparent px-5 py-3.5 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gold px-8 py-3.5 text-[11px] uppercase tracking-widest2 text-white transition-colors hover:bg-gold-deep"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-[10px] uppercase tracking-widest2 text-cream/40">
            By subscribing you agree to our Privacy Policy
          </p>
        </div>
      </section>
    </div>
  );
}
