import { ArrowRight, Mail, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/shop/ProductCard.jsx'
import SectionHeader from '@/components/shared/SectionHeader.jsx'
import {
  brandStory,
  categoryTiles,
  products,
  svgPlaceholder,
  testimonials,
  trustPoints,
  ugcStories,
} from '@/data/storefront'
import useStrkImages from '@/hooks/useStrkImages.jsx'

function HomePage() {
  const containerRef = useStrkImages([])
  const bestsellerProducts = products.slice(0, 5)

  return (
    <div ref={containerRef}>
      <section className="relative overflow-hidden bg-shadow text-cream">
        <div
          className="absolute inset-0"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-id="velmora-home-hero-bg-a11f8"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-shadow via-shadow/70 to-shadow/35" />
        <div className="relative page-shell flex min-h-[92vh] items-end py-24 pb-16 pt-36 sm:pb-24 md:min-h-screen md:pb-28 lg:pb-24 lg:pt-40">
          <div className="max-w-2xl space-y-8">
            <p className="eyebrow text-cream/75">Velmora Fine Jewelry</p>
            <div className="space-y-4">
              <h1
                className="font-display text-5xl leading-none text-cream sm:text-6xl lg:text-7xl"
                id="home-hero-title"
              >
                Crafted to be Treasured
              </h1>
              <p
                className="max-w-xl text-base leading-8 text-cream/80 sm:text-lg"
                id="home-hero-subtitle"
              >
                Demi-fine gold jewelry with warm editorial polish, made for self-gifting, milestone moments, and daily wear.
              </p>
            </div>
            <Link
              className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-medium uppercase tracking-micro text-cream transition hover:bg-accent-deep"
              to="/shop"
            >
              Shop the Collection
              <MoveRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-panel/70">
        <div className="page-shell flex flex-wrap items-center justify-center gap-x-7 gap-y-3 py-4 text-center text-[11px] uppercase tracking-micro text-truffle sm:gap-x-10">
          {trustPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </section>

      <section className="page-shell py-20 sm:py-24">
        <div className="space-y-10">
          <SectionHeader
            description="A considered edit of pieces designed to layer, gift, and wear on repeat."
            eyebrow="Bestsellers"
            link={{ href: '/shop', label: 'Shop all pieces' }}
            title="The signatures of the house"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {bestsellerProducts.map((product) => (
              <ProductCard key={product.id} imageScope="home-bestseller" product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20 sm:py-24">
        <div className="page-shell space-y-10">
          <SectionHeader
            description="A scrolling reel of soft styling moments from our community and studio world."
            eyebrow="Styled in motion"
            title="A reel-worthy Velmora glow"
          />
          <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-2">
            {ugcStories.map((story, index) => {
              const titleId = `ugc-title-${story.id}`
              const descId = `ugc-desc-${story.id}`
              return (
                <article
                  key={story.id}
                  className="relative min-w-[220px] max-w-[220px] overflow-hidden rounded-[2rem] bg-shadow shadow-soft"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-shadow via-shadow/20 to-transparent" />
                  <img
                    alt={story.title}
                    className="aspect-reel h-full w-full object-cover"
                    data-strk-img={`[${descId}] [${titleId}] warm jewelry editorial portrait`}
                    data-strk-img-id={`ugc-card-${index}-c91`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="600"
                    src={svgPlaceholder}
                  />
                  <div className="absolute inset-x-0 bottom-0 space-y-2 p-5 text-cream">
                    <p className="text-sm uppercase tracking-micro text-cream/70">Featured look</p>
                    <h3 className="font-display text-3xl leading-none" id={titleId}>
                      {story.title}
                    </h3>
                    <p className="text-sm leading-6 text-cream/80" id={descId}>
                      {story.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="page-shell py-20 sm:py-24">
        <div className="space-y-10">
          <SectionHeader
            eyebrow="Shop by category"
            title="Choose your signature"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {categoryTiles.map((tile, index) => {
              const titleId = `category-title-${tile.title.toLowerCase()}`
              const descId = `category-desc-${tile.title.toLowerCase()}`
              return (
                <Link
                  key={tile.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-border bg-shadow"
                  to={tile.href}
                >
                  <img
                    alt={tile.title}
                    className="aspect-editorial h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    data-strk-img={`[${descId}] [${titleId}] editorial gold jewelry still life`}
                    data-strk-img-id={`category-${index}-tile-49`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1200"
                    src={svgPlaceholder}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-shadow/90 via-shadow/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-cream">
                    <div className="space-y-2">
                      <h3 className="font-display text-4xl" id={titleId}>
                        {tile.title}
                      </h3>
                      <p className="max-w-xs text-sm leading-6 text-cream/80" id={descId}>
                        {tile.description}
                      </p>
                    </div>
                    <span className="rounded-full border border-cream/20 bg-cream/10 p-3 transition group-hover:bg-accent group-hover:border-accent">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-panel/60 py-20 sm:py-24">
        <div className="page-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-shadow shadow-soft">
            <img
              alt="Velmora story visual"
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img="[story-description] [story-title] women jewelry editorial portrait"
              data-strk-img-id="story-image-78ff1"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src={svgPlaceholder}
            />
          </div>
          <div className="max-w-xl space-y-6">
            <p className="eyebrow">Our world</p>
            <h2 className="font-display text-5xl leading-none text-ink sm:text-6xl" id="story-title">
              {brandStory.title}
            </h2>
            <p className="text-base leading-8 text-muted" id="story-description">
              {brandStory.description}
            </p>
            <Link className="accent-link" to="/about">
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell py-20 sm:py-24">
        <div className="space-y-10">
          <SectionHeader
            eyebrow="Testimonials"
            title="Loved for the details"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[2rem] border border-border bg-surface p-8 shadow-card"
              >
                <div className="space-y-6">
                  <p className="text-accent">★★★★★</p>
                  <p className="text-base leading-8 text-truffle">“{testimonial.quote}”</p>
                  <p className="text-sm uppercase tracking-micro text-muted">
                    {testimonial.name}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell pb-20 sm:pb-24">
        <div className="rounded-[2.25rem] bg-accent px-6 py-10 text-cream shadow-soft sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-xl space-y-3">
            <p className="eyebrow text-cream/80">Newsletter</p>
            <h2 className="font-display text-4xl leading-none text-cream sm:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="text-sm leading-7 text-cream/85">
              Be first to know about new drops, gifting edits, and styling notes from the studio.
            </p>
          </div>
          <form className="mt-8 flex flex-col gap-3 lg:mt-0 lg:min-w-[440px] lg:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-truffle/60" />
              <input
                className="h-12 w-full rounded-full border border-cream/20 bg-cream pl-12 pr-5 text-sm text-ink outline-none placeholder:text-muted focus:border-shadow"
                id="newsletter-email"
                placeholder="Email address"
                type="email"
              />
            </div>
            <button
              className="inline-flex h-12 items-center justify-center rounded-full border border-cream/30 bg-shadow px-6 text-sm font-medium uppercase tracking-micro text-cream transition hover:bg-shadow/90"
              type="submit"
            >
              Join now
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default HomePage
