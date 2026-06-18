import { Link } from 'react-router-dom'
import { ArrowRight, Quote, Sparkles } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'
import { categories, products, ugcMoments } from '@/data/products'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']
const reviews = [
  { name: 'Maya R.', text: 'The finish looks far more expensive than it is. I wear the huggies almost every day.' },
  { name: 'Claire S.', text: 'Beautiful packaging and a really thoughtful gift. The necklace catches light so softly.' },
  { name: 'Anika P.', text: 'Finally jewelry that feels elevated without feeling precious. The ear cuff is perfect.' },
]

function SectionHeading({ eyebrow, title, text, action }) {
  return (
    <div className="mx-auto mb-10 flex max-w-7xl flex-col gap-5 px-5 text-velmora-ink sm:px-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:px-10">
      <div className="max-w-2xl">
        <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.26em] text-velmora-champagne">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-4xl leading-tight text-velmora-ink sm:text-5xl lg:text-6xl">{title}</h2>
        {text && <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-cocoa/78 sm:text-base">{text}</p>}
      </div>
      {action}
    </div>
  )
}

export default function HomePage({ onAddToCart }) {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-pearl">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.58]"
          data-strk-bg-id="velmora-hero-bg-84aa11"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-pearl/95 via-velmora-pearl/82 to-velmora-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/12 via-transparent to-velmora-ink/62" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 lg:px-10 lg:pb-24">
          <div className="max-w-3xl animate-rise-soft">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-velmora-ink/16 bg-velmora-pearl/58 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-velmora-ink shadow-soft backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-velmora-champagne" /> Demi-fine gold essentials
            </p>
            <h1 id="hero-title" className="font-serif text-6xl leading-[0.95] tracking-[-0.03em] text-velmora-ink sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base font-medium leading-8 text-velmora-ink/82 sm:text-lg">
              Warm, luminous jewelry made for everyday rituals, self-purchase milestones, and gifts that feel deeply personal.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/shop" className="inline-flex items-center justify-center gap-3 rounded-full bg-velmora-champagne px-7 py-4 text-sm font-extrabold uppercase tracking-[0.2em] text-velmora-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-velmora-pearl">
                Shop the Collection <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#bestsellers" className="inline-flex items-center justify-center rounded-full border border-velmora-ink/35 bg-velmora-pearl/40 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.2em] text-velmora-ink backdrop-blur-sm transition hover:border-velmora-champagne hover:text-velmora-cocoa">
                View Bestsellers
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-velmora-mist bg-velmora-linen text-velmora-ink">
        <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-5 py-4 sm:px-8 lg:justify-between lg:px-10">
          {trustItems.map((item) => (
            <p key={item} className="shrink-0 snap-start text-[0.7rem] font-extrabold uppercase tracking-[0.24em] text-velmora-cocoa">
              {item}
            </p>
          ))}
        </div>
      </div>

      <section id="bestsellers" className="bg-velmora-pearl py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Bestsellers"
          title="The pieces she keeps reaching for"
          text="Five luminous signatures designed to layer, gift, and live in. Premium finishing, accessible price points, and quiet polish."
          action={<Link to="/shop" className="hidden rounded-full border border-velmora-ink px-6 py-3 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-ink hover:text-velmora-pearl lg:inline-flex">Shop all</Link>}
        />
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-5 lg:px-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />
          ))}
        </div>
      </section>

      <section id="journal" className="overflow-hidden bg-velmora-ink py-16 text-velmora-pearl sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 max-w-2xl">
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.26em] text-velmora-champagne">Seen on you</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Quiet shine in motion</h2>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-4">
            {ugcMoments.map((moment) => {
              const captionId = `ugc-${moment.id}-caption`
              return (
                <article key={moment.id} className="group relative aspect-[9/16] w-56 shrink-0 snap-start overflow-hidden rounded-[1.75rem] bg-velmora-cocoa shadow-luxe sm:w-64">
                  <img
                    alt={moment.caption}
                    className="h-full w-full object-cover opacity-[0.88] transition duration-700 group-hover:scale-105"
                    data-strk-img-id={`ugc-${moment.id}-7d1a`}
                    data-strk-img={`[${captionId}] [ugc-section-title]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="500"
                    src={placeholder}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-transparent to-transparent" />
                  <p id={captionId} className="absolute inset-x-5 bottom-5 font-serif text-2xl leading-tight text-velmora-pearl">{moment.caption}</p>
                </article>
              )
            })}
          </div>
          <p id="ugc-section-title" className="sr-only">Velmora fine jewelry worn in warm editorial daily moments</p>
        </div>
      </section>

      <section className="bg-velmora-pearl py-16 sm:py-20 lg:py-24">
        <SectionHeading eyebrow="Categories" title="Shop by signature" text="Start with the piece that fits her ritual: ear stacks, collarbone light, or polished huggies." />
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`
            return (
              <Link key={category.id} to={`/shop?category=${category.label}`} className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-velmora-cocoa text-velmora-pearl shadow-card">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                  data-strk-bg-id={`category-${category.id}-bg-c430`}
                  data-strk-bg={`[${descId}] [${titleId}]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/78 via-velmora-ink/10 to-transparent" />
                <div className="absolute inset-x-7 bottom-7 translate-y-5 transition duration-500 group-hover:translate-y-0">
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-velmora-champagne">Shop</p>
                  <h3 id={titleId} className="mt-2 font-serif text-4xl text-velmora-pearl">{category.label}</h3>
                  <p id={descId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-pearl/82 opacity-0 transition duration-500 group-hover:opacity-100">{category.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section id="story" className="bg-velmora-linen py-16 text-velmora-ink sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-velmora-cocoa shadow-luxe">
            <img
              alt="Velmora jewelry artisan styling gold pieces"
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id="brand-story-img-8f5b"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src={placeholder}
            />
          </div>
          <div className="lg:pl-10">
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.26em] text-velmora-champagne">Our story</p>
            <h2 id="story-title" className="mt-3 font-serif text-5xl leading-tight text-velmora-ink sm:text-6xl">A softer standard for modern keepsakes.</h2>
            <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-cocoa/82">
              Velmora was created for women who want jewelry that feels considered, intimate, and beautifully made without the traditional markup. Each piece is selected for warmth, comfort, and a glow that lingers beyond the occasion.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-champagne pb-2 text-sm font-extrabold uppercase tracking-[0.2em] text-velmora-ink transition hover:text-velmora-champagne">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-velmora-pearl py-16 text-velmora-ink sm:py-20 lg:py-24">
        <SectionHeading eyebrow="Notes from customers" title="Gifted, worn, remembered" />
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-[1.75rem] border border-velmora-mist bg-white/55 p-7 text-velmora-ink shadow-card">
              <Quote className="mb-5 h-7 w-7 text-velmora-champagne" />
              <div className="mb-4 text-velmora-champagne">★★★★★</div>
              <p className="text-base leading-8 text-velmora-cocoa/84">“{review.text}”</p>
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-ink">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-velmora-pearl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-velmora-cocoa text-velmora-pearl shadow-luxe lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.26em] text-velmora-champagne">Velmora list</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Join for 10% off your first order</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-pearl/76">Receive early access to new drops, gifting edits, and the occasional note on care and styling.</p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input id="newsletter-email" type="email" placeholder="Email address" className="min-h-14 flex-1 rounded-full border border-velmora-pearl/20 bg-velmora-pearl px-5 text-sm font-semibold text-velmora-ink placeholder:text-velmora-cocoa/55 focus:border-velmora-champagne focus:outline-none" />
              <button type="button" className="rounded-full bg-velmora-champagne px-7 py-4 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-pearl">Join</button>
            </form>
          </div>
          <div
            className="min-h-72 bg-cover bg-center"
            data-strk-bg-id="newsletter-bg-49ec"
            data-strk-bg="[newsletter-email] [story-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="900"
          />
        </div>
      </section>
    </>
  )
}
