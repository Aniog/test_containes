import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Double Folding Machine',
    description: 'Advanced dual-folding capability for complex sheet metal configurations with precision engineering.',
    features: ['Dual-fold technology', 'Precision control', 'Heavy-duty construction'],
    image: 'double-folding-machine'
  },
  {
    id: 2,
    name: 'Double Folder',
    description: 'High-performance folder designed for simultaneous processing of multiple sheets with consistent quality.',
    features: ['Multi-sheet processing', 'Consistent results', 'User-friendly interface'],
    image: 'double-folder'
  },
  {
    id: 3,
    name: 'Sheet Metal Folder',
    description: 'Versatile folding solution for various sheet metal thicknesses with adjustable bending angles.',
    features: ['Adjustable angles', 'Multi-thickness support', 'Compact design'],
    image: 'sheet-metal-folder'
  },
  {
    id: 4,
    name: 'Sheet Metal Folding Machine',
    description: 'Industrial-grade machine built for continuous operation with superior folding accuracy.',
    features: ['Industrial grade', 'Continuous operation', 'High accuracy'],
    image: 'sheet-metal-folding-machine'
  },
  {
    id: 5,
    name: 'Metal Folder',
    description: 'Robust and reliable folder for all your metal fabrication needs with minimal maintenance.',
    features: ['Low maintenance', 'Robust construction', 'Cost-effective'],
    image: 'metal-folder'
  },
  {
    id: 6,
    name: 'Metal Folder Machine',
    description: 'Precision-engineered machine delivering consistent folds for professional metalworking projects.',
    features: ['Professional grade', 'Consistent performance', 'Easy operation'],
    image: 'metal-folder-machine'
  },
  {
    id: 7,
    name: 'Metal Folding Machine',
    description: 'State-of-the-art folding technology combining power, precision, and efficiency for modern workshops.',
    features: ['State-of-the-art', 'Powerful performance', 'Energy efficient'],
    image: 'metal-folding-machine'
  }
]

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-900/10 rounded-full text-blue-900 text-sm font-medium mb-4">
            Our Product Line
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Premium Folding Machines
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our complete range of sheet metal folding solutions, engineered for precision and built to last.
          </p>
        </div>

        {/* Featured Product Carousel */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    data-strk-img-id={`product-${products[currentIndex].id}`}
                    data-strk-img={`${products[currentIndex].name} precision sheet metal folding machinery`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 450'%3E%3Crect fill='%23f1f5f9' width='600' height='450'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%2364748b'%3EMetal Folding Machine%3C/text%3E%3C/svg%3E"
                    alt={products[currentIndex].name}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div>
                <div className="text-sm text-blue-900 font-semibold mb-2">
                  Model {String(currentIndex + 1).padStart(3, '0')}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {products[currentIndex].name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {products[currentIndex].description}
                </p>

                <div className="space-y-3 mb-8">
                  {products[currentIndex].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors group">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevProduct}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-900 transition-all duration-200 group"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-blue-900" />
            </button>
            <button
              onClick={nextProduct}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-900 transition-all duration-200 group"
              aria-label="Next product"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-blue-900" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {products.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  idx === currentIndex ? 'bg-blue-900 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to product ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`relative p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                idx === currentIndex
                  ? 'border-blue-900 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg'
              }`}
              onClick={() => setCurrentIndex(idx)}
            >
              <div className="mb-4">
                <div className="text-sm text-blue-900 font-semibold mb-2">
                  Model {String(idx + 1).padStart(3, '0')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {product.description.slice(0, 100)}...
                </p>
              </div>
              <div className="flex items-center text-blue-900 text-sm font-semibold">
                View Details
                <ArrowRight className="ml-1 w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}