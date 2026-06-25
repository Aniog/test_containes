import React from 'react'
import { StrkImage } from '@/components/ui/StrkImage'
import { trustBar } from '@/data/products'

export default function About() {
  return (
    <div className="bg-ivory pt-28 md:pt-32">
      {/* hero */}
      <section className="mx-auto max-w-4xl px-5 pb-16 text-center md:px-8">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Our Story</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-6xl">
          Jewelry should be felt,
          <br />
          <span className="italic text-gold-deep">not flaunted.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-taupe md:text-base">
          Velmora was founded on a belief that fine jewelry can be quiet,
          considered and made for everyday life — not locked away in a vault.
        </p>
      </section>

      {/* image */}
      <section className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="relative aspect-[16/9] overflow-hidden bg-ink">
          <div
            className="absolute inset-0"
            data-strk-bg-id="about-hero-bg-velmora-9d1f"
            data-strk-bg="[about-hero-text] [about-hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1400"
          />
          <h2 id="about-hero-title" className="sr-only">Velmora studio crafting gold jewelry</h2>
          <p id="about-hero-text" className="sr-only">Warm lit close up of demi fine gold jewelry being hand finished</p>
        </div>
      </section>

      {/* values */}
      <section className="mx-auto max-w-5xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: 'Considered Design',
              body: 'Small collections, designed in studio. Every detail earns its place — nothing is added for the sake of it.',
            },
            {
              title: 'Made to Last',
              body: '18K gold plate over solid brass, hypoallergenic and nickel free. Pieces made to be worn, not stored.',
            },
            {
              title: 'Fairly Priced',
              body: 'Demi-fine quality without the boutique markup. Premium materials, accessible price points.',
            },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <h3 className="font-serif text-2xl text-ink">{v.title}</h3>
              <div className="mx-auto my-4 h-px w-10 bg-gold" />
              <p className="text-sm leading-relaxed text-taupe">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* trust */}
      <section className="border-y border-sand bg-cream">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-5 py-12 text-center md:grid-cols-4 md:px-8">
          {trustBar.map((t) => (
            <p key={t.label} className="text-[11px] uppercase tracking-[0.18em] text-ink">
              {t.label}
            </p>
          ))}
        </div>
      </section>
    </div>
  )
}
