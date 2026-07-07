import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-velmora-ivory pb-20 pt-24 md:pt-32">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-velmora-gold">About Velmora</p>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl">Quiet Luxury, Made Accessible</h1>
        <p className="mt-6 text-lg leading-relaxed text-velmora-text-muted">
          We believe fine jewelry should not be reserved for special occasions. Every Velmora piece is designed to feel precious, comfortable, and completely wearable — whether you are dressing up or keeping it casual.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-velmora-text-muted">
          Our demi-fine collection is made with 18K gold-plated brass and stainless steel, finished by hand, and rigorously tested to be hypoallergenic and tarnish-resistant.
        </p>
      </div>
    </div>
  )
}
