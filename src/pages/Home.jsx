import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories, journalEntries, products, testimonials, ugcMoments } from '@/data/store.js'
import { ProductCard } from '@/components/products/ProductCard.jsx'
import { PrimaryButton, SecondaryButton, SectionHeading, TrustBar } from '@/components/layout/Shell.jsx'
import { useCart } from '@/context/CartContext.jsx'

const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <section ref={containerRef} className="relative min-h-[88vh] overflow-hidden bg-stone-950 text-white">
      <div
        className="absolute inset-0 scale-[1.02]"
        data-strk-bg-id="hero-bg-velmora-0f22a1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,18,16,0.88),rgba(22,18,16,0.5)_42%,rgba(22,18,16,0.68))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,183,124,0.18),transparent_28%)]" />
      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-end px-5 pb-16 pt-28 md:px-8 md:pb-24 lg:px-12">
        <div className="max-w-2xl rounded-[2.25rem] border border-white/15 bg-black/25 px-6 py-8 shadow-[0_28px_90px_rgba(12,10,8,0.28)] backdrop-blur-sm md:px-10 md:py-10">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/75">Demi-fine jewelry for modern rituals</p>
          <h1 id="hero-title" className="font-display text-5xl leading-[0.92] text-white md:text-7xl lg:text-[5.75rem]">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">
            Warm gold layers, sculptural silhouettes, and quietly elevated details designed for gifting, keeping, and wearing every day.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton as={Link} to="/shop">Shop the Collection</PrimaryButton>
            <SecondaryButton as={Link} to="/product/golden-sphere-huggies" className="border-white/40 bg-white/5 text-white hover:border-white hover:bg-white hover:text-ink">
              Discover Bestsellers
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

