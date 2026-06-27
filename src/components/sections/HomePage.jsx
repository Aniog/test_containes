import { ArrowRight, ChevronRight, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { categories, products, testimonials, ugcItems } from '@/data/products'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'

export default function HomePage({ onAdd, onNavigate, onViewProduct }) {
  return (
    <main id="top" className="bg-ivory text-noir">
      <section className="relative min-h-screen overflow-hidden bg-noir text-ivory">
        <div
          className="absolute inset-0 opacity-70"
          data-strk-bg-id="velmora-hero-bg-a1c8d2"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,18,15,0.86),rgba(23,18,15,0.46),rgba(23,18,15,0.16))]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-[velmoraFadeUp_900ms_ease-out_both]">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.34em] text-champagne">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="mt-6 font-serif text-6xl font-semibold leading-[0.95] text-ivory sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-7 max-w-xl font-sans text-base leading-8 text-ivory/82 sm:text-lg">
              Warm gold essentials designed for the rituals, milestones, and everyday moments worth keeping close.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('shop')}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-champagne px-7 py-4 font-sans text-sm font-bold uppercase tracking-[0.22em] text-noir transition duration-300 hover:bg-ivory hover:shadow-[0_18px_40px_rgba(199,155,85,0.25)] focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-noir"
            >
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="border-b border-sand bg-porcelain text-noir">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 text-center font-sans text-[0.68rem] font-bold uppercase tracking-[0.22em] text-taupe sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
            <p key={item} className="border-sand py-2 lg:border-r last:border-r-0">{item}</p>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mb-10 flex flex-col gap-5 border-b border-sand pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-champagne">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-noir md:text-6xl">Most Gifted, Most Worn</h2>
          </div>
          <button type="button" onClick={() => onNavigate('shop')} className="inline-flex items-center gap-2 self-start font-sans text-xs font-bold uppercase tracking-[0.22em] text-noir transition hover:text-champagne">
            View all pieces <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} onView={onViewProduct} />
          ))}
        </div>
      </section>

      <section id="journal" className="overflow-hidden border-y border-sand bg-noir py-16 text-ivory lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-champagne">Seen in real life</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-ivory md:text-5xl">The Velmora Reel</h2>
            </div>
            <p className="hidden max-w-xs font-sans text-sm leading-6 text-ivory/65 md:block">A scrolling strip of warm gold moments, from weekday stacks to after-dark heirlooms.</p>
          </div>
          <div className="flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:thin] [scrollbar-color:#c79b55_transparent]">
            {ugcItems.map((item) => (
              <article key={item.id} className="relative h-[28rem] w-64 shrink-0 snap-start overflow-hidden rounded-t-full border border-ivory/15 bg-ivory/5 shadow-2xl">
                <img
                  data-strk-img-id={`ugc-${item.id}`}
                  data-strk-img={`[ugc-caption-${item.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="520"
                  src={placeholder}
                  alt={item.caption}
                  className="h-full w-full object-cover opacity-90 transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-noir via-noir/70 to-transparent p-5 pt-20">
                  <p id={`ugc-caption-${item.id}`} className="font-serif text-2xl leading-7 text-ivory">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mb-10 text-center">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-champagne">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold text-noir md:text-6xl">Choose Your Glow</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <button key={category.id} type="button" onClick={() => onNavigate('shop')} className="group relative min-h-[24rem] overflow-hidden bg-noir text-left text-ivory">
              <img
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={`[category-${category.id}-desc] [category-${category.id}-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="720"
                src={placeholder}
                alt={category.name}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/85 via-noir/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 translate-y-4 transition duration-500 group-hover:translate-y-0">
                <h3 id={`category-${category.id}-title`} className="font-serif text-5xl font-semibold text-ivory">{category.name}</h3>
                <p id={`category-${category.id}-desc`} className="mt-3 max-w-xs font-sans text-sm leading-6 text-ivory/75 opacity-0 transition duration-500 group-hover:opacity-100">{category.description}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-sand bg-porcelain">
        <div className="mx-auto grid max-w-7xl gap-0 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="min-h-[30rem] overflow-hidden bg-ivory">
            <img
              data-strk-img-id="brand-story-img-7b2f1a"
              data-strk-img="[brand-story-copy] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src={placeholder}
              alt="Velmora jewelry details"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center border border-sand bg-ivory p-8 text-noir sm:p-12 lg:p-16">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-champagne">Brand story</p>
            <h2 id="brand-story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight text-noir md:text-6xl">Luxury made intimate, not intimidating.</h2>
            <p id="brand-story-copy" className="mt-6 font-sans text-base leading-8 text-taupe">
              Velmora was created for women who collect meaning as much as shine. Each demi-fine piece is designed in small, considered silhouettes with warm gold finishes, comfortable wear, and packaging worthy of a kept note.
            </p>
            <a href="#top" className="mt-8 inline-flex items-center gap-2 self-start border-b border-champagne pb-1 font-sans text-xs font-bold uppercase tracking-[0.24em] text-noir transition hover:text-champagne">
              Our Story <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="border border-sand bg-porcelain p-7 text-noir">
              <div className="mb-5 flex gap-1 text-champagne" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.5} />
                ))}
              </div>
              <p className="font-serif text-2xl leading-8 text-noir">“{testimonial.quote}”</p>
              <p className="mt-6 font-sans text-xs font-bold uppercase tracking-[0.22em] text-taupe">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-champagne px-4 py-16 text-noir sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 text-center lg:grid-cols-[1.1fr_1fr] lg:items-center lg:text-left">
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-noir/70">The private list</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-noir">Join for 10% off your first order</h2>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@example.com"
              className="min-h-14 flex-1 rounded-full border border-noir/20 bg-ivory px-5 font-sans text-sm text-noir placeholder:text-taupe focus:border-noir focus:outline-none focus:ring-2 focus:ring-noir/20"
            />
            <button type="submit" className="rounded-full bg-noir px-7 py-4 font-sans text-xs font-bold uppercase tracking-[0.22em] text-ivory transition hover:bg-ivory hover:text-noir">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
