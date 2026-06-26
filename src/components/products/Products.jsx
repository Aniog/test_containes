import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision dual-axis folding system for complex sheet metal bends with repeatable accuracy.',
    features: ['Dual synchronized folding beams', 'CNC-controlled positioning', 'Touchscreen HMI interface'],
    imageId: 'product-double-folding-8f2a9c',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Compact yet powerful folder designed for medium-volume production with quick changeover.',
    features: ['Rapid tooling change system', 'Variable folding speed control', 'Compact footprint design'],
    imageId: 'product-double-folder-8f2a9c',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile folder for general-purpose sheet metal work with exceptional bend quality.',
    features: ['Wide material compatibility', 'Precision backgauge system', 'Easy-to-use controls'],
    imageId: 'product-sheet-metal-folder-8f2a9c',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Industrial-grade folding machine built for high-volume production environments.',
    features: ['Heavy-duty construction', 'High-speed operation', 'Advanced safety systems'],
    imageId: 'product-sheet-metal-folding-8f2a9c',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Specialized folder for various metal types with adaptive pressure control.',
    features: ['Adaptive pressure technology', 'Multi-material capability', 'Energy-efficient drive'],
    imageId: 'product-metal-folder-8f2a9c',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Complete folding solution with integrated measurement and quality assurance.',
    features: ['Integrated measurement system', 'Quality assurance module', 'Data logging capability'],
    imageId: 'product-metal-folder-machine-8f2a9c',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Premium folding machine for demanding applications requiring maximum precision.',
    features: ['Ultra-precision mechanics', 'Custom tooling options', 'Remote monitoring support'],
    imageId: 'product-metal-folding-8f2a9c',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-20 lg:py-28 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 text-sm font-semibold rounded-full mb-4">
            Our Products
          </span>
          <h2 id="products-title" className="text-3xl sm:text-4xl font-bold text-brand-900 mb-4">
            Precision Folding Machinery
          </h2>
          <p id="products-subtitle" className="text-lg text-brand-600 leading-relaxed">
            From compact folders to industrial folding systems, we offer a complete range of sheet metal folding solutions engineered for precision and reliability.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-brand-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-56 bg-brand-100 overflow-hidden">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={product.imageId}
                  data-strk-img={`[product-${product.id}-desc] [product-${product.id}-title] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3
                  id={`product-${product.id}-title`}
                  className="text-xl font-bold text-brand-800 mb-3 group-hover:text-brand-600 transition-colors"
                >
                  {product.title}
                </h3>
                <p
                  id={`product-${product.id}-desc`}
                  className="text-brand-600 leading-relaxed mb-4"
                >
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-brand-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-accent-500 transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-brand-800 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-brand-200 max-w-2xl mx-auto mb-8">
            Our engineering team can design and build custom folding machines tailored to your specific production requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl"
          >
            Contact Our Engineers
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
