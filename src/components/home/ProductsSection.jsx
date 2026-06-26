import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Settings2, ArrowRight, Shield, Gauge, Cpu } from 'lucide-react'

const products = [
  {
    name: 'Double Folding Machine',
    tagline: 'Two-in-one folding precision',
    description: 'Advanced double folding technology for simultaneous edge forming, doubling productivity while maintaining micron-level accuracy.',
    icon: Settings2,
    features: ['Dual folding beams', 'CNC controlled', '0.01mm accuracy'],
  },
  {
    name: 'Double Folder',
    tagline: 'Symmetrical folding excellence',
    description: 'Engineered for parallel folding operations, our double folder delivers consistent results across high-volume production runs.',
    icon: Cpu,
    features: ['Parallel operation', 'Auto calibration', 'Touchscreen HMI'],
  },
  {
    name: 'Sheet Metal Folder',
    tagline: 'Versatile sheet forming',
    description: 'Heavy-duty sheet metal folder designed for complex bends and folds across a wide range of material thicknesses and grades.',
    icon: Shield,
    features: ['Up to 6mm capacity', 'Multi-stage bending', 'Tool-less setup'],
  },
  {
    name: 'Sheet Metal Folding Machine',
    tagline: 'Automated folding workflow',
    description: 'Fully integrated folding system with programmable backgauges and automated material handling for streamlined production.',
    icon: Gauge,
    features: ['Programmable backgauge', 'Auto material handling', 'Production analytics'],
  },
  {
    name: 'Metal Folder',
    tagline: 'Built for heavy industry',
    description: 'Robust metal folder built to handle demanding industrial applications with exceptional rigidity and long-term reliability.',
    icon: Shield,
    features: ['Rigid steel frame', 'High torque drive', 'Industrial grade'],
  },
  {
    name: 'Metal Folding Machine',
    tagline: 'Next-gen metal forming',
    description: 'State-of-the-art metal folding machine featuring servo-electric technology for energy-efficient, high-speed precision bending.',
    icon: Cpu,
    features: ['Servo-electric drive', 'Energy efficient', 'High speed cycles'],
  },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-24 md:py-32 bg-surface-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-accent font-semibold text-sm tracking-widest uppercase">Our Product Range</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 mb-6">
            Precision Machinery for Every Application
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            From compact sheet metal folders to industrial-grade double folding systems, we offer a complete range of metal forming solutions tailored to your production needs.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            const productId = `product-${index}`
            const titleId = `${productId}-title`
            const descId = `${productId}-desc`

            return (
              <article
                key={product.name}
                className="group bg-white rounded-xl border border-border-subtle overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Product Image */}
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <img
                    alt={product.name}
                    data-strk-img-id={`img-${productId}`}
                    data-strk-img={`[${descId}] [${titleId}] [products-section-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-brand-accent/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      <Icon className="w-3.5 h-3.5" />
                      New
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 id={titleId} className="text-xl font-bold text-text-primary mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-brand-accent font-semibold mb-3">
                    {product.tagline}
                  </p>
                  <p id={descId} className="text-text-secondary text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-surface-bg text-text-secondary px-2.5 py-1 rounded-md font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-brand-dark font-semibold text-sm hover:text-brand-light transition-colors group/link"
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}