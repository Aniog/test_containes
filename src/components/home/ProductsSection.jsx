import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Gauge, Wrench, Shield, Zap } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-capacity double folding machine for complex bends with unparalleled accuracy and repeatability.',
    icon: Gauge,
    imgId: 'product-img-double-fold-1a2b3c',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Compact double folder designed for workshops needing versatile bending capabilities in limited space.',
    icon: Wrench,
    imgId: 'product-img-double-folder-4d5e6f',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Robust sheet metal folder built for daily industrial use with precision-controlled bending angles.',
    icon: Shield,
    imgId: 'product-img-sheet-folder-7g8h9i',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Fully automated sheet metal folding machine with CNC controls for mass production environments.',
    icon: Zap,
    imgId: 'product-img-sheet-fold-machine-0j1k2l',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Heavy-duty metal folder capable of processing thick gauge materials with consistent quality output.',
    icon: Gauge,
    imgId: 'product-img-metal-folder-3m4n5o',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Versatile metal folder machine featuring quick-change tooling and digital readout displays.',
    icon: Wrench,
    imgId: 'product-img-metal-folder-machine-6p7q8r',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Advanced metal folding machine with programmable backgauge and hydraulic drive systems.',
    icon: Shield,
    imgId: 'product-img-metal-fold-machine-9s0t1u',
  },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4">
            Sheet Metal Folding Machinery
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Discover our complete range of precision folding equipment designed for
            workshops and manufacturing facilities of every scale.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const titleId = `product-title-${product.id}`
            const descId = `product-desc-${product.id}`
            return (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Product image */}
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <img
                    alt={product.title}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-navy/90 rounded-lg flex items-center justify-center">
                      <product.icon size={20} className="text-gold" />
                    </div>
                  </div>
                </div>

                {/* Product info */}
                <div className="p-6">
                  <h3
                    id={titleId}
                    className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors"
                  >
                    {product.title}
                  </h3>
                  <p id={descId} className="text-sm text-muted leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold-hover transition-colors"
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-md font-semibold hover:bg-navy-light transition-colors"
          >
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
