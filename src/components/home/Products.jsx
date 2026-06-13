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
    tagline: 'Dual-axis precision folding',
    description:
      'Our flagship double folding machine delivers simultaneous dual-axis bending with micron-level accuracy. Ideal for complex sheet metal profiles requiring tight tolerances.',
    specs: ['Up to 4000mm working length', 'Material thickness: 0.5–6mm', 'CNC-controlled back gauge'],
    badge: 'Best Seller',
  },
  {
    id: 'double-folder',
    titleId: 'prod-title-df',
    descId: 'prod-desc-df',
    imgId: 'prod-img-df-7c4d2e',
    name: 'Double Folder',
    tagline: 'Versatile panel forming',
    description:
      'The ARTITECT Double Folder is engineered for high-volume panel production. Its robust frame and servo-driven beam ensure consistent results across every cycle.',
    specs: ['Hydraulic clamping beam', 'Auto-tool change system', 'Touch-screen HMI control'],
    badge: 'Popular',
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-title-smf',
    descId: 'prod-desc-smf',
    imgId: 'prod-img-smf-5e6f3a',
    name: 'Sheet Metal Folder',
    tagline: 'Precision panel bending',
    description:
      'Designed for architectural and HVAC applications, this sheet metal folder handles a wide range of materials with effortless operator control and repeatable accuracy.',
    specs: ['Stainless, aluminium, mild steel', 'Programmable bend sequences', 'Compact footprint design'],
    badge: null,
  },
  {
    id: 'metal-folder-machine',
    titleId: 'prod-title-mfm',
    descId: 'prod-desc-mfm',
    imgId: 'prod-img-mfm-2b8c4d',
    name: 'Metal Folder Machine',
    tagline: 'Heavy-duty industrial forming',
    description:
      'Built for demanding industrial environments, the ARTITECT Metal Folder Machine combines heavy-duty construction with intelligent automation for maximum throughput.',
    specs: ['Up to 8mm mild steel capacity', 'Servo-electric drive system', 'Remote diagnostics ready'],
    badge: 'New',
  },
  {
    id: 'metal-folding-machine',
    titleId: 'prod-title-mfold',
    descId: 'prod-desc-mfold',
    imgId: 'prod-img-mfold-1a9e5f',
    name: 'Metal Folding Machine',
    tagline: 'Automated production folding',
    description:
      'The ARTITECT Metal Folding Machine integrates seamlessly into automated production lines. Its modular design allows rapid tooling changes and minimal downtime.',
    specs: ['Modular tooling system', 'Industry 4.0 connectivity', 'Automatic angle correction'],
    badge: null,
  },
  {
    id: 'metal-folder',
    titleId: 'prod-title-mf',
    descId: 'prod-desc-mf',
    imgId: 'prod-img-mf-6d7a2b',
    name: 'Metal Folder',
    tagline: 'Compact & efficient',
    description:
      'Perfect for workshops and smaller production runs, the ARTITECT Metal Folder delivers professional-grade results in a compact, easy-to-operate package.',
    specs: ['Compact workshop design', 'Manual & CNC versions', 'Quick-change tooling'],
    badge: null,
  },
];

const badgeColors = {
  'Best Seller': 'bg-brand-blue text-white',
  'Popular': 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
  'New': 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
};

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" className="bg-brand-navy py-24 md:py-32" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-sky mb-4 block">
            Our Product Range
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-white mb-5 tracking-tight">
            Machines Built for Precision
          </h2>
          <p className="text-brand-silver text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to fully automated industrial systems — every ARTITECT machine
            is engineered to deliver flawless results, shift after shift.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-brand-steel border border-white/10 rounded-2xl overflow-hidden hover:border-brand-sky/40 hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-300 group flex flex-col"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-brand-navy/50">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[product.badge]}`}>
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-7 flex flex-col flex-1">
                <p className="text-brand-sky text-xs font-semibold uppercase tracking-widest mb-2">
                  {product.tagline}
                </p>
                <h3 id={product.titleId} className="text-xl font-bold text-brand-white mb-3">
                  {product.name}
                </h3>
                <p id={product.descId} className="text-brand-silver text-sm leading-relaxed mb-5 flex-1">
                  {product.description}
                </p>

                {/* Specs */}
                <ul className="space-y-1.5 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-brand-silver">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-flex items-center gap-2 text-brand-sky hover:text-white text-sm font-semibold transition-colors group/link"
                >
                  Request Info
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
