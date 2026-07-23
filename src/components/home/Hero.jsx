import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-deep text-velmora-pearl">
      <div
        className="absolute inset-0 bg-velmora-deep"
        data-strk-bg-id="home-hero-bg-k9l8m7"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-deep/45 via-velmora-deep/35 to-velmora-deep/80" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-velmora-ivory to-transparent" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-velmora-champagne">Demi-fine gold jewelry for every ritual</p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.9] text-velmora-pearl sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-ivory/85 sm:text-lg">Warm, luminous pieces designed for gifting, layering, and the quiet luxury of everyday self-celebration.</p>
          <Link to="/shop" className="velmora-focus mt-9 inline-flex bg-velmora-champagne px-7 py-4 text-xs font-bold uppercase tracking-widest text-velmora-espresso shadow-soft transition hover:bg-velmora-ivory">Shop the Collection</Link>
        </div>
      </div>
    </section>
  )
}
