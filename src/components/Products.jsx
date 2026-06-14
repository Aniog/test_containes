import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@/lib/imageHelper';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision dual-axis folding system for complex sheet metal operations. Features synchronized folding beams for consistent angles.',
    features: ['Dual synchronized beams', 'CNC control system', 'Quick-change tooling', 'Angle accuracy ±0.1°'],
    imageId: 'product-double-folder-8f2a9c',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Compact yet powerful double folder designed for medium-scale production. Ideal for HVAC and electrical enclosure manufacturing.',
    features: ['Space-efficient design', 'Touchscreen interface', 'Auto-backgauge', 'Multiple bending modes'],
    imageId: 'product-double-folder-compact-8f2a9c',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile sheet metal folding solution for various materials and thicknesses. Perfect for custom fabrication shops.',
    features: ['Wide material range', 'Easy programming', 'Safety light curtains', 'Modular design'],
    imageId: 'product-sheet-folder-8f2a9c',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Industrial-grade folding machine built for high-volume production. Robust construction for demanding environments.',
    features: ['Heavy-duty frame', 'High-speed operation', 'Advanced diagnostics', 'Remote monitoring'],
    imageId: 'product-industrial-folder-8f2a9c',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Precision metal folder with advanced bending capabilities. Suitable for both prototyping and production runs.',
    features: ['Multi-axis control', 'Tool library', 'Offline programming', 'Real-time monitoring'],
    imageId: 'product-metal-folder-8f2a9c',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Complete metal folding solution with integrated handling systems. Streamlines your entire fabrication workflow.',
    features: ['Automated loading', 'In-process inspection', 'Quality tracking', 'Production analytics'],
    imageId: 'product-metal-folder-auto-8f2a9c',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'State-of-the-art metal folding technology with AI-assisted bending. Reduces setup time and improves accuracy.',
    features: ['AI-assisted bending', 'Predictive maintenance', 'Cloud connectivity', 'Digital twin support'],
    imageId: 'product-metal-folding-ai-8f2a9c',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages({}, containerRef.current);
  }, []);

  return (
    <section id="products" className="py-20 lg:py-32 bg-slate-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our Product Range
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From compact folders to industrial folding systems, we offer comprehensive solutions for every sheet metal fabrication need.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imageId}
                  data-strk-img={`[product-${product.id}-desc] [product-${product.id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3
                  id={`product-${product.id}-title`}
                  className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"
                >
                  {product.title}
                </h3>
                <p
                  id={`product-${product.id}-desc`}
                  className="text-slate-600 mb-4 leading-relaxed"
                >
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
