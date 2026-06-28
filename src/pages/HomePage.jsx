import { Link } from 'react-router-dom'
import { ArrowRight, MoveRight, Star } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import {
  journalPosts,
  products,
  testimonials,
  trustPoints,
  ugcMoments,
} from '@/data/products'
import { getPlaceholderImage } from '@/lib/placeholders'

const categories = [
  {
    title: 'Earrings',
    prompt: 'Editorial close-up of warm gold earrings on model in soft neutral light',
  },
  {
    title: 'Necklaces',
    prompt: 'Luxury gold necklace styled on collarbone with soft beige fashion styling',
  },
  {
    title: 'Huggies',
    prompt: 'Close-up of stacked gold huggie earrings in warm editorial studio portrait',
  },
]

function HomePage() {
  const bestsellers = products.slice(0, 5)
  const heroFallback = getPlaceholderImage({
    title: 'Crafted to be Treasured',
    subtitle: 'Warm editorial gold jewelry portrait',
    ratio: '16x9',
    mood: 'hero',
  })
  const storyFallback = getPlaceholderImage({
    title: 'Our Story',
    subtitle: 'Intimate quiet luxury portrait',
    ratio: '4x3',
    mood: 'story',
  })

  return (
    <div className="pb-20">
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-cocoa text-ivory">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-velmora-4b8ca1"
          data-strk-bg="[hero-subhead] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
          style={{ backgroundImage: `url(${heroFallback})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/78 via-ink/45 to-ink/15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,159,88,0.22),transparent_28%)]" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1360px] items-end px-4 pb-16 pt-28 sm:px-6 md:pb-20 lg:px-10">
          <div className="max-w-2xl space-y-8">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.38em] text-ivory/72">
                Velmora Fine Jewelry
              </p>
              <h1
                id="hero-title"
                className="max-w-xl font-serif text-5xl leading-[0.92] text-ivory sm:text-6xl lg:text-7xl"
              >
                Crafted to be Treasured
              </h1>
              <p
                id="hero-subhead"
                className="max-w-lg text-base leading-7 text-ivory/80 sm:text-lg"
              >
                Warmly lit, quietly luxurious demi-fine jewelry designed for self-gifting,
                celebration, and every day in between.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-medium text-ink transition hover:bg-gold-deep"
                to="/shop"
              >
                Shop the Collection
              </Link>
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-ivory/30 px-7 text-sm font-medium text-ivory transition hover:border-gold hover:bg-ivory/10"
                to="/product/royal-heirloom-set"
              >
                Explore Gift Sets
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-sand bg-ivory/90">
        <div className="mx-auto grid max-w-[1360px] gap-3 px-4 py-3 text-center text-[11px] uppercase tracking-[0.32em] text-ink/70 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-10">
          {trustPoints.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-[1360px] px-4 py-18 sm:px-6 lg:px-10 lg:py-24">
        <div className="flex items-end justify-between gap-6 border-b border-sand pb-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.34em] text-ink/55">Bestsellers</p>
            <h2 className="font-serif text-4xl text-ink sm:text-5xl">
              Most-loved pieces, thoughtfully priced
            </h2>
          </div>
          <Link
            className="hidden items-center gap-2 text-xs uppercase tracking-[0.28em] text-ink/60 transition hover:text-gold md:inline-flex"
            to="/shop"
          >
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {bestsellers.map((product, index) => (
            <ProductCard
              key={product.id}
              eager={index < 2}
              featured={index === 0}
              product={product}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-sand bg-ivory/80 py-18 lg:py-22">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
          <div className="mb-7 flex items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.34em] text-ink/55">As seen on you</p>
              <h2 className="font-serif text-4xl text-ink sm:text-5xl">A reel of everyday glow</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-6 text-ink/65 md:block">
              Styled like an editorial Reels strip, with soft captions and warm on-body detail.
            </p>
          </div>

          <div className="flex snap-x gap-4 overflow-x-auto pb-2">
            {ugcMoments.map((moment) => {
              const titleId = `${moment.id}-title`
              const captionId = `${moment.id}-caption`

              const fallbackSrc = getPlaceholderImage({
                title: moment.title,
                subtitle: moment.caption,
                ratio: '9x16',
                mood: 'ugc',
              })

              return (
                <article
                  key={moment.id}
                  className="group relative min-w-[260px] snap-start overflow-hidden rounded-[1.8rem] bg-cocoa text-ivory shadow-card sm:min-w-[300px]"
                >
                  <img
                    alt={moment.title}
                    className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    data-strk-img-id={`${moment.id}-image`}
                    data-strk-img={`[${captionId}] [${titleId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="600"
                    src={fallbackSrc}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 space-y-2 p-5">
                    <p id={captionId} className="font-serif text-xl text-ivory/94">
                      {moment.caption}
                    </p>
                    <p
                      id={titleId}
                      className="text-[11px] uppercase tracking-[0.34em] text-ivory/72"
                    >
                      {moment.title}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-4 py-18 sm:px-6 lg:px-10 lg:py-24">
        <div className="mb-8 space-y-3 border-b border-sand pb-6">
          <p className="text-xs uppercase tracking-[0.34em] text-ink/55">Shop by category</p>
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">Jewelry for every kind of occasion</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {categories.map((category, index) => {
            const titleId = `category-${category.title.toLowerCase()}-title`
            const promptId = `category-${category.title.toLowerCase()}-prompt`
            const link = `/shop?category=${category.title.toLowerCase()}`

            const fallbackSrc = getPlaceholderImage({
              title: category.title,
              subtitle: category.prompt,
              ratio: '4x3',
              mood: 'story',
            })

            return (
              <Link
                key={category.title}
                className="group relative overflow-hidden rounded-[1.8rem] bg-cocoa"
                to={link}
              >
                <img
                  alt={category.title}
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                  data-strk-img-id={`category-tile-${index}`}
                  data-strk-img={`[${promptId}] [${titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src={fallbackSrc}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                <p id={promptId} className="sr-only">
                  {category.prompt}
                </p>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 py-5 text-ivory">
                  <h3 id={titleId} className="font-serif text-3xl">
                    {category.title}
                  </h3>
                  <MoveRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section
        id="story"
        className="mx-auto grid max-w-[1360px] gap-8 px-4 py-18 sm:px-6 lg:grid-cols-[1.05fr,0.95fr] lg:px-10 lg:py-24"
      >
        <div className="overflow-hidden rounded-[2rem] bg-cocoa shadow-card">
          <img
            alt="Velmora brand story"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id="story-image-velmora-d9f28a"
            data-strk-img="[story-kicker] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src={storyFallback}
          />
        </div>
        <div className="flex items-center">
          <div className="space-y-6 rounded-[2rem] border border-sand bg-ivory p-8 text-ink shadow-soft sm:p-10 lg:p-14">
            <p id="story-kicker" className="text-xs uppercase tracking-[0.34em] text-ink/55">
              Our world
            </p>
            <h2 id="story-title" className="font-serif text-4xl text-ink sm:text-5xl">
              Jewelry that feels intimate, effortless, and gift-worthy
            </h2>
            <p className="text-base leading-8 text-ink/68">
              Velmora was imagined for the woman who wants pieces that elevate her day
              without demanding attention. Our collections balance softness, polish, and
              a sense of permanence at an accessible luxury price point.
            </p>
            <Link
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-ink transition hover:text-gold"
              to="/shop"
            >
              Our Story <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-sand bg-ivory/80 py-18 lg:py-22">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
          <div className="mb-8 space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.34em] text-ink/55">Testimonials</p>
            <h2 className="font-serif text-4xl text-ink sm:text-5xl">Loved for the details</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[1.8rem] border border-sand bg-ivory p-7 text-ink shadow-soft"
              >
                <div className="mb-5 flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={`${testimonial.name}-${index}`} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
                <p className="text-base leading-7 text-ink/72">“{testimonial.quote}”</p>
                <p className="mt-5 text-xs uppercase tracking-[0.3em] text-ink/55">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="mx-auto max-w-[1360px] px-4 py-18 sm:px-6 lg:px-10 lg:py-24">
        <div className="mb-8 flex items-end justify-between gap-6 border-b border-sand pb-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.34em] text-ink/55">Journal</p>
            <h2 className="font-serif text-4xl text-ink sm:text-5xl">Quiet notes from Velmora</h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-6 text-ink/65 md:block">
            Styling ideas, gifting guides, and care rituals for a longer-lasting glow.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {journalPosts.map((post, index) => {
            const titleId = `${post.id}-title`
            const excerptId = `${post.id}-excerpt`

            const fallbackSrc = getPlaceholderImage({
              title: post.title,
              subtitle: post.excerpt,
              ratio: '4x3',
              mood: 'journal',
            })

            return (
              <article
                key={post.id}
                className="overflow-hidden rounded-[1.8rem] border border-sand bg-ivory text-ink shadow-soft"
              >
                <img
                  alt={post.title}
                  className="aspect-[4/3] w-full object-cover"
                  data-strk-img-id={`journal-${index}-image`}
                  data-strk-img={`[${excerptId}] [${titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src={fallbackSrc}
                />
                <div className="space-y-4 p-6">
                  <h3 id={titleId} className="font-serif text-3xl text-ink">
                    {post.title}
                  </h3>
                  <p id={excerptId} className="text-sm leading-6 text-ink/68">
                    {post.excerpt}
                  </p>
                  <a className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-ink/60 transition hover:text-gold" href="#">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1360px] rounded-[2.25rem] bg-cocoa px-6 py-10 text-ivory shadow-card sm:px-8 lg:px-14 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:items-end">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.34em] text-ivory/65">Private access</p>
              <h2 className="font-serif text-4xl text-ivory sm:text-5xl">
                Join for 10% off your first order
              </h2>
              <p className="max-w-2xl text-base leading-7 text-ivory/74">
                Be first to know about new drops, gift edits, and restocks of our most-loved pieces.
              </p>
            </div>

            <form className="grid gap-3 sm:min-w-[360px] sm:grid-cols-[1fr,auto]">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                className="min-h-12 rounded-full border border-ivory/18 bg-ivory px-5 text-sm text-ink placeholder:text-ink/45 focus:border-gold focus:outline-none"
                placeholder="Email address"
                type="email"
              />
              <button
                className="min-h-12 rounded-full bg-gold px-6 text-sm font-medium text-ink transition hover:bg-gold-deep"
                type="submit"
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
