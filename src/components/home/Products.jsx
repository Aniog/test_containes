import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description:
      'High-performance double folding machine with dual-beam design for simultaneous top and bottom folding. Ideal for complex sheet metal profiles.',
    features: ['Dual-beam simultaneous folding', 'CNC precision control', 'Auto tool change'],
    imgId: 'product-dfm-b2e4a1',
    titleId: 'product-dfm-title',
    descId: 'product-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description:
      'Versatile double folder capable of handling a wide range of material thicknesses. Perfect for HVAC, signage, and general fabrication workshops.',
    features: ['Wide thickness range', 'Quick setup', 'Ergonomic operation'],
    imgId: 'product-df-c3f5b2',
    titleId: 'product-df-title',
    descId: 'product-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description:
      'Precision sheet metal folder designed for clean, accurate bends every time. Suitable for stainless steel, aluminum, and coated materials.',
    features: ['Clean accurate bends', 'Multi-material support', 'Low maintenance'],
    imgId: 'product-smf-d4g6c3',
    titleId: 'product-smf-title',
    descId: 'product-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description:
      'Fully automated sheet metal folding machine with intelligent bending sequences. Reduces cycle time and increases production throughput.',
    features: ['Intelligent bend sequencing', 'Automated operation', 'High throughput'],
    imgId: 'product-smfm-e5h7d4',
    titleId: 'product-smfm-title',
    descId: 'product-smfm-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description:
      'Robust metal folder built for heavy-duty industrial applications. Delivers consistent results across long production runs.',
    features: ['Heavy-duty construction', 'Consistent results', 'Long production runs'],
    imgId: 'product-mf-f6i8e5',
    titleId: 'product-mf-title',
    descId: 'product-mf-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description:
      'Compact metal folder machine with advanced CNC controls. Perfect for job shops and small-to-medium batch production.',
    features: ['Compact footprint', 'CNC controls', 'Batch production ready'],
    imgId: 'product-mfm-g7j9f6',
    titleId: 'product-mfm-title',
    descId: 'product-mfm-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description:
      'Flagship metal folding machine with full automation capabilities. The ultimate solution for high-volume precision metal forming.',
    features: ['Full automation', 'High-volume capable', 'Precision metal forming'],
    imgId: 'product-mfm2-h8k0g7',
    titleId: 'product-mfm2-title',
    descId: 'product-mfm2-desc',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 lg:py-32 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">
            Our Products
          </span>
          <h2
            id="products-section-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-5"
          >
            Precision Folding Solutions
          </h2>
          <p
            id="products-section-subtitle"
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            From manual folders to fully automated folding systems, we offer the
            complete range of metal folding equipment for every application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card-dark border border-navy-light rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-subtitle] [products-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-gray-400 text-sm leading-relaxed mb-5"
                >
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all duration-300"
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4" />
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
