import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={ref} className="pt-16 md:pt-20 bg-ivory">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden bg-espresso">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-2c7b1e"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry atelier craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/50" />
        <div className="relative z-10 text-center px-5">
          <p className="text-[11px] uppercase tracking-widest2 text-ivory/80 mb-4">
            Est. for the everyday
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-ivory text-5xl md:text-6xl"
          >
            Our Story
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-4 text-ivory/85 max-w-lg mx-auto"
          >
            Fine-quality gold jewelry, made to be lived in.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne mb-4 text-center">
            The Velmora Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink text-center leading-tight">
            Jewelry should be part of every day, not reserved for special
            occasions.
          </h2>
          <div className="mt-8 space-y-5 text-base text-stone leading-relaxed">
            <p>
              Velmora was founded on a simple belief: that genuinely luxurious
              gold jewelry should be accessible enough to wear on a Tuesday
              morning and beautiful enough for the most important moments of
              your life. We work in 18K gold plate over sterling silver,
              finishing each piece by hand to achieve a warmth and weight that
              feels real.
            </p>
            <p>
              Every design is hypoallergenic and nickel-free, so it is kind to
              sensitive skin. We obsess over the details — the tension of an
              ear cuff, the catch on a huggie, the drape of a chain — because
              those are the things you feel every time you put a piece on.
            </p>
            <p>
              From our atelier to your jewelry box, we hope Velmora becomes
              part of your daily ritual — the pieces you reach for without
              thinking, the ones you gift to mark a moment, and the ones you
              treasure for years.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-champagne text-ivory hover:bg-champagne-deep transition-colors px-10 py-4 text-xs uppercase tracking-widest2 font-medium rounded-sm"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-cream border-y border-sand">
        <div className="max-w-8xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { t: '18K Gold Plated', d: 'Over solid 925 sterling silver, finished by hand.' },
            { t: 'Hypoallergenic', d: 'Nickel-free and lead-free, kind to sensitive skin.' },
            { t: 'Made to Last', d: 'Designed for daily wear, backed by a 30-day return promise.' },
          ].map((v) => (
            <div key={v.t}>
              <h3 className="font-serif text-2xl text-ink mb-2">{v.t}</h3>
              <p className="text-sm text-stone">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
