import { useRef } from 'react'
import { ArrowRight, Check, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '@/components/common/SectionHeading'
import ProductCard from '@/components/store/ProductCard'
import { categories, journalEntries, products, testimonials, trustBadges, ugcMoments } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

const HomePage = () => {
  const containerRef = useRef(null)
  useStrkImages(containerRef, [])

  return (
    <div ref={containerRef} className="bg-brand-ivory text-brand-ink">
      <section className="relative overflow-hidden bg-brand-ink text-brand-ivory">
        <div
          className="absolute inset-0 opacity-50"
          data-strk-bg-id="velmora-hero-bg-1w84le"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(33,22,17,0.82),rgba(33,22,17,0.35),rgba(33,22,17,0.7))]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-20 lg:px-10">
          <div className="max-w-2xl space-y-7">
            <p className="text-xs uppercase tracking-[0.36em] text-brand-ivory/75">
              Fine Layers for Everyday Rituals
            </p>
            <h1 id="hero-title" className="font-display text-6xl leading-[0.94] text-brand-ivory md:text-7xl lg:text-[5.75rem]">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="max-w-xl text-lg leading-8 text-brand-ivory/80 md:text-xl">
              Warm gold finishes, sculptural silhouettes, and gift-ready details designed for self-purchase and meaningful moments.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-8 py-4 text-sm uppercase tracking-[0.24em] text-brand-ink transition hover:bg-brand-gold-soft"
              >
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="#story"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm uppercase tracking-[0.24em] text-brand-ivory transition hover:border-brand-gold hover:text-brand-gold"
              >
                Discover Velmora
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-border bg-brand-pearl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-5 py-4 text-center md:px-8 lg:px-10">
          {trustBadges.map((badge) => (
            <div key={badge} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-brand-ink md:text-sm">
              <Check className="h-4 w-4 text-brand-gold-deep" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24 lg:px-10 lg:py-28">
        <div className="mb-12 flex items-end justify-between gap-5">
          <SectionHeading
            eyebrow="Bestsellers"
            title="The pieces our customers return to"
            description="Five polished favorites that balance warm sparkle, comfort, and everyday wearability."
          />
          <Link to="/shop" className="hidden text-sm uppercase tracking-[0.22em] text-brand-gold-deep transition hover:text-brand-ink md:inline-flex md:items-center md:gap-2">
            Shop all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="border-y border-brand-border bg-brand-pearl/70 py-20 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-5 md:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Styled by You"
            title="A reel of real-life Velmora moments"
            description="Soft light, layered gold, and the kind of pieces that make an everyday look feel finished."
          />
          <div className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none]">
            {ugcMoments.map((moment) => (
              <article
                key={moment.id}
                className="group relative min-w-[220px] overflow-hidden rounded-[2rem] bg-brand-ink shadow-soft sm:min-w-[260px]"
              >
                <img
                  alt={moment.caption}
                  className="aspect-[9/16] h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  data-strk-img-id={moment.imageId}
                  data-strk-img={`[${moment.titleId}] women wearing fine gold jewelry portrait`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-brand-ivory">
                  <p id={moment.titleId} className="font-display text-3xl leading-none">
                    {moment.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Categories"
          title="Shop by silhouette"
          description="Choose the shape you are reaching for now, then layer in your signature finish."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative overflow-hidden rounded-[2rem] bg-brand-ink"
            >
              <img
                alt={category.name}
                className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                data-strk-img-id={category.imageId}
                data-strk-img={`[category-${category.slug}-desc] [category-${category.slug}-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/15 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-brand-ivory">
                <h3 id={`category-${category.slug}-title`} className="font-display text-4xl text-brand-ivory">
                  {category.name}
                </h3>
                <p id={`category-${category.slug}-desc`} className="mt-2 max-w-xs text-sm leading-6 text-brand-ivory/80 opacity-0 transition duration-300 group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28">
        <div className="overflow-hidden rounded-[2rem] bg-brand-sand shadow-soft">
          <img
            alt="Velmora story"
            className="aspect-[5/4] h-full w-full object-cover"
            data-strk-img-id="velmora-story-image-e72sq4"
            data-strk-img="[story-title] [story-desc] woman gold jewelry close-up editorial"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="flex items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-brand-muted">Our Story</p>
            <h2 id="story-title" className="font-display text-5xl leading-none text-brand-ink md:text-6xl">
              Jewelry designed to feel intimate, not excessive
            </h2>
            <p id="story-desc" className="text-base leading-8 text-brand-muted md:text-lg">
              Velmora began with the idea that premium jewelry should be easy to wear, easy to gift, and still feel deeply considered. We create demi-fine pieces with warm finishes, sculptural forms, and timeless styling that moves with modern life.
            </p>
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-brand-gold-deep transition hover:text-brand-ink">
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-border bg-brand-pearl/70 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Reviews"
            title="Loved for gifting and everyday polish"
            description="Short notes from customers who wanted jewelry that looked refined, felt comfortable, and arrived beautifully packaged."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[2rem] border border-brand-border bg-white/80 p-8 shadow-soft"
              >
                <div className="mb-6 flex gap-1 text-brand-gold-deep">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-base leading-8 text-brand-muted">“{testimonial.review}”</p>
                <p className="mt-6 text-sm uppercase tracking-[0.26em] text-brand-ink">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24 lg:px-10 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] bg-brand-gold px-8 py-10 text-brand-ink shadow-soft md:px-10 md:py-12">
            <p className="text-xs uppercase tracking-[0.32em] text-brand-ink/70">Newsletter</p>
            <h2 className="mt-4 font-display text-5xl leading-none md:text-6xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-brand-ink/75">
              Be first to know about new arrivals, gift edits, and quietly polished bestsellers.
            </p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="h-14 flex-1 rounded-full border border-brand-ink/15 bg-white/80 px-6 text-base text-brand-ink outline-none transition placeholder:text-brand-ink/45 focus:border-brand-ink"
              />
              <button
                type="submit"
                className="h-14 rounded-full bg-brand-ink px-8 text-sm uppercase tracking-[0.24em] text-brand-ivory transition hover:bg-brand-ink/90"
              >
                Join Velmora
              </button>
            </form>
          </div>

          <div id="journal" className="rounded-[2rem] border border-brand-border bg-brand-pearl p-8 shadow-soft md:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-brand-muted">Journal</p>
            <div className="mt-6 space-y-6">
              {journalEntries.map((entry) => (
                <article key={entry.title} className="border-b border-brand-border pb-6 last:border-b-0 last:pb-0">
                  <h3 className="font-display text-3xl text-brand-ink">{entry.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-brand-muted">{entry.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
