import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/shop/ProductCard'
import SectionHeading from '@/components/shared/SectionHeading'
import TrustBar from '@/components/shared/TrustBar'
import CategoryTiles from '@/components/shared/CategoryTiles'
import Testimonials from '@/components/shared/Testimonials'
import NewsletterSignup from '@/components/shared/NewsletterSignup'
import {
  brandStory,
  categoryTiles,
  heroContent,
  testimonials,
  trustItems,
  ugcMoments,
} from '@/data/siteContent'
import { products } from '@/data/products'

const bestsellers = products.slice(0, 5)

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden bg-velmora-ink text-velmora-ivory">
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-hero-bg"
          data-strk-bg={`[hero-visual-prompt] [hero-description] [hero-title] [hero-eyebrow]`}
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,20,18,0.62),rgba(28,20,18,0.78)_45%,rgba(28,20,18,0.92))]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 md:pb-20 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <p id="hero-visual-prompt" className="sr-only">
              {heroContent.backgroundPrompt}
            </p>
            <p
              id="hero-eyebrow"
              className="text-xs uppercase tracking-[0.34em] text-velmora-gold-soft"
            >
              {heroContent.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="mt-5 font-display text-6xl leading-[0.92] text-velmora-ivory sm:text-7xl lg:text-[6.8rem]"
            >
              {heroContent.title}
            </h1>
            <p
              id="hero-description"
              className="mt-6 max-w-2xl text-base leading-8 text-velmora-ivory/80 sm:text-lg"
            >
              {heroContent.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-velmora-gold px-7 py-4 text-xs uppercase tracking-[0.28em] text-velmora-cocoa transition hover:bg-velmora-gold-soft"
              >
                {heroContent.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/product/royal-heirloom-set"
                className="inline-flex items-center justify-center rounded-full border border-velmora-ivory/30 px-7 py-4 text-xs uppercase tracking-[0.28em] text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold"
              >
                Explore the Gift Edit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBar items={trustItems} />

      <section id="collections" className="bg-velmora-paper py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Bestsellers"
              title="Pieces women come back for"
              description="From polished huggies to crystal accents, these signatures anchor the Velmora wardrobe with an effortless glow."
            />
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-velmora-cocoa transition hover:text-velmora-bronze"
            >
              Shop all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {bestsellers.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index < 2} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-line bg-velmora-blush py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Styled in motion"
            title="A reel of real-life shine"
            description="A soft-scroll strip of editorial moments, inspired by the feeling of discovering your next favorite piece in the wild."
          />

          <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-2">
            {ugcMoments.map((moment) => {
              const titleId = `${moment.id}-title`
              const descId = `${moment.id}-desc`

              return (
                <article
                  key={moment.id}
                  className="group relative min-w-[16rem] snap-start overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-ink shadow-card sm:min-w-[18rem]"
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={moment.caption}
                    className="aspect-[9/16] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    data-strk-img-id={`${moment.id}-ugc-img`}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-ivory">
                    <p id={titleId} className="font-display text-3xl leading-none">
                      {moment.caption}
                    </p>
                    <p id={descId} className="mt-3 text-sm leading-7 text-velmora-muted">
                      {moment.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-velmora-paper py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Shop by category"
            title="Built to layer, gift, and keep"
            description="Choose your silhouette, then style it in your own rhythm — polished for every day, elevated for every plan."
          />

          <div className="mt-12">
            <CategoryTiles categories={categoryTiles} />
          </div>
        </div>
      </section>

      <section id="story" className="bg-velmora-ivory py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
          <div className="overflow-hidden rounded-[2.25rem] border border-velmora-line bg-velmora-panel shadow-card">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-copy] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-velmora-muted">
              Velmora values
            </p>
            <h2 id="brand-story-title" className="mt-4 font-display text-5xl leading-none text-velmora-cocoa sm:text-6xl">
              {brandStory.title}
            </h2>
            <p id="brand-story-copy" className="mt-6 text-base leading-8 text-velmora-stone sm:text-lg">
              {brandStory.body}
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-velmora-cocoa transition hover:text-velmora-bronze"
            >
              {brandStory.linkLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-velmora-paper py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Loved by customers"
            title="What they’re saying"
            description="A few words from women who wanted jewelry that feels premium, personal, and easy to wear on repeat."
            align="center"
          />
          <div className="mt-12">
            <Testimonials items={testimonials} />
          </div>
        </div>
      </section>

      <section id="journal" className="bg-velmora-ink py-20 text-velmora-ivory sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <SectionHeading
            eyebrow="Journal"
            title="Notes on gifting, layering, and care"
            description="A softer way to shop: styling cues, material guidance, and the art of choosing pieces that stay with you."
            tone="light"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {['Gifting Edit', 'Layering Notes', 'Care Rituals'].map((entry) => (
              <article
                key={entry}
                className="rounded-[1.75rem] border border-velmora-line bg-velmora-ivory/5 p-6"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-velmora-gold">
                  Editorial
                </p>
                <h3 className="mt-5 font-display text-3xl text-velmora-ivory">
                  {entry}
                </h3>
                <p className="mt-4 text-sm leading-7 text-velmora-muted">
                  Thoughtful guidance for choosing and caring for the pieces you keep close.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-velmora-paper py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
    </main>
  )
}
