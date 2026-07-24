import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { StrkBackground } from '@/components/StrkImage'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <StrkBackground
        id="hero-bg-velmora"
        query="[hero-title] [hero-subtitle] warm-lit close-up of gold jewelry worn on a model's neck and ear soft candlelight dark editorial photography"
        ratio="16x9"
        width={1920}
        className="absolute inset-0 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
      <div className="absolute inset-0 bg-ink/20" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 pb-24 pt-32 text-center md:px-10">
        <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-widest3 text-gold">
          Demi-Fine · 18K Gold Plated
        </p>
        <h1
          id="hero-title"
          className="mt-6 animate-fade-up font-serif text-5xl font-light leading-[1.05] text-ivory [animation-delay:150ms] md:text-7xl lg:text-8xl"
        >
          Crafted to be
          <span className="block font-medium italic text-goldlight">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="mx-auto mt-7 max-w-xl animate-fade-up text-base font-light leading-relaxed text-sand [animation-delay:300ms] md:text-lg"
        >
          Quiet pieces in warm gold — earrings, necklaces and huggies designed
          for every day you want to remember.
        </p>
        <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 [animation-delay:450ms] sm:flex-row">
          <Link
            to="/shop"
            className="group inline-flex items-center gap-3 bg-gold px-10 py-4 text-xs font-semibold uppercase tracking-widest2 text-inkonaccent transition-all duration-300 hover:bg-goldlight"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href="#story"
            className="inline-flex items-center gap-3 border border-ivory/40 px-10 py-4 text-xs font-semibold uppercase tracking-widest2 text-ivory transition-all duration-300 hover:border-gold hover:text-gold"
          >
            Our Story
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="h-14 w-px overflow-hidden bg-line">
          <div className="h-1/2 w-full animate-pulse bg-gold" />
        </div>
      </div>
    </section>
  )
}
