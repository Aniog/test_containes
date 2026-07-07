import React from 'react'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function About() {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="bg-ivory pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-bg-velmora-2c4e8b"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry studio craftsmanship warm"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ opacity: 0 }}
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-ivory/80">
            Est. 2024
          </p>
          <h1
            id="about-hero-title"
            className="mt-4 font-serif text-5xl text-ivory md:text-6xl"
          >
            Our Story
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-4 max-w-md text-sm text-ivory/80"
          >
            Demi-fine jewelry, designed to be lived in.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            The Velmora Philosophy
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
            Fine jewelry shouldn't wait for a special occasion
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              Velmora was founded on a simple frustration: beautiful gold jewelry
              was either prohibitively expensive, or cheap and disposable. We
              believed there was a middle ground — demi-fine pieces with the
              weight, warmth and finish of fine jewelry, at a price that lets you
              wear them every day.
            </p>
            <p>
              Every piece begins in our studio, where we sketch and prototype
              until the proportions feel just right. We then work in small batches
              with skilled artisans, hand-finishing each piece in 18K gold plating
              over sterling silver or brass. The result is jewelry that feels
              substantial, wears beautifully, and is made to be treasured for
              years — not seasons.
            </p>
            <p>
              We are committed to responsible materials: all our pieces are
              nickel-free, lead-free, and hypoallergenic. And because we sell
              directly to you, we pass the savings on — meaning better materials
              and craftsmanship, for less.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-y border-sand py-10 text-center">
            {[
              { num: '18K', label: 'Gold Plated' },
              { num: '100%', label: 'Hypoallergenic' },
              { num: '30', label: 'Day Returns' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl text-gold md:text-4xl">{stat.num}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-stone">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-gold px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-ivory transition-colors duration-300 hover:bg-gold-deep"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
