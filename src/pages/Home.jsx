import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Truck, RotateCcw, Sparkles, ShieldCheck, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import StrkImage from '@/components/StrkImage'
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import StarRating from '@/components/StarRating'
import { products, categories, testimonials, reels } from '@/data/products'

const TRUST_ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function Home() {
  const bestsellers = products.slice(0, 5)
  const bgRef = useRef(null)

  useEffect(() => {
    if (!bgRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      if (bgRef.current) {
        ImageHelper.loadImages(strkImgConfig, bgRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div className="overflow-hidden" ref={bgRef}>
      {/* ===== HERO ===== */}
      <section className="relative h-screen min-h-[640px] w-full">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-velmora-9f2a"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs uppercase tracking-widest3 text-ivory/80 mb-5 fade-up">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.05] max-w-4xl fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-base md:text-lg text-ivory/85 max-w-xl leading-relaxed fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Warm, editorial gold — designed in-house and made to be worn every day,
            from quiet mornings to golden evenings.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex items-center gap-2 bg-gold text-ivory text-xs uppercase tracking-widest2 px-10 py-4 hover:bg-gold-soft transition-colors fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Shop the Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/70">
          <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
          <span className="w-px h-10 bg-ivory/40 animate-pulse" />
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-espresso text-ivory border-y border-ivory/10">
        <div className="max-w-8xl mx-auto px-6 md:px-10 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-center gap-2.5 text-center"
              >
                <item.icon className="w-4 h-4 text-gold shrink-0" />
                <span className="text-[11px] md:text-xs uppercase tracking-widest2 text-ivory/90">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BESTSELLERS ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-6 md:px-10">
          <SectionHeading
            eyebrow="Loved by Many"
            title="Bestsellers"
            subtitle="The pieces our community reaches for again and again — warm gold, made to last."
          />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 border border-ink text-ink text-xs uppercase tracking-widest2 px-10 py-4 hover:bg-ink hover:text-ivory transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== UGC REEL STRIP ===== */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-8xl mx-auto px-6 md:px-10">
          <SectionHeading
            eyebrow="As Worn by You"
            title="The Velmora Edit"
            subtitle="Real moments, real gold. Tag @velmora to be featured."
          />
        </div>
        <div className="mt-12 overflow-x-auto no-scrollbar">
          <div className="flex gap-4 px-6 md:px-10 pb-2" style={{ width: 'max-content' }}>
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="relative w-[230px] md:w-[260px] aspect-[9/16] shrink-0 overflow-hidden bg-espresso group"
              >
                <StrkImage
                  imgId={reel.imgId}
                  query={`[${reel.titleId}] gold jewelry worn editorial`}
                  ratio="9x16"
                  width={520}
                  alt={reel.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
                <p
                  id={reel.titleId}
                  className="absolute bottom-5 left-5 right-5 font-serif text-lg text-ivory italic"
                >
                  {reel.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SHOP BY CATEGORY ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-6 md:px-10">
          <SectionHeading
            eyebrow="Find Your Piece"
            title="Shop by Category"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.slug}`}
                className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-cream"
              >
                <StrkImage
                  imgId={cat.imgId}
                  query={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                  ratio="3x4"
                  width={700}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <h3
                    id={cat.titleId}
                    className="font-serif text-3xl md:text-4xl text-ivory uppercase tracking-[0.15em]"
                  >
                    {cat.name}
                  </h3>
                  <p
                    id={cat.descId}
                    className="sr-only"
                  >
                    {cat.desc}
                  </p>
                  <span className="mt-3 text-[11px] uppercase tracking-widest2 text-ivory/90 border-b border-ivory/60 pb-1 group-hover:border-gold group-hover:text-gold transition-colors">
                    Shop Now
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRAND STORY ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-8xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <div
                className="absolute inset-0"
                data-strk-bg-id="story-bg-velmora-3c8d"
                data-strk-bg="[story-text] [story-title]"
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
            </div>
            <div className="md:pl-6">
              <p className="text-xs uppercase tracking-widest3 text-gold mb-4">Our Story</p>
              <h2
                id="story-title"
                className="font-serif text-4xl md:text-5xl text-ink leading-tight"
              >
                Gold, Made to Be Lived In
              </h2>
              <p id="story-text" className="mt-6 text-base text-muted leading-relaxed">
                Velmora began with a simple belief: fine jewelry should not be saved for
                special occasions. We design demi-fine pieces in warm 18K gold plate,
                crafted to be worn through every part of your day — and to be treasured
                for years, not seasons.
              </p>
              <p className="mt-4 text-base text-muted leading-relaxed">
                Every piece is hypoallergenic, ethically made, and finished by hand. No
                markups for markups — just honest, beautiful gold.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink border-b border-ink pb-1 hover:text-gold hover:border-gold transition-colors"
              >
                Read Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-6 md:px-10">
          <SectionHeading
            eyebrow="Kind Words"
            title="Treasured by Many"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <figure
                key={t.id}
                className="bg-cream p-8 md:p-10 flex flex-col items-center text-center"
              >
                <StarRating rating={t.rating} size="md" />
                <blockquote className="mt-5 font-serif text-xl md:text-2xl text-ink italic leading-relaxed">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-widest2 text-muted">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="bg-espresso text-ivory">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-20 md:py-24 text-center">
          <p className="text-xs uppercase tracking-widest3 text-gold mb-4">Join Velmora</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">
            10% Off Your First Order
          </h2>
          <p className="mt-4 text-base text-ivory/70 leading-relaxed">
            Be the first to know about new collections, private sales, and styling
            stories. Enjoy 10% off your first order.
          </p>
          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault()
              const input = e.currentTarget.querySelector('input')
              if (input && input.value) {
                input.value = ''
                alert('Thank you for subscribing!')
              }
            }}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-ivory/30 text-ivory placeholder:text-ivory/50 px-5 py-4 text-sm outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-ivory text-xs uppercase tracking-widest2 px-8 py-4 hover:bg-gold-soft transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-[11px] text-ivory/50">
            By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  )
}
