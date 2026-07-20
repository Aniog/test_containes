import { ArrowRight, Star } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '../components/ProductCard'
import { categories, products, ugcMoments } from '../data/products'
import strkImgConfig from '../strk-img-config.json'

function SectionHeader({ eyebrow, title, copy, align = 'center' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl font-semibold leading-tight text-velmora-ink md:text-6xl">
        {title}
      </h2>
      {copy && <p className="mt-5 text-base leading-8 text-velmora-umber md:text-lg">{copy}</p>}
    </div>
  )
}

function Home({ onAddToCart }) {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <main ref={pageRef} className="bg-velmora-ivory text-velmora-ink">
      <section className="relative min-h-screen overflow-hidden bg-velmora-espresso text-velmora-cream">
        <div
          className="absolute inset-0 opacity-80"
          data-strk-bg-id="velmora-home-hero-bg-c1d5e8"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/45 via-velmora-espresso/35 to-velmora-espresso/80" />
        <div className="relative z-10 flex min-h-screen items-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.38em] text-velmora-champagne">
                Demi-fine gold jewelry
              </p>
              <h1
                id="hero-title"
                className="font-serif text-6xl font-semibold leading-none tracking-tight text-velmora-cream md:text-8xl lg:text-9xl"
              >
                Crafted to be Treasured
              </h1>
              <p id="hero-subtitle" className="mt-6 max-w-xl text-lg leading-8 text-velmora-cream/85 md:text-xl">
                Warm gold, luminous crystals, and sculptural silhouettes made for everyday rituals and meaningful gifts.
              </p>
              <Link
                to="/shop"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink shadow-glow transition-all duration-300 hover:bg-velmora-cream hover:translate-x-1"
              >
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-blush bg-velmora-cream text-velmora-ink">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-4 text-center text-[0.68rem] font-bold uppercase tracking-[0.22em] text-velmora-umber md:grid-cols-4 md:px-8">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
            <p key={item} className="py-2">{item}</p>
          ))}
        </div>
      </section>

      <section id="bestsellers" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Bestsellers"
            title="The pieces in every saved cart"
            copy="Premium-but-accessible gold jewelry designed for stacking, gifting, and wearing without waiting for an occasion."
          />
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-velmora-espresso py-16 text-velmora-cream md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">
                Worn by Velmora women
              </p>
              <h2 id="ugc-section-title" className="font-serif text-4xl font-semibold md:text-6xl">
                A reels strip of golden moments
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-velmora-cream/75">
              Editorial-inspired glimpses of hoops, chains, cuffs, and gift sets in warm everyday light.
            </p>
          </div>
          <div className="velmora-scrollbar -mx-5 flex gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:px-0">
            {ugcMoments.map((moment) => (
              <article key={moment.id} className="group relative h-[430px] min-w-[242px] overflow-hidden rounded-[2rem] bg-velmora-blush md:h-[520px] md:min-w-[292px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 velmora-image-warmth"
                  data-strk-bg-id={moment.imgId}
                  data-strk-bg={`[${moment.titleId}] [ugc-section-title]`}
                  data-strk-bg-ratio="9x16"
                  data-strk-bg-width="520"
                  role="img"
                  aria-label={moment.caption}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-velmora-ink/5 to-transparent" />
                <p id={moment.titleId} className="absolute bottom-6 left-6 right-6 font-serif text-2xl leading-tight text-velmora-cream">
                  {moment.caption}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Shop by category" title="Find your signature glow" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.id} to={`/shop?category=${encodeURIComponent(category.name)}`} className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-velmora-blush shadow-soft">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 velmora-image-warmth"
                  data-strk-bg-id={category.imgId}
                  data-strk-bg={`[${category.descId}] [${category.titleId}]`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="760"
                  role="img"
                  aria-label={category.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-velmora-ink/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-velmora-cream">
                  <h3 id={category.titleId} className="font-serif text-4xl font-semibold">{category.name}</h3>
                  <p id={category.descId} className="mt-3 max-w-sm text-sm leading-7 text-velmora-cream/80">{category.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="bg-velmora-cream px-5 py-16 text-velmora-ink md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div
            className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-velmora-blush bg-cover bg-center shadow-soft velmora-image-warmth"
            data-strk-bg-id="velmora-story-image-b8e2f9"
            data-strk-bg="[story-copy] [story-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="960"
            role="img"
            aria-label="Velmora gold jewelry styling"
          />
          <div className="lg:pl-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Our Story</p>
            <h2 id="story-title" className="font-serif text-5xl font-semibold leading-tight text-velmora-ink md:text-7xl">
              Modern heirlooms, without the traditional markup.
            </h2>
            <p id="story-copy" className="mt-6 text-lg leading-9 text-velmora-umber">
              Velmora creates demi-fine jewelry in small, considered collections: 18K gold-plated finishes, hypoallergenic settings, and silhouettes that feel personal from the first wear. We design for the woman buying herself flowers, sending a gift across the world, or adding a final glint before dinner.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-gold pb-2 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink transition-colors hover:text-velmora-gold">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Love notes" title="Quietly glowing reviews" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ['The huggies feel expensive without being precious. I wear them constantly.', 'Maya R.'],
              ['The gift box was beautiful and the necklace looked even better in person.', 'Elena P.'],
              ['Warm gold tone, no irritation, and the details are so delicate.', 'Claire M.'],
            ].map(([quote, name]) => (
              <article key={name} className="rounded-[2rem] border border-velmora-blush bg-velmora-cream p-7 text-velmora-ink shadow-soft">
                <div className="mb-5 flex gap-1 text-velmora-gold" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="font-serif text-2xl leading-8 text-velmora-ink">“{quote}”</p>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-velmora-umber">{name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-velmora-espresso text-velmora-cream shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">Velmora Edit</p>
              <h2 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
                Join for 10% off your first order
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-velmora-cream/75">
                Receive styling notes, early collection access, and thoughtful gifting reminders.
              </p>
              <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
                <label className="sr-only" htmlFor="newsletter-email">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="min-h-14 flex-1 rounded-full border border-velmora-cream/25 bg-velmora-cream px-5 text-sm text-velmora-ink placeholder:text-velmora-umber focus:border-velmora-champagne focus:outline-none"
                />
                <button type="submit" className="min-h-14 rounded-full bg-velmora-champagne px-7 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ink transition-colors hover:bg-velmora-cream">
                  Join
                </button>
              </form>
            </div>
            <div
              className="min-h-[320px] bg-velmora-blush"
              data-strk-bg-id="velmora-newsletter-bg-d2b4e5"
              data-strk-bg="[hero-subtitle] [hero-title]"
              data-strk-bg-ratio="3x2"
              data-strk-bg-width="900"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
