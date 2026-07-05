import { ArrowRight, Quote, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { categories, products } from '@/data/products'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const ugcItems = [
  { id: 'ugc-ear-stack', caption: 'The ear stack that catches candlelight', titleId: 'ugc-ear-stack-title', descId: 'ugc-ear-stack-desc' },
  { id: 'ugc-necklace', caption: 'A barely-there chain with presence', titleId: 'ugc-necklace-title', descId: 'ugc-necklace-desc' },
  { id: 'ugc-huggies', caption: 'Golden huggies for every commute', titleId: 'ugc-huggies-title', descId: 'ugc-huggies-desc' },
  { id: 'ugc-gift', caption: 'Wrapped for her, kept by you', titleId: 'ugc-gift-title', descId: 'ugc-gift-desc' },
]

const testimonials = [
  { name: 'Maya R.', text: 'The Golden Sphere Huggies look far more expensive than they are. They have become my daily pair.' },
  { name: 'Elise T.', text: 'Beautiful packaging and the necklace sits perfectly. It felt special from the first unboxing.' },
  { name: 'Nora K.', text: 'Sensitive ears approved. I wore the cuffs all night and forgot they were there.' },
]

const categoryMeta = {
  Earrings: { id: 'category-earrings', desc: 'Light-catching studs, cuffs, and drops for an effortless stack.' },
  Necklaces: { id: 'category-necklaces', desc: 'Delicate chains and crystal pendants made to layer softly.' },
  Huggies: { id: 'category-huggies', desc: 'Polished everyday hoops with comfortable close-to-ear silhouettes.' },
}

export const Hero = ({ onNavigate }) => (
  <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-ivory">
    <div
      className="absolute inset-0 opacity-80"
      data-strk-bg-id="velmora-hero-bg-a4d91e"
      data-strk-bg="[hero-subtitle] [hero-title]"
      data-strk-bg-ratio="16x9"
      data-strk-bg-width="1800"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/35 via-velmora-ink/30 to-velmora-ink/80" />
    <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
      <div className="max-w-3xl animate-fade-up">
        <p className="mb-5 text-xs font-semibold uppercase tracking-luxe text-velmora-sand">Demi-fine gold jewelry for the everyday heirloom</p>
        <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.95] text-velmora-ivory sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1>
        <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-champagne sm:text-lg">Warm gold, sculptural silhouettes, and gift-ready pieces designed to feel personal from the first wear.</p>
        <button type="button" onClick={() => onNavigate('shop')} className="mt-9 rounded-full bg-velmora-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink shadow-soft transition hover:bg-velmora-ivory">
          Shop the Collection
        </button>
      </div>
    </div>
  </section>
)

export const TrustBar = () => (
  <section className="border-b border-velmora-sand/70 bg-velmora-ivory text-velmora-ink">
    <div className="mx-auto flex max-w-7xl snap-x gap-6 overflow-x-auto px-4 py-4 text-xs font-semibold uppercase tracking-[0.16em] sm:px-6 lg:justify-center lg:px-8">
      {trustItems.map((item) => (
        <span key={item} className="shrink-0 text-velmora-smoke">{item}</span>
      ))}
    </div>
  </section>
)

export const Bestsellers = ({ onAdd, onView, onNavigate }) => (
  <section id="bestsellers" className="bg-velmora-ivory px-4 py-16 text-velmora-ink sm:px-6 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Bestsellers</p>
          <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-ink sm:text-6xl">Loved in gold</h2>
        </div>
        <button type="button" onClick={() => onNavigate('shop')} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-velmora-ink transition hover:text-velmora-gold">
          View all <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} onView={onView} />
        ))}
      </div>
    </div>
  </section>
)

