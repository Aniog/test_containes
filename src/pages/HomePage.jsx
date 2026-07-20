import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, Quote, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import ProductImage from '@/components/product/ProductImage'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const ugcCards = [
  {
    id: 'golden-hour-ear-stack',
    title: 'Golden hour ear stack',
    caption: 'A polished ear story for dinner at eight.',
    queryText: 'gold huggie earrings and ear cuff worn on ear warm light vertical reel',
  },
  {
    id: 'necklace-ritual',
    title: 'The necklace ritual',
    caption: 'A floral glimmer against silk and skin.',
    queryText: 'delicate gold crystal necklace worn on neck warm editorial vertical reel',
  },
  {
    id: 'gift-unboxing',
    title: 'Gift-ready arrival',
    caption: 'Soft ivory packaging, champagne ribbon, instant keepsake.',
    queryText: 'luxury jewelry gift box unboxing gold necklace earrings vertical reel',
  },
  {
    id: 'quiet-statement',
    title: 'Quiet statement',
    caption: 'Filigree drops with a candlelit finish.',
    queryText: 'gold filigree drop earrings worn by model warm close-up vertical reel',
  },
]

const categories = [
  {
    id: 'earrings',
    title: 'Earrings',
    copy: 'Sculptural drops, cuffs, and luminous daily pairs.',
    queryText: 'warm gold earrings on model editorial jewelry close-up',
  },
  {
    id: 'necklaces',
    title: 'Necklaces',
    copy: 'Delicate chains and crystal florals for the collarbone.',
    queryText: 'gold necklace worn on neckline warm ivory silk jewelry',
  },
  {
    id: 'huggies',
    title: 'Huggies',
    copy: 'Easy, polished hoops made for every day.',
    queryText: 'chunky gold huggie earrings worn on ear close-up',
  },
]

const testimonials = [
  {
    name: 'Maya R.',
    quote: 'The weight, the shine, the packaging — everything feels far more special than the price suggests.',
  },
  {
    name: 'Nina K.',
    quote: 'I bought the huggies for myself and ended up ordering the necklace as a birthday gift the same week.',
  },
  {
    name: 'Clara J.',
    quote: 'Quiet luxury is exactly right. These pieces make a simple outfit feel considered.',
  },
]

