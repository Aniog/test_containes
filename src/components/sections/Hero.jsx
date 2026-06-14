import React from 'react'
import { ArrowUpRight, Play, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

const Hero = ({ onRequestQuote }) => {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-slate text-bg pt-28 md:pt-36 pb-20 md:pb-28"
    >
      {/* Background image (stock machinery) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        data-strk-bg-id="hero-bg-a3f1c9"
        data-strk-bg="[hero-eyebrow] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      {/* Dark gradient + grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate/60 via-slate/85 to-slate"
      />
      <div aria-hidden className="absolute inset-0 -z-10 grid-lines opacity-40" />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 -z-10 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-32 -z-10 h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <p id="hero-eyebrow" className="eyebrow text-accent">
              Sheet metal folding systems · Est. 1998
            </p>
            <h1
              id="hero-title"
              className="mt-5 font-display text-[44px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-balance tracking-tight text-bg"
            >
              The art of the{' '}
              <span className="italic text-accent">perfect bend.</span>
              <br className="hidden sm:block" />
              Engineered for fabricators.
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-bg/75 text-balance">
              From the double folder that defined our workshop to a full
              range of sheet metal folding machines — ARTITECT MACHINERY
              builds the tools that put repeatable, exhibition-grade edges
              into the hands of metalworkers everywhere.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex h-12 md:h-14 items-center gap-2 rounded-full bg-accent px-6 md:px-7 text-[15px] font-medium text-bg hover:bg-accent-strong transition-colors"
              >
                Request a quote
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <a
                href="#products"
                className="inline-flex h-12 md:h-14 items-center gap-2 rounded-full border border-white/20 px-6 text-[15px] font-medium text-bg hover:bg-white/5 transition-colors"
              >
                <Play className="h-4 w-4" />
                Explore the lineup
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 md:p-7">
              <div className="flex items-center justify-between">
                <Badge tone="onDark">
                  <Sparkles className="h-3 w-3" />
                  Featured spec
                </Badge>
                <span className="text-[11px] tracking-eyebrow uppercase text-bg/50">
                  AM-D12 Pro
                </span>
              </div>
              <p className="mt-5 font-display text-2xl md:text-[26px] leading-snug text-bg">
                Double folding machine with sub-degree repeatability,
                rated to 12&nbsp;mm mild steel.
              </p>
              <dl className="mt-6 grid grid-cols-3 gap-3 text-sm">
                {[
                  { v: '0.05°', l: 'Tolerance' },
                  { v: '3200mm', l: 'Bend length' },
                  { v: '2.4kW', l: 'Servo drive' },
                ].map((s) => (
                  <div key={s.l} className="rounded-lg border border-white/10 p-3">
                    <dt className="text-[10px] uppercase tracking-eyebrow text-bg/50">
                      {s.l}
                    </dt>
                    <dd className="mt-1 font-display text-lg text-bg tabular-nums">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href="#products"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all"
              >
                See full specification
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
