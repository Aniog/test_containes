import { ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import StockImage from '@/components/StockImage'
import { useImageLoader } from '@/hooks/useImageLoader'
import {
  categories,
  journalHighlights,
  products,
  testimonials,
  ugcMoments,
} from '@/data/products'

function HomePage({ onAddToCart }) {
  const containerRef = useImageLoader()
  const bestsellers = products.slice(0, 5)

  return (
    <main ref={containerRef} className="bg-velmora-espresso text-velmora-cream">
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-hero-bg-92ad5e"
          data-strk-bg="[hero-subhead] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,26,23,0.35),rgba(34,26,23,0.82)_60%,rgba(34,26,23,0.96))]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 pb-16 pt-32 md:px-8 md:pb-20 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="max-w-2xl space-y-7">
            <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">
              Fine layers for daily rituals
            </p>
            <h1
              id="hero-title"
              className="font-display text-6xl leading-[0.92] tracking-editorial text-velmora-cream md:text-7xl lg:text-[6rem]"
            >
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subhead"
              className="max-w-xl text-base leading-8 text-velmora-cream/78 md:text-lg"
            >
              Premium demi-fine jewelry for self-gifting, everyday polish, and beautifully wrapped moments worth keeping.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-velmora-gold bg-velmora-gold px-7 py-4 text-xs uppercase tracking-product text-velmora-ink shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition hover:border-velmora-gold-deep hover:bg-velmora-gold-deep hover:text-velmora-cream"
              >
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/#about"
                className="inline-flex items-center justify-center rounded-full border border-velmora-cream/20 px-7 py-4 text-xs uppercase tracking-product text-velmora-cream transition hover:border-velmora-gold hover:text-velmora-gold"
              >
                Discover our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div id="shipping" className="border-y border-velmora-cream/10 bg-velmora-mocha/95">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 text-[11px] uppercase tracking-[0.34em] text-velmora-cream/75 md:px-8 lg:px-10">
          {[
            'Free Worldwide Shipping',
            '30-Day Returns',
            '18K Gold Plated',
            'Hypoallergenic',
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <section id="collections" className="bg-velmora-ivory py-16 text-velmora-ink md:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-5 md:px-8 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Bestsellers"
              title="An edit of modern keepsakes"
              description="Five polished signatures designed to slip easily into daily rotation, with giftable appeal built in."
            />
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-product text-velmora-gold-deep transition hover:text-velmora-ink"
            >
              View all jewelry
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {bestsellers.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(item, quantity = 1, variant = item.variants[0], imageSrc = '') => onAddToCart(item, quantity, variant, imageSrc)}
                priority={index < 2}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-cream/10 bg-velmora-mocha/65 py-16 md:py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-5 md:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Seen on you"
              title="A reels-inspired row of real-life shine"
              description="Warm, candid styling moments designed to mimic the ease of your saved jewelry inspiration."
              tone="light"
              titleId="ugc-title"
              descriptionId="ugc-description"
            />
          </div>
          <div className="-mx-5 overflow-x-auto px-5 pb-4 md:mx-0 md:px-0">
            <div className="flex w-max gap-4 md:gap-5">
              {ugcMoments.map((moment) => {
                const captionId = `${moment.id}-caption`
                return (
                  <article
                    key={moment.id}
                    className="group relative w-[220px] overflow-hidden rounded-[2rem] border border-velmora-cream/10 bg-velmora-espresso shadow-[0_18px_40px_rgba(0,0,0,0.28)] md:w-[250px]"
                  >
                    <StockImage
                      alt={moment.caption}
                      imgId={moment.imgId}
                      query={`[${captionId}] jewelry editorial portrait`}
                      ratio="9x16"
                      width="700"
                      className="aspect-[9/16] h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.78))] px-5 pb-6 pt-16">
                      <p
                        id={captionId}
                        className="font-display text-3xl tracking-[0.08em] text-velmora-cream"
                      >
                        {moment.caption}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-velmora-ivory py-16 text-velmora-ink md:py-24">
        <div className="mx-auto max-w-7xl space-y-8 px-5 md:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Shop by category"
            title="Everyday icons, sorted beautifully"
            description="Browse signature categories for gifting, stacking, or building a polished capsule of your own."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => {
              const titleId = `category-${category.name.toLowerCase()}-title`
              const descId = `category-${category.name.toLowerCase()}-desc`
              return (
                <Link
                  key={category.name}
                  to={`/shop?category=${encodeURIComponent(category.name)}`}
                  className="group relative block overflow-hidden rounded-[2rem] bg-velmora-sand"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                  <StockImage
                    alt={category.name}
                    imgId={category.imageId}
                    query={`[${descId}] [${titleId}]`}
                    ratio="3x4"
                    width="900"
                    className="aspect-[3/4] h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                    <div>
                      <h3
                        id={titleId}
                        className="font-display text-4xl tracking-editorial text-velmora-cream"
                      >
                        {category.name}
                      </h3>
                      <p id={descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-cream/80">
                        {category.description}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-product text-velmora-cream opacity-0 transition duration-500 group-hover:opacity-100">
                      Explore
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-velmora-cream/10 bg-velmora-mocha/65 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="overflow-hidden rounded-[2rem] bg-velmora-espresso/60">
            <StockImage
              alt="Velmora brand story"
              imgId="velmora-story-image-15df4c"
              query="[story-copy] [story-title]"
              ratio="4x3"
              width="1200"
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">Velmora atelier</p>
            <h2 id="story-title" className="font-display text-5xl leading-none tracking-editorial text-velmora-cream md:text-6xl">
              Designed with warmth, finished with restraint
            </h2>
            <p id="story-copy" className="max-w-xl text-base leading-8 text-velmora-cream/76">
              Velmora Fine Jewelry was imagined for women who want polished pieces without the distance of traditional luxury. Each style is chosen for softness, shine, and effortless repeat wear — made to gift beautifully and keep close.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-product text-velmora-gold transition hover:text-velmora-cream"
            >
              Our Story
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-velmora-ivory py-16 text-velmora-ink md:py-24">
        <div className="mx-auto max-w-7xl space-y-8 px-5 md:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved for the details"
            description="A refined finish, gifting-ready packaging, and premium feel — repeatedly mentioned by our customers."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[2rem] border border-velmora-line/70 bg-velmora-sand p-7 shadow-[0_18px_50px_rgba(36,27,24,0.08)]"
              >
                <div className="mb-5 flex items-center gap-1 text-velmora-gold-deep">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
                <p className="text-base leading-8 text-velmora-mute">“{testimonial.quote}”</p>
                <p className="mt-6 text-xs uppercase tracking-product text-velmora-ink">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="border-y border-velmora-cream/10 bg-velmora-mocha/65 py-16 md:py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-5 md:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Journal"
            title="Notes from the styling desk"
            description="Short reads that help customers gift better, layer more easily, and make each purchase feel considered."
            tone="light"
            titleId="journal-title"
            descriptionId="journal-description"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {journalHighlights.map((entry, index) => (
              <article
                key={entry.title}
                className="rounded-[2rem] border border-velmora-cream/10 bg-velmora-espresso/60 p-7"
              >
                <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-display text-4xl tracking-editorial text-velmora-cream">
                  {entry.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-velmora-cream/72">
                  {entry.subtitle}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" className="bg-velmora-ivory py-16 text-velmora-ink md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8 lg:px-10">
          <div className="rounded-[2.5rem] border border-velmora-gold/40 bg-velmora-gold px-6 py-10 shadow-[0_30px_80px_rgba(36,27,24,0.12)] md:px-10 md:py-14">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-eyebrow text-velmora-ink/70">Private list</p>
                <h2 className="font-display text-5xl leading-none tracking-editorial text-velmora-ink md:text-6xl">
                  Join for 10% off your first order
                </h2>
                <p className="max-w-2xl text-base leading-8 text-velmora-ink/72">
                  Early access to new drops, styling notes, and gifting edits — delivered with the same restraint as the jewelry itself.
                </p>
              </div>
              <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row md:w-[420px]">
                <input
                  type="email"
                  placeholder="Email address"
                  className="h-14 flex-1 rounded-full border border-velmora-ink/15 bg-velmora-cream px-5 text-sm text-velmora-ink placeholder:text-velmora-mute focus:outline-none focus:ring-2 focus:ring-velmora-ink/20"
                />
                <button
                  type="submit"
                  className="h-14 rounded-full border border-velmora-ink bg-velmora-ink px-7 text-xs uppercase tracking-product text-velmora-cream transition hover:bg-velmora-gold-deep hover:border-velmora-gold-deep"
                >
                  Join now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
