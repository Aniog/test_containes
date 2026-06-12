import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    titleId: 'prod-title-double-folding-machine',
    descId: 'prod-desc-double-folding-machine',
    imgId: 'prod-img-double-folding-machine-8a1c3f',
    title: 'Double Folding Machine',
    subtitle: 'Dual-Action Precision',
    description:
      'Our flagship double folding machine delivers two precise folds in a single pass. Engineered for high-volume production with consistent accuracy across all sheet metal gauges.',
    specs: ['Max Width: 3000mm', 'Thickness: up to 3mm', 'Dual-beam system'],
    badge: 'Best Seller',
  },
  {
    id: 'double-folder',
    titleId: 'prod-title-double-folder',
    descId: 'prod-desc-double-folder',
    imgId: 'prod-img-double-folder-9b2d4e',
    title: 'Double Folder',
    subtitle: 'Compact & Versatile',
    description:
      'The ARTITECT Double Folder combines a compact footprint with industrial-grade performance. Ideal for workshops and fabrication shops requiring flexible folding operations.',
    specs: ['Max Width: 2000mm', 'Thickness: up to 2mm', 'CNC controlled'],
    badge: 'Popular',
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-title-sheet-metal-folder',
    descId: 'prod-desc-sheet-metal-folder',
    imgId: 'prod-img-sheet-metal-folder-7c3e5a',
    title: 'Sheet Metal Folder',
    subtitle: 'Industrial Grade',
    description:
      'Designed for heavy-duty sheet metal fabrication, this folder handles a wide range of materials with exceptional repeatability and minimal operator effort.',
    specs: ['Max Width: 4000mm', 'Thickness: up to 4mm', 'Hydraulic drive'],
    badge: null,
  },
  {
    id: 'sheet-metal-folding-machine',
    titleId: 'prod-title-sheet-metal-folding-machine',
    descId: 'prod-desc-sheet-metal-folding-machine',
    imgId: 'prod-img-sheet-metal-folding-machine-6d4f6b',
    title: 'Sheet Metal Folding Machine',
    subtitle: 'Automated Precision',
    description:
      'Advanced CNC-controlled folding machine with programmable bend sequences. Reduces setup time and ensures perfect repeatability for complex profiles.',
    specs: ['Max Width: 3500mm', 'CNC 8-axis', 'Auto back gauge'],
    badge: 'New',
  },
  {
    id: 'metal-folder',
    titleId: 'prod-title-metal-folder',
    descId: 'prod-desc-metal-folder',
    imgId: 'prod-img-metal-folder-5e5g7c',
    title: 'Metal Folder',
    subtitle: 'Precision Bending',
    description:
      'A robust and reliable metal folder built for precision bending of steel, aluminum, and stainless steel. Features an intuitive control panel for fast job changeovers.',
    specs: ['Max Width: 2500mm', 'Thickness: up to 3mm', 'Digital readout'],
    badge: null,
  },
  {
    id: 'metal-folding-machine',
    titleId: 'prod-title-metal-folding-machine',
    descId: 'prod-desc-metal-folding-machine',
    imgId: 'prod-img-metal-folding-machine-4f6h8d',
    title: 'Metal Folding Machine',
    subtitle: 'High-Volume Production',
    description:
      'Built for continuous high-volume production environments. The ARTITECT Metal Folding Machine delivers consistent results shift after shift with minimal maintenance.',
    specs: ['Max Width: 4000mm', 'Servo-electric drive', 'Industry 4.0 ready'],
    badge: null,
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-brand-light h-52">
        {product.badge && (
          <span className="absolute top-4 left-4 z-10 bg-brand-gold text-brand-navy font-inter font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-sm">
            {product.badge}
          </span>
        )}
        <img
          alt={product.title}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="font-inter text-brand-gold text-xs uppercase tracking-widest mb-1">
          {product.subtitle}
        </p>
        <h3
          id={product.titleId}
          className="font-playfair font-bold text-brand-navy text-xl mb-3"
        >
          {product.title}
        </h3>
        <p
          id={product.descId}
          className="font-inter text-gray-600 text-sm leading-relaxed mb-4 flex-1"
        >
          {product.description}
        </p>

        {/* Specs */}
        <ul className="mb-5 space-y-1">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2 font-inter text-xs text-brand-steel">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
              {spec}
            </li>
          ))}
        </ul>

        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 text-brand-gold font-inter font-semibold text-sm uppercase tracking-widest hover:gap-3 transition-all duration-200 group/btn"
        >
          Request Info
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="bg-brand-light py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-brand-gold text-xs uppercase tracking-widest mb-3">
            Our Product Range
          </p>
          <h2
            id="products-section-title"
            className="font-playfair font-bold text-brand-navy text-4xl md:text-5xl mb-4"
          >
            Folding Machines for Every Need
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-5" />
          <p className="font-inter text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to large-scale industrial folding systems,
            ARTITECT MACHINERY offers a complete range of precision sheet metal folding equipment.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
