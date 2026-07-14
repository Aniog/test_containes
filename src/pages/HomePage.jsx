import { ArrowRight, ChevronRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import JournalHighlights from '@/components/JournalHighlights'
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import { categories, products, testimonials, trustPoints, ugcMoments } from '@/data/storefront'

const HomePage = () => {
  return (
    <div className="bg-velmora-ivory text-velmora-espresso">
      <section className="relative isolate overflow-hidden bg-velmora-espresso pt-28 text-velmora-ivory sm:pt-32">
        <div
          className="absolute inset-0 opacity-80"
          data-strk-bg-id="velmora-hero-bg-0a1d9e"
          data-strk-bg="warm-lit close-up of gold jewelry on model editorial luxury dark neutral background"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,21,18,0.92)_0%,rgba(28,21,18,0.62)_45%,rgba(28,21,18,0.32)_100%)]" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-end px-5 pb-14 pt-16 md:px-8 md:pb-20">
          <div className="max-w-2xl space-y-8">
            <p className="text-xs uppercase tracking-[0.45em] text-velmora-goldSoft">
              Fine jewelry for the everyday muse
            </p>
            <div className="space-y-5">
              <h1 className="font-serif text-5xl leading-[0.94] text-velmora-ivory sm:text-6xl md:text-7xl">
                Crafted to be Treasured
              </h1>
              <p className="max-w-xl text-base leading-8 text-velmora-ivory/78 md:text-lg">
                Thoughtfully designed demi-fine pieces in luminous gold tones — made for gifting, collecting, and wearing on repeat.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-velmora-gold px-7 py-4 text-xs font-medium uppercase tracking-[0.35em] text-velmora-espresso transition hover:bg-velmora-goldSoft"
              >
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/product/royal-heirloom-set"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-xs font-medium uppercase tracking-[0.35em] text-velmora-ivory backdrop-blur-sm transition hover:border-velmora-goldSoft hover:text-velmora-goldSoft"
              >
                Explore the Gift Edit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-taupe/20 bg-velmora-cream px-5 py-4 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-[11px] uppercase tracking-[0.35em] text-velmora-cacao/72">
          {trustPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Bestsellers"
              title="A refined edit of everyday icons"
              description="Our most-loved pieces balance sculptural polish, soft radiance, and thoughtful wearability."
            />
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-velmora-goldDeep transition hover:text-velmora-espresso"
            >
              View all
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-6 md:px-8 md:py-10">
        <div className="mx-auto max-w-7xl space-y-8">
          <SectionHeading
            eyebrow="Seen on you"
            title="A soft-focus reel of daily rituals"
            description="Editorial warmth meets real-life styling in a horizontally scrolling strip inspired by saved favorites and mirror moments."
          />
          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:-mx-8 md:px-8">
            {ugcMoments.map((moment) => (
              <article
                key={moment.id}
                className="group relative min-w-[68vw] snap-start overflow-hidden rounded-[28px] bg-velmora-espresso shadow-[0_18px_50px_rgba(43,31,25,0.22)] sm:min-w-[42vw] lg:min-w-[22vw]"
              >
                <img
                  alt={moment.title}
                  className="aspect-[9/16] h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  data-strk-img-id={moment.imageId}
                  data-strk-img={moment.query}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(28,21,18,0.88))] p-5 pt-20 text-velmora-ivory">
                  <p className="font-serif text-2xl leading-tight">{moment.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl space-y-8">
          <SectionHeading
            eyebrow="Categories"
            title="Shop with intention"
            description="Curated silhouettes designed to layer, gift, and wear every day."
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                to="/shop"
                className="group relative overflow-hidden rounded-[30px]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,21,18,0.12),rgba(28,21,18,0.74))]" />
                <img
                  alt={category.name}
                  className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  data-strk-img-id={category.imageId}
                  data-strk-img={category.query}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-velmora-ivory">
                  <p className="font-serif text-3xl transition group-hover:text-velmora-goldSoft">
                    {category.name}
                  </p>
                  <span className="text-xs uppercase tracking-[0.32em] text-velmora-ivory/80 transition group-hover:text-velmora-goldSoft">
                    Discover
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="bg-velmora-sand/55 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[36px] bg-velmora-ivory shadow-[0_24px_70px_rgba(43,31,25,0.08)] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden">
            <img
              alt="Velmora story"
              className="h-full w-full object-cover"
              data-strk-img-id="velmora-story-image-52ed18"
              data-strk-img="warm editorial portrait woman with layered gold jewelry minimal luxury studio"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="flex items-center px-6 py-10 sm:px-10 lg:px-12">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-velmora-goldDeep">
                Our story
              </p>
              <h2 className="font-serif text-4xl leading-tight text-velmora-espresso md:text-5xl">
                Designed to feel intimate, polished, and endlessly wearable.
              </h2>
              <p className="text-base leading-8 text-velmora-cacao/75">
                Velmora was created for women who want jewelry that feels elevated without waiting for an occasion. Every piece is chosen to bring warmth to daily dressing while still arriving beautifully enough to gift.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-velmora-goldDeep transition hover:text-velmora-espresso"
              >
                Our Story
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved for the details"
            description="Thoughtful gifting, elevated essentials, and pieces that feel luxe far beyond their price point."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[28px] border border-velmora-taupe/25 bg-velmora-cream p-7 shadow-[0_18px_50px_rgba(43,31,25,0.06)]"
              >
                <div className="mb-5 flex gap-1 text-velmora-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-velmora-gold text-velmora-gold" />
                  ))}
                </div>
                <p className="text-base leading-8 text-velmora-cacao/78">
                  “{testimonial.quote}”
                </p>
                <p className="mt-5 text-xs uppercase tracking-[0.35em] text-velmora-cacao/58">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <JournalHighlights />

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-velmora-espresso px-6 py-10 text-velmora-ivory shadow-[0_24px_80px_rgba(28,21,18,0.18)] sm:px-10 md:px-14 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-velmora-goldSoft">
                Join the list
              </p>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Join for 10% off your first order
              </h2>
              <p className="max-w-2xl text-base leading-8 text-velmora-ivory/72">
                Receive early access to new collections, thoughtful gift edits, and styling notes designed to make everyday jewelry feel special.
              </p>
            </div>
            <form className="flex w-full max-w-xl flex-col gap-4 sm:flex-row lg:w-[28rem]">
              <input
                type="email"
                placeholder="Email address"
                className="h-14 flex-1 rounded-full border border-white/15 bg-white/8 px-5 text-sm text-velmora-ivory placeholder:text-velmora-ivory/45 focus:border-velmora-goldSoft focus:outline-none"
              />
              <button
                type="submit"
                className="h-14 rounded-full bg-velmora-gold px-7 text-xs font-medium uppercase tracking-[0.34em] text-velmora-espresso transition hover:bg-velmora-goldSoft"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
