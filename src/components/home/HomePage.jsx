import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, Mail, Star } from 'lucide-react'
import { useEffect, useRef } from 'react'
import strkImgConfig from '../../strk-img-config.json'
import { categories, products, testimonials, ugcItems } from '../../data/products.js'
import ProductCard from '../products/ProductCard.jsx'
import ProductImage from '../products/ProductImage.jsx'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'/%3E'

function SectionIntro({ eyebrow, title, copy, dark = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.28em] ${dark ? 'text-velmora-champagne' : 'text-velmora-taupe'}`}>{eyebrow}</p>
      <h2 className={`font-serifDisplay text-4xl font-semibold leading-tight sm:text-5xl ${dark ? 'text-velmora-ivory' : 'text-velmora-espresso'}`}>{title}</h2>
      {copy && <p className={`mt-4 text-sm leading-7 sm:text-base ${dark ? 'text-velmora-ivory/72' : 'text-velmora-taupe'}`}>{copy}</p>}
    </div>
  )
}

export default function HomePage({ onAddToCart }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef} className="bg-velmora-ivory text-velmora-espresso">
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-velmora-espresso pt-28 text-velmora-ivory">
        <div
          className="absolute inset-0 opacity-75"
          data-strk-bg-id="hero-gold-jewelry-model-9f3a"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/45 to-velmora-espresso/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="max-w-3xl animate-fadeUp">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-velmora-champagne">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serifDisplay text-6xl font-semibold leading-[0.92] text-velmora-ivory sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory/78 sm:text-lg">
              Warm, editorial pieces made for quiet rituals, memorable gifts, and the everyday glow of 18K gold plated jewelry.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-3 bg-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-ivory">
              Shop the Collection <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-espresso/10 bg-velmora-espresso px-5 py-4 text-velmora-ivory sm:px-8">
        <div className="mx-auto flex max-w-7xl snap-x gap-6 overflow-x-auto text-nowrap text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ivory/84 lg:justify-center lg:gap-10">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
            <span key={item} className="snap-start">{item}</span>
          ))}
        </div>
      </section>

      <section id="bestsellers" className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">Bestsellers</p>
              <h2 className="font-serifDisplay text-4xl font-semibold text-velmora-espresso sm:text-5xl">Beloved for a reason</h2>
            </div>
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-champagne">
              Shop all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-velmora-sand px-5 py-16 text-velmora-espresso sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Worn by you" title="A reel of golden moments" copy="Styled in real rituals: coffee runs, anniversaries, layered necklines, and quiet nights out." />
          <div className="flex snap-x gap-4 overflow-x-auto pb-4">
            {ugcItems.map((item) => (
              <article key={item.id} className="group relative aspect-[9/16] min-w-[210px] snap-start overflow-hidden bg-velmora-espresso shadow-velmoraSoft sm:min-w-[250px]">
                <img
                  src={placeholder}
                  alt={item.caption}
                  data-strk-img-id={item.imageId}
                  data-strk-img={`[${item.titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="520"
                  className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/78 via-transparent to-transparent" />
                <p id={item.titleId} className="absolute bottom-5 left-5 right-5 font-serifDisplay text-2xl font-semibold leading-tight text-velmora-ivory">
                  {item.caption}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Curated edits" title="Shop by category" copy="Choose the silhouette that becomes your signature." />
          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.id} to={`/shop?category=${category.name}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-espresso text-velmora-ivory shadow-velmoraSoft">
                <img
                  src={placeholder}
                  alt={category.name}
                  data-strk-img-id={category.imageId}
                  data-strk-img={`[${category.descId}] [${category.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/82 via-velmora-espresso/10 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 translate-y-2 transition duration-500 group-hover:translate-y-0">
                  <h3 id={category.titleId} className="font-serifDisplay text-4xl font-semibold text-velmora-ivory">{category.name}</h3>
                  <p id={category.descId} className="mt-2 text-sm uppercase tracking-[0.2em] text-velmora-ivory/72 opacity-0 transition duration-500 group-hover:opacity-100">{category.caption}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="bg-velmora-espresso px-5 py-16 text-velmora-ivory sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand shadow-velmoraLift lg:aspect-[5/4]">
            <img
              src={placeholder}
              alt="Velmora artisan gold jewelry details"
              data-strk-img-id="brand-story-jewelry-worktable-7d2e"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              className="h-full w-full object-cover opacity-90"
            />
          </div>
          <div className="lg:pl-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-champagne">Velmora codes</p>
            <h2 id="story-title" className="font-serifDisplay text-5xl font-semibold leading-tight text-velmora-ivory sm:text-6xl">Jewelry for the in-between occasions.</h2>
            <p id="story-copy" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory/72">
              We design demi-fine pieces that feel special without waiting for a milestone. Gold warmth, skin-friendly finishes, graceful silhouettes, and packaging made for gifting.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border border-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-champagne transition hover:bg-velmora-champagne hover:text-velmora-espresso">
              Our Story <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Notes from customers" title="Soft shine, lasting love" />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((review) => (
              <article key={review.id} className="border border-velmora-espresso/10 bg-velmora-ivory p-7 text-velmora-espresso shadow-velmoraSoft">
                <div className="mb-5 flex gap-1 text-velmora-champagne" aria-label="5 star review">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}
                </div>
                <p className="font-serifDisplay text-2xl font-semibold leading-8 text-velmora-espresso">“{review.quote}”</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-taupe">{review.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 bg-velmora-sand p-7 text-velmora-espresso sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-14">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">Private list</p>
            <h2 className="font-serifDisplay text-4xl font-semibold leading-tight text-velmora-espresso sm:text-5xl">Join for 10% off your first order</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-taupe">Receive quiet styling notes, restock alerts, and early access to limited edits.</p>
          </div>
          <form className="flex flex-col gap-3 self-end sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-velmora-taupe" size={18} />
              <input id="newsletter-email" type="email" required placeholder="you@example.com" className="h-14 w-full border border-velmora-espresso/15 bg-velmora-ivory pl-12 pr-4 text-sm text-velmora-espresso placeholder:text-velmora-taupe/80 outline-none transition focus:border-velmora-champagne" />
            </div>
            <button type="submit" className="h-14 bg-velmora-espresso px-7 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-champagne hover:text-velmora-espresso">
              Join
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
