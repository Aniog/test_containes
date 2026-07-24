import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, Quote, Star } from 'lucide-react'
import { getStrikinglyImageUrl } from '@/components/ImageLoadScope'
import ProductCard from '@/components/products/ProductCard'
import { categories, products, ugcCards } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const testimonials = [
  {
    quote: 'The huggies feel substantial without being heavy. They look far more expensive than they are.',
    name: 'Maya R.',
  },
  {
    quote: 'Bought the necklace as a gift and kept thinking about ordering one for myself. Beautiful packaging.',
    name: 'Elena W.',
  },
  {
    quote: 'Quiet, polished, and easy to wear every day. Velmora has become my go-to for gold pieces.',
    name: 'Priya S.',
  },
]

export default function Home({ onAddToCart }) {
  const pageRef = useRef(null)

  useEffect(() => {
    let cleanup = null
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <main ref={pageRef} className="bg-velmora-ivory text-velmora-espresso">
      <section className="relative min-h-screen overflow-hidden bg-velmora-espresso text-velmora-ivory">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center opacity-70"
          data-strk-bg-id="home-hero-bg-r84g2h"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/45 via-velmora-espresso/30 to-velmora-espresso/82" />
        <div className="relative mx-auto flex min-h-screen max-w-[1500px] items-end px-5 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-28">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-5 text-xs font-semibold uppercase tracking-cta text-velmora-champagne">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serif text-6xl leading-[0.92] tracking-tight text-velmora-ivory sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-linen sm:text-lg">
              Warm gold pieces made for everyday rituals, thoughtful gifting, and the rare quiet moment that belongs only to you.
            </p>
            <Link
              to="/shop"
              className="mt-9 inline-flex items-center gap-3 bg-velmora-champagne px-7 py-4 text-xs font-bold uppercase tracking-cta text-velmora-espresso transition duration-300 hover:bg-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2 focus:ring-offset-velmora-espresso"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-linen bg-velmora-porcelain/75" aria-label="Store promises">
        <div className="mx-auto flex max-w-[1500px] snap-x gap-8 overflow-x-auto px-5 py-4 text-xs font-semibold uppercase tracking-cta text-velmora-espresso sm:justify-center sm:px-8 lg:px-10">
          {trustItems.map((item) => (
            <span key={item} className="shrink-0 snap-start whitespace-nowrap before:mr-8 before:text-velmora-champagne before:content-['·'] first:before:hidden">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="bestsellers" className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mb-10 flex flex-col gap-5 border-b border-velmora-linen pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-cta text-velmora-bronze">Most loved</p>
            <h2 id="bestsellers-title" className="mt-2 font-serif text-5xl leading-none text-velmora-espresso md:text-6xl">Bestsellers</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-mist">
            Giftable gold essentials and crystal details designed for premium everyday wear.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} priority={index === 0} />
          ))}
        </div>
      </section>

      <section className="bg-velmora-espresso py-16 text-velmora-ivory lg:py-24">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-cta text-velmora-champagne">Seen in motion</p>
              <h2 className="mt-2 font-serif text-4xl text-velmora-ivory sm:text-5xl">Styled by Velmora women</h2>
            </div>
            <p className="hidden max-w-xs text-sm leading-6 text-velmora-linen sm:block">A reel-style glimpse of warm gold pieces in real light.</p>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-4">
            {ugcCards.map((card) => (
              <article key={card.id} className="relative aspect-[9/16] w-56 shrink-0 snap-start overflow-hidden bg-velmora-ink sm:w-64">
                <img
                  alt={card.caption}
                  className="h-full w-full object-cover opacity-80 transition duration-700 hover:scale-105"
                  data-strk-img-id={card.imageId}
                  data-strk-img={`[${card.titleId}] [hero-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src={getStrikinglyImageUrl(card.imageId)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-transparent to-transparent" />
                <p id={card.titleId} className="absolute inset-x-4 bottom-4 font-serif text-2xl leading-tight text-velmora-ivory">
                  {card.caption}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-cta text-velmora-bronze">Shop by category</p>
          <h2 className="mt-2 font-serif text-5xl text-velmora-espresso">Curated for the way you wear gold</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.slug} to={`/shop?category=${encodeURIComponent(category.name)}`} className="group relative overflow-hidden bg-velmora-espresso text-velmora-ivory">
              <img
                alt={`${category.name} jewelry category`}
                className="aspect-[4/5] w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-55"
                data-strk-img-id={category.imageId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={getStrikinglyImageUrl(category.imageId)}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 id={category.titleId} className="font-serif text-4xl text-velmora-ivory">{category.name}</h3>
                <p id={category.descId} className="mt-2 max-w-xs translate-y-3 text-sm leading-6 text-velmora-linen opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-porcelain py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div className="relative min-h-[420px] overflow-hidden bg-velmora-linen">
            <img
              alt="Velmora gold jewelry studio details"
              className="h-full min-h-[420px] w-full object-cover"
              data-strk-img-id="brand-story-image-s95h4j"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="3x2"
              data-strk-img-width="1100"
              src={getStrikinglyImageUrl('brand-story-image-s95h4j')}
            />
          </div>
          <div className="flex items-center border border-velmora-linen bg-velmora-ivory p-8 sm:p-12 lg:p-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-cta text-velmora-bronze">Brand story</p>
              <h2 id="story-title" className="mt-3 font-serif text-5xl leading-none text-velmora-espresso sm:text-6xl">Quiet pieces. Lasting rituals.</h2>
              <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-mist">
                Velmora was created for women who want jewelry that feels intentional but never untouchable. Each piece is designed with warm finishes, balanced silhouettes, and the kind of detail that becomes part of your everyday language.
              </p>
              <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-champagne pb-2 text-xs font-bold uppercase tracking-cta text-velmora-espresso transition hover:text-velmora-bronze">
                Our Story <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-linen bg-velmora-ivory p-7 text-velmora-espresso shadow-[0_20px_70px_rgba(35,23,19,0.05)]">
              <Quote className="mb-5 h-7 w-7 text-velmora-champagne" aria-hidden="true" />
              <div className="mb-4 flex gap-1" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-velmora-champagne text-velmora-champagne" aria-hidden="true" />
                ))}
              </div>
              <p className="font-serif text-2xl leading-snug text-velmora-espresso">“{review.quote}”</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-cta text-velmora-mist">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="journal" className="mx-5 mb-20 bg-velmora-champagne text-velmora-espresso sm:mx-8 lg:mx-10 lg:mb-28">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-12 text-center sm:px-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-cta">Velmora notes</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Join for 10% off your first order</h2>
            <p className="mt-4 text-sm leading-7 text-velmora-ink">Receive styling notes, early collection access, and thoughtful gifting reminders.</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="min-h-14 flex-1 border border-velmora-espresso/20 bg-velmora-ivory px-4 text-sm text-velmora-espresso placeholder:text-velmora-mist focus:outline-none focus:ring-2 focus:ring-velmora-espresso"
            />
            <button type="submit" className="min-h-14 bg-velmora-espresso px-7 text-xs font-bold uppercase tracking-cta text-velmora-ivory transition hover:bg-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-espresso">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
