import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    description:
      'Our flagship double folding machine delivers exceptional precision and efficiency for complex sheet metal folding operations. Designed for high-volume production with consistent results.',
    features: [
      'Dual folding stations for increased productivity',
      'CNC control system for precise operations',
      'Heavy-duty construction for durability',
      'Compatible with various sheet metal thicknesses',
    ],
    image: 'double folding machine industrial sheet metal precision',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    description:
      'Versatile double folder designed for workshops and manufacturing facilities that require flexibility and reliability in their sheet metal folding operations.',
    features: [
      'Manual and automatic operation modes',
      'Adjustable folding angles',
      'Quick-change tooling system',
      'Safety features with emergency stop',
    ],
    image: 'double folder metal bending machine workshop',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    description:
      'Professional-grade sheet metal folder suitable for a wide range of applications, from HVAC ductwork to architectural metal fabrication.',
    features: [
      'Precision ground folding beam',
      'Segmented fingers for box and pan folding',
      'Heavy-duty steel construction',
      'Easy-to-read angle indicators',
    ],
    image: 'sheet metal folder bending equipment fabrication',
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    description:
      'Fully automated sheet metal folding machine with advanced CNC controls for precision folding of complex parts with minimal setup time.',
    features: [
      'CNC programmable controller',
      'Automatic back gauge system',
      'Multiple folding programs storage',
      'High-speed operation capability',
    ],
    image: 'sheet metal folding machine cnc automated',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    description:
      'Robust metal folder built for daily use in demanding industrial environments. Combines traditional craftsmanship with modern engineering.',
    features: [
      'All-steel construction',
      'Precision-machined components',
      'Adjustable clamping pressure',
      'Low maintenance design',
    ],
    image: 'metal folder industrial steel fabrication',
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    description:
      'Heavy-duty metal folder machine designed for continuous operation in industrial settings. Ideal for production environments requiring consistent quality.',
    features: [
      'Industrial-grade components',
      'Hydraulic clamping system',
      'Digital angle display',
      'Custom configurations available',
    ],
    image: 'metal folder machine hydraulic industrial',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    description:
      'State-of-the-art metal folding machine incorporating the latest technology for superior folding accuracy and repeatability in every operation.',
    features: [
      'Touchscreen interface',
      'Automatic tool change system',
      'Real-time production monitoring',
      'Energy-efficient operation',
    ],
    image: 'metal folding machine modern technology precision',
  },
]

const Products = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1
            id="products-page-title"
            className="text-4xl md:text-5xl font-bold text-primary mb-4 font-display"
          >
            Our Products
          </h1>
          <p
            id="products-page-subtitle"
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Discover our complete range of precision sheet metal folding
            machines. Each machine is engineered for durability, accuracy, and
            performance in demanding industrial environments.
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Product Image */}
              <div className="w-full md:w-1/2">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
                  <img
                    alt={product.name}
                    data-strk-img-id={`product-detail-${product.id}`}
                    data-strk-img={`[product-detail-desc-${product.id}] [product-detail-title-${product.id}] [products-page-subtitle] [products-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="w-full md:w-1/2">
                <h2
                  id={`product-detail-title-${product.id}`}
                  className="text-2xl md:text-3xl font-bold text-primary mb-4 font-display"
                >
                  {product.name}
                </h2>
                <p
                  id={`product-detail-desc-${product.id}`}
                  className="text-gray-600 mb-6"
                >
                  {product.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Key Features:
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <Check
                          size={20}
                          className="text-accent flex-shrink-0 mt-0.5"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
                  >
                    Request Quote
                    <ArrowRight size={18} />
                  </Link>
                  <button className="border-2 border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary hover:text-white transition-all">
                    Download Specs
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-light rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 font-display">
            Need Help Choosing the Right Machine?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you select the perfect sheet
            metal folding solution for your specific requirements.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
          >
            Contact Our Team
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Products
