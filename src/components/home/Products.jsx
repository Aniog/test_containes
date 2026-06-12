import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding',
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
    imgId: 'prod-img-double-folding-9a3b1c',
    title: 'Double Folding Machine',
    subtitle: 'Heavy-Duty Series',
    description:
      'Our flagship double folding machine delivers unmatched precision for complex sheet metal profiles. Ideal for high-volume production environments requiring consistent, repeatable bends.',
    specs: ['Up to 4mm mild steel', '3200mm working length', 'CNC controlled'],
    badge: 'Best Seller',
  },
  {
    id: 'double-folder',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
    imgId: 'prod-img-double-folder-7d4e2f',
    title: 'Double Folder',
    subtitle: 'Professional Series',
    description:
      'The ARTITECT Double Folder combines robust construction with intuitive controls. Perfect for fabrication shops needing versatility across a wide range of sheet metal thicknesses.',
    specs: ['Up to 3mm stainless', '2500mm working length', 'Digital readout'],
    badge: 'Popular',
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
    imgId: 'prod-img-sheet-metal-folder-5c6d3e',
    title: 'Sheet Metal Folder',
    subtitle: 'Compact Series',
    description:
      'Engineered for precision sheet metal folding in compact workshop settings. The ARTITECT Sheet Metal Folder offers professional-grade performance in a space-efficient design.',
    specs: ['Up to 2mm aluminium', '1600mm working length', 'Manual & powered'],
    badge: 'New',
  },
  {
    id: 'metal-folder-machine',
    titleId: 'prod-metal-folder-machine-title',
    descId: 'prod-metal-folder-machine-desc',
    imgId: 'prod-img-metal-folder-machine-2a8f4b',
    title: 'Metal Folder Machine',
    subtitle: 'Industrial Series',
    description:
      'Built for the most demanding industrial applications. The ARTITECT Metal Folder Machine handles heavy gauge materials with precision and reliability, shift after shift.',
    specs: ['Up to 6mm mild steel', '4000mm working length', 'Hydraulic drive'],
    badge: 'Industrial',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-24 md:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Our Product Range
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight">
            Machines Built for Precision
          </h2>
          <p className="mt-4 text-brand-silver text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to heavy industrial machines — every ARTITECT
            product is engineered to deliver flawless results.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-brand-white rounded-2xl overflow-hidden shadow-lg border border-brand-silver/20 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-brand-navy">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <span className="absolute top-4 left-4 bg-brand-gold text-brand-navy text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-1">
                  {product.subtitle}
                </p>
                <h3 id={product.titleId} className="text-xl font-bold text-brand-navy mb-3">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-brand-silver leading-relaxed text-sm mb-5">
                  {product.description}
                </p>

                {/* Specs */}
                <ul className="flex flex-wrap gap-2 mb-6">
                  {product.specs.map((spec) => (
                    <li
                      key={spec}
                      className="bg-brand-light text-brand-steel text-xs font-semibold px-3 py-1.5 rounded-full border border-brand-silver/30"
                    >
                      {spec}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 text-brand-gold font-semibold text-sm hover:gap-3 transition-all duration-200 group/btn"
                >
                  Request Specifications
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
