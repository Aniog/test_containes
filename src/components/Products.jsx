import { useEffect, useRef } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    desc: 'High-capacity dual-beam folding for complex bends with uncompromising precision.',
    specs: ['Max length: 4,000mm', 'Pressure: 220 tons', 'CNC controlled'],
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    desc: 'Compact yet powerful double folder designed for mid-size fabrication shops.',
    specs: ['Max length: 3,200mm', 'Pressure: 160 tons', 'Quick tooling change'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    desc: 'Versatile folder engineered for consistent, repeatable sheet metal forming.',
    specs: ['Max length: 3,000mm', 'Pressure: 120 tons', 'Digital angle display'],
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    desc: 'Full-automation folding machine with servo-electric backgauge system.',
    specs: ['Max length: 4,500mm', 'Pressure: 300 tons', 'Full CNC automation'],
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    desc: 'Heavy-duty metal folder built for demanding industrial environments.',
    specs: ['Max length: 2,500mm', 'Pressure: 100 tons', 'Hydraulic crowning'],
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    desc: 'Entry-level metal folder machine offering exceptional value and reliability.',
    specs: ['Max length: 2,000mm', 'Pressure: 80 tons', 'Manual + CNC options'],
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="products"
      ref={containerRef}
      className="py-20 lg:py-32 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Our Product Line
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-6">
            World-Class Folding Equipment
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            From compact folders to full-automation folding machines, ARTITECT
            MACHINERY delivers the precision and durability your production line
            demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const titleId = `product-title-${product.id}`
            const descId = `product-desc-${product.id}`

            return (
              <div
                key={product.id}
                className="group bg-surface rounded-lg border border-border-light overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-56 overflow-hidden bg-navy/5">
                  <img
                    alt={product.title}
                    data-strk-img-id={`product-img-${product.id}`}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3
                    id={titleId}
                    className="text-xl font-bold text-navy mb-2"
                  >
                    {product.title}
                  </h3>
                  <p id={descId} className="text-text-muted text-sm mb-4 leading-relaxed">
                    {product.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.specs.map((spec, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-navy"
                      >
                        <Check className="w-4 h-4 text-gold flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document
                        .querySelector('#contact')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                  >
                    Request specs
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
