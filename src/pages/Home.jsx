import { Link } from "react-router-dom"
import { ArrowRight, Truck, RefreshCw, Gem, ShieldCheck, Star } from "lucide-react"
import { products, categories, testimonials, reels } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import StarRating from "@/components/ui/StarRating"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const TRUST_ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function Home() {
  const bestsellers = products.slice(0, 5)

  return (
    <div>
      {/* 1. Hero */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-velmora-1a"
          data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn model warm light"
          data-strk-bg-ratio="9x16"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1
            id="hero-title"
            className="fade-up max-w-4xl font-serif text-5xl font-light leading-[1.05] text-cream md:text-7xl lg:text-8xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="fade-up mt-6 max-w-xl font-sans text-sm font-light tracking-wide text-cream/85 md:text-base"
            style={{ animationDelay: "0.15s" }}
          >
            Demi-fine gold jewelry, designed in studio and made for the everyday.
            Warm, weighty, and quietly luxurious.
          </p>
          <Link
            to="/shop"
            className="fade-up mt-10 bg-gold px-10 py-4 font-sans text-xs uppercase tracking-widest2 text-cream transition-all duration-300 hover:bg-gold-deep hover:shadow-lg"
            style={{ animationDelay: "0.3s" }}
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 3. Trust bar */}
      <section className="border-b border-ink/10 bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-3 px-6 py-5 md:grid-cols-4 md:px-10">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 text-center">
              <item.icon width={16} height={16} className="shrink-0 text-gold" />
              <span className="font-sans text-[11px] uppercase tracking-widest2 text-ink md:text-xs">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bestsellers */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 text-center">
          <p className="font-sans text-xs uppercase tracking-widest2 text-gold">Most Loved</p>
          <h2 id="bestsellers-title" className="mt-2 font-serif text-4xl text-ink md:text-5xl">
            Bestsellers
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gold/50" />
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} sectionTitleId="bestsellers-title" />
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-ink px-10 py-4 font-sans text-xs uppercase tracking-widest2 text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            View All <ArrowRight width={14} height={14} />
          </Link>
        </div>
      </section>

      {/* 5. Reel-style UGC row */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="font-sans text-xs uppercase tracking-widest2 text-gold">As Seen On You</p>
              <h2 className="mt-2 font-serif text-4xl text-ink md:text-5xl">#VelmoraMoments</h2>
            </div>
            <p className="hidden font-sans text-sm text-stone md:block max-w-xs">
              Real pieces, real wear. Swipe through moments from our community.
            </p>
          </div>
        </div>
        <div className="no-scrollbar flex gap-4 overflow-x-auto px-6 pb-4 md:px-10">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative aspect-[9/16] w-56 shrink-0 overflow-hidden bg-espresso md:w-64"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] jewelry worn ear neck`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={PLACEHOLDER}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
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
          <p className="font-sans text-xs uppercase tracking-widest2 text-gold">Explore</p>
          <h2 className="mt-2 font-serif text-4xl text-ink md:text-5xl">Shop by Category</h2>
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
                src={PLACEHOLDER}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/20 transition-colors duration-500 group-hover:bg-espresso/40" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl uppercase tracking-widest2 text-cream"
                >
                  {cat.name}
                </h3>
                <p id={cat.descId} className="mt-1 font-sans text-xs uppercase tracking-widest2 text-cream/80">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand story split */}
      <section className="bg-espresso text-cream">
        <div className="mx-auto grid max-w-7xl items-stretch md:grid-cols-2">
          <div className="relative min-h-[400px] overflow-hidden md:min-h-[600px]">
            <img
              alt="Velmora atelier"
              data-strk-img-id="story-img-velmora-1a"
              data-strk-img="[story-text] gold jewelry craftsmanship atelier warm"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src={PLACEHOLDER}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-16 md:px-16 md:py-24">
            <p className="font-sans text-xs uppercase tracking-widest2 text-gold">Our Story</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Made to be worn,<br />not saved for later.
            </h2>
            <p id="story-text" className="mt-6 max-w-md font-sans text-sm leading-relaxed text-cream/70">
              Velmora began with a simple belief: fine jewelry should be lived in. Each piece is
              hand-finished in 18K gold plating, designed to catch warm light and soften with wear —
              the kind of jewelry that becomes part of you.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex w-fit items-center gap-2 border border-cream/40 px-8 py-3.5 font-sans text-xs uppercase tracking-widest2 text-cream transition-colors hover:bg-cream hover:text-espresso"
            >
              Read Our Story <ArrowRight width={14} height={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 text-center">
          <p className="font-sans text-xs uppercase tracking-widest2 text-gold">Loved By Many</p>
          <h2 className="mt-2 font-serif text-4xl text-ink md:text-5xl">Kind Words</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-ink/10 bg-cream p-8 text-center">
              <StarRating rating={t.rating} size={16} className="justify-center" />
              <p className="mt-5 font-serif text-xl italic leading-relaxed text-ink">"{t.text}"</p>
              <p className="mt-6 font-sans text-xs uppercase tracking-widest2 text-stone">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="bg-gold">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
          <h2 className="font-serif text-4xl text-cream md:text-5xl">Join for 10% Off</h2>
          <p className="mt-4 font-sans text-sm text-cream/85">
            Be first to know about new collections, private sales, and styling notes.
            Enjoy 10% off your first order.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 border border-cream/40 bg-cream/10 px-5 py-3.5 font-sans text-sm text-cream placeholder:text-cream/60 focus:border-cream focus:outline-none"
            />
            <button
              type="submit"
              className="bg-espresso px-8 py-3.5 font-sans text-xs uppercase tracking-widest2 text-cream transition-colors hover:bg-ink"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 font-sans text-xs text-cream/70">
            By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  )
}
