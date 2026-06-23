import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/Container'
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import { useStrkImages } from '@/hooks/useStrkImages'
import { categories, products, testimonials, trustItems, ugcMoments } from '@/data/products'

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const HomePage = () => {
  const pageRef = useStrkImages([])

  return (
    <div ref={pageRef} className="pb-20">
      <section className="relative min-h-screen overflow-hidden bg-brand-umber text-brand-ivory">
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-home-hero-bg-f82d4m"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-umber/90 via-brand-umber/55 to-brand-umber/30" />
        <Container className="relative flex min-h-screen items-end py-28 md:py-36">
          <div className="max-w-3xl pb-10">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.28em] text-brand-bronze">
              <Sparkles className="h-3.5 w-3.5" />
              Premium demi-fine jewelry
            </p>
            <h1 id="hero-title" className="max-w-2xl font-serif text-6xl leading-[0.95] md:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-7 text-brand-ivory/85 md:text-lg">
              Warm-toned gold jewelry designed for self-gifting, thoughtful moments, and everyday polish.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="rounded-full bg-brand-bronze px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-umber transition duration-300 hover:opacity-90"
              >
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-white/25 px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-ivory transition duration-300 hover:border-brand-bronze hover:text-brand-bronze"
              >
                Our Story
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-brand-line border-t bg-brand-surface/80 py-4">
        <Container>
          <div className="grid gap-3 text-center text-[11px] font-medium uppercase tracking-[0.3em] text-brand-mink md:grid-cols-4">
            {trustItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Bestsellers"
              title="The pieces our customers return to"
              description="A refined edit of Velmora signatures, designed to look elevated and feel easy from morning to evening."
            />
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-brand-espresso transition hover:text-brand-bronze"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {products.slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="overflow-hidden py-4 md:py-8">
        <Container>
          <SectionHeading
            eyebrow="Worn by Velmora women"
            title="A polished reel of daily styling"
            description="Softly lit moments from our community, styled for city mornings, dinners, and gifting season."
          />
          <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
            {ugcMoments.map((moment) => {
              const titleId = `ugc-${moment.id}-title`
              const descId = `ugc-${moment.id}-desc`

              return (
                <article
                  key={moment.id}
                  className="relative min-w-[240px] flex-1 overflow-hidden rounded-[2rem] border border-brand-line bg-brand-umber text-brand-ivory shadow-soft md:min-w-[280px]"
                >
                  <img
                    alt={moment.title}
                    className="h-[420px] w-full object-cover"
                    data-strk-img-id={moment.imageId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="700"
                    src={placeholder}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-umber to-transparent px-5 pb-6 pt-20">
                    <h3 id={titleId} className="font-serif text-3xl leading-none">
                      {moment.title}
                    </h3>
                    <p id={descId} className="mt-3 text-sm leading-6 text-brand-ivory/80">
                      {moment.caption}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Shop by category"
            title="A refined starting point"
            description="Choose the silhouette that suits your day, whether you lean delicate, sculptural, or gift-ready."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((category) => {
              const titleId = `category-${category.id}-title`
              const descId = `category-${category.id}-desc`
              const href = `/shop?category=${category.name}`

              return (
                <Link
                  key={category.id}
                  to={href}
                  className="group relative block overflow-hidden rounded-[2rem] border border-brand-line bg-brand-surface shadow-soft"
                >
                  <img
                    alt={category.name}
                    className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    data-strk-img-id={category.imageId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="900"
                    src={placeholder}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-umber/85 via-brand-umber/20 to-transparent opacity-90 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-brand-ivory">
                    <h3 id={titleId} className="font-serif text-4xl">
                      {category.name}
                    </h3>
                    <p id={descId} className="mt-2 max-w-xs text-sm leading-6 text-brand-ivory/80 opacity-0 transition duration-300 group-hover:opacity-100">
                      {category.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2.2rem] border border-brand-line bg-brand-surface shadow-soft">
            <img
              alt="Velmora brand story"
              className="h-full min-h-[520px] w-full object-cover"
              data-strk-img-id="velmora-story-image-y28f9p"
              data-strk-img="[story-description] [story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1100"
              src={placeholder}
            />
          </div>
          <div className="max-w-xl lg:pl-8">
            <p className="text-xs uppercase tracking-[0.28em] text-brand-bronze">Brand story</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl leading-none text-brand-espresso md:text-6xl">
              Modern heirlooms for the rhythm of real life
            </h2>
            <p id="story-description" className="mt-6 text-base leading-8 text-brand-mink">
              Velmora Fine Jewelry was built around a simple idea: everyday jewelry can still feel intimate, elegant, and beautifully made. Each piece is designed to layer effortlessly into your routine while carrying the warmth of something special.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 border-b border-brand-espresso pb-1 text-sm uppercase tracking-[0.24em] text-brand-espresso transition hover:border-brand-bronze hover:text-brand-bronze"
            >
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-brand-surface py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="A little luxury, thoughtfully delivered"
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="rounded-[2rem] border border-brand-line bg-brand-ivory p-8 text-brand-espresso shadow-soft"
              >
                <p className="text-brand-bronze">★★★★★</p>
                <p className="mt-5 font-serif text-2xl leading-9">“{testimonial.quote}”</p>
                <p className="mt-5 text-xs uppercase tracking-[0.24em] text-brand-mink">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-6 md:pb-10">
        <Container>
          <div className="rounded-[2.2rem] bg-brand-umber px-6 py-10 text-brand-ivory shadow-soft md:px-10 md:py-12">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-brand-bronze">Velmora Letters</p>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                  Join for 10% off your first order
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-ivory/80 md:text-base">
                  Be first to hear about new drops, styling notes, and gift-worthy edits delivered with restraint.
                </p>
              </div>
              <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Email address"
                  className="min-h-[56px] flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-brand-ivory outline-none placeholder:text-brand-ivory/60"
                />
                <button
                  type="submit"
                  className="min-h-[56px] rounded-full bg-brand-bronze px-6 text-xs font-semibold uppercase tracking-[0.24em] text-brand-umber transition hover:opacity-90"
                >
                  Join Now
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default HomePage
