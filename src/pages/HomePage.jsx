import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard'
import SectionHeading from '@/components/shared/SectionHeading'
import StarRating from '@/components/shared/StarRating'
import {
  categories,
  products,
  testimonials,
  trustHighlights,
  ugcMoments,
} from '@/data/products'
import {
  categoryImages,
  heroBackgroundImage,
  heroPortraitImage,
  storyImage,
  ugcImages,
} from '@/data/imagePlaceholders'

const HomePage = () => {
  const featuredProducts = products.slice(0, 5)

  return (
    <div className="bg-velmora-surface text-velmora-ink">
      <section className="relative isolate overflow-hidden bg-velmora-ink pt-28 text-velmora-ivory md:pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-55"
          style={{ backgroundImage: `url(${heroBackgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink via-velmora-ink/70 to-velmora-ink/30" />
        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-end gap-12 px-5 pb-16 sm:px-6 md:pb-20 lg:grid-cols-[1.1fr,0.9fr] lg:px-10">
          <div className="max-w-2xl space-y-7">
            <p className="text-xs uppercase tracking-[0.36em] text-velmora-gold">
              Velmora Fine Jewelry
            </p>
            <h1
              id="hero-title"
              className="max-w-xl font-display text-5xl leading-[0.95] text-velmora-ivory sm:text-6xl lg:text-7xl"
            >
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="max-w-lg text-base leading-8 text-velmora-ivory/82 md:text-lg"
            >
              Warm-lit demi-fine pieces designed for self-purchase, meaningful
              gifting, and the kind of everyday luxury that lingers long after
              the moment.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-velmora-gold px-7 py-4 text-sm uppercase tracking-[0.25em] text-velmora-ink transition hover:translate-y-[-1px] hover:bg-velmora-ivory"
              >
                Shop the Collection
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link
                to="/shop/royal-heirloom-set"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm uppercase tracking-[0.25em] text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold"
              >
                Explore Gift Sets
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="ml-auto aspect-[4/5] max-w-[28rem] overflow-hidden rounded-[36px] border border-white/10 bg-velmora-ink/30 shadow-luxe backdrop-blur-sm">
              <img
                alt="Velmora campaign portrait"
                className="h-full w-full object-cover"
                src={heroPortraitImage}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-velmora-line bg-velmora-ivory py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-5 text-center text-xs uppercase tracking-[0.32em] text-velmora-ink sm:px-6 lg:px-10">
          {trustHighlights.map((item, index) => (
            <div key={item} className="flex items-center gap-5">
              <span>{item}</span>
              {index < trustHighlights.length - 1 ? (
                <span className="hidden h-3 w-px bg-velmora-line sm:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Signature Edit"
            title="Bestsellers"
            description="Our most-loved pieces balance luminous gold tones, flattering scale, and gift-worthy polish."
          />
          <Link
            to="/shop"
            className="text-sm uppercase tracking-[0.28em] text-velmora-ink transition hover:text-velmora-gold"
          >
            View All
          </Link>
        </div>

        <div id="bestsellers-title" className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priorityLabel={index === 0 ? 'Best Seller' : 'Editor Pick'}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-velmora-line bg-velmora-ivory py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Worn by You"
              title="A Reel of Real Moments"
              description="Softly styled snapshots that show how Velmora catches the light in motion."
            />
          </div>

          <div className="mt-10 flex gap-5 overflow-x-auto pb-2">
            {ugcMoments.map((moment) => (
              <article
                key={moment.id}
                className="group relative min-w-[220px] max-w-[220px] overflow-hidden rounded-[28px] border border-velmora-line bg-velmora-ink text-velmora-ivory shadow-card"
              >
                <div className="aspect-[9/16]">
                  <img
                    alt={moment.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    src={ugcImages[moment.id]}
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/65 to-transparent px-4 pb-5 pt-10">
                  <h3
                    id={`${moment.id}-title`}
                    className="font-display text-2xl leading-tight text-velmora-ivory"
                  >
                    {moment.title}
                  </h3>
                  <p
                    id={`${moment.id}-subtitle`}
                    className="mt-2 text-sm leading-6 text-velmora-ivory/78"
                  >
                    {moment.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Curated for Every Jewelry Ritual"
          description="Explore the silhouettes our customers return to again and again."
          align="center"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/shop"
              className="group relative block overflow-hidden rounded-[30px] border border-velmora-line bg-velmora-ink"
            >
              <div className="aspect-[4/5]">
                <img
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  src={categoryImages[category.id]}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/10 to-transparent opacity-95 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 py-6 text-velmora-ivory">
                <span
                  id={`category-${category.id}-label`}
                  className="font-display text-3xl"
                >
                  {category.name}
                </span>
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-velmora-champagne py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr,0.95fr] lg:px-10">
          <div className="overflow-hidden rounded-[34px] border border-velmora-line bg-velmora-ink shadow-luxe">
            <img
              alt="Velmora story image"
              className="aspect-[4/5] h-full w-full object-cover"
              src={storyImage}
            />
          </div>
          <div className="flex items-center">
            <div className="max-w-xl space-y-6">
              <p className="text-xs uppercase tracking-[0.36em] text-velmora-taupe">
                Brand Story
              </p>
              <h2 id="story-title" className="font-display text-4xl leading-tight text-velmora-ink md:text-5xl">
                Jewelry that feels like a personal ritual.
              </h2>
              <p id="story-copy" className="text-base leading-8 text-velmora-muted md:text-lg">
                Velmora was created for women who want pieces that elevate the
                everyday without feeling untouchable. Our collections pair warm
                gold finishes, thoughtful proportions, and gift-worthy details
                so every order feels like a keepsake.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-velmora-ink transition hover:text-velmora-gold"
              >
                Our Story
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Loved by Customers"
          title="What They’re Saying"
          description="Polished, thoughtful, and ready to become part of the everyday uniform."
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[28px] border border-velmora-line bg-velmora-ivory p-8 text-velmora-ink shadow-soft"
            >
              <StarRating rating={5} light={false} />
              <p className="mt-6 font-display text-3xl leading-tight text-velmora-ink">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-velmora-taupe">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-6 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-velmora-ink px-6 py-12 text-velmora-ivory shadow-luxe sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
                Newsletter
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-velmora-ivory md:text-5xl">
                Join for 10% off your first order
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-velmora-ivory/80">
                Be first to shop new drops, limited gift edits, and styling notes
                from the Velmora studio.
              </p>
            </div>
            <form className="grid gap-3 sm:grid-cols-[1fr,auto]">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="h-14 rounded-full border border-white/15 bg-white/8 px-6 text-sm text-velmora-ivory placeholder:text-velmora-ivory/55 focus:border-velmora-gold focus:outline-none"
              />
              <button
                type="submit"
                className="h-14 rounded-full bg-velmora-gold px-7 text-sm uppercase tracking-[0.25em] text-velmora-ink transition hover:bg-velmora-ivory"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
