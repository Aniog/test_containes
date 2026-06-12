import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folder',
    title: 'Double Folding Machine',
    description: 'Our flagship double folder delivers precise bends on sheet metal with automated dual-action folding for maximum productivity.',
    specs: ['Up to 3200mm width', 'Mild steel up to 2mm', 'CNC controlled'],
    imgId: 'prod-double-folder-3f8a',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile sheet metal folding machine designed for complex profiles and high-volume production runs.',
    specs: ['Up to 4000mm width', 'Stainless up to 1.5mm', 'Servo-electric drive'],
    imgId: 'prod-sheet-metal-folder-7b2c',
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
  },
  {
    id: 'metal-folder-pro',
    title: 'Metal Folder Pro',
    description: 'Heavy-duty metal folding machine built for demanding industrial environments with continuous operation capability.',
    specs: ['Up to 2500mm width', 'Aluminum up to 3mm', 'Hydraulic clamping'],
    imgId: 'prod-metal-folder-pro-9d4e',
    titleId: 'prod-metal-folder-pro-title',
    descId: 'prod-metal-folder-pro-desc',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="py-20 md:py-28 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#C8A45C' }}>
            Our Machines
          </p>
          <h2
            id="products-section-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: '#0F1B2D' }}
          >
            Precision Folding Solutions
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Engineered for accuracy and built to last. Explore our range of
            industrial-grade sheet metal folding machines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: '#FAF8F5' }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
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
              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold mb-2"
                  style={{ color: '#0F1B2D' }}
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-gray-600 text-sm leading-relaxed mb-4"
                >
                  {product.description}
                </p>
                <ul className="space-y-1 mb-5">
                  {product.specs.map((spec) => (
                    <li key={spec} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C8A45C' }} />
                      {spec}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 font-semibold text-sm hover:opacity-70 transition-opacity"
                  style={{ color: '#C8A45C' }}
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
