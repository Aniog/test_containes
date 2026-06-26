import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative isolate overflow-hidden bg-[#0E1B2C] text-white"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-[#0a1422]"
        data-strk-bg-id="artitect-hero-bg-9f3a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Decorative gradient overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0E1B2C] via-[#0E1B2C]/85 to-[#0E1B2C]/40" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#0E1B2C] to-transparent" />

      {/* Decorative diagonal lines */}
      <svg
        aria-hidden="true"
        className="absolute right-0 top-0 -z-10 h-full w-1/2 opacity-[0.07]"
        viewBox="0 0 400 800"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="diag" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(-25)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="#C8A85B" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 pt-32 lg:px-10 lg:pt-40">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#C8A85B]">
            Sheet Metal Folding Systems
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Engineered folds.
            <br />
            <span className="text-[#C8A85B]">Built for production.</span>
          </h1>

          <p
            id="hero-subtitle"
            className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
          >
            ARTITECT MACHINERY designs and builds precision double folding
            machines, sheet metal folders, and metal folding systems trusted by
            fabricators in 40+ countries.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C8A85B] px-7 py-3.5 text-sm font-semibold text-[#0E1B2C] transition hover:bg-[#B59449]"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollTo('products')}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#C8A85B] hover:text-[#C8A85B]"
            >
              Explore Machines
            </button>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid max-w-2xl grid-cols-2 gap-x-10 gap-y-6 border-t border-white/10 pt-10 sm:grid-cols-4">
            {[
              { k: '40+', v: 'Countries served' },
              { k: '1,800+', v: 'Installations' },
              { k: '24 / 7', v: 'Service support' },
              { k: '5 yr', v: 'Frame warranty' },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-semibold text-[#C8A85B] md:text-3xl tabular-nums">
                  {s.k}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/60">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <button
          onClick={() => scrollTo('products')}
          aria-label="Scroll to products"
          className="mt-16 mb-10 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50 transition hover:text-[#C8A85B] lg:mt-auto lg:mb-10"
        >
          Discover the lineup
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  )
}