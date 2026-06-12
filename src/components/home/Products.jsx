import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    titleId: 'prod-title-dfm',
    descId: 'prod-desc-dfm',
    imgId: 'prod-img-dfm-9a3b1c',
    name: 'Double Folding Machine',
    tagline: 'Dual-action precision folding',
    description:
      'Our flagship double folding machine delivers two precise folds in a single pass, dramatically increasing throughput for high-volume sheet metal fabrication operations.',
    specs: ['Up to 4mm mild steel', '3200mm working length', 'CNC controlled'],
    badge: 'Best Seller',
  },
  {
    id: 'double-folder',
    titleId: 'prod-title-df',
    descId: 'prod-desc-df',
    imgId: 'prod-img-df-7c4d2e',
    name: 'Double Folder',
    tagline: 'Compact industrial performance',
    description:
      'The ARTITECT Double Folder combines a compact footprint with industrial-grade performance, ideal for workshops requiring versatile folding capabilities without sacrificing floor space.',
    specs: ['Up to 3mm stainless', '2500mm working length', 'Hydraulic drive'],
    badge: 'Popular',
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-title-smf',
    descId: 'prod-desc-smf',
    imgId: 'prod-img-smf-5e6f3a',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile precision for every gauge',
    description:
      'Engineered for versatility, the ARTITECT Sheet Metal Folder handles a wide range of gauges and materials with consistent, repeatable accuracy across every production run.',
    specs: ['Multi-gauge capability', '1600–4000mm options', 'Digital angle readout'],
    badge: null,
  },
  {
    id: 'metal-folding-machine',
    titleId: 'prod-title-mfm',
    descId: 'prod-desc-mfm',
    imgId: 'prod-img-mfm-2b8c9d',
    name: 'Metal Folding Machine',
    tagline: 'Heavy-duty industrial folder',
    description:
      'Built for the most demanding industrial environments, the ARTITECT Metal Folding Machine delivers uncompromising power and precision for thick-gauge metal fabrication.',
    specs: ['Up to 6mm mild steel', '4000mm working length', 'Servo-electric drive'],
    badge: 'Heavy Duty',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
              Our Product Range
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2
            id="products-heading"
            className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-4"
          >
            Precision Folding Machines
          </h2>
          <p className="text-muted-text text-lg max-w-2xl mx-auto leading-relaxed">
            Every ARTITECT machine is engineered to deliver consistent, repeatable accuracy — from compact workshop folders to heavy-duty industrial systems.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-56 bg-surface-dark">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-heading]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-steel text-xs font-semibold tracking-widest uppercase mb-1">
                      {product.tagline}
                    </p>
                    <h3 id={product.titleId} className="text-2xl font-bold text-navy">
                      {product.name}
                    </h3>
                  </div>
                </div>

                <p id={product.descId} className="text-muted-text leading-relaxed mb-6 text-sm">
                  {product.description}
                </p>

                {/* Specs */}
                <ul className="flex flex-wrap gap-2 mb-6">
                  {product.specs.map((spec) => (
                    <li
                      key={spec}
                      className="bg-surface text-navy text-xs font-medium px-3 py-1.5 rounded-full border border-border"
                    >
                      {spec}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 text-steel font-semibold text-sm hover:text-sky-accent transition-colors group/btn"
                >
                  Request Specifications
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
