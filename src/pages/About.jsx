import React from 'react'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/useStrkImages'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function About() {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-bg-2c5f9a"
          data-strk-bg="[about-eyebrow] [about-title] jewelry atelier warm gold craftsmanship"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso-900/50" />
        <div className="relative h-full container-editorial flex flex-col items-center justify-center text-center">
          <p id="about-eyebrow" className="text-xs uppercase tracking-widest3 text-gold-soft mb-4">
            Our Story
          </p>
          <h1 id="about-title" className="font-serif text-cream text-5xl md:text-7xl">
            Crafted to be Treasured
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container-editorial max-w-3xl text-center">
          <p className="text-xs uppercase tracking-widest3 text-gold mb-5">Est. with intention</p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso-800 mb-8 leading-tight">
            Fine craftsmanship should not wait for a special occasion.
          </h2>
          <div className="space-y-6 text-espresso-700 leading-relaxed text-left">
            <p>
              Velmora began with a simple belief: that the warmth of gold and the
              honesty of hand-finished detail belong in everyday life — not locked
              away for rare moments. We design demi-fine jewelry that is meant to be
              lived in, layered, and loved.
            </p>
            <p>
              Every piece is crafted in small batches, finished in 18K gold plating
              over a solid brass core, and made with materials chosen to be gentle on
              skin and kind to the planet. We choose hypoallergenic, nickel-free
              components so you can wear Velmora from morning to night.
            </p>
            <p>
              From the first sketch to the final polish, we hold ourselves to a quiet
              standard: pieces that feel substantial, look considered, and soften
              beautifully with the years. Jewelry you reach for every morning —
              crafted to be treasured.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-warm py-20 md:py-28">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Hand-Finished', text: 'Each piece is finished by hand in small batches, with attention to every edge and surface.' },
              { title: 'Skin-Friendly', text: '18K gold plating over brass, nickel-free and hypoallergenic — gentle on the most sensitive skin.' },
              { title: 'Made to Last', text: 'Materials chosen for durability and warmth, designed to soften and glow with the years.' },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <h3 className="font-serif text-2xl text-espresso-800 mb-3">{v.title}</h3>
                <p className="text-espresso-700 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 text-center">
        <div className="container-editorial">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso-800 mb-6">
            Discover the Collection
          </h2>
          <Link to="/shop" className="btn-accent">Shop Now</Link>
        </div>
      </section>
    </div>
  )
}
