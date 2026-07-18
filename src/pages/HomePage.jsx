import React from 'react'
import { ArrowRight, Quote, Star } from 'lucide-react'
import EditorialArtwork from '@/components/storefront/EditorialArtwork.jsx'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import { categories, products, ugcCards } from '@/data/products.js'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']
const reviews = [
  { name: 'Mara L.', text: 'The huggies feel weightless but look so polished. I wear them almost every day.' },
  { name: 'Nina R.', text: 'Beautiful packaging and the gold tone looks far more expensive than the price.' },
  { name: 'Elena S.', text: 'Bought the necklace as a gift and came back for earrings for myself.' },
]

export default function HomePage({ onAddToCart }) {
  return (
    <main className="bg-velmora-ivory text-velmora-espresso">
      <section className="relative min-h-screen overflow-hidden bg-velmora-espresso text-velmora-cream">
        <EditorialArtwork variant="hero" label="Velmora" className="absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso/85 via-velmora-espresso/45 to-transparent" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10">
          <div className="max-w-3xl text-velmora-cream">
            <p className="mb-5 text-xs font-bold uppercase tracking-luxe text-velmora-sand">Demi-fine gold jewelry for everyday rituals</p>
            <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.9] text-velmora-cream md:text-8xl lg:text-9xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-cream md:text-lg">
              Warm, luminous gold pieces designed for gifting, self-celebration, and the quiet luxury of daily wear.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="/shop" className="velmora-solid-button inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-luxe transition">
                Shop the Collection <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#bestsellers" className="velmora-outline-button inline-flex items-center justify-center rounded-full border px-8 py-4 text-sm font-bold uppercase tracking-luxe transition">
                View Bestsellers
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-linen bg-velmora-cream text-velmora-espresso">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 text-center lg:grid-cols-4 lg:px-10">
          {trustItems.map((item) => (
            <div key={item} className="py-4 text-[0.68rem] font-bold uppercase tracking-luxe text-velmora-cocoa md:text-xs">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="bestsellers" className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-28">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-velmora-linen pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-espresso md:text-6xl">Loved in gold</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-cocoa">Five signature pieces that bring polish to every day, from sculptural huggies to gift-ready sets.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />
          ))}
        </div>
      </section>

      <section id="journal" className="overflow-hidden bg-velmora-espresso py-16 text-velmora-cream lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-luxe text-velmora-sand">As seen on you</p>
              <h2 id="ugc-title" className="mt-3 font-serif text-5xl text-velmora-cream md:text-6xl">Reels of quiet shine</h2>
            </div>
            <p id="ugc-subtitle" className="hidden max-w-sm text-sm leading-7 text-velmora-ivory/80 md:block">Jewelry moments styled in soft light, silk collars, and the everyday rituals between.</p>
          </div>
          <div className="flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none]">
            {ugcCards.map((card) => (
              <article key={card.id} className="group relative aspect-[9/16] w-64 flex-none snap-start overflow-hidden bg-velmora-cocoa shadow-editorial md:w-72">
                <EditorialArtwork
                  variant={card.id.includes('neck') ? 'neck' : card.id.includes('gift') ? 'gift' : 'ear'}
                  label={card.caption}
                  className="transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/85 via-velmora-espresso/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p id={card.descId} className="sr-only">{card.description}</p>
                  <h3 id={card.titleId} className="font-serif text-3xl leading-none text-velmora-cream">{card.caption}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-28">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Shop by category</p>
          <h2 id="category-section-title" className="mt-3 font-serif text-5xl text-velmora-espresso md:text-6xl">Find your signature glow</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <a key={category.id} href={`/shop?category=${category.id}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-mist text-velmora-cream shadow-soft">
              <EditorialArtwork
                variant={category.id === 'necklaces' ? 'neck' : 'ear'}
                label={category.label}
                className="transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-center transition duration-500 md:translate-y-8 md:group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-5xl text-velmora-cream">{category.label}</h3>
                <p id={category.descId} className="mx-auto mt-3 max-w-xs text-sm leading-6 text-velmora-ivory/90 opacity-100 md:opacity-0 md:transition md:duration-500 md:group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-mist py-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <div className="aspect-[4/5] overflow-hidden bg-velmora-linen shadow-editorial">
            <EditorialArtwork variant="soft" label="Velmora Atelier" />
          </div>
          <div className="text-velmora-espresso lg:pl-12">
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Velmora atelier</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl leading-tight md:text-7xl">Fine jewelry codes, made more attainable.</h2>
            <p id="story-copy" className="mt-7 text-base leading-8 text-velmora-cocoa md:text-lg">
              Velmora creates demi-fine pieces with warm gold finishes, thoughtful proportions, and skin-friendly materials. Each piece is selected to feel meaningful without waiting for a once-in-a-lifetime occasion.
            </p>
            <a href="/#story" className="mt-9 inline-flex items-center gap-3 border-b border-velmora-gold pb-2 text-sm font-bold uppercase tracking-luxe text-velmora-espresso transition hover:text-velmora-gold">
              Our Story <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-velmora-linen bg-velmora-cream p-7 text-velmora-espresso shadow-soft">
              <div className="mb-5 flex text-velmora-gold" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <Quote className="mb-4 h-6 w-6 text-velmora-sand" />
              <p className="text-base leading-7 text-velmora-cocoa">“{review.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-luxe text-velmora-espresso">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-28">
        <div className="overflow-hidden bg-velmora-espresso px-6 py-12 text-center text-velmora-cream shadow-editorial md:px-12 md:py-16">
          <p className="text-xs font-bold uppercase tracking-luxe text-velmora-sand">Velmora notes</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-5xl leading-tight text-velmora-cream md:text-7xl">Join for 10% off your first order</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-velmora-ivory/85">Receive styling edits, launch previews, and a warm welcome offer in your inbox.</p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Email address" aria-label="Email address" className="min-h-14 flex-1 rounded-full border border-velmora-cream/25 bg-velmora-cream px-6 text-sm text-velmora-espresso placeholder:text-velmora-cocoa focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/40" />
            <button type="submit" className="rounded-full bg-velmora-gold px-8 py-4 text-sm font-bold uppercase tracking-luxe text-velmora-cream transition hover:bg-velmora-cream hover:text-velmora-espresso">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
