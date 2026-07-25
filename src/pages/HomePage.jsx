import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const getImageUrl = (imageId) => strkImgConfig?.[imageId]?.results?.[0]?.url || ''

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const ugcCards = [
  { id: 'morning-stack', caption: 'The morning stack that makes a white shirt feel finished.' },
  { id: 'golden-hour', caption: 'Golden hour glow, layered at the collarbone.' },
  { id: 'dinner-huggies', caption: 'Chunky huggies for dinner plans and every day after.' },
  { id: 'soft-gifting', caption: 'A little velvet box, a very memorable yes.' },
  { id: 'ear-cuff', caption: 'A crystal cuff moment with no piercing required.' },
]

const categoryTiles = [
  {
    name: 'Earrings',
    copy: 'Drops, cuffs, and polished everyday pairs.',
    imgId: 'category-earrings-img-71ac22',
    titleId: 'category-earrings-title',
    copyId: 'category-earrings-copy',
  },
  {
    name: 'Necklaces',
    copy: 'Pendant layers that catch warm light.',
    imgId: 'category-necklaces-img-090cb6',
    titleId: 'category-necklaces-title',
    copyId: 'category-necklaces-copy',
  },
  {
    name: 'Huggies',
    copy: 'Sculptural curves made for daily wear.',
    imgId: 'category-huggies-img-c72d14',
    titleId: 'category-huggies-title',
    copyId: 'category-huggies-copy',
  },
]

const testimonials = [
  { name: 'Mara L.', quote: 'The finish looks far more expensive than the price. I wear my huggies almost daily.' },
  { name: 'Elena R.', quote: 'The packaging was beautiful and the necklace felt personal, polished, and gift-ready.' },
  { name: 'Simone K.', quote: 'Quiet, elegant pieces that layer beautifully without feeling trend-heavy.' },
]

