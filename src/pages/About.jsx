import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-bg-velmora-4e2c8a"
          data-strk-bg="[about-subtitle] [about-title] gold jewelry studio craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-ivory/80">Our Story</p>
          <h1
            id="about-title"
            className="mt-4 font-serif text-5xl font-light text-ivory md:text-6xl"
          >
            Made to be Treasured
          </h1>
          <p
            id="about-subtitle"
            className="mt-5 max-w-md text-sm leading-relaxed text-ivory/85"
          >
            Demi-fine gold jewelry, designed in studio and finished by hand.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold">The Velmora Promise</p>
        <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">Quiet luxury, every day.</h2>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-taupe md:text-base">
          <p>
            Velmora began with a simple belief: fine-feeling jewelry should be
            part of every day, not saved for special occasions. We design
            demi-fine pieces in 18K gold plate over brass — warm, durable, and
            hypoallergenic — so you can wear them from morning to night without
            a second thought.
          </p>
          <p>
            Every piece is finished by hand in small batches. We obsess over the
            details: the weight of a huggie, the drape of a chain, the way a
            crystal catches low light. The result is jewelry that feels
            considered, not mass-produced.
          </p>
          <p>
            We sell directly to you, which means we can offer genuine quality at
            an accessible price — without the retail markup. Free worldwide
            shipping, 30-day returns, and a lifetime of re-wears.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { t: '18K Gold Plated', d: 'Over solid brass, finished by hand.' },
            { t: 'Hypoallergenic', d: 'Nickel and lead free, safe for sensitive skin.' },
            { t: 'Made to Last', d: 'Designed for daily wear and re-wear.' },
          ].map((f) => (
            <div key={f.t} className="border border-sand bg-cream p-6">
              <p className="font-serif text-lg text-ink">{f.t}</p>
              <p className="mt-2 text-sm text-taupe">{f.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-gold px-10 py-4 text-xs uppercase tracking-widest3 text-ivory transition-colors hover:bg-gold-deep"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
