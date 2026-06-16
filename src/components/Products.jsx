import { useEffect, useRef } from 'react'
import { Settings, Gauge, Layers, Shield } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding',
    title: 'Double Folding Machine',
    description: 'Advanced dual-folding capability for complex sheet metal configurations with precision control.',
    features: ['Dual-fold technology', 'Precision control', 'Heavy-duty construction'],
    imageId: 'product-double-folding',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile folding solution for various sheet metal thicknesses with consistent, accurate results.',
    features: ['Multi-thickness capability', 'Consistent accuracy', 'Easy operation'],
    imageId: 'product-sheet-folder',
  },
  {
    id: 'metal-folding',
    title: 'Metal Folding Machine',
    description: 'Industrial-grade folding machine designed for high-volume production environments.',
    features: ['High-volume production', 'Industrial grade', 'Automated controls'],
    imageId: 'product-metal-folding',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section id="products" className="py-20 bg-gray-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engineered for precision and built to last. Discover our range of professional sheet metal folding solutions.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  data-strk-img-id={product.imageId}
                  data-strk-img={`${product.title} sheet metal folding machine`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="block w-full text-center bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Need a custom solution? We specialize in tailored machinery for your specific requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            Request Custom Quote
            <Settings className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Products
