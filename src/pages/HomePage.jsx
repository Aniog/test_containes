import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, Star } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { getStrkImageSrc } from '@/data/strkImages'
import strkImgConfig from '@/strk-img-config.json'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const ugcCards = [
  { id: 'ugc-ear-stack', imageId: 'ugc-ear-stack-img-f7c21', caption: 'A golden ear stack for slow mornings' },
  { id: 'ugc-neck-glow', imageId: 'ugc-neck-glow-img-f7c21', caption: 'Layered glow at the collarbone' },
  { id: 'ugc-gift', imageId: 'ugc-gift-img-f7c21', caption: 'Gift-ready pieces with heirloom energy' },
  { id: 'ugc-huggie', imageId: 'ugc-huggie-img-f7c21', caption: 'Small huggies, soft impact' },
]

const categoryTiles = [
  { label: 'Earrings', desc: 'Statement and everyday silhouettes', slug: 'earrings', imageId: 'category-earrings-img-cc922' },
  { label: 'Necklaces', desc: 'Delicate chains and crystal details', slug: 'necklaces', imageId: 'category-necklaces-img-cc922' },
  { label: 'Huggies', desc: 'Polished volume for daily wear', slug: 'huggies', imageId: 'category-huggies-img-cc922' },
]

const testimonials = [
  { quote: 'The pieces look far more expensive than they are. I wear my huggies every day.', name: 'Maya R.' },
  { quote: 'Beautiful packaging, warm gold tone, and the necklace made the perfect gift.', name: 'Elena S.' },
  { quote: 'Quiet, elegant sparkle. Exactly the kind of jewelry I wanted for work and weekends.', name: 'Claire W.' },
]

export default function HomePage({ onAddToCart }) {
  const pageRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <main ref={pageRef} className="bg-velmora-ivory text-velmora-espresso">
      <section className="relative flex min-h-hero items-end overflow-hidden pt-28 text-velmora-ivory">
        <div
          className="absolute inset-0 bg-velmora-espresso"
          data-strk-bg-id="velmora-hero-bg-model-d19e6"
          data-strk-bg="[hero-image-context] [hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/55 to-velmora-espresso/45" />
        <p id="hero-image-context" className="sr-only">warm-lit close-up of gold jewelry on a model</p>
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-3xl animate-fade-up">
            <p id="hero-eyebrow" className="mb-5 text-xs font-bold uppercase tracking-hero text-velmora-champagne">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-none text-velmora-ivory sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-2xl text-base leading-8 text-velmora-champagne sm:text-lg">
              Warm, luminous essentials made for self-purchase, gifting, and the intimate rituals of getting ready.
            </p>
            <Link
              to="/shop"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-gold px-7 py-4 text-xs font-extrabold uppercase tracking-atelier text-velmora-espresso shadow-whisper transition hover:bg-velmora-ivory"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-mink/70 bg-velmora-porcelain text-velmora-espresso">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-4 text-center sm:px-6 md:grid-cols-4 lg:px-8">
          {trustItems.map((item) => (
            <p key={item} className="px-2 py-2 text-eyebrow font-extrabold uppercase tracking-luxury text-velmora-truffle">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section id="bestsellers" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-logo text-velmora-gold">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-none text-velmora-espresso">The pieces everyone returns to.</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-luxury text-velmora-espresso hover:text-velmora-gold">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} imagePrefix="home-best" />
          ))}
        </div>
      </section>

      <section id="journal" className="overflow-hidden bg-velmora-espresso py-18 text-velmora-ivory lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-logo text-velmora-gold">Seen in the everyday</p>
              <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ivory">Reel-worthy radiance.</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-7 text-velmora-champagne md:block">
              Soft vertical stories inspired by the way our community wears gold: close, warm, and effortless.
            </p>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-4">
            {ugcCards.map((card) => (
              <article key={card.id} className="relative h-reel min-w-reel snap-start overflow-hidden rounded-3xl bg-velmora-olive shadow-whisper sm:h-reel-lg sm:min-w-reel-lg">
                <img
                  alt={card.caption}
                  className="h-full w-full object-cover"
                  data-strk-img-id={card.imageId}
                  data-strk-img={`[${card.id}-caption]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="520"
                  src={getStrkImageSrc(card.imageId)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-transparent to-transparent" />
                <p id={`${card.id}-caption`} className="absolute bottom-5 left-5 right-5 font-serif text-2xl font-semibold leading-7 text-velmora-ivory">
                  {card.caption}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-4 md:grid-cols-3">
          {categoryTiles.map((tile) => (
            <Link key={tile.label} to={`/shop?category=${tile.label}`} className="group relative aspect-portrait overflow-hidden bg-velmora-champagne text-velmora-ivory">
              <img
                alt={tile.label}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={tile.imageId}
                data-strk-img={`[category-${tile.slug}-desc] [category-${tile.slug}-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="720"
                src={getStrkImageSrc(tile.imageId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/75 via-velmora-espresso/10 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 translate-y-2 transition duration-300 group-hover:translate-y-0">
                <p id={`category-${tile.slug}-desc`} className="mb-2 text-xs font-bold uppercase tracking-luxury text-velmora-champagne opacity-90">
                  {tile.desc}
                </p>
                <h2 id={`category-${tile.slug}-title`} className="font-serif text-5xl font-semibold text-velmora-ivory">
                  {tile.label}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-blush text-velmora-espresso">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="min-h-reel overflow-hidden bg-velmora-champagne">
            <img
              alt="Velmora jewelry studio"
              className="h-full w-full object-cover"
              data-strk-img-id="brand-story-img-bb80e"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="3x2"
              data-strk-img-width="980"
              src={getStrkImageSrc('brand-story-img-bb80e')}
            />
          </div>
          <div className="flex items-center">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-logo text-velmora-gold">Our Story</p>
              <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight text-velmora-espresso lg:text-6xl">
                Fine-feeling jewelry without the fine-jewelry markup.
              </h2>
              <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-truffle">
                Velmora is made for women who buy beauty with intention. We design warm gold pieces that feel heirloom-inspired yet easy to wear, using thoughtful materials, hypoallergenic finishes, and refined proportions.
              </p>
              <a href="#" className="mt-8 inline-flex items-center gap-2 border-b border-velmora-gold pb-1 text-xs font-extrabold uppercase tracking-luxury text-velmora-espresso transition hover:text-velmora-gold">
                Our Story <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-logo text-velmora-gold">Customer notes</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-espresso">Quiet compliments, every time.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="bg-velmora-porcelain p-7 text-velmora-espresso shadow-whisper">
              <div className="flex gap-1 text-velmora-gold" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-velmora-truffle">“{review.quote}”</p>
              <p className="mt-6 text-xs font-extrabold uppercase tracking-luxury text-velmora-espresso">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-6xl bg-velmora-olive px-6 py-12 text-center text-velmora-ivory shadow-velvet sm:px-10 lg:px-16">
          <p className="text-xs font-bold uppercase tracking-logo text-velmora-gold">First access</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ivory">Join for 10% off your first order.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-velmora-champagne">
            Receive early collection previews, care notes, and rare restocks. No noise, just the good gold.
          </p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="min-h-14 flex-1 rounded-full border border-velmora-champagne/40 bg-velmora-ivory px-5 text-sm text-velmora-espresso placeholder:text-velmora-truffle focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/30"
            />
            <button type="submit" className="rounded-full bg-velmora-gold px-7 py-4 text-xs font-extrabold uppercase tracking-luxury text-velmora-espresso transition hover:bg-velmora-ivory">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
