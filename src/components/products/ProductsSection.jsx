import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Ruler, Settings, CheckCircle } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    shortName: 'Double Folding',
    description: 'Our flagship double folding machine delivers precise bends on both sides simultaneously, dramatically increasing throughput for high-volume sheet metal operations.',
    specs: ['Max thickness: 6mm steel', 'Bending length: 3200mm', 'CNC controlled'],
    imgId: 'product-double-folding-1a2b3c',
    titleId: 'product-title-double-folding',
    descId: 'product-desc-double-folding',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    shortName: 'Double Folder',
    description: 'Compact yet powerful, the Double Folder is designed for workshops that need versatility without sacrificing floor space. Ideal for custom fabrication.',
    specs: ['Max thickness: 4mm steel', 'Bending length: 2500mm', 'Manual & hydraulic'],
    imgId: 'product-double-folder-4d5e6f',
    titleId: 'product-title-double-folder',
    descId: 'product-desc-double-folder',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    shortName: 'Sheet Metal Folder',
    description: 'A robust solution for general sheet metal bending tasks. Engineered for reliability and consistent results across a wide range of materials.',
    specs: ['Max thickness: 5mm steel', 'Bending length: 3000mm', 'Hydraulic assist'],
    imgId: 'product-sheet-folder-7g8h9i',
    titleId: 'product-title-sheet-folder',
    descId: 'product-desc-sheet-folder',
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    shortName: 'Sheet Folding Machine',
    description: 'Heavy-duty sheet metal folding with programmable back gauges and precision angle stops. Perfect for production environments requiring repeatability.',
    specs: ['Max thickness: 8mm steel', 'Bending length: 4000mm', 'Full CNC'],
    imgId: 'product-sheet-machine-j0k1l2',
    titleId: 'product-title-sheet-machine',
    descId: 'product-desc-sheet-machine',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    shortName: 'Metal Folder',
    description: 'Versatile metal folder built for demanding industrial use. Handles aluminum, steel, and stainless steel with equal precision and ease.',
    specs: ['Max thickness: 6mm steel', 'Bending length: 3200mm', 'Manual override'],
    imgId: 'product-metal-folder-m3n4o5',
    titleId: 'product-title-metal-folder',
    descId: 'product-desc-metal-folder',
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    shortName: 'Metal Folder Machine',
    description: 'The Metal Folder Machine combines power and finesse for complex multi-stage bending operations. A workhorse for any fabrication facility.',
    specs: ['Max thickness: 10mm steel', 'Bending length: 4000mm', 'Touchscreen CNC'],
    imgId: 'product-metal-machine-p6q7r8',
    titleId: 'product-title-metal-machine',
    descId: 'product-desc-metal-machine',
  },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="products" className="section-light py-20 lg:py-28">
      <div className="container-wide">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold text-sm font-medium uppercase tracking-widest">
              Our Products
            </span>
            <div className="h-px w-8 bg-brand-gold" />
          </div>
          <h2 id="products-title" className="text-brand-dark mb-4">
            Industrial Folding Equipment
          </h2>
          <p id="products-desc" className="text-brand-text max-w-2xl mx-auto">
            From compact manual folders to full CNC production lines, we engineer folding machines that deliver precision, durability, and unmatched performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-gold/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-desc] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="text-brand-dark text-lg font-semibold mb-2 group-hover:text-brand-gold transition-colors"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="text-brand-text text-sm leading-relaxed mb-4"
                >
                  {product.description}
                </p>
                <div className="space-y-2 mb-6">
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
                      <span className="text-brand-text">{spec}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-semibold text-brand-gold hover:text-brand-gold-hover transition-colors group/link"
                >
                  Request Details
                  <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
