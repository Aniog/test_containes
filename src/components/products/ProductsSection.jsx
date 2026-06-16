import { useEffect, useRef } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    subtitle: 'DF-Series',
    description: 'Our flagship double folding machine delivers simultaneous dual-fold capability with sub-millimeter precision. Ideal for high-volume production environments requiring consistent, repeatable results.',
    features: ['Dual-fold simultaneous operation', 'CNC-controlled precision', 'Auto-calibration system', 'High-speed production'],
    badge: 'Best Seller',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    subtitle: 'SF-Series',
    description: 'Purpose-built for sheet metal applications, this folder handles everything from thin gauge aluminum to heavy-gauge steel with exceptional accuracy and minimal material deformation.',
    features: ['Wide gauge range capability', 'Anti-mark technology', 'Quick-change tooling', 'Ergonomic operation'],
    badge: 'Versatile',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    subtitle: 'MF-Series',
    description: 'The all-purpose metal folding machine combines robust construction with intelligent controls. Perfect for workshops and fabrication shops that demand versatility and reliability.',
    features: ['Heavy-duty frame design', 'Digital angle readout', 'Programmable sequences', 'Low maintenance'],
    badge: 'Popular',
  },
]

const ProductsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-500 font-sans font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-brand-950">
            Precision Engineering for Every Application
          </h2>
          <p className="mt-5 text-brand-500 text-lg leading-relaxed">
            From double folding machines to specialized sheet metal folders, every ARTITECT machine 
            is built to exceed the demands of modern metal fabrication.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="group relative bg-brand-50 rounded-sm overflow-hidden border border-brand-100 hover:border-accent-200 hover:shadow-2xl hover:shadow-brand-200/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-brand-100">
                <img
                  data-strk-img-id={`product-img-${product.id}-b${index}c3d4`}
                  data-strk-img={`[${product.id}-title] [${product.id}-subtitle] metal folding machine industrial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/30 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-accent-500 text-white text-xs font-bold uppercase tracking-wider rounded-sm">
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">
                <span className="text-accent-500 text-xs font-semibold uppercase tracking-wider">
                  {product.subtitle}
                </span>
                <h3
                  id={`${product.id}-title`}
                  className="mt-2 font-display text-2xl font-bold text-brand-950"
                >
                  {product.name}
                </h3>
                <p
                  id={`${product.id}-subtitle`}
                  className="mt-3 text-brand-500 text-sm leading-relaxed"
                >
                  {product.description}
                </p>

                <ul className="mt-5 flex flex-col gap-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-brand-700">
                      <Check size={14} className="text-accent-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold text-sm transition-colors group/link"
                >
                  Learn More
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-brand-500 mb-4">Need a custom metal folding solution?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-950 hover:bg-brand-900 text-white font-semibold rounded-sm transition-all hover:shadow-xl"
          >
            Contact Our Engineering Team
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
