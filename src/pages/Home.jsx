import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import ProductCard from '@/components/store/ProductCard'
import SectionHeader from '@/components/store/SectionHeader'
import {
  categoryTiles,
  products,
  testimonials,
  trustPoints,
  ugcMoments,
} from '@/data/storeData'
import { useImageLoader } from '@/hooks/useImageLoader'

const Home = () => {
  const containerRef = useImageLoader([])
  const bestsellers = products

  return (
    <div ref={containerRef} className="bg-velmora-bg text-velmora-ivory">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-hero-bg-b42f"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,10,8,0.78),rgba(20,16,13,0.38),rgba(20,16,13,0.15))]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-velmora-gold">
              Velmora Fine Jewelry
            </p>
            <h1
              id="hero-title"
              className="mt-6 font-display text-6xl leading-[0.9] text-velmora-ivory sm:text-7xl lg:text-[6.5rem]"
            >
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 max-w-lg text-base leading-8 text-velmora-taupe sm:text-lg"
            >
              Quietly luxurious demi-fine gold jewelry for your everyday stack, meaningful gifting, and the pieces you reach for again and again.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-velmora-gold px-7 py-4 text-xs uppercase tracking-[0.35em] text-velmora-ink transition hover:bg-velmora-goldDeep"
              >
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/product/royal-heirloom-set"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-xs uppercase tracking-[0.35em] text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold"
              >
                Discover the Gift Set
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-velmora-line bg-velmora-surface/80 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[0.68rem] uppercase tracking-[0.35em] text-velmora-taupe sm:justify-between">
          {trustPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </div>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Bestsellers"
              title="Pieces women return to, gift, and keep close"
              description="A refined edit of sculptural huggies, crystal details, and signature gold layers designed to elevate daily dressing."
            />
            <Link
              to="/shop"
              className="text-xs uppercase tracking-[0.35em] text-velmora-gold transition hover:text-velmora-ivory"
            >
              Shop all
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {bestsellers.map((product, index) => (
              <ProductCard
                key={product.slug}
                product={product}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-line bg-velmora-surface/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Seen on you"
            title="An editorial take on the daily jewelry ritual"
            description="Inspired by an intimate reels strip — warm light, layered gold, and small styling moments that feel effortlessly polished."
          />

          <div className="mt-10 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none]">
            {ugcMoments.map((moment) => {
              const titleId = `${moment.id}-title`
              const captionId = `${moment.id}-caption`

              return (
                <article
                  key={moment.id}
                  className="group relative min-w-[240px] overflow-hidden rounded-[1.75rem] border border-velmora-line bg-velmora-panel shadow-soft sm:min-w-[280px]"
                >
                  <img
                    alt={moment.title}
                    className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    data-strk-img-id={`${moment.id}-img-72ac`}
                    data-strk-img={`[${captionId}] [${titleId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(20,14,11,0.9))] p-5">
                    <p
                      id={titleId}
                      className="font-display text-3xl text-velmora-ivory"
                    >
                      {moment.title}
                    </p>
                    <p
                      id={captionId}
                      className="mt-2 text-sm leading-7 text-velmora-taupe"
                    >
                      {moment.caption}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Shop by category"
            title="Curated by how you wear it"
            description="Choose the silhouette that fits your mood, from softly sculptural earrings to refined neck layers."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {categoryTiles.map((tile) => {
              const titleId = `category-${tile.id}-title`
              const descId = `category-${tile.id}-desc`

              return (
                <Link
                  key={tile.id}
                  to="/shop"
                  className="group relative overflow-hidden rounded-[2rem] border border-velmora-line"
                >
                  <img
                    alt={tile.title}
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    data-strk-img-id={`category-${tile.id}-img-204e`}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.1),rgba(16,12,10,0.85))] p-6 transition duration-300 group-hover:bg-[linear-gradient(180deg,rgba(16,12,10,0.18),rgba(16,12,10,0.92))]">
                    <div className="flex h-full flex-col justify-end">
                      <h3
                        id={titleId}
                        className="font-display text-4xl text-velmora-ivory"
                      >
                        {tile.title}
                      </h3>
                      <p
                        id={descId}
                        className="mt-3 max-w-xs text-sm leading-7 text-velmora-taupe opacity-0 transition duration-300 group-hover:opacity-100"
                      >
                        {tile.description}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section id="story" className="border-y border-velmora-line bg-velmora-surface/50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-panel">
            <img
              alt="Velmora story"
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id="story-img-ea85"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
              Our story
            </p>
            <h2
              id="story-title"
              className="mt-4 font-display text-5xl leading-none text-velmora-ivory sm:text-6xl"
            >
              Made for small rituals and meaningful gifting
            </h2>
            <p
              id="story-copy"
              className="mt-6 max-w-xl text-base leading-8 text-velmora-taupe"
            >
              Velmora Fine Jewelry was imagined as a modern jewelry wardrobe: premium in feel, accessible in price, and warm enough to become part of the way you get ready. Each piece is designed to move easily between self-purchase and thoughtful gifting.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-velmora-gold transition hover:text-velmora-ivory"
            >
              Our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Testimonials"
            title="What customers are saying"
            description="Short notes from women styling Velmora for daily wear, gifting, and special evenings out."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[1.75rem] border border-velmora-line bg-velmora-panel/70 p-6 text-velmora-ivory shadow-soft"
              >
                <div className="flex gap-1 text-velmora-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-velmora-gold text-velmora-gold" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-8 text-velmora-taupe">
                  “{testimonial.quote}”
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.3em] text-velmora-ivory">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-velmora-line bg-velmora-gold px-6 py-10 text-velmora-ink shadow-luxury sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-velmora-ink/70">
              Newsletter
            </p>
            <h2 className="mt-3 font-display text-5xl leading-none text-velmora-ink">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 text-sm leading-7 text-velmora-ink/80 sm:text-base">
              Receive early access to limited drops, styling notes, and gifting edits — quietly sent, never excessive.
            </p>
          </div>
          <form className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row lg:mt-0">
            <input
              type="email"
              placeholder="Email address"
              className="min-h-14 flex-1 rounded-full border border-velmora-ink/15 bg-velmora-ivory px-5 text-sm text-velmora-ink placeholder:text-velmora-ink/50 focus:outline-none focus:ring-2 focus:ring-velmora-ink/20"
            />
            <button
              type="button"
              className="min-h-14 rounded-full bg-velmora-ink px-6 text-xs uppercase tracking-[0.32em] text-velmora-ivory transition hover:bg-black"
            >
              Join the list
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
