import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { categories, journalPosts, products, testimonials, ugcMoments } from '../data/products'
import { useStore } from '../context/StoreContext'
import { ProductCard } from '../components/storefront/ProductCard'
import { SectionHeading } from '../components/storefront/SectionHeading'
import { StoreImage } from '../components/storefront/StoreImage'
import { StarRating } from '../components/storefront/StarRating'

const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export function HomePage() {
  const { addToCart } = useStore()
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <div ref={containerRef}>
      <section className="relative isolate overflow-hidden bg-velmora-espresso px-5 pb-14 pt-32 text-velmora-ivory sm:px-6 lg:px-10 lg:pb-20 lg:pt-36">
        <div
          className="absolute inset-0 opacity-40"
          data-strk-bg-id="hero-bg-velmora"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(203,169,108,0.28),transparent_36%),linear-gradient(180deg,rgba(38,27,23,0.2),rgba(38,27,23,0.82))]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-2xl space-y-8 py-6">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.34em] text-velmora-ivory/80 backdrop-blur">
              Premium demi-fine jewelry
            </span>
            <div className="space-y-5">
              <h1 id="hero-title" className="font-display text-6xl leading-none text-velmora-ivory sm:text-7xl lg:text-[5.5rem]">
                Crafted to be Treasured
              </h1>
              <p id="hero-subtitle" className="max-w-xl text-base leading-8 text-velmora-ivory/78 sm:text-lg">
                Warm gold jewelry with an editorial mood — designed for self-gifting, meaningful moments, and everyday polish.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-velmora-gold px-6 py-3 text-sm uppercase tracking-[0.24em] text-velmora-espresso transition duration-300 hover:-translate-y-0.5 hover:bg-velmora-ivory"
              >
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.24em] text-velmora-ivory transition duration-300 hover:bg-white/10"
              >
                Explore Bestsellers
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm">
              <StoreImage
                id="hero-model-shot"
                alt="Velmora model wearing gold jewelry"
                query="[hero-subtitle] [hero-title]"
                ratio="3x4"
                width="1000"
                className="aspect-[3/4] h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 rounded-[1.75rem] border border-white/15 bg-velmora-espresso/85 p-5 shadow-xl backdrop-blur sm:left-8">
              <p className="text-xs uppercase tracking-[0.3em] text-velmora-ivory/60">Signature finish</p>
              <p className="mt-3 font-display text-3xl text-velmora-ivory">Luminous, lightweight, gift-ready</p>
            </div>
          </div>
        </div>
      </section>

      <section id="assurance" className="border-b border-t border-velmora-line bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-4 text-center text-xs uppercase tracking-[0.32em] text-velmora-taupe sm:px-6 lg:justify-between lg:px-10">
          {trustItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-16 sm:px-6 md:py-24 lg:px-10">
        <SectionHeading
          eyebrow="Bestsellers"
          title="Collected favorites for gifting and self-purchase"
          description="A curated edit of our most-loved styles — polished silhouettes, warm gold tones, and easy everyday sparkle."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              priority={index < 2}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-velmora-line bg-velmora-champagne/35 py-16 md:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="Styled by you"
            title="A reel-inspired strip of real-life glow"
            description="Scroll through soft, vertical moments that show how Velmora lives on skin, in motion, and in the everyday."
          />
          <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
            {ugcMoments.map((moment) => {
              const titleId = `${moment.id}-title`
              const descId = `${moment.id}-desc`

              return (
                <article
                  key={moment.id}
                  className="group relative min-w-[13rem] max-w-[13rem] overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-espresso text-velmora-ivory shadow-[0_16px_40px_rgba(38,27,23,0.14)] sm:min-w-[15rem] sm:max-w-[15rem]"
                >
                  <StoreImage
                    id={`${moment.id}-image`}
                    alt={moment.title}
                    query={`[${descId}] [${titleId}]`}
                    ratio="9x16"
                    width="500"
                    className="aspect-[9/16] h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p id={titleId} className="font-display text-3xl leading-none text-velmora-ivory">
                      {moment.caption}
                    </p>
                    <p id={descId} className="mt-3 text-sm leading-6 text-velmora-ivory/76">
                      {moment.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-16 sm:px-6 md:py-24 lg:px-10">
        <SectionHeading
          eyebrow="Shop by category"
          title="Three refined ways to wear gold"
          description="Find your signature layer, statement, or everyday pair through curated category edits."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((category) => {
            const titleId = `${category.id}-tile-title`
            const descId = `${category.id}-tile-desc`

            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.label}`}
                className="group relative overflow-hidden rounded-[2.25rem] border border-velmora-line bg-velmora-espresso"
              >
                <StoreImage
                  id={`${category.id}-tile-image`}
                  alt={category.label}
                  query={`[${descId}] [${titleId}]`}
                  ratio="3x4"
                  width="900"
                  className="aspect-[3/4] h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/18 to-transparent transition duration-300 group-hover:bg-gradient-to-t group-hover:from-velmora-espresso group-hover:via-velmora-espresso/28" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <p id={titleId} className="font-display text-4xl text-velmora-ivory">
                      {category.label}
                    </p>
                    <p id={descId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-ivory/74 opacity-0 transition duration-300 group-hover:opacity-100">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section id="about" className="border-y border-velmora-line bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10">
          <div className="overflow-hidden rounded-[2.5rem] border border-velmora-line bg-velmora-champagne/45 shadow-[0_24px_70px_rgba(38,27,23,0.08)]">
            <StoreImage
              id="brand-story-image"
              alt="Velmora brand story"
              query="[story-body] [story-title]"
              ratio="3x4"
              width="1000"
              className="aspect-[3/4] h-full w-full object-cover"
            />
          </div>
          <div className="max-w-xl space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-velmora-taupe">Our story</p>
            <h2 id="story-title" className="font-display text-5xl leading-none text-velmora-espresso sm:text-6xl">
              Jewelry that feels intimate, elevated, and easy to wear.
            </h2>
            <p id="story-body" className="text-base leading-8 text-velmora-taupe">
              Velmora was imagined for women who want the feeling of fine jewelry without waiting for a special occasion. Every piece is designed around warm-toned metals, flattering silhouettes, and a quiet sense of polish that moves effortlessly from daytime to dinner.
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-velmora-espresso underline underline-offset-4 transition hover:text-velmora-gold"
            >
              Our story
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-16 sm:px-6 md:py-24 lg:px-10">
        <SectionHeading
          eyebrow="Client love"
          title="Warm reviews from women who wear Velmora daily"
          description="Thoughtful design, gift-ready details, and an easy premium feel — reflected in every customer note."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="rounded-[2rem] border border-velmora-line bg-white p-7 text-velmora-espresso shadow-[0_16px_40px_rgba(38,27,23,0.06)]"
            >
              <StarRating rating={5} light={false} />
              <p className="mt-5 font-display text-3xl leading-9 text-velmora-espresso">“{item.quote}”</p>
              <p className="mt-6 text-sm uppercase tracking-[0.26em] text-velmora-taupe">{item.author}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="newsletter" className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-6 md:pb-24 lg:px-10">
        <div className="overflow-hidden rounded-[2.5rem] bg-velmora-espresso px-6 py-10 text-velmora-ivory shadow-[0_26px_60px_rgba(38,27,23,0.18)] sm:px-8 lg:px-12 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs uppercase tracking-[0.32em] text-velmora-ivory/65">Private list</p>
              <h2 className="font-display text-4xl leading-none text-velmora-ivory sm:text-5xl">
                Join for 10% off your first order
              </h2>
              <p className="text-sm leading-7 text-velmora-ivory/74 sm:text-base">
                Be first to see limited drops, styling notes, and curated gifting edits. No noise — only thoughtful arrivals.
              </p>
            </div>
            <form className="grid gap-3 sm:grid-cols-[minmax(16rem,1fr)_auto]">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-velmora-ivory placeholder:text-velmora-ivory/50 focus:border-velmora-gold focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-velmora-gold px-6 py-3 text-sm uppercase tracking-[0.24em] text-velmora-espresso transition duration-300 hover:bg-velmora-ivory"
              >
                Join now
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="journal" className="border-t border-velmora-line bg-velmora-champagne/35 py-16 md:py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="Journal"
            title="Editorial notes on gifting, layering, and styling"
            description="A quiet corner for styling inspiration and thoughtful product stories."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {journalPosts.map((post) => (
              <article key={post.id} className="rounded-[2rem] border border-velmora-line bg-white p-6 text-velmora-espresso">
                <p className="text-xs uppercase tracking-[0.3em] text-velmora-taupe">{post.category}</p>
                <h3 className="mt-4 font-display text-3xl leading-tight text-velmora-espresso">{post.title}</h3>
                <a href="#journal" className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-velmora-espresso underline underline-offset-4">
                  Read more
                  <ChevronRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
