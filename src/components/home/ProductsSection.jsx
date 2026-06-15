import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    titleId: 'prod-title-dfm',
    descId: 'prod-desc-dfm',
    imgId: 'prod-img-dfm-9a3b1c',
    title: 'Double Folding Machine',
    description:
      'High-performance double folding machine engineered for complex sheet metal profiles. Delivers consistent, precise bends on both sides in a single pass — maximizing throughput and accuracy.',
    specs: ['Up to 4mm mild steel', 'Dual-axis folding', 'CNC controlled'],
    badge: 'Best Seller',
  },
  {
    id: 'double-folder',
    titleId: 'prod-title-df',
    descId: 'prod-desc-df',
    imgId: 'prod-img-df-7c4d2e',
    title: 'Double Folder',
    description:
      'Compact and versatile double folder designed for workshops and production lines. Ideal for HVAC, roofing, and architectural metalwork requiring tight, clean folds.',
    specs: ['Manual & hydraulic options', 'Adjustable beam', 'Quick-change tooling'],
    badge: 'Popular',
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-title-smf',
    descId: 'prod-desc-smf',
    imgId: 'prod-img-smf-5e6f3a',
    title: 'Sheet Metal Folder',
    description:
      'Robust sheet metal folder built for heavy-duty industrial applications. Handles a wide range of materials and thicknesses with exceptional repeatability and operator safety.',
    specs: ['Up to 6mm capacity', 'Programmable stops', 'Safety beam guard'],
    badge: null,
  },
  {
    id: 'sheet-metal-folding-machine',
    titleId: 'prod-title-smfm',
    descId: 'prod-desc-smfm',
    imgId: 'prod-img-smfm-2b8c4d',
    title: 'Sheet Metal Folding Machine',
    description:
      'Full-featured sheet metal folding machine with advanced CNC control. Perfect for high-volume production environments demanding precision, speed, and minimal setup time.',
    specs: ['CNC touchscreen', 'Auto back gauge', 'Multi-profile memory'],
    badge: 'New',
  },
  {
    id: 'metal-folder',
    titleId: 'prod-title-mf',
    descId: 'prod-desc-mf',
    imgId: 'prod-img-mf-1a9e5f',
    title: 'Metal Folder',
    description:
      'Versatile metal folder suitable for stainless steel, aluminium, and mild steel. Engineered for precision edge folding in signage, enclosures, and custom fabrication.',
    specs: ['Multi-material capable', 'Adjustable clamping', 'Portable options'],
    badge: null,
  },
  {
    id: 'metal-folding-machine',
    titleId: 'prod-title-mfm',
    descId: 'prod-desc-mfm',
    imgId: 'prod-img-mfm-3d7b6c',
    title: 'Metal Folding Machine',
    description:
      'Industrial-grade metal folding machine combining power and precision. Features servo-driven beam control and intuitive programming for complex multi-bend sequences.',
    specs: ['Servo-driven beam', 'Multi-bend sequences', 'Remote diagnostics'],
    badge: null,
  },
];

const ProductCard = ({ product }) => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="group bg-[#1A3A5C] border border-[#C9A84C]/20 hover:border-[#C9A84C]/60 transition-all duration-300 flex flex-col overflow-hidden">
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
          <span
            className="absolute top-4 left-4 bg-[#C9A84C] text-[#0D1B2A] text-xs font-bold px-3 py-1 tracking-widest uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <h3
          id={product.titleId}
          className="text-xl font-bold text-white mb-3"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {product.title}
        </h3>
        <p
          id={product.descId}
          className="text-[#8A9BB0] text-sm leading-relaxed mb-5 flex-1"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {product.description}
        </p>

        {/* Specs */}
        <ul className="flex flex-col gap-2 mb-6">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#C9A84C] flex-shrink-0" />
              <span className="text-xs text-[#8A9BB0]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {spec}
              </span>
            </li>
          ))}
        </ul>

        <button
          onClick={scrollToContact}
          className="flex items-center gap-2 text-[#C9A84C] text-xs font-bold tracking-widest uppercase hover:gap-4 transition-all duration-200 group/btn"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Request Info
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
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
    <section id="products" ref={containerRef} className="bg-[#0D1B2A] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#C9A84C]" />
            <span
              className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Our Range
            </span>
          </div>
          <h2
            id="products-section-title"
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Folding Machine
            <br />
            <span className="text-[#C9A84C]">Product Line</span>
          </h2>
          <p className="text-[#8A9BB0] text-base max-w-xl leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            From compact workshop folders to fully automated CNC folding systems — every ARTITECT machine is built to deliver uncompromising precision.
          </p>
        </div>

        {/* Grid */}
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
