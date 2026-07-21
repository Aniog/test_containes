import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Star } from 'lucide-react'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import ProductCard from '@/components/product/ProductCard'
import JewelryVisual from '@/components/product/JewelryVisual'
import { categories, products, ugcItems } from '@/data/products'

const testimonials = [
  {
    name: 'Maya R.',
    text: 'The huggies feel substantial but never heavy. They look far more expensive than they are.',
  },
  {
    name: 'Elise T.',
    text: 'I bought the Heirloom Set as a gift and the packaging made the whole moment feel special.',
  },
  {
    name: 'Nora L.',
    text: 'Quiet sparkle, beautiful warmth, and no irritation. Velmora is now my daily stack.',
  },
]

export default function HomePage({ onAddToCart }) {
  return (
    <main className="bg-velmora-cream text-velmora-ink">
      <HeroSection />
      <TrustBar />

      <section id="bestsellers" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-10 flex flex-col gap-5 border-b border-velmora-stone pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl leading-none tracking-[-0.03em] text-velmora-ink md:text-6xl">
              Pieces with a following
            </h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:text-velmora-gold">
            Shop all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAddToCart} context="bestsellers" />
          ))}
        </div>
      </section>

      <section id="journal" className="overflow-hidden border-y border-velmora-stone bg-velmora-blush py-16 text-velmora-ink lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-9 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Velmora on you</p>
            <h2 className="mt-3 font-serif text-5xl leading-none tracking-[-0.03em] text-velmora-ink md:text-6xl">
              Styled in warm light
            </h2>
          </div>
          <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-2 sm:gap-6">
            {ugcItems.map((item, index) => (
              <article key={item.id} className="group relative min-w-[72%] snap-center overflow-hidden rounded-[2rem] bg-velmora-brown shadow-[0_24px_60px_rgba(48,35,26,0.12)] sm:min-w-[18rem] lg:min-w-[20rem]">
                <JewelryVisual
                  product={products[index % products.length]}
                  label={item.caption}
                  variant="worn"
                  className="aspect-[9/16] w-full opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink/85 to-transparent p-5 pt-20">
                  <p id={item.captionId} className="font-serif text-2xl leading-tight text-velmora-cream">
                    {item.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p id="ugc-section-title" className="sr-only">Velmora Fine Jewelry worn on ear and neck</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-9 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl leading-none tracking-[-0.03em] text-velmora-ink md:text-6xl">
            Find your signature
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category, index) => (
            <Link key={category.id} to={`/shop?category=${category.label}`} className="group relative min-h-[24rem] overflow-hidden rounded-[2rem] bg-velmora-ink text-velmora-cream shadow-[0_24px_60px_rgba(48,35,26,0.10)]">
              <JewelryVisual
                product={products[index]}
                label={`${category.label} jewelry category`}
                variant={index === 1 ? 'worn' : 'primary'}
                className="absolute inset-0 h-full w-full opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/85 via-velmora-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p id={category.descId} className="mb-3 text-sm leading-6 text-velmora-stone opacity-0 transition duration-300 group-hover:opacity-100">
                  {category.description}
                </p>
                <h3 id={category.titleId} className="font-serif text-4xl text-velmora-cream">
                  {category.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <p id="category-section-label" className="sr-only">Demi-fine gold jewelry categories</p>
      </section>

      <section id="story" className="bg-velmora-ink text-velmora-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div className="overflow-hidden rounded-[2rem] bg-velmora-brown">
            <JewelryVisual
              product={products[4]}
              label="Velmora gold jewelry styling detail"
              variant="worn"
              className="aspect-[4/5] h-full w-full"
            />
          </div>
          <div className="flex items-center">
            <div className="max-w-xl lg:pl-12">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Brand story</p>
              <h2 id="story-title" className="mt-4 font-serif text-5xl leading-none tracking-[-0.03em] text-velmora-cream md:text-7xl">
                Jewelry for rituals, not occasions alone.
              </h2>
              <p id="story-copy" className="mt-7 text-base leading-8 text-velmora-stone">
                Velmora Fine Jewelry creates warm demi-fine pieces with heirloom cues, modern comfort, and accessible pricing. Each design is made to layer beautifully, gift easily, and become part of the everyday.
              </p>
              <Link to="/shop" className="mt-9 inline-flex items-center gap-3 border-b border-velmora-champagne pb-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne transition hover:text-velmora-cream">
                Our Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="rounded-[2rem] border border-velmora-stone bg-white/35 p-7 text-velmora-ink shadow-[0_18px_50px_rgba(48,35,26,0.06)]">
              <div className="flex gap-1 text-velmora-gold" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 font-serif text-2xl leading-8 text-velmora-ink">“{review.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-muted">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="rounded-[2.25rem] bg-velmora-brown p-6 text-velmora-cream shadow-[0_26px_70px_rgba(48,35,26,0.16)] sm:p-10 lg:grid lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Private list</p>
            <h2 className="mt-3 font-serif text-5xl leading-none tracking-[-0.03em] text-velmora-cream md:text-6xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-stone">
              Receive first access to new drops, styling notes, and considered gifting reminders.
            </p>
          </div>
          <form className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-muted" />
              <input id="newsletter-email" type="email" required placeholder="Email address" className="w-full rounded-full border border-white/15 bg-velmora-cream py-4 pl-11 pr-5 text-sm text-velmora-ink placeholder:text-velmora-muted focus:border-velmora-champagne focus:outline-none" />
            </div>
            <button type="submit" className="rounded-full bg-velmora-champagne px-7 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-cream">
              Join
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
