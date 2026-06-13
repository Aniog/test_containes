import React, { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-performance dual-axis folding system for complex metal bending operations. Delivers consistent, repeatable results across production runs.',
    features: ['Dual-axis precision', 'CNC controlled', 'Up to 3m working length'],
    imgId: 'product-dfm-b2c4e1',
    titleId: 'product-dfm-title',
    descId: 'product-dfm-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile sheet metal folding solution for workshops and production facilities. Handles a wide range of material thicknesses with ease.',
    features: ['Adjustable beam', 'Quick-change tooling', '0.5-2mm capacity'],
    imgId: 'product-smf-d3e5f2',
    titleId: 'product-smf-title',
    descId: 'product-smf-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Robust industrial folding machine built for heavy-duty applications. Engineered for reliability in demanding production environments.',
    features: ['Heavy-duty frame', 'Hydraulic operation', 'Up to 4m capacity'],
    imgId: 'product-mfm-g4h6i3',
    titleId: 'product-mfm-title',
    descId: 'product-mfm-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Compact yet powerful folder ideal for small to medium workshops. Combines precision engineering with an intuitive user interface.',
    features: ['Compact design', 'Digital readout', 'Easy maintenance'],
    imgId: 'product-mfm2-j5k7l4',
    titleId: 'product-mfm2-title',
    descId: 'product-mfm2-desc',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-warmwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Our Products</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mt-3 mb-4">
            Precision Folding Solutions
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <p className="text-charcoal/70 max-w-2xl mx-auto text-base leading-relaxed">
            From double folding machines to versatile sheet metal folders, our product line covers every metalworking need with uncompromising quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm border border-warmborder overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/5 transition-colors" />
              </div>

              <div className="p-6 md:p-8">
                <h3
                  id={product.titleId}
                  className="font-display text-xl font-semibold text-navy mb-3"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-charcoal/70 text-sm leading-relaxed mb-5"
                >
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-lightgold text-gold text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-medium text-sm transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
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
