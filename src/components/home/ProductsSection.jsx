import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    desc: 'High-capacity double folding system for complex sheet metal operations with precision control.',
    imgId: 'prod-img-dfm-8a2b3c',
    titleId: 'product-double-folding-machine-title',
    descId: 'product-double-folding-machine-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    desc: 'Compact and efficient double folder for rapid production of consistent, accurate bends.',
    imgId: 'prod-img-df-4d5e6f',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    desc: 'Versatile sheet metal folder designed for a wide range of material thicknesses and widths.',
    imgId: 'prod-img-smf-7g8h9i',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    desc: 'Industrial-grade folding machine with advanced clamping and bending capabilities.',
    imgId: 'prod-img-smfm-0j1k2l',
    titleId: 'product-sheet-metal-folding-machine-title',
    descId: 'product-sheet-metal-folding-machine-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    desc: 'Reliable metal folder for everyday fabrication tasks with easy setup and operation.',
    imgId: 'prod-img-mf-3m4n5o',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    desc: 'Heavy-duty metal folder machine built for continuous production environments.',
    imgId: 'prod-img-mfm-6p7q8r',
    titleId: 'product-metal-folder-machine-title',
    descId: 'product-metal-folder-machine-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    desc: 'Precision metal folding machine with adjustable angles and digital readout options.',
    imgId: 'prod-img-mfm2-9s0t1u',
    titleId: 'product-metal-folding-machine-title',
    descId: 'product-metal-folding-machine-desc',
  },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sheet Metal Folding Solutions
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            From compact folders to industrial-grade machines, we offer a complete range of
            sheet metal folding equipment for every application.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="mt-2 text-sm text-slate-600 leading-relaxed"
                >
                  {product.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors"
                >
                  Request Quote
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
