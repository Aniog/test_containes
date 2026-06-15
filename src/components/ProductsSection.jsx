import React, { useRef, useEffect } from 'react'
import { ArrowRight, Settings, Zap, Layers, Cog, Wrench, Box } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'Advanced dual-folding technology for high-precision sheet metal processing with enhanced productivity.',
    icon: Layers,
    features: ['Dual Station', 'High Precision', 'Automated Control'],
    imageQuery: 'double folding machine sheet metal industrial manufacturing'
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Precision double-folding capability for complex sheet metal geometries and superior bend accuracy.',
    icon: Cog,
    features: ['Dual Fold', 'Precision Bending', 'Versatile Setup'],
    imageQuery: 'double folder sheet metal bending machine'
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Professional-grade folder designed for consistent, accurate sheet metal folding across various materials.',
    icon: Settings,
    features: ['Consistent Folds', 'Material Versatility', 'Easy Operation'],
    imageQuery: 'sheet metal folder industrial machine'
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Heavy-duty folding machine engineered for demanding production environments and complex projects.',
    icon: Wrench,
    features: ['Heavy Duty', 'Production Ready', 'Advanced Controls'],
    imageQuery: 'sheet metal folding machine industrial equipment'
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Versatile metal folding solution for workshops and production facilities requiring reliability and precision.',
    icon: Box,
    features: ['Workshop Ready', 'Reliable Performance', 'Compact Design'],
    imageQuery: 'metal folder machine workshop equipment'
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Industrial-strength folder machine built for continuous operation and exceptional folding quality.',
    icon: Zap,
    features: ['Industrial Grade', 'Continuous Operation', 'Quality Assured'],
    imageQuery: 'metal folder machine industrial grade'
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'State-of-the-art folding machine combining innovative technology with robust construction for optimal results.',
    icon: Settings,
    features: ['Innovative Tech', 'Robust Build', 'Optimal Results'],
    imageQuery: 'metal folding machine modern technology'
  }
]

const ProductsSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      const cleanup = ImageHelper.loadImages(strkImgConfig, sectionRef.current)
      return cleanup
    }
  }, [])

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="products-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p id="products-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of precision sheet metal folding machines,
            engineered for excellence in every application.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
                  <img
                    alt={product.title}
                    data-strk-img-id={`product-${product.id}`}
                    data-strk-img={`[product-desc-${product.id}] [product-title-${product.id}] [products-subtitle] [products-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3
                    id={`product-title-${product.id}`}
                    className="text-xl font-bold text-gray-900 mb-2"
                  >
                    {product.title}
                  </h3>
                  <p
                    id={`product-desc-${product.id}`}
                    className="text-gray-600 mb-4 line-clamp-3"
                  >
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Can't find what you're looking for? We offer custom solutions tailored to your needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Our Experts
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
