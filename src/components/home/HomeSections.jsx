import { ArrowRight, Mail, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories, products, ugcPosts } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-pearl">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-b89f32"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso via-velmora-espresso/65 to-velmora-espresso/20" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-velmora-espresso/80 to-transparent" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.92] text-velmora-pearl sm:text-7xl md:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory md:text-lg">
            Warm gold essentials, sculptural huggies, and gift-ready keepsakes made for every day and every milestone.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-champagne px-7 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso shadow-glow transition hover:bg-velmora-pearl"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function TrustBar() {
  return (
    <section className="border-b border-velmora-taupe/60 bg-velmora-pearl text-velmora-espresso">
      <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-5 py-4 text-xs font-bold uppercase tracking-[0.2em] sm:px-8 md:justify-center md:gap-12">
        {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
          <span key={item} className="shrink-0 text-velmora-cocoa">{item}</span>
        ))}
      </div>
    </section>
  )
}

export function Bestsellers({ onAddToCart }) {
  return (
    <section id="bestsellers" className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-velmora-taupe/60 pb-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl leading-tight md:text-6xl">The pieces she reaches for.</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-gold">
            View all pieces <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function UgcReels() {
  return (
    <section id="journal" className="bg-velmora-espresso py-16 text-velmora-pearl md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-9 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Seen in warm light</p>
            <h2 className="mt-3 font-serif text-5xl md:text-6xl">Real styling, refined glow.</h2>
          </div>
        </div>
        <div className="hide-scrollbar flex snap-x gap-5 overflow-x-auto pb-2">
          {ugcPosts.map((post) => (
            <article key={post.id} className="group relative aspect-[9/16] w-64 shrink-0 snap-start overflow-hidden bg-velmora-cocoa md:w-72">
              <img
                alt={post.caption}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={post.imgId}
                data-strk-img={`[${post.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={placeholder}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/75 via-transparent to-transparent" />
              <p id={post.titleId} className="absolute bottom-5 left-5 right-5 font-serif text-3xl leading-none text-velmora-pearl">
                {post.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CategoryTiles() {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-9 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl md:text-6xl">Find your signature shine.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.label}`} className="group relative min-h-[430px] overflow-hidden bg-velmora-blush shadow-sm">
              <img
                alt={`${category.label} collection`}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={placeholder}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/75 via-velmora-espresso/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-velmora-pearl transition duration-500 group-hover:translate-y-[-6px]">
                <h3 id={category.titleId} className="font-serif text-5xl">{category.label}</h3>
                <p id={category.descId} className="mt-3 text-sm leading-6 text-velmora-ivory">{category.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em]">
                  Shop now <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BrandStory() {
  return (
    <section id="story" className="bg-velmora-pearl py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[520px] overflow-hidden bg-velmora-blush shadow-soft">
          <img
            alt="Velmora fine jewelry studio detail"
            className="h-full min-h-[520px] w-full object-cover"
            data-strk-img-id="brand-story-image-e27c4a"
            data-strk-img="[brand-story-copy] [brand-story-title]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            src={placeholder}
          />
        </div>
        <div className="lg:pl-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Our Story</p>
          <h2 id="brand-story-title" className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
            Gold pieces for the rituals between occasions.
          </h2>
          <p id="brand-story-copy" className="mt-6 text-base leading-8 text-velmora-cocoa md:text-lg">
            Velmora was created for women who collect meaning, not clutter. Each piece balances polished demi-fine materials with quiet silhouettes, designed to feel personal from the first wear.
          </p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-gold pb-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-gold">
            Our Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const reviews = [
    ['The huggies look far more expensive than they are. They have become my every day pair.', 'Nina R.'],
    ['Beautiful packaging, warm gold tone, and the necklace layers perfectly with everything.', 'Amelia S.'],
    ['I bought the set as a gift and kept one for myself. Elegant without trying too hard.', 'Claire M.'],
  ]

  return (
    <section className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map(([quote, name]) => (
            <figure key={name} className="border border-velmora-taupe/60 bg-velmora-pearl p-7 shadow-sm">
              <div className="flex gap-1 text-velmora-gold" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 font-serif text-2xl leading-9 text-velmora-espresso">“{quote}”</blockquote>
              <figcaption className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-cocoa">{name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Newsletter() {
  return (
    <section className="bg-velmora-ivory px-5 pb-16 sm:px-8 md:pb-24">
      <div className="mx-auto grid max-w-7xl gap-8 bg-velmora-blush p-7 text-velmora-espresso md:grid-cols-[1.2fr_1fr] md:p-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">First access</p>
          <h2 className="mt-3 font-serif text-5xl leading-tight md:text-6xl">Join for 10% off your first order.</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-cocoa">
            Receive new drops, styling notes, and gifting reminders from the Velmora studio.
          </p>
        </div>
        <form className="flex flex-col justify-end gap-3 sm:flex-row md:flex-col lg:flex-row" onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-cocoa" />
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="h-14 w-full border border-velmora-taupe bg-velmora-pearl pl-11 pr-4 text-sm text-velmora-espresso placeholder:text-velmora-cocoa focus:border-velmora-gold focus:outline-none"
            />
          </div>
          <button type="submit" className="h-14 rounded-full bg-velmora-espresso px-7 text-xs font-bold uppercase tracking-[0.24em] text-velmora-pearl transition hover:bg-velmora-gold hover:text-velmora-espresso">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  )
}
