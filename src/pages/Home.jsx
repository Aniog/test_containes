import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import ProductCard from '@/components/ProductCard'
import { categories, products, testimonials, trustItems, ugcMoments } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Home = () => {
  const containerRef = useRef(null)
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [])

  useEffect(() => {
    document.title = 'Velmora Fine Jewelry | Crafted to be Treasured'
  }, [])

  return (
    <div ref={containerRef}>
      <section className="relative min-h-screen overflow-hidden bg-obsidian text-parchment">
        <div
          className="absolute inset-0"
          data-strk-bg-id="vel-home-hero-bg-a92"
          data-strk-bg="[home-hero-image-guide] [home-hero-title] [home-hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <p id="home-hero-image-guide" hidden aria-hidden="true">
          warm lit close-up of demi-fine gold jewelry worn on a woman model in an editorial portrait
        </p>
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/45 to-obsidian/15" />
        <div className="section-frame relative flex min-h-screen items-end py-24 sm:items-center">
          <div className="max-w-2xl pb-12 pt-32 sm:pb-0">
            <p className="eyebrow text-parchment/70">Velmora Fine Jewelry</p>
            <h1 id="home-hero-title" className="mt-5 font-display text-6xl leading-none text-parchment sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="home-hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-parchment/80 sm:text-lg">
              Warm-toned demi-fine pieces designed for the everyday ritual of getting dressed, gifting well, and keeping what you love close.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/shop" className="premium-button w-full sm:w-auto">
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="inline-flex w-full items-center justify-center rounded-full border border-parchment/30 bg-transparent px-6 py-3 text-sm font-medium uppercase tracking-button text-parchment transition duration-300 ease-luxe hover:border-parchment hover:bg-parchment/10 sm:w-auto"
              >
                Discover Velmora
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-parchment">
        <div className="section-frame grid gap-3 py-4 text-center text-xs uppercase tracking-button text-ink sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="section-frame py-20 sm:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Bestsellers"
            title="A curated edit of Velmora signatures"
            description="Our most-loved demi-fine pieces, chosen for gifting, layering, and keeping in heavy rotation."
          />
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm uppercase tracking-button text-ink transition duration-300 hover:text-gold">
            View all products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-parchment py-20 sm:py-24">
        <div className="section-frame">
          <SectionHeading
            eyebrow="Styled by you"
            title="A reel of real-life Velmora moments"
            description="A soft-scroll strip inspired by the way our pieces live in everyday wardrobes, celebrations, and spontaneous self-gifts."
          />
          <div className="mt-12 flex gap-5 overflow-x-auto pb-4">
            {ugcMoments.map((moment) => (
              <article key={moment.id} className="group relative w-64 min-w-64 overflow-hidden rounded-3xl border border-line bg-sand sm:w-72 sm:min-w-72">
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img
                    alt={moment.caption}
                    className="h-full w-full object-cover transition duration-500 ease-luxe group-hover:scale-105"
                    data-strk-img-id={`${moment.id}-img-b82`}
                    data-strk-img={`[${moment.id}-caption] [ugc-section-title]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p id={`${moment.id}-caption`} className="font-display text-3xl text-parchment">
                      {moment.caption}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p id="ugc-section-title" className="sr-only">
            Velmora jewelry worn on ear and neck in warm editorial moments.
          </p>
        </div>
      </section>

      <section className="section-frame py-20 sm:py-24">
        <SectionHeading
          eyebrow="Shop by category"
          title="Jewelry that slips easily into every day"
          description="Explore the silhouettes our customers reach for when they want polish without effort."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to="/shop" className="group relative overflow-hidden rounded-3xl border border-line bg-sand">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 ease-luxe group-hover:scale-105"
                  data-strk-img-id={`${category.id}-tile-m42`}
                  data-strk-img={`[category-${category.id}-desc] [category-${category.id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-obsidian/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <p id={`category-${category.id}-title`} className="font-display text-4xl text-parchment">
                      {category.name}
                    </p>
                    <p id={`category-${category.id}-desc`} className="mt-2 max-w-xs text-sm leading-6 text-parchment/75">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-button text-parchment/75 transition duration-300 group-hover:text-parchment">
                    Explore
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-parchment py-20 sm:py-24">
        <div className="section-frame grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-line bg-sand">
            <img
              alt="Velmora brand story"
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id="vel-story-image-c13"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div>
            <p className="eyebrow">Brand story</p>
            <h2 id="story-title" className="mt-4 font-display text-5xl leading-none text-obsidian sm:text-6xl">
              Jewelry that feels intimate, polished, and endlessly wearable
            </h2>
            <p id="story-copy" className="mt-6 max-w-xl text-base leading-8 text-taupe sm:text-lg">
              Velmora began with a simple idea: create premium-feeling jewelry with a warm editorial finish and a price point that still makes sense for every day. Our pieces are designed to layer softly, gift beautifully, and hold emotional weight long after the moment they were bought.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-button text-ink transition duration-300 hover:text-gold">
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-frame py-20 sm:py-24">
        <SectionHeading
          eyebrow="Testimonials"
          title="Why customers come back for another piece"
          description="Thoughtful packaging, polished finishes, and the kind of easy glamour that works from weekday to weekend."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.id} className="surface-card p-8">
              <div className="flex gap-1 text-gold">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 font-display text-3xl leading-9 text-obsidian">“{review.quote}”</p>
              <p className="mt-6 text-sm uppercase tracking-button text-taupe">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame pb-20 sm:pb-24">
        <div className="rounded-3xl bg-obsidian px-6 py-12 text-parchment sm:px-10 lg:px-16 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow text-parchment/60">Newsletter</p>
              <h2 className="mt-4 font-display text-5xl leading-none text-parchment sm:text-6xl">
                Join for 10% off your first order
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-parchment/75">
                Be first to know about new drops, gifting edits, and styling inspiration from the Velmora world.
              </p>
            </div>
            <form
              className="grid gap-4 sm:grid-cols-[1fr_auto]"
              onSubmit={(event) => {
                event.preventDefault()
                if (email.trim()) {
                  setJoined(true)
                  setEmail('')
                }
              }}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                className="rounded-full border border-parchment/20 bg-parchment px-6 py-4 text-sm text-ink outline-none placeholder:text-taupe focus:border-gold"
              />
              <button type="submit" className="premium-button whitespace-nowrap">
                Join Now
              </button>
            </form>
            {joined ? (
              <p className="text-sm text-parchment/75 lg:col-start-2">
                Thank you — your welcome offer is waiting in your inbox.
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
