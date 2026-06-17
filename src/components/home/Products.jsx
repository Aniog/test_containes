import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision dual-axis folding system for complex bends and consistent angles.',
    features: ['Dual synchronized folding beams', 'CNC-controlled positioning', 'Touchscreen HMI interface'],
    imageId: 'product-double-folding-8f2a9c',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile folding solution for various sheet metal thicknesses and materials.',
    features: ['Adjustable clamping system', 'Multiple folding sequences', 'Quick tool changeover'],
    imageId: 'product-sheet-metal-folder-8f2a9c',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Heavy-duty construction for industrial-scale metal folding operations.',
    features: ['Reinforced steel frame', 'High torque drive system', 'Advanced safety guards'],
    imageId: 'product-metal-folding-8f2a9c',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Compact dual-folder design for efficient workspace utilization.',
    features: ['Space-saving footprint', 'Independent beam control', 'LED work lighting'],
    imageId: 'product-double-folder-8f2a9c',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Specialized equipment for precision sheet metal fabrication.',
    features: ['Micro-bending capability', 'Angle measurement system', 'Programmable sequences'],
    imageId: 'product-sheet-folding-8f2a9c',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'All-in-one metal folding solution with integrated tooling.',
    features: ['Modular tooling system', 'Automatic backgauge', 'Production monitoring'],
    imageId: 'product-metal-folder-8f2a9c',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" className="py-16 md:py-24 lg:py-32 bg-[#f5f7fa]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-[#e85d04] font-semibold text-sm tracking-wider uppercase mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2744] mb-6">
            Sheet Metal Folding Machinery
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From compact double folders to heavy-duty metal folding machines, 
            we offer comprehensive solutions for every metal fabrication need.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative h-48 md:h-56 bg-gray-100 overflow-hidden">
                <img
                  data-strk-img-id={product.imageId}
                  data-strk-img={`[product-title-${product.id}] [product-desc-${product.id}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 id={`product-title-${product.id}`} className="text-xl font-bold text-[#1a2744] mb-3 group-hover:text-[#3b5998] transition-colors">
                  {product.title}
                </h3>
                <p id={`product-desc-${product.id}`} className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-[#e85d04] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#3b5998] font-semibold hover:text-[#e85d04] transition-colors duration-200 group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#1a2744] to-[#2d3748] rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Our engineering team can design and build custom folding machines 
            tailored to your specific production requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#e85d04] hover:bg-[#d35400] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
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
