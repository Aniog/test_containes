import React from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, Star } from 'lucide-react'
import strkImgConfig from '../strk-img-config.json'
import { categories, products, ugcMoments } from '../data/products'
import ProductCard from '../components/products/ProductCard'
import { getStockImageUrl } from '../lib/image-url'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const testimonials = [
  {
    quote: 'The finish is beautiful and the packaging felt far more expensive than the price.',
    name: 'Marina L.',
  },
  {
    quote: 'I bought the huggies for myself and came back for two gifts the same week.',
    name: 'Arielle S.',
  },
  {
    quote: 'Quiet, polished, and easy to wear every day. Exactly what I wanted.',
    name: 'Nora K.',
  },
]

export default function Home({ onAdd, onOpenProduct }) {
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef} className="bg-velmora-ivory text-velmora-ink">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-ivory">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          data-strk-bg-id="velmora-hero-bg-a83d2e"
          data-strk-bg="[hero-image-context] [hero-subhead] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/20 via-velmora-ink/35 to-velmora-ink/85" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-3xl animate-[fadeIn_0.8s_ease-out]">
            <p id="hero-image-context" className="sr-only">
              Warm-lit close-up of gold jewelry worn on a model, refined demi-fine earrings and necklaces.
            </p>
            <p className="mb-5 text-xs font-bold uppercase tracking-velmora-wide text-velmora-gold">
              Demi-fine gold jewelry for the everyday heirloom
            </p>
            <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.95] text-velmora-ivory drop-shadow-sm sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subhead" className="mt-6 max-w-2xl text-base leading-8 text-velmora-ivory drop-shadow-sm sm:text-lg">
              Warm 18K gold-plated staples, luminous crystal accents, and gift-ready pieces designed to feel intimate, refined, and worn often.
            </p>
            <Link
              to="/shop"
              className="mt-9 inline-flex items-center gap-3 bg-velmora-gold px-7 py-4 text-sm font-extrabold uppercase tracking-velmora text-velmora-ink shadow-velmora-card transition hover:-translate-y-0.5 hover:bg-velmora-champagne"
            >
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-ink/10 bg-velmora-parchment text-velmora-ink">
        <div className="mx-auto grid max-w-7xl divide-y divide-velmora-ink/10 px-4 text-center sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trustItems.map((item) => (
            <p key={item} className="py-4 text-[0.68rem] font-extrabold uppercase tracking-velmora text-velmora-umber">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p id="bestsellers-kicker" className="text-xs font-bold uppercase tracking-velmora-wide text-velmora-gold">
              Bestsellers
            </p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ink sm:text-6xl">
              The pieces in every rotation
            </h2>
          </div>
          <Link to="/shop" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-velmora text-velmora-ink">
            View all <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} onOpen={onOpenProduct} />
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-velmora-ink py-16 text-velmora-ivory lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-velmora-wide text-velmora-gold">Worn by Velmora</p>
              <h2 className="mt-3 font-serif text-5xl font-semibold">Soft moments, real shine</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-7 text-velmora-champagne md:block">
              A reel-style edit of jewelry worn close: on the ear, at the neckline, in golden light.
            </p>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ugcMoments.map((moment) => (
              <article key={moment.id} className="group relative aspect-reel w-[68vw] max-w-[17rem] shrink-0 snap-start overflow-hidden bg-velmora-espresso sm:w-[16rem]">
                <img
                  alt={moment.caption}
                  className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  data-strk-img-id={moment.imageId}
                  data-strk-img={`[${moment.captionId}] [bestsellers-kicker]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="520"
                  src={getStockImageUrl(moment.imageId)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-transparent to-transparent" />
                <p id={moment.captionId} className="absolute inset-x-4 bottom-4 font-serif text-2xl font-medium leading-7 text-velmora-ivory">
                  {moment.caption}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-9 text-center">
          <p className="text-xs font-bold uppercase tracking-velmora-wide text-velmora-gold">Shop by Category</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ink">Find your signature glow</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.name}`}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-parchment shadow-velmora-card"
            >
              <img
                alt={category.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={category.imageId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={getStockImageUrl(category.imageId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/10 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 translate-y-2 transition duration-300 group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-4xl font-semibold text-velmora-ivory">
                  {category.name}
                </h3>
                <p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-champagne opacity-0 transition group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="bg-velmora-parchment py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative aspect-editorial overflow-hidden bg-velmora-champagne shadow-velmora-soft">
            <img
              alt="Velmora brand story"
              className="h-full w-full object-cover"
              data-strk-img-id="brand-story-image-s34e1b"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src={getStockImageUrl('brand-story-image-s34e1b')}
            />
          </div>
          <div className="lg:pl-10">
            <p className="text-xs font-bold uppercase tracking-velmora-wide text-velmora-gold">Our Story</p>
            <h2 id="story-title" className="mt-3 font-serif text-5xl font-semibold leading-tight text-velmora-ink sm:text-6xl">
              Jewelry that lives between everyday ease and keepsake meaning.
            </h2>
            <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-umber">
              Velmora was created for women who buy with intention: pieces that feel editorial, gift beautifully, and fit naturally into a life already in motion. Each design is finished in warm gold tones with comfortable details and a luminous, never-loud presence.
            </p>
            <a href="#" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-gold pb-2 text-sm font-bold uppercase tracking-velmora text-velmora-ink">
              Our Story <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="border border-velmora-ink/10 bg-velmora-ivory p-7 shadow-velmora-card">
              <div className="mb-5 flex gap-1 text-velmora-gold" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-2xl leading-8 text-velmora-ink">“{testimonial.quote}”</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-velmora text-velmora-umber">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="journal" className="bg-velmora-gold px-4 py-14 text-velmora-ink sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 text-center">
          <p className="text-xs font-extrabold uppercase tracking-velmora-wide">Private List</p>
          <h2 className="font-serif text-5xl font-semibold sm:text-6xl">Join for 10% off your first order</h2>
          <p className="mx-auto max-w-xl text-sm leading-7 text-velmora-espresso">
            Receive first access to new drops, care notes, and quiet gifting reminders.
          </p>
          <form className="mx-auto mt-2 flex w-full max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="min-h-14 flex-1 border border-velmora-ink/20 bg-velmora-ivory px-4 text-sm text-velmora-ink placeholder:text-velmora-umber/80 focus:outline-none focus:ring-2 focus:ring-velmora-ink"
            />
            <button type="submit" className="min-h-14 bg-velmora-ink px-7 text-sm font-bold uppercase tracking-velmora text-velmora-ivory transition hover:bg-velmora-espresso">
              Join
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
