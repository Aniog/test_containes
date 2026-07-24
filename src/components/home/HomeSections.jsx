import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, Star } from 'lucide-react'
import { categories, testimonials, ugcMoments } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

function useSectionImages(dependencies = []) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, sectionRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, dependencies)

  return sectionRef
}


export function TrustBar() {
  return (
    <section className="border-y border-velmora-sand bg-velmora-ivory text-velmora-ink">
      <div className="mx-auto flex max-w-7xl flex-col divide-y divide-velmora-sand/70 px-4 text-center font-sans text-[0.66rem] font-bold uppercase tracking-[0.24em] sm:grid sm:grid-cols-4 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
        {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
          <div key={item} className="py-4 text-velmora-ink">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}

export function UgcStrip() {
  const sectionRef = useSectionImages([])

  return (
    <section ref={sectionRef} id="journal" className="bg-velmora-ink py-20 text-velmora-ivory sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-velmora-champagne">Seen in the wild</p>
            <h2 id="ugc-title" className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              Softly styled, endlessly wearable.
            </h2>
          </div>
          <p id="ugc-subtitle" className="max-w-md font-sans text-sm leading-7 text-velmora-sand">
            A reel-style glimpse at the pieces customers choose for workdays, evenings, and gifts worth remembering.
          </p>
        </div>
        <div className="flex snap-x gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {ugcMoments.map((moment) => {
            const captionId = `ugc-${moment.id}-caption`
            return (
              <article key={moment.id} className="relative h-[430px] w-[250px] flex-none snap-start overflow-hidden bg-velmora-espresso shadow-velvet sm:w-[280px]">
                <img
                  alt={moment.caption}
                  className="h-full w-full object-cover opacity-90 transition duration-700 hover:scale-105"
                  data-strk-img-id={`ugc-${moment.id}-image-77bd`}
                  data-strk-img={`[${captionId}] [ugc-subtitle] [ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/55 to-transparent p-5">
                  <p id={captionId} className="font-serif text-2xl leading-tight text-velmora-ivory">
                    {moment.caption}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function CategoryTiles() {
  const sectionRef = useSectionImages([])

  return (
    <section ref={sectionRef} className="bg-velmora-ivory py-20 text-velmora-ink sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-velmora-gold">Shop by category</p>
          <h2 id="category-heading" className="mt-3 font-serif text-4xl sm:text-5xl">
            Designed for every ritual.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.slug}-title`
            const descId = `category-${category.slug}-desc`
            return (
              <Link
                key={category.slug}
                to={`/shop?category=${category.name}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-velmora-sand text-velmora-ivory shadow-soft"
              >
                <img
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={`category-${category.slug}-image-c19a`}
                  data-strk-img={`[${descId}] [${titleId}] [category-heading]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                />
                <div className="absolute inset-0 bg-velmora-ink/25 transition group-hover:bg-velmora-ink/45" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p id={descId} className="mb-2 max-w-xs font-sans text-sm leading-6 text-velmora-sand opacity-0 transition duration-300 group-hover:opacity-100">
                    {category.description}
                  </p>
                  <h3 id={titleId} className="font-serif text-4xl text-velmora-ivory">
                    {category.name}
                  </h3>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function BrandStory() {
  const sectionRef = useSectionImages([])

  return (
    <section ref={sectionRef} id="story" className="bg-velmora-porcelain py-20 text-velmora-ink sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative overflow-hidden bg-velmora-sand shadow-velvet">
          <img
            alt="Velmora jewelry atelier details"
            className="aspect-[4/5] h-full w-full object-cover"
            data-strk-img-id="story-atelier-image-1a73"
            data-strk-img="[story-copy] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1000"
          />
        </div>
        <div className="lg:pl-10">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-velmora-gold">Our philosophy</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl leading-none sm:text-6xl">
            Fine-feeling jewelry, without the old-world markup.
          </h2>
          <p id="story-copy" className="mt-6 max-w-xl font-sans text-base leading-8 text-velmora-taupe">
            Velmora creates demi-fine gold pieces in small, considered capsules: luminous enough for gifting, durable enough for daily wear, and edited enough to feel personal. We obsess over proportion, polish, and packaging so every piece feels treasured from the first opening.
          </p>
          <Link
            to="/#story"
            className="mt-8 inline-flex items-center gap-3 border-b border-velmora-gold pb-2 font-sans text-xs font-bold uppercase tracking-[0.28em] text-velmora-ink transition hover:text-velmora-gold"
          >
            Our Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="bg-velmora-ivory py-20 text-velmora-ink sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-velmora-gold">Notes from customers</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Pieces they keep reaching for.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="border border-velmora-sand bg-velmora-porcelain p-7 shadow-soft">
              <div className="mb-5 flex gap-1 text-velmora-champagne" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-2xl leading-8 text-velmora-ink">“{testimonial.quote}”</p>
              <p className="mt-6 font-sans text-xs font-bold uppercase tracking-[0.28em] text-velmora-taupe">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Newsletter() {
  return (
    <section className="bg-velmora-ivory px-4 pb-20 text-velmora-ink sm:px-6 sm:pb-28 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-radial shadow-velvet">
        <div className="grid gap-8 px-6 py-12 text-velmora-ivory sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-14 lg:py-16">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-velmora-champagne">Velmora Notes</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              Join for 10% off your first order.
            </h2>
            <p className="mt-4 max-w-xl font-sans text-sm leading-7 text-velmora-sand">
              Receive capsule launches, gifting reminders, and private edits for quietly luminous jewelry.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="min-h-12 flex-1 border border-velmora-sand/35 bg-velmora-porcelain px-4 font-sans text-sm text-velmora-ink placeholder:text-velmora-taupe focus:border-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne/40"
            />
            <button
              type="submit"
              className="min-h-12 bg-velmora-champagne px-7 font-sans text-xs font-bold uppercase tracking-[0.26em] text-velmora-ink transition hover:bg-velmora-gold hover:text-velmora-porcelain focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2 focus:ring-offset-velmora-espresso"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
