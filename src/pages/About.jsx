import React from 'react'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/useStrkImages'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function About() {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-bg-2c5f8a"
          data-strk-bg="[about-eyebrow] [about-title] gold jewelry atelier craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-5">
          <p id="about-eyebrow" className="text-ivory/80 text-xs uppercase tracking-[0.3em] mb-4">
            Est. 2021
          </p>
          <h1 id="about-title" className="font-serif text-ivory text-5xl md:text-7xl">
            Our Story
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            The Velmora Philosophy
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-8 leading-tight">
            Fine jewelry should be lived in, not locked away.
          </h2>
          <p className="text-stone leading-relaxed mb-6">
            Velmora began with a frustration: beautiful gold jewelry was either
            prohibitively expensive or cheaply made. We set out to close that
            gap — demi-fine pieces, hand-finished in 18K gold plating over
            sterling silver, designed for the way women actually live.
          </p>
          <p className="text-stone leading-relaxed mb-6">
            Every piece is hypoallergenic, nickel-free, and made to be worn
            from morning to evening, from the office to the occasion. We
            believe in quiet luxury — the kind that does not shout, but is
            noticed.
          </p>
          <p className="text-stone leading-relaxed mb-10">
            From our studio to your jewelry box, we obsess over the details so
            you can simply treasure the result.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold text-ivory text-xs uppercase tracking-[0.2em] font-medium px-10 py-4 hover:bg-gold-soft transition-colors duration-300"
          >
            Explore the Collection
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              { title: 'Hand-Finished', text: 'Each piece is finished by hand, ensuring the warmth and detail machine production cannot replicate.' },
              { title: 'Hypoallergenic', text: 'Nickel-free, lead-free, and gentle on sensitive skin. Made to be worn every day.' },
              { title: 'Responsibly Made', text: 'Sterling silver bases and recycled materials wherever possible, without the luxury markup.' },
            ].map((v) => (
              <div key={v.title}>
                <h3 className="font-serif text-2xl text-ink mb-3">{v.title}</h3>
                <p className="text-sm text-stone leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
