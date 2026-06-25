import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Check } from 'lucide-react'

const products = [
  {
    id: 'df-pro-3200',
    title: 'DF-Pro 3200',
    subtitle: 'Double Folding Machine',
    description: 'High-performance double folder with 3200mm working length. Ideal for large-format sheet metal fabrication with automated fold sequencing.',
    specs: ['3200mm working length', '2.0mm mild steel capacity', 'Digital angle readout', 'Automated sequencing'],
    imgId: 'product-df-pro-3200-a1b2c3',
    titleId: 'product-df-pro-3200-title',
    descId: 'product-df-pro-3200-desc',
  },
  {
    id: 'df-compact-2000',
    title: 'DF-Compact 2000',
    subtitle: 'Double Folder',
    description: 'Compact double folder designed for workshops with limited space. Full functionality in a smaller footprint with 2000mm working length.',
    specs: ['2000mm working length', '1.5mm mild steel capacity', 'Manual + digital control', 'Space-efficient design'],
    imgId: 'product-df-compact-2000-d4e5f6',
    titleId: 'product-df-compact-2000-title',
    descId: 'product-df-compact-2000-desc',
  },
  {
    id: 'smf-elite-2500',
    title: 'SMF-Elite 2500',
    subtitle: 'Sheet Metal Folder',
    description: 'Premium sheet metal folding machine with servo-driven backgauge and programmable fold sequences for complex profiles.',
    specs: ['2500mm working length', '1.8mm mild steel capacity', 'Servo backgauge', 'Programmable sequences'],
    imgId: 'product-smf-elite-2500-g7h8i9',
    titleId: 'product-smf-elite-2500-title',
    descId: 'product-smf-elite-2500-desc',
  },
  {
    id: 'mf-industrial-4000',
    title: 'MF-Industrial 4000',
    subtitle: 'Metal Folding Machine',
    description: 'Heavy-duty metal folding machine built for industrial production. 4000mm working length handles the largest panels with ease.',
    specs: ['4000mm working length', '2.5mm mild steel capacity', 'Hydraulic clamping', 'Heavy-duty frame'],
    imgId: 'product-mf-industrial-4000-j1k2l3',
    titleId: 'product-mf-industrial-4000-title',
    descId: 'product-mf-industrial-4000-desc',
  },
  {
    id: 'mf-standard-2500',
    title: 'MF-Standard 2500',
    subtitle: 'Metal Folder Machine',
    description: 'Versatile metal folder machine suitable for general fabrication. Excellent value with professional-grade precision and build quality.',
    specs: ['2500mm working length', '1.5mm mild steel capacity', 'Quick-change tooling', 'Foot pedal operation'],
    imgId: 'product-mf-standard-2500-m4n5o6',
    titleId: 'product-mf-standard-2500-title',
    descId: 'product-mf-standard-2500-desc',
  },
  {
    id: 'smf-auto-3000',
    title: 'SMF-Auto 3000',
    subtitle: 'Sheet Metal Folding Machine',
    description: 'Fully automated sheet metal folding machine with CNC control. Maximum productivity for high-volume production lines.',
    specs: ['3000mm working length', '2.0mm mild steel capacity', 'CNC control system', 'Auto tool change'],
    imgId: 'product-smf-auto-3000-p7q8r9',
    titleId: 'product-smf-auto-3000-title',
    descId: 'product-smf-auto-3000-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Range</p>
          <h1 className="text-3xl lg:text-5xl font-bold text-text-light tracking-tight mb-4">
            Folding Machines & Metal Folders
          </h1>
          <p className="text-text-light/70 max-w-2xl leading-relaxed">
            From compact workshop folders to industrial-scale automated systems, find the perfect machine for your sheet metal fabrication needs.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <article
                key={product.id}
                className="bg-surface rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-bg-alt">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">{product.subtitle}</p>
                  <h3 id={product.titleId} className="text-xl font-bold text-text mb-2">{product.title}</h3>
                  <p id={product.descId} className="text-sm text-text-muted leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-xs text-text-muted">
                        <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-light transition-colors"
                  >
                    Request Quote <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-text tracking-tight mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-text-muted max-w-lg mx-auto mb-8">
            We can configure machines to your exact specifications. Talk to our engineering team about your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-accent-light transition-colors"
          >
            Discuss Your Needs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