export const UgcReels = () => (
  <section id="journal" className="bg-velmora-champagne py-16 text-velmora-ink lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Seen on you</p>
        <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-ink sm:text-6xl">Small rituals, caught in motion</h2>
      </div>
    </div>
    <div className="flex snap-x gap-4 overflow-x-auto px-4 pb-3 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
      {ugcItems.map((item) => (
        <article key={item.id} className="group relative h-[420px] w-[236px] shrink-0 snap-start overflow-hidden rounded-[2rem] bg-velmora-ink shadow-soft sm:h-[500px] sm:w-[280px]">
          <div
            className="absolute inset-0 transition duration-700 group-hover:scale-105"
            data-strk-bg-id={`${item.id}-bg`}
            data-strk-bg={`[${item.descId}] [${item.titleId}]`}
            data-strk-bg-ratio="9x16"
            data-strk-bg-width="520"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-velmora-ink/10 to-velmora-ink/80" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-ivory">
            <p id={item.titleId} className="font-serif text-2xl leading-7">{item.caption}</p>
            <p id={item.descId} className="mt-2 text-xs uppercase tracking-[0.16em] text-velmora-sand">Velmora worn close</p>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export const CategoryTiles = ({ onNavigate }) => (
  <section id="collections" className="bg-velmora-ivory px-4 py-16 text-velmora-ink sm:px-6 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-9 text-center">
        <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Shop by category</p>
        <h2 className="mt-3 font-serif text-5xl text-velmora-ink sm:text-6xl">Find your signature</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((category) => {
          const meta = categoryMeta[category]
          return (
            <button key={category} type="button" onClick={() => onNavigate('shop', undefined, { category })} className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-velmora-ink text-left shadow-soft">
              <div
                className="absolute inset-0 opacity-90 transition duration-700 group-hover:scale-105"
                data-strk-bg-id={`${meta.id}-bg`}
                data-strk-bg={`[${meta.id}-desc] [${meta.id}-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/5 via-velmora-ink/10 to-velmora-ink/80" />
              <div className="absolute inset-x-0 bottom-0 translate-y-6 p-7 text-velmora-ivory transition duration-300 group-hover:translate-y-0">
                <h3 id={`${meta.id}-title`} className="font-serif text-5xl">{category}</h3>
                <p id={`${meta.id}-desc`} className="mt-3 max-w-xs text-sm leading-6 text-velmora-champagne opacity-0 transition duration-300 group-hover:opacity-100">{meta.desc}</p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  </section>
)

export const BrandStory = ({ onNavigate }) => (
  <section id="story" className="bg-velmora-champagne px-4 py-16 text-velmora-ink sm:px-6 lg:px-8 lg:py-24">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
      <div className="relative overflow-hidden rounded-[2rem] bg-velmora-ink shadow-velvet">
        <img
          alt="Velmora jewelry atelier"
          className="aspect-[4/5] w-full object-cover opacity-95"
          data-strk-img-id="brand-story-atelier-77e16b"
          data-strk-img="[story-kicker] [story-title] [story-copy]"
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>
      <div className="lg:pl-10">
        <p id="story-kicker" className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Our philosophy</p>
        <h2 id="story-title" className="mt-4 font-serif text-5xl leading-tight text-velmora-ink sm:text-7xl">Made for the pause between ordinary and occasion.</h2>
        <p id="story-copy" className="mt-6 max-w-xl text-base leading-8 text-velmora-smoke">Velmora designs demi-fine jewelry in small, intentional silhouettes: warm gold, thoughtful stones, and comfortable finishes. Each piece is priced to be worn often, gifted beautifully, and kept close.</p>
        <button type="button" onClick={() => onNavigate('shop')} className="mt-8 inline-flex items-center gap-2 rounded-full border border-velmora-ink px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-ink transition hover:bg-velmora-ink hover:text-velmora-ivory">
          Our Story <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  </section>
)

export const Testimonials = () => (
  <section className="bg-velmora-ivory px-4 py-16 text-velmora-ink sm:px-6 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-9 text-center">
        <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Notes from customers</p>
        <h2 className="mt-3 font-serif text-5xl text-velmora-ink sm:text-6xl">Quiet compliments</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="rounded-[1.75rem] border border-velmora-sand/70 bg-velmora-champagne p-7 text-velmora-ink shadow-soft">
            <Quote className="mb-5 h-7 w-7 text-velmora-gold" />
            <div className="mb-4 flex text-velmora-gold">
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-sm leading-7 text-velmora-ink">“{testimonial.text}”</p>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-velmora-smoke">{testimonial.name}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export const Newsletter = () => (
  <section className="bg-velmora-ivory px-4 pb-16 text-velmora-ink sm:px-6 lg:px-8 lg:pb-24">
    <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-velmora-espresso text-velmora-ivory shadow-velvet lg:grid-cols-[1fr_0.9fr]">
      <div className="p-8 sm:p-12 lg:p-16">
        <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Private list</p>
        <h2 className="mt-4 font-serif text-5xl leading-none text-velmora-ivory sm:text-6xl">Join for 10% off your first order</h2>
        <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-sand">Receive early access to new drops, gift edits, and jewelry care notes. No noise, only the good pieces.</p>
      </div>
      <form className="flex flex-col justify-center gap-4 bg-velmora-blush p-8 text-velmora-ink sm:p-12" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="newsletter-email" className="text-xs font-bold uppercase tracking-[0.18em] text-velmora-ink">Email address</label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input id="newsletter-email" type="email" required placeholder="you@example.com" className="min-h-14 flex-1 rounded-full border border-velmora-sand bg-velmora-ivory px-5 text-sm text-velmora-ink placeholder:text-velmora-smoke focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/30" />
          <button type="submit" className="rounded-full bg-velmora-ink px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-ink">Join</button>
        </div>
      </form>
    </div>
  </section>
)
