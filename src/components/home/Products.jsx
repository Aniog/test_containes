import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding',
    title: 'Double Folding Machine',
    description: 'Advanced dual-action folding system for complex bends and high-volume production runs.',
    specs: ['Up to 3200mm width', 'CNC controlled', '±0.1mm accuracy'],
    imgId: 'product-double-folding-a1b2c3',
    titleId: 'product-double-folding-title',
    descId: 'product-double-folding-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile sheet metal folder designed for precision bending of various metal thicknesses.',
    specs: ['0.5–6mm thickness', 'Quick tool change', 'Digital angle display'],
    imgId: 'product-sheet-metal-folder-d4e5f6',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Heavy-duty metal folding machine built for industrial-scale fabrication and continuous operation.',
    specs: ['Hydraulic drive', 'Auto back-gauge', 'Touch-screen HMI'],
    imgId: 'product-metal-folding-machine-g7h8i9',
    titleId: 'product-metal-folding-machine-title',
    descId: 'product-metal-folding-machine-desc',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-amber font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 id="products-section-title" className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight mt-3">
            Precision Folding Solutions
          </h2>
          <p id="products-section-subtitle" className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
            Engineered for accuracy and built for durability — our machines deliver consistent results across every production run.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-100"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 id={product.titleId} className="text-xl font-bold text-navy-900 mb-3">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-slate-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="w-1.5 h-1.5 bg-brand-amber rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-brand-amber hover:text-brand-amber-dark font-semibold text-sm transition-colors"
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