const UgcSection = () => {
  const containerRef = useRef(null)

  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <section className="section-shell overflow-hidden pt-6 md:pt-10">
      <div className="mb-8 flex items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Worn in real life"
          title="A reels-style look at Velmora in motion"
          description="From ear stacks to soft-gold layers at the collarbone, these moments bring the collection to life."
        />
      </div>
      <div ref={containerRef} className="hide-scrollbar flex gap-4 overflow-x-auto pb-2">
        {ugcMoments.map((moment) => (
          <article key={moment.id} className="relative min-w-[72%] overflow-hidden rounded-[2rem] border border-line/80 bg-stone-950 shadow-card sm:min-w-[44%] lg:min-w-[24%]">
            <div className="aspect-[9/16]">
              <img
                alt={moment.caption}
                className="h-full w-full object-cover"
                data-strk-img-id={moment.imageId}
                data-strk-img={`[${moment.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(22,18,16,0.75))] px-5 pb-6 pt-16 text-white">
              <p id={moment.titleId} className="font-display text-2xl leading-tight text-white">{moment.caption}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.28em] text-white/75">@velmorafinejewelry</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

const CategoryTile = ({ category }) => {
  const containerRef = useRef(null)

  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <Link to="/shop" ref={containerRef} className="group relative overflow-hidden rounded-[2rem] border border-line/80 bg-stone-950 shadow-card">
      <div className="aspect-[4/5]">
        <img
          alt={category.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          data-strk-img-id={category.imageId}
          data-strk-img={`[${category.descId}] [${category.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(22,18,16,0.72))]" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p id={category.titleId} className="font-display text-3xl text-white">{category.name}</p>
        <p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-white/80 opacity-0 transition duration-300 group-hover:opacity-100">
          {category.description}
        </p>
      </div>
    </Link>
  )
}

const StorySection = () => {
  const containerRef = useRef(null)

  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <section id="story" className="section-shell">
      <div className="grid gap-10 overflow-hidden rounded-[2.25rem] border border-line/80 bg-card p-5 shadow-card md:grid-cols-[1.15fr_0.95fr] md:p-8 lg:gap-14 lg:p-10">
        <div ref={containerRef} className="overflow-hidden rounded-[1.75rem] bg-stone-950">
          <div className="aspect-[4/5] md:aspect-[4/4.6]">
            <img
              alt="Velmora jewelry studio story"
              className="h-full w-full object-cover"
              data-strk-img-id="story-image-77c1af"
              data-strk-img="[story-desc] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1100"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="sr-only">
              <p id="story-title">A quieter approach to demi-fine jewelry</p>
              <p id="story-desc">Warm gold jewelry, refined finishing, elegant packaging, and editorial styling in the Velmora studio.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center py-2 md:py-8">
          <p className="text-xs uppercase tracking-[0.34em] text-ink/58">Our story</p>
          <h2 className="mt-5 font-display text-4xl leading-none text-ink md:text-5xl">
            Designed for the moments you want to keep close.
          </h2>
          <p className="mt-6 text-base leading-7 text-ink/74">
            Velmora was created to make premium-looking jewelry feel easy, wearable, and genuinely giftable. Every piece is designed around warm tone, clean proportion, and that quiet sense of polish that lifts the everyday.
          </p>
          <p className="mt-4 text-base leading-7 text-ink/74">
            We focus on demi-fine finishes, thoughtful silhouettes, and packaging that feels just as special when chosen for yourself as it does when given to someone else.
          </p>
          <Link to="/shop" className="mt-8 inline-flex text-sm uppercase tracking-[0.28em] text-ink transition hover:text-champagne-deep">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}

const NewsletterSection = () => (
  <section className="section-shell pt-8 md:pt-12">
    <div className="rounded-[2.25rem] bg-stone-950 px-6 py-10 text-white shadow-[0_24px_80px_rgba(22,18,16,0.18)] md:px-10 md:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.34em] text-white/65">Private updates</p>
        <h2 className="mt-4 font-display text-4xl leading-none text-white md:text-5xl">
          Join for 10% off your first order
        </h2>
        <p className="mt-5 text-base leading-7 text-white/72">
          Receive first access to new drops, styling notes, and gifting moments curated for the season.
        </p>
      </div>
      <form className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-0 lg:min-w-[420px] lg:max-w-xl lg:flex-1">
        <label className="sr-only" htmlFor="newsletter-email">Email</label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Enter your email"
          className="h-14 flex-1 rounded-full border border-white/15 bg-white/8 px-6 text-sm text-white placeholder:text-white/45 focus:border-champagne focus:outline-none"
        />
        <PrimaryButton type="submit" className="h-14 px-8">Join Now</PrimaryButton>
      </form>
    </div>
  </section>
)

export default function Home() {
  const { addToCart } = useCart()
  const bestsellers = products.slice(0, 5)

  return (
    <div>
      <HeroSection />
      <TrustBar />

      <section className="section-shell">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Bestsellers"
            title="Signature pieces with an editorial glow"
            description="Refined favorites chosen for daily polish, celebratory gifting, and effortless layering."
          />
          <SecondaryButton as={Link} to="/shop" className="hidden md:inline-flex">View All</SecondaryButton>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} onQuickAdd={(item) => addToCart(item, 'Gold Tone', 1)} compact />
          ))}
        </div>
      </section>

      <UgcSection />

      <section className="section-shell pt-8 md:pt-10">
        <SectionHeading
          eyebrow="Shop by category"
          title="Built around the way you wear jewelry"
          description="Start with a silhouette and discover polished pieces that pair beautifully together."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((category) => <CategoryTile key={category.id} category={category} />)}
        </div>
      </section>

      <StorySection />

      <section className="section-shell pt-8 md:pt-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="Words from women who wear Velmora"
          description="A premium feel, a flattering finish, and pieces that quickly become part of the everyday uniform."
          align="center"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="rounded-[1.75rem] border border-line/80 bg-card p-7 shadow-card">
              <div className="flex items-center gap-1 text-champagne-deep">★★★★★</div>
              <p className="mt-5 text-base leading-7 text-ink/78">“{review.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-[0.28em] text-ink/65">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <NewsletterSection />

      <section id="journal" className="section-shell pt-8 md:pt-12">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Journal"
            title="Styling notes, gifting ideas, and care rituals"
            description="An editorial corner for thoughtful details that extend the life and meaning of every piece."
          />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {journalEntries.map((entry) => (
            <article key={entry.id} className="rounded-[1.75rem] border border-line/80 bg-card p-8 shadow-card">
              <p className="text-xs uppercase tracking-[0.3em] text-ink/55">Editorial Note</p>
              <h3 className="mt-5 font-display text-3xl text-ink">{entry.title}</h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-ink/70">{entry.excerpt}</p>
              <a href="#" className="mt-8 inline-flex text-xs uppercase tracking-[0.28em] text-ink transition hover:text-champagne-deep">
                Read Story
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
