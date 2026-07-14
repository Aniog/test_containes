import { Link } from 'react-router-dom'
import { ArrowRight, MoveRight } from 'lucide-react'
import { products, testimonials, trustPillars, ugcMoments, journalEntries } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import ProductCard from '@/components/common/ProductCard.jsx'
import NewsletterCard from '@/components/common/NewsletterCard.jsx'

const categories = [
  {
    id: 'earrings',
    title: 'Earrings',
    description: 'Statement drops and refined everyday silhouettes.',
  },
  {
    id: 'necklaces',
    title: 'Necklaces',
    description: 'Luminous layering pieces and gifting-ready pendants.',
  },
  {
    id: 'huggies',
    title: 'Huggies',
    description: 'Chunky domes and polished essentials for daily wear.',
  },
]

const Home = () => {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="bg-ivory text-ink">
      <section className="relative isolate overflow-hidden bg-obsidian text-ivory">
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-hero-bg-4kd9"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-velmora-glow" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-20 pt-36 sm:px-8 md:items-center md:pb-24 lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-brand text-champagne">Fine demi-jewelry for every day</p>
            <h1 id="hero-title" className="mt-5 font-serif text-6xl leading-none text-ivory sm:text-7xl lg:text-[5.7rem]">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-7 text-ivory/78 sm:text-lg">
              Warm gold finishes, sculptural details, and giftable pieces designed to be worn on repeat.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-full bg-champagne px-7 py-4 text-xs font-semibold uppercase tracking-brand text-obsidian transition hover:bg-bronze hover:text-ivory"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-flex items-center justify-center rounded-full border border-ivory/25 px-7 py-4 text-xs font-semibold uppercase tracking-brand text-ivory transition hover:border-champagne hover:text-champagne"
              >
                Discover Velmora
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-mist bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-4 text-[0.68rem] uppercase tracking-brand text-ink sm:grid-cols-4 sm:px-8 lg:px-12 xl:px-16">
          {trustPillars.map((pillar) => (
            <p key={pillar} className="text-center text-ink/72">
              {pillar}
            </p>
          ))}
        </div>
      </div>

      <section className="px-5 py-16 sm:px-8 md:py-24 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Bestsellers"
            title="Pieces women reach for on repeat"
            description="A curated edit of demi-fine favorites designed for gifting, layering, and self-purchase moments that feel quietly indulgent."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-mist bg-white px-5 py-16 sm:px-8 md:py-24 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Seen on you"
            title="A reel-style row of everyday styling"
            description="A softly editorial take on the way our community wears gold cuffs, necklaces, and huggies from day to night."
          />
          <div className="no-scrollbar mt-10 flex gap-4 overflow-x-auto pb-2 sm:gap-6">
            {ugcMoments.map((moment) => {
              const titleId = `${moment.id}-title`
              const descId = `${moment.id}-desc`
              return (
                <article
                  key={moment.id}
                  className="relative min-w-[15rem] overflow-hidden rounded-[2rem] bg-obsidian text-ivory shadow-soft sm:min-w-[18rem]"
                >
                  <img
                    alt={moment.title}
                    className="aspect-[9/16] w-full object-cover opacity-90"
                    data-strk-img-id={`${moment.id}-image`}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent px-5 pb-6 pt-20">
                    <h3 id={titleId} className="font-serif text-3xl text-ivory">
                      {moment.title}
                    </h3>
                    <p id={descId} className="mt-3 text-sm leading-6 text-ivory/72">
                      {moment.caption}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="collections" className="px-5 py-16 sm:px-8 md:py-24 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Collections"
            title="Shop by category"
            description="An elegant edit of silhouettes tailored to how you actually wear jewelry — stacked, gifted, and collected over time."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((category) => {
              const titleId = `${category.id}-title`
              const descId = `${category.id}-desc`
              return (
                <Link
                  key={category.id}
                  to={`/shop?category=${category.title}`}
                  className="group relative overflow-hidden rounded-[2rem] bg-obsidian text-ivory shadow-soft"
                >
                  <img
                    alt={category.title}
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    data-strk-img-id={`${category.id}-category-image`}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
                    <h3 id={titleId} className="font-serif text-4xl text-ivory">
                      {category.title}
                    </h3>
                    <p id={descId} className="mt-3 max-w-xs text-sm leading-6 text-ivory/72 opacity-0 transition duration-300 group-hover:opacity-100">
                      {category.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-16 sm:px-8 md:py-24 lg:px-12 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2rem] border border-mist bg-white shadow-soft lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-sand">
            <img
              alt="Velmora brand story"
              className="h-full w-full object-cover"
              data-strk-img-id="brand-story-image-38ff"
              data-strk-img="[story-body] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-12">
            <p className="text-xs uppercase tracking-brand text-bronze">Velmora story</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl leading-none text-ink">
              Jewelry for the quiet moments that still deserve ceremony
            </h2>
            <p id="story-body" className="mt-6 text-sm leading-7 text-ink/72 sm:text-base">
              Velmora was created for women who want the look and feel of fine jewelry without reserving it only for special occasions. Our pieces are sculpted to sit beautifully against skin, layer easily, and arrive gift-ready.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-brand text-bronze">
              Our Story <MoveRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-mist bg-white px-5 py-16 sm:px-8 md:py-24 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Loved by customers"
            title="Thoughtful details, beautifully received"
            description="Premium enough to feel special, easy enough to wear every day, and always packaged with gifting in mind."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((review) => (
              <article key={review.id} className="rounded-[2rem] border border-mist bg-ivory p-6 shadow-soft">
                <div className="flex items-center gap-1 text-champagne">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-ink/78">“{review.quote}”</p>
                <p className="mt-6 text-xs uppercase tracking-brand text-bronze">{review.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="px-5 py-16 sm:px-8 md:py-20 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Journal"
              title="Editorial notes for styling and gifting"
              description="Short reads designed to help customers collect, layer, and choose pieces with more confidence."
            />
            <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-brand text-bronze">
              Explore all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {journalEntries.map((entry) => (
              <article key={entry.id} className="rounded-[2rem] border border-mist bg-white p-7 shadow-soft">
                <p className="text-xs uppercase tracking-brand text-bronze">Journal</p>
                <h3 className="mt-4 font-serif text-4xl leading-none text-ink">{entry.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/72">{entry.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterCard />
    </div>
  )
}

export default Home
