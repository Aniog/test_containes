import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard'
import {
  categoryTiles,
  journalPosts,
  products,
  testimonials,
  trustPoints,
  ugcStories,
} from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

const HomePage = () => {
  const containerRef = useRef(null)

  useStrkImages(containerRef, [])

  return (
    <div ref={containerRef} className="bg-canvas text-ink">
      <section className="relative isolate overflow-hidden bg-surface-alt text-surface">
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-hero-bg-a18d3c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-hero-fade" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-4 pb-14 pt-28 sm:px-6 md:pb-20 lg:px-10">
          <div className="max-w-2xl space-y-7">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent-soft">
              Fine jewelry for everyday rituals
            </p>
            <div className="space-y-5">
              <h1 id="hero-title" className="max-w-xl font-serif text-5xl leading-none text-surface sm:text-6xl lg:text-7xl">
                Crafted to be Treasured
              </h1>
              <p id="hero-subtitle" className="max-w-lg text-base leading-8 text-surface/82 sm:text-lg">
                Warm gold tones, heirloom-inspired silhouettes, and quietly luxurious pieces designed for gifting and self-keeping.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-surface transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-alt hover:shadow-soft"
              >
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/#story"
                className="inline-flex items-center justify-center rounded-full border border-surface/25 bg-surface/10 px-7 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-surface transition-all duration-300 hover:bg-surface/18"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-4 text-center sm:px-6 md:grid-cols-4 lg:px-10">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-muted"
            >
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Most loved
            </p>
            <h2 className="font-serif text-4xl text-ink sm:text-5xl">Bestsellers</h2>
            <p className="max-w-2xl text-sm leading-7 text-ink-muted">
              The pieces our customers wear on repeat, gift with confidence, and return to whenever they want a polished finish.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition-colors duration-300 hover:text-accent"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Velmora on you
              </p>
              <h2 className="font-serif text-4xl text-ink sm:text-5xl">A reel-style glimpse</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-7 text-ink-muted md:block">
              Inspired by the intimacy of a saved reel: warm light, layered metals, and jewelry worn in motion.
            </p>
          </div>

          <div className="velmora-scrollbar flex gap-5 overflow-x-auto pb-3">
            {ugcStories.map((story) => {
              const titleId = `ugc-${story.id}-title`
              const captionId = `ugc-${story.id}-caption`

              return (
                <article
                  key={story.id}
                  className="group relative min-w-[220px] max-w-[220px] overflow-hidden rounded-[2rem] border border-line bg-surface-alt text-surface shadow-card"
                >
                  <img
                    alt={story.title}
                    data-strk-img-id={`ugc-${story.id}-image-c8d2f1`}
                    data-strk-img={`[${captionId}] [${titleId}] [hero-title]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-[390px] w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface-alt via-surface-alt/70 to-transparent p-5">
                    <p id={titleId} className="font-serif text-2xl text-surface">
                      {story.title}
                    </p>
                    <p id={captionId} className="mt-2 text-sm leading-6 text-surface/82">
                      {story.caption}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mb-10 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Shop by category
          </p>
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">Find your signature piece</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {categoryTiles.map((tile) => {
            const titleId = `category-${tile.id}-title`
            const captionId = `category-${tile.id}-caption`

            return (
              <Link
                key={tile.id}
                to={`/shop?category=${tile.label}`}
                className="group relative block overflow-hidden rounded-[2rem] border border-line bg-surface-alt text-surface shadow-card"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-luxe group-hover:scale-105"
                  data-strk-bg-id={`category-${tile.id}-bg-b7f94d`}
                  data-strk-bg={`[${captionId}] [${titleId}] [hero-title]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="900"
                />
                <div className="relative flex min-h-[420px] items-end bg-gradient-to-t from-surface-alt via-surface-alt/35 to-transparent p-7">
                  <div className="space-y-3">
                    <p id={titleId} className="font-serif text-4xl text-surface">
                      {tile.label}
                    </p>
                    <p id={captionId} className="max-w-xs text-sm leading-7 text-surface/78">
                      {tile.caption}
                    </p>
                    <span className="inline-flex translate-y-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent-soft opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      Explore category
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section id="story" className="bg-surface py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-line bg-accent-soft/30 shadow-card">
            <img
              alt="Velmora brand story"
              data-strk-img-id="story-image-7fe3a2"
              data-strk-img="[story-copy] [story-title] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full min-h-[460px] w-full object-cover"
            />
          </div>
          <div className="flex items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                The house of Velmora
              </p>
              <h2 id="story-title" className="font-serif text-4xl text-ink sm:text-5xl">
                Designed with the softness of heirlooms and the ease of everyday wear.
              </h2>
              <p id="story-copy" className="max-w-xl text-base leading-8 text-ink-muted">
                Velmora Fine Jewelry was imagined for women who want elegance without ceremony. Our pieces balance rich golden warmth, thoughtful comfort, and gifting-worthy presentation so every order feels special from the first glance.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition-colors duration-300 hover:text-accent"
              >
                Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Customer notes
          </p>
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">Loved for the details</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[2rem] border border-line bg-surface px-6 py-8 text-ink shadow-card"
            >
              <div className="mb-5 flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Sparkles key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-base leading-8 text-ink">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-ink-muted">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="journal" className="border-y border-line bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                From the journal
              </p>
              <h2 className="font-serif text-4xl text-ink sm:text-5xl">Editorial notes and gifting guides</h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition-colors duration-300 hover:text-accent"
            >
              Visit shop
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {journalPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-[2rem] border border-line bg-canvas px-6 py-7 text-ink shadow-card"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  {post.category}
                </p>
                <h3 className="mt-4 font-serif text-3xl text-ink">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-muted">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="rounded-[2.5rem] bg-accent px-6 py-10 text-surface shadow-soft sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-surface/72">
              Insider access
            </p>
            <h2 className="font-serif text-4xl text-surface sm:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="text-base leading-8 text-surface/82">
              Be first to know about limited drops, gifting edits, and new-season styles in warm gold tones.
            </p>
          </div>
          <form className="mt-8 flex w-full max-w-xl flex-col gap-4 lg:mt-0 lg:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="relative flex-1">
              <Mail className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-surface/65" />
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="w-full rounded-full border border-surface/25 bg-surface/12 py-4 pl-12 pr-5 text-sm text-surface placeholder:text-surface/60 focus:outline-none focus:ring-2 focus:ring-surface/35"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-surface px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-alt hover:text-surface"
            >
              Join now
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default HomePage
