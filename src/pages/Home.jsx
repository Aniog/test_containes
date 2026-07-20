import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, Star } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/shop/ProductCard'
import { products, ugcMoments } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'
import { getStrkImageUrl } from '@/lib/images'

const categoryTiles = [
  {
    name: 'Earrings',
    titleId: 'category-earrings-title',
    descId: 'category-earrings-desc',
    imgId: 'category-earrings-img-91ab22',
    description: 'Gold studs, cuffs, and sculptural drops for everyday polish.',
  },
  {
    name: 'Necklaces',
    titleId: 'category-necklaces-title',
    descId: 'category-necklaces-desc',
    imgId: 'category-necklaces-img-b12f07',
    description: 'Delicate chains and crystal pendants made to layer softly.',
  },
  {
    name: 'Huggies',
    titleId: 'category-huggies-title',
    descId: 'category-huggies-desc',
    imgId: 'category-huggies-img-447fc9',
    description: 'Compact hoops with warm shine and secure day-to-night wear.',
  },
]

const reviews = [
  { name: 'Maya R.', text: 'The huggies feel expensive without being precious. I have worn them every day this month.' },
  { name: 'Claire B.', text: 'Beautiful packaging and such a soft gold tone. It was the perfect birthday gift.' },
  { name: 'Nina K.', text: 'Quiet, polished, and easy to layer. The necklace catches the light so beautifully.' },
]

