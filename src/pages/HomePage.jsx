import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '@/components/storefront/ProductCard.jsx'
import { EditorialImage } from '@/components/storefront/EditorialImage.jsx'
import { GhostLink, SectionHeading } from '@/components/storefront/storefront-utils.jsx'
import { Stars } from '@/components/storefront/Stars.jsx'
import { categoryTiles, journalEntries, products, testimonials, ugcMoments } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export function HomePage() {
  const pageRef = useRef(null)

  useStrkImages(pageRef, [])

  return (
    <main ref={pageRef} className="bg-stone-50 text-stone-900">
      <section className="relative isolate min-h-screen overflow-hidden bg-stone-950 text-stone-50">
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-hero-bg-h2m6q8"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/65 to-stone-950/20" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-20 pt-40 sm:px-6 md:items-center lg:px-10 xl:px-16">
          <div className="max-w-2xl space-y-8">
            <p className="text-[0.72rem] uppercase tracking-[0.38em] text-stone-200">Velmora Fine Jewelry</p>
            <div className="space-y-6">
              <h1 id="hero-title" className="font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
                Crafted to be Treasured
              </h1>
              <p id="hero-subtitle" className="max-w-xl text-base leading-8 text-stone-200 sm:text-lg">
                Quietly luminous demi-fine jewelry for everyday dressing, thoughtful gifting, and the moments you want to remember beautifully.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 rounded-full bg-amber-700 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.32em] text-white transition hover:bg-amber-800"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 text-center text-[0.68rem] uppercase tracking-[0.34em] text-stone-600 sm:px-6 lg:px-10 xl:px-16">
          {trustItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-10 xl:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Bestsellers"
            title="An edit of Velmora signatures"
            description="Best-loved pieces selected for gifting, layering, and effortless daily wear — always polished, never overstated."
          />
          <GhostLink to="/shop">View all pieces</GhostLink>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-100/80 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 xl:px-16">
          <SectionHeading
            eyebrow="Worn in the wild"
            title="A reel of luminous moments"
            description="Softly styled, warmly lit, and made to be lived in — a glimpse of Velmora beyond the studio."
          />
          <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-2">
            {ugcMoments.map((moment) => {
              const titleId = `ugc-${moment.id}-title`
              const descId = `ugc-${moment.id}-desc`
              return (
                <article
                  key={moment.id}
                  className="group relative min-w-[230px] snap-start overflow-hidden rounded-[2rem] bg-stone-950 shadow-lg sm:min-w-[280px]"
                >
                  <EditorialImage
                    alt={moment.title}
                    imageId={moment.imageId}
                    query={`[${descId}] [${titleId}]`}
                    ratio="9x16"
                    width="600"
                    className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-stone-50">
                    <p id={titleId} className="font-serif text-2xl leading-none">{moment.title}</p>
                    <p id={descId} className="mt-3 text-sm leading-6 text-stone-200">{moment.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-10 xl:px-16">
        <div className="flex items-center justify-between gap-4">
          <SectionHeading eyebrow="Categories" title="Shop by category" />
          <GhostLink to="/shop">Browse all</GhostLink>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {categoryTiles.map((tile) => {
            const titleId = `category-${tile.id}-title`
            const descId = `category-${tile.id}-desc`
            return (
              <Link
                key={tile.id}
                to={`/shop?category=${tile.name}`}
                className="group relative block overflow-hidden rounded-[2rem] bg-stone-950"
              >
                <EditorialImage
                  alt={tile.name}
                  imageId={tile.imageId}
                  query={`[${descId}] [${titleId}]`}
                  ratio="4x5"
                  width="700"
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-stone-50">
                  <div>
                    <h3 id={titleId} className="font-serif text-3xl">{tile.name}</h3>
                    <p id={descId} className="mt-2 max-w-xs text-sm leading-6 text-stone-200 opacity-0 transition duration-300 group-hover:opacity-100">
                      {tile.description}
                    </p>
                  </div>
                  <span className="translate-y-2 text-xs uppercase tracking-[0.28em] text-stone-200 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Explore
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section id="story" className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr,0.9fr] lg:px-10 xl:px-16">
          <div className="overflow-hidden rounded-[2rem] bg-stone-100 shadow-sm">
            <EditorialImage
              alt="Velmora story"
              imageId="velmora-story-a7d3k9"
              query="[story-copy] [story-title]"
              ratio="4x5"
              width="1000"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="flex items-center">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Our story"
                title="Jewelry that feels intimate, modern, and enduring"
                description="Velmora was imagined for women who want their everyday pieces to feel considered. Our collections balance rich finishes, clean forms, and gift-ready detail — designed to be worn often and loved for longer."
              />
              <p id="story-title" className="sr-only">Velmora brand story</p>
              <p id="story-copy" className="text-sm leading-7 text-stone-600">
                From softly sculpted huggies to luminous crystal accents, every design is made to layer effortlessly and arrive beautifully boxed.
              </p>
              <GhostLink to="/shop">Our Story</GhostLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-10 xl:px-16">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved for the little details"
          description="Premium feel, thoughtful packaging, and an easy balance between everyday wear and occasion gifting."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
              <Stars />
              <p className="mt-5 text-base leading-8 text-stone-700">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-[0.28em] text-stone-500">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-900 py-16 text-stone-50 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 xl:px-16">
          <div className="grid gap-8 rounded-[2rem] border border-stone-700/60 bg-stone-900 p-8 shadow-xl lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:p-10">
            <div className="space-y-5">
              <p className="text-[0.72rem] uppercase tracking-[0.35em] text-stone-300">Private access</p>
              <h2 className="font-serif text-4xl leading-none sm:text-5xl">Join for 10% off your first order</h2>
              <p className="max-w-xl text-sm leading-7 text-stone-300 sm:text-base">
                Receive early access to new drops, gifting edits, and Velmora journal notes curated for elevated everyday styling.
              </p>
            </div>
            <form className="grid gap-3 sm:grid-cols-[1fr,auto]">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="h-14 rounded-full border border-stone-700 bg-stone-800 px-6 text-sm text-stone-50 placeholder:text-stone-400 focus:border-amber-700 focus:outline-none"
              />
              <button
                type="submit"
                className="h-14 rounded-full bg-amber-700 px-7 text-xs font-medium uppercase tracking-[0.28em] text-white transition hover:bg-amber-800"
              >
                Join now
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="journal" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 xl:px-16">
        <div className="flex items-center justify-between gap-4">
          <SectionHeading eyebrow="Journal" title="Editorial notes from Velmora" />
          <GhostLink to="/shop">View edit</GhostLink>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {journalEntries.map((entry) => (
            <article key={entry.id} className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-amber-700">Journal</p>
              <h3 className="mt-4 font-serif text-3xl text-stone-950">{entry.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-stone-600">{entry.subtitle}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
