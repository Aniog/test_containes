import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/storefront/ProductCard'
import EditorialImage from '@/components/storefront/EditorialImage'
import RatingStars from '@/components/storefront/RatingStars'

const ugcCards = [
  { id: 'ugc-ear-stack', caption: 'The everyday ear stack', titleId: 'ugc-ear-title', imageId: 'ugc-ear-stack-s91k3a' },
  { id: 'ugc-golden-hour', caption: 'Golden hour at dinner', titleId: 'ugc-golden-title', imageId: 'ugc-golden-hour-t17v9e' },
  { id: 'ugc-gift-moment', caption: 'Wrapped for her birthday', titleId: 'ugc-gift-title', imageId: 'ugc-gift-moment-u44m2p' },
  { id: 'ugc-neck-layer', caption: 'A soft layered neckline', titleId: 'ugc-neck-title', imageId: 'ugc-neck-layer-v80q6r' },
  { id: 'ugc-huggie-close', caption: 'Huggies, never taken off', titleId: 'ugc-huggie-title', imageId: 'ugc-huggie-close-w53z8b' },
]

const testimonials = [
  ['The pieces look far more expensive than they are. I wear my huggies every single day.', 'Maya R.'],
  ['The packaging felt so special. It was the easiest gift I have bought all year.', 'Lauren S.'],
  ['Warm, minimal, and polished. Exactly the kind of jewelry I wanted for work and weekends.', 'Anika P.'],
]

export default function Home({ onAddToCart }) {
  return (
    <div className="bg-velmora-ivory text-velmora-espresso">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
        <div
          className="absolute inset-0 opacity-[0.78]"
          data-strk-bg-id="home-hero-bg-jewelry-model-b7a93c"
          data-strk-bg="[hero-subhead] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso via-velmora-espresso/58 to-velmora-espresso/10" />
        <div className="velmora-hero-copy relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pb-16 pt-32 sm:px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="velmora-hero-kicker mb-5 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-velmora-champagne">
              Demi-fine jewelry, directly from our atelier
            </p>
            <h1 id="hero-title" className="font-serifDisplay text-6xl font-semibold leading-[0.92] text-velmora-ivory sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subhead" className="mt-7 max-w-xl font-sans text-base leading-8 text-velmora-ivory/82 sm:text-lg">
              Warm 18K gold-plated essentials, sculptural huggies, and luminous crystal pieces made for gifting, self-purchase, and every ordinary day made beautiful.
            </p>
            <Link
              to="/shop"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-champagne px-7 py-4 font-sans text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso shadow-glow transition hover:bg-velmora-ivory"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-cocoa/10 bg-velmora-porcelain text-velmora-cocoa">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 py-4 text-center font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] sm:px-6 md:grid-cols-4 lg:px-10">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-10">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-antique">The daily edit</p>
            <h2 className="mt-3 font-serifDisplay text-5xl font-semibold text-velmora-espresso md:text-6xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.2em] text-velmora-espresso transition hover:text-velmora-antique">
            View all pieces <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} scope="home-bestseller" onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      <section id="journal" className="bg-velmora-espresso py-16 text-velmora-ivory md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-champagne">Seen on you</p>
              <h2 className="mt-3 font-serifDisplay text-5xl font-semibold text-velmora-ivory">Velmora in Motion</h2>
            </div>
          </div>
          <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
            {ugcCards.map((card) => (
              <article key={card.id} className="relative h-[430px] w-[242px] shrink-0 snap-start overflow-hidden rounded-[2rem] bg-velmora-cocoa shadow-velvet">
                <EditorialImage
                  id={card.imageId}
                  query={`[${card.titleId}]`}
                  ratio="9x16"
                  width="500"
                  alt={card.caption}
                  className="h-full w-full object-cover opacity-[0.88] transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/50 to-transparent p-5 pt-20">
                  <h3 id={card.titleId} className="font-serifDisplay text-2xl font-semibold text-velmora-ivory">{card.caption}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-10">
        <div className="mb-10 text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-antique">Shop by category</p>
          <h2 className="mt-3 font-serifDisplay text-5xl font-semibold text-velmora-espresso md:text-6xl">Choose Your Ritual</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} to={category.href} className="group relative min-h-[420px] overflow-hidden bg-velmora-espresso text-velmora-ivory shadow-sm">
              <EditorialImage
                id={category.imageId}
                query={`[${category.descId}] [${category.titleId}]`}
                ratio="3x4"
                width="700"
                alt={category.name}
                className="absolute inset-0 h-full w-full object-cover opacity-[0.76] transition duration-700 group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p id={category.descId} className="mb-2 font-sans text-xs uppercase tracking-[0.2em] text-velmora-ivory/75">{category.description}</p>
                <h3 id={category.titleId} className="font-serifDisplay text-4xl font-semibold text-velmora-ivory">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-porcelain py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 md:grid-cols-2 md:items-center lg:px-10">
          <div className="relative min-h-[520px] overflow-hidden bg-velmora-blush shadow-velvet">
            <EditorialImage
              id="story-atelier-hands-gold-k41z2q"
              query="[story-copy] [story-title]"
              ratio="3x4"
              width="900"
              alt="Velmora jewelry atelier"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="text-velmora-espresso md:pl-8">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-antique">Our Story</p>
            <h2 id="story-title" className="mt-4 font-serifDisplay text-5xl font-semibold leading-tight md:text-6xl">
              Designed for the women who make everyday feel intentional.
            </h2>
            <p id="story-copy" className="mt-6 max-w-xl font-sans text-base leading-8 text-velmora-cocoa">
              Velmora brings together premium plating, skin-friendly materials, and small-batch silhouettes at an accessible price point. Each piece is made to layer beautifully, gift effortlessly, and live beyond a single season.
            </p>
            <Link to="/#story" className="mt-8 inline-flex items-center gap-3 rounded-full border border-velmora-cocoa/25 px-7 py-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-velmora-espresso transition hover:border-velmora-champagne hover:bg-velmora-champagne">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map(([quote, name]) => (
            <article key={name} className="border border-velmora-cocoa/10 bg-velmora-porcelain p-7 text-velmora-espresso shadow-sm">
              <Quote className="mb-5 h-7 w-7 text-velmora-champagne" />
              <RatingStars rating={5} reviews={1} />
              <p className="mt-5 font-serifDisplay text-2xl font-medium leading-8 text-velmora-espresso">“{quote}”</p>
              <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-velmora-taupe">{name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-velmora-blush px-5 py-16 text-velmora-espresso sm:px-6 md:py-20 lg:px-10">
        <div className="mx-auto grid max-w-5xl gap-8 text-center md:grid-cols-[1.2fr_1fr] md:items-center md:text-left">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-antique">Private list</p>
            <h2 className="mt-3 font-serifDisplay text-5xl font-semibold">Join for 10% off your first order</h2>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="min-h-14 flex-1 rounded-full border border-velmora-cocoa/15 bg-velmora-porcelain px-5 font-sans text-sm text-velmora-espresso placeholder:text-velmora-taupe focus:border-velmora-champagne focus:outline-none"
            />
            <button type="submit" className="rounded-full bg-velmora-espresso px-7 py-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-velmora-ivory transition hover:bg-velmora-cocoa">
              Join
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
