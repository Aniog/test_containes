import { ArrowRight, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import {
  categoryTiles,
  products,
  testimonials,
  trustPoints,
  ugcMoments,
} from '@/data/storefront'
import { useStorefront } from '@/context/StorefrontContext'

const heroImage =
  'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1602509380108-a47060db0a97'
const storyImage =
  'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1650855976846-ee1cfee324e2'

const Home = () => {
  const { addToCart } = useStorefront()

  return (
    <main className="bg-velmora-cream text-velmora-ink">
      <section className="relative min-h-screen overflow-hidden bg-velmora-ink text-velmora-cream">
        <img
          alt="Velmora hero campaign"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/70 via-velmora-ink/50 to-velmora-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink/55 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-20 pt-28 md:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs uppercase tracking-[0.36em] text-velmora-cream/75">
              Velmora Fine Jewelry
            </p>
            <h1
              id="hero-title"
              className="max-w-xl font-display text-6xl leading-none text-velmora-cream md:text-7xl lg:text-[6rem]"
            >
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 max-w-lg text-base leading-8 text-velmora-cream/82 md:text-lg"
            >
              Warm gold tones, softly sculpted silhouettes, and gift-ready pieces designed for self-purchase and celebration alike.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-velmora-gold px-7 py-4 text-sm uppercase tracking-[0.28em] text-velmora-ink shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
              >
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-velmora-cream/25 px-7 py-4 text-sm uppercase tracking-[0.28em] text-velmora-cream transition-colors duration-300 hover:border-velmora-gold hover:text-velmora-gold"
              >
                Discover Velmora
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-t border-velmora-mist/60 bg-velmora-panel">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-4 text-center text-[11px] uppercase tracking-[0.32em] text-velmora-muted md:grid-cols-4 md:px-8 lg:px-10">
          {trustPoints.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:px-10" id="bestsellers-section">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-muted">Bestsellers</p>
            <h2 className="mt-3 font-display text-5xl text-velmora-ink md:text-6xl">
              The pieces everyone reaches for first.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-muted md:text-right">
            A considered edit of everyday demi-fine favorites for gifting, layering, and quiet statement dressing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={(productId) => addToCart({ productId })}
              priority={index === 0}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-velmora-mist/60 bg-velmora-panel py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-velmora-muted">Velmora on You</p>
              <h2 className="mt-3 font-display text-5xl text-velmora-ink md:text-6xl">
                A reels-inspired look at daily wear.
              </h2>
            </div>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-2">
            {ugcMoments.map((moment) => {
              const titleId = `${moment.id}-title`
              const descId = `${moment.id}-desc`

              return (
                <article
                  key={moment.id}
                  className="group relative min-w-[240px] overflow-hidden rounded-[2rem] bg-velmora-ink text-velmora-cream shadow-soft md:min-w-[280px]"
                >
                  <img
                    alt={moment.caption}
                    className="aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={moment.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p id={titleId} className="text-xs uppercase tracking-[0.28em] text-velmora-cream/70">
                      Styled by Velmora Women
                    </p>
                    <p id={descId} className="mt-3 font-display text-3xl leading-8 text-velmora-cream">
                      {moment.caption}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:px-10">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-velmora-muted">Shop by Category</p>
          <h2 className="mt-3 font-display text-5xl text-velmora-ink md:text-6xl">
            Sculpted essentials, arranged by mood.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {categoryTiles.map((tile) => {
            const titleId = `category-${tile.id}-title`
            const descId = `category-${tile.id}-desc`

            return (
              <Link
                key={tile.id}
                to={`/shop?category=${tile.name}`}
                className="group relative overflow-hidden rounded-[2rem] bg-velmora-ink"
              >
                <img
                  alt={tile.name}
                  className="aspect-[4/5] w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
                  src={tile.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <h3 id={titleId} className="font-display text-4xl text-velmora-cream">
                      {tile.name}
                    </h3>
                    <p id={descId} className="mt-2 max-w-xs text-sm leading-7 text-velmora-cream/78">
                      {tile.description}
                    </p>
                  </div>
                  <span className="rounded-full border border-velmora-cream/25 px-4 py-3 text-xs uppercase tracking-[0.28em] text-velmora-cream transition-colors duration-300 group-hover:border-velmora-gold group-hover:text-velmora-gold">
                    Explore
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="overflow-hidden rounded-[2rem] bg-velmora-ink shadow-soft">
          <img
            alt="Velmora brand story"
            className="h-full w-full object-cover"
            src={storyImage}
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.3em] text-velmora-muted">Brand Story</p>
          <h2 id="story-title" className="mt-4 font-display text-5xl leading-none text-velmora-ink md:text-6xl">
            Jewelry that slips seamlessly into your every day.
          </h2>
          <p id="story-desc" className="mt-6 text-base leading-8 text-velmora-muted md:text-lg">
            We design demi-fine pieces to feel personal, warm, and polished. Each silhouette is meant to layer easily, gift beautifully, and become part of the daily rituals you keep.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-velmora-ink transition-colors duration-300 hover:text-velmora-gold"
          >
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-y border-velmora-mist/60 bg-velmora-panel py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-muted">Testimonials</p>
            <h2 className="mt-3 font-display text-5xl text-velmora-ink md:text-6xl">
              Words from women who wear Velmora often.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="rounded-[2rem] border border-velmora-mist/60 bg-velmora-cream p-7 shadow-soft"
              >
                <Quote className="h-8 w-8 text-velmora-gold" />
                <div className="mt-4 flex gap-1 text-velmora-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
                <p className="mt-5 text-base leading-8 text-velmora-muted">
                  {testimonial.quote}
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.28em] text-velmora-ink">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24 lg:px-10">
        <div className="rounded-[2rem] bg-velmora-gold px-6 py-10 text-center text-velmora-ink shadow-glow md:px-12 md:py-14">
          <p className="text-xs uppercase tracking-[0.3em] text-velmora-ink/70">Newsletter</p>
          <h2 className="mt-4 font-display text-5xl leading-none md:text-6xl">
            Join for 10% off your first order
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-velmora-ink/80 md:text-lg">
            New releases, styling notes, and gifting edits sent with restraint.
          </p>
          <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-full border border-velmora-ink/20 bg-velmora-panel px-5 text-sm text-velmora-ink placeholder:text-velmora-muted focus:outline-none focus:ring-2 focus:ring-velmora-ink/20"
            />
            <button
              type="button"
              className="h-14 rounded-full border border-velmora-ink bg-velmora-ink px-7 text-sm uppercase tracking-[0.28em] text-velmora-cream transition-colors duration-300 hover:bg-transparent hover:text-velmora-ink"
            >
              Join Now
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Home
