import { Link } from "react-router-dom"
import { ArrowRight, Star, Truck, RotateCcw, Sparkles, ShieldCheck } from "lucide-react"
import { products, categories, testimonials, reels } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import StarRating from "@/components/ui/StarRating"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const trustItems = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function Home() {
  return (
    <div>
      {/* 1. Hero */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-velmora-01"
          data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn model warm light editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="mb-5 text-[11px] uppercase tracking-ultra text-cream/80 animate-fade-in">
            Demi-Fine Jewelry · 18K Gold Plated
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl font-light leading-[1.05] text-cream sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up"
          >
            Crafted to be
            <br />
            <em className="not-italic text-gold-soft">Treasured</em>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-md text-sm leading-relaxed text-cream/80 md:text-base animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Warm, wearable gold jewelry designed for the everyday and the
            unforgettable. Made to be lived in, made to be loved.
          </p>
          <Link
            to="/shop"
            className="mt-9 bg-gold px-10 py-4 text-[11px] uppercase tracking-widest text-cream transition-all duration-300 hover:bg-gold-dark hover:shadow-lg animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1">
            <div className="h-2 w-1 rounded-full bg-cream/70 animate-bounce" />
          </div>
        </div>
      </section>

      {/* 3. Trust bar */}
      <section className="border-y border-espresso/10 bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 lg:grid-cols-4 lg:px-8">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2.5 py-5 text-center"
            >
              <item.icon size={16} className="text-gold" strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-widest text-espresso/70 md:text-[11px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bestsellers */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 md:py-28">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-ultra text-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl text-espresso md:text-5xl">
            Bestsellers
          </h2>
          <div className="mx-auto mt-5 h-px w-12 bg-gold" />
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-espresso px-8 py-3.5 text-[11px] uppercase tracking-widest text-espresso transition-all duration-300 hover:bg-espresso hover:text-cream"
          >
            View All Jewelry
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 5. Reel-style UGC row */}
      <section className="bg-espresso py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-ultra text-gold mb-3">
                As Worn By You
              </p>
              <h2 className="font-serif text-4xl text-cream md:text-5xl">
                #VelmoraMoments
              </h2>
            </div>
            <p className="hidden max-w-xs text-sm text-cream/50 md:block">
              Real pieces, real wear. Tag us to be featured.
            </p>
          </div>
        </div>

        <div className="no-scrollbar flex gap-4 overflow-x-auto px-6 pb-4 lg:px-8">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="group relative aspect-[9/16] w-56 shrink-0 overflow-hidden bg-espresso-700 sm:w-64"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[reel-cap-${reel.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={PLACEHOLDER}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
              <p
                id={`reel-cap-${reel.id}`}
                className="absolute bottom-5 left-5 right-5 font-serif text-lg italic leading-snug text-cream"
              >
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Shop by category */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 md:py-28">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-ultra text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl text-espresso md:text-5xl">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4/5] overflow-hidden bg-stone md:aspect-[3/4]"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-desc-${cat.id}] [cat-name-${cat.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src={PLACEHOLDER}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent transition-opacity duration-500 group-hover:from-espresso/80" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-center">
                <h3
                  id={`cat-name-${cat.id}`}
                  className="font-serif text-2xl uppercase tracking-widest text-cream"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-desc-${cat.id}`}
                  className="mt-2 text-xs text-cream/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  {cat.description}
                </p>
                <span className="mt-4 inline-block text-[10px] uppercase tracking-ultra text-gold-soft">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand story split */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden">
            <div
              className="absolute inset-0"
              data-strk-bg-id="story-bg-velmora-01"
              data-strk-bg="[story-text] [story-eyebrow] gold jewelry craftsmanship atelier hands warm"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="900"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-24">
            <p id="story-eyebrow" className="text-[11px] uppercase tracking-ultra text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl leading-tight text-espresso md:text-5xl">
              Jewelry with a quiet kind of luxury
            </h2>
            <p id="story-text" className="mt-6 text-sm leading-relaxed text-espresso/70 md:text-base">
              Velmora began with a simple belief: that fine craftsmanship should
              be within reach. Each piece is designed in our studio and finished
              in 18K gold over sterling silver — hypoallergenic, durable, and
              made to be worn every day. We skip the markup, not the meaning.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-espresso/70 md:text-base">
              From the first sketch to the final polish, every detail is
              considered. The result is jewelry that feels considered, personal,
              and quietly yours.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex w-fit items-center gap-2 text-[11px] uppercase tracking-widest text-espresso transition-colors hover:text-gold"
            >
              Read Our Story
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 md:py-28">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-ultra text-gold mb-3">
            Loved By Thousands
          </p>
          <h2 className="font-serif text-4xl text-espresso md:text-5xl">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center border border-espresso/10 bg-cream px-8 py-10 text-center"
            >
              <StarRating rating={t.rating} size={16} />
              <p className="mt-5 font-serif text-lg italic leading-relaxed text-espresso/80">
                “{t.text}”
              </p>
              <p className="mt-6 text-[11px] uppercase tracking-widest text-gold">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="bg-espresso">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-8 md:py-28">
          <p className="text-[11px] uppercase tracking-ultra text-gold mb-4">
            Join the Velmora Circle
          </p>
          <h2 className="font-serif text-4xl text-cream md:text-5xl">
            Enjoy 10% off your first order
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-cream/60">
            Be the first to know about new collections, private sales, and
            styling notes. Plus, a welcome gift just for you.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 border border-cream/20 bg-transparent px-5 py-3.5 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gold px-8 py-3.5 text-[11px] uppercase tracking-widest text-cream transition-colors hover:bg-gold-dark"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-[11px] text-cream/40">
            By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  )
}