export default function Home({ onAdd }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef} className="bg-velmora-ivory text-velmora-espresso">
      <section className="velmora-hero relative min-h-[92vh] overflow-hidden bg-velmora-onyx text-velmora-ivory" style={{ backgroundColor: '#0F0B08', color: '#F7F1E8' }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-75"
          data-strk-bg-id="velmora-hero-bg-830f2c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(15, 11, 8, 0.92), rgba(15, 11, 8, 0.66) 45%, rgba(15, 11, 8, 0.34)), linear-gradient(180deg, rgba(15, 11, 8, 0.3), rgba(15, 11, 8, 0.86))' }} />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-20 pt-32 md:px-8 md:pb-28">
          <div className="velmora-hero-copy max-w-3xl animate-fade-up rounded-[2rem] border border-white/15 bg-black/45 p-7 backdrop-blur-[2px] md:p-10" style={{ color: '#F7F1E8', backgroundColor: 'rgba(15, 11, 8, 0.6)', textShadow: '0 2px 28px rgba(0, 0, 0, 0.88)' }}>
            <p className="velmora-hero-kicker mb-5 text-xs font-bold uppercase tracking-[0.34em]" style={{ color: '#F6D99D' }}>Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="velmora-hero-title font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl lg:text-9xl" style={{ color: '#FFF8EC' }}>Crafted to be Treasured</h1>
            <p id="hero-subtitle" className="velmora-hero-subtitle mt-6 max-w-xl text-base leading-8 md:text-lg" style={{ color: 'rgba(255, 248, 236, 0.96)' }}>Warm-lit essentials in 18K gold plate, designed for gifting, self-celebration, and the quiet luxury of every day.</p>
            <Link to="/shop" className="velmora-hero-cta mt-9 inline-flex items-center gap-3 rounded-full px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] shadow-velvet transition" style={{ backgroundColor: '#E7CFA7', color: '#0F0B08' }}>
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-espresso/10 bg-velmora-porcelain">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-4 text-center text-[0.68rem] font-bold uppercase tracking-[0.22em] text-velmora-walnut md:grid-cols-4 md:px-8">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => <span key={item} className="py-2">{item}</span>)}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-velmora-espresso/10 pb-7 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">Most loved</p>
            <h2 id="bestsellers-title" className="mt-3 font-serif text-5xl leading-none text-velmora-espresso md:text-6xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-gold">View all pieces <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} context="home" />)}
        </div>
      </section>

      <section className="overflow-hidden bg-velmora-onyx py-20 text-velmora-ivory md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-8 max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-champagne">Seen in soft light</p>
            <h2 id="ugc-section-title" className="mt-3 font-serif text-5xl leading-none text-velmora-ivory md:text-6xl">Velmora in Motion</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-5 [scrollbar-width:thin]">
            {ugcMoments.map((moment) => (
              <article key={moment.id} className="group relative aspect-[9/16] w-56 shrink-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-velmora-walnut shadow-editorial md:w-72">
                <img
                  alt={moment.caption}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={moment.imgId}
                  data-strk-img={`[${moment.titleId}] [ugc-section-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="600"
                  src={getStrkImageUrl(moment.imgId)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-onyx/80 via-transparent to-transparent" />
                <p id={moment.titleId} className="absolute inset-x-5 bottom-5 font-serif text-2xl leading-tight text-velmora-ivory">{moment.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">Find your signature</p>
          <h2 id="category-section-title" className="mt-3 font-serif text-5xl text-velmora-espresso md:text-6xl">Shop by Category</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categoryTiles.map((tile) => (
            <Link key={tile.name} to={`/shop?category=${tile.name}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-onyx text-velmora-ivory shadow-editorial">
              <img
                alt={tile.name}
                className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                data-strk-img-id={tile.imgId}
                data-strk-img={`[${tile.descId}] [${tile.titleId}] [category-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={getStrkImageUrl(tile.imgId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-onyx/80 via-transparent to-transparent" />
              <div className="absolute inset-x-6 bottom-6 translate-y-5 transition duration-500 group-hover:translate-y-0">
                <h3 id={tile.titleId} className="font-serif text-4xl text-velmora-ivory">{tile.name}</h3>
                <p id={tile.descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-ivory/0 transition duration-500 group-hover:text-velmora-ivory/85">{tile.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-porcelain py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center md:px-8">
          <div className="aspect-[4/5] overflow-hidden bg-velmora-champagne/40 shadow-editorial">
            <img
              alt="Velmora atelier details"
              className="h-full w-full object-cover"
              data-strk-img-id="story-atelier-img-0d63ab"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src={getStrkImageUrl('story-atelier-img-0d63ab')}
            />
          </div>
          <div className="mx-auto max-w-xl space-y-7 text-velmora-espresso">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">The Velmora point of view</p>
            <h2 id="story-title" className="font-serif text-5xl leading-tight md:text-7xl">Fine feeling, made approachable.</h2>
            <p id="story-copy" className="text-base leading-8 text-velmora-walnut">Velmora Fine Jewelry creates warm, demi-fine pieces that feel personal from the first wear. Each design is balanced for everyday comfort, gift-ready presentation, and a polished gold glow that never feels overdone.</p>
            <a href="/#" className="inline-flex items-center gap-3 border-b border-velmora-gold pb-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-gold">Our Story <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="border border-velmora-espresso/10 bg-velmora-porcelain p-7 text-velmora-espresso shadow-sm">
              <div className="mb-5 flex text-velmora-gold" aria-label="5 stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="font-serif text-2xl leading-8">“{review.text}”</blockquote>
              <figcaption className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-walnut">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="journal" className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-5xl bg-velmora-espresso px-6 py-12 text-center text-velmora-ivory shadow-velvet md:px-16 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-champagne">Velmora private list</p>
          <h2 className="mt-3 font-serif text-5xl leading-tight md:text-6xl">Join for 10% off your first order</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-velmora-ivory/75">Receive new arrivals, styling notes, and early gifting edits.</p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <input type="email" required placeholder="Email address" className="min-h-14 flex-1 rounded-full border border-white/15 bg-velmora-porcelain px-6 text-sm text-velmora-espresso placeholder:text-velmora-truffle focus:border-velmora-gold focus:outline-none" />
            <button type="submit" className="rounded-full bg-velmora-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-onyx transition hover:bg-velmora-champagne">Join</button>
          </form>
        </div>
      </section>
    </main>
  )
}
