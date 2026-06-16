import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    titleId: 'prod-title-double-folding',
    descId: 'prod-desc-double-folding',
    imgId: 'prod-img-double-folding-8a1c3d',
    title: 'Double Folding Machine',
    subtitle: 'Heavy-Duty Series',
    description: 'Our flagship double folding machine delivers unmatched precision for high-volume sheet metal fabrication. Engineered for demanding industrial environments.',
    features: ['Dual-beam folding system', 'CNC-controlled bending', 'Up to 4mm steel capacity', 'Automatic back gauge'],
    badge: 'Best Seller',
  },
  {
    id: 'double-folder',
    titleId: 'prod-title-double-folder',
    descId: 'prod-desc-double-folder',
    imgId: 'prod-img-double-folder-9b2d4e',
    title: 'Double Folder',
    subtitle: 'Professional Series',
    description: 'Versatile double folder designed for precision bending of sheet metal panels. Ideal for HVAC, roofing, and architectural metalwork applications.',
    features: ['Hydraulic clamping beam', 'Digital angle readout', 'Quick-change tooling', 'Programmable sequences'],
    badge: 'Popular',
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-title-sheet-metal-folder',
    descId: 'prod-desc-sheet-metal-folder',
    imgId: 'prod-img-sheet-metal-folder-7c3e5f',
    title: 'Sheet Metal Folder',
    subtitle: 'Standard Series',
    description: 'Reliable sheet metal folder for workshops and fabrication shops. Combines ease of use with professional-grade accuracy for consistent results.',
    features: ['Manual & CNC options', 'Robust steel frame', 'Adjustable folding beam', 'Safety interlocks'],
    badge: null,
  },
  {
    id: 'metal-folder-machine',
    titleId: 'prod-title-metal-folder-machine',
    descId: 'prod-desc-metal-folder-machine',
    imgId: 'prod-img-metal-folder-machine-6d4f6a',
    title: 'Metal Folder Machine',
    subtitle: 'Compact Series',
    description: 'Compact yet powerful metal folder machine for smaller workshops. Delivers precision folding without compromising on build quality or performance.',
    features: ['Space-saving design', 'Easy operation', 'Stainless & mild steel', 'Low maintenance'],
    badge: 'New',
  },
  {
    id: 'metal-folding-machine',
    titleId: 'prod-title-metal-folding-machine',
    descId: 'prod-desc-metal-folding-machine',
    imgId: 'prod-img-metal-folding-machine-5e5a7b',
    title: 'Metal Folding Machine',
    subtitle: 'Industrial Series',
    description: 'High-performance metal folding machine built for continuous industrial use. Features advanced automation for maximum throughput and repeatability.',
    features: ['Servo-electric drive', 'Touch-screen HMI', 'Auto-crowning system', 'Remote diagnostics'],
    badge: 'Premium',
  },
  {
    id: 'sheet-metal-folding-machine',
    titleId: 'prod-title-sheet-metal-folding',
    descId: 'prod-desc-sheet-metal-folding',
    imgId: 'prod-img-sheet-metal-folding-4f6b8c',
    title: 'Sheet Metal Folding Machine',
    subtitle: 'Precision Series',
    description: 'Advanced sheet metal folding machine with precision-engineered components. Designed for complex profiles and tight tolerances in demanding applications.',
    features: ['±0.1° angle accuracy', 'Multi-axis control', 'Offline programming', 'Tool library management'],
    badge: null,
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          alt={product.title}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <div className="absolute top-4 left-4 bg-[#C9A84C] text-white text-xs font-bold uppercase tracking-widest px-3 py-1">
            {product.badge}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 border-t-2 border-t-[#C9A84C]">
        <div className="text-xs text-[#C9A84C] font-semibold uppercase tracking-widest mb-2">
          {product.subtitle}
        </div>
        <h3 id={product.titleId} className="text-xl font-bold text-[#1B2A4A] mb-3">
          {product.title}
        </h3>
        <p id={product.descId} className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        {/* Features */}
        <ul className="space-y-1.5 mb-6">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center justify-center gap-2 bg-[#1B2A4A] hover:bg-[#C9A84C] text-white font-semibold py-3 text-sm tracking-wide transition-all duration-200 group/btn"
        >
          Request Quote
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">Our Product Range</span>
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mt-3 mb-4">
            Precision Folding Machines
          </h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to heavy-duty industrial systems, our complete range of sheet metal folding machines is engineered to meet every fabrication need.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
