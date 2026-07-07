import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import {
  categoryTiles,
  products,
  testimonials,
  trustPoints,
  ugcMoments,
} from './products.js'
import { useImageLoader } from './use-image-loader.js'
import { ProductCard, SectionHeading, StarRating } from './ui.jsx'

export default function HomePage() {
  const containerRef = useRef(null)
  useImageLoader(containerRef)

  return (
    <div ref={containerRef} className="bg-velmora-ivory text-velmora-espresso">
      <section className="relative isolate overflow-hidden bg-velmora-espresso text-velmora-pearl">
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-hero-bg-a79c2d"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1816]/88 via-[#1e1816]/58 to-[#1e1816]/25" />
        <div className="section-shell relative flex min-h-[92vh] items-end py-28 pt-40 sm:pt-44 lg:min-h-screen lg:items-center">
          <div className="max-w-2xl space-y-8">
            <p className="eyebrow text-velmora-mist">Velmora Fine Jewelry</p>
            <div className="space-y-6">
              <h1
                id="hero-title"
                className="font-display text-6xl leading-[0.9] text-velmora-pearl sm:text-7xl lg:text-[6.75rem]"
              >
                Crafted to be Treasured
              </h1>
              <p
                id="hero-subtitle"
                className="max-w-xl text-base leading-8 text-[#f3e7dc] sm:text-lg"
              >
                Warm gold tones, luminous detailing, and gift-worthy finishing for the
                pieces you wear on repeat.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 rounded-full bg-velmora-bronze px-7 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-pearl transition duration-300 hover:bg-velmora-pearl hover:text-velmora-espresso"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-y border-velmora-sand bg-velmora-pearl">
        <div className="section-shell grid gap-4 py-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <p
              key={point}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-velmora-umber"
            >
              {point}
            </p>
          ))}
        </div>
      </div>

      <section className="section-shell py-20 sm:py-24 lg:py-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Bestsellers"
            title="The pieces our customers reach for first"
            description="A considered mix of polished huggies, luminous necklaces, and gift-ready sets designed to feel elevated every day."
          />
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-bronze"
          >
            Shop all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index === 0} />
          ))}
        </div>
      </section>

      <section className="border-y border-velmora-sand bg-velmora-pearl py-20 sm:py-24">
        <div className="section-shell space-y-10">
          <SectionHeading
            eyebrow="Worn in real life"
            title="A polished reel of everyday sparkle"
            description="Inspired by the intimacy of an Instagram reels strip, these warm editorial moments show Velmora styled close and personal."
          />
          <div className="flex gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ugcMoments.map((moment) => (
              <article
                key={moment.id}
                className="group relative min-w-[250px] flex-1 overflow-hidden rounded-[2rem] bg-velmora-espresso sm:min-w-[280px]"
              >
                <div className="aspect-[9/16] overflow-hidden">
                  <img
                    alt={moment.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    data-strk-img-id={moment.imgId}
                    data-strk-img={`[${moment.captionId}] [${moment.titleId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1e1816]/88 via-[#1e1816]/35 to-transparent px-5 pb-6 pt-16 text-velmora-pearl">
                  <h3 id={moment.titleId} className="font-display text-3xl">
                    {moment.title}
                  </h3>
                  <p id={moment.captionId} className="mt-2 text-sm leading-6 text-[#f3e7dc]">
                    {moment.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24 lg:py-28">
        <SectionHeading
          eyebrow="Shop by category"
          title="Curate your own gold ritual"
          description="Browse Velmora by silhouette, whether you are layering necklaces, building an ear stack, or gifting a keepsake set."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.name}`}
              className="group relative overflow-hidden rounded-[2rem] border border-velmora-sand bg-velmora-mist"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  alt={tile.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={tile.imgId}
                  data-strk-img={`[${tile.descId}] [${tile.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1816]/82 via-[#1e1816]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between gap-4 px-6 pb-6 transition duration-500 group-hover:translate-y-0">
                <div>
                  <p id={tile.titleId} className="font-display text-4xl text-velmora-pearl">
                    {tile.name}
                  </p>
                  <p
                    id={tile.descId}
                    className="mt-2 max-w-xs text-sm leading-6 text-[#f3e7dc] opacity-0 transition duration-500 group-hover:opacity-100"
                  >
                    {tile.blurb}
                  </p>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-velmora-pearl transition group-hover:bg-velmora-pearl group-hover:text-velmora-espresso">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="our-story" className="bg-velmora-pearl py-20 sm:py-24 lg:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[2.5rem] bg-velmora-mist shadow-velmora">
            <div className="aspect-[4/5]">
              <img
                alt="Velmora brand story"
                className="h-full w-full object-cover"
                data-strk-img-id="velmora-story-image-c80d1e"
                data-strk-img="[story-body] [story-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="eyebrow">About Velmora</p>
            <h2 id="story-title" className="font-display text-5xl leading-none text-velmora-espresso sm:text-6xl">
              Designed to feel intimate, polished, and enduring.
            </h2>
            <p id="story-body" className="max-w-xl text-base leading-8 text-velmora-umber">
              Velmora creates demi-fine gold jewelry for the quiet moments that still
              deserve beauty — the everyday uniform, the thoughtful gift, the finishing
              touch that turns routine into ritual.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-bronze"
            >
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24 lg:py-28">
        <SectionHeading
          eyebrow="Testimonials"
          title="A few kind words from our community"
          description="Premium-but-accessible pieces that look elevated, wear comfortably, and arrive beautifully packaged."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((review) => (
            <article
              key={review.id}
              className="rounded-[2rem] border border-velmora-sand bg-velmora-pearl p-8 text-velmora-espresso shadow-velmora-soft"
            >
              <StarRating rating={5} />
              <p className="mt-6 font-display text-3xl leading-tight text-velmora-espresso">
                “{review.quote}”
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-velmora-umber">
                {review.author}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-20 sm:pb-24 lg:pb-28">
        <div className="overflow-hidden rounded-[2.5rem] bg-velmora-bronze px-6 py-10 text-velmora-pearl shadow-velmora sm:px-10 lg:px-14 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="eyebrow text-[#f6ede4]">Stay close</p>
              <h2 className="font-display text-5xl leading-none text-velmora-pearl sm:text-6xl">
                Join for 10% off your first order
              </h2>
              <p className="max-w-md text-sm leading-7 text-[#f7efe7]">
                Exclusive early access, gifting edits, and styling inspiration delivered with restraint.
              </p>
            </div>
            <form className="grid gap-4 sm:grid-cols-[1fr_auto]">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-umber" />
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-full border border-white/25 bg-velmora-pearl px-12 py-4 text-sm text-velmora-espresso outline-none transition placeholder:text-velmora-umber focus:border-velmora-espresso"
                />
              </div>
              <button
                type="submit"
                className="rounded-full border border-white/25 bg-velmora-espresso px-7 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-pearl transition hover:bg-velmora-pearl hover:text-velmora-espresso"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
