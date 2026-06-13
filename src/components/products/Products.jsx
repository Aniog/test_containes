import React, { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-performance dual-axis folding system for complex sheet metal bending. Delivers unmatched precision and repeatability for demanding production environments.',
    imgId: 'prod-dfm-c1a2b3',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double-folder design handles a wide range of material thicknesses. Ideal for medium to heavy gauge applications with consistent fold quality.',
    imgId: 'prod-df-d4e5f6',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Precision sheet metal folder for clean, accurate bends. Suitable for HVAC, roofing, and general fabrication with easy-to-use controls.',
    imgId: 'prod-smf-g7h8i9',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Automated folding machine with CNC control for high-volume production. Reduces setup time and ensures consistent results across long production runs.',
    imgId: 'prod-smfm-j1k2l3',
    titleId: 'prod-smfm-title',
    descId: 'prod-smfm-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Robust metal folder built for daily industrial use. Combines heavy-duty construction with intuitive operation for maximum productivity.',
    imgId: 'prod-mf-m4n5o6',
    titleId: 'prod-mf-title',
    descId: 'prod-mf-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Full-featured metal folding machine with advanced beam guidance. Delivers superior fold accuracy and surface finish for premium fabrication results.',
    imgId: 'prod-mfm-p7q8r9',
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
    <section id="products" ref={containerRef} className="py-20 md:py-28 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2
            id="products-title"
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-navy tracking-tight"
          >
            Metal Folding Solutions
          </h2>
          <div className="mt-4 h-1 w-16 bg-gold mx-auto rounded-full" />
          <p
            id="products-subtitle"
            className="mt-6 text-slate-600 text-lg leading-relaxed"
          >
            From compact metal folders to fully automated folding systems, we offer
            a comprehensive range of precision-engineered machines for every application.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-slate-100 overflow-hidden transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-navy group-hover:text-steel transition-colors"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="mt-3 text-slate-600 text-sm leading-relaxed"
                >
                  {product.description}
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="mt-4 inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
