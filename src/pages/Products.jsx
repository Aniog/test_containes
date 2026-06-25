import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

const catalog = [
  {
    id: 'df-2500',
    slug: 'df-2500',
    series: 'Compact Series',
    name: 'DF-2500 Double Folder',
    tagline: 'Versatile twin-beam folding',
    description:
      'The DF-2500 is our most-loved double folding machine — compact enough for a small fabrication shop, capable of folding up and down without flipping the sheet. Ideal for HVAC, signage, and architectural detailing.',
    bullets: [
      'Twin upper and lower folding beams',
      'Servo-electric drive — quiet, repeatable, efficient',
      'Hardened tool steel beams, ground to ±0.02 mm',
      '15-inch HD touch interface with program library',
    ],
    specs: [
      { k: 'Working length', v: '2 500 mm' },
      { k: 'Mild steel capacity', v: '1.5 mm' },
      { k: 'Stainless steel capacity', v: '1.0 mm' },
      { k: 'Aluminium capacity', v: '2.0 mm' },
      { k: 'Folding angle', v: '0° – 145°' },
      { k: 'Folding accuracy', v: '±0.05 mm' },
      { k: 'Back gauge axes', v: '3 (X · R · Z)' },
      { k: 'Total power', v: '11 kW' },
    ],
  },
  {
    id: 'df-3200',
    slug: 'df-3200',
    series: 'Production Series',
    name: 'DF-3200 Sheet Metal Folder',
    tagline: 'Heavy-duty production line',
    description:
      'A heavy-frame sheet metal folding machine engineered for continuous production. The DF-3200 doubles up CNC control with reinforced tooling for fabricators who run two shifts or more, every day of the week.',
    bullets: [
      '5-axis CNC back gauge',
      'Stress-relieved welded steel frame',
      'Auto tool change for high-mix runs',
      'Remote diagnostics and predictive maintenance',
    ],
    specs: [
      { k: 'Working length', v: '3 200 mm' },
      { k: 'Mild steel capacity', v: '2.0 mm' },
      { k: 'Stainless steel capacity', v: '1.5 mm' },
      { k: 'Aluminium capacity', v: '2.5 mm' },
      { k: 'Folding angle', v: '0° – 145°' },
      { k: 'Folding accuracy', v: '±0.05 mm' },
      { k: 'Back gauge axes', v: '5 (X · Y · R · Z₁ · Z₂)' },
      { k: 'Total power', v: '18 kW' },
    ],
  },
  {
    id: 'df-4000',
    slug: 'df-4000',
    series: 'Architectural Series',
    name: 'DF-4000 Metal Folder Machine',
    tagline: 'Long-format precision',
    description:
      'Built for architectural panels, façade systems, and long HVAC ducting. The DF-4000 metal folder machine maintains industrial-grade tolerance across a full four-meter sheet.',
    bullets: [
      'Four-meter beam with zero deflection compensation',
      'Optional crowning system for long folds',
      'Tandem servo drives for synchronized movement',
      'Designed for architectural-grade finishes',
    ],
    specs: [
      { k: 'Working length', v: '4 000 mm' },
      { k: 'Mild steel capacity', v: '1.5 mm' },
      { k: 'Stainless steel capacity', v: '1.2 mm' },
      { k: 'Aluminium capacity', v: '2.0 mm' },
      { k: 'Folding angle', v: '0° – 140°' },
      { k: 'Folding accuracy', v: '±0.05 mm' },
      { k: 'Back gauge axes', v: '5 (X · Y · R · Z₁ · Z₂)' },
      { k: 'Total power', v: '22 kW' },
    ],
  },
  {
    id: 'mf-1600',
    slug: 'mf-1600',
    series: 'Studio Series',
    name: 'MF-1600 Metal Folder',
    tagline: 'For workshops and studios',
    description:
      'A small-format metal folder built for design studios, prototype shops, and architectural model makers. Whisper-quiet, runs on single-phase power, fits through a standard doorway.',
    bullets: [
      'Single-phase, 220 V — plug in anywhere',
      'Magnetic clamping for fast setup',
      'Manual or motorized configurations',
      'Compact 1.6 m footprint',
    ],
    specs: [
      { k: 'Working length', v: '1 600 mm' },
      { k: 'Mild steel capacity', v: '1.2 mm' },
      { k: 'Stainless steel capacity', v: '0.8 mm' },
      { k: 'Aluminium capacity', v: '1.5 mm' },
      { k: 'Folding angle', v: '0° – 135°' },
      { k: 'Folding accuracy', v: '±0.08 mm' },
      { k: 'Back gauge axes', v: '2 (X · R)' },
      { k: 'Total power', v: '3.5 kW' },
    ],
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const sdk = await import('@strikingly/sdk')
        const config = await import('@/strk-img-config.json')
        if (cancelled || !containerRef.current) return
        sdk.ImageHelper?.loadImages?.(config.default || config, containerRef.current)
      } catch {
        // ignore
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-paper py-20 md:py-28 border-b border-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-12 bg-accent" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                The Collection
              </span>
            </div>
            <h1 className="font-serif font-light text-5xl md:text-7xl tracking-tight text-ink">
              Folding machines,
              <br />
              <span className="italic text-accent">end to end.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-graphite leading-relaxed">
              Four families. From the studio-size MF-1600 to the four-meter
              architectural DF-4000 — each one engineered around a different
              kind of fabricator, all sharing the same DNA: precision, calm,
              and longevity.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="bg-paper">
        {catalog.map((p, idx) => (
          <article
            key={p.id}
            id={p.slug}
            className={`scroll-mt-24 ${
              idx % 2 === 1 ? 'bg-fog' : 'bg-paper'
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 grid gap-12 md:grid-cols-12 items-center">
              <div
                className={`md:col-span-6 ${
                  idx % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden border border-mist">
                  <img
                    alt={p.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`catalog-${p.id}-img`}
                    data-strk-img={`[catalog-${p.id}-desc] [catalog-${p.id}-name] sheet metal folding machine`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3Crect width='4' height='3' fill='%23E5E7EB'/%3E%3C/svg%3E"
                  />
                </div>
              </div>
              <div className={`md:col-span-6 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">
                  {p.series}
                </p>
                <h2 id={`catalog-${p.id}-name`} className="font-serif font-light text-3xl md:text-5xl tracking-tight text-ink">
                  {p.name}
                </h2>
                <p className="mt-2 italic text-accent">{p.tagline}</p>
                <p id={`catalog-${p.id}-desc`} className="mt-6 text-graphite leading-relaxed">
                  {p.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-graphite">
                      <Check className="w-4 h-4 mt-1 text-accent shrink-0" strokeWidth={2} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-mist pt-6 grid grid-cols-2 gap-x-8 gap-y-3">
                  {p.specs.map((s) => (
                    <div key={s.k} className="flex items-baseline justify-between border-b border-dotted border-mist pb-2">
                      <span className="text-[11px] uppercase tracking-[0.18em] text-ash">
                        {s.k}
                      </span>
                      <span className="font-mono text-sm text-ink">{s.v}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-steel transition-colors"
                >
                  Enquire about {p.id.toUpperCase()}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Closing CTA */}
      <section className="bg-ink text-paper py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">
            Need something else?
          </p>
          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tight">
            Custom configurations are
            <span className="italic text-accent"> our quiet specialty.</span>
          </h2>
          <p className="mt-6 text-mist leading-relaxed max-w-2xl mx-auto">
            Longer beams, specialty tooling, full automation cells — we'll engineer
            it around the part you need to make.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 border border-paper text-paper px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-paper hover:text-ink transition-colors"
          >
            Speak with an engineer
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
