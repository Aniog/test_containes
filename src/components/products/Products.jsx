import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'
import { Settings2, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision double folding machine for complex sheet metal bending operations with dual-axis control.',
    features: ['Dual-axis precision', 'Heavy-duty construction', 'Digital angle control'],
    imgId: 'product-double-folding-8f2a9c',
    titleId: 'product-double-folding-title',
    descId: 'product-double-folding-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double folder designed for efficient production lines with consistent fold quality.',
    features: ['Fast cycle times', 'Adjustable backgauge', 'Easy tool changeover'],
    imgId: 'product-double-folder-8f2a9d',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Professional-grade sheet metal folder for precision bending of various materials and thicknesses.',
    features: ['Multi-material compatible', 'Precision clamping', 'Safety interlocks'],
    imgId: 'product-sheet-metal-folder-8f2a9e',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Advanced folding machine with CNC control for automated, repeatable sheet metal fabrication.',
    features: ['CNC control system', 'Programmable sequences', 'Touchscreen interface'],
    imgId: 'product-folding-machine-8f2a9f',
    titleId: 'product-folding-machine-title',
    descId: 'product-folding-machine-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Robust metal folder built for industrial environments with heavy-duty components and long service life.',
    features: ['Industrial grade', 'Low maintenance', 'Extended warranty'],
    imgId: 'product-metal-folder-8f2a0a',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Complete metal folder machine solution with integrated safety features and ergonomic design.',
    features: ['Integrated safety', 'Ergonomic controls', 'Energy efficient'],
    imgId: 'product-metal-folder-machine-8f2a0b',
    titleId: 'product-metal-folder-machine-title',
    descId: 'product-metal-folder-machine-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Premium metal folding machine offering superior accuracy for demanding industrial applications.',
    features: ['Superior accuracy', 'Heavy-duty frame', 'Quick setup'],
    imgId: 'product-metal-folding-machine-8f2a0c',
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
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
            <Settings2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Products</span>
          </div>
          <h2 id="products-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Precision Folding Machinery
          </h2>
          <p id="products-subtitle" className="text-lg text-text-secondary leading-relaxed">
            Explore our comprehensive range of sheet metal folding solutions, engineered for precision, durability, and performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 id={product.titleId} className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-text-secondary mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
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
