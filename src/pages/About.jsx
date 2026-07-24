import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={ref} className="bg-cream pt-24 md:pt-28">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-velmora-7g8h"
          data-strk-bg="[about-hero-sub] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-cream/80">Our Story</p>
          <h1 id="about-hero-title" className="mt-3 font-serif text-5xl text-cream md:text-6xl">
            Crafted to be Treasured
          </h1>
          <p id="about-hero-sub" className="mt-4 max-w-xl text-cream/80">
            Demi-fine gold jewelry, made honestly and worn every day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">The Velmora Promise</p>
        <h2 className="mt-3 font-serif text-4xl leading-tight text-ink md:text-5xl">
          Fine jewelry should not be locked behind a velvet rope.
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-charcoal">
          <p>
            Velmora began in a small studio with a single belief: that the gold jewelry you reach for
            every morning can be the kind you treasure for years. We hand-finish every piece in 18K
            gold plating over solid brass, set each crystal by hand, and price it honestly.
          </p>
          <p>
            Our pieces are hypoallergenic and nickel-free, designed to move with you from the desk to
            the dinner table. We skip the wholesale markups and the loud discounting — instead we
            invest in materials, craft, and the quiet details that make a piece feel heirloom.
          </p>
          <p>
            Every order ships free worldwide, arrives in a signature Velmora pouch, and is backed by a
            30-day return promise. Because jewelry this wearable should be this easy to love.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { t: '18K Gold Plated', d: 'Over solid brass, hand-finished.' },
            { t: 'Hypoallergenic', d: 'Nickel-free and lead-free.' },
            { t: 'Honest Pricing', d: 'No wholesale markups, ever.' },
          ].map((f) => (
            <div key={f.t} className="border border-line bg-sand/40 p-6 text-center">
              <h3 className="font-serif text-xl uppercase tracking-widest3 text-ink">{f.t}</h3>
              <p className="mt-2 text-sm text-muted">{f.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-block bg-gold px-10 py-4 text-[11px] uppercase tracking-widest3 text-ink transition-colors hover:bg-gold-deep hover:text-cream"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
