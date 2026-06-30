import { ArrowRight, Star } from 'lucide-react'
import ProductCard from '../components/product/ProductCard.jsx'
import { categories, products, ugcStories } from '../data/products.js'

const placeholder =
  'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']
const testimonials = [
  {
    quote: 'The Golden Sphere Huggies look far more expensive than they are. I wear them almost every day.',
    name: 'Maya R.',
  },
  {
    quote: 'Velmora packaging made the set feel like a true occasion gift. My sister loved every detail.',
    name: 'Elena K.',
  },
  {
    quote: 'Quiet, warm, and polished. These pieces make simple outfits feel intentional.',
    name: 'Nora S.',
  },
]

export default function HomePage({ onAddToCart }) {
  return (
    <main className="bg-velmora-porcelain text-velmora-ink">
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-velmora-ink px-5 pb-14 pt-28 text-velmora-pearl md:px-8 md:pb-20">
        <p id="hero-image-context" className="sr-only">warm-lit close-up of layered gold jewelry on a woman model, editorial neutral luxury skin silk</p>
        <div
          className="absolute inset-0 opacity-80"
          data-strk-bg-id="velmora-hero-bg-model-gold-2f8d1a"
          data-strk-bg="[hero-image-context] [hero-subhead] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/55 to-velmora-ink/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl animate-fadeUp">
          <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="mt-5 max-w-3xl font-serif text-6xl font-semibold leading-[0.95] text-velmora-pearl md:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="mt-6 max-w-xl text-base leading-8 text-velmora-pearl/85 md:text-lg">
            Warm, enduring pieces for self-purchase, milestone gifting, and every daily ritual in between.
          </p>
          <a
            href="#/shop"
            className="mt-9 inline-flex items-center gap-3 bg-velmora-gold px-7 py-4 text-xs font-extrabold uppercase tracking-luxe text-velmora-ink transition hover:-translate-y-0.5 hover:bg-velmora-pearl"
          >
            Shop the Collection <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="border-y border-velmora-ink/10 bg-velmora-pearl px-5 py-4 text-velmora-ink md:px-8">
        <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto text-nowrap text-xs font-bold uppercase tracking-[0.18em] text-velmora-cocoa no-scrollbar md:justify-between">
          {trustItems.map((item) => (
            <span key={item} className="snap-start">{item}</span>
          ))}
        </div>
      </section>

      <section id="bestsellers" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Most loved</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold md:text-6xl">Bestsellers</h2>
          </div>
          <a href="#/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-luxe text-velmora-ink transition hover:text-velmora-gold">
            View all <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      <section id="journal" className="border-y border-velmora-ink/10 bg-velmora-champagne/60 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">As worn by you</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold md:text-6xl">Velmora Reels</h2>
            </div>
            <p className="hidden max-w-xs text-sm leading-6 text-velmora-cocoa md:block">A soft-scroll strip inspired by the quiet moments our jewelry lives in.</p>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-2 no-scrollbar">
            {ugcStories.map((story) => {
              const captionId = `ugc-${story.id}-caption`
              return (
                <article key={story.id} className="group relative aspect-[9/16] w-[70vw] max-w-[280px] shrink-0 snap-start overflow-hidden bg-velmora-ink shadow-soft sm:w-[240px]">
                  <img
                    alt={story.caption}
                    className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                    data-strk-img-id={story.imageId}
                    data-strk-img={`[${captionId}] [hero-subhead]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="500"
                    src={placeholder}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-transparent to-transparent" />
                  <p id={captionId} className="absolute bottom-5 left-5 right-5 font-serif text-2xl font-semibold leading-tight text-velmora-pearl">
                    {story.caption}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Shop by category</p>
          <h2 id="category-section-title" className="mt-3 font-serif text-5xl font-semibold md:text-6xl">A jewelry wardrobe, refined</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.name.toLowerCase()}-title`
            const descId = `category-${category.name.toLowerCase()}-desc`
            return (
              <a key={category.name} href="#/shop" className="group relative aspect-[4/5] overflow-hidden bg-velmora-ink text-velmora-pearl shadow-soft">
                <img
                  alt={category.name}
                  className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                  data-strk-img-id={category.imageId}
                  data-strk-img={`[${descId}] [${titleId}] [category-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src={placeholder}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-transparent to-transparent" />
                <div className="absolute inset-x-6 bottom-6 translate-y-2 transition duration-300 group-hover:translate-y-0">
                  <h3 id={titleId} className="font-serif text-4xl font-semibold">{category.name}</h3>
                  <p id={descId} className="mt-2 text-sm leading-6 text-velmora-pearl/80 opacity-0 transition duration-300 group-hover:opacity-100">{category.description}</p>
                </div>
              </a>
            )
          })}
        </div>
      </section>

      <section id="story" className="bg-velmora-ink px-5 py-20 text-velmora-pearl md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden bg-velmora-champagne shadow-velvet">
            <img
              alt="Velmora atelier details"
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id="brand-story-atelier-s74c9f"
              data-strk-img="[story-body] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src={placeholder}
            />
          </div>
          <div className="lg:pl-12">
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Our point of view</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-7xl">
              Jewelry that whispers, never shouts.
            </h2>
            <p id="story-body" className="mt-6 max-w-xl text-base leading-8 text-velmora-pearl/78">
              Velmora designs demi-fine pieces with the warmth of heirlooms and the ease of everyday wear. Each detail is made to flatter gold, skin, silk, and the small rituals that become memory.
            </p>
            <a href="#story" className="mt-8 inline-flex items-center gap-3 border border-velmora-gold px-7 py-4 text-xs font-bold uppercase tracking-luxe text-velmora-gold transition hover:bg-velmora-gold hover:text-velmora-ink">
              Our Story <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Notes from customers</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold md:text-6xl">Quiet luxury, daily</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <figure key={review.name} className="border border-velmora-ink/10 bg-velmora-pearl p-7 shadow-soft">
              <div className="flex gap-1 text-velmora-gold" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 font-serif text-2xl font-semibold leading-snug text-velmora-ink">“{review.quote}”</blockquote>
              <figcaption className="mt-6 text-xs font-bold uppercase tracking-luxe text-velmora-cocoa">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl bg-velmora-blush px-6 py-12 text-center text-velmora-ink shadow-soft md:px-12 md:py-16">
          <p className="text-xs font-bold uppercase tracking-luxe text-velmora-cocoa">Velmora letters</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-serif text-5xl font-semibold leading-tight md:text-6xl">Join for 10% off your first order</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-velmora-cocoa">Receive styling notes, restock alerts, and small rituals for keeping your pieces luminous.</p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="min-h-14 flex-1 border border-velmora-ink/15 bg-velmora-pearl px-5 text-sm text-velmora-ink placeholder:text-velmora-cocoa focus:border-velmora-gold focus:outline-none"
            />
            <button type="submit" className="min-h-14 bg-velmora-ink px-7 text-xs font-extrabold uppercase tracking-luxe text-velmora-pearl transition hover:bg-velmora-gold hover:text-velmora-ink">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
