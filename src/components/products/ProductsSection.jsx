import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from './ProductCard'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description:
      'A high-capacity solution for complex double folds in sheet metal, delivering consistent, repeatable bends with minimal setup time.',
    specs: ['CNC programmable back gauge', 'Up to 4 mm mild steel', 'Foot pedal control'],
    imgId: 'product-double-folding-3c4d5e',
    titleId: 'product-title-double-folding',
    descId: 'product-desc-double-folding',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description:
      'Compact yet powerful double folder designed for small-to-medium fabrication shops needing speed and accuracy.',
    specs: ['Lightweight frame', 'Quick blade change', 'Precision angle stops'],
    imgId: 'product-double-folder-7a8b9c',
    titleId: 'product-title-double-folder',
    descId: 'product-desc-double-folder',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description:
      'Versatile manual and hydraulic sheet metal folders built for clean, crisp bends across a wide range of materials.',
    specs: ['Adjustable bending angle', 'Hardened steel blades', 'Safety guard included'],
    imgId: 'product-sheet-metal-folder-1d2e3f',
    titleId: 'product-title-sheet-metal-folder',
    descId: 'product-desc-sheet-metal-folder',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description:
      'Industrial-grade folding machine engineered for high-volume production and tight tolerances in sheet metal work.',
    specs: ['Hydraulic drive system', 'Touch-screen controls', 'Automatic crowning'],
    imgId: 'product-sheet-metal-folding-9g0h1i',
    titleId: 'product-title-sheet-metal-folding',
    descId: 'product-desc-sheet-metal-folding',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description:
      'A durable metal folder for general fabrication tasks, offering reliable performance and easy operator controls.',
    specs: ['Heavy-duty construction', 'Manual or powered options', 'Wide working length'],
    imgId: 'product-metal-folder-2j3k4l',
    titleId: 'product-title-metal-folder',
    descId: 'product-desc-metal-folder',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description:
      'Robust metal folder machine combining rigid frame design with smooth bending action for long service life.',
    specs: ['Rugged steel frame', 'Adjustable counterweights', 'Low maintenance'],
    imgId: 'product-metal-folder-machine-5m6n7o',
    titleId: 'product-title-metal-folder-machine',
    descId: 'product-desc-metal-folder-machine',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description:
      'Advanced metal folding machine with intelligent controls for complex profiles and repeatable production runs.',
    specs: ['CNC axis control', 'Real-time angle monitoring', 'Remote diagnostics'],
    imgId: 'product-metal-folding-8p9q0r',
    titleId: 'product-title-metal-folding',
    descId: 'product-desc-metal-folding',
  },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="products" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">
            Our Products
          </span>
          <h2 id="products-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Precision Folding Equipment
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From compact folders to full-scale folding machines, every ARTITECT
            product is built to deliver clean bends, dependable uptime, and
            long-term value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
