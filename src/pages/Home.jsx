import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, Mail, Quote, Star } from 'lucide-react'
import { categories, products, ugcPosts } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'
import ImageSlot from '@/components/storefront/ImageSlot'
import ProductCard from '@/components/storefront/ProductCard'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const testimonials = [
  {
    text: 'The huggies feel weighty and refined without being precious. I wear them nearly every day.',
    name: 'Mara L.',
  },
  {
    text: 'Gift packaging was beautiful, and the necklace looked far more expensive than the price.',
    name: 'Elena R.',
  },
  {
    text: 'Quiet, warm, and polished. Exactly the kind of jewelry I reach for before a dinner out.',
    name: 'Sofia K.',
  },
]

export default function Home({ onAddToCart }) {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current) ?? (() => {})
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <main ref={containerRef} className="bg-velmora-ivory text-velmora-ink">
      <section className="velmora-hero-section relative min-h-screen overflow-hidden bg-velmora-espresso text-velmora-ivory">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 saturate-90"
          data-strk-bg-id="velmora-hero-bg-9fd27c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-velmora-espresso/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso via-velmora-espresso/78 to-velmora-espresso/20" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-velmora-espresso to-transparent" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-5 text-xs font-bold uppercase tracking-emblem text-velmora-gold">Demi-fine jewelry for everyday ceremony</p>
            <h1 id="hero-title" className="font-serifDisplay text-6xl font-medium leading-[0.9] tracking-tight text-velmora-ivory sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="velmora-hero-subhead mt-6 max-w-xl text-base leading-8 text-velmora-champagne sm:text-lg">
              Warm gold pieces, luminous crystals, and refined silhouettes made for self-purchase, gifting, and the rituals in between.
            </p>
            <Link
              to="/shop"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-gold px-8 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-ink transition hover:bg-velmora-ivory hover:text-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2 focus:ring-offset-velmora-espresso"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-hairline bg-velmora-porcelain text-velmora-ink">
        <div className="mx-auto flex max-w-7xl snap-x gap-6 overflow-x-auto px-4 py-4 text-xs font-semibold uppercase tracking-luxury text-velmora-muted sm:px-6 lg:justify-between lg:overflow-visible lg:px-8">
          {trustItems.map((item) => (
            <div key={item} className="flex shrink-0 items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-velmora-gold" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-emblem text-velmora-brass">Bestsellers</p>
            <h2 className="mt-3 font-serifDisplay text-5xl leading-none text-velmora-ink sm:text-6xl">Most Adored</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-luxury text-velmora-brass transition hover:text-velmora-ink">
            View all pieces <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />
          ))}
        </div>
      </section>

      <section id="journal" className="bg-velmora-espresso py-16 text-velmora-ivory lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-emblem text-velmora-gold">Seen in the ritual</p>
              <h2 className="mt-3 font-serifDisplay text-5xl leading-none text-velmora-ivory sm:text-6xl">Velmora Worn</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-velmora-champagne">
              A reel-inspired glimpse at golden pieces in motion: close to skin, warm in light, easy to live in.
            </p>
          </div>
          <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            {ugcPosts.map((post) => (
              <article key={post.id} className="group relative aspect-[9/16] w-64 shrink-0 snap-center overflow-hidden rounded-[1.75rem] bg-velmora-ink shadow-editorial sm:w-72">
                <ImageSlot
                  alt={post.caption}
                  className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  imgId={post.imgId}
                  query={`[${post.descId}] [${post.titleId}]`}
                  ratio="9x16"
                  width="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-ivory">
                  <p id={post.titleId} className="font-serifDisplay text-2xl leading-none">{post.caption}</p>
                  <p id={post.descId} className="mt-2 text-xs leading-5 text-velmora-champagne">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-emblem text-velmora-brass">Shop by category</p>
          <h2 className="mt-3 font-serifDisplay text-5xl leading-none text-velmora-ink sm:text-6xl">Golden Essentials</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.slug} to={`/shop?category=${category.name}`} className="group relative block aspect-[4/5] overflow-hidden bg-velmora-champagne text-velmora-ivory shadow-sm">
              <ImageSlot
                alt={category.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                imgId={category.imgId}
                query={`[${category.descId}] [${category.titleId}]`}
                ratio="3x4"
                width="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-7 transition duration-500 group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serifDisplay text-4xl leading-none text-velmora-ivory">{category.name}</h3>
                <p id={category.descId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-champagne opacity-0 transition duration-500 group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-champagne/65 py-16 text-velmora-ink lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative min-h-[440px] overflow-hidden bg-velmora-oat shadow-editorial">
            <ImageSlot
              alt="Velmora atelier story"
              className="h-full min-h-[440px] w-full object-cover"
              imgId="brand-story-atelier-gold-jewelry-b48d20"
              query="[story-copy] [story-title]"
              ratio="4x3"
              width="1100"
            />
          </div>
          <div className="lg:pl-10">
            <p className="text-xs font-bold uppercase tracking-emblem text-velmora-brass">Our Story</p>
            <h2 id="story-title" className="mt-4 font-serifDisplay text-5xl leading-[0.95] text-velmora-ink sm:text-6xl">
              Jewelry with a slower kind of shine.
            </h2>
            <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-muted">
              Velmora was created for women who want daily jewelry to feel intentional: golden, tactile, and beautifully made without the traditional fine-jewelry markup. Each piece is selected for warm radiance, wearability, and the quiet confidence of a forever favorite.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-brass pb-2 text-sm font-semibold uppercase tracking-luxury text-velmora-brass transition hover:border-velmora-ink hover:text-velmora-ink">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="border border-velmora-hairline bg-velmora-porcelain p-7 text-velmora-ink shadow-sm">
              <div className="mb-6 flex items-center justify-between text-velmora-gold">
                <div className="flex gap-1" aria-label="5 star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <Quote className="h-6 w-6" />
              </div>
              <p className="font-serifDisplay text-2xl leading-8 text-velmora-ink">“{testimonial.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-luxury text-velmora-muted">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-espresso text-velmora-ivory shadow-editorial">
          <div className="grid gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:px-14 lg:py-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-emblem text-velmora-gold">A private note</p>
              <h2 className="mt-3 font-serifDisplay text-5xl leading-none text-velmora-ivory">Join for 10% off your first order</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-champagne">
                Receive new drops, care rituals, and gift edits from the Velmora studio.
              </p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-gold" />
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="h-14 w-full rounded-full border border-velmora-ivory/20 bg-velmora-ivory/10 pl-11 pr-5 text-sm text-velmora-ivory placeholder:text-velmora-champagne focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/40"
                />
              </div>
              <button type="submit" className="h-14 rounded-full bg-velmora-gold px-7 text-xs font-bold uppercase tracking-luxury text-velmora-ink transition hover:bg-velmora-ivory">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
