import React from 'react';
import { ArrowRight, Settings } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'double-folding-machine',
      title: 'Double Folding Machine',
      description: 'Advanced dual-folding capability for complex sheet metal projects with precision control and superior accuracy.',
      features: ['Dual-fold technology', 'Precision control', 'Heavy-duty construction'],
    },
    {
      id: 'double-folder',
      title: 'Double Folder',
      description: 'Professional-grade double folder designed for high-volume production with consistent, reliable performance.',
      features: ['High-volume ready', 'Consistent results', 'Easy operation'],
    },
    {
      id: 'sheet-metal-folder',
      title: 'Sheet Metal Folder',
      description: 'Versatile sheet metal folding solution for various thicknesses and materials with adjustable settings.',
      features: ['Multi-material support', 'Adjustable settings', 'Compact design'],
    },
    {
      id: 'sheet-metal-folding-machine',
      title: 'Sheet Metal Folding Machine',
      description: 'Industrial-grade folding machine engineered for precision and durability in demanding environments.',
      features: ['Industrial grade', 'Precision engineered', 'Long-lasting durability'],
    },
    {
      id: 'metal-folder',
      title: 'Metal Folder',
      description: 'Robust metal folding machine for all your fabrication needs with intuitive controls and safety features.',
      features: ['Intuitive controls', 'Safety features', 'All-metal construction'],
    },
    {
      id: 'metal-folder-machine',
      title: 'Metal Folder Machine',
      description: 'High-performance metal folder machine built for continuous operation and exceptional fold quality.',
      features: ['Continuous operation', 'Exceptional quality', 'Low maintenance'],
    },
    {
      id: 'metal-folding-machine',
      title: 'Metal Folding Machine',
      description: 'The ultimate metal folding solution combining innovation, reliability, and superior engineering excellence.',
      features: ['Innovative design', 'Reliable performance', 'Engineering excellence'],
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="products-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Products
          </h2>
          <p id="products-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete range of precision-engineered sheet metal folding machines
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Product Image Placeholder */}
              <div className="h-64 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                <Settings className="h-24 w-24 text-white opacity-50" />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3
                  id={`product-title-${product.id}`}
                  className="text-xl font-bold text-slate-900 mb-3"
                >
                  {product.title}
                </h3>

                <p
                  id={`product-desc-${product.id}`}
                  className="text-gray-600 text-sm leading-relaxed mb-4"
                >
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <Settings className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Can't find what you're looking for? We offer custom solutions tailored to your needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200"
          >
            Contact Our Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
