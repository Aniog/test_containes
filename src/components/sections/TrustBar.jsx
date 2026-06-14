import React from 'react'

const STATS = [
  { v: '27+', l: 'Years of folding-machine engineering' },
  { v: '4,200', l: 'Machines delivered worldwide' },
  { v: '38', l: 'Countries with active service' },
  { v: '0.05°', l: 'Repeat bend accuracy' },
]

const LOGOS = [
  'AEROFAB',
  'NORTHGATE METALS',
  'STRATA INDUSTRIES',
  'MERIDIAN HVAC',
  'BRIDGE & CO.',
  'VANTA WORKS',
]

const TrustBar = () => {
  return (
    <section className="bg-bg border-b border-line">
      <div className="container-x py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
          {STATS.map((s) => (
            <div key={s.l} className="text-center md:text-left">
              <p className="font-display text-3xl md:text-4xl text-ink tabular-nums">
                {s.v}
              </p>
              <p className="mt-2 text-[13px] text-muted leading-snug max-w-[18ch] md:max-w-none">
                {s.l}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 pt-10 border-t border-line/80">
          <p className="text-center text-[11px] uppercase tracking-eyebrow text-muted">
            Trusted by independent fabricators and Tier-1 manufacturers
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
            {LOGOS.map((name) => (
              <span
                key={name}
                className="font-display text-sm md:text-base tracking-[0.2em] text-muted/80"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustBar
