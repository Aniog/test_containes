import { useEffect, useRef } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import SectionHeading from '@/components/common/SectionHeading'
import RatingStars from '@/components/common/RatingStars'
import ProductCard from '@/components/products/ProductCard'
import strkImgConfig from '@/strk-img-config.json'
import {
  categoryTiles,
  journalEntries,
  products,
  testimonials,
  trustBadges,
  ugcMoments,
  valueHighlights,
} from '@/data/storefront'

const HomePage = () => {
  const containerRef = useRef(null)
  const featuredProducts = products.slice(0, 5)

  useEffect(() => {
    let disconnectImages
    const frameId = window.requestAnimationFrame(() => {
      disconnectImages = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof disconnectImages === 'function') {
        disconnectImages()
      }
    }
  }, [])

  return (
    <main ref={containerRef}>
      <section className="relative min-h-screen overflow-hidden bg-velmora-ink px-4 pb-12 pt-32 text-velmora-cream sm:px-6 lg:px-8">
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-hero-bg"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,16,15,0.35),rgba(18,16,15,0.82))]" />
        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-end gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:gap-20">
          <div className="max-w-2xl space-y-8 pb-10 lg:pb-20">
            <p className="eyebrow text-velmora-gold">Velmora Fine Jewelry</p>
            <div className="space-y-6">
              <h1 id="hero-title" className="font-display text-6xl leading-none text-velmora-cream sm:text-7xl lg:text-[6.5rem]">
                Crafted to be Treasured
              </h1>
              <p id="hero-subtitle" className="max-w-xl text-base leading-8 text-velmora-cream/78 sm:text-lg">
                Quietly luminous demi-fine jewelry for self-purchase, thoughtful gifting, and the everyday ritual of getting dressed beautifully.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/shop" className="btn-primary">
                Shop the Collection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/#story" className="btn-secondary border-white/20 text-velmora-cream hover:border-velmora-gold hover:text-velmora-gold">
                Discover our story
              </Link>
            </div>
          </div>

          <div className="relative self-center justify-self-end">
            <div className="absolute inset-6 rounded-[2.5rem] border border-white/10" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-5">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora model portrait"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover"
                data-strk-img-id="velmora-hero-model"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-line bg-white/70 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-eyebrow text-velmora-muted sm:gap-x-8">
          {trustBadges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Bestsellers"
            title="Pieces with a polished following"
            description="Our most-collected silhouettes, chosen for their glow, comfort, and giftable ease."
          />
          <Link to="/shop" className="hidden text-sm font-medium text-velmora-muted transition duration-300 hover:text-velmora-gold md:inline-flex">
            View all
          </Link>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-5">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 2} />
          ))}
        </div>
      </section>

      <section className="bg-white/70 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Seen on you"
            title="An editorial take on everyday wear"
            description="A reel-style strip of Velmora in motion, from low-key layering to after-dark polish."
          />
          <div className="mt-10 flex gap-5 overflow-x-auto pb-4">
            {ugcMoments.map((moment) => {
              const titleId = `${moment.id}-title`
              const captionId = `${moment.id}-caption`

              return (
                <article
                  key={moment.id}
                  className="group relative min-w-[240px] max-w-[240px] overflow-hidden rounded-[2rem] bg-velmora-panel shadow-soft sm:min-w-[280px] sm:max-w-[280px]"
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={moment.title}
                    className="aspect-[9/16] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    data-strk-img-id={`${moment.id}-ugc-image`}
                    data-strk-img={`[${captionId}] [${titleId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="700"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(18,16,15,0),rgba(18,16,15,0.88))] p-5">
                    <p id={titleId} className="font-display text-3xl text-velmora-cream">
                      {moment.title}
                    </p>
                    <p id={captionId} className="mt-2 text-sm leading-7 text-velmora-cream/76">
                      {moment.caption}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="categories" className="section-shell">
        <SectionHeading
          eyebrow="Shop by category"
          title="Choose your signature layer"
          description="From sculpted earrings to soft necklace layers, each category is built for gifting and repeat wear."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categoryTiles.map((tile) => {
            const titleId = `${tile.id}-tile-title`
            const descId = `${tile.id}-tile-desc`

            return (
              <Link
                key={tile.id}
                to="/shop"
                className="group relative overflow-hidden rounded-[2rem] bg-velmora-sand shadow-soft"
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={tile.name}
                  className="aspect-[4/5] w-full object-cover transition duration-700 ease-velvet group-hover:scale-105"
                  data-strk-img-id={`${tile.id}-tile-image`}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,16,15,0.05),rgba(18,16,15,0.76))] p-6">
                  <div className="flex h-full flex-col justify-end rounded-[1.5rem] border border-white/12 p-5 transition duration-500 ease-velvet group-hover:bg-black/10">
                    <p id={titleId} className="font-display text-4xl text-velmora-cream">
                      {tile.name}
                    </p>
                    <p id={descId} className="mt-3 text-sm leading-7 text-velmora-cream/76 opacity-90 transition duration-300 group-hover:text-velmora-cream">
                      {tile.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section id="story" className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-[2.5rem] bg-velmora-sand shadow-soft">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id="brand-story-image"
              data-strk-img="[story-description] [story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
            />
          </div>
          <div className="space-y-8 rounded-[2.5rem] bg-white p-8 shadow-soft sm:p-10 lg:p-14">
            <SectionHeading
              eyebrow="Our story"
              title={<span id="story-title">Designed to glow with you, not overshadow you</span>}
              description={
                <span id="story-description">
                  Velmora was imagined for women who want jewelry that feels polished, wearable, and genuinely special. Each piece is designed to sit beautifully with everyday dressing while still feeling worthy of a keepsake box.
                </span>
              }
            />
            <div className="grid gap-6 sm:grid-cols-3">
              {valueHighlights.map((highlight) => (
                <div key={highlight.id} className="space-y-3 border-t border-velmora-line pt-5">
                  <h3 className="font-display text-3xl text-velmora-ink">{highlight.title}</h3>
                  <p className="text-sm leading-7 text-velmora-muted">{highlight.description}</p>
                </div>
              ))}
            </div>
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-medium text-velmora-ink transition duration-300 hover:text-velmora-gold">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-velmora-ink px-4 py-20 text-velmora-cream sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="Words from the Velmora circle"
            description="Collected feedback from women who wear their pieces on repeat."
            inverted
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.id} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <RatingStars rating={5} inverted />
                <p className="mt-6 font-display text-3xl leading-tight text-velmora-cream">“{testimonial.quote}”</p>
                <p className="mt-6 text-sm uppercase tracking-eyebrow text-velmora-gold">{testimonial.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="section-shell">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Journal"
            title="A refined note on styling, gifting, and care"
            description="A soft editorial layer that deepens the world of Velmora beyond the product page."
          />
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {journalEntries.map((entry) => {
            const titleId = `${entry.id}-title`
            const excerptId = `${entry.id}-excerpt`

            return (
              <article key={entry.id} className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={entry.title}
                  className="aspect-[4/3] w-full object-cover"
                  data-strk-img-id={`${entry.id}-image`}
                  data-strk-img={`[${excerptId}] [${titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                />
                <div className="space-y-4 p-6">
                  <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">{entry.category}</p>
                  <h3 id={titleId} className="font-display text-3xl text-velmora-ink">
                    {entry.title}
                  </h3>
                  <p id={excerptId} className="text-sm leading-7 text-velmora-muted">
                    {entry.excerpt}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-velmora-gold px-6 py-10 text-velmora-ink shadow-soft sm:px-10 lg:px-14 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="eyebrow text-velmora-ink/70">Join the list</p>
              <h2 className="font-display text-5xl leading-none sm:text-6xl">Join for 10% off your first order</h2>
              <p className="max-w-xl text-sm leading-7 text-velmora-ink/76 sm:text-base">
                Receive first access to new drops, soft styling notes, and gifting edits curated for your jewelry drawer.
              </p>
            </div>
            <form className="flex flex-col gap-4 sm:flex-row lg:justify-end" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <div className="relative flex-1 lg:max-w-md">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-ink/55" />
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  className="h-14 w-full rounded-full border border-velmora-ink/10 bg-white pl-11 pr-4 text-sm text-velmora-ink outline-none transition duration-300 placeholder:text-velmora-ink/45 focus:border-velmora-ink/30"
                />
              </div>
              <button type="submit" className="btn-dark justify-center">
                Join now
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
