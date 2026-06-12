import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    titleId: 'prod-title-double-folding-machine',
    descId: 'prod-desc-double-folding-machine',
    imgId: 'prod-img-double-folding-machine-9a3b1c',
    title: 'Double Folding Machine',
    description:
      'High-performance double folding machines engineered for complex, multi-bend sheet metal profiles. Ideal for high-volume production environments requiring consistent accuracy.',
    specs: ['Up to 4000mm working length', 'Dual-beam precision system', 'CNC controlled'],
    badge: 'Bestseller',
  },
  {
    id: 'double-folder',
    titleId: 'prod-title-double-folder',
    descId: 'prod-desc-double-folder',
    imgId: 'prod-img-double-folder-7d2e4f',
    title: 'Double Folder',
    description:
      'Compact and versatile double folder machines designed for workshops and fabrication shops. Delivers professional-grade folds with minimal setup time.',
    specs: ['Manual & CNC options', 'Robust steel frame', 'Quick-change tooling'],
    badge: null,
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-title-sheet-metal-folder',
    descId: 'prod-desc-sheet-metal-folder',
    imgId: 'prod-img-sheet-metal-folder-5c8a2d',
    title: 'Sheet Metal Folder',
    description:
      'Precision sheet metal folder machines built for accuracy and repeatability. Suitable for stainless steel, aluminum, and mild steel applications.',
    specs: ['0.5–3mm material capacity', 'Digital angle readout', 'Ergonomic design'],
    badge: 'New Model',
  },
  {
    id: 'sheet-metal-folding-machine',
    titleId: 'prod-title-sheet-metal-folding-machine',
    descId: 'prod-desc-sheet-metal-folding-machine',
    imgId: 'prod-img-sheet-metal-folding-machine-1f6b9e',
    title: 'Sheet Metal Folding Machine',
    description:
      'Industrial-grade sheet metal folding machines for demanding production lines. Features advanced servo-electric drives for energy efficiency and precision.',
    specs: ['Servo-electric drive', 'Touchscreen HMI', 'Auto back-gauge'],
    badge: null,
  },
  {
    id: 'metal-folder',
    titleId: 'prod-title-metal-folder',
    descId: 'prod-desc-metal-folder',
    imgId: 'prod-img-metal-folder-3e7c0a',
    title: 'Metal Folder',
    description:
      'Versatile metal folder machines for light to medium-duty applications. Perfect for HVAC, signage, and architectural metalwork.',
    specs: ['Lightweight construction', 'Portable options available', 'Multi-material compatible'],
    badge: null,
  },
  {
    id: 'metal-folding-machine',
    titleId: 'prod-title-metal-folding-machine',
    descId: 'prod-desc-metal-folding-machine',
    imgId: 'prod-img-metal-folding-machine-8b4d5f',
    title: 'Metal Folding Machine',
    description:
      'Heavy-duty metal folding machines for structural and industrial fabrication. Engineered for maximum rigidity and long-term reliability in demanding environments.',
    specs: ['Heavy-gauge steel frame', 'Hydraulic clamping', 'Up to 6mm capacity'],
    badge: 'Heavy Duty',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="bg-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
              Our Product Range
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            Precision Folding Machines
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to heavy-duty industrial systems — every
            ARTITECT machine is built to deliver flawless results, every time.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold px-3 py-1 tracking-wide uppercase">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-navy mb-3"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-gray-500 text-sm leading-relaxed mb-5 flex-1"
                >
                  {product.description}
                </p>

                {/* Specs */}
                <ul className="mb-6 space-y-1.5">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-steel text-sm font-semibold tracking-wide uppercase hover:text-sky-accent transition-colors group/link"
                >
                  Enquire Now
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
