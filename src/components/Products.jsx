import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Dual-action precision folding',
    description:
      'High-performance double folding machine designed for complex sheet metal profiles. Delivers consistent, accurate folds with minimal setup time.',
    specs: ['Up to 3mm steel capacity', 'CNC-controlled folding beam', 'Dual-axis operation'],
    badge: 'Best Seller',
    imgId: 'prod-dfm-8a3b1c',
    titleId: 'prod-double-folding-machine-title',
    descId: 'prod-double-folding-machine-desc',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Versatile industrial folder',
    description:
      'The double folder series offers unmatched versatility for fabrication shops. Handles a wide range of materials with precision and repeatability.',
    specs: ['Hydraulic clamping system', 'Programmable back gauge', 'Quick-change tooling'],
    badge: 'Popular',
    imgId: 'prod-df-9c4d2e',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Professional-grade sheet folding',
    description:
      'Purpose-built for sheet metal fabrication. The sheet metal folder delivers clean, burr-free bends across a wide range of gauges and materials.',
    specs: ['Up to 4mm mild steel', 'Motorized back gauge', 'Digital angle readout'],
    badge: null,
    imgId: 'prod-smf-5e6f3a',
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    tagline: 'Heavy-duty folding power',
    description:
      'Industrial sheet metal folding machine for high-volume production environments. Engineered for reliability and long service life.',
    specs: ['Heavy-duty frame construction', 'Servo-electric drive', 'Touchscreen HMI'],
    badge: 'New',
    imgId: 'prod-smfm-7b8c4d',
    titleId: 'prod-sheet-metal-folding-machine-title',
    descId: 'prod-sheet-metal-folding-machine-desc',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'Compact and powerful',
    description:
      'The metal folder range combines compact footprint with powerful folding capability. Ideal for workshops with limited floor space.',
    specs: ['Space-saving design', 'Manual & CNC options', 'Easy maintenance access'],
    badge: null,
    imgId: 'prod-mf-2a9b5e',
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'Engineered for excellence',
    description:
      'Our flagship metal folding machine series. Combines advanced automation with robust construction for demanding production requirements.',
    specs: ['Automated material handling', 'Multi-axis CNC control', 'Industry 4.0 ready'],
    badge: 'Flagship',
    imgId: 'prod-mfm-3c1d6f',
    titleId: 'prod-metal-folding-machine-title',
    descId: 'prod-metal-folding-machine-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" className="bg-[#F8F6F1] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
              Our Products
            </span>
            <div className="w-10 h-px bg-[#C9A84C]" />
          </div>
          <h2
            id="products-heading"
            className="text-4xl md:text-5xl font-bold text-[#0F1C2E] mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Precision Folding Machines
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Every machine in our lineup is engineered to deliver consistent, accurate results
            across the most demanding sheet metal fabrication applications.
          </p>
        </div>

        {/* Products Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-[#1A2E45]">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-heading]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-[#C9A84C] text-[#0F1C2E] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-2">
                  {product.tagline}
                </p>
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-[#0F1C2E] mb-3"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="text-gray-500 text-sm leading-relaxed mb-4"
                >
                  {product.description}
                </p>

                {/* Specs */}
                <ul className="space-y-1.5 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 text-[#0F1C2E] font-semibold text-sm hover:text-[#C9A84C] transition-colors duration-200 group/btn"
                >
                  Request Info
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
