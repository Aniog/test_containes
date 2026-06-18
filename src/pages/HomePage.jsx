import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MoveRight } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import { categoryTiles, products, reels, testimonials, trustItems } from '@/data/products'
import { useStrkImages } from '@/lib/use-strk-images'

function HomePage() {
  const containerRef = useRef(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useStrkImages(containerRef, [])

  const handleNewsletterSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) {
      return
    }

    setSubmitted(true)
    setEmail('')
  }

  return (
    <div className="overflow-hidden" ref={containerRef}>
      <section className="relative min-h-screen bg-stone-950 px-5 pb-16 pt-28 text-stone-100 sm:px-8 lg:px-12 lg:pt-32">
        <div
          className="absolute inset-0 opacity-90"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-id="velmora-hero-bg-a1c9d2"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,12,0.84)_0%,rgba(18,14,12,0.56)_42%,rgba(18,14,12,0.22)_100%)]" />

        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-end">
          <div className="max-w-2xl py-16">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.45em] text-amber-200">
              Premium demi-fine essentials
            </p>
            <h1 className="font-serif text-5xl leading-tight text-stone-100 sm:text-6xl lg:text-7xl" id="hero-title">
              Crafted to be Treasured
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-stone-200 sm:text-lg" id="hero-subtitle">
              Warm gold tones, quietly luxurious silhouettes, and giftable pieces designed to be
              worn now and kept for years.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-amber-200 px-7 py-4 text-sm font-medium uppercase tracking-[0.25em] text-stone-950 transition hover:bg-stone-100"
                to="/shop"
              >
                Shop the Collection
              </Link>
              <Link
                className="rounded-full border border-stone-100/40 px-7 py-4 text-sm font-medium uppercase tracking-[0.25em] text-stone-100 transition hover:border-amber-200 hover:text-amber-200"
                to="/#about"
              >
                Discover Velmora
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-300/70 bg-stone-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 text-center text-xs font-medium uppercase tracking-[0.35em] text-stone-700 sm:px-8 lg:px-12">
          {trustItems.map((item, index) => (
            <div className="flex items-center gap-3" key={item}>
              {index > 0 ? <span className="hidden h-1 w-1 rounded-full bg-stone-400 sm:block" /> : null}
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-100 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Bestsellers"
              title="The pieces our customers reach for first"
              description="Designed to move easily from weekday polish to evening plans, each bestseller offers a refined balance of softness, shine, and everyday wearability."
            />
            <Link className="inline-flex items-center gap-2 text-sm font-medium text-stone-700 transition hover:text-stone-950" to="/shop">
              Shop all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {products.map((product, index) => (
              <ProductCard
                imagePrefix={`home-bestseller-${product.slug}-${index}`}
                key={product.slug}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-950 px-5 py-20 text-stone-100 sm:px-8 lg:px-12" id="journal">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="center"
            eyebrow="Velmora in motion"
            title="An editorial take on real-life wear"
            description="A soft-scroll reel of styling moments, gifting scenes, and close-up details that bring the collection to life."
          />
          <div className="mt-12 flex gap-5 overflow-x-auto pb-3">
            {reels.map((reel) => (
              <article
                className="group relative min-w-[240px] flex-1 overflow-hidden rounded-[2rem] border border-stone-800 bg-stone-900 shadow-[0_22px_60px_rgba(0,0,0,0.28)] sm:min-w-[280px]"
                key={reel.id}
              >
                <span className="sr-only" id={`${reel.id}-description`}>
                  {reel.description}
                </span>
                <h3 className="sr-only" id={`${reel.id}-title`}>
                  {reel.title}
                </h3>
                <img
                  alt={reel.title}
                  className="aspect-[9/16] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={`${reel.id}-image-b92a3`}
                  data-strk-img={`[${reel.id}-description] [${reel.id}-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent_0%,rgba(17,24,39,0.92)_100%)] p-6">
                  <p className="font-serif text-3xl text-stone-100">{reel.title}</p>
                  <p className="mt-2 text-sm leading-6 text-stone-300">{reel.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 px-5 py-20 sm:px-8 lg:px-12 lg:py-24" id="collections">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Shop by category"
            title="Find your signature silhouette"
            description="Whether you are curating a layering look or choosing a polished gift, start with the category that matches the mood."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {categoryTiles.map((tile) => (
              <Link
                className="group relative overflow-hidden rounded-[2rem] border border-stone-300/60 bg-stone-200"
                key={tile.name}
                to={`/shop?category=${encodeURIComponent(tile.name)}`}
              >
                <span className="sr-only" id={`category-${tile.name}-description`}>
                  {tile.description}
                </span>
                <span className="sr-only" id={`category-${tile.name}-title`}>
                  {tile.name}
                </span>
                <img
                  alt={tile.name}
                  className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={`category-${tile.name}-image-a93d1`}
                  data-strk-img={`[category-${tile.name}-description] [category-${tile.name}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.08)_0%,rgba(17,24,39,0.72)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 py-6 text-stone-100">
                  <h3 className="font-serif text-3xl">{tile.name}</h3>
                  <span className="text-xs uppercase tracking-[0.35em] transition group-hover:text-amber-200">
                    Explore
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 px-5 py-20 sm:px-8 lg:px-12 lg:py-24" id="about">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-[2.5rem] border border-stone-300/60 bg-stone-200 shadow-[0_24px_70px_rgba(28,25,23,0.1)]">
            <span className="sr-only" id="story-image-description">
              editorial close-up of a woman styling warm gold jewelry beside soft fabric and a velvet tray
            </span>
            <img
              alt="Velmora story"
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id="velmora-story-image-72ad1"
              data-strk-img="[story-image-description] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-700">Brand story</p>
            <h2 className="mt-5 font-serif text-4xl text-stone-950 sm:text-5xl" id="story-title">
              Jewelry that feels intimate, considered, and quietly unforgettable
            </h2>
            <p className="mt-6 text-base leading-8 text-stone-600">
              Velmora was created for women who want everyday jewelry to feel elevated without
              feeling unreachable. Our collections focus on demi-fine finishes, warm gold tones,
              and silhouettes that invite both gifting and self-purchase.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-600">
              From the first touch of the box to the last detail of the clasp, every piece is meant
              to offer the ease of an accessible favorite with the mood of an heirloom in the making.
            </p>
            <Link
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.3em] text-stone-900 transition hover:text-amber-700"
              to="/shop"
            >
              Our Story <MoveRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="center"
            eyebrow="Testimonials"
            title="Loved for the details"
            description="A few words from customers who found their everyday favorites, special-occasion gifts, and signature finishing touches with Velmora."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                className="rounded-[2rem] border border-stone-300/60 bg-stone-50 p-8 shadow-[0_18px_50px_rgba(28,25,23,0.08)]"
                key={testimonial.name}
              >
                <div className="text-amber-400">★★★★★</div>
                <p className="mt-5 text-base leading-8 text-stone-700">“{testimonial.quote}”</p>
                <p className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-stone-950">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 px-5 pb-20 sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-stone-950 px-6 py-12 text-stone-100 shadow-[0_28px_80px_rgba(12,10,9,0.32)] sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-200">
              Velmora letter
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Join for 10% off your first order</h2>
            <p className="mt-4 text-base leading-8 text-stone-300">
              Receive early access to new arrivals, thoughtful gifting edits, and styling notes.
            </p>
          </div>

          <form className="mt-8 flex w-full max-w-xl flex-col gap-3 lg:mt-0 lg:flex-row" onSubmit={handleNewsletterSubmit}>
            <input
              className="h-14 flex-1 rounded-full border border-stone-700 bg-stone-900 px-6 text-sm text-stone-100 placeholder:text-stone-400 focus:border-amber-200 focus:outline-none"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              type="email"
              value={email}
            />
            <button
              className="rounded-full bg-amber-200 px-7 py-4 text-sm font-medium uppercase tracking-[0.25em] text-stone-950 transition hover:bg-stone-100"
              type="submit"
            >
              Join now
            </button>
          </form>
        </div>
        {submitted ? (
          <p className="mx-auto mt-5 max-w-7xl text-sm text-stone-700">
            Thank you — your welcome offer is on its way.
          </p>
        ) : null}
      </section>
    </div>
  )
}

export default HomePage
