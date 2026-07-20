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
    <div ref={ref} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-velmora-7g8h"
          data-strk-bg="[about-hero-sub] [about-hero-title] gold jewelry atelier warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative h-full max-w-8xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-12">
          <p className="text-cream/80 text-xs tracking-[0.3em] uppercase mb-3">Our Story</p>
          <h1 id="about-hero-title" className="font-serif text-cream text-5xl md:text-7xl leading-[0.95]">
            Quietly, beautifully made
          </h1>
          <p id="about-hero-sub" className="text-cream/85 mt-4 max-w-lg">
            Demi-fine gold jewelry designed in studio and made to be worn every day.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-stone mb-4">Est. 2019</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            We believe fine jewelry shouldn't be saved for special occasions.
          </h2>
          <p className="text-stone text-lg leading-relaxed mt-8">
            Velmora was founded on a simple idea: that the warmth and weight of
            real gold jewelry should be accessible enough to wear on a Tuesday.
            We work in 18K gold plating over sterling silver, hand-finishing each
            piece so it carries the presence of fine jewelry without the
            heirloom price tag.
          </p>
          <p className="text-stone text-lg leading-relaxed mt-4">
            Every piece is hypoallergenic, nickel-free and made to last — designed
            to be lived in, layered, and treasured.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
          {[
            { t: '18K Gold Plated', d: 'Layered over 925 sterling silver for a lasting, warm finish.' },
            { t: 'Hypoallergenic', d: 'Nickel-free and gentle on sensitive skin. Sleep in it, live in it.' },
            { t: 'Made to Last', d: 'Tarnish-resistant and hand-finished for everyday wear.' },
          ].map((v) => (
            <div key={v.t}>
              <h3 className="font-serif text-2xl md:text-3xl mb-3">{v.t}</h3>
              <p className="text-stone leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 text-center">
        <h2 className="font-serif text-4xl md:text-5xl">Find your everyday piece</h2>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-champagne text-cream text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-champagne-deep transition-colors"
        >
          Shop the Collection
        </Link>
      </section>
    </div>
  )
}
