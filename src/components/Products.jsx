import { ArrowRight, Check } from 'lucide-react'

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Double Folding Machine',
      description: 'Our flagship double folding machine delivers unmatched precision and efficiency for high-volume production.',
      features: ['Dual folding stations', 'CNC control system', 'Auto-feeding system', 'Precision up to 0.1mm'],
      image: 'Double folding machine for metal sheets'
    },
    {
      id: 2,
      name: 'Double Folder',
      description: 'Heavy-duty double folder designed for continuous operation with superior bending accuracy.',
      features: ['Reinforced steel construction', 'Hydraulic clamping', 'Digital angle display', 'Quick-change tooling'],
      image: 'Industrial double folder machine'
    },
    {
      id: 3,
      name: 'Sheet Metal Folder',
      description: 'Versatile sheet metal folder perfect for workshops and manufacturing facilities of all sizes.',
      features: ['Adjustable bending angle', 'Foot pedal operation', 'Safety light curtain', 'Low maintenance design'],
      image: 'Sheet metal folder equipment'
    },
    {
      id: 4,
      name: 'Sheet Metal Folding Machine',
      description: 'Advanced folding machine with automated controls for consistent, high-quality results.',
      features: ['Touch screen interface', 'Programmable sequences', 'Real-time monitoring', 'Energy efficient'],
      image: 'Automated sheet metal folding machine'
    },
    {
      id: 5,
      name: 'Metal Folder',
      description: 'Compact yet powerful metal folder ideal for precision work in limited spaces.',
      features: ['Space-saving design', 'Manual or pneumatic options', 'Angle gauge included', 'Portable configuration'],
      image: 'Compact metal folder for workshops'
    },
    {
      id: 6,
      name: 'Metal Folder Machine',
      description: 'Industrial-grade metal folder machine built for demanding production environments.',
      features: ['Heavy-duty frame', 'CNC back gauge', 'Multi-language interface', '24/7 operation ready'],
      image: 'Industrial metal folder machine'
    },
    {
      id: 7,
      name: 'Metal Folding Machine',
      description: 'State-of-the-art metal folding machine combining German engineering with modern technology.',
      features: ['Laser safety system', 'Automatic crowning', 'Cloud connectivity', 'Predictive maintenance'],
      image: 'Modern metal folding machine with laser safety'
    }
  ]

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Product Line
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of sheet metal folding machines, each engineered for precision, durability, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-900 to-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl mb-4 opacity-20">⚙️</div>
                    <p className="text-sm opacity-75">{product.image}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full inline-flex items-center justify-center rounded-lg bg-blue-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-800 transition-all group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
