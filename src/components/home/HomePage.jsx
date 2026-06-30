import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import { categories, products, testimonials, ugcCards } from '@/data/products.js'
import { createHeroArtwork } from '@/data/productArtwork.js'
import ProductCard from '@/components/product/ProductCard.jsx'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']
const heroArtwork = createHeroArtwork()

export default function HomePage({ onAddToCart }) {
  return (
    <div className="bg-velmora-ivory text-velmora-ink">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          alt="Velmora gold jewelry editorial campaign"
          src={heroArtwork}
        />
        <div className="absolute inset-0 bg-velmora-espresso/68" />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso/95 via-velmora-espresso/72 to-velmora-espresso/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/25 via-velmora-espresso/40 to-velmora-espresso/95" />
        <div className="absolute bottom-10 right-6 hidden h-44 w-44 rounded-full border border-velmora-gold/40 md:block" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-velmora-ivory/25 bg-velmora-espresso/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-velmora-champagne backdrop-blur">
              <Sparkles className="h-4 w-4 text-velmora-gold" />
              Demi-fine gold essentials
            </p>
            <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.94] tracking-tight text-velmora-ivory sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-velmora-champagne sm:text-xl">
              Warm, luminous jewelry for gifting, self-purchase, and the everyday rituals worth keeping.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link to="/shop" className="inline-flex items-center justify-center gap-3 rounded-full bg-velmora-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ivory shadow-glow transition hover:bg-velmora-burnished">
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#story" className="inline-flex items-center justify-center rounded-full border border-velmora-ivory/40 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold">
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-velmora-espresso/10 bg-velmora-champagne text-velmora-espresso">
        <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-4 py-4 text-xs font-bold uppercase tracking-[0.22em] sm:justify-between sm:px-6 lg:px-8">
          {trustItems.map((item) => (
            <span key={item} className="shrink-0 snap-start">{item}</span>
          ))}
        </div>
      </div>

      <section id="bestsellers" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-burnished">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-espresso sm:text-6xl">Most-Treasured Pieces</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-velmora-burnished transition hover:text-velmora-espresso">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} priority={index === 0} />
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-velmora-espresso py-20 text-velmora-ivory lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Seen on you</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ivory">Quiet gold in motion</h2>
          </div>
          <div className="flex snap-x gap-5 overflow-x-auto pb-4">
            {ugcCards.map((card) => (
              <article key={card.id} className="group relative h-[28rem] w-64 shrink-0 snap-start overflow-hidden rounded-[2rem] bg-velmora-champagne shadow-soft sm:w-72">
                <img
                  className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                  alt={card.caption}
                  src={card.artwork}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/45 to-transparent p-5 pt-20">
                  <p className="font-serif text-2xl font-semibold leading-7 text-velmora-ivory">{card.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-burnished">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-espresso sm:text-6xl">Find your signature</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.label}`} className="group relative min-h-[25rem] overflow-hidden rounded-[2rem] bg-velmora-espresso text-velmora-ivory shadow-soft">
              <img
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-65"
                alt={category.label}
                src={category.artwork}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/90 via-velmora-espresso/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-7 transition duration-500 group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-5xl font-semibold text-velmora-ivory">{category.label}</h3>
                <p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-champagne opacity-0 transition duration-500 group-hover:opacity-100">{category.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-champagne/75 py-20 text-velmora-ink lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-velmora-espresso shadow-soft">
            <div className="absolute left-6 top-6 z-10 rounded-full border border-velmora-ivory/25 bg-velmora-espresso/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne backdrop-blur">Since 2026</div>
            <img
              className="aspect-[4/5] w-full object-cover opacity-90"
              alt="Velmora jewelry craftsmanship"
              data-strk-img-id="story-velmora-craft-table-u74d2e"
              data-strk-img="[story-body] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1100"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="lg:pl-12">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-burnished">Our Story</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight text-velmora-espresso sm:text-6xl">
              Designed for the glow between special occasions.
            </h2>
            <p id="story-body" className="mt-6 text-lg leading-8 text-velmora-taupe">
              Velmora creates demi-fine jewelry with heirloom cues and everyday ease: warm 18K gold plating, skin-friendly finishes, and silhouettes that feel polished without asking for attention.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-3 rounded-full border border-velmora-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-burnished transition hover:bg-velmora-gold hover:text-velmora-ivory">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.author} className="rounded-[2rem] border border-velmora-espresso/10 bg-white/45 p-7 text-velmora-ink shadow-soft">
              <div className="mb-5 text-velmora-gold" aria-hidden="true">★★★★★</div>
              <p className="font-serif text-2xl leading-8 text-velmora-espresso">“{review.quote}”</p>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-velmora-burnished">{review.author}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="journal" className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-velmora-espresso text-velmora-ivory shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.8fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Velmora Notes</p>
              <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight text-velmora-ivory sm:text-6xl">Join for 10% off your first order.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-velmora-champagne">
                Receive styling notes, care rituals, and first access to new small-batch drops.
              </p>
              <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <div className="relative flex-1">
                  <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-velmora-gold" />
                  <input id="newsletter-email" type="email" placeholder="Email address" className="w-full rounded-full border border-velmora-ivory/15 bg-velmora-ivory px-12 py-4 text-sm text-velmora-espresso placeholder:text-velmora-taupe focus:border-velmora-gold focus:outline-none" />
                </div>
                <button type="submit" className="rounded-full bg-velmora-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-burnished">
                  Join
                </button>
              </form>
            </div>
            <div
              className="min-h-[20rem] bg-velmora-champagne"
              data-strk-bg-id="newsletter-editorial-jewelry-v91f6a"
              data-strk-bg="[hero-title] [story-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1000"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