export default function HomePage({ onAddToCart }) {
  const pageRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      const result = ImageHelper.loadImages(strkImgConfig, pageRef.current)
      if (typeof result === 'function') cleanup = result
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <main ref={pageRef} className="bg-velmora-ivory text-velmora-charcoal">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-ivory">
        <div
          className="absolute inset-0 opacity-70"
          data-strk-bg-id="velmora-hero-bg-a81e7d"
          data-strk-bg="[hero-subhead] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink via-velmora-ink/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-velmora-ink to-transparent" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28">
          <div className="max-w-2xl animate-fade-up">
            <p className="mb-5 text-xs font-bold uppercase tracking-wide-luxury text-velmora-gold">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.95] text-velmora-ivory sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subhead" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory/82 sm:text-lg">
              Warm, light-catching pieces for gifting, self-purchase, and the everyday rituals worth keeping.
            </p>
            <Link to="/shop" className="mt-9 inline-flex items-center gap-3 bg-velmora-gold px-7 py-4 text-xs font-extrabold uppercase tracking-wide-luxury text-velmora-ink transition duration-300 hover:-translate-y-0.5 hover:bg-velmora-ivory">
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-y border-velmora-line bg-velmora-porcelain px-5 py-3 text-velmora-charcoal sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto whitespace-nowrap text-[11px] font-bold uppercase tracking-luxury text-velmora-muted md:justify-center md:gap-12 md:overflow-visible">
          {trustItems.map((item) => (
            <span key={item} className="snap-start">{item}</span>
          ))}
        </div>
      </div>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide-luxury text-velmora-brass">Most loved</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-charcoal md:text-6xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide-luxury text-velmora-brass transition hover:text-velmora-ink">
            View all pieces <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} slotPrefix="bestseller" />
          ))}
        </div>
      </section>

      <section id="journal" className="border-y border-velmora-line bg-velmora-ink py-16 text-velmora-ivory md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide-luxury text-velmora-gold">Velmora notes</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Worn in the wild</h2>
            </div>
            <p className="hidden max-w-xs text-sm leading-6 text-velmora-ivory/65 md:block">A reel-inspired strip of warm gold, soft light, and real styling ideas.</p>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-3">
            {ugcCards.map((card) => {
              const imageId = `ugc-${card.id}-img`

              return (
                <article key={card.id} className="group relative aspect-reel w-56 shrink-0 snap-start overflow-hidden bg-velmora-espresso shadow-jewel sm:w-64">
                  <img
                    className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    alt={card.caption}
                    data-strk-img-id={imageId}
                    data-strk-img={`[ugc-${card.id}-caption]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="500"
                    src={getImageUrl(imageId)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-transparent to-transparent" />
                  <p id={`ugc-${card.id}-caption`} className="absolute bottom-4 left-4 right-4 font-serif text-xl leading-6 text-velmora-ivory">
                    {card.caption}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-wide-luxury text-velmora-brass">Shop by category</p>
          <h2 id="category-section-title" className="mt-3 font-serif text-5xl font-semibold text-velmora-charcoal md:text-6xl">Your signature, in gold</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categoryTiles.map((tile) => (
            <Link key={tile.name} to={`/shop?category=${tile.name}`} className="group relative aspect-editorial overflow-hidden bg-velmora-porcelain shadow-soft-jewel">
              <img
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                alt={tile.name}
                data-strk-img-id={tile.imgId}
                data-strk-img={`[${tile.copyId}] [${tile.titleId}] [category-section-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={getImageUrl(tile.imgId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-velmora-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 text-velmora-ivory transition duration-300 group-hover:translate-y-0 md:p-8">
                <h3 id={tile.titleId} className="font-serif text-4xl font-semibold">{tile.name}</h3>
                <p id={tile.copyId} className="mt-2 max-h-0 overflow-hidden text-sm leading-6 text-velmora-ivory/78 transition-all duration-300 group-hover:max-h-20">
                  {tile.copy}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-porcelain px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="aspect-editorial overflow-hidden bg-velmora-blush shadow-jewel">
            <img
              className="h-full w-full object-cover"
              alt="Velmora jewelry editorial still life"
              data-strk-img-id="brand-story-img-8bb241"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              src={getImageUrl('brand-story-img-8bb241')}
            />
          </div>
          <div className="max-w-xl text-velmora-charcoal lg:pl-10">
            <p className="text-xs font-bold uppercase tracking-wide-luxury text-velmora-brass">Our point of view</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-6xl">Fine feeling. Everyday ease.</h2>
            <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-muted">
              Velmora is designed for women who want jewelry that feels considered, warm, and lasting without the traditional fine-jewelry markup. Each piece balances sculptural gold forms with wearable comfort and gift-worthy detail.
            </p>
            <Link to="/#story" className="mt-8 inline-flex items-center gap-3 border border-velmora-brass px-7 py-3 text-xs font-bold uppercase tracking-wide-luxury text-velmora-charcoal transition hover:bg-velmora-brass hover:text-velmora-ivory">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-line bg-velmora-ivory p-7 text-velmora-charcoal shadow-soft-jewel">
              <div className="mb-5 flex gap-1 text-velmora-gold" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="font-serif text-2xl leading-8 text-velmora-charcoal">“{review.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-wide-luxury text-velmora-muted">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 bg-velmora-blush p-8 text-velmora-charcoal shadow-jewel md:grid-cols-[1.1fr_0.9fr] md:p-12 lg:p-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide-luxury text-velmora-brass">Private list</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-tight md:text-6xl">Join for 10% off your first order</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-muted">Receive new drops, styling notes, and gifting edits from the Velmora studio.</p>
          </div>
          <form className="flex flex-col justify-end gap-3 sm:flex-row md:flex-col lg:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" required placeholder="Email address" className="min-h-14 flex-1 border border-velmora-line bg-velmora-ivory px-5 text-sm text-velmora-charcoal outline-none transition placeholder:text-velmora-muted focus:border-velmora-brass" />
            <button type="submit" className="inline-flex min-h-14 items-center justify-center gap-2 bg-velmora-ink px-7 text-xs font-extrabold uppercase tracking-wide-luxury text-velmora-ivory transition hover:bg-velmora-brass">
              <Mail className="h-4 w-4" /> Join
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
