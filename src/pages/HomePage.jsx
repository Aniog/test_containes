import { ArrowRight, Star } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { categories, products, testimonials, ugcMoments } from '../data/products.js'
import ProductCard from '../components/products/ProductCard.jsx'

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

function HomePage({ onAddToCart, onOpenProduct, onNavigate }) {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <main ref={pageRef} className="bg-velmora-ivory text-velmora-espresso">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-pearl">
        <div
          className="absolute inset-0 opacity-70"
          data-strk-bg-id="velmora-hero-bg-a8f3c1"
          data-strk-bg="[hero-subtitle] [hero-title] warm-lit close-up gold jewelry on model quiet luxury"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/50 via-velmora-espresso/28 to-velmora-espresso/82" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-velmora-gold">Demi-fine gold rituals</p>
            <h1 id="hero-title" className="font-serif text-5xl leading-[0.96] tracking-tight md:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-pearl/78 md:text-lg">
              Warm, luminous pieces made for gifting, self-purchase, and the everyday moments that become heirlooms.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onNavigate('shop')}
                className="bg-velmora-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-pearl transition hover:bg-velmora-bronze"
              >
                Shop the Collection
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-velmora-pearl/45 px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-pearl transition hover:border-velmora-gold hover:text-velmora-gold"
              >
                Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-taupe/30 bg-velmora-champagne/75 px-5 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-velmora-espresso/72">
          <span>Free Worldwide Shipping</span>
          <span className="hidden h-1 w-1 rounded-full bg-velmora-gold sm:block" />
          <span>30-Day Returns</span>
          <span className="hidden h-1 w-1 rounded-full bg-velmora-gold sm:block" />
          <span>18K Gold Plated</span>
          <span className="hidden h-1 w-1 rounded-full bg-velmora-gold sm:block" />
          <span>Hypoallergenic</span>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-gold">Bestsellers</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-6xl">Most treasured pieces</h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('shop')}
            className="group inline-flex items-center gap-3 self-start text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-gold"
          >
            View all jewelry <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        </div>
        <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onOpenProduct={onOpenProduct} compact />
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-y border-velmora-taupe/30 bg-velmora-espresso py-16 text-velmora-pearl md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-gold">Seen on you</p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">Reel-worthy glow</h2>
            </div>
            <p className="hidden max-w-xs text-sm leading-6 text-velmora-pearl/62 md:block">
              A soft editorial strip inspired by real styling moments: stacked, gifted, and worn close.
            </p>
          </div>
        </div>
        <div className="scrollbar-hide flex gap-4 overflow-x-auto px-5 pb-3 md:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {ugcMoments.map((moment) => {
            const titleId = `ugc-${moment.id}-caption`
            const descId = `ugc-${moment.id}-note`
            return (
              <article key={moment.id} className="group relative aspect-[9/16] w-56 shrink-0 overflow-hidden bg-velmora-bronze md:w-72">
                <img
                  alt={moment.caption}
                  className="h-full w-full object-cover opacity-[0.88] transition duration-700 group-hover:scale-[1.04]"
                  data-strk-img-id={`ugc-${moment.id}-img-f4d2`}
                  data-strk-img={`[${descId}] [${titleId}] warm gold jewelry worn editorial vertical portrait`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="520"
                  src={placeholder}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/82 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 id={titleId} className="font-serif text-2xl text-velmora-pearl">{moment.caption}</h3>
                  <p id={descId} className="mt-2 text-xs leading-5 text-velmora-pearl/70">{moment.note}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-gold">Shop by category</p>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl">Find your signature</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`
            return (
              <button
                type="button"
                key={category.id}
                onClick={() => onNavigate('shop')}
                className="group relative aspect-[4/5] overflow-hidden bg-velmora-champagne text-left"
              >
                <img
                  alt={category.label}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  data-strk-img-id={`category-${category.id}-tile-b9e1`}
                  data-strk-img={`[${descId}] [${titleId}] warm gold jewelry editorial still life`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src={placeholder}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/78 via-velmora-espresso/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-7 text-velmora-pearl transition duration-300 group-hover:translate-y-0">
                  <h3 id={titleId} className="font-serif text-4xl">{category.label}</h3>
                  <p id={descId} className="mt-2 max-h-0 overflow-hidden text-sm leading-6 text-velmora-pearl/75 opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                    {category.description}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </section>

      <section id="about" className="bg-velmora-champagne/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div className="relative min-h-[460px] overflow-hidden bg-velmora-taupe">
            <img
              alt="Velmora artisan jewelry styling"
              className="h-full w-full object-cover"
              data-strk-img-id="story-artisan-img-6c2f"
              data-strk-img="[story-copy] [story-title] gold jewelry artisan editorial warm neutral"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src={placeholder}
            />
          </div>
          <div className="flex items-center">
            <div className="max-w-xl md:pl-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-gold">Our Story</p>
              <h2 id="story-title" className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
                Luxury made intimate, not intimidating.
              </h2>
              <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-espresso/72">
                Velmora creates demi-fine jewelry with the warmth of heirlooms and the ease of everyday wear. Each piece is selected for glow, comfort, and a refined silhouette that lives beautifully beyond a single season.
              </p>
              <button
                type="button"
                className="mt-8 inline-flex items-center gap-3 border-b border-velmora-gold pb-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-gold"
              >
                Read Our Story <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-gold">Testimonials</p>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl">Loved, layered, gifted</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="border border-velmora-taupe/30 bg-velmora-pearl p-8 text-velmora-espresso">
              <div className="flex gap-1 text-velmora-gold" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 font-serif text-2xl leading-9">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-espresso/55">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="journal" className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-espresso text-velmora-pearl">
          <div className="grid md:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-14 lg:p-20">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-gold">Private list</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Join for 10% off your first order</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-pearl/70">
                Receive styling notes, gifting reminders, and early access to limited drops.
              </p>
              <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="min-h-14 flex-1 border border-velmora-pearl/25 bg-velmora-pearl px-5 text-sm text-velmora-espresso placeholder:text-velmora-espresso/45 focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/30"
                />
                <button type="submit" className="bg-velmora-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-pearl transition hover:bg-velmora-bronze">
                  Sign Up
                </button>
              </form>
            </div>
            <div
              className="min-h-[320px]"
              data-strk-bg-id="newsletter-jewelry-flatlay-3c9d"
              data-strk-bg="[hero-title] [story-title] warm gold jewelry flatlay editorial velvet"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="900"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
