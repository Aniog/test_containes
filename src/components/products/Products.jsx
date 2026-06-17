import React, { useEffect, useRef } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-performance double folding machine designed for complex bending operations with dual-axis precision control and automated back gauge.',
    features: ['Dual-axis CNC control', 'Automated back gauge', 'High-speed operation'],
    imgId: 'prod-dfm-b2c4d6',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double folder for efficient sheet metal bending with synchronized upper and lower beam movement for consistent results.',
    features: ['Synchronized beam movement', 'Variable speed control', 'Heavy-duty frame'],
    imgId: 'prod-df-a3e5f7',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Precision sheet metal folder ideal for HVAC, roofing, and general fabrication with quick-change tooling and digital angle display.',
    features: ['Quick-change tooling', 'Digital angle display', 'Compact design'],
    imgId: 'prod-smf-c8d2e4',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Full-featured sheet metal folding machine with CNC programmable bending sequences for complex multi-bend parts.',
    features: ['CNC programmable sequences', 'Multi-bend capability', 'Touch screen interface'],
    imgId: 'prod-smfm-d9e3f5',
    titleId: 'prod-smfm-title',
    descId: 'prod-smfm-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Robust metal folder for light to medium gauge materials with manual or semi-automatic operation modes for flexible production.',
    features: ['Manual & semi-auto modes', 'Light to medium gauge', 'Flexible production'],
    imgId: 'prod-mf-e1f4a6',
    titleId: 'prod-mf-title',
    descId: 'prod-mf-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Industrial-grade metal folder machine built for continuous production with heavy-duty construction and advanced safety systems.',
    features: ['Heavy-duty construction', 'Advanced safety systems', 'Continuous production'],
    imgId: 'prod-mfm-f2a5b7',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Premium metal folding machine with servo-driven technology for maximum precision and energy efficiency in demanding applications.',
    features: ['Servo-driven technology', 'Energy efficient', 'Maximum precision'],
    imgId: 'prod-mfm2-a8b9c1',
    titleId: 'prod-mfm2-title',
    descId: 'prod-mfm2-desc',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-500 mt-3 mb-5">
            Metal Folding Solutions
          </h2>
          <p className="text-charcoal-300 text-lg max-w-2xl mx-auto">
            From double folding machines to precision metal folders, we offer a comprehensive 
            range of equipment engineered for excellence in sheet metal fabrication.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-400 text-navy-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {product.id === 'metal-folding-machine' ? 'Premium' : 'Professional'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-charcoal-500 mb-3 group-hover:text-steel-500 transition-colors"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-charcoal-300 text-sm leading-relaxed mb-4"
                >
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-charcoal-400">
                      <Check className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-steel-500 hover:text-steel-600 font-semibold text-sm transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
