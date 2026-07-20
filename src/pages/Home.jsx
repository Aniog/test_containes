import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Quote, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { products } from '../data/products.js'
import ProductCard from '../components/product/ProductCard.jsx'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']
const reels = [
  { id: 'ear-stack', imgId: 'reel-ear-stack-d9b4a1', caption: 'The golden ear stack, softened by candlelight.', label: 'Ear stack ritual' },
  { id: 'neck-glow', imgId: 'reel-neck-glow-d9b4a1', caption: 'Layered necklaces for late afternoon plans.', label: 'Layered glow' },
  { id: 'huggie-close', imgId: 'reel-huggie-close-d9b4a1', caption: 'Huggies that feel polished, never overdone.', label: 'Everyday huggies' },
  { id: 'gift-moment', imgId: 'reel-gift-moment-d9b4a1', caption: 'A small box, a lasting keepsake.', label: 'Gift edit' },
]
const categories = [
  { id: 'earrings', imgId: 'category-earrings-f4c2e9', name: 'Earrings', copy: 'Light-catching drops and cuffs' },
  { id: 'necklaces', imgId: 'category-necklaces-f4c2e9', name: 'Necklaces', copy: 'Delicate chains, refined pendants' },
  { id: 'huggies', imgId: 'category-huggies-f4c2e9', name: 'Huggies', copy: 'Everyday gold with soft volume' },
]
const reviews = [
  { name: 'Maya R.', text: 'Looks far more expensive than it is. The huggies have become my daily pair.' },
  { name: 'Claire M.', text: 'The packaging felt beautiful and the necklace was the perfect birthday gift.' },
  { name: 'Nina S.', text: 'Warm gold tone, comfortable wear, and the details are so refined in person.' },
]

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-espresso text-ivory">
      <div className="absolute inset-0" data-strk-bg-id="home-hero-bg-model-jewelry-7f31d9" data-strk-bg="[hero-image-context] [hero-subtitle] [hero-title]" data-strk-bg-ratio="16x9" data-strk-bg-width="1800" />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/35 to-espresso/90" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-20 pt-32 lg:px-10 lg:pb-28">
        <div className="max-w-3xl animate-fade-up">
          <p id="hero-image-context" className="sr-only" aria-hidden="true">Close-up portrait of woman model wearing layered gold necklaces and gold earrings in warm studio light, luxury jewelry campaign</p>
          <p className="mb-5 text-xs font-semibold uppercase tracking-luxe text-champagne">Demi-fine gold jewelry for everyday heirlooms</p>
          <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.95] text-ivory md:text-8xl lg:text-9xl">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-ivory/85 md:text-lg">Warm, luminous pieces designed for gifting, self-celebration, and the quiet rituals that make every day feel considered.</p>
          <Link to="/shop" className="mt-9 inline-flex items-center gap-3 bg-champagne px-7 py-4 text-xs font-bold uppercase tracking-luxe text-espresso transition hover:bg-ivory">
            Shop the Collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  return <div className="border-b border-mist bg-ivory text-cocoa"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-4 text-center text-[11px] font-semibold uppercase tracking-luxe text-stone md:grid-cols-4 lg:px-10">{trustItems.map((item) => <span key={item}>{item}</span>)}</div></div>
}

function SectionHeader({ eyebrow, title, copy, id }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <p className="text-xs font-semibold uppercase tracking-luxe text-antique">{eyebrow}</p>
      <h2 id={id} className="mt-3 font-serif text-5xl font-semibold leading-tight text-cocoa md:text-6xl">{title}</h2>
      {copy && <p className="mt-4 text-sm leading-7 text-stone md:text-base">{copy}</p>}
    </div>
  )
}

function Bestsellers() {
  return (
    <section id="shop" className="bg-parchment px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader id="bestsellers-title" eyebrow="Bestsellers" title="The pieces everyone reaches for" copy="Five luminous signatures, priced for everyday wear and refined enough to gift beautifully." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </div>
    </section>
  )
}

