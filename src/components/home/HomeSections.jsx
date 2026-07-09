import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import { categoryTiles, products, ugcItems } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'
import StarRating from '@/components/products/StarRating'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const testimonials = [
  ['The huggies look far more expensive than they are. I wear them almost every day.', 'Maya R.'],
  ['Beautiful packaging, warm gold tone, and no irritation at all. Perfect gift.', 'Elena S.'],
  ['Quiet statement pieces that make a simple outfit feel styled.', 'Nora L.'],
]

export default function HomeSections({ onAddToCart }) {
  return (
    <>
      <section id="top" className="relative min-h-screen overflow-hidden bg-velmora-ink text-velmora-pearl">
        <div
          className="absolute inset-0 bg-velmora-radial"
          data-strk-bg-id="velmora-hero-bg-73aa12"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/35 to-velmora-ink/35" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-velmora-gold">Demi-fine jewelry for daily radiance</p>
            <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.95] text-velmora-pearl sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-pearl/82 sm:text-lg">
              Warm gold essentials, sculptural huggies, and gift-ready keepsakes designed with quiet luxury in mind.
            </p>
            <Link to="/shop" className="mt-9 inline-flex items-center gap-3 bg-velmora-gold px-7 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-pearl">
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-ink/10 bg-velmora-pearl text-velmora-ink">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-4 text-center text-[0.68rem] font-bold uppercase tracking-[0.2em] text-velmora-cocoa sm:px-6 md:grid-cols-4 lg:px-8">
          {trustItems.map((item) => <div key={item} className="py-2">{item}</div>)}
        </div>
      </section>

      <section id="bestsellers" className="bg-velmora-ivory py-16 text-velmora-ink md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-bronze">Bestsellers</p>
              <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ink md:text-6xl">Most treasured now</h2>
            </div>
            <Link to="/shop" className="text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink underline decoration-velmora-gold underline-offset-8 transition hover:text-velmora-bronze">
              View all pieces
            </Link>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} context="home-best" />)}
          </div>
        </div>
      </section>

      <section id="journal" className="bg-velmora-ink py-16 text-velmora-pearl md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">Seen on you</p>
              <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-pearl">Reel-worthy shine</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-7 text-velmora-pearl/70 md:block">A soft-scroll strip inspired by the way our community styles gold close to skin.</p>
          </div>
          <div className="no-scrollbar flex snap-x gap-5 overflow-x-auto pb-3">
            {ugcItems.map((item) => (
              <article key={item.id} className="group relative aspect-[9/16] w-56 shrink-0 snap-start overflow-hidden bg-velmora-cocoa shadow-editorial sm:w-64">
                <img
                  alt={item.caption}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}] [journal-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-transparent to-transparent" />
                <p id={item.titleId} className="absolute bottom-5 left-5 right-5 font-serif text-2xl font-semibold leading-tight text-velmora-pearl">
                  {item.caption}
                </p>
              </article>
            ))}
          </div>
          <span id="journal-title" className="sr-only">Velmora jewelry worn by women in warm editorial reels</span>
        </div>
      </section>

      <section id="collections" className="bg-velmora-pearl py-16 text-velmora-ink md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-bronze">Shop by category</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ink md:text-6xl">Choose your glow</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {categoryTiles.map((tile) => (
              <Link key={tile.name} to="/shop" className="group relative aspect-[4/5] overflow-hidden bg-velmora-sand shadow-soft">
                <img
                  alt={tile.name}
                  data-strk-img-id={tile.imgId}
                  data-strk-img={`[${tile.descId}] [${tile.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-velmora-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-velmora-pearl transition duration-300 md:translate-y-8 md:group-hover:translate-y-0">
                  <h3 id={tile.titleId} className="font-serif text-4xl font-semibold text-velmora-pearl">{tile.name}</h3>
                  <p id={tile.descId} className="mt-3 text-sm leading-6 text-velmora-pearl/82 md:opacity-0 md:transition md:group-hover:opacity-100">{tile.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="bg-velmora-ivory py-16 text-velmora-ink md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="aspect-[4/5] overflow-hidden bg-velmora-sand shadow-editorial">
            <img
              alt="Velmora artisan jewelry details"
              data-strk-img-id="velmora-story-image-f6dc20"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="lg:pl-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-bronze">Our Story</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight text-velmora-ink md:text-6xl">Jewelry for the rituals you keep.</h2>
            <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-cocoa">
              Velmora is designed between heirloom feeling and everyday ease: demi-fine materials, warm gold finishes, and silhouettes that feel considered without asking for attention.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border border-velmora-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink transition hover:border-velmora-gold hover:bg-velmora-gold">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-velmora-pearl py-16 text-velmora-ink md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map(([quote, author]) => (
              <figure key={author} className="border border-velmora-ink/10 bg-velmora-ivory p-7 shadow-soft">
                <StarRating rating={5} compact />
                <blockquote className="mt-5 font-serif text-2xl leading-8 text-velmora-ink">“{quote}”</blockquote>
                <figcaption className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">{author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-velmora-blush px-4 py-16 text-velmora-ink sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-7 text-center">
          <Mail className="mx-auto h-8 w-8 text-velmora-bronze" />
          <h2 className="font-serif text-5xl font-semibold text-velmora-ink">Join for 10% off your first order</h2>
          <p className="mx-auto max-w-xl text-sm leading-7 text-velmora-cocoa">Receive quiet styling notes, new collection previews, and early access to gift-ready pieces.</p>
          <form className="mx-auto flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
            <input type="email" required placeholder="Email address" className="min-h-14 flex-1 border border-velmora-ink/15 bg-velmora-pearl px-5 text-sm text-velmora-ink placeholder:text-velmora-cocoa/70 focus:border-velmora-bronze focus:outline-none" />
            <button type="submit" className="min-h-14 bg-velmora-ink px-8 text-xs font-bold uppercase tracking-[0.24em] text-velmora-pearl transition hover:bg-velmora-bronze">
              Sign up
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
