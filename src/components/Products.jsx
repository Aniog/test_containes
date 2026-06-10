import { Cog, Layers, Maximize, Zap } from 'lucide-react'

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Double Folding Machine',
      description: 'Advanced dual-folding technology for high-precision sheet metal processing with enhanced productivity.',
      icon: <Cog className="w-8 h-8" />,
      features: ['Dual Folding Capability', 'High Precision', 'Automated Control', 'Heavy Duty Construction'],
      image: 'double folding machine professional sheet metal equipment'
    },
    {
      id: 2,
      name: 'Sheet Metal Folder',
      description: 'Versatile sheet metal folding solution designed for accuracy and ease of operation in demanding environments.',
      icon: <Layers className="w-8 h-8" />,
      features: ['Precision Folding', 'User-Friendly Interface', 'Durable Design', 'Custom Configurations'],
      image: 'sheet metal folder industrial bending machine'
    },
    {
      id: 3,
      name: 'Metal Folding Machine',
      description: 'Heavy-duty metal folding machine built for continuous operation with superior bending capabilities.',
      icon: <Maximize className="w-8 h-8" />,
      features: ['Heavy-Duty Performance', 'Continuous Operation', 'Superior Bending', 'Low Maintenance'],
      image: 'metal folding machine industrial equipment'
    },
    {
      id: 4,
      name: 'Double Folder',
      description: 'Efficient double folder system that delivers consistent results for high-volume production requirements.',
      icon: <Zap className="w-8 h-8" />,
      features: ['High-Volume Production', 'Consistent Results', 'Energy Efficient', 'Quick Setup'],
      image: 'double folder sheet metal bending equipment'
    }
  ]

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-2 tracking-wide uppercase">Our Products</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Folding Machines
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of precision-engineered sheet metal folding machines designed for modern manufacturing needs
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Product Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/20 text-9xl font-bold">
                    {product.name.charAt(0)}
                  </div>
                </div>
                <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">Can't find what you're looking for?</p>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Our Experts
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Products
