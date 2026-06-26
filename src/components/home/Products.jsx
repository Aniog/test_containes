import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision dual-axis folding system for complex sheet metal operations. Features synchronized folding beams for perfect accuracy.',
    features: ['Dual synchronized beams', 'CNC control system', 'Quick-change tooling', 'Touchscreen interface'],
    imgId: 'product-double-folding-8f2a9c',
    titleId: 'product-double-folding-title',
    descId: 'product-double-folding-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile folding solution for various sheet metal thicknesses. Ideal for HVAC, automotive, and general fabrication.',
    features: ['Adjustable clamping', 'Variable speed control', 'Precision backgauge', 'Easy maintenance'],
    imgId: 'product-sheet-metal-folder-8f2a9c',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Heavy-duty folding machine designed for industrial applications. Handles thick materials with consistent precision.',
    features: ['Heavy-duty construction', 'High tonnage capacity', 'Advanced safety systems', 'Modular design'],
    imgId: 'product-metal-folding-8f2a9c',
    titleId: 'product-metal-folding-title',
    descId: 'product-metal-folding-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Compact dual-folder system for space-efficient operations. Perfect for medium-volume production environments.',
    features: ['Space-saving design', 'Dual folding stations', 'Rapid tool change', 'Energy efficient'],
    imgId: 'product-double-folder-8f2a9c',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Professional-grade folder with advanced automation features. Reduces setup time and increases productivity.',
    features: ['Automated bending', 'Programmable sequences', 'Real-time monitoring', 'Remote diagnostics'],
    imgId: 'product-metal-folder-8f2a9c',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Complete folding solution for sheet metal fabrication. Combines power, precision, and ease of use.',
    features: ['Multi-material capability', 'Ergonomic controls', 'Built-in measurement', 'Low operating cost'],
    imgId: 'product-sheet-metal-folding-8f2a9c',
    titleId: 'product-sheet-metal-folding-title',
    descId: 'product-sheet-metal-folding-desc',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" className="py-24 bg-slate-950" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm tracking-wider uppercase">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Precision Folding Machines
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Explore our comprehensive range of sheet metal folding solutions, engineered for precision, reliability, and performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5"
            >
              {/* Product Image */}
              <div className="relative h-56 bg-slate-800 overflow-hidden">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-slate-400 mb-4 leading-relaxed"
                >
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors group/link"
                >
                  Learn More
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-slate-700 hover:border-amber-500/30"
          >
            Request Full Catalog
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
