import { Link } from 'react-router-dom'
import { useStrkImages, STRK_PLACEHOLDER } from '@/lib/useStrkImages'

export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="bg-ivory pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-velmora-7g8h"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry atelier studio warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-ivory/80">Est. for Everyday Radiance</p>
          <h1
            id="about-hero-title"
            className="mt-4 font-serif text-4xl text-ivory md:text-6xl"
          >
            Our Story
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-4 max-w-md text-sm text-ivory/85"
          >
            Quiet luxury, made to last — demi-fine gold jewelry designed to be
            worn every day.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">The Velmora Philosophy</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-4xl">
          Beautiful, lasting gold jewelry should be part of every day — not saved
          for special occasions.
        </h2>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-taupe">
          <p>
            Velmora began with a simple belief: that the pieces you reach for
            every day deserve the same care as the ones you save for forever. We
            design demi-fine jewelry in 18K gold plating over sterling silver —
            hypoallergenic, nickel-free, and made to be worn, layered, and
            treasured.
          </p>
          <p>
            From the first sketch to the keepsake box it arrives in, every detail
            is considered. We work in small, considered collections, refining
            each silhouette until it feels effortless. The result is jewelry that
            looks quietly luxurious and lives up to everyday life.
          </p>
          <p>
            We believe in accessible luxury without compromise — premium
            materials, considered design, and honest pricing. Because feeling
            radiant shouldn't be reserved for rare moments.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-sand pt-12 sm:grid-cols-3">
          {[
            { t: '18K Gold Plated', d: 'Over sterling silver, for warmth that lasts.' },
            { t: 'Hypoallergenic', d: 'Nickel and lead free, safe for sensitive skin.' },
            { t: 'Thoughtfully Made', d: 'Small collections, refined until effortless.' },
          ].map((item) => (
            <div key={item.t}>
              <h3 className="font-serif text-xl text-ink">{item.t}</h3>
              <p className="mt-2 text-sm text-taupe">{item.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-block bg-gold px-10 py-4 text-[11px] uppercase tracking-widest2 text-ivory transition-colors hover:bg-gold-deep"
          >
            Explore the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
