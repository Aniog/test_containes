import React from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductGrid from '@/components/shop/ProductGrid'
import RatingStars from '@/components/layout/RatingStars'
import { categories, journalEntries, products, testimonials, trustPoints, ugcMoments } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

export default function HomePage() {
  const imageRef = React.useRef(null)
  const bestsellers = products.slice(0, 5)
  const heroSpotlight = products[2]

  React.useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, imageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <div ref={imageRef} className="bg-noir text-cream">
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 opacity-60"
          data-strk-bg-id="velmora-hero-bg-portrait-7c4d91"
          data-strk-bg="[hero-background-brief]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,12,10,0.9)_15%,rgba(17,12,10,0.35)_55%,rgba(17,12,10,0.65)_100%)]" />
        <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-end px-5 pb-14 pt-12 md:px-8 md:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:pb-24">
          <div className="max-w-2xl py-16 md:py-20">
            <p className="mb-4 text-xs uppercase tracking-[0.34em] text-gold">Velmora Fine Jewelry</p>
            <h1 id="hero-title" className="max-w-xl font-display text-5xl leading-none text-cream sm:text-6xl lg:text-7xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-lg text-base leading-8 text-cream/78 md:text-lg">
              Quietly luxurious demi-fine gold jewelry for gifting, self-purchase, and every luminous moment in between.
            </p>
            <p id="hero-background-brief" className="hidden" aria-hidden="true">
              Warm editorial portrait of a woman wearing delicate gold necklace layers and polished gold earrings in a softly lit neutral studio, quiet luxury fashion campaign, no props.
            </p>
            <p id="hero-image-brief" className="hidden" aria-hidden="true">
              Close-up fashion portrait of a woman wearing elegant demi-fine gold jewelry only, clean styling, warm skin tones, premium beauty campaign, no gemstone-heavy styling, no product flat lay.
            </p>
            <p id="hero-side-brief" className="hidden" aria-hidden="true">
              Premium beauty portrait of a woman wearing minimal layered gold necklaces and small gold earrings, soft neutral background, luxury editorial, no props, no charms, no skulls, no mixed-metal display.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-xs uppercase tracking-[0.28em] text-noir transition hover:bg-cream"
              >
                Shop the Collection
              </Link>
              <Link
                to="/product/golden-sphere-huggies"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.28em] text-cream transition hover:border-gold hover:text-gold"
              >
                Discover Bestsellers
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex lg:justify-end">
            <div className="w-full max-w-sm rounded-[2rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,12,10,0.08),rgba(17,12,10,0.8))]">
                <div className="aspect-[3/4] bg-[linear-gradient(135deg,rgba(193,166,103,0.25),rgba(39,29,24,0.95))] p-6">
                  <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.34em] text-gold">Editor&apos;s Pick</p>
                      <h2 className="mt-4 font-display text-[1.9rem] uppercase tracking-[0.18em] text-cream">
                        {heroSpotlight.name}
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-cream/75">{heroSpotlight.description}</p>
                    </div>

                    <div className="space-y-5 border-t border-white/10 pt-6">
                      <div className="flex items-center justify-between gap-4">
                        <RatingStars rating={heroSpotlight.rating} reviews={heroSpotlight.reviews} light />
                        <span className="text-xs uppercase tracking-[0.22em] text-cream/80">
                          ${heroSpotlight.price}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 text-gold">
                          <span className="h-1 w-1 rounded-full bg-gold" />
                        </span>
                        <div className="text-xs uppercase tracking-[0.22em] text-cream/75">
                          {heroSpotlight.material}
                        </div>
                      </div>

                      <Link
                        to={`/product/${heroSpotlight.id}`}
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-gold transition hover:text-cream"
                      >
                        View Product <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-noir/95 px-5 py-4 text-center text-[11px] uppercase tracking-[0.28em] text-cream/75 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8">
          {trustPoints.map((point) => (
            <span key={point} className="inline-flex items-center gap-3">
              <span>{point}</span>
              <span className="hidden h-1 w-1 rounded-full bg-gold md:inline-block" />
            </span>
          ))}
        </div>
      </section>

      <section className="bg-ivory px-5 py-16 text-ink md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Curated Edit</p>
              <h2 id="bestsellers-title" className="mt-3 font-display text-4xl text-ink md:text-5xl">
                Bestsellers
              </h2>
            </div>
            <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-ink/65 transition hover:text-gold">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ProductGrid products={bestsellers} context="home-bestseller" sectionTitleId="bestsellers-title" />
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/10 bg-noir px-5 py-16 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Seen on you</p>
              <h2 id="ugc-title" className="mt-3 font-display text-4xl text-cream md:text-5xl">
                The Velmora Reel
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-7 text-cream/65 md:block">
              Everyday styling moments inspired by an editorial social feed.
            </p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ugcMoments.map((moment) => (
              <article key={moment.id} className="group relative min-w-[220px] max-w-[220px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:min-w-[250px] sm:max-w-[250px]">
                <img
                  alt={moment.caption}
                  data-strk-img-id={moment.imageId}
                  data-strk-img={`[${moment.titleId}] [ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(17,12,10,0.88))] p-5 pt-16">
                  <p id={moment.titleId} className="font-display text-2xl leading-tight text-cream">
                    {moment.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 py-16 text-ink md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 md:mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Browse by shape</p>
            <h2 id="categories-title" className="mt-3 font-display text-4xl text-ink md:text-5xl">
              Shop by Category
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.id} to="/shop" className="group relative overflow-hidden rounded-[1.8rem] border border-line bg-stone shadow-[0_16px_40px_rgba(18,13,11,0.08)]">
                <img
                  alt={category.name}
                  data-strk-img-id={category.imageId}
                  data-strk-img={`[${category.descId}] [${category.titleId}] [categories-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,12,10,0.08),rgba(17,12,10,0.8))]" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-cream">
                  <div>
                    <h3 id={category.titleId} className="font-display text-3xl">
                      {category.name}
                    </h3>
                    <p id={category.descId} className="mt-2 max-w-[18rem] text-sm leading-6 text-cream/75 opacity-80 transition group-hover:opacity-100">
                      {category.description}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 shrink-0 text-gold" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="border-y border-white/10 bg-noir px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_22px_60px_rgba(0,0,0,0.25)]">
            <img
              alt="Velmora packaging and jewelry details"
              data-strk-img-id="velmora-story-image-40cd19"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="aspect-[4/3] w-full rounded-[1.6rem] object-cover"
            />
          </div>
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">A considered beginning</p>
            <h2 id="story-title" className="mt-3 font-display text-4xl text-cream md:text-5xl">
              Jewelry designed to live with you.
            </h2>
            <p id="story-copy" className="mt-6 text-base leading-8 text-cream/72 md:text-lg">
              Velmora was created for women who want pieces that feel polished, personal, and easy to wear. We balance sculptural silhouettes with accessible pricing so gifting and self-purchase feel equally special.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold transition hover:text-cream">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 py-16 text-ink md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">From our customers</p>
            <h2 id="reviews-title" className="mt-3 font-display text-4xl text-ink md:text-5xl">
              Loved for the finish. Kept for the feel.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-[1.8rem] border border-line bg-white p-7 shadow-[0_16px_40px_rgba(18,13,11,0.08)]">
                <RatingStars rating={5} reviews={5} />
                <p className="mt-5 text-base leading-8 text-ink/78">“{testimonial.quote}”</p>
                <p className="mt-6 text-xs uppercase tracking-[0.28em] text-gold">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="border-t border-white/10 bg-noir px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Journal</p>
              <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
                Notes on styling, gifting, and care.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-cream/65">
              Short reads for wearing your pieces beautifully and keeping them luminous for longer.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {journalEntries.map((entry) => (
              <article key={entry.id} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-7 shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
                <p className="text-xs uppercase tracking-[0.28em] text-gold">Editorial Note</p>
                <h3 className="mt-4 font-display text-3xl text-cream">{entry.title}</h3>
                <p className="mt-4 text-sm leading-7 text-cream/68">{entry.excerpt}</p>
                <Link to="/shop" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.26em] text-cream/80 transition hover:text-gold">
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-noir px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(193,166,103,0.25),rgba(39,29,24,0.95))] px-6 py-10 text-center shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:px-10 md:py-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Private list</p>
          <h2 className="mt-4 font-display text-4xl text-cream md:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-cream/70">
            Receive new drop alerts, styling notes, and first access to limited gifting edits.
          </p>
          <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="h-14 flex-1 rounded-full border border-white/15 bg-white/95 px-6 text-sm text-ink outline-none transition placeholder:text-ink/40 focus:border-gold"
            />
            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center rounded-full bg-gold px-8 text-xs uppercase tracking-[0.28em] text-noir transition hover:bg-cream"
            >
              Join Now
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