function ReelsRow() {
  return (
    <section className="overflow-hidden bg-espresso px-5 py-20 text-ivory lg:px-10 lg:py-28" id="journal">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="text-xs font-semibold uppercase tracking-luxe text-champagne">Worn by Velmora</p><h2 id="reels-title" className="mt-3 font-serif text-5xl font-semibold">A quiet kind of glow</h2></div>
          <p id="reels-copy" className="max-w-md text-sm leading-7 text-ivory/70">Editorial moments inspired by real styling: stacked, layered, gifted, and loved.</p>
        </div>
        <div className="no-scrollbar flex gap-5 overflow-x-auto pb-3">
          {reels.map((reel) => (
            <article key={reel.id} className="group relative h-[420px] min-w-[236px] overflow-hidden bg-cocoa md:h-[520px] md:min-w-[292px]">
              <img alt={reel.label} className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100" data-strk-img-id={reel.imgId} data-strk-img={`[reel-caption-${reel.id}] [reel-label-${reel.id}] [reels-copy] [reels-title]`} data-strk-img-ratio="9x16" data-strk-img-width="700" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/90 to-transparent p-5">
                <p id={`reel-label-${reel.id}`} className="text-xs font-semibold uppercase tracking-luxe text-champagne">{reel.label}</p>
                <h3 id={`reel-caption-${reel.id}`} className="mt-2 font-serif text-2xl leading-tight text-ivory">{reel.caption}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryTiles() {
  return (
    <section className="bg-ivory px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader id="category-title" eyebrow="Shop by category" title="Find your finishing touch" />
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link to="/shop" key={category.id} className="group relative aspect-[4/5] overflow-hidden bg-linen text-ivory">
              <img alt={category.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" data-strk-img-id={category.imgId} data-strk-img={`[category-copy-${category.id}] [category-name-${category.id}] [category-title]`} data-strk-img-ratio="3x4" data-strk-img-width="900" />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 transition duration-500 group-hover:translate-y-[-8px]">
                <h3 id={`category-name-${category.id}`} className="font-serif text-5xl font-semibold">{category.name}</h3>
                <p id={`category-copy-${category.id}`} className="mt-2 text-sm uppercase tracking-luxe text-ivory/80">{category.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function BrandStory() {
  return (
    <section id="story" className="bg-parchment px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="aspect-[4/5] overflow-hidden bg-linen shadow-soft"><img alt="Velmora warm gold jewelry detail" className="h-full w-full object-cover" data-strk-img-id="brand-story-img-b7e4d1" data-strk-img="[story-copy] [story-title]" data-strk-img-ratio="3x4" data-strk-img-width="1000" /></div>
        <div className="lg:pl-12">
          <p className="text-xs font-semibold uppercase tracking-luxe text-antique">Our Story</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight text-cocoa md:text-7xl">Jewelry that feels personal from the first wear.</h2>
          <p id="story-copy" className="mt-6 max-w-xl text-base leading-8 text-stone">Velmora was created for women who want refined jewelry without the traditional markup. Each piece is designed in warm gold tones, finished with skin-friendly materials, and packaged like a keepsake.</p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border border-cocoa px-7 py-4 text-xs font-bold uppercase tracking-luxe text-cocoa transition hover:bg-cocoa hover:text-ivory">Our Story <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-ivory px-5 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader id="reviews-title" eyebrow="Customer notes" title="Quiet compliments, repeated often" />
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-mist bg-parchment p-7 text-cocoa shadow-soft">
              <Quote className="h-7 w-7 text-antique" />
              <div className="mt-5 flex text-antique">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-5 text-base leading-8 text-cocoa">“{review.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-luxe text-stone">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Newsletter() {
  return (
    <section className="bg-parchment px-5 py-20 lg:px-10">
      <div className="mx-auto max-w-5xl bg-cocoa px-6 py-12 text-center text-ivory shadow-glow md:px-12 md:py-16">
        <p className="text-xs font-semibold uppercase tracking-luxe text-champagne">The private edit</p>
        <h2 className="mt-3 font-serif text-5xl font-semibold leading-tight md:text-7xl">Join for 10% off your first order</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-ivory/75">Receive styling notes, gifting reminders, and early access to new demi-fine drops.</p>
        <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
          <input className="min-h-14 flex-1 border border-champagne/45 bg-ivory px-5 text-cocoa placeholder:text-stone focus:outline-none focus:ring-2 focus:ring-champagne" type="email" placeholder="Email address" aria-label="Email address" />
          <button className="min-h-14 bg-champagne px-7 text-xs font-bold uppercase tracking-luxe text-espresso transition hover:bg-ivory" type="submit">Join</button>
        </form>
      </div>
    </section>
  )
}

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <div ref={containerRef}>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <ReelsRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
