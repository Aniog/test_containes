import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { useStrkImages } from "@/hooks/useStrkImages";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

const TRUST_ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

const CATEGORIES = [
  { id: "earrings", label: "Earrings", query: "gold earrings on model" },
  { id: "necklaces", label: "Necklaces", query: "gold necklace editorial" },
  { id: "huggies", label: "Huggies", query: "gold huggie earrings close up" },
];

const TESTIMONIALS = [
  {
    name: "Sophia L.",
    text: "The quality exceeded every expectation. I wear my huggies daily and they still look brand new.",
  },
  {
    name: "Emily R.",
    text: "Velmora has become my go-to for gifts. Beautiful packaging, thoughtful design, and radiant gold.",
  },
  {
    name: "Ava M.",
    text: "Quiet luxury exactly as promised. The ear cuff gets compliments every single time I wear it.",
  },
];

export function Home() {
  const containerRef = useStrkImages([]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-base">
        <div
          className="absolute inset-0 z-0 bg-base-700"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-base/60 via-base/30 to-base/70" />
        <div className="relative z-20 mx-auto max-w-4xl px-4 text-center text-white sm:px-6 lg:px-8">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Demi-Fine Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-4xl font-medium leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Timeless gold pieces designed for everyday luxury — made to be worn,
            loved, and passed on.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/shop">
              <Button variant="primary" size="lg">
                Shop the Collection
              </Button>
            </Link>
            <Link to="/shop">
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white hover:text-base-800"
              >
                Explore Bestsellers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-b border-hairline bg-cream">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-3 sm:px-6 lg:px-8">
          {TRUST_ITEMS.map((item) => (
            <span
              key={item}
              className="whitespace-nowrap font-sans text-[11px] font-medium uppercase tracking-widest text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bestsellers */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Curated Favorites
            </p>
            <h2 className="font-serif text-3xl font-medium text-base-800 md:text-4xl">
              Bestsellers
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/shop">
              <Button variant="secondary" size="md">
                View All Pieces
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel row */}
      <section className="bg-base-800 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-1 font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
                @velmorajewelry
              </p>
              <h2 className="font-serif text-2xl font-medium text-white md:text-3xl">
                Styled by You
              </h2>
            </div>
            <a
              href="#"
              className="hidden font-sans text-xs font-medium uppercase tracking-widest text-white/70 transition-colors hover:text-gold sm:block"
            >
              Follow Us
            </a>
          </div>
        </div>
        <div className="hide-scrollbar flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
          <div className="group relative aspect-[9/16] w-36 shrink-0 cursor-pointer overflow-hidden bg-base-700 sm:w-44 md:w-52">
            <img
              data-strk-img-id="ugc-1"
              data-strk-img="[ugc-1-caption]"
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Everyday gold staples"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" />
            <p
              id="ugc-1-caption"
              className="absolute bottom-4 left-4 right-4 font-serif text-sm italic leading-snug text-white"
            >
              Everyday gold staples
            </p>
          </div>
          <div className="group relative aspect-[9/16] w-36 shrink-0 cursor-pointer overflow-hidden bg-base-700 sm:w-44 md:w-52">
            <img
              data-strk-img-id="ugc-2"
              data-strk-img="[ugc-2-caption]"
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Date night sparkle"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" />
            <p
              id="ugc-2-caption"
              className="absolute bottom-4 left-4 right-4 font-serif text-sm italic leading-snug text-white"
            >
              Date night sparkle
            </p>
          </div>
          <div className="group relative aspect-[9/16] w-36 shrink-0 cursor-pointer overflow-hidden bg-base-700 sm:w-44 md:w-52">
            <img
              data-strk-img-id="ugc-3"
              data-strk-img="[ugc-3-caption]"
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Layered and loved"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" />
            <p
              id="ugc-3-caption"
              className="absolute bottom-4 left-4 right-4 font-serif text-sm italic leading-snug text-white"
            >
              Layered and loved
            </p>
          </div>
          <div className="group relative aspect-[9/16] w-36 shrink-0 cursor-pointer overflow-hidden bg-base-700 sm:w-44 md:w-52">
            <img
              data-strk-img-id="ugc-4"
              data-strk-img="[ugc-4-caption]"
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Minimal, maximal impact"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" />
            <p
              id="ugc-4-caption"
              className="absolute bottom-4 left-4 right-4 font-serif text-sm italic leading-snug text-white"
            >
              Minimal, maximal impact
            </p>
          </div>
          <div className="group relative aspect-[9/16] w-36 shrink-0 cursor-pointer overflow-hidden bg-base-700 sm:w-44 md:w-52">
            <img
              data-strk-img-id="ugc-5"
              data-strk-img="[ugc-5-caption]"
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Gifted with intention"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" />
            <p
              id="ugc-5-caption"
              className="absolute bottom-4 left-4 right-4 font-serif text-sm italic leading-snug text-white"
            >
              Gifted with intention
            </p>
          </div>
          <div className="group relative aspect-[9/16] w-36 shrink-0 cursor-pointer overflow-hidden bg-base-700 sm:w-44 md:w-52">
            <img
              data-strk-img-id="ugc-6"
              data-strk-img="[ugc-6-caption]"
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Treasured moments"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" />
            <p
              id="ugc-6-caption"
              className="absolute bottom-4 left-4 right-4 font-serif text-sm italic leading-snug text-white"
            >
              Treasured moments
            </p>
          </div>
        </div>
      </section>

      {/* Shop by category */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl font-medium text-base-800 md:text-4xl">
              Shop by Category
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.label}`}
                className="group relative aspect-[4/5] overflow-hidden bg-base-700"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg-id={`category-${cat.id}`}
                  data-strk-bg={`[category-label-${cat.id}]`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-base/20 transition-colors duration-300 group-hover:bg-base/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    id={`category-label-${cat.id}`}
                    className="border border-white/60 bg-white/10 px-6 py-3 font-serif text-sm uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20"
                  >
                    {cat.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section id="story" className="bg-cream-100">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="relative aspect-square bg-base-700 md:aspect-auto">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-heading] [story-body]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16">
            <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="font-serif text-3xl font-medium leading-tight text-base-800 md:text-4xl"
            >
              Jewelry for the Women Who Do It All
            </h2>
            <p
              id="story-body"
              className="mt-6 leading-relaxed text-muted"
            >
              Velmora was born from a simple belief: luxury should feel
              effortless. We design demi-fine pieces using 18K gold plating,
              careful craftsmanship, and stones chosen for their quiet sparkle.
              Whether it is a gift for someone you love or a little reward for
              yourself, every piece is made to be treasured.
            </p>
            <div className="mt-8">
              <Link
                to="/shop"
                className="inline-flex items-center font-sans text-xs font-semibold uppercase tracking-widest text-base-800 transition-colors hover:text-gold"
              >
                Read Our Story <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-medium text-base-800 md:text-4xl">
              Loved by Our Community
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="border border-hairline bg-cream-100 p-8 text-center transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="mb-4 flex justify-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="font-serif text-lg italic leading-relaxed text-base-800">
                  “{t.text}”
                </p>
                <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-widest text-muted">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gold py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium text-base md:text-4xl">
            Join for 10% Off
          </h2>
          <p className="mt-3 text-base-800/80">
            Subscribe for exclusive drops, styling notes, and 10% off your first
            order.
          </p>
          {subscribed ? (
            <p className="mt-6 font-serif text-xl text-base">
              Welcome to Velmora. Check your inbox.
            </p>
          ) : (
            <form
              onSubmit={onNewsletterSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-none border border-base-800/20 bg-cream px-5 py-3.5 text-sm text-base-800 placeholder:text-muted focus:border-base-800 focus:outline-none"
              />
              <Button
                variant="secondary"
                size="md"
                className="border-base text-base hover:bg-base hover:text-cream"
                type="submit"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
