import { ArrowRight, Settings, Layers, Maximize2, Zap } from 'lucide-react'

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Double Folding Machine',
      description: 'High-precision double folding capability for complex sheet metal configurations with superior accuracy.',
      features: ['Dual-fold technology', 'Precision control', 'Heavy-duty construction'],
      icon: <Layers className="w-8 h-8" />,
    },
    {
      id: 2,
      name: 'Double Folder',
      description: 'Versatile double folder designed for efficiency and consistent results in high-volume production.',
      features: ['High-speed operation', 'Easy setup', 'Low maintenance'],
      icon: <Zap className="w-8 h-8" />,
    },
    {
      id: 3,
      name: 'Sheet Metal Folder',
      description: 'Professional-grade sheet metal folder for precise bends and folds across various material thicknesses.',
      features: ['Adjustable clamping', 'Digital controls', 'Safety features'],
      icon: <Settings className="w-8 h-8" />,
    },
    {
      id: 4,
      name: 'Sheet Metal Folding Machine',
      description: 'Advanced folding machine with automated controls for precision sheet metal fabrication.',
      features: ['CNC compatibility', 'Automated folding', 'Multi-material support'],
      icon: <Maximize2 className="w-8 h-8" />,
    },
    {
      id: 5,
      name: 'Metal Folder',
      description: 'Robust metal folder engineered for durability and precision in demanding industrial environments.',
      features: ['Industrial grade', 'Long lifespan', 'Precision engineering'],
      icon: <Settings className="w-8 h-8" />,
    },
    {
      id: 6,
      name: 'Metal Folding Machine',
      description: 'State-of-the-art metal folding machine combining innovation with reliability for modern manufacturing.',
      features: ['Innovative design', 'Reliable performance', 'Energy efficient'],
      icon: <Zap className="w-8 h-8" />,
    },
  ]

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of precision sheet metal folding equipment, 
            designed to meet the highest standards of quality and performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Header */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white">
                <div className="mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              </div>

              {/* Product Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Our Experts
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Products
