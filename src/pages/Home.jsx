import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, Mail, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard.jsx'
import ProductImage from '@/components/product/ProductImage.jsx'
import { products, categories } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']
const reels = [
  { id: 'ear-stack', caption: 'Golden huggies, quietly stacked', text: 'warm gold huggie earrings worn on ear' },
  { id: 'neck-glow', caption: 'A necklace for candlelit plans', text: 'delicate gold crystal necklace worn on neck' },
  { id: 'gift-box', caption: 'Wrapped for the moment', text: 'luxury jewelry gift box gold necklace earrings' },
  { id: 'daylight', caption: 'Everyday shine, softened', text: 'demi fine gold jewelry on model warm daylight' },
]
const reviews = [
  ['It feels special without trying too hard. The gold tone is beautiful in person.', 'Maya R.'],
  ['My huggies arrived quickly and have become my everyday pair.', 'Claire W.'],
  ['The packaging made it feel like a real gift, even though it was for me.', 'Nina K.'],
]

export default function Home({ onAddToCart }) {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <main ref={containerRef} className="text-velmora-ink">
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-velmora-espresso text-velmora-ivory">
        <div
          className="absolute inset-0 opacity-80"
          data-strk-bg-id="velmora-hero-model-bg-f7c31a"
          data-strk-bg="[hero-image-brief] [hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/45 to-velmora-espresso/20" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
          <span id="hero-image-brief" className="sr-only">warm lit close up of gold earrings necklace jewelry worn on model skin editorial luxury</span>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="max-w-3xl font-serif text-6xl font-semibold leading-[0.92] text-balance sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory/82 sm:text-lg">
            Warm-lit heirlooms for everyday rituals — earrings, necklaces, and huggies designed to feel personal from the first wear.
          </p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-3 rounded-full bg-velmora-champagne px-7 py-4 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-espresso shadow-soft transition hover:-translate-y-0.5 hover:bg-velmora-ivory">
            Shop the Collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-y border-velmora-linen bg-velmora-ivory text-velmora-espresso">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 text-center text-[0.68rem] font-bold uppercase tracking-[0.18em] sm:px-6 md:grid-cols-4 lg:px-8">
          {trustItems.map((item) => <div key={item} className="py-4">{item}</div>)}
        </div>
      </section>

      <section id="bestsellers" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-rose">Velmora edits</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-espresso sm:text-6xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-champagne">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAddToCart} />)}
        </div>
      </section>

      <section id="journal" className="overflow-hidden bg-velmora-espresso py-16 text-velmora-ivory lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Seen on you</p>
              <h2 className="mt-3 font-serif text-5xl font-semibold">Reel moments</h2>
            </div>
            <span className="hidden text-sm text-velmora-ivory/65 sm:block">Swipe the strip</span>
          </div>
          <div className="hide-scrollbar flex snap-x gap-4 overflow-x-auto pb-3">
            {reels.map((reel) => (
              <article key={reel.id} className="relative aspect-reel w-60 shrink-0 snap-start overflow-hidden bg-velmora-ink shadow-jewel sm:w-72">
                <ProductImage id={`reel-${reel.id}-img`} query={`[reel-${reel.id}-text]`} alt={reel.caption} ratio="9x16" width="520" />
                <span id={`reel-${reel.id}-text`} className="sr-only">{reel.text}</span>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/70 to-transparent p-5 pt-20">
                  <p className="font-serif text-2xl leading-tight text-velmora-ivory">{reel.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-rose">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-espresso">Find your signature</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category} to={`/shop?category=${category}`} className="group relative aspect-editorial overflow-hidden bg-velmora-espresso shadow-soft">
              <div className="h-full w-full transition duration-700 group-hover:scale-105" data-strk-bg-id={`category-${category.toLowerCase()}-bg-72c9`} data-strk-bg={`[category-${category.toLowerCase()}-title]`} data-strk-bg-ratio="3x4" data-strk-bg-width="800" />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/88 via-velmora-espresso/20 to-transparent" />
              <h3 id={`category-${category.toLowerCase()}-title`} className="absolute bottom-6 left-6 font-serif text-4xl font-semibold text-velmora-ivory transition group-hover:text-velmora-champagne">
                {category}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-ivory py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="aspect-editorial overflow-hidden bg-velmora-linen shadow-jewel">
            <ProductImage id="story-editorial-img-b24d" query="[story-copy] [story-title]" alt="Velmora jewelry craftsmanship" ratio="4x3" width="1000" />
          </div>
          <div className="max-w-xl text-velmora-ink lg:pl-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-rose">Our point of view</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-none text-velmora-espresso sm:text-6xl">Jewelry for the in-between moments.</h2>
            <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-ink/78">
              Velmora designs demi-fine pieces that carry the mood of heirlooms without the ceremony. Each style is selected for warm shine, comfort, and an easy sense of occasion.
            </p>
            <a href="#" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-champagne pb-2 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-champagne">
              Our Story <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map(([quote, name]) => (
            <figure key={name} className="border border-velmora-linen bg-velmora-ivory p-7 text-velmora-ink shadow-soft">
              <div className="mb-5 flex text-velmora-champagne" aria-label="5 stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="font-serif text-2xl leading-snug text-velmora-espresso">“{quote}”</blockquote>
              <figcaption className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-velmora-rose">{name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-5xl bg-velmora-champagne p-8 text-velmora-espresso shadow-jewel sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.28em]">Velmora notes</p>
              <h2 className="mt-3 font-serif text-5xl font-semibold leading-none">Join for 10% off your first order.</h2>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-espresso/70" />
                <input id="newsletter-email" type="email" placeholder="Email address" className="w-full rounded-full border border-velmora-espresso/20 bg-velmora-ivory py-4 pl-11 pr-4 text-sm text-velmora-espresso placeholder:text-velmora-ink/60 focus:border-velmora-espresso focus:outline-none" />
              </div>
              <button type="submit" className="rounded-full bg-velmora-espresso px-7 py-4 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-ivory hover:text-velmora-espresso">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
