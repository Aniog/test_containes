import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Check } from 'lucide-react';

const PRODUCTS = [
  {
    title: 'Double Folding Machine',
    subtitle: 'High-capacity dual-action folding for heavy-duty sheet metal processing.',
    imgId: 'product-double-folding-a1b2c3',
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
    features: ['Dual simultaneous folding axes', 'Up to 6mm sheet capacity', 'CNC programmable controls'],
  },
  {
    title: 'Double Folder',
    subtitle: 'Versatile double-edge folding with precision alignment for consistent results.',
    imgId: 'product-double-folder-d4e5f6',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
    features: ['Symmetrical folding accuracy', 'Quick tooling changeover', 'Energy-efficient servo drive'],
  },
  {
    title: 'Sheet Metal Folder',
    subtitle: 'Robust sheet metal folding engineered for complex bends and high repeatability.',
    imgId: 'product-sheet-folder-g7h8i9',
    titleId: 'prod-sheet-folder-title',
    descId: 'prod-sheet-folder-desc',
    features: ['Wide working width up to 4000mm', 'Back gauge automation', 'Touchscreen HMI interface'],
  },
  {
    title: 'Sheet Metal Folding Machine',
    subtitle: 'All-in-one sheet metal folding solution for fabricators demanding versatility.',
    imgId: 'product-sheet-machine-j0k1l2',
    titleId: 'prod-sheet-machine-title',
    descId: 'prod-sheet-machine-desc',
    features: ['Multi-angle programming', 'Hydraulic clamping system', 'Safety light curtain protection'],
  },
  {
    title: 'Metal Folder',
    subtitle: 'Heavy-gauge metal folder built for continuous industrial production environments.',
    imgId: 'product-metal-folder-m3n4o5',
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
    features: ['Reinforced steel frame', 'Tool library with 100+ profiles', 'Remote diagnostics support'],
  },
  {
    title: 'Metal Folding Machine',
    subtitle: 'Advanced metal folding machine with adaptive bending technology for zero-defect output.',
    imgId: 'product-metal-machine-p6q7r8',
    titleId: 'prod-metal-machine-title',
    descId: 'prod-metal-machine-desc',
    features: ['Adaptive bend correction', 'Servo-electric precision', 'Industry 4.0 ready interface'],
  },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase">
            Our Product Range
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mt-3 mb-4">
            Precision Machinery for Every Application
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
          <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg">
            From double folding machines to versatile metal folders, each system is
            engineered to deliver uncompromising quality and performance.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <article
              key={product.titleId}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image container */}
              <div className="relative h-56 overflow-hidden bg-brand-navy/5">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 id={product.titleId} className="text-lg font-bold text-brand-navy mb-2">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-gray-500 text-sm leading-relaxed mb-4">
                  {product.subtitle}
                </p>
                <ul className="space-y-1.5">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}