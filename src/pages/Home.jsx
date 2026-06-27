import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Truck, RotateCcw, Sparkles, ShieldCheck, Star } from 'lucide-react'
import { products, categories, reels, testimonials } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import Stars from '@/components/Stars'
import { useStrkImages, PLACEHOLDER } from '@/lib/strk'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function Home() {
  const containerRef = useRef(null)
  useStrkImages(containerRef, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-velmora"
          data-strk-bg="warm gold jewelry worn on a woman editorial close up"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />
        <div className="relative z-10 text-center text-cream px-5 max-w-3xl animate-fade-up">
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-champagne mb-6">
            Demi-Fine Gold Jewelry
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] font-medium">
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-cream/85 max-w-xl mx-auto leading-relaxed">
            Warm, wearable gold — designed in small batches and made to live with
            you, every day.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 mt-9 bg-gold text-cream px-9 py-4 text-[0.7rem] uppercase tracking-[0.2em] font-semibold hover:bg-gold-deep transition-colors"
          >
            Shop the Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 text-[0.6rem] uppercase tracking-[0.3em] animate-fade">
          Scroll
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-ink text-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2.5 text-center">
              <item.icon className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />
              <span className="text-[0.65rem] md:text-xs uppercase tracking-[0.15em] text-cream/90">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl">Bestsellers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] font-semibold border border-ink px-8 py-3.5 hover:bg-ink hover:text-cream transition-colors"
          >
            View All Jewelry <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Reels strip */}
      <section className="bg-sand py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold mb-3">As Worn</p>
              <h2 className="font-serif text-4xl md:text-5xl">#VelmoraOnYou</h2>
            </div>
            <p className="hidden md:block text-sm text-ink-soft max-w-xs text-right">
              Real pieces, real wear. Tag us to be featured.
            </p>
          </div>
        </div>
        <div className="no-scrollbar overflow-x-auto px-5 md:px-8">
          <div className="flex gap-4 md:gap-5 pb-2">
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="relative shrink-0 w-[60vw] max-w-[260px] aspect-[9/16] overflow-hidden bg-ink group"
              >
                <img
                  src={PLACEHOLDER}
                  alt={reel.caption}
                  data-strk-img-id={reel.imgId}
                  data-strk-img={reel.caption}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif italic text-cream text-lg leading-snug">
                  {reel.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by category */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold mb-3">Explore</p>
          <h2 className="font-serif text-4xl md:text-5xl">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-sand"
            >
              <img
                src={PLACEHOLDER}
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`${cat.name} gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/25 group-hover:bg-ink/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-cream text-center px-4">
                <h3 className="font-serif text-3xl md:text-4xl tracking-wide">{cat.name}</h3>
                <p className="text-xs text-cream/80 mt-2 max-w-[200px]">{cat.desc}</p>
                <span className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] font-semibold border-b border-cream/60 pb-1 group-hover:border-gold group-hover:text-gold transition-colors">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand story split */}
      <section className="bg-ink text-cream">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div
            className="min-h-[420px] md:min-h-[560px] bg-cover bg-center"
            data-strk-bg-id="story-bg-velmora"
            data-strk-bg="jeweler hands crafting gold jewelry warm atelier"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="900"
          />
          <div className="flex flex-col justify-center px-6 md:px-16 py-16 md:py-24">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold mb-4">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Quiet luxury, made to be lived in.
            </h2>
            <p className="mt-6 text-cream/75 leading-relaxed max-w-md">
              Velmora began with a simple belief: fine gold jewelry should be
              warm, wearable, and within reach. Each piece is designed in small
              batches and finished by hand, in 18K gold plating over sterling
              silver — hypoallergenic, and made to glow against the skin.
            </p>
            <p className="mt-4 text-cream/75 leading-relaxed max-w-md">
              No noise, no discounts, no compromise. Just pieces crafted to be
              treasured, every day.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-gold border-b border-gold pb-1 w-fit hover:text-champagne hover:border-champagne transition-colors"
            >
              Read Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold mb-3">Loved By You</p>
          <h2 className="font-serif text-4xl md:text-5xl">Kind Words</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-sand/60 border border-line p-8 md:p-10 flex flex-col">
              <Stars rating={t.rating} className="mb-5" />
              <p className="font-serif text-xl md:text-2xl italic leading-snug text-ink flex-1">
                “{t.text}”
              </p>
              <div className="mt-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-semibold">
                  {t.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-ink-soft">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gold text-cream">
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-24 text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-champagne mb-4">Join Velmora</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Enjoy 10% off your first order
          </h2>
          <p className="mt-4 text-cream/85 max-w-md mx-auto">
            Be first to know about new collections, private sales, and styling
            notes. No noise — just the good things.
          </p>
          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-cream/15 border border-cream/40 text-cream placeholder-cream/70 px-4 py-3.5 text-sm focus:outline-none focus:border-cream transition-colors"
            />
            <button
              type="submit"
              className="bg-ink text-cream px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] font-semibold hover:bg-ink-soft transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-cream/70">
            By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  )
}
