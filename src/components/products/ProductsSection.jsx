import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Button from '@/components/ui/button'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'High-speed dual-axis precision folding for complex sheet metal profiles.',
    imgId: 'product-double-fold-8a2b3c',
    features: ['Dual independent folding beams', 'CNC programmable sequences', 'Up to 6mm sheet capacity'],
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    subtitle: 'Versatile double-sided folding for box pans, trays, and enclosures.',
    imgId: 'product-double-folder-4d5e6f',
    features: ['Simultaneous edge folding', 'Automatic material compensation', 'Touchscreen PLC control'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'Robust straight folding for large-format sheet metal workpieces.',
    imgId: 'product-sheet-folder-7g8h9i',
    features: ['3000mm bending length', 'Hydraulic clamping system', 'Adjustable folding angle'],
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    subtitle: 'All-in-one folding solution with programmable back gauge and auto cycling.',
    imgId: 'product-sheet-machine-1j2k3l',
    features: ['Servo-electric drive', 'Back gauge automation', 'Energy-efficient operation'],
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    subtitle: 'Heavy-duty mechanical folder for structural steel and aluminum fabrication.',
    imgId: 'product-metal-folder-4m5n6o',
    features: ['Reinforced steel frame', 'Up to 8mm mild steel', 'Foot pedal operation'],
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    subtitle: 'High-torque folder with precision stops for repetitive production runs.',
    imgId: 'product-metal-machine-7p8q9r',
    features: ['Programmable stops (99 steps)', 'Rack-and-pinion parallel motion', 'Safety light curtain'],
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    subtitle: 'Premium industrial folding center with full automation and touch interface.',
    imgId: 'product-metal-folding-2s3t4u',
    features: ['Full 3D visual programming', 'Automatic tool change', 'Industry 4.0 ready'],
  },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">Our Product Range</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-4">
            Precision Folding Machinery
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            From compact metal folders to fully automated industrial folding centers — every machine is engineered for accuracy, durability, and ease of use.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[product-desc-${product.id}] [product-title-${product.id}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 id={`product-title-${product.id}`} className="text-xl font-semibold text-slate-900 mb-2">
                  {product.title}
                </h3>
                <p id={`product-desc-${product.id}`} className="text-slate-500 text-sm leading-relaxed mb-4">
                  {product.subtitle}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}