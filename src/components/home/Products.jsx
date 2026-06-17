import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-performance double folding machines designed for complex bending operations with dual-axis precision control.',
    imgId: 'product-dfm-b3k7m2',
    titleId: 'product-dfm-title',
    descId: 'product-dfm-desc',
    specs: ['Dual-axis control', '0.1mm precision', 'Auto tool change'],
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double folder systems for simultaneous multi-angle folding, maximizing production throughput.',
    imgId: 'product-df-n8p4q1',
    titleId: 'product-df-title',
    descId: 'product-df-desc',
    specs: ['Simultaneous folding', 'High throughput', 'CNC controlled'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Precision sheet metal folders delivering clean, accurate bends for light to medium gauge materials.',
    imgId: 'product-smf-r5t9w3',
    titleId: 'product-smf-title',
    descId: 'product-smf-desc',
    specs: ['Clean bends', 'Light-medium gauge', 'Digital readout'],
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Full-size sheet metal folding machines with automated backgauges and programmable bending sequences.',
    imgId: 'product-smfm-v6x2y4',
    titleId: 'product-smfm-title',
    descId: 'product-smfm-desc',
    specs: ['Automated backgauge', 'Programmable sequences', 'Heavy duty'],
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Compact metal folders ideal for workshops and job shops requiring reliable, consistent folding results.',
    imgId: 'product-mf-j8k5l6',
    titleId: 'product-mf-title',
    descId: 'product-mf-desc',
    specs: ['Compact design', 'Consistent results', 'Easy operation'],
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Industrial-grade metal folder machines built for continuous operation in demanding manufacturing environments.',
    imgId: 'product-mfm-h3n7p9',
    titleId: 'product-mfm-title',
    descId: 'product-mfm-desc',
    specs: ['Continuous operation', 'Industrial grade', 'Low maintenance'],
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Advanced metal folding machines with servo-driven technology for superior accuracy and energy efficiency.',
    imgId: 'product-mfld-q2w8e5',
    titleId: 'product-mfld-title',
    descId: 'product-mfld-desc',
    specs: ['Servo-driven', 'Energy efficient', 'Superior accuracy'],
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-navy-medium">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">Our Products</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Precision Folding <span className="text-gold">Solutions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From compact metal folders to full-size double folding machines, we deliver the right equipment for every application.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-navy-dark border border-navy-light/30 rounded-lg overflow-hidden hover:border-gold/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="text-white font-bold text-lg mb-2 group-hover:text-gold transition-colors duration-200"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-gray-400 text-sm leading-relaxed mb-4"
                >
                  {product.description}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs font-medium text-gold/80 bg-gold/10 px-2.5 py-1 rounded"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-1.5 text-gold text-sm font-medium hover:gap-3 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
