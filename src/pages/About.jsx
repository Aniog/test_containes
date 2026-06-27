import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useStrkImages } from '@/lib/strk'

export default function About() {
  const containerRef = useRef(null)
  useStrkImages(containerRef, [])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="about-hero-velmora"
          data-strk-bg="gold jewelry atelier warm editorial flatlay"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative z-10 text-center text-cream px-5">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-champagne mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl">Crafted to be Treasured</h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold mb-4">Velmora Fine Jewelry</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight">
          Fine gold jewelry should be warm, wearable, and within reach.
        </h2>
        <div className="mt-8 space-y-5 text-ink-soft leading-relaxed text-left">
          <p>
            Velmora began with a simple belief: that the quiet luxury of fine
            gold jewelry should not be reserved for rare occasions or rare
            budgets. We design demi-fine pieces in small batches, finished by
            hand in 18K gold plating over sterling silver — hypoallergenic,
            nickel-free, and made to glow against the skin.
          </p>
          <p>
            Every piece is created to be lived in: light enough for the everyday,
            warm enough for the evening. We choose restraint over noise — no
            loud logos, no discount banners, no compromise on the materials that
            touch your skin.
          </p>
          <p>
            From the first sketch to the final polish, our promise is the same:
            jewelry crafted to be treasured, today and for years to come.
          </p>
        </div>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 mt-10 bg-gold text-cream px-9 py-4 text-[0.7rem] uppercase tracking-[0.2em] font-semibold hover:bg-gold-deep transition-colors"
        >
          Shop the Collection <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <section className="bg-sand py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-3 gap-8 text-center">
          {[
            { t: '18K Gold Plated', d: 'Over 925 sterling silver, for a warm, lasting gleam.' },
            { t: 'Hypoallergenic', d: 'Nickel-free and lead-free, kind to sensitive skin.' },
            { t: 'Small Batches', d: 'Designed and finished by hand, never mass-produced.' },
          ].map((f) => (
            <div key={f.t}>
              <h3 className="font-serif text-2xl mb-3">{f.t}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
