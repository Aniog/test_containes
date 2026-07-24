import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import SectionHeading from '@/components/storefront/SectionHeading'
import ProductCard from '@/components/storefront/ProductCard'
import { categories, products, testimonials, trustPoints, ugcMoments } from '@/data/storeData'

const HomePage = ({ onAddToCart }) => {
  return (
    <div className="bg-[#f7f2ea]">
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#241a13] text-[#f7f2ea]">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-velmora-a1"
          data-strk-bg="[hero-subtitle] [hero-title] [hero-kicker]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,12,0.32),rgba(20,15,12,0.6)_50%,rgba(20,15,12,0.85))]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-16 pt-36 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="max-w-2xl">
            <p id="hero-kicker" className="text-xs uppercase tracking-[0.36em] text-[#c19a6b]">
              Velmora Fine Jewelry
            </p>
            <h1
              id="hero-title"
              className="mt-5 font-['Cormorant_Garamond'] text-6xl leading-[0.92] text-[#f7f2ea] sm:text-7xl lg:text-[6.5rem]"
            >
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 max-w-xl text-base leading-8 text-[rgba(247,242,234,0.84)] sm:text-lg"
            >
              Quietly luxurious demi-fine gold jewelry for self-purchase, milestone gifting,
              and the pieces that make every outfit feel finished.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-full bg-[#c19a6b] px-8 py-4 text-xs uppercase tracking-[0.32em] text-[#f7f2ea] transition hover:bg-[#f7f2ea] hover:text-[#241a13]"
              >
                Shop the Collection
              </Link>
              <Link
                to="/product/royal-heirloom-set"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-xs uppercase tracking-[0.32em] text-[#f7f2ea] transition hover:border-[#c19a6b] hover:text-[#c19a6b]"
              >
                Explore gifting
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(215,195,171,0.7)] bg-[rgba(237,227,214,0.6)]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-4 text-center text-[11px] uppercase tracking-[0.32em] text-[#241a13] sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {trustPoints.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Bestsellers"
            title="The pieces our customers reorder, gift, and wear on repeat."
            description="A considered edit of warm gold silhouettes, heirloom-inspired crystals, and elevated everyday essentials."
          />
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-[#241a13] transition hover:text-[#c19a6b]"
          >
            Shop all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              onAddToCart={onAddToCart}
              priority={index < 2}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-[rgba(215,195,171,0.7)] bg-white/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="In the wild"
              title="An editorial reel of everyday Velmora moments."
              description="A scrollable strip inspired by the softness of short-form social content, reimagined in a calmer, more luxurious frame."
            />
          </div>
          <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ugcMoments.map((moment) => (
              <article
                key={moment.id}
                className="group relative min-w-[220px] snap-start overflow-hidden rounded-[2rem] border border-[rgba(215,195,171,0.6)] bg-[#241a13] md:min-w-[260px]"
              >
                <img
                  alt={moment.title}
                  className="aspect-[9/16] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  data-strk-img-id={`ugc-${moment.id}-q1`}
                  data-strk-img={`[ugc-${moment.id}-caption] [ugc-${moment.id}-title] [ugc-section-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  loading="lazy"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,12,0.08),rgba(20,15,12,0.76))]" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-[#f7f2ea]">
                  <p id="ugc-section-title" className="sr-only">Velmora jewelry styling reels</p>
                  <h3 id={`ugc-${moment.id}-title`} className="font-['Cormorant_Garamond'] text-3xl leading-none">
                    {moment.title}
                  </h3>
                  <p id={`ugc-${moment.id}-caption`} className="mt-3 text-sm leading-6 text-[rgba(247,242,234,0.82)]">
                    {moment.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Shop by category"
          title="Start with the silhouette that fits your mood."
          description="From softly sculptural huggies to keepsake necklaces, each category is designed to feel elevated yet easy to wear daily."
          align="center"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative isolate overflow-hidden rounded-[2rem] border border-[rgba(215,195,171,0.6)] bg-[#241a13]"
            >
              <img
                alt={category.name}
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                data-strk-img-id={`category-${category.slug}-c1`}
                data-strk-img={`[category-${category.slug}-desc] [category-${category.slug}-name]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                loading="lazy"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,12,0.08),rgba(20,15,12,0.72))]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-[#f7f2ea] transition duration-500 group-hover:translate-y-[-4px]">
                <p id={`category-${category.slug}-name`} className="font-['Cormorant_Garamond'] text-4xl leading-none">
                  {category.name}
                </p>
                <p id={`category-${category.slug}-desc`} className="mt-3 text-sm leading-7 text-[rgba(247,242,234,0.82)]">
                  {category.description}
                </p>
                <span className="mt-5 inline-flex text-xs uppercase tracking-[0.32em] text-[#c19a6b]">
                  Shop now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[rgba(215,195,171,0.7)] bg-white/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
          <div className="overflow-hidden rounded-[2rem] border border-[rgba(215,195,171,0.6)] bg-[#241a13] shadow-[0_18px_45px_rgba(36,26,19,0.12)]">
            <img
              alt="Velmora brand story"
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id="story-image-v1"
              data-strk-img="[story-body] [story-title] [story-kicker]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              loading="lazy"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="flex items-center">
            <div>
              <p id="story-kicker" className="text-xs uppercase tracking-[0.32em] text-[#c19a6b]">
                The Velmora point of view
              </p>
              <h2 id="story-title" className="mt-4 font-['Cormorant_Garamond'] text-5xl leading-none text-[#241a13] sm:text-6xl">
                Jewelry that feels editorial, feminine, and easy to live in.
              </h2>
              <p id="story-body" className="mt-6 max-w-xl text-base leading-8 text-[#6f5946]">
                We created Velmora for women who want the finish of something premium without needing a special occasion to wear it. Our pieces are quietly polished, thoughtfully priced, and intended to be treasured daily.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-[#241a13] transition hover:text-[#c19a6b]"
              >
                Our story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Testimonials"
          title="Women return to Velmora for pieces that feel considered from first look to final box."
          align="center"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2rem] border border-[rgba(215,195,171,0.7)] bg-white/90 p-8 shadow-[0_18px_42px_rgba(36,26,19,0.06)]"
            >
              <div className="flex items-center gap-1 text-[#c19a6b]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Sparkles key={index} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-6 text-base leading-8 text-[#6f5946]">“{testimonial.quote}”</p>
              <div className="mt-8 border-t border-[rgba(215,195,171,0.7)] pt-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[#241a13]">{testimonial.name}</p>
                <p className="mt-2 text-sm text-[#6f5946]">Purchased {testimonial.product}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#241a13] py-16 text-[#f7f2ea]">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-10">
          <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(193,154,107,0.28),rgba(31,24,20,0.8))] px-6 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:px-10 sm:py-12">
            <p className="text-xs uppercase tracking-[0.32em] text-[#c19a6b]">Newsletter</p>
            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-['Cormorant_Garamond'] text-5xl leading-none text-[#f7f2ea] sm:text-6xl">
                  Join for 10% off your first order
                </h2>
                <p className="mt-4 text-base leading-8 text-[rgba(247,242,234,0.82)]">
                  Receive early access to capsule drops, styling notes, and gift-worthy edits before they sell through.
                </p>
              </div>
              <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 flex-1 rounded-full border border-white/15 bg-white/10 px-6 text-sm text-[#f7f2ea] placeholder:text-[rgba(247,242,234,0.6)] focus:border-[#c19a6b] focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-14 rounded-full bg-[#c19a6b] px-7 text-xs uppercase tracking-[0.32em] text-[#f7f2ea] transition hover:bg-[#f7f2ea] hover:text-[#241a13]"
                >
                  Join now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
