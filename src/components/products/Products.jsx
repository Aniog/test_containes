import React, { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision double folding machine for complex sheet metal bending operations. Dual-axis control ensures consistent, repeatable folds.',
    imgId: 'product-dfm-b3k9m',
    titleId: 'product-dfm-title',
    descId: 'product-dfm-desc',
    features: ['Dual-axis precision', 'CNC controlled', 'Up to 4m working length'],
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double folder designed for efficient production of box-shaped and complex profile parts with superior accuracy.',
    imgId: 'product-df-n7q2w',
    titleId: 'product-df-title',
    descId: 'product-df-desc',
    features: ['Box-shaped parts', 'Quick tool change', 'Heavy-duty frame'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Professional sheet metal folder delivering clean, precise bends for HVAC, roofing, and general fabrication applications.',
    imgId: 'product-smf-p5r8t',
    titleId: 'product-smf-title',
    descId: 'product-smf-desc',
    features: ['Clean precise bends', 'Variable speed', 'Digital angle display'],
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Advanced CNC sheet metal folding machine with automated back gauge and programmable bending sequences for high-volume production.',
    imgId: 'product-smfm-v4x6y',
    titleId: 'product-smfm-title',
    descId: 'product-smfm-desc',
    features: ['CNC automation', 'Programmable sequences', 'High-volume ready'],
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Robust metal folder built for daily workshop use. Simple operation, reliable performance, and exceptional value for metal fabrication shops.',
    imgId: 'product-mf-j2h5k',
    titleId: 'product-mf-title',
    descId: 'product-mf-desc',
    features: ['Simple operation', 'Reliable performance', 'Great value'],
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Industrial-grade metal folder machine with hydraulic clamping and beam for heavy-gauge materials and demanding production environments.',
    imgId: 'product-mfm-w9d3f',
    titleId: 'product-mfm-title',
    descId: 'product-mfm-desc',
    features: ['Hydraulic clamping', 'Heavy-gauge capable', 'Industrial grade'],
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Full-featured metal folding machine combining power and precision. Ideal for architectural metalwork, signage, and custom fabrication.',
    imgId: 'product-mfm2-q8s7g',
    titleId: 'product-mfm2-title',
    descId: 'product-mfm2-desc',
    features: ['Power & precision', 'Architectural use', 'Custom fabrication'],
  },
]

const ProductCard = ({ product, onQuote }) => (
  <div className="bg-white rounded-xl border border-surface-border overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="relative h-56 overflow-hidden bg-navy/5">
      <img
        alt={product.title}
        data-strk-img-id={product.imgId}
        data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-3 left-3">
        <span className="bg-gold/90 text-navy text-xs font-bold px-3 py-1 rounded-full">
          {product.features[0]}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 id={product.titleId} className="text-lg font-bold text-navy mb-2">
        {product.title}
      </h3>
      <p id={product.descId} className="text-text-secondary text-sm leading-relaxed mb-4">
        {product.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {product.features.map((f) => (
          <span
            key={f}
            className="text-xs font-medium text-navy/70 bg-navy/5 px-2.5 py-1 rounded-md"
          >
            {f}
          </span>
        ))}
      </div>
      <button
        onClick={onQuote}
        className="w-full flex items-center justify-center gap-2 text-gold hover:text-gold-dark font-semibold text-sm py-2.5 border border-gold/30 hover:border-gold rounded-lg transition-all duration-200 group/btn"
      >
        Request Quote
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
      </button>
    </div>
  </div>
)

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
            Our Products
          </span>
          <h2
            id="products-section-title"
            className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4"
          >
            Precision Folding Solutions
          </h2>
          <p className="text-text-secondary text-lg">
            From compact metal folders to advanced CNC folding machines, we deliver the right solution for every fabrication need.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuote={scrollToContact}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
