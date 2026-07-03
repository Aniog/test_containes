import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-bg-velmora-7h1k"
          data-strk-bg="[about-headline] gold jewelry studio craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-soft mb-3">
            Our Story
          </p>
          <h1
            id="about-headline"
            className="font-serif text-cream text-4xl md:text-6xl max-w-2xl leading-tight"
          >
            Quiet luxury, made to be lived in.
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="prose prose-stone max-w-none space-y-6 text-stone leading-relaxed">
          <p className="text-lg text-ink font-serif">
            Velmora began with a simple belief: fine jewelry should be worn, not
            locked away.
          </p>
          <p>
            We craft demi-fine pieces in 18K gold plating over sterling silver —
            the warmth and weight of fine jewelry, designed for the everyday.
            Every piece is hypoallergenic, ethically made, and finished by hand.
          </p>
          <p>
            By selling directly to you, we remove the markups of marble
            showrooms and middlemen. The result is considered design, accessible
            pricing, and jewelry made to be treasured.
          </p>
          <p>
            From the studio to your jewelry box, every Velmora piece is made to
            be worn — and re-worn — for years to come.
          </p>
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-block bg-gold text-ink text-[11px] uppercase tracking-[0.25em] px-9 py-4 hover:bg-gold-soft transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
