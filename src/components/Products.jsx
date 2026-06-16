import { useState } from 'react'
import { ArrowRight, Check, Settings, Shield, Zap, Wrench } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'Heavy-Duty Precision',
    description: 'Industrial-grade double folding machine designed for high-volume sheet metal processing with exceptional accuracy.',
    features: ['Dual-axis folding', 'CNC controlled', 'Heavy gauge capacity', 'Automated operation'],
    specs: { capacity: 'Up to 6mm', length: 'Up to 4000mm', accuracy: '±0.1mm' },
    imgId: 'product-double-folding-c1d2e3',
    titleId: 'product-double-folding-title',
    descId: 'product-double-folding-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    subtitle: 'Versatile Bending',
    description: 'Compact and efficient double folder for precise bending operations in small to medium workshops.',
    features: ['Quick setup', 'Manual & power options', 'Portable design', 'Multi-angle folding'],
    specs: { capacity: 'Up to 3mm', length: 'Up to 2500mm', accuracy: '±0.15mm' },
    imgId: 'product-double-folder-f4g5h6',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'Professional Grade',
    description: 'Professional sheet metal folder engineered for consistent, repeatable bends across various materials.',
    features: ['Hydraulic system', 'Digital readout', 'Adjustable clamping', 'Safety interlocks'],
    specs: { capacity: 'Up to 4mm', length: 'Up to 3200mm', accuracy: '±0.12mm' },
    imgId: 'product-sheet-metal-folder-i7j8k9',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    subtitle: 'Advanced Technology',
    description: 'State-of-the-art folding machine with programmable controls for complex bending sequences.',
    features: ['Touch screen interface', 'Memory storage', 'Auto crowning', 'Back gauge system'],
    specs: { capacity: 'Up to 5mm', length: 'Up to 3500mm', accuracy: '±0.08mm' },
    imgId: 'product-sheet-metal-folding-l0m1n2',
    titleId: 'product-sheet-metal-folding-title',
    descId: 'product-sheet-metal-folding-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    subtitle: 'Reliable Performance',
    description: 'Dependable metal folder built for daily use in fabrication shops and manufacturing facilities.',
    features: ['Robust construction', 'Easy maintenance', 'Quick change tooling', 'Ergonomic design'],
    specs: { capacity: 'Up to 3.5mm', length: 'Up to 2000mm', accuracy: '±0.15mm' },
    imgId: 'product-metal-folder-o3p4q5',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    subtitle: 'Premium Quality',
    description: 'Premium metal folding machine offering superior precision and speed for demanding applications.',
    features: ['Servo-driven', 'Laser alignment', 'Remote diagnostics', 'Custom tooling'],
    specs: { capacity: 'Up to 8mm', length: 'Up to 5000mm', accuracy: '±0.05mm' },
    imgId: 'product-metal-folding-r6s7t8',
    titleId: 'product-metal-folding-title',
    descId: 'product-metal-folding-desc',
  },
]

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Precision Folding Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of metal folding machines, engineered for accuracy, durability, and productivity.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`text-left p-6 rounded-xl border-2 transition-all ${
                selectedProduct.id === product.id
                  ? 'border-yellow-500 bg-white shadow-lg'
                  : 'border-gray-200 bg-white hover:border-yellow-300 hover:shadow-md'
              }`}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-yellow-600 text-sm font-medium">{product.subtitle}</span>
              <h3 id={product.titleId} className="text-xl font-bold mt-1 mb-2">{product.title}</h3>
              <p id={product.descId} className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
            </button>
          ))}
        </div>

        {/* Selected Product Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">{selectedProduct.subtitle}</span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-4">{selectedProduct.title}</h3>
              <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-yellow-600 font-bold text-lg">{selectedProduct.specs.capacity}</div>
                  <div className="text-gray-500 text-sm">Capacity</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-yellow-600 font-bold text-lg">{selectedProduct.specs.length}</div>
                  <div className="text-gray-500 text-sm">Length</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-yellow-600 font-bold text-lg">{selectedProduct.specs.accuracy}</div>
                  <div className="text-gray-500 text-sm">Accuracy</div>
                </div>
              </div>

              <div className="space-y-3">
                {selectedProduct.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="text-yellow-500 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all"
              >
                Request Quote
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
              <img
                data-strk-img-id={`detail-${selectedProduct.id}`}
                data-strk-img={`[${selectedProduct.descId}] [${selectedProduct.titleId}] [products-subtitle] [products-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}