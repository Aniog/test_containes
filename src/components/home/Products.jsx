import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    subtitle: 'Premium Series',
    description: 'Our flagship double folding machine delivers unmatched precision for high-volume production environments. Dual-action folding mechanism ensures consistent, flawless bends every time.',
    features: ['Dual-action folding', 'CNC control system', 'Auto-alignment'],
    imgId: 'product-double-folding-7c2d4a',
    titleId: 'product-double-folding-title',
    descId: 'product-double-folding-desc',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    subtitle: 'Professional Series',
    description: 'Compact yet powerful, the Double Folder is designed for workshops that need professional-grade folding capability without sacrificing floor space. Ideal for both small and medium production runs.',
    features: ['Compact footprint', 'Quick-change tooling', 'Digital readout'],
    imgId: 'product-double-folder-9e3f1b',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    subtitle: 'Industrial Series',
    description: 'Purpose-built for heavy sheet metal work, this folder handles thicker gauges with ease. Reinforced construction and powerful hydraulics make light work of demanding materials.',
    features: ['Heavy-gauge capacity', 'Reinforced frame', 'Hydraulic drive'],
    imgId: 'product-sheet-folder-4b8a6d',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    subtitle: 'Enterprise Series',
    description: 'The complete solution for large-scale sheet metal folding operations. Advanced servo-driven technology delivers micron-level accuracy at production speed.',
    features: ['Servo-driven', 'Multi-axis control', 'Auto-stacking'],
    imgId: 'product-sheet-folding-2f7c9e',
    titleId: 'product-sheet-folding-title',
    descId: 'product-sheet-folding-desc',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    subtitle: 'Workshop Series',
    description: 'The versatile workhorse for any metal fabrication workshop. Handles a wide range of materials and thicknesses with intuitive controls and reliable performance.',
    features: ['Multi-material', 'Intuitive controls', 'Low maintenance'],
    imgId: 'product-metal-folder-6a1d8f',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    subtitle: 'Performance Series',
    description: 'Our most advanced metal folding machine combines cutting-edge technology with operator-friendly design. Features intelligent bend correction and real-time monitoring.',
    features: ['Smart bend correction', 'Real-time monitoring', 'Energy efficient'],
    imgId: 'product-metal-folding-3c5e7b',
    titleId: 'product-metal-folding-title',
    descId: 'product-metal-folding-desc',
  },
]

function ProductCard({ product, index }) {
  const isEven = index % 2 === 0

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
      {/* Image */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="relative overflow-hidden rounded-lg bg-light-gray">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] sheet metal folding machine industrial`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        {/* Series badge */}
        <div className="absolute top-4 left-4 bg-amber text-charcoal text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">
          {product.subtitle}
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2">
        <span className="text-amber text-xs font-semibold tracking-[0.15em] uppercase">
          Product {String(index + 1).padStart(2, '0')}
        </span>
        <h3 id={product.titleId} className="text-charcoal font-bold text-2xl sm:text-3xl mt-2 mb-4">
          {product.name}
        </h3>
        <p id={product.descId} className="text-slate text-base leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Features */}
        <ul className="flex flex-col gap-3 mb-8">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-amber/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-amber" />
              </div>
              <span className="text-steel text-sm font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="inline-flex items-center gap-2 text-charcoal font-semibold text-sm group/btn hover:text-amber transition-colors"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  )
}

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="bg-cream py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-amber text-xs font-semibold tracking-[0.15em] uppercase">
            Our Product Range
          </span>
          <h2 className="text-charcoal font-bold text-3xl sm:text-4xl mt-3 mb-5">
            Metal Folding Machines
          </h2>
          <p className="text-slate text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to enterprise-grade folding systems, every machine is built with the same uncompromising commitment to quality and precision.
          </p>
        </div>

        {/* Products List */}
        <div className="flex flex-col gap-20 lg:gap-28">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
