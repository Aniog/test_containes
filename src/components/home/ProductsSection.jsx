import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Dual-action precision folding',
    description:
      'Our flagship double folding machine delivers two precise folds in a single pass, dramatically increasing throughput without sacrificing accuracy. Ideal for high-volume production environments.',
    specs: ['Up to 4mm mild steel', 'Dual-axis control', 'CNC programmable'],
    imgId: 'prod-img-dfm-9a3b1c',
    titleId: 'prod-title-double-folding-machine',
    descId: 'prod-desc-double-folding-machine',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Compact power, professional results',
    description:
      'The ARTITECT Double Folder combines a compact footprint with industrial-grade performance. Perfect for workshops and fabrication shops that demand reliability in a smaller package.',
    specs: ['Hydraulic drive system', 'Auto back-gauge', 'Touch-screen HMI'],
    imgId: 'prod-img-df-7c4e2f',
    titleId: 'prod-title-double-folder',
    descId: 'prod-desc-double-folder',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile folding for every gauge',
    description:
      'Engineered for versatility, our sheet metal folder handles a wide range of gauges and materials. From stainless steel to aluminium, achieve clean, burr-free bends every time.',
    specs: ['Multi-material compatible', 'Adjustable beam angle', 'Safety light curtain'],
    imgId: 'prod-img-smf-2d8a5e',
    titleId: 'prod-title-sheet-metal-folder',
    descId: 'prod-desc-sheet-metal-folder',
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    tagline: 'Industrial-grade, production-ready',
    description:
      'Built for demanding production lines, this heavy-duty sheet metal folding machine offers unmatched rigidity and repeatability. Servo-electric drive ensures energy efficiency and quiet operation.',
    specs: ['Servo-electric drive', 'Up to 6mm capacity', 'Remote diagnostics'],
    imgId: 'prod-img-smfm-1b6c9d',
    titleId: 'prod-title-sheet-metal-folding-machine',
    descId: 'prod-desc-sheet-metal-folding-machine',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'Precision at every angle',
    description:
      'The ARTITECT Metal Folder is designed for precision angle work. Its rigid frame and precision-ground tooling ensure consistent results across long production runs with minimal setup time.',
    specs: ['±0.1° angular accuracy', 'Quick-change tooling', 'Programmable stops'],
    imgId: 'prod-img-mf-5e2a7b',
    titleId: 'prod-title-metal-folder',
    descId: 'prod-desc-metal-folder',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'The complete folding solution',
    description:
      'Our comprehensive metal folding machine integrates advanced automation with intuitive controls. Reduce operator fatigue and increase output with intelligent bend sequencing and memory storage.',
    specs: ['500+ program memory', 'Automated bend sequencing', 'Industry 4.0 ready'],
    imgId: 'prod-img-mfm-3f9d4a',
    titleId: 'prod-title-metal-folding-machine',
    descId: 'prod-desc-metal-folding-machine',
  },
];

const ProductCard = ({ product }) => (
  <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
    {/* Image */}
    <div className="relative overflow-hidden h-56 bg-brand-light">
      <img
        alt={product.name}
        data-strk-img-id={product.imgId}
        data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    {/* Content */}
    <div className="p-7 flex flex-col flex-1">
      <div className="mb-3">
        <span className="font-body text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase">
          {product.tagline}
        </span>
      </div>
      <h3
        id={product.titleId}
        className="font-heading text-brand-dark-text text-xl font-bold mb-3 leading-snug"
      >
        {product.name}
      </h3>
      <p
        id={product.descId}
        className="font-body text-brand-gray text-sm leading-relaxed mb-5 flex-1"
      >
        {product.description}
      </p>

      {/* Specs */}
      <ul className="flex flex-col gap-1.5 mb-6">
        {product.specs.map((spec) => (
          <li key={spec} className="flex items-center gap-2 font-body text-sm text-brand-dark-text">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
            {spec}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="inline-flex items-center gap-2 font-body text-sm font-semibold text-brand-gold hover:text-brand-gold-light transition-colors group/link"
      >
        Request Info
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </a>
    </div>
  </article>
);

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-24 md:py-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="font-body text-brand-gold text-xs font-semibold tracking-[0.25em] uppercase">
              Our Range
            </span>
            <div className="w-8 h-px bg-brand-gold" />
          </div>
          <h2
            id="products-section-title"
            className="font-heading text-brand-dark-text text-4xl md:text-5xl font-bold mb-5"
          >
            Precision Folding Machines
          </h2>
          <p className="font-body text-brand-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Every ARTITECT machine is engineered to deliver consistent, repeatable results —
            from compact workshops to large-scale industrial production.
          </p>
        </div>

        {/* Product grid */}
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
