import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { PRODUCTS, CATEGORIES, REELS, TESTIMONIALS } from '@/data/products'

const TRUST = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function Home() {
  const bestsellers = PRODUCTS.filter((p) => p.tags.includes('bestseller'))

  return (
    <div>
      {/* ===== Hero ===== */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-5">
          <p className="text-[11px] uppercase tracking-[0.4em] text-ivory/80 mb-5 animate-fade-up">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-ivory text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-ivory/85 text-base md:text-lg mt-6 max-w-xl leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Warm-lit gold, made for everyday wear and the moments worth marking.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex items-center gap-2 bg-gold text-ivory px-9 py-4 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-gold-deep transition-colors animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Shop the Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/60 text-[10px] uppercase tracking-[0.3em] animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Scroll
        </div>
      </section>

      {/* ===== Trust bar ===== */}
      <section className="bg-espresso text-ivory border-y border-ivory/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6">
          {TRUST.map((t) => (
            <div key={t.label} className="flex items-center justify-center gap-2.5 text-center">
              <t.icon className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-ivory/85">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Bestsellers ===== */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6">
          {bestsellers.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-ink text-ink px-9 py-4 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-ink hover:text-ivory transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ===== UGC Reels ===== */}
      <section className="bg-cream py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8 mb-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">As Worn</p>
              <h2 className="font-serif text-4xl md:text-5xl text-ink">On You</h2>
            </div>
            <p className="hidden md:block text-sm text-taupe max-w-xs text-right">
              Real moments, real wear. Tag <span className="text-gold">@velmora</span> to be featured.
            </p>
          </div>
        </div>
        <div className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar px-5 md:px-8 pb-2 snap-x">
          {REELS.map((r) => (
            <article
              key={r.id}
              className="relative shrink-0 w-[230px] md:w-[280px] aspect-[9x16] overflow-hidden snap-start group"
            >
              <img
                alt={r.caption}
                data-strk-img-id={`reel-${r.id}`}
                data-strk-img={`[reel-cap-${r.id}] gold jewelry worn on model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <p
                id={`reel-cap-${r.id}`}
                className="absolute bottom-5 left-5 right-5 font-serif text-ivory text-lg leading-snug italic"
              >
                {r.caption}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Shop by category ===== */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Explore</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              to={`/shop?category=${c.id}`}
              className="group relative aspect-[4x5] overflow-hidden block"
            >
              <img
                alt={c.label}
                data-strk-img-id={`cat-${c.id}`}
                data-strk-img={`[cat-desc-${c.id}] [cat-label-${c.id}] gold jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/25 group-hover:bg-espresso/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3
                  id={`cat-label-${c.id}`}
                  className="font-serif text-ivory text-3xl md:text-4xl tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                >
                  {c.label}
                </h3>
                <p
                  id={`cat-desc-${c.id}`}
                  className="text-ivory/0 group-hover:text-ivory/85 text-sm mt-2 max-w-[200px] transition-all duration-500 group-hover:mt-3"
                >
                  {c.desc}
                </p>
                <span className="mt-4 text-[10px] uppercase tracking-[0.25em] text-ivory/0 group-hover:text-gold transition-colors duration-500">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== Brand story ===== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 items-stretch">
          <div className="relative min-h-[420px] md:min-h-[560px]">
            <img
              alt="Velmora atelier"
              data-strk-img-id="story-img"
              data-strk-img="[story-text] gold jewelry craftsmanship atelier"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 md:px-16 py-16 md:py-24">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
              Quiet luxury, made to be lived in.
            </h2>
            <p id="story-text" className="text-taupe mt-6 leading-relaxed max-w-md">
              Velmora began with a simple belief: fine jewelry should be worn, not
              saved for special occasions. Each piece is crafted in 18K gold plating
              with hypoallergenic materials, designed to glow against the skin and
              last through every ordinary, extraordinary day.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 self-start border border-ink text-ink px-8 py-3.5 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-ink hover:text-ivory transition-colors"
            >
              Read More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Kind Words</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Loved by Many</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="bg-cream border border-sand/60 p-8 md:p-10 flex flex-col">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-serif text-xl md:text-2xl text-ink leading-snug italic flex-1">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-[0.2em] text-taupe">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ===== Newsletter ===== */}
      <section className="bg-espresso text-ivory">
        <div className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-24 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Join Velmora</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            10% off your first order
          </h2>
          <p className="text-ivory/70 mt-4 max-w-md mx-auto">
            Be first to know about new collections, private sales, and styling notes.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-ivory/30 px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/50 outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-ivory px-8 py-3.5 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-gold-deep transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[11px] text-ivory/40 mt-4">By subscribing you agree to our privacy policy.</p>
        </div>
      </section>
    </div>
  )
}
