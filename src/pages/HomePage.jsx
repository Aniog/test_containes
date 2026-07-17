import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductCard from '@/components/store/ProductCard'
import SectionHeading from '@/components/store/SectionHeading'
import { categories, products, testimonials, trustHighlights, ugcMoments } from '@/data/products'
import { useStockImages } from '@/hooks/useStockImages'

export default function HomePage() {
  const containerRef = useRef(null)
  useStockImages(containerRef)

  return (
    <main ref={containerRef} className="bg-ivory text-ink">
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-ivory">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-velmora-8f2a9c"
          data-strk-bg="[hero-image-prompt] [hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/25" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-20 pt-32 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <span id="hero-image-prompt" className="sr-only">
              Warm-lit close-up of gold jewelry on a model, quiet luxury editorial portrait with sculptural earrings and delicate necklace styling.
            </span>
            <p className="text-xs uppercase tracking-[0.38em] text-ivory/80">
              Demi-fine gold jewelry
            </p>
            <h1
              id="hero-title"
              className="mt-6 max-w-xl font-display text-6xl leading-[0.92] text-ivory sm:text-7xl lg:text-[6.5rem]"
            >
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 max-w-lg text-base leading-8 text-ivory/80 sm:text-lg"
            >
              Warm, sculptural pieces designed to bring a subtle glow to every day, every gift, and every return to self.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-ink transition hover:bg-champagne"
              >
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-ivory/20 bg-white/10 px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-ivory transition hover:bg-white/15"
              >
                Discover Velmora
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-mocha/10 bg-ivory">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-5 py-4 text-center text-[11px] uppercase tracking-[0.32em] text-mocha sm:flex-row sm:flex-wrap sm:gap-6 sm:px-8 lg:px-10">
          {trustHighlights.map((highlight) => (
            <div key={highlight} className="flex items-center gap-3">
              <span>{highlight}</span>
              <span className="hidden h-1 w-1 rounded-full bg-gold sm:inline-flex" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Editor’s picks"
          title="Bestsellers"
          description="A considered edit of customer favorites designed for self-purchase, thoughtful gifting, and effortless layering."
          titleId="bestsellers-title"
          descriptionId="bestsellers-description"
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              scope="home-bestsellers"
              sectionTitleId="bestsellers-title"
              sectionDescriptionId="bestsellers-description"
            />
          ))}
        </div>
      </section>

      <section className="border-y border-mocha/10 bg-sand/35 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Seen on you"
            title="A reel of warm light"
            description="Styled by our community with soft stacks, close-to-skin chains, and polished gold that catches every shift in light."
            align="left"
            titleId="ugc-title"
            descriptionId="ugc-description"
            className="max-w-2xl"
          />
          <div className="mt-12 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ugcMoments.map((moment) => {
              const titleId = `${moment.id}-title`
              const subtitleId = `${moment.id}-subtitle`
              return (
                <article
                  key={moment.id}
                  className="group relative min-w-[72vw] overflow-hidden rounded-[2rem] bg-ink shadow-soft sm:min-w-[20rem] lg:min-w-[18rem]"
                >
                  <div className="relative aspect-[9/16]">
                    <img
                      alt={moment.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      data-strk-img-id={`${moment.id}-image`}
                      data-strk-img={`[${subtitleId}] [${titleId}] [ugc-description] [ugc-title]`}
                      data-strk-img-ratio="9x16"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                      <h3 id={titleId} className="font-display text-3xl leading-none text-ivory">
                        {moment.title}
                      </h3>
                      <p id={subtitleId} className="mt-3 text-sm leading-7 text-ivory/80">
                        {moment.subtitle}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Shop by category"
          title="Designed for the stack"
          description="Build a refined wardrobe of demi-fine pieces, from sculptural earrings to luminous necklaces and polished huggies."
          titleId="categories-title"
          descriptionId="categories-description"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.name.toLowerCase()}-title`
            const descriptionId = `category-${category.name.toLowerCase()}-description`
            return (
              <Link
                key={category.name}
                to={category.href}
                className="group relative overflow-hidden rounded-[2rem] bg-ink text-ivory shadow-card"
              >
                <div
                  className="absolute inset-0 transition duration-500 group-hover:scale-[1.03]"
                  data-strk-bg-id={`${category.imageId}-bg`}
                  data-strk-bg={`[${descriptionId}] [${titleId}] [categories-description] [categories-title]`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                <div className="relative flex aspect-[4/5] items-end p-8">
                  <div>
                    <p id={descriptionId} className="max-w-xs text-sm leading-7 text-ivory/80">
                      {category.description}
                    </p>
                    <h3
                      id={titleId}
                      className="mt-4 font-display text-4xl text-ivory transition duration-300 group-hover:text-gold"
                    >
                      {category.name}
                    </h3>
                    <span className="mt-4 inline-flex text-xs uppercase tracking-[0.28em] text-ivory/80">
                      Explore now
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
          <div className="overflow-hidden rounded-[2rem] bg-ink shadow-soft">
            <img
              alt="Velmora brand story"
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id="brand-story-image-a17bc1"
              data-strk-img="[brand-story-description] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.34em] text-mocha">Our craft</p>
            <h2 id="brand-story-title" className="mt-5 font-display text-5xl leading-none text-ink sm:text-6xl">
              Jewelry that feels intimate, elevated, and easy to live in.
            </h2>
            <p id="brand-story-description" className="mt-6 text-base leading-8 text-mocha">
              Velmora was created for women who want the warmth of gold and the feeling of luxury without waiting for special occasions. Every piece balances softness, polish, and versatility so it can become part of your daily ritual.
            </p>
            <p className="mt-5 text-base leading-8 text-mocha">
              From stackable huggies to gift-ready sets, our collections are designed to layer beautifully, travel effortlessly, and hold meaning long after the first wear.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink transition hover:text-gold"
            >
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Client notes"
          title="What they’re saying"
          description="Short, heartfelt reviews from women who wear Velmora every day or gift it for the moments that matter."
          titleId="testimonials-title"
          descriptionId="testimonials-description"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2rem] border border-mocha/10 bg-white/70 p-8 shadow-card"
            >
              <div className="flex gap-1 text-gold" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-ink">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-[0.28em] text-mocha">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-ink px-6 py-14 text-center text-ivory shadow-soft sm:px-10 lg:px-16 lg:py-16">
          <p className="text-xs uppercase tracking-[0.34em] text-ivory/65">Private offer</p>
          <h2 className="mt-5 font-display text-4xl leading-none text-ivory sm:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ivory/75 sm:text-base">
            Sign up for early access to new drops, styling notes, and gifting edits curated for modern jewelry wardrobes.
          </p>
          <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="h-14 flex-1 rounded-full border border-ivory/15 bg-white/10 px-6 text-sm text-ivory placeholder:text-ivory/45 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="h-14 rounded-full bg-gold px-8 text-sm font-semibold uppercase tracking-[0.24em] text-ink transition hover:bg-champagne"
            >
              Join now
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
