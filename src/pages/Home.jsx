import { useEffect, useRef } from 'react'
import { ArrowRight, Instagram, Mail, ShieldCheck, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import strkImgConfig from '@/strk-img-config.json'
import { categories, products, reels } from '../data'
import ProductCard from '../components/storefront/ProductCard'
import { AccentButton } from '../components/storefront/StoreButtons'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']
const reviews = [
  ['The pieces look delicate but feel substantial. My huggies have not left my ears.', 'Maya R.'],
  ['Beautiful packaging and the gold tone is exactly that soft expensive shade.', 'Elena S.'],
  ['I bought one necklace as a gift and came back for earrings for myself.', 'Naomi L.'],
]

export default function Home({ onAdd }) {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <main ref={pageRef} className="bg-velmora-ivory text-velmora-cocoa">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-porcelain">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-75"
          data-strk-bg-id="velmora-hero-model-gold-closeup-1b67d0"
          data-strk-bg="[hero-kicker] [hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/55 via-velmora-espresso/25 to-velmora-espresso/82" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-28">
          <div className="max-w-3xl animate-fade-up">
            <p id="hero-kicker" className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-velmora-champagne">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.9] tracking-[-0.03em] text-velmora-porcelain sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-porcelain/85 sm:text-lg">
              Warm, luminous essentials for gifting, layering, and everyday rituals — designed in gold tones that flatter every moment.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/shop" className="inline-flex items-center justify-center rounded-full bg-velmora-champagne px-7 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition duration-300 hover:bg-velmora-porcelain">
                Shop the Collection
              </Link>
              <a href="#bestsellers" className="inline-flex items-center justify-center gap-2 rounded-full border border-velmora-porcelain/35 px-7 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-porcelain transition hover:border-velmora-champagne hover:text-velmora-champagne">
                View Bestsellers <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-champagne/25 bg-velmora-espresso py-4 text-velmora-porcelain">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 text-center text-[11px] font-bold uppercase tracking-[0.22em] sm:px-8 lg:px-10">
          {trustItems.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="bestsellers" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-antique">Most loved</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold tracking-[-0.03em] text-velmora-cocoa md:text-6xl">Bestsellers</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-taupe">Five signature styles chosen for daily shine, beautiful gifting, and a polished finish at an accessible price.</p>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}
        </div>
      </section>

      <section id="journal" className="overflow-hidden bg-velmora-espresso py-20 text-velmora-porcelain lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-9 flex items-end justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-champagne">Seen on you</p>
              <h2 id="ugc-section-title" className="mt-3 font-serif text-5xl font-semibold tracking-[-0.03em] text-velmora-porcelain">The Velmora Reel</h2>
            </div>
            <Instagram className="hidden h-8 w-8 text-velmora-champagne md:block" />
          </div>
          <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
            {reels.map(([imgId, caption, captionId]) => (
              <article key={imgId} className="group relative aspect-reel w-[68vw] max-w-[260px] shrink-0 overflow-hidden rounded-[1.75rem] bg-velmora-cocoa shadow-glow sm:w-[260px]">
                <img
                  alt={caption}
                  className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  data-strk-img-id={imgId}
                  data-strk-img={`[${captionId}] [ugc-section-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="520"
                  src={placeholder}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/75 via-transparent to-transparent" />
                <p id={captionId} className="absolute bottom-5 left-5 right-5 font-serif text-2xl leading-7 text-velmora-porcelain">{caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-antique">Shop by category</p>
          <h2 id="category-section-title" className="mt-3 font-serif text-5xl font-semibold tracking-[-0.03em] text-velmora-cocoa md:text-6xl">Find your glow</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to="/shop" className="group relative aspect-editorial overflow-hidden rounded-[2rem] bg-velmora-espresso shadow-soft">
              <img
                alt={category.name}
                className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}] [category-section-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src={placeholder}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-velmora-porcelain transition duration-300 md:translate-y-12 md:group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-4xl font-semibold">{category.name}</h3>
                <p id={category.descId} className="mt-3 text-sm leading-6 text-velmora-porcelain/82 md:opacity-0 md:transition md:group-hover:opacity-100">{category.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-porcelain py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-velmora-espresso shadow-glow">
            <img
              alt="Velmora jewelry atelier"
              className="aspect-editorial h-full w-full object-cover opacity-90"
              data-strk-img-id="velmora-brand-story-atelier-77b31a"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src={placeholder}
            />
          </div>
          <div className="text-velmora-cocoa lg:pl-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-antique">Velmora philosophy</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-none tracking-[-0.03em] md:text-7xl">Fine feeling, everyday ease.</h2>
            <p id="story-copy" className="mt-7 max-w-xl text-base leading-8 text-velmora-taupe">
              We create demi-fine jewelry with the warmth of heirlooms and the ease of modern essentials: thoughtful proportions, soft gold tones, hypoallergenic finishes, and refined details designed to live with you.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-2 border-b border-velmora-champagne pb-2 text-xs font-bold uppercase tracking-[0.22em] text-velmora-cocoa transition hover:text-velmora-antique">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map(([quote, name]) => (
            <article key={name} className="rounded-[1.75rem] border border-velmora-champagne/25 bg-velmora-porcelain p-7 text-velmora-cocoa shadow-soft">
              <div className="mb-5 flex gap-1 text-velmora-champagne" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="font-serif text-2xl leading-8 text-velmora-cocoa">“{quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-antique">{name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="overflow-hidden rounded-[2rem] bg-velmora-espresso p-8 text-velmora-porcelain shadow-glow md:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-velmora-champagne/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-velmora-champagne">
              <ShieldCheck className="h-4 w-4" /> First-order glow
            </div>
            <h2 className="font-serif text-5xl font-semibold leading-none tracking-[-0.03em]">Join for 10% off your first order</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-porcelain/76">Receive quiet-luxury styling notes, early collection previews, and thoughtful gifting reminders.</p>
          </div>
          <form className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row lg:mt-0" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-champagne" />
              <input id="newsletter-email" type="email" placeholder="Email address" className="h-14 w-full rounded-full border border-velmora-champagne/35 bg-velmora-porcelain/10 pl-11 pr-5 text-sm text-velmora-porcelain placeholder:text-velmora-porcelain/60 outline-none transition focus:border-velmora-champagne" />
            </div>
            <AccentButton type="submit" className="h-14 px-8">Join</AccentButton>
          </form>
        </div>
      </section>
    </main>
  )
}
