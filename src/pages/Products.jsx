import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

const products = [
  {
    id: 'duo-pro-2500',
    name: 'DuoFold Pro 2500',
    category: 'Double Folding Machine',
    blurb: 'A balanced, precise double folder for medium-duty fabricators handling daily production runs in mild steel and stainless.',
    specs: [
      ['Max sheet length', '2,500 mm'],
      ['Mild steel capacity', '4 mm'],
      ['Stainless capacity', '2.5 mm'],
      ['Beam force', '85 t'],
      ['Repeatability', '±0.05 mm'],
    ],
    features: [
      'Servo-driven dual folding beams',
      'Touchscreen control with bend library',
      'Hardened tool steel inserts',
    ],
    titleId: 'product-duo-pro-2500-title',
    descId: 'product-duo-pro-2500-desc',
  },
  {
    id: 'duo-master-3200',
    name: 'DuoMaster 3200',
    category: 'Heavy-duty Double Folder',
    blurb: 'Our flagship double folding machine — reinforced frame and twin hydraulic actuators for the most demanding folding work.',
    specs: [
      ['Max sheet length', '3,200 mm'],
      ['Mild steel capacity', '6 mm'],
      ['Stainless capacity', '4 mm'],
      ['Beam force', '160 t'],
      ['Repeatability', '±0.04 mm'],
    ],
    features: [
      'Twin synchronised hydraulic beams',
      'CNC back-gauge with 6-axis motion',
      'Quiet operation under 72 dB',
    ],
    titleId: 'product-duo-master-3200-title',
    descId: 'product-duo-master-3200-desc',
  },
  {
    id: 'panel-edge-2000',
    name: 'PanelEdge 2000',
    category: 'Sheet Metal Folding Machine',
    blurb: 'Compact and refined, the PanelEdge is built for architectural fabricators working with delicate aluminium and finished sheet.',
    specs: [
      ['Max sheet length', '2,000 mm'],
      ['Aluminium capacity', '3 mm'],
      ['Mild steel capacity', '2 mm'],
      ['Beam force', '45 t'],
      ['Repeatability', '±0.03 mm'],
    ],
    features: [
      'Soft-touch tooling for finished sheet',
      'Programmable up-folder for box panels',
      'Low-noise pneumatic clamping',
    ],
    titleId: 'product-panel-edge-2000-title',
    descId: 'product-panel-edge-2000-desc',
  },
  {
    id: 'metal-folder-1600',
    name: 'CraftFold 1600',
    category: 'Metal Folder Machine',
    blurb: 'A dependable manual–assist metal folder for workshops and prototype rooms where versatility matters more than throughput.',
    specs: [
      ['Max sheet length', '1,600 mm'],
      ['Mild steel capacity', '1.5 mm'],
      ['Aluminium capacity', '2 mm'],
      ['Beam force', '20 t'],
      ['Repeatability', '±0.08 mm'],
    ],
    features: [
      'Manual-assist hydraulic clamp',
      'Quick-change segmented tooling',
      'Compact 1.6 m footprint',
    ],
    titleId: 'product-metal-folder-1600-title',
    descId: 'product-metal-folder-1600-desc',
  },
  {
    id: 'duo-elite-4000',
    name: 'DuoElite 4000',
    category: 'Architectural Double Folder',
    blurb: 'Designed for facade and cladding fabricators, the DuoElite produces long, finished folds with extraordinary consistency.',
    specs: [
      ['Max sheet length', '4,000 mm'],
      ['Mild steel capacity', '3 mm'],
      ['Aluminium capacity', '4 mm'],
      ['Beam force', '120 t'],
      ['Repeatability', '±0.03 mm'],
    ],
    features: [
      'Anti-deflection compensated beam',
      'Vacuum sheet support for thin gauge',
      'Optional automated panel feeder',
    ],
    titleId: 'product-duo-elite-4000-title',
    descId: 'product-duo-elite-4000-desc',
  },
  {
    id: 'metal-folding-classic',
    name: 'Classic Folder 2200',
    category: 'Metal Folding Machine',
    blurb: 'A timeless, robust metal folding machine with mechanical precision and minimal electronics — built to last generations.',
    specs: [
      ['Max sheet length', '2,200 mm'],
      ['Mild steel capacity', '2.5 mm'],
      ['Aluminium capacity', '3 mm'],
      ['Beam force', '60 t'],
      ['Repeatability', '±0.06 mm'],
    ],
    features: [
      'Cast-iron stress-relieved frame',
      'Mechanical depth-stop system',
      '20-year frame warranty',
    ],
    titleId: 'product-metal-folding-classic-title',
    descId: 'product-metal-folding-classic-desc',
  },
]

const Products = () => {
  return (
    <div>
      {/* HEADER */}
      <section className="bg-bone border-b border-mist">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-amber-brand" />
            <span id="products-eyebrow" className="text-xs uppercase tracking-widest2 text-steel">
              The Collection
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <h1 id="products-title" className="lg:col-span-7 font-serif font-light text-5xl md:text-7xl leading-[1.05] text-ink">
              Folding machines, considered.
            </h1>
            <p id="products-subtitle" className="lg:col-span-5 text-graphite text-lg leading-relaxed">
              From compact workshop folders to long-bed architectural double
              folding machines — every Artitect machine is built around the
              same principles of precision, calm operation, and longevity.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="bg-canvas py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-20 md:space-y-28">
          {products.map((p, i) => (
            <article
              key={p.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="lg:col-span-7">
                <div className="aspect-[3/2] overflow-hidden border border-mist bg-bone">
                  <img
                    alt={p.name}
                    data-strk-img-id={`product-${p.id}-img`}
                    data-strk-img={`[${p.descId}] [${p.titleId}] [products-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="text-xs uppercase tracking-widest2 text-amber-brand">
                  {p.category}
                </div>
                <h2 id={p.titleId} className="mt-3 font-serif font-light text-4xl md:text-5xl text-ink leading-tight">
                  {p.name}
                </h2>
                <p id={p.descId} className="mt-5 text-graphite text-lg leading-relaxed">
                  {p.blurb}
                </p>

                <dl className="mt-8 border-t border-mist">
                  {p.specs.map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-mist py-3 text-sm">
                      <dt className="text-steel uppercase tracking-widest2 text-xs">{k}</dt>
                      <dd className="text-ink font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-graphite">
                      <Check className="w-4 h-4 mt-1 text-amber-brand" strokeWidth={2} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-3 bg-ink text-canvas px-7 py-3.5 text-xs uppercase tracking-widest2 hover:bg-graphite transition-colors"
                >
                  Request specifications
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-canvas py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight">
            Don't see exactly what you need?
          </h2>
          <p className="mt-5 text-steel text-lg max-w-2xl mx-auto">
            Every Artitect machine can be tailored — beam length, tooling,
            controls, automation. Tell us your application and we'll specify
            the right folder for your line.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-canvas text-ink px-8 py-4 text-xs uppercase tracking-widest2 hover:bg-amber-brand hover:text-ink transition-colors"
          >
            Configure a custom folder
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