export default function HomePage() {
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
    <main ref={containerRef} className="bg-velmora-pearl text-velmora-espresso">
      <section className="relative min-h-[88vh] overflow-hidden bg-velmora-ink text-white md:min-h-screen">
        <span id="hero-image-caption" className="sr-only">
          Warm-lit close-up of gold jewelry on a model wearing demi-fine earrings and necklace
        </span>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          data-strk-bg-id="velmora-hero-bg-a9f42d"
          data-strk-bg="[hero-image-caption] [hero-subhead] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/35 via-velmora-ink/35 to-velmora-ink/80" />
        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 md:min-h-screen lg:px-8 lg:pb-24">
          <div className="max-w-2xl animate-[fadeUp_900ms_ease-out_both]">
            <p className="mb-5 inline-flex items-center gap-2 border-y border-white/20 py-2 text-xs font-bold uppercase tracking-widerLuxury text-velmora-champagne">
              <Sparkles className="h-3.5 w-3.5" /> Demi-fine gold jewelry
            </p>
            <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subhead" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory/90 sm:text-lg">
              Warm gold essentials and keepsake pieces, designed for self-purchase, gifting, and every quiet ritual between.
            </p>
            <Link to="/shop" className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-luxury text-velmora-ink transition hover:bg-velmora-ivory">
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-espresso/10 bg-velmora-ivory text-velmora-espresso">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-4 text-center text-[11px] font-bold uppercase tracking-luxury sm:px-6 lg:grid-cols-4 lg:px-8">
          {trustItems.map((item) => (
            <p key={item} className="px-2 py-2 text-velmora-mocha">{item}</p>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col gap-5 border-b border-velmora-espresso/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widerLuxury text-velmora-gold">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl font-medium text-velmora-espresso sm:text-6xl">Loved in Gold</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-luxury text-velmora-espresso transition hover:text-velmora-gold">
            View all pieces <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="journal" className="bg-velmora-ink py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-widerLuxury text-velmora-champagne">Worn by Velmora</p>
              <h2 className="mt-3 font-serif text-4xl font-medium text-white sm:text-5xl">Reel-style Moments</h2>
            </div>
            <p className="hidden max-w-xs text-sm leading-7 text-velmora-ivory/70 sm:block">A soft-scroll strip of everyday styling, gifting rituals, and close-up shine.</p>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {ugcCards.map((card) => {
              const titleId = `ugc-${card.id}-title`
              const captionId = `ugc-${card.id}-caption`
              const queryId = `ugc-${card.id}-query`
              return (
                <article key={card.id} className="group relative h-[420px] w-[236px] flex-none snap-start overflow-hidden rounded-[1.75rem] bg-velmora-mocha shadow-velmora sm:h-[520px] sm:w-[292px]">
                  <span id={queryId} className="sr-only">{card.queryText}</span>
                  <ProductImage
                    id={`ugc-reel-${card.id}`}
                    titleId={titleId}
                    captionId={queryId}
                    caption=""
                    query={`[${queryId}] [${captionId}] [${titleId}]`}
                    alt={card.title}
                    ratio="9x16"
                    width="520"
                    className="transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 id={titleId} className="font-serif text-3xl leading-none text-white">{card.title}</h3>
                    <p id={captionId} className="mt-3 text-sm leading-6 text-velmora-ivory/85">{card.caption}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widerLuxury text-velmora-gold">Shop by Category</p>
          <h2 className="mt-3 font-serif text-5xl font-medium text-velmora-espresso sm:text-6xl">Find Your Finish</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const copyId = `category-${category.id}-copy`
            const queryId = `category-${category.id}-query`
            return (
              <Link key={category.id} to={`/shop?category=${category.title}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-ivory text-white shadow-soft">
                <span id={queryId} className="sr-only">{category.queryText}</span>
                <ProductImage
                  id={`category-tile-${category.id}`}
                  titleId={titleId}
                  captionId={queryId}
                  caption=""
                  query={`[${queryId}] [${copyId}] [${titleId}]`}
                  alt={category.title}
                  ratio="3x4"
                  width="850"
                  className="transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-velmora-ink/10 to-transparent opacity-90 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-7 transition duration-300 group-hover:translate-y-0">
                  <h3 id={titleId} className="font-serif text-5xl text-white">{category.title}</h3>
                  <p id={copyId} className="mt-3 max-w-xs text-sm leading-7 text-velmora-ivory/0 transition duration-300 group-hover:text-velmora-ivory/90">{category.copy}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section id="story" className="border-y border-velmora-espresso/10 bg-velmora-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="relative min-h-[420px] overflow-hidden bg-velmora-stone lg:min-h-[620px]">
            <span id="story-image-caption" className="sr-only">Artisan-inspired gold jewelry arranged on warm stone and silk in an editorial studio</span>
            <ProductImage
              id="brand-story-image-7c18e2"
              titleId="story-title"
              captionId="story-image-caption"
              caption=""
              query="[story-image-caption] [story-copy] [story-title]"
              alt="Velmora jewelry arranged editorially"
              ratio="3x4"
              width="1000"
            />
          </div>
          <div className="flex items-center text-velmora-espresso">
            <div className="max-w-xl lg:pl-10">
              <p className="text-xs font-bold uppercase tracking-widerLuxury text-velmora-gold">Our Story</p>
              <h2 id="story-title" className="mt-4 font-serif text-5xl font-medium leading-tight text-velmora-espresso sm:text-6xl">
                Jewelry for the woman who collects moments, not noise.
              </h2>
              <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-mocha">
                Velmora was created for the in-between: a birthday dinner, a Monday meeting, a handwritten note tucked into a gift box. Our demi-fine pieces pair warm gold finishes with refined silhouettes so everyday adornment feels quietly significant.
              </p>
              <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-gold pb-2 text-sm font-bold uppercase tracking-luxury text-velmora-espresso transition hover:text-velmora-gold">
                Our Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="bg-velmora-ivory p-8 text-velmora-espresso shadow-soft">
              <Quote className="h-6 w-6 text-velmora-champagne" />
              <p className="mt-6 text-2xl leading-9 font-serif text-velmora-espresso">“{testimonial.quote}”</p>
              <div className="mt-7 flex items-center justify-between border-t border-velmora-espresso/10 pt-5">
                <p className="text-sm font-bold uppercase tracking-luxury text-velmora-mocha">{testimonial.name}</p>
                <p className="text-sm tracking-[0.12em] text-velmora-champagne">★★★★★</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-espresso text-white shadow-velmora">
          <div className="grid gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:px-14 lg:py-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-widerLuxury text-velmora-champagne">Private List</p>
              <h2 className="mt-4 font-serif text-5xl font-medium text-white sm:text-6xl">Join for 10% off your first order.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-ivory/75">Receive styling notes, early access to new drops, and gifting reminders that feel considered.</p>
            </div>
            <form className="flex items-end" onSubmit={(event) => event.preventDefault()}>
              <div className="w-full">
                <label htmlFor="newsletter-email" className="text-xs font-bold uppercase tracking-luxury text-velmora-ivory/80">Email address</label>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <input id="newsletter-email" type="email" required placeholder="you@example.com" className="min-h-14 flex-1 border border-white/15 bg-white/10 px-5 text-white placeholder:text-white/55 outline-none transition focus:border-velmora-champagne" />
                  <button type="submit" className="min-h-14 rounded-full bg-velmora-champagne px-7 text-sm font-bold uppercase tracking-luxury text-velmora-ink transition hover:bg-velmora-ivory">
                    Join
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
