import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folder',
    title: 'Double Folding Machine',
    description: 'High-precision double folding for complex sheet metal profiles. Ideal for HVAC, roofing, and architectural applications.',
    specs: ['Up to 3mm steel capacity', 'CNC controlled', 'Dual-axis folding'],
    imgId: 'product-double-folder-3f8a1b',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile sheet metal folding machine designed for high-volume production with exceptional accuracy and repeatability.',
    specs: ['Programmable angles', 'Quick tool change', 'Auto back-gauge'],
    imgId: 'product-sheet-metal-folder-7c2d4e',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'metal-folder-pro',
    title: 'Metal Folder Pro Series',
    description: 'Our flagship metal folding machine combining power and precision for demanding industrial environments.',
    specs: ['Heavy-duty frame', 'Touch-screen HMI', 'Servo-driven'],
    imgId: 'product-metal-folder-pro-9e5f2a',
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
    <section id="products" className="py-20 lg:py-28 bg-surface-alt" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Our Machines
          </p>
          <h2 id="products-section-title" className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text tracking-tight mb-4">
            Precision Folding Solutions
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Engineered for accuracy, built for durability. Discover our range of professional sheet metal folding machines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-alt">
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
                <h3 id={product.titleId} className="text-xl font-bold text-text mb-3">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-text-secondary text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all no-underline"
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
