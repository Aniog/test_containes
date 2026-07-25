import { ArrowRight, Instagram, Star } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { categories, products, ugcStories } from '../data/products'
import { resolveConfiguredImage } from '../lib/resolve-image'
import strkImgConfig from '../strk-img-config.json'

export default function HomePage({ onNavigate, onAddToCart, onOpenProduct }) {
  return (
    <main className="bg-velmora-ivory text-velmora-ink">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
        <div
          className="absolute inset-0 bg-velmora-espresso"
          data-strk-bg-id="hero-gold-jewelry-model-9a4c2e"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/45 via-velmora-ink/28 to-velmora-ink/75" />
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-3xl animate-[fadeUp_900ms_ease-out]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-velmora-sand">
              Demi-fine gold jewelry for everyday rituals
            </p>
            <h1 id="hero-title" className="font-serif text-5xl font-semibold leading-[0.95] text-velmora-ivory sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory/85 sm:text-lg">
              Warm gold, luminous stones, and heirloom-inspired silhouettes designed for gifting, layering, and self-celebration.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('shop')}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-champagne px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-velmora-ink shadow-glow transition hover:bg-velmora-ivory"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-sand bg-velmora-pearl text-velmora-ink">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-velmora-espresso sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-velmora-sand pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-bronze">The pieces everyone returns for</p>
            <h2 id="bestsellers-title" className="mt-3 font-serif text-4xl text-velmora-ink sm:text-5xl">Bestsellers</h2>
          </div>
          <p id="bestsellers-subtitle" className="max-w-md text-sm leading-7 text-velmora-espresso/75">
            Fine-feeling essentials under $120, created for women who want refined sparkle without the traditional retail markup.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAddToCart} onOpen={onOpenProduct} contextRefs="[bestsellers-subtitle] [bestsellers-title]" />
          ))}
        </div>
      </section>

      <section id="journal" className="bg-velmora-espresso py-16 text-velmora-ivory lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-champagne">Seen in warm light</p>
              <h2 id="ugc-title" className="mt-3 font-serif text-4xl text-velmora-ivory sm:text-5xl">Velmora on you</h2>
            </div>
            <Instagram className="hidden h-9 w-9 text-velmora-champagne sm:block" />
          </div>
          <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            {ugcStories.map((story) => (
              <article key={story.id} className="group relative aspect-[9/16] w-52 flex-none overflow-hidden bg-velmora-ink sm:w-64">
                <img
                  alt={story.caption}
                  className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  src={resolveConfiguredImage(strkImgConfig, story.imgId)}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/35 to-transparent p-5">
                  <p id={story.titleId} className="font-serif text-2xl lowercase text-velmora-ivory">{story.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-bronze">Shop by category</p>
          <h2 id="category-section-title" className="mt-3 font-serif text-4xl text-velmora-ink sm:text-5xl">Choose your shine</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => onNavigate('shop')}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-sand text-left"
            >
              <img
                alt={category.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                src={resolveConfiguredImage(strkImgConfig, category.imgId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-velmora-ivory transition duration-500 group-hover:translate-y-[-6px]">
                <h3 id={category.titleId} className="font-serif text-4xl">{category.name}</h3>
                <p id={category.descId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-ivory/85">{category.description}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="story" className="border-y border-velmora-sand bg-velmora-pearl text-velmora-ink">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="min-h-[28rem] bg-velmora-sand" data-strk-bg-id="brand-story-workshop-6e94c0" data-strk-bg="[story-copy] [story-title]" data-strk-bg-ratio="4x3" data-strk-bg-width="1100" />
          <div className="flex items-center px-4 py-14 sm:px-8 lg:px-16">
            <div className="max-w-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-bronze">Our Story</p>
              <h2 id="story-title" className="mt-4 font-serif text-4xl leading-tight text-velmora-ink sm:text-5xl">
                Jewelry made for small ceremonies, not special occasions only.
              </h2>
              <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-espresso/80">
                Velmora pairs warm gold plating, considered stones, and direct-to-consumer pricing so beautiful pieces can become part of your every day. Each silhouette is designed to feel intimate, elegant, and quietly enduring.
              </p>
              <button
                type="button"
                className="mt-8 inline-flex items-center gap-3 border-b border-velmora-champagne pb-2 text-sm font-semibold uppercase tracking-[0.22em] text-velmora-ink transition hover:text-velmora-bronze"
              >
                Our Story
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['The huggies look far more expensive than they are. I wear them nearly every day.', 'Maya R.'],
            ['Beautiful packaging and the necklace has the softest sparkle. Perfect gift.', 'Elena T.'],
            ['Finally jewelry that feels special but still easy enough for work and weekends.', 'Claire W.'],
          ].map(([quote, name]) => (
            <figure key={name} className="border border-velmora-sand bg-velmora-pearl p-7 text-velmora-ink">
              <div className="mb-5 flex gap-1 text-velmora-champagne" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-serif text-2xl leading-snug text-velmora-ink">“{quote}”</blockquote>
              <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-bronze">{name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="bg-velmora-espresso px-6 py-12 text-center text-velmora-ivory shadow-velvet sm:px-10 lg:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-champagne">Velmora private list</p>
          <h2 className="mt-3 font-serif text-4xl text-velmora-ivory sm:text-5xl">Join for 10% off your first order</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-velmora-ivory/75">
            Receive quiet launches, styling notes, and early gifting edits in your inbox.
          </p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="min-h-14 flex-1 rounded-full border border-velmora-sand bg-velmora-ivory px-6 text-sm text-velmora-ink placeholder:text-velmora-espresso/55 focus:border-velmora-champagne focus:outline-none"
            />
            <button type="submit" className="rounded-full bg-velmora-champagne px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-velmora-ink transition hover:bg-velmora-ivory">
              Join
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
