import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Settings, Gauge, RotateCw } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Heavy-Duty Dual Fold System',
    description: 'Our flagship double folding machine delivers simultaneous dual-direction folds for complex sheet metal profiles. Engineered for high-volume production environments where precision and speed are critical.',
    specs: ['Max Sheet Width: 3200mm', 'Material Thickness: 0.5 - 4.0mm', 'Fold Angle: 0° - 135°', 'CNC Controlled'],
    imgId: 'product-double-fold-a1b2',
    nameId: 'product-name-double-folding-machine',
    descId: 'product-desc-double-folding-machine',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile Precision Bending',
    description: 'A versatile sheet metal folding solution with adjustable clamping pressure and variable-speed bending beam. Perfect for workshops handling diverse materials and fold requirements.',
    specs: ['Max Sheet Width: 2500mm', 'Material Thickness: 0.4 - 3.0mm', 'Fold Angle: 0° - 135°', 'Manual / Semi-Auto'],
    imgId: 'product-sheet-folder-c3d4',
    nameId: 'product-name-sheet-metal-folder',
    descId: 'product-desc-sheet-metal-folder',
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    tagline: 'Industrial-Grade Reliability',
    description: 'Built for continuous operation in demanding industrial settings. This metal folder machine handles steel, aluminum, and stainless steel with consistent accuracy shift after shift.',
    specs: ['Max Sheet Width: 3000mm', 'Material Thickness: 0.6 - 5.0mm', 'Fold Angle: 0° - 145°', 'Hydraulic Clamping'],
    imgId: 'product-metal-folder-e5f6',
    nameId: 'product-name-metal-folder-machine',
    descId: 'product-desc-metal-folder-machine',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'Compact Powerhouse',
    description: 'A compact yet powerful metal folding machine ideal for small to medium workshops. Delivers professional-grade folding capability without requiring a large footprint.',
    specs: ['Max Sheet Width: 2000mm', 'Material Thickness: 0.5 - 2.5mm', 'Fold Angle: 0° - 135°', 'Manual Operation'],
    imgId: 'product-metal-fold-g7h8',
    nameId: 'product-name-metal-folding-machine',
    descId: 'product-desc-metal-folding-machine',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Dual-Action Efficiency',
    description: 'Our double folder combines two folding actions in one seamless operation. Dramatically reduces cycle times for parts requiring folds on opposing edges.',
    specs: ['Max Sheet Width: 2800mm', 'Material Thickness: 0.5 - 3.5mm', 'Fold Angle: 0° - 135°', 'CNC Controlled'],
    imgId: 'product-double-folder-i9j0',
    nameId: 'product-name-double-folder',
    descId: 'product-desc-double-folder',
  },
]

const specIcons = [FileText, Settings, Gauge, RotateCw]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Our <span className="text-accent-500">Machines</span>
            </h1>
            <p className="text-brand-300 text-lg leading-relaxed">
              Every ARTITECT machine is engineered with precision, built with the finest materials, and tested rigorously to ensure it meets the demands of modern sheet metal fabrication.
            </p>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div
                  key={product.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
                >
                  <div className="lg:w-1/2 w-full">
                    <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-brand-100 to-brand-50 border border-slate-200 flex items-center justify-center">
                      <div
                        data-strk-bg-id={product.imgId}
                        data-strk-bg={`[${product.descId}] [${product.nameId}] sheet metal folding machine industrial`}
                        data-strk-bg-ratio="16x9"
                        data-strk-bg-width="800"
                        className="w-full h-full bg-brand-200 flex items-center justify-center"
                      >
                        <span className="text-brand-400 text-sm font-medium">Product Image</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2 w-full">
                    <p className="text-accent-500 text-sm font-semibold uppercase tracking-wider mb-2">
                      {product.tagline}
                    </p>
                    <h2
                      id={product.nameId}
                      className="text-2xl md:text-3xl font-bold text-brand-900 tracking-tight mb-4"
                    >
                      {product.name}
                    </h2>
                    <p
                      id={product.descId}
                      className="text-brand-600 leading-relaxed mb-6"
                    >
                      {product.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {product.specs.map((spec, i) => {
                        const Icon = specIcons[i]
                        return (
                          <div key={spec} className="flex items-center gap-2 text-sm text-brand-700">
                            <Icon className="w-4 h-4 text-accent-500 shrink-0" />
                            <span>{spec}</span>
                          </div>
                        )
                      })}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-accent-500 hover:bg-accent-600 transition-colors shadow-sm"
                    >
                      Request a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 tracking-tight mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-brand-600 text-lg max-w-2xl mx-auto mb-8">
            Our engineering team can customize any machine to meet your specific production requirements. Tell us what you need.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/25"
          >
            Contact Engineering
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
