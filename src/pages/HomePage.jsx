import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard.jsx'
import SectionHeading from '@/components/shared/SectionHeading.jsx'
import { categories, journalHighlights, products, testimonials, ugcStories } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

function HeroSection() {
  return (
    <section className="relative isolate -mt-[88px] overflow-hidden bg-velmora-ink pt-24 text-velmora-cream sm:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(185,150,88,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(249,244,237,0.12),transparent_28%),linear-gradient(140deg,#1b1513_0%,#241a17_45%,#1b1513_100%)]" />
      <div className="absolute left-[-8%] top-20 h-72 w-72 rounded-full border border-white/8 bg-velmora-gold/10 blur-3xl" />
      <div className="absolute bottom-[-8%] right-[-4%] h-80 w-80 rounded-full bg-white/6 blur-3xl" />
      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-end gap-12 px-4 pb-16 pt-24 sm:px-6 md:pb-20 md:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24">
        <div className="max-w-xl space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.68rem] uppercase tracking-[0.3em] text-velmora-gold">
            <Sparkles className="h-3.5 w-3.5" />
            Fine-feeling demi-fine jewelry
          </p>
          <div className="space-y-5">
            <h1 id="hero-title" className="font-serif text-6xl leading-[0.9] text-velmora-cream sm:text-7xl lg:text-[5.9rem]">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="max-w-lg text-base leading-8 text-velmora-cream/80 sm:text-lg">
              Warm gold layers, luminous crystals, and gift-ready essentials designed for everyday indulgence.
            </p>
            <p id="hero-image-subject" aria-hidden="true" className="sr-only">
              close-up model portrait wearing gold earrings and a delicate gold necklace
            </p>
            <p id="hero-image-style" aria-hidden="true" className="sr-only">
              quiet luxury editorial beauty photograph with warm soft lighting
            </p>
            <p id="hero-image-detail" aria-hidden="true" className="sr-only">
              refined close crop, minimal neutral styling, jewelry on skin, no gift box props
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-velmora-gold px-8 py-4 text-sm uppercase tracking-[0.28em] text-velmora-ink transition duration-500 ease-luxe hover:-translate-y-0.5 hover:bg-velmora-cream"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/shop?collection=gifts"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.28em] text-velmora-cream transition hover:bg-white/10"
            >
              Discover gifts
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-xl">
          <div className="absolute -left-8 top-10 hidden h-40 w-40 rounded-full border border-white/10 bg-white/5 blur-3xl md:block" />
          <div className="rounded-[2.5rem] border border-white/10 bg-white/8 p-3 backdrop-blur-sm">
            <img
              alt="Velmora fine jewelry editorial"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover"
              data-strk-img-id="velmora-hero-model-91c"
              data-strk-img="[hero-image-detail] [hero-image-style] [hero-image-subject] [hero-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

  return (
    <div className="border-y border-velmora-line/30 bg-velmora-champagne/55">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 py-4 text-[0.68rem] uppercase tracking-[0.32em] text-velmora-espresso sm:gap-8 sm:px-6 lg:px-8">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  )
}

function UGCRow() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Community"
          title="Seen in the Softest Light"
          description="An editorial take on the reel format, inspired by the women who wear Velmora every day."
        />
      </div>

      <div className="mt-10 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] sm:gap-6">
        {ugcStories.map((story) => (
          <article
            key={story.id}
            className="relative min-w-[220px] max-w-[240px] overflow-hidden rounded-[2rem] border border-velmora-line/30 bg-velmora-ink text-velmora-cream shadow-soft"
          >
            <img
              alt={story.title}
              className="aspect-[9/16] w-full object-cover"
              data-strk-img-id={`${story.id}-reel-71d`}
              data-strk-img={`[${story.id}-description] [${story.id}-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/65 to-transparent px-5 pb-6 pt-16">
              <h3 id={`${story.id}-title`} className="font-serif text-2xl text-velmora-cream">
                {story.title}
              </h3>
              <p id={`${story.id}-description`} className="mt-2 text-sm leading-6 text-velmora-cream/80">
                {story.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Categories"
        title="Shop by Category"
        description="Curated essentials designed to move seamlessly from self-purchase to thoughtful gifting."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${encodeURIComponent(category.name)}`}
            className="group relative overflow-hidden rounded-[2rem] border border-velmora-line/30 bg-velmora-champagne shadow-soft"
          >
            <img
              alt={category.name}
              className="aspect-[4/5] w-full object-cover transition duration-700 ease-luxe group-hover:scale-[1.04]"
              data-strk-img-id={`category-${category.id}-img-b4c`}
              data-strk-img={`[category-${category.id}-description] [category-${category.id}-title]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="760"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/10 to-transparent opacity-95" />
            <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-16 text-velmora-cream">
              <h3
                id={`category-${category.id}-title`}
                className="font-serif text-3xl transition duration-500 ease-luxe group-hover:text-velmora-gold"
              >
                {category.name}
              </h3>
              <p
                id={`category-${category.id}-description`}
                className="mt-2 max-w-xs text-sm leading-6 text-velmora-cream/78 opacity-0 transition duration-500 ease-luxe group-hover:opacity-100"
              >
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function BrandStory() {
  return (
    <section id="our-story" className="bg-white/45 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-velmora-line/30 bg-velmora-champagne shadow-soft">
          <img
            alt="Velmora craftsmanship"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id="our-story-image-f92"
            data-strk-img="[our-story-copy] [our-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1000"
            src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
          />
        </div>
        <div className="flex items-center">
          <div className="max-w-xl rounded-[2rem] border border-velmora-line/30 bg-velmora-ivory p-8 shadow-soft sm:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-velmora-gold">Our Story</p>
            <h2 id="our-story-title" className="mt-3 font-serif text-5xl leading-none text-velmora-espresso">
              Jewelry that slips into your life with ease.
            </h2>
            <p id="our-story-copy" className="mt-6 text-sm leading-8 text-velmora-espresso/74 sm:text-base">
              Velmora was imagined for women who love the warmth of gold and the feeling of finishing an outfit with one considered detail. Each piece is made to feel elevated yet easy, whether chosen for yourself or wrapped as a gift.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-velmora-espresso transition hover:text-velmora-gold"
            >
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Testimonials"
        title="Loved for the Way It Wears"
        description="Soft shine, thoughtful packaging, and pieces designed to become part of your daily uniform."
        align="center"
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-[2rem] border border-velmora-line/30 bg-white/60 p-8 shadow-soft"
          >
            <p className="text-sm tracking-[0.18em] text-velmora-gold">★★★★★</p>
            <p className="mt-5 text-base leading-8 text-velmora-espresso/76">
              “{testimonial.quote}”
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-velmora-espresso">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Newsletter() {
  return (
    <section id="newsletter" className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-velmora-ink bg-velmora-radial px-6 py-10 text-velmora-cream shadow-velmora sm:px-10 lg:px-14 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-gold">Newsletter</p>
            <h2 className="mt-3 font-serif text-4xl leading-none text-velmora-cream sm:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-cream/78 sm:text-base">
              Receive early access to new drops, styling notes, and quietly special offers reserved for subscribers.
            </p>
          </div>
          <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="rounded-full border border-white/15 bg-white/8 px-5 py-4 text-sm text-velmora-cream placeholder:text-velmora-cream/50 focus:border-velmora-gold focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-velmora-gold px-6 py-4 text-sm uppercase tracking-[0.26em] text-velmora-ink transition hover:bg-velmora-cream"
            >
              Join now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function JournalPreview() {
  return (
    <section id="journal" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Journal"
          title="A More Considered Way to Wear Jewelry"
          description="Editorial notes, gifting ideas, and styling rituals to make your collection feel personal."
        />
        <Link
          to="/shop"
          className="text-sm uppercase tracking-[0.26em] text-velmora-espresso transition hover:text-velmora-gold"
        >
          Read more
        </Link>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {journalHighlights.map((entry) => (
          <article
            key={entry.id}
            className="rounded-[2rem] border border-velmora-line/30 bg-white/60 p-8 shadow-soft"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-gold">
              {entry.eyebrow}
            </p>
            <h3 className="mt-4 font-serif text-3xl leading-none text-velmora-espresso">
              {entry.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-velmora-espresso/72">
              {entry.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function HomePage() {
  const pageRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <div ref={pageRef}>
      <HeroSection />
      <TrustBar />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Bestsellers"
            title="Pieces Chosen on Repeat"
            description="Five quietly polished signatures for self-purchase, gifting, and every day in between."
          />
          <Link
            to="/shop"
            className="text-sm uppercase tracking-[0.26em] text-velmora-espresso transition hover:text-velmora-gold"
          >
            View all
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} priority={index < 2} />
          ))}
        </div>
      </section>

      <UGCRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <JournalPreview />
      <Newsletter />
    </div>
  )
}
