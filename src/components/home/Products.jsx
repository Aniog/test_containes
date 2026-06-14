import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding',
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
    imgId: 'prod-img-double-folding-9a3b1c',
    title: 'Double Folding Machine',
    desc: 'High-performance double folding machine engineered for precise, repeatable bends on sheet metal panels. Ideal for high-volume production environments.',
    badge: 'Best Seller',
    specs: ['Up to 4000mm working length', 'Dual-beam folding system', 'CNC controlled'],
  },
  {
    id: 'double-folder',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
    imgId: 'prod-img-double-folder-7d4e2f',
    title: 'Double Folder',
    desc: 'Compact and versatile double folder designed for workshops and fabrication shops requiring consistent quality folds with minimal setup time.',
    badge: 'Popular',
    specs: ['Hydraulic clamping beam', 'Auto back gauge', 'Touch screen interface'],
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
    imgId: 'prod-img-sheet-metal-folder-5c6d3e',
    title: 'Sheet Metal Folder',
    desc: 'Professional-grade sheet metal folder built for accuracy and longevity. Handles a wide range of material thicknesses with ease.',
    badge: null,
    specs: ['Mild steel up to 3mm', 'Programmable stops', 'Robust steel frame'],
  },
  {
    id: 'sheet-metal-folding',
    titleId: 'prod-sheet-metal-folding-title',
    descId: 'prod-sheet-metal-folding-desc',
    imgId: 'prod-img-sheet-metal-folding-2a8f4b',
    title: 'Sheet Metal Folding Machine',
    desc: 'Advanced sheet metal folding machine with servo-electric drive for energy efficiency and ultra-precise angle control across all material types.',
    badge: 'New',
    specs: ['Servo-electric drive', 'Angle accuracy ±0.1°', 'Energy efficient'],
  },
  {
    id: 'metal-folder',
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
    imgId: 'prod-img-metal-folder-6e1c9d',
    title: 'Metal Folder',
    desc: 'Reliable metal folder for general fabrication tasks. Combines ease of use with industrial-grade construction for lasting performance.',
    badge: null,
    specs: ['Manual & CNC options', 'Quick-change tooling', 'Low maintenance'],
  },
  {
    id: 'metal-folding',
    titleId: 'prod-metal-folding-title',
    descId: 'prod-metal-folding-desc',
    imgId: 'prod-img-metal-folding-3b7a5e',
    title: 'Metal Folding Machine',
    desc: 'Heavy-duty metal folding machine designed for demanding industrial applications. Delivers consistent results on thick gauge materials.',
    badge: null,
    specs: ['Heavy gauge capacity', 'Hydraulic power unit', 'Safety light curtain'],
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-steel">Our Product Range</span>
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
            Folding Machines for Every Need
          </h2>
          <p id="products-section-subtitle" className="text-bodyText text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to heavy-duty industrial systems, ARTITECT MACHINERY offers a complete range of precision sheet metal folding solutions.
          </p>
          <div className="w-16 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-surfaceMid flex flex-col"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-52 bg-surfaceMid">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-subtitle] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 id={product.titleId} className="text-xl font-bold text-navy mb-2">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-bodyText text-sm leading-relaxed mb-4 flex-1">
                  {product.desc}
                </p>

                {/* Specs */}
                <ul className="space-y-1.5 mb-5">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-mutedText">
                      <span className="w-1.5 h-1.5 bg-steel rounded-full flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 text-steel hover:text-sky font-semibold text-sm transition-colors group/btn bg-transparent border-none cursor-pointer p-0"
                >
                  Request Info
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
