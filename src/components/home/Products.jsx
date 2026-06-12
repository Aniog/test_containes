import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Dual-action precision folding',
    description:
      'Our flagship double folding machine delivers two precise bends in a single pass, dramatically increasing throughput for high-volume sheet metal fabrication.',
    features: ['Dual-bend in one pass', 'CNC-controlled angles', 'Up to 4mm mild steel', 'Auto back-gauge'],
    imgId: 'prod-img-dfm-9a3b1c',
    titleId: 'prod-title-double-folding-machine',
    descId: 'prod-desc-double-folding-machine',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Compact & versatile',
    description:
      'The ARTITECT Double Folder is engineered for workshops that demand flexibility. Handles a wide range of profiles with minimal setup time.',
    features: ['Quick-change tooling', 'Compact footprint', 'Manual & CNC modes', 'Stainless steel capable'],
    imgId: 'prod-img-df-7c4e2a',
    titleId: 'prod-title-double-folder',
    descId: 'prod-desc-double-folder',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Industrial-grade accuracy',
    description:
      'Built for demanding industrial environments, the ARTITECT Sheet Metal Folder offers unmatched rigidity and repeatability across long production runs.',
    features: ['Heavy-duty frame', 'Programmable sequences', 'Up to 3000mm width', 'Hydraulic clamping'],
    imgId: 'prod-img-smf-2d8f5b',
    titleId: 'prod-title-sheet-metal-folder',
    descId: 'prod-desc-sheet-metal-folder',
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    tagline: 'Precision for every profile',
    description:
      'Versatile and robust, the ARTITECT Metal Folder Machine handles complex profiles with ease. Ideal for HVAC, cladding, and architectural metalwork.',
    features: ['Multi-profile tooling', 'Touch-screen HMI', 'Servo-electric drive', 'Safety light curtains'],
    imgId: 'prod-img-mfm-6e1a9d',
    titleId: 'prod-title-metal-folder-machine',
    descId: 'prod-desc-metal-folder-machine',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'High-speed production folding',
    description:
      'Designed for high-speed production lines, this machine combines speed with precision to meet the tightest tolerances in modern sheet metal work.',
    features: ['High-cycle speed', 'Auto material feed', 'Tolerance ±0.1mm', 'Remote diagnostics'],
    imgId: 'prod-img-mfmx-3b7c4e',
    titleId: 'prod-title-metal-folding-machine',
    descId: 'prod-desc-metal-folding-machine',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'Entry-level professional quality',
    description:
      'The ARTITECT Metal Folder brings professional-grade folding capability to smaller workshops without compromising on build quality or accuracy.',
    features: ['Easy operation', 'Robust steel frame', 'Manual back-gauge', 'Low maintenance'],
    imgId: 'prod-img-mf-5f2d8a',
    titleId: 'prod-title-metal-folder',
    descId: 'prod-desc-metal-folder',
  },
];

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl overflow-hidden border border-brand-light shadow-md transition-all duration-300 flex flex-col ${
        hovered ? 'shadow-2xl -translate-y-1' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-52 bg-brand-steel overflow-hidden">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
        <div className="absolute bottom-3 left-4">
          <span className="bg-brand-accent text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
            {product.tagline}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 id={product.titleId} className="font-serif text-brand-dark text-xl font-bold mb-2">
          {product.name}
        </h3>
        <p id={product.descId} className="text-brand-muted text-sm leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        {/* Features */}
        <ul className="space-y-1 mb-5">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-brand-dark">
              <CheckCircle className="w-4 h-4 text-brand-accent flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center justify-center gap-2 w-full border-2 border-brand-accent text-brand-accent py-2.5 rounded-lg font-semibold text-sm hover:bg-brand-accent hover:text-white transition-all duration-200"
        >
          Enquire Now <ArrowRight className="w-4 h-4" />
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
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-brand-accent text-xs font-semibold tracking-[0.25em] uppercase">
            Our Product Range
          </span>
          <h2
            id="products-section-title"
            className="font-serif text-brand-dark text-3xl md:text-5xl font-bold mt-3 mb-4"
          >
            Machines Built for Precision
          </h2>
          <div className="w-16 h-1 bg-brand-accent rounded-full mx-auto mb-5" />
          <p className="text-brand-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to heavy-duty industrial systems, every ARTITECT machine is engineered to deliver consistent, repeatable results.
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
