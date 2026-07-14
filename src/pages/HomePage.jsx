import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import ProductCard from '@/components/store/ProductCard'
import { categories, journalEntries, products, testimonials, trustPoints, ugcMoments } from '@/data/store'

function HomePage({ onAddToCart }) {
  return (
    <div className="bg-velmora-ivory text-velmora-espresso">
      <section className="relative isolate min-h-screen overflow-hidden bg-velmora-ink text-white">
        <div
          className="absolute inset-0 opacity-100"
          data-strk-bg-id="velmora-hero-bg-8g2ks"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,24,21,0.2),rgba(29,24,21,0.78)_68%,rgba(29,24,21,0.92))]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-24 pt-36 sm:px-6 md:pb-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.42em] text-white/70">Velmora Fine Jewelry</p>
            <h1 id="hero-title" className="mt-6 max-w-xl font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-lg text-base leading-8 text-white/78 sm:text-lg">
              Warm, quietly luxurious demi-fine jewelry designed for gifting, layering,
              and the everyday ritual of dressing beautifully.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-full bg-velmora-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.26em] text-velmora-ink transition hover:bg-white"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-4 text-sm font-medium uppercase tracking-[0.26em] text-white transition hover:border-velmora-gold hover:text-velmora-gold"
              >
                Discover the Brand
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-line bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-4 text-center text-[11px] uppercase tracking-[0.34em] text-velmora-mocha sm:px-6 lg:px-8">
          {trustPoints.map((point, index) => (
            <span key={point} className="flex items-center gap-3">
              {index > 0 && <span className="hidden h-px w-8 bg-velmora-line sm:block" />}
              {point}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-velmora-mocha">Our Edit</p>
            <h2 id="home-section-bestsellers" className="mt-4 font-display text-4xl text-velmora-espresso sm:text-5xl">
              Bestsellers
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-velmora-mocha">
            Sculptural silhouettes, crystalline details, and everyday gold essentials chosen
            for their versatility and gifting appeal.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              priority={index < 2}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-velmora-line bg-velmora-latte/60 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-velmora-mocha">Worn by You</p>
              <h2 id="ugc-strip-title" className="mt-4 font-display text-4xl text-velmora-espresso sm:text-5xl">
                The Velmora reel
              </h2>
            </div>
            <p className="hidden max-w-md text-sm leading-7 text-velmora-mocha md:block">
              Editorial styling meets real-life wearability. Scroll through a few favorite moments.
            </p>
          </div>

          <div className="-mx-5 overflow-x-auto px-5 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="flex min-w-max gap-5 pb-2">
              {ugcMoments.map((moment) => (
                <article
                  key={moment.id}
                  className="group relative w-[230px] overflow-hidden rounded-[30px] border border-velmora-line bg-velmora-ink shadow-velmora-card"
                >
                  <div className="relative aspect-[9/16]">
                    <img
                      alt={moment.caption}
                      data-strk-img-id={moment.imageId}
                      data-strk-img={`[${moment.descId}] [${moment.titleId}] [ugc-strip-title]`}
                      data-strk-img-ratio="9x16"
                      data-strk-img-width="700"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.0),rgba(0,0,0,0.72))]" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <p id={moment.titleId} className="font-display text-2xl leading-tight">
                        Styled in warm gold
                      </p>
                      <p id={moment.descId} className="mt-2 text-sm leading-6 text-white/80">
                        {moment.caption}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.34em] text-velmora-mocha">Browse</p>
          <h2 id="home-section-category-title" className="mt-4 font-display text-4xl sm:text-5xl">
            Shop by category
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative overflow-hidden rounded-[30px] border border-velmora-line bg-velmora-ink text-white shadow-velmora-card"
            >
              <div className="relative aspect-[4/5]">
                <img
                  alt={category.name}
                  data-strk-img-id={category.imageId}
                  data-strk-img={`[${category.descId}] [${category.titleId}] [home-section-category-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.72))]" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <h3 id={category.titleId} className="font-display text-3xl">
                      {category.name}
                    </h3>
                    <p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-white/78 opacity-0 transition duration-300 group-hover:opacity-100">
                      {category.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 translate-x-0 transition duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white/70 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div className="overflow-hidden rounded-[34px] border border-velmora-line shadow-velmora-card">
            <div className="relative aspect-[4/5] bg-velmora-latte">
              <img
                alt="Velmora brand story"
                data-strk-img-id="brand-story-image-7f4jr"
                data-strk-img="[brand-story-copy] [brand-story-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1100"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.34em] text-velmora-mocha">Velmora World</p>
            <h2 id="brand-story-title" className="mt-4 font-display text-4xl text-velmora-espresso sm:text-5xl">
              Designed with the softness of heirlooms and the ease of now.
            </h2>
            <p id="brand-story-copy" className="mt-6 text-base leading-8 text-velmora-mocha">
              Velmora was imagined for women who want jewelry to feel considered, warm,
              and wearable. Each piece balances editorial beauty with accessible luxury,
              so the ritual of gifting or dressing yourself feels elevated without feeling distant.
            </p>
            <Link
              to="/#about"
              className="mt-8 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-gold"
            >
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-10 max-w-xl">
          <p className="text-xs uppercase tracking-[0.34em] text-velmora-mocha">Loved by customers</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">A few kind words</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-[28px] border border-velmora-line bg-white p-8 shadow-velmora-card">
              <div className="flex gap-1 text-velmora-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 font-display text-2xl leading-10 text-velmora-espresso">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-[0.32em] text-velmora-mocha">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-velmora-ink py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-white/60">Journal</p>
            <h2 id="journal" className="mt-4 font-display text-4xl sm:text-5xl">
              Notes from the world of Velmora
            </h2>
          </div>
          <div className="space-y-5">
            {journalEntries.map((entry) => (
              <article key={entry.id} className="rounded-[26px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="font-display text-2xl text-white">{entry.title}</p>
                <p className="mt-3 text-sm leading-7 text-white/74">{entry.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-velmora-gold px-6 py-10 text-velmora-ink shadow-velmora-hover sm:px-10 md:px-14 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-velmora-ink/70">Newsletter</p>
              <h2 id="newsletter-title" className="mt-4 font-display text-4xl sm:text-5xl">
                Join for 10% off your first order
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-velmora-ink/80">
                Receive early access to launches, styling notes, and gifting edits curated in the Velmora mood.
              </p>
            </div>
            <form className="grid gap-4 sm:grid-cols-[1fr_auto]" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="h-14 rounded-full border border-velmora-ink/15 bg-white px-6 text-sm text-velmora-espresso outline-none ring-0 placeholder:text-velmora-mocha focus:border-velmora-ink"
              />
              <button
                type="submit"
                className="h-14 rounded-full border border-velmora-ink bg-velmora-ink px-7 text-sm font-medium uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-transparent hover:text-velmora-ink"
              >
                Join now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
