import React from 'react';
import { ArrowRight, Check, Settings } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'double-folder-pro',
      titleId: 'product-title-1',
      descId: 'product-desc-1',
      title: 'Double Folder Pro Series',
      description: 'Our flagship double folding machine with precision control and dual-folding capability for high-volume production.',
      features: ['Dual-folding technology', 'CNC control system', 'Auto-positioning', 'Safety sensors'],
      image: 'double folding machine professional series',
      capacity: 'Up to 6mm thickness',
      width: '3000mm max',
    },
    {
      id: 'sheet-master-5000',
      titleId: 'product-title-2',
      descId: 'product-desc-2',
      title: 'Sheet Master 5000',
      description: 'Advanced sheet metal folding machine designed for complex geometries and precision engineering projects.',
      features: ['Multi-axis control', 'Touch screen interface', 'Programmable sequences', 'Quick-change tooling'],
      image: 'sheet metal folding machine advanced',
      capacity: 'Up to 8mm thickness',
      width: '4000mm max',
    },
    {
      id: 'metal-fold-elite',
      titleId: 'product-title-3',
      descId: 'product-desc-3',
      title: 'Metal Fold Elite',
      description: 'Premium metal folder machine with enhanced durability and superior folding accuracy for demanding applications.',
      features: ['Heavy-duty construction', 'Precision ground bed', 'Hydraulic clamping', 'Digital readout'],
      image: 'metal folding machine premium',
      capacity: 'Up to 10mm thickness',
      width: '5000mm max',
    },
    {
      id: 'compact-folder-200',
      titleId: 'product-title-4',
      descId: 'product-desc-4',
      title: 'Compact Folder 200',
      description: 'Space-efficient sheet metal folder perfect for workshops and small-scale production with professional results.',
      features: ['Compact design', 'Easy operation', 'Portable', 'Cost-effective'],
      image: 'compact sheet metal folder',
      capacity: 'Up to 3mm thickness',
      width: '2000mm max',
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-900 text-sm font-medium mb-4">
            <Settings className="w-4 h-4 mr-2" />
            Our Products
          </div>
          <h2 id="products-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Precision Sheet Metal
            <span className="block text-blue-900">Folding Machines</span>
          </h2>
          <p id="products-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engineered for excellence, our complete range of folding machines delivers
            unmatched precision and reliability for all your sheet metal projects.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Product Image Placeholder */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Settings className="w-24 h-24 text-white opacity-20" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2 mb-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {product.capacity}
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {product.width}
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 id={product.titleId} className="text-2xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="group inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors"
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our engineering team can design and build custom folding machines tailored to your specific requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Our Engineers
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
