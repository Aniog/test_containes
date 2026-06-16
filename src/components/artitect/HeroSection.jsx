import React from 'react'
import { ArrowRight, CheckCircle2, Factory } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-artitect-ink text-white">
      <div
        className="absolute inset-0 opacity-35"
        data-strk-bg-id="artitect-hero-bg-91f4c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-artitect-ink via-artitect-ink/92 to-artitect-graphite/78" />
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-artitect-brass/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-28">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-artitect-brass backdrop-blur">
            <Factory className="h-4 w-4" aria-hidden="true" />
            Precision sheet metal folding
          </p>
          <h1 id="hero-title" className="font-display text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Elegant machinery for exact metal folds.
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            ARTITECT MACHINERY supplies double folding machines, sheet metal folders, and metal folding systems built for reliable, clean, and repeatable production.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-artitect-brass px-7 py-4 text-base font-semibold text-artitect-ink shadow-elegant transition hover:bg-artitect-brass-dark hover:text-white">
              Explore Products
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white hover:text-artitect-ink">
              Talk to Our Team
            </a>
          </div>

          <div className="mt-10 grid gap-4 text-sm text-white/80 sm:grid-cols-3">
            {['Accurate double folds', 'Heavy-duty build', 'Easy operator workflow'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-artitect-brass" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:justify-self-end">
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-elegant backdrop-blur">
            <img
              alt="ARTITECT MACHINERY sheet metal folding machine in an elegant industrial workshop"
              className="h-[380px] w-full rounded-[1.5rem] object-cover sm:h-[460px] lg:w-[520px]"
              data-strk-img-id="artitect-hero-machine-a7d3e1"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="absolute -bottom-7 left-4 right-4 rounded-3xl border border-artitect-line bg-artitect-panel p-5 text-artitect-ink shadow-elegant sm:left-auto sm:w-80">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-artitect-brass-dark">Built for production</p>
            <p className="mt-2 text-2xl font-bold text-artitect-ink">Clean bends. Confident output.</p>
            <p className="mt-2 text-sm leading-6 text-artitect-steel">From small workshops to industrial lines, our folders help operators move faster with fewer corrections.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
