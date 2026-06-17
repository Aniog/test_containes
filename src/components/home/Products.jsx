import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'double-folding-machine',
      title: 'Double Folding Machine',
      description: 'High-precision dual-axis folding system for complex sheet metal configurations. Ideal for HVAC, automotive, and aerospace industries.',
      features: ['Dual synchronized folding beams', 'CNC-controlled precision', 'Touchscreen interface', 'Auto-angle calibration'],
      imageId: 'product-double-folding-8f2a9c',
    },
    {
      id: 'double-folder',
      title: 'Double Folder',
      description: 'Compact yet powerful double folder designed for medium-scale operations. Perfect balance of speed and accuracy for production lines.',
      features: ['Rapid cycle times', 'Modular design', 'Easy tool changeover', 'Energy-efficient operation'],
      imageId: 'product-double-folder-8f2a9c',
    },
    {
      id: 'sheet-metal-folder',
      title: 'Sheet Metal Folder',
      description: 'Versatile sheet metal folding solution for diverse material thicknesses. Handles aluminum, steel, and stainless steel with ease.',
      features: ['Multi-material compatibility', 'Adjustable clamping pressure', 'Digital angle readout', 'Safety light curtains'],
      imageId: 'product-sheet-metal-folder-8f2a9c',
    },
    {
      id: 'sheet-metal-folding-machine',
      title: 'Sheet Metal Folding Machine',
      description: 'Industrial-grade folding machine built for high-volume production. Robust construction ensures years of reliable operation.',
      features: ['Heavy-duty construction', 'High throughput capacity', 'Low maintenance design', 'Remote monitoring capable'],
      imageId: 'product-sheet-metal-folding-8f2a9c',
    },
    {
      id: 'metal-folder',
      title: 'Metal Folder',
      description: 'Precision metal folder for intricate folding requirements. Advanced backgauge system ensures repeatable accuracy.',
      features: ['Micro-adjustment backgauge', 'Laser positioning guide', 'Quick-set tooling system', 'Ergonomic controls'],
      imageId: 'product-metal-folder-8f2a9c',
    },
    {
      id: 'metal-folder-machine',
      title: 'Metal Folder Machine',
      description: 'Complete metal folding workstation with integrated handling options. Streamline your production process from start to finish.',
      features: ['Integrated conveyor options', 'Programmable sequences', 'Quality inspection station', 'Production tracking'],
      imageId: 'product-metal-folder-machine-8f2a9c',
    },
    {
      id: 'metal-folding-machine',
      title: 'Metal Folding Machine',
      description: 'State-of-the-art metal folding technology with smart automation. Reduce setup time and increase production efficiency.',
      features: ['AI-assisted setup', 'Predictive maintenance alerts', 'Cloud connectivity', 'Real-time analytics'],
      imageId: 'product-metal-folding-8f2a9c',
    },
  ];

  return (
    <section id="products" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-safety-orange font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mt-3 mb-6">
            Precision Engineered Folding Solutions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From compact folders to industrial-scale folding systems, we offer a complete range of machinery 
            designed to meet the demanding requirements of modern manufacturing.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-56 bg-warm-gray overflow-hidden">
                <img
                  data-strk-img-id={product.imageId}
                  data-strk-img={`[product-${product.id}-title] [product-${product.id}-desc] [section-title] [section-subtitle]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3
                  id={`product-${product.id}-title`}
                  className="text-xl font-bold text-charcoal mb-3 group-hover:text-industrial-navy transition-colors"
                >
                  {product.title}
                </h3>
                <p
                  id={`product-${product.id}-desc`}
                  className="text-gray-600 mb-4 leading-relaxed line-clamp-3"
                >
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                      <CheckCircle size={16} className="text-safety-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-industrial-navy font-semibold hover:text-safety-orange transition-colors group/link"
                >
                  Learn More
                  <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-industrial-navy to-steel-blue rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
            Our engineering team can design and build custom folding machines tailored to your specific production requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-safety-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            Discuss Your Requirements
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
