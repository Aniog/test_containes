import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '@/components/common/SectionHeader'
import ProductCard from '@/components/products/ProductCard'
import { categories, journalHighlights, products, testimonials, trustItems, ugcMoments } from '@/data/products'
import { useStockImages } from '@/hooks/use-stock-images'

const HomePage = () => {
  const containerRef = useStockImages([])
  const bestsellers = products.filter((product) => product.bestseller).slice(0, 5)

  return (
    <div ref={containerRef} className="bg-velmora-cream text-velmora-ink">
      <section className="relative min-h-[100svh] overflow-hidden bg-velmora-panel pt-24 text-velmora-cream">
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-hero-bg-2d7c43"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,27,24,0.35),rgba(34,27,24,0.84))]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-4 pb-16 pt-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-velmora-gold">
              Velmora Fine Jewelry
            </p>
            <h1 id="hero-title" className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-cream/82 sm:text-lg">
              Quietly luminous demi-fine gold jewelry designed for self-purchase, meaningful gifting, and the moments you want to keep close.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-velmora-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-velmora-panel transition duration-300 hover:brightness-95"
              >
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/product/royal-heirloom-set"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-4 text-sm font-medium uppercase tracking-[0.24em] text-velmora-cream transition duration-300 hover:bg-white/10"
              >
                Explore Gift Sets
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-line bg-velmora-blush/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-4 text-center text-xs font-medium uppercase tracking-[0.28em] text-velmora-ink sm:px-6 lg:px-8">
          {trustItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Bestsellers"
            title="The pieces our customers come back for"
            description="A curated edit of warm gold silhouettes, crystal details, and gift-ready sets designed to feel elevated from first wear."
          />
          <Link to="/shop" className="text-sm font-medium uppercase tracking-[0.24em] text-velmora-ink underline decoration-velmora-gold underline-offset-8">
            View all products
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="border-y border-velmora-line bg-velmora-soft/80 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Seen on you"
            title="A reel of everyday glow"
            description="An editorial take on the social strip: warm vertical moments, soft styling, and real-life wearability."
          />
          <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4">
            {ugcMoments.map((moment) => {
              const titleId = `ugc-${moment.id}-title`
              const captionId = `ugc-${moment.id}-caption`

              return (
                <article
                  key={moment.id}
                  className="group relative min-w-[250px] snap-start overflow-hidden rounded-[2rem] bg-velmora-panel text-velmora-cream shadow-card sm:min-w-[280px]"
                >
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <img
                      alt={moment.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      data-strk-img-id={moment.imageId}
                      data-strk-img={`[${captionId}] [${titleId}]`}
                      data-strk-img-ratio="9x16"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,27,24,0.08),rgba(34,27,24,0.82))]" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 id={titleId} className="font-display text-3xl leading-none">
                        {moment.title}
                      </h3>
                      <p id={captionId} className="mt-3 text-sm uppercase tracking-[0.24em] text-velmora-cream/80">
                        {moment.caption}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Shop by category"
          title="Jewelry that fits the moment"
          description="From ear stacks to collarbone layers, discover the silhouettes designed to anchor your look."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`

            return (
              <Link
                key={category.id}
                to="/shop"
                className="group relative overflow-hidden rounded-[2rem] bg-velmora-panel text-velmora-cream shadow-card"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    data-strk-img-id={category.imageId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,27,24,0.15),rgba(34,27,24,0.75))]" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-velmora-gold">Category</p>
                    <h3 id={titleId} className="mt-3 font-display text-4xl text-velmora-cream transition group-hover:translate-x-1">
                      {category.name}
                    </h3>
                    <p id={descId} className="mt-3 max-w-sm text-sm leading-7 text-velmora-cream/78">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section id="story" className="border-y border-velmora-line bg-velmora-blush/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="overflow-hidden rounded-[2.25rem] shadow-luxury">
            <img
              alt="Velmora story"
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id="velmora-story-image-92ad73"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="flex items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-velmora-gold">Brand Story</p>
              <h2 id="story-title" className="mt-4 font-display text-5xl leading-none text-velmora-ink">
                Jewelry that feels intimate, not overdone
              </h2>
              <p id="story-copy" className="mt-6 max-w-xl text-base leading-8 text-velmora-muted sm:text-lg">
                Velmora was imagined for the woman who wants polish without noise. Each piece is designed to sit easily in your wardrobe, elevate your everyday rituals, and arrive beautifully enough to gift on a whim.
              </p>
              <Link
                to="/shop"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.24em] text-velmora-ink underline decoration-velmora-gold underline-offset-8"
              >
                Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="Loved for the finish, kept for the feeling"
          description="Short notes from customers who wear Velmora for gifting, layering, and every quietly special day in between."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-[2rem] border border-velmora-line bg-white/70 p-7 shadow-card">
              <div className="flex gap-1 text-velmora-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-velmora-muted">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-ink">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-velmora-panel px-6 py-14 text-velmora-cream shadow-luxury sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-velmora-gold">Newsletter</p>
              <h2 className="mt-4 font-display text-5xl leading-none">Join for 10% off your first order</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-velmora-cream/78">
                Subscribe for new drops, early gifting edits, and styling notes from the Velmora journal.
              </p>
            </div>
            <form className="grid gap-4 sm:grid-cols-[1fr_auto]">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="h-14 rounded-full border border-white/15 bg-white/8 px-6 text-base text-velmora-cream placeholder:text-velmora-cream/45 focus:border-velmora-gold focus:outline-none"
              />
              <button
                type="submit"
                className="h-14 rounded-full bg-velmora-gold px-8 text-sm font-semibold uppercase tracking-[0.24em] text-velmora-panel transition hover:brightness-95"
              >
                Join now
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="journal" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {journalHighlights.map((entry) => (
            <article key={entry.id} className="rounded-[2rem] border border-velmora-line bg-white/70 p-7 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-gold">Journal</p>
              <h3 className="mt-4 font-display text-4xl leading-none text-velmora-ink">{entry.title}</h3>
              <p className="mt-4 text-base leading-8 text-velmora-muted">{entry.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
