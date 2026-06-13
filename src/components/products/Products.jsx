import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Check, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding',
    name: 'Double Folding Machine',
    tagline: 'High-speed dual-axis folding',
    description: 'Our flagship double folding machine delivers simultaneous dual-axis bending for maximum throughput. Ideal for high-volume production lines requiring consistent, repeatable folds on sheet metal up to 3mm thickness.',
    features: ['Dual-axis simultaneous folding', 'Up to 120 folds per minute', 'CNC programmable', 'Auto material thickness detection'],
    imgId: 'product-double-fold-b3a1c4',
    titleId: 'product-double-fold-title',
    descId: 'product-double-fold-desc',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Versatile twin-blade folding',
    description: 'The ARTITECT Double Folder features twin-blade technology for precise, parallel folding operations. Engineered for medium to heavy gauge materials with exceptional edge quality.',
    features: ['Twin-blade parallel folding', 'Servo-electric precision drive', 'Touchscreen control interface', 'Quick tooling change system'],
    imgId: 'product-double-folder-c4d5e6',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'sheet-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Heavy-duty plate bending',
    description: 'Purpose-built for thick sheet metal applications, our Sheet Metal Folder delivers immense clamping force and deep bending capacity. Handles materials up to 6mm with effortless precision.',
    features: ['Up to 200 tons clamping force', 'Deep box forming capability', 'Hydraulic parallel control', 'Backgauge automation'],
    imgId: 'product-sheet-folder-e5f6g7',
    titleId: 'product-sheet-folder-title',
    descId: 'product-sheet-folder-desc',
  },
  {
    id: 'sheet-folding',
    name: 'Sheet Metal Folding Machine',
    tagline: 'All-purpose production folder',
    description: 'A versatile folding solution for sheet metal fabrication shops. Combines speed, accuracy, and ease of use in a compact footprint. Perfect for job shops and custom fabrication.',
    features: ['Multi-angle programming', 'Auto crowning compensation', 'Energy-efficient servo drive', 'Remote diagnostics'],
    imgId: 'product-sheet-folding-f6g7h8',
    titleId: 'product-sheet-folding-title',
    descId: 'product-sheet-folding-desc',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'General purpose folding',
    description: 'The workhorse of metal fabrication. The ARTITECT Metal Folder handles a wide range of materials from aluminum to stainless steel with reliable, repeatable performance shift after shift.',
    features: ['Wide material compatibility', 'Ergonomic operator interface', 'Integrated safety light curtain', 'Preventive maintenance alerts'],
    imgId: 'product-metal-folder-g7h8i9',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    tagline: 'Automated folding cell',
    description: 'A fully integrated metal folding machine designed for lights-out production. Features robotic part handling, automatic tool changers, and real-time quality monitoring for Industry 4.0 factories.',
    features: ['Industry 4.0 ready', 'Robotic part handling interface', 'Automatic tool changer', 'Real-time quality analytics'],
    imgId: 'product-metal-machine-h8i9j0',
    titleId: 'product-metal-machine-title',
    descId: 'product-metal-machine-desc',
  },
  {
    id: 'metal-folding',
    name: 'Metal Folding Machine',
    tagline: 'High-precision folder',
    description: 'Our premium metal folding machine offers micron-level accuracy for aerospace and automotive applications. Advanced crowning and angle measurement ensure perfect bends every cycle.',
    features: ['Micron-level positioning accuracy', 'Laser angle measurement', 'Adaptive bending correction', 'Comprehensive data logging'],
    imgId: 'product-metal-folding-i9j0k1',
    titleId: 'product-metal-folding-title',
    descId: 'product-metal-folding-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-surface-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold font-semibold text-sm tracking-widest uppercase">Our Product Line</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3 mb-4">
            Precision Metal Folding Machinery
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From compact job shop folders to fully automated production cells — find the right machine for your operation.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-52 bg-surface-bg overflow-hidden">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                  {product.tagline}
                </span>
                <h3 id={product.titleId} className="text-lg font-bold text-brand-navy mt-1 mb-2">
                  {product.name}
                </h3>
                <p id={product.descId} className="text-text-secondary text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-brand-navy font-semibold text-sm hover:text-brand-gold transition-colors duration-200"
                >
                  Inquire About This Machine
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}