import React, { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown, ShieldCheck, Globe2, Wrench } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink"
    >
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-9d3f1e"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink/95" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(184,118,62,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(184,118,62,0.18) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="absolute top-28 right-10 hidden md:flex flex-col gap-3 z-10 text-cream/70 text-xs font-mono tracking-widest">
        <span>EST. 2008</span>
        <span>SHANGHAI — CN</span>
        <span>ISO 9001:2015</span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-20 w-full">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-eyebrow text-copper-bright mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-copper-bright" />
            Precision Sheet Metal Folding Systems
          </p>

          <h1
            id="hero-title"
            className="font-display font-medium text-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-balance"
          >
            Engineered bends,<br />
            <span className="italic text-copper-bright">built to last.</span>
          </h1>

          <p
            id="hero-subtitle"
            className="mt-8 max-w-2xl text-base md:text-lg text-cream/80 leading-relaxed"
          >
            ARTITECT MACHINERY designs and manufactures industrial double folding machines,
            double folders, and high-rigidity metal folding machines — calibrated to micron
            tolerances and built for fabricators who refuse to compromise.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#quote"
              className="inline-flex items-center gap-3 bg-copper text-ink px-7 py-4 text-sm font-medium tracking-widest uppercase hover:bg-copper-bright transition-colors"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 border border-cream/30 text-cream px-7 py-4 text-sm font-medium tracking-widest uppercase hover:bg-cream/5 transition-colors"
            >
              Explore Machines
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-6 w-6 text-copper-bright mt-1 shrink-0" />
              <div>
                <div className="text-cream font-display text-2xl">±0.05 mm</div>
                <div className="text-cream/60 text-sm mt-1">Folding repeatability</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe2 className="h-6 w-6 text-copper-bright mt-1 shrink-0" />
              <div>
                <div className="text-cream font-display text-2xl">42+</div>
                <div className="text-cream/60 text-sm mt-1">Countries served</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Wrench className="h-6 w-6 text-copper-bright mt-1 shrink-0" />
              <div>
                <div className="text-cream font-display text-2xl">18 yrs</div>
                <div className="text-cream/60 text-sm mt-1">Field-proven engineering</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 hover:text-copper-bright transition-colors z-10 flex flex-col items-center gap-1 text-xs tracking-widest uppercase"
        aria-label="Scroll to About section"
      >
        <span>Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}

export default HeroSection
