import { useRef, useState } from 'react'
import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import Button from '@/components/ui/Button'
import { products } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const ugcCards = [
  { id: 'morning-huggies', caption: 'Morning light, golden huggies' },
  { id: 'neck-stack', caption: 'A soft necklace stack for dinner' },
  { id: 'gift-moment', caption: 'Unboxing a little heirloom' },
  { id: 'ear-party', caption: 'Everyday ear cuff ritual' },
  { id: 'floral-glow', caption: 'Crystal florals after dark' },
]

const categoryTiles = [
  { id: 'earrings', label: 'Earrings', desc: 'Polished drops, cuffs, and subtle shine.' },
  { id: 'necklaces', label: 'Necklaces', desc: 'Soft chains and luminous accents.' },
  { id: 'huggies', label: 'Huggies', desc: 'Rounded everyday gold essentials.' },
]

const testimonials = [
  { quote: 'The huggies feel substantial without being heavy. I wear them nearly every day.', name: 'Maya R.' },
  { quote: 'Beautiful packaging, warm gold tone, and the necklace looks far more expensive than it is.', name: 'Lauren K.' },
  { quote: 'Bought the set as a birthday gift and immediately ordered cuffs for myself.', name: 'Nina S.' },
]

export default function Home({ onAddToCart }) {
  const containerRef = useRef(null)
  const [joined, setJoined] = useState(false)
  useStrkImages(containerRef, [joined])

  return (
    <main ref={containerRef} className="bg-velmora-cream text-velmora-espresso">
      <section className="relative min-h-screen overflow-hidden bg-velmora-espresso text-velmora-ivory">
        <div
          className="hero-bg-layer absolute inset-0"
          data-strk-bg-id="home-hero-bg-0f1e9a"
          data-strk-bg="[hero-kicker] [hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/20 via-transparent to-velmora-espresso/65" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-24">
          <div className="fade-up max-w-3xl">
            <p id="hero-kicker" className="mb-5 text-xs font-semibold uppercase tracking-luxury text-velmora-champagne">Warm-lit gold jewelry on a model</p>
            <h1 id="hero-title" className="font-serif text-5xl leading-[0.95] text-velmora-ivory sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-sand sm:text-lg">
              Warm, enduring pieces for quiet rituals, thoughtful gifting, and every version of your daily glow.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button as={Link} to="/shop">Shop the Collection</Button>
              <Button as="a" href="#bestsellers" variant="light" className="bg-velmora-ivory/10 text-velmora-ivory backdrop-blur hover:bg-velmora-ivory hover:text-velmora-espresso">
                Explore Bestsellers
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-velmora-sand bg-velmora-ivory text-velmora-espresso">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-5 py-4 text-center text-[0.68rem] font-semibold uppercase tracking-editorial sm:px-8 lg:px-10">
          {trustItems.map((item, index) => (
            <span key={item} className="flex items-center gap-5 text-velmora-ink/80">
              {item}
              {index < trustItems.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-velmora-taupe sm:inline-block" />}
            </span>
          ))}
        </div>
      </div>

      <section id="bestsellers" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-gold">Most loved</p>
            <h2 id="product-grid-heading" className="mt-3 font-serif text-4xl text-velmora-espresso sm:text-5xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-editorial text-velmora-espresso transition hover:text-velmora-gold">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAddToCart} scope="home" />
          ))}
        </div>
      </section>

      <section id="journal" className="border-y border-velmora-sand bg-velmora-ivory py-14 text-velmora-espresso lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-gold">Worn by Velmora</p>
              <h2 id="ugc-heading" className="mt-3 font-serif text-4xl text-velmora-espresso">Quiet shine in motion</h2>
            </div>
            <p className="hidden max-w-xs text-sm leading-6 text-velmora-ink/70 md:block">A reel-style glimpse of soft gold, warm skin, and pieces that move with you.</p>
          </div>
          <div className="luxury-scroll flex gap-4 overflow-x-auto pb-4">
            {ugcCards.map((card) => {
              const captionId = `ugc-${card.id}-caption`
              return (
                <article key={card.id} className="group relative aspect-[9/16] min-w-[210px] overflow-hidden rounded-t-full bg-velmora-sand shadow-soft sm:min-w-[260px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    data-strk-bg-id={`ugc-${card.id}-bg-3e8f`}
                    data-strk-bg={`[${captionId}] [ugc-heading]`}
                    data-strk-bg-ratio="9x16"
                    data-strk-bg-width="520"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/70 via-transparent to-transparent" />
                  <p id={captionId} className="absolute inset-x-5 bottom-5 font-serif text-2xl leading-tight text-velmora-ivory">{card.caption}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-9 text-center">
          <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-gold">Browse the edit</p>
          <h2 id="category-heading" className="mt-3 font-serif text-4xl text-velmora-espresso sm:text-5xl">Shop by Category</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categoryTiles.map((tile) => {
            const titleId = `category-${tile.id}-title`
            const descId = `category-${tile.id}-desc`
            return (
              <Link key={tile.id} to={`/shop?category=${tile.label}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-sand text-velmora-ivory">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  data-strk-bg-id={`category-${tile.id}-bg-1c7d`}
                  data-strk-bg={`[${descId}] [${titleId}] [category-heading]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/70 via-velmora-espresso/10 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 translate-y-2 transition duration-300 group-hover:translate-y-0">
                  <h3 id={titleId} className="font-serif text-4xl text-velmora-ivory">{tile.label}</h3>
                  <p id={descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-sand opacity-100 md:opacity-0 md:transition md:group-hover:opacity-100">{tile.desc}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section id="story" className="bg-velmora-espresso text-velmora-ivory">
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden bg-velmora-ink">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-strk-bg-id="story-image-b83d"
              data-strk-bg="[story-copy] [story-heading]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1100"
              role="img"
              aria-label="Velmora jewelry atelier moment"
            />
          </div>
          <div className="flex items-center px-5 py-14 sm:px-8 lg:px-16">
            <div className="max-w-lg">
              <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-champagne">Velmora philosophy</p>
              <h2 id="story-heading" className="mt-4 font-serif text-4xl leading-tight text-velmora-ivory sm:text-5xl">Jewelry that feels inherited, priced for now.</h2>
              <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-sand">
                We design demi-fine gold jewelry with the restraint of heirloom pieces and the ease of everyday wear. Each Velmora style is selected for warmth, comfort, and a sense of quiet permanence.
              </p>
              <Link to="/shop" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-editorial text-velmora-champagne transition hover:text-velmora-ivory">
                Our Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-gold">Notes from customers</p>
          <h2 className="mt-3 font-serif text-4xl text-velmora-espresso">Soft-spoken sparkle, highly praised.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="border border-velmora-sand bg-velmora-ivory p-7 text-velmora-espresso shadow-[0_14px_45px_rgba(33,26,22,0.04)]">
              <div className="flex gap-1 text-velmora-gold" aria-label="5 star rating">
                {[...Array(5)].map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-5 text-base leading-7 text-velmora-ink">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-editorial text-velmora-taupe">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="grid gap-8 bg-velmora-blush px-6 py-10 text-velmora-espresso sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-gold">Velmora letters</p>
            <h2 className="mt-3 font-serif text-4xl text-velmora-espresso sm:text-5xl">Join for 10% off your first order.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-ink/75">Receive quiet styling notes, gifting edits, and first access to new demi-fine drops.</p>
          </div>
          <form className="flex flex-col justify-center gap-3 sm:flex-row lg:flex-col xl:flex-row" onSubmit={(event) => { event.preventDefault(); setJoined(true) }}>
            <input required type="email" placeholder="Email address" className="min-h-12 flex-1 border border-velmora-taupe bg-velmora-ivory px-4 text-sm text-velmora-espresso placeholder:text-velmora-ink/55 focus:border-velmora-gold focus:outline-none" />
            <Button type="submit" className="min-h-12">{joined ? 'Welcome' : 'Subscribe'}</Button>
          </form>
        </div>
      </section>
    </main>
  )
}
