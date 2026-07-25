import { useEffect, useRef } from 'react'
import { ArrowRight, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import SectionHeading from '@/components/storefront/SectionHeading.jsx'
import { categories, products } from '@/data/products.js'
import { getStrkBackgroundStyle, getStrkImageUrl } from '@/lib/strk-image-utils.js'
import strkImgConfig from '@/strk-img-config.json'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const ugcCards = [
  {
    id: 'golden-hour-ear-stack',
    caption: 'Golden hour ear stack',
    detail: 'Gold huggies and ear cuff worn on model in warm light',
  },
  {
    id: 'collarbone-glow',
    caption: 'A little collarbone glow',
    detail: 'Delicate crystal necklace layered on neutral silk styling',
  },
  {
    id: 'gift-unboxing',
    caption: 'Gift-ready rituals',
    detail: 'Fine jewelry gift box with gold earrings and soft ribbon',
  },
  {
    id: 'everyday-huggies',
    caption: 'Everyday huggies, elevated',
    detail: 'Chunky gold dome huggies worn with minimal makeup',
  },
  {
    id: 'soft-evening-shine',
    caption: 'Soft evening shine',
    detail: 'Gold drop earrings styled for dinner with warm editorial lighting',
  },
]

const testimonials = [
  {
    quote: 'The finish looks so expensive, but I wear them every day without feeling precious about it.',
    name: 'Maya R.',
  },
  {
    quote: 'I bought the set as a birthday gift and the packaging made it feel truly special.',
    name: 'Elena W.',
  },
  {
    quote: 'Beautiful for sensitive ears. The huggies are comfortable enough to forget they are on.',
    name: 'Priya S.',
  },
]

export default function HomePage({ onAddToCart, onViewProduct, navigate }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef} id="top" className="bg-velmora-ivory text-velmora-espresso">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-pearl">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          data-strk-bg-id="velmora-hero-bg-c42f91"
          data-strk-bg="[hero-subhead] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
          style={getStrkBackgroundStyle('velmora-hero-bg-c42f91')}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/25 via-velmora-espresso/25 to-velmora-espresso/80" />
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-20 pt-32 md:px-8 md:pb-28">
          <div className="max-w-3xl animate-fadeUp">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-velmora-champagne">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serifDisplay text-6xl font-medium leading-[0.92] text-velmora-pearl md:text-8xl lg:text-9xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subhead" className="mt-7 max-w-xl text-base leading-8 text-velmora-champagne md:text-lg">
              Warm gold, luminous crystals, and gift-ready pieces designed for every quiet ritual of adornment.
            </p>
            <button
              type="button"
              onClick={() => navigate('shop')}
              className="mt-9 inline-flex items-center gap-3 bg-velmora-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-pearl shadow-soft transition duration-300 hover:bg-velmora-bronze"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-champagne bg-velmora-pearl text-velmora-espresso">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-4 text-center text-[0.68rem] font-bold uppercase tracking-[0.22em] md:grid-cols-4 md:px-8">
          {trustItems.map((item) => (
            <div key={item} className="px-3 py-2 text-velmora-ink/75">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Bestsellers"
          title="Made for golden routines"
          copy="Five signature pieces with the glow of fine jewelry and the ease of pieces you will actually wear."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewProduct={onViewProduct}
              compact
            />
          ))}
        </div>
      </section>

      <section id="journal" className="bg-velmora-espresso py-20 text-velmora-pearl md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Seen on you</p>
              <h2 id="ugc-section-title" className="mt-3 font-serifDisplay text-4xl font-medium leading-tight text-velmora-pearl md:text-6xl">
                Soft-focus moments
              </h2>
            </div>
            <p id="ugc-section-copy" className="max-w-md text-sm leading-7 text-velmora-champagne">
              Reel-style inspiration for ear stacks, collarbone layers, and giftable glow.
            </p>
          </div>

          <div className="no-scrollbar mt-10 flex gap-5 overflow-x-auto pb-3">
            {ugcCards.map((card) => {
              const captionId = `ugc-${card.id}-caption`
              const detailId = `ugc-${card.id}-detail`
              const imageId = `ugc-card-${card.id}-8f1a`
              return (
                <article key={card.id} className="group relative min-w-[220px] overflow-hidden bg-velmora-ink shadow-editorial sm:min-w-[260px]">
                  <img
                    alt={card.caption}
                    className="aspect-[9/16] w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    data-strk-img-id={imageId}
                    data-strk-img={`[${detailId}] [${captionId}] [ugc-section-copy] [ugc-section-title]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="520"
                    src={getStrkImageUrl(imageId)}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/70 to-transparent p-5 pt-16">
                    <p id={detailId} className="sr-only">{card.detail}</p>
                    <h3 id={captionId} className="font-serifDisplay text-2xl font-medium text-velmora-pearl">
                      {card.caption}
                    </h3>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Shop by category" title="Find your signature shine" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const categorySlug = category.toLowerCase()
            const titleId = `category-${categorySlug}-title`
            const copyId = `category-${categorySlug}-copy`
            const imageId = `category-${categorySlug}-jewelry-41d7`
            return (
              <button
                key={category}
                type="button"
                onClick={() => navigate('shop')}
                className="group relative overflow-hidden bg-velmora-champagne text-left shadow-soft"
              >
                <img
                  alt={`${category} jewelry`}
                  className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={imageId}
                  data-strk-img={`[${copyId}] [${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="700"
                  src={getStrkImageUrl(imageId)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition duration-300 group-hover:translate-y-0">
                  <p id={copyId} className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">
                    Warm gold essentials
                  </p>
                  <h3 id={titleId} className="mt-2 font-serifDisplay text-4xl font-medium text-velmora-pearl">
                    {category}
                  </h3>
                </div>
              </button>
            )
          })}
        </div>
      </section>

      <section id="about" className="bg-velmora-blush/60 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center md:px-8">
          <div className="overflow-hidden bg-velmora-champagne shadow-editorial">
            <img
              alt="Velmora atelier story"
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id="brand-story-atelier-6b9d"
              data-strk-img="[brand-story-copy] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src={getStrkImageUrl('brand-story-atelier-6b9d')}
            />
          </div>
          <div className="md:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Our philosophy</p>
            <h2 id="brand-story-title" className="mt-4 font-serifDisplay text-5xl font-medium leading-tight text-velmora-espresso md:text-7xl">
              Fine feeling, everyday intention.
            </h2>
            <p id="brand-story-copy" className="mt-6 text-base leading-8 text-velmora-ink/75">
              Velmora creates demi-fine gold jewelry that feels personal before it feels precious. Each piece is designed in small, luminous silhouettes for gifting, self-celebration, and the private rituals that make a day feel considered.
            </p>
            <a
              href="#top"
              className="mt-8 inline-flex items-center gap-3 border-b border-velmora-gold pb-2 text-xs font-bold uppercase tracking-[0.26em] text-velmora-bronze transition hover:text-velmora-espresso"
            >
              Our Story
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Reviews" title="Quietly adored" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-champagne bg-velmora-pearl p-7 text-velmora-espresso shadow-soft">
              <div className="flex gap-1 text-velmora-gold" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 font-serifDisplay text-2xl leading-9 text-velmora-espresso">“{review.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 bg-velmora-espresso px-6 py-12 text-velmora-pearl shadow-editorial md:grid-cols-[1.2fr_1fr] md:items-center md:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Velmora Notes</p>
            <h2 className="mt-4 font-serifDisplay text-4xl font-medium leading-tight text-velmora-pearl md:text-6xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-champagne">
              Early access to new drops, gift edits, and care rituals for your favorite pieces.
            </p>
          </div>
          <form className="grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="min-h-14 border border-velmora-sand/40 bg-velmora-pearl px-5 text-sm text-velmora-espresso placeholder:text-velmora-ink/55"
            />
            <button
              type="submit"
              className="min-h-14 bg-velmora-gold px-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-pearl transition hover:bg-velmora-bronze"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
