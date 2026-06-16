import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronRight, Ruler, Gauge, Shield, Settings } from 'lucide-react';

const products = [
  {
    id: 'df-5000',
    name: 'Double Folding Machine DF-5000',
    shortName: 'DF-5000',
    description:
      'Heavy-duty double folding machine with hydraulic precision control. Ideal for high-volume sheet metal processing with consistent fold accuracy.',
    specs: ['Max. bending length: 5000mm', 'Max. thickness: 6mm', 'Hydraulic drive'],
    tag: 'Best Seller',
  },
  {
    id: 'df-3200',
    name: 'Double Folding Machine DF-3200',
    shortName: 'DF-3200',
    description:
      'Compact double folder designed for medium-scale operations. Combines power with a space-efficient footprint for versatile workshop layouts.',
    specs: ['Max. bending length: 3200mm', 'Max. thickness: 4mm', 'Electric-hydraulic'],
    tag: 'Popular',
  },
  {
    id: 'smf-2500',
    name: 'Sheet Metal Folder SMF-2500',
    shortName: 'SMF-2500',
    description:
      'Precision sheet metal folder engineered for architectural and industrial fabrication. Delivers clean, repeatable bends on stainless and mild steel.',
    specs: ['Max. bending length: 2500mm', 'Max. thickness: 3mm', 'Manual + electric'],
    tag: null,
  },
  {
    id: 'smfm-4000',
    name: 'Sheet Metal Folding Machine SMFM-4000',
    shortName: 'SMFM-4000',
    description:
      'Advanced sheet metal folding machine with CNC backgauge system. Perfect for complex multi-fold profiles in commercial metalworking.',
    specs: ['Max. bending length: 4000mm', 'Max. thickness: 5mm', 'CNC controlled'],
    tag: 'New',
  },
  {
    id: 'mf-2000',
    name: 'Metal Folder MF-2000',
    shortName: 'MF-2000',
    description:
      'Versatile metal folder for custom fabrication shops. Robust construction with quick-change tooling for rapid production turnaround.',
    specs: ['Max. bending length: 2000mm', 'Max. thickness: 2.5mm', 'Manual operation'],
    tag: null,
  },
  {
    id: 'mfm-6000',
    name: 'Metal Folding Machine MFM-6000',
    shortName: 'MFM-6000',
    description:
      'Industrial-grade metal folding machine for large-format panels and heavy plate. Built for continuous operation in demanding environments.',
    specs: ['Max. bending length: 6000mm', 'Max. thickness: 8mm', 'Full hydraulic'],
    tag: 'Industrial',
  },
];

const iconMap = [Ruler, Gauge, Shield, Settings, Ruler, Gauge];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="relative py-20 md:py-28 bg-am-bg">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-am-gold mb-4">
            Our Product Line
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-am-text tracking-[-0.01em] leading-tight mb-5">
            Precision Folding Machines
          </h2>
          <p className="text-am-text-secondary max-w-2xl mx-auto leading-relaxed">
            From compact manual folders to industrial hydraulic systems, our machines deliver
            the accuracy and reliability your workshop demands.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => {
            const Icon = iconMap[index % iconMap.length];
            const titleId = `product-title-${product.id}`;
            const descId = `product-desc-${product.id}`;

            return (
              <article
                key={product.id}
                className="group relative bg-am-bg-secondary border border-am-border rounded-lg overflow-hidden hover:border-am-gold/40 transition-all duration-300"
              >
                {/* Product image */}
                <div className="relative h-52 overflow-hidden bg-am-surface">
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={`product-img-${product.id}-c3d9f1`}
                    data-strk-img={`[${descId}] [${titleId}] sheet metal folding machine industrial machinery`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-am-gold text-am-bg text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded">
                      {product.tag}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-am-bg-secondary/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-4 h-4 text-am-gold" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-am-text-muted">
                      Model {product.shortName}
                    </span>
                  </div>

                  <h3
                    id={titleId}
                    className="text-lg font-semibold text-am-text mb-3 leading-snug"
                  >
                    {product.name}
                  </h3>

                  <p
                    id={descId}
                    className="text-sm text-am-text-secondary leading-relaxed mb-5"
                  >
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="space-y-2 mb-6">
                    {product.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-am-gold" />
                        <span className="text-xs text-am-text-muted">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-am-gold hover:text-am-gold-hover transition-colors duration-200"
                  >
                    Request Details
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
