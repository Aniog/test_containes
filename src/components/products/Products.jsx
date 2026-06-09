import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description:
      'High-performance double folding machine with synchronized upper and lower beams for precise, repeatable folds on large sheet metal panels.',
    features: ['Synchronized dual-beam system', 'CNC control with touch screen', 'Up to 4mm mild steel capacity'],
    imgId: 'prod-dfm-c3a7f1',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description:
      'Versatile double folder designed for HVAC ductwork and architectural metalwork. Delivers clean, consistent bends with minimal setup time.',
    features: ['Quick-change tooling', 'Adjustable back gauge', 'Heavy-duty welded frame'],
    imgId: 'prod-df-e5b2d8',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description:
      'Compact sheet metal folder ideal for workshops and job sites. Manual or semi-automatic operation with precision folding fingers.',
    features: ['Portable design options', 'Precision folding fingers', '0.5–2mm sheet range'],
    imgId: 'prod-smf-f1c9e3',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description:
      'Full-size CNC sheet metal folding machine for high-volume production. Automated bend sequencing and angle correction built in.',
    features: ['Automated bend sequencing', 'Real-time angle correction', 'Up to 6m working length'],
    imgId: 'prod-smfm-a4d6b5',
    titleId: 'prod-smfm-title',
    descId: 'prod-smfm-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description:
      'Robust metal folder for general fabrication. Simple foot-pedal operation and hardened steel beams ensure years of reliable service.',
    features: ['Foot-pedal operation', 'Hardened steel beams', 'Low maintenance design'],
    imgId: 'prod-mf-b7e2c9',
    titleId: 'prod-mf-title',
    descId: 'prod-mf-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description:
      'Industrial metal folding machine with multi-axis back gauge and programmable folding cycles. Built for continuous production environments.',
    features: ['Multi-axis back gauge', 'Programmable cycles', 'CE certified safety'],
    imgId: 'prod-mfm-d8f1a6',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-600 font-semibold text-sm tracking-widest uppercase">
            Our Products
          </span>
          <h2
            id="products-section-title"
            className="text-3xl md:text-4xl font-bold text-brand-900 mt-3 font-[var(--font-heading)]"
          >
            Precision Folding Solutions
          </h2>
          <p
            id="products-section-subtitle"
            className="text-brand-600 mt-4 text-lg leading-relaxed"
          >
            From compact workshop folders to full-scale CNC folding machines,
            our range covers every metal folding need with unmatched precision
            and reliability.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-brand-100 hover:border-accent-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-subtitle] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-brand-900 font-[var(--font-heading)] group-hover:text-accent-700 transition-colors"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-brand-600 mt-2 text-sm leading-relaxed"
                >
                  {product.description}
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-2">
                  {product.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-brand-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center mt-5 text-accent-600 hover:text-accent-700 font-semibold text-sm transition-colors"
                >
                  Request Details
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
