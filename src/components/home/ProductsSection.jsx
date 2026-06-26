import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Layers, Zap, Shield } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description:
      'High-capacity double folding machine designed for precise, repeatable bends in sheet metal fabrication. Built for production environments demanding speed and accuracy.',
    features: ['Up to 200 Tons capacity', 'CNC programmable backgauge', 'Hydraulic crowning system'],
    imgId: 'product-double-folding-1a2b3c',
    titleId: 'product-double-folding-title',
    descId: 'product-double-folding-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description:
      'Compact double folder ideal for workshops and medium-scale operations. Delivers clean, accurate folds with minimal setup time and operator training.',
    features: ['Compact footprint', 'Quick-change tooling', 'Digital angle display'],
    imgId: 'product-double-folder-4d5e6f',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description:
      'Versatile sheet metal folder engineered for a wide range of materials and thicknesses. Perfect for custom fabrication shops and architectural metalwork.',
    features: ['Universal tooling compatibility', 'Adjustable beam pressure', 'Safety light curtains'],
    imgId: 'product-sheet-folder-7g8h9i',
    titleId: 'product-sheet-folder-title',
    descId: 'product-sheet-folder-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description:
      'Our flagship sheet metal folding machine combines industrial strength with advanced automation. Designed for continuous operation in high-volume facilities.',
    features: ['Full automation ready', 'Remote diagnostics', 'Energy-efficient hydraulics'],
    imgId: 'product-sheet-folding-j0k1l2',
    titleId: 'product-sheet-folding-title',
    descId: 'product-sheet-folding-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description:
      'Reliable metal folder built for heavy-duty applications. Handles thick gauge materials with consistent precision, shift after shift.',
    features: ['Heavy-duty frame construction', 'Servo-electric option available', 'Low maintenance design'],
    imgId: 'product-metal-folder-m3n4o5',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description:
      'Precision metal folder machine offering exceptional control and repeatability. The ideal choice for manufacturers who demand zero-defect output.',
    features: ['Touch-screen control', 'Automatic tool calibration', 'Integrated safety systems'],
    imgId: 'product-metal-folder-machine-p6q7r8',
    titleId: 'product-metal-folder-machine-title',
    descId: 'product-metal-folder-machine-desc',
  },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="products" className="py-20 md:py-28 bg-bg-light">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.15em] mb-3 inline-block">
            Our Range
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand tracking-tight mb-4">
            Metal Folding Equipment
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to industrial-scale folding machines, we engineer solutions that meet the demands of modern metal fabrication.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-surface rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-brand mb-3 tracking-tight"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-text-secondary text-sm leading-relaxed mb-5"
                >
                  {product.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-text-primary">
                      <Zap className="w-4 h-4 text-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-[0.05em] hover:text-accent-hover transition-colors"
                >
                  Request Info
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
