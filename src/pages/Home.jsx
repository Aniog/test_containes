import { Link } from 'react-router-dom'
import { ArrowRight, Star, Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react'
import { PRODUCTS, CATEGORIES, REELS, TESTIMONIALS } from '@/data/products'
import { useImageLoader } from '@/lib/useImageLoader'
import ProductCard from '@/components/ui/ProductCard'
import StarRating from '@/components/ui/StarRating'
import ProductImage, { PLACEHOLDER_SVG } from '@/components/ui/ProductImage'

const TRUST_ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function Home() {
  const containerRef = useImageLoader([])

  return (
    <div ref={containerRef}>
      {/* ===== Hero ===== */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
        {/* Background image */}
        <div
          data-strk-bg-id="hero-bg-velmora-1a2b"
          data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn on model warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-sand"
        />
        {/* Warm overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-20 md:pb-28">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-cream/80 text-[11px] md:text-xs tracking-[0.3em] uppercase mb-5">
              Demi-Fine Gold Jewelry
            </p>
            <h1
              id="hero-title"
              className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
            >
              Crafted to be
              <br />
              <span className="italic text-champagne">Treasured</span>
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 text-cream/85 text-base md:text-lg max-w-md leading-relaxed"
            >
              Hand-finished 18K gold plated pieces, designed in studio and made
              to be worn every day — for gifting, and for you.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 mt-9 bg-champagne text-cream text-[11px] md:text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-champagne-deep transition-colors duration-300"
            >
              Shop the Collection
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Trust bar ===== */}
      <section className="border-y border-line bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-line">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2.5 py-5 px-3 text-center"
            >
              <Icon size={17} strokeWidth={1.5} className="text-champagne shrink-0" />
              <span className="text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-stone">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Bestsellers ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-champagne mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Bestsellers</h2>
            <p className="mt-4 text-stone max-w-md mx-auto">
              The pieces our community reaches for, again and again.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 border border-ink text-ink text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-ink hover:text-cream transition-colors duration-300"
            >
              View All
              <ArrowRight size={15} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== UGC Reels ===== */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-champagne mb-3">
                As Worn
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-ink">Styled by You</h2>
            </div>
            <p className="hidden md:block text-sm text-stone max-w-xs text-right">
              Tag <span className="text-ink">@velmora</span> to be featured.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-4 md:gap-5 px-5 md:px-8 pb-2">
            {REELS.map((reel) => (
              <div
                key={reel.id}
                className="relative shrink-0 w-[230px] md:w-[260px] aspect-[9/16] overflow-hidden bg-ink group"
              >
                <img
                  data-strk-img-id={reel.imgId}
                  data-strk-img={`[${reel.titleId}] gold jewelry worn ear neck editorial vertical`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="520"
                  src={PLACEHOLDER_SVG}
                  alt={reel.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <p
                  id={reel.titleId}
                  className="absolute bottom-5 left-5 right-5 font-serif italic text-cream text-lg leading-snug"
                >
                  {reel.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Shop by category ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-champagne mb-3">
              Explore
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Shop by Category</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative overflow-hidden aspect-[4/5] bg-sand"
              >
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="700"
                  src={PLACEHOLDER_SVG}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/25 group-hover:bg-ink/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3
                    id={cat.titleId}
                    className="font-serif text-cream text-3xl md:text-4xl uppercase tracking-[0.16em] translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    {cat.name}
                  </h3>
                  <p id={cat.descId} className="sr-only">
                    {cat.name} collection
                  </p>
                  <span className="mt-3 text-cream/0 group-hover:text-cream/90 text-[11px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2">
                    Shop Now <ArrowRight size={14} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Brand story ===== */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            <div
              data-strk-bg-id="story-bg-velmora-3c4d"
              data-strk-bg="[story-text] gold jewelry craftsmanship atelier warm"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="absolute inset-0"
            />
          </div>
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-champagne mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
              Jewelry made to be lived in.
            </h2>
            <p id="story-text" className="mt-6 text-stone leading-relaxed">
              Velmora began with a simple belief: that beautiful, lasting gold
              jewelry should not be reserved for special occasions. We design
              every piece in our studio and finish each by hand in 18K gold
              plating over sterling silver — the warmth of fine jewelry, made
              for everyday.
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              No markups for storefronts, no compromises on materials. Just
              considered design, honest pricing, and pieces crafted to be
              treasured for years.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 border-b border-ink text-ink text-[11px] tracking-[0.2em] uppercase pb-1 hover:text-champagne hover:border-champagne transition-colors duration-300"
            >
              Read Our Story
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-champagne mb-3">
              Loved by Thousands
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">What They Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.id}
                className="flex flex-col items-center text-center px-4"
              >
                <StarRating rating={t.rating} size={16} className="mb-5" />
                <blockquote className="font-serif text-xl md:text-2xl text-ink italic leading-relaxed">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 text-[11px] tracking-[0.2em] uppercase text-stone">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Newsletter ===== */}
      <section className="bg-ink text-cream">
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-champagne mb-4">
            Join Velmora
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            10% off your first order
          </h2>
          <p className="mt-4 text-cream/70 max-w-md mx-auto">
            Be the first to know about new collections, private sales, and
            styling notes. Enjoy 10% off when you subscribe.
          </p>
          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-transparent border-b border-cream/30 focus:border-champagne text-cream placeholder:text-cream/40 px-1 py-3 text-sm outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-champagne text-cream text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-champagne-deep transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-cream/40">
            By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  )
}
