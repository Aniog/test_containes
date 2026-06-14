import React from 'react'
import { Check } from 'lucide-react'

const COMPARISON = [
  { feature: 'Bend length', values: ['1500–3200 mm', '2000–4000 mm', '1500–2500 mm'] },
  { feature: 'Mild steel capacity', values: ['4–8 mm', '6–12 mm', '3–6 mm'] },
  { feature: 'Stainless capacity', values: ['3–5 mm', '4–8 mm', '2–4 mm'] },
  { feature: 'Repeatability', values: ['±0.1°', '±0.05°', '±0.1°'] },
  { feature: 'Operator mode', values: ['Manual', 'Manual + Auto', 'Manual only'] },
  { feature: 'CNC recipe memory', values: ['50 jobs', '200+ jobs', '—'] },
  { feature: 'Warranty', values: ['12 months', '12 months', '12 months'] },
]

const TIERS = [
  {
    name: 'Craft Series',
    sub: 'Metal folder & metal folder machine',
    highlight: 'For independent fabricators',
    accent: false,
  },
  {
    name: 'Production Series',
    sub: 'Sheet metal folder & sheet metal folding machine',
    highlight: 'For repeat batch production',
    accent: true,
  },
  {
    name: 'Heritage Series',
    sub: 'Double folder & double folding machine',
    highlight: 'For bespoke & architectural work',
    accent: false,
  },
]

const Specs = () => {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="eyebrow">Specifications</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-ink leading-[1.1] tracking-tight text-balance">
            Three series, tuned to the way you actually work.
          </h2>
          <p className="mt-5 text-[15px] md:text-base text-muted leading-relaxed">
            We group the lineup into three series so it's easy to find the
            machine that matches your shop's volume, materials, and
            automation goals. The full datasheet for every model is
            available on request.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border p-7 md:p-8 ${
                t.accent
                  ? 'border-ink bg-ink text-bg'
                  : 'border-line bg-surface text-ink'
              }`}
            >
              <p
                className={`text-[11px] uppercase tracking-eyebrow ${
                  t.accent ? 'text-accent' : 'text-accent-strong'
                }`}
              >
                {t.highlight}
              </p>
              <h3 className="mt-4 font-display text-2xl md:text-3xl">
                {t.name}
              </h3>
              <p
                className={`mt-2 text-sm ${
                  t.accent ? 'text-bg/70' : 'text-muted'
                }`}
              >
                {t.sub}
              </p>
              <ul
                className={`mt-6 flex flex-col gap-2.5 text-sm ${
                  t.accent ? 'text-bg/80' : 'text-ink-soft'
                }`}
              >
                {[
                  'Cast iron bed, hand-scraped',
                  'CE marked controls',
                  '12-month full warranty',
                  'Lifetime technical support',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        t.accent ? 'text-accent' : 'text-accent-strong'
                      }`}
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="grid grid-cols-1 md:grid-cols-4 bg-bg/50">
            <div className="p-5 md:p-6 text-[11px] uppercase tracking-eyebrow text-muted">
              Specification
            </div>
            {TIERS.map((t) => (
              <div
                key={t.name}
                className="p-5 md:p-6 text-[11px] uppercase tracking-eyebrow text-ink-soft border-t md:border-t-0 md:border-l border-line"
              >
                {t.name}
              </div>
            ))}
          </div>
          {COMPARISON.map((row, idx) => (
            <div
              key={row.feature}
              className={`grid grid-cols-1 md:grid-cols-4 ${
                idx !== 0 ? 'border-t border-line' : ''
              }`}
            >
              <div className="p-5 md:p-6 text-sm text-ink bg-bg/30">
                {row.feature}
              </div>
              {row.values.map((v, i) => (
                <div
                  key={i}
                  className="p-5 md:p-6 text-sm text-ink-soft tabular-nums border-t md:border-t-0 md:border-l border-line"
                >
                  {v}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specs
