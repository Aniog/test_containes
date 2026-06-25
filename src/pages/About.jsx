import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-sub] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-5">
          <p className="text-[11px] uppercase tracking-[0.3em] text-ivory/80 mb-3">Est. 2024</p>
          <h1 id="about-hero-title" className="font-serif text-ivory text-5xl md:text-7xl">Our Story</h1>
          <p id="about-hero-sub" className="text-ivory/85 mt-4 max-w-md">Quiet luxury, made to be lived in.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-28 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">The Velmora Philosophy</p>
        <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
          Fine jewelry should be worn, not saved for special occasions.
        </h2>
        <p className="text-taupe mt-6 leading-relaxed">
          Velmora began with a belief that everyday luxury is a quiet thing — the
          warm glow of gold against the skin, the weight of a piece made well, the
          ritual of putting on something that means something. Each piece is crafted
          in 18K gold plating with hypoallergenic materials, designed to last through
          every ordinary, extraordinary day.
        </p>
        <p className="text-taupe mt-4 leading-relaxed">
          From the atelier to your door, we keep our process considered and our
          prices honest — so you can collect pieces you love, and wear them always.
        </p>
        <Link
          to="/shop"
          className="mt-9 inline-flex items-center gap-2 bg-gold text-ivory px-9 py-4 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-gold-deep transition-colors"
        >
          Explore the Collection <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  )
}
