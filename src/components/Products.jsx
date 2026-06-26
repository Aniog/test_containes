import { useEffect, useRef } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    title: 'Double Folding Machine',
    tagline: 'Dual-function precision for high-volume production',
    imgId: 'product-double-folding-a1b2c3',
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
    features: ['Simultaneous dual-edge folding', 'Up to 12 m/min folding speed', 'Servo-electric precision control'],
  },
  {
    title: 'Double Folder',
    tagline: 'Symmetrical folding with unmatched repeatability',
    imgId: 'product-double-folder-d4e5f6',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
    features: ['Parallel folding arms', 'Digital angle presets', 'Auto material thickness compensation'],
  },
  {
    title: 'Sheet Metal Folder',
    tagline: 'The workhorse of modern fabrication shops',
    imgId: 'product-sheet-folder-g7h8i9',
    titleId: 'prod-sheet-folder-title',
    descId: 'prod-sheet-folder-desc',
    features: ['Folds up to 3mm sheet steel', 'Wide clamping beam design', 'Touchscreen CNC control'],
  },
  {
    title: 'Sheet Metal Folding Machine',
    tagline: 'Versatile bending for complex geometries',
    imgId: 'product-sheet-folding-j0k1l2',
    titleId: 'prod-sheet-folding-title',
    descId: 'prod-sheet-folding-desc',
    features: ['Multi-axis back gauge', 'Programmable bend sequences', 'Quick-release tooling system'],
  },
  {
    title: 'Metal Folder',
    tagline: 'Robust construction for heavy-duty forming',
    imgId: 'product-metal-folder-m3n4o5',
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
    features: ['Heavy-duty steel frame', 'Up to 6mm capacity', 'Hydraulic clamping system'],
  },
  {
    title: 'Metal Folder Machine',
    tagline: 'Automated precision for production lines',
    imgId: 'product-metal-folder-machine-p6q7r8',
    titleId: 'prod-metal-folder-machine-title',
    descId: 'prod-metal-folder-machine-desc',
    features: ['Fully programmable cycles', 'Integrated safety light curtain', 'Remote diagnostics & support'],
  },
  {
    title: 'Metal Folding Machine',
    tagline: 'The ultimate solution for industrial metal forming',
    imgId: 'product-metal-folding-s9t0u1',
    titleId: 'prod-metal-folding-title',
    descId: 'prod-metal-folding-desc',
    features: ['High-torque servo drive', 'Energy-saving Eco Mode', 'Industry 4.0 ready interface'],
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs font-medium tracking-[0.2em] uppercase">
            Our Product Range
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mt-4 mb-4 tracking-tight">
            Precision Folding Machinery
          </h2>
          <p className="text-brand-text-secondary text-lg max-w-2xl mx-auto">
            From compact folders to fully automated production systems, each machine
            is engineered to deliver exceptional accuracy and reliability.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <article
              key={product.imgId}
              className="group bg-white border border-brand-border rounded-sm overflow-hidden hover:shadow-md transition-all duration-300"
            >
              {/* Product image placeholder */}
              <div className="relative h-52 md:h-60 bg-brand-bg-alt overflow-hidden">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
              </div>

              {/* Product info */}
              <div className="p-6 md:p-8">
                <h3 id={product.titleId} className="text-xl font-bold text-brand-dark mb-2">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-brand-text-secondary text-sm mb-4 leading-relaxed">
                  {product.tagline}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-brand-text-secondary">
                      <Check className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-brand-gold font-medium text-sm hover:text-brand-gold-light transition-colors group/link"
                >
                  Inquire Now
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}