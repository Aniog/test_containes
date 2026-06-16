import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Double Folding Machine',
    description: 'Our flagship double folding machine delivers unmatched precision and efficiency for high-volume production environments.',
    features: ['Dual folding stations', 'CNC control system', 'Automatic tool changer', 'High-speed operation'],
    image: 'double folding machine precision sheet metal'
  },
  {
    id: 2,
    name: 'Double Folder',
    description: 'Engineered for durability and accuracy, our double folder handles complex folding tasks with ease.',
    features: ['Heavy-duty construction', 'Precision guides', 'Programmable logic', 'Safety interlocks'],
    image: 'double folder sheet metal bending'
  },
  {
    id: 3,
    name: 'Sheet Metal Folder',
    description: 'Versatile sheet metal folder perfect for workshops and production facilities of all sizes.',
    features: ['Adjustable clamping', 'Multiple bend angles', 'Quick setup', 'Low maintenance'],
    image: 'sheet metal folder bending machine'
  },
  {
    id: 4,
    name: 'Sheet Metal Folding Machine',
    description: 'Advanced folding technology combined with user-friendly controls for optimal productivity.',
    features: ['Touch screen interface', 'Auto-backgauge', 'Material database', 'Energy efficient'],
    image: 'sheet metal folding machine industrial'
  },
  {
    id: 5,
    name: 'Metal Folder',
    description: 'Robust metal folder designed for continuous operation in demanding industrial environments.',
    features: ['Industrial grade', 'Precision folding', 'Easy operation', 'Long service life'],
    image: 'metal folder industrial equipment'
  },
  {
    id: 6,
    name: 'Metal Folder Machine',
    description: 'Fully automated metal folder machine with advanced features for modern fabrication needs.',
    features: ['Full automation', 'CAD/CAM integration', 'Real-time monitoring', 'Remote diagnostics'],
    image: 'metal folder machine automated'
  },
  {
    id: 7,
    name: 'Metal Folding Machine',
    description: 'State-of-the-art metal folding machine that combines traditional craftsmanship with modern technology.',
    features: ['Hybrid technology', 'Smart sensors', 'Predictive maintenance', 'Custom configurations'],
    image: 'metal folding machine precision'
  },
]

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of precision sheet metal folding equipment,
            designed to meet the diverse needs of modern fabrication industries.
          </p>
        </div>

        {/* Featured Product Carousel */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Product Image */}
              <div
                className="h-64 md:h-auto bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center"
                data-strk-bg-id={`product-${products[currentIndex].id}`}
                data-strk-bg={products[currentIndex].image}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              >
                <div className="text-white text-center p-8">
                  <div className="text-6xl mb-4">⚙️</div>
                  <p className="text-sm opacity-75">High-precision machinery</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {products[currentIndex].name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {products[currentIndex].description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {products[currentIndex].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="group inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevProduct}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextProduct}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div
                className="h-48 bg-gradient-to-br from-blue-800 to-gray-800 flex items-center justify-center"
                data-strk-bg-id={`product-thumb-${product.id}`}
                data-strk-bg={product.image}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="600"
              >
                <span className="text-white text-4xl">🔧</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold text-sm">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
