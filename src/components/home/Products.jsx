import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folder',
    title: 'Double Folding Machine',
    description: 'High-precision double folding for complex sheet metal profiles. Ideal for HVAC, roofing, and industrial fabrication.',
    specs: ['Up to 3mm steel capacity', 'CNC controlled', 'Dual bending beams'],
    imgId: 'product-double-folder-a1b2c3',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile sheet metal folding machine designed for precision bending of aluminum, steel, and stainless steel sheets.',
    specs: ['Programmable angles', 'Quick tool change', 'Servo-driven backgauge'],
    imgId: 'product-sheet-metal-folder-d4e5f6',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'metal-folder-pro',
    title: 'Metal Folder Pro',
    description: 'Our flagship metal folding machine with advanced automation features for high-volume production environments.',
    specs: ['Automated feeding', 'Touch-screen HMI', 'Multi-axis positioning'],
    imgId: 'product-metal-folder-pro-g7h8i9',
    titleId: 'product-metal-folder-pro-title',
    descId: 'product-metal-folder-pro-desc',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="py-20 lg:py-28 bg-brand-light" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-brand-accent" />
            <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
              Our Machines
            </span>
            <div className="h-px w-8 bg-brand-accent" />
          </div>
          <h2 id="products-section-title" className="text-3xl lg:text-4xl font-bold text-brand-dark-text tracking-tight">
            Precision Folding Solutions
          </h2>
          <p className="mt-4 text-brand-gray text-lg max-w-2xl mx-auto">
            Explore our range of double folding machines engineered for accuracy, speed, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-brand-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
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
              <div className="p-6 lg:p-8">
                <h3 id={product.titleId} className="text-xl font-bold text-brand-dark-text mb-3">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-brand-gray text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-brand-dark-text">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-brand-accent font-semibold text-sm hover:gap-3 transition-all duration-200"
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
