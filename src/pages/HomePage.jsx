import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Quote, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const ugcCards = [
  {
    id: 'ugc-ear-stack',
    caption: 'Soft gold stacks for weekday rituals',
    titleId: 'ugc-ear-stack-title',
    descId: 'ugc-ear-stack-desc',
  },
  {
    id: 'ugc-neckline',
    caption: 'A luminous neckline, styled simply',
    titleId: 'ugc-neckline-title',
    descId: 'ugc-neckline-desc',
  },
  {
    id: 'ugc-huggies',
    caption: 'Huggies that never feel too much',
    titleId: 'ugc-huggies-title',
    descId: 'ugc-huggies-desc',
  },
  {
    id: 'ugc-gifting',
    caption: 'The little box that says everything',
    titleId: 'ugc-gifting-title',
    descId: 'ugc-gifting-desc',
  },
]

const categories = [
  {
    label: 'Earrings',
    titleId: 'category-earrings-title',
    descId: 'category-earrings-desc',
    desc: 'Sculptural accents, soft drops, and everyday shine.',
  },
  {
    label: 'Necklaces',
    titleId: 'category-necklaces-title',
    descId: 'category-necklaces-desc',
    desc: 'Layerable chains and luminous pendant moments.',
  },
  {
    label: 'Huggies',
    titleId: 'category-huggies-title',
    descId: 'category-huggies-desc',
    desc: 'Polished close-fitting hoops made to live in.',
  },
]

const testimonials = [
  ['Looks far more expensive than it is. I wear the huggies almost daily.', 'Mara L.'],
  ['The gift packaging was beautiful, and the necklace felt personal and special.', 'Sofia R.'],
  ['Warm gold, no irritation, and the designs feel quietly elevated.', 'Elise T.'],
]

function HomePage({ onAddToCart }) {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <main ref={pageRef} className="bg-velmora-cream text-velmora-ink">
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-velmora-ink text-velmora-cream">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          data-strk-bg-id="home-hero-bg-f91d02"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/45 to-velmora-ink/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-36 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-velmora-champagne">Demi-fine gold jewelry</p>
            <h1 id="home-hero-title" className="font-serif text-6xl font-medium leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="home-hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-cream/82 sm:text-lg">
              Warm, luminous pieces for gifting, self-purchase, and the everyday moments that deserve permanence.
            </p>
            <Link
              to="/shop"
              className="mt-9 inline-flex items-center gap-3 bg-velmora-champagne px-6 py-4 text-xs font-bold uppercase tracking-ui text-velmora-ink transition hover:bg-velmora-cream"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-line bg-velmora-porcelain text-velmora-cocoa">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section id="bestsellers" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-velmora-line pb-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-ui text-velmora-antique">Most loved</p>
            <h2 className="mt-3 font-serif text-4xl text-velmora-ink sm:text-5xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-ui text-velmora-ink hover:text-velmora-antique">
            Shop all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} context="home-bestseller" />
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-velmora-ink py-16 text-velmora-cream lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-ui text-velmora-champagne">As worn</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Velmora in motion</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-7 text-velmora-cream/70 md:block">
              A reel-style glimpse of pieces styled close to skin, in warm light, and in real life.
            </p>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none]">
            {ugcCards.map((card) => (
              <article key={card.id} className="group relative aspect-[9/16] w-[70vw] shrink-0 snap-start overflow-hidden bg-velmora-cocoa sm:w-72">
                <img
                  alt={card.caption}
                  className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                  data-strk-img-id={`reel-${card.id}`}
                  data-strk-img={`[${card.descId}] [${card.titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="600"
                  src={placeholder}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-5">
                  <p id={card.titleId} className="font-serif text-2xl leading-tight text-velmora-cream">{card.caption}</p>
                  <p id={card.descId} className="mt-2 text-xs uppercase tracking-ui text-velmora-champagne">Styled by our community</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-9 text-center">
          <p className="text-xs font-bold uppercase tracking-ui text-velmora-antique">Explore</p>
          <h2 className="mt-3 font-serif text-4xl text-velmora-ink sm:text-5xl">Shop by category</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.label}
              to={`/shop?category=${category.label}`}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-blush text-velmora-cream"
            >
              <img
                alt={category.label}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={`category-${category.label.toLowerCase()}`}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={placeholder}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-velmora-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 transition duration-500 group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-4xl">{category.label}</h3>
                <p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-cream/80 opacity-90 md:opacity-0 md:transition md:group-hover:opacity-100">
                  {category.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-porcelain py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-blush">
            <img
              alt="Velmora warm jewelry atelier"
              className="h-full w-full object-cover"
              data-strk-img-id="brand-story-atelier-4f6a11"
              data-strk-img="[brand-story-copy] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1100"
              src={placeholder}
            />
          </div>
          <div className="max-w-xl lg:pl-10">
            <p className="text-xs font-bold uppercase tracking-ui text-velmora-antique">Our story</p>
            <h2 id="brand-story-title" className="mt-4 font-serif text-5xl leading-tight text-velmora-ink sm:text-6xl">
              Jewelry for the intimate art of becoming.
            </h2>
            <p id="brand-story-copy" className="mt-6 text-base leading-8 text-velmora-cocoa">
              Velmora creates demi-fine pieces that feel considered, personal, and quietly radiant. We design in small seasonal edits, balancing vintage-inspired detail with modern wearability and accessible pricing.
            </p>
            <Link to="/#story" className="mt-8 inline-flex items-center gap-2 border-b border-velmora-antique pb-1 text-xs font-bold uppercase tracking-ui text-velmora-ink hover:text-velmora-antique">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map(([quote, name]) => (
            <article key={name} className="border border-velmora-line bg-velmora-porcelain p-6 text-velmora-ink">
              <Quote className="h-8 w-8 text-velmora-champagne" strokeWidth={1.2} />
              <div className="mt-5 flex text-velmora-antique">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" strokeWidth={1.2} />
                ))}
              </div>
              <p className="mt-5 text-base leading-7 text-velmora-cocoa">“{quote}”</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-ui text-velmora-ink">{name}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="journal" className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 bg-velmora-blush px-6 py-10 text-velmora-ink sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-14 lg:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-ui text-velmora-antique">Private list</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Join for 10% off your first order.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-cocoa">
              Receive new drops, gifting edits, and quiet styling notes from the Velmora atelier.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="min-h-13 flex-1 border border-velmora-line bg-velmora-porcelain px-4 text-sm text-velmora-ink placeholder:text-velmora-cocoa/70 focus:border-velmora-antique focus:outline-none"
            />
            <button type="submit" className="bg-velmora-ink px-6 py-4 text-xs font-bold uppercase tracking-ui text-velmora-cream transition hover:bg-velmora-antique">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default HomePage
