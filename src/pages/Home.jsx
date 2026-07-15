import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categoryTiles, products, testimonials, trustHighlights, ugcMoments } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'
import SectionHeading from '@/components/products/SectionHeading'

function HeroSection() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-espresso text-ivory">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-u7i9o2"
        data-strk-bg="[hero-subhead] [hero-heading]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/55 to-espresso/30" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-5 pb-16 pt-28 sm:px-6 lg:px-10 lg:pb-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.38em] text-champagne">Quiet luxury for every day</p>
          <h1
            id="hero-heading"
            className="mt-5 max-w-xl font-serif text-5xl leading-none text-ivory text-shadow-soft sm:text-6xl lg:text-7xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subhead"
            className="mt-6 max-w-lg text-base leading-7 text-champagne sm:text-lg"
          >
            Demi-fine gold jewelry designed for self-gifting, occasion dressing, and the kind of everyday polish you never rush.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-espresso transition hover:bg-champagne"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/product/royal-heirloom-set"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-ivory/40 bg-ivory/10 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-ivory backdrop-blur transition hover:bg-ivory/20"
            >
              Explore Gifting
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="border-y border-champagne/70 bg-ivory/70 px-5 py-4 text-espresso sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-xs uppercase tracking-[0.28em] text-mocha sm:justify-between">
        {trustHighlights.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}

function UGCSection() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Worn in real life"
          title="A reel of everyday glow"
          description="Styled on bare skin, crisp shirting, and evening tailoring — the way our community actually wears Velmora."
        />
        <div className="hide-scrollbar mt-10 flex gap-5 overflow-x-auto pb-2">
          {ugcMoments.map((moment, index) => {
            const titleId = `${moment.id}-title`
            const captionId = `${moment.id}-caption`

            return (
              <article
                key={moment.id}
                className="relative min-w-[230px] overflow-hidden rounded-[2rem] border border-champagne/70 bg-espresso shadow-card sm:min-w-[260px]"
              >
                <img
                  alt={moment.title}
                  data-strk-img-id={moment.id}
                  data-strk-img={`[${captionId}] [${titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width={index === 0 ? '800' : '600'}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-[420px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-ivory">
                  <h3 id={titleId} className="font-serif text-2xl text-ivory">
                    {moment.title}
                  </h3>
                  <p id={captionId} className="mt-2 text-sm leading-6 text-champagne">
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

function CategoriesSection() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Shop by category"
          title="Pieces for every styling mood"
          description="Build your everyday rotation with sculpted earrings, luminous necklaces, and polished huggies."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {categoryTiles.map((category) => {
            const titleId = `${category.name.toLowerCase()}-category-title`
            const descId = `${category.name.toLowerCase()}-category-desc`

            return (
              <Link
                key={category.name}
                to={`/shop?category=${encodeURIComponent(category.name)}`}
                className="group relative overflow-hidden rounded-[2rem] border border-champagne/70 bg-espresso shadow-card"
              >
                <img
                  alt={category.name}
                  data-strk-img-id={category.id}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-ivory">
                  <div>
                    <h3 id={titleId} className="font-serif text-4xl text-ivory">
                      {category.name}
                    </h3>
                    <p id={descId} className="mt-2 max-w-xs text-sm leading-6 text-champagne opacity-0 transition duration-300 group-hover:opacity-100">
                      {category.description}
                    </p>
                  </div>
                  <ChevronRight className="h-6 w-6 translate-x-0 transition duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <section id="story" className="px-5 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-champagne/70 bg-espresso shadow-veil">
          <img
            alt="Velmora founder styling jewelry"
            data-strk-img-id="velmora-story-image-l0p9k8"
            data-strk-img="[story-copy] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>
        <div className="rounded-[2rem] border border-champagne/70 bg-ivory p-8 shadow-card sm:p-10 lg:p-14">
          <p className="text-xs uppercase tracking-[0.34em] text-gold">Velmora story</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl leading-none text-espresso">
            Jewelry that feels considered from box to clasp.
          </h2>
          <p id="story-copy" className="mt-6 text-base leading-8 text-mocha">
            Velmora was created for women who want the glow of fine jewelry without saving it for special occasions. Every silhouette is designed to layer easily, feel comfortable all day, and arrive beautifully packaged for gifting yourself or someone else.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-espresso transition hover:text-gold"
          >
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function TestimonialSection() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Loved by customers"
          title="Thoughtful details, beautiful reactions"
          description="A few of the notes we keep rereading from customers who discovered their new everyday pieces."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2rem] border border-champagne/70 bg-ivory p-7 text-espresso shadow-card"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-mocha">“{testimonial.quote}”</p>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.22em] text-espresso">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsletterSection() {
  return (
    <section className="px-5 pb-20 pt-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-gold/50 bg-mocha px-6 py-10 text-ivory shadow-veil sm:px-10 lg:px-14 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-gold">Private list</p>
            <h2 className="mt-4 font-serif text-4xl leading-none text-ivory sm:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-champagne sm:text-base">
              Be first to hear about new drops, styling notes, and limited gifting edits curated for the season.
            </p>
          </div>
          <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-champagne/40 bg-ivory/10 px-5 py-4 text-sm text-ivory placeholder:text-champagne/80 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-espresso transition hover:bg-champagne"
            >
              Join Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const pageRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <main ref={pageRef} className="bg-parchment text-espresso">
      <HeroSection />
      <TrustBar />

      <section className="px-5 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Bestsellers"
            title="Our most gifted pieces"
            description="Polished essentials and softly sparkling statements chosen again and again for daily wear and meaningful gifting."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <UGCSection />
      <CategoriesSection />
      <StorySection />
      <TestimonialSection />
      <NewsletterSection />
    </main>
  )
}
