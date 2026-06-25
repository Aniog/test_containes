import { useEffect, useRef } from 'react';
import { ArrowRight, Layers, Zap, Settings } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    imgId: 'prod-img-dfm-9a3b1c',
    titleId: 'prod-title-dfm',
    descId: 'prod-desc-dfm',
    title: 'Double Folding Machine',
    description: 'High-performance double folding machine engineered for complex sheet metal profiles. Delivers consistent, precise folds with minimal setup time.',
    icon: Layers,
    specs: ['Up to 4mm steel capacity', 'CNC controlled', 'Auto back gauge'],
    badge: 'Best Seller',
  },
  {
    id: 'double-folder',
    imgId: 'prod-img-df-7c4d2e',
    titleId: 'prod-title-df',
    descId: 'prod-desc-df',
    title: 'Double Folder',
    description: 'Compact and versatile double folder designed for high-volume production environments. Ideal for HVAC, roofing, and cladding applications.',
    icon: Zap,
    specs: ['Hydraulic drive system', 'Touch-screen interface', 'Quick-change tooling'],
    badge: 'Popular',
  },
  {
    id: 'sheet-metal-folder',
    imgId: 'prod-img-smf-5e6f3a',
    titleId: 'prod-title-smf',
    descId: 'prod-desc-smf',
    title: 'Sheet Metal Folder',
    description: 'Precision sheet metal folder built for accuracy and repeatability. Handles a wide range of materials from mild steel to stainless and aluminum.',
    icon: Settings,
    specs: ['Multi-material compatible', 'Programmable sequences', 'Safety light curtains'],
    badge: null,
  },
  {
    id: 'metal-folding-machine',
    imgId: 'prod-img-mfm-2b8c4d',
    titleId: 'prod-title-mfm',
    descId: 'prod-desc-mfm',
    title: 'Metal Folding Machine',
    description: 'Industrial-grade metal folding machine for heavy-duty applications. Engineered for continuous operation in demanding manufacturing environments.',
    icon: Layers,
    specs: ['Heavy-duty frame', 'Servo-electric drive', 'Remote diagnostics'],
    badge: 'New',
  },
  {
    id: 'metal-folder',
    imgId: 'prod-img-mf-6d9e5f',
    titleId: 'prod-title-mf',
    descId: 'prod-desc-mf',
    title: 'Metal Folder',
    description: 'Reliable and efficient metal folder for workshops and fabrication shops. Easy to operate with intuitive controls and robust construction.',
    icon: Zap,
    specs: ['Compact footprint', 'Manual & CNC modes', 'Low maintenance'],
    badge: null,
  },
  {
    id: 'metal-folder-machine',
    imgId: 'prod-img-mfmx-1a7b3c',
    titleId: 'prod-title-mfmx',
    descId: 'prod-desc-mfmx',
    title: 'Metal Folder Machine',
    description: 'Advanced metal folder machine combining speed and precision for modern fabrication. Features automated material handling for maximum throughput.',
    icon: Settings,
    specs: ['Automated feeding', 'High-speed operation', 'Industry 4.0 ready'],
    badge: 'Advanced',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="bg-brand-navy py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs uppercase tracking-[0.4em] font-medium">
            Our Product Range
          </span>
          <h2 id="products-section-title" className="text-3xl md:text-5xl font-bold text-brand-white mt-3 mb-4">
            Folding Machines Built to Last
          </h2>
          <div className="h-1 w-16 bg-brand-gold mx-auto mb-6" />
          <p id="products-section-subtitle" className="text-brand-silver text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to heavy-duty industrial machines — every ARTITECT product is precision-engineered for performance and reliability.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="group bg-brand-dark-card border border-brand-steel/40 rounded-2xl overflow-hidden hover:border-brand-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/10 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    alt={product.title}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-subtitle] [products-section-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-card/80 to-transparent" />
                  {product.badge && (
                    <span className="absolute top-4 right-4 bg-brand-gold text-brand-navy text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 bg-brand-navy/80 rounded-xl p-2">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 id={product.titleId} className="text-brand-white text-xl font-semibold mb-3 group-hover:text-brand-gold transition-colors">
                    {product.title}
                  </h3>
                  <p id={product.descId} className="text-brand-silver text-sm leading-relaxed mb-5 flex-1">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <ul className="flex flex-col gap-2 mb-6">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-brand-silver text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={handleContact}
                    className="flex items-center justify-center gap-2 border border-brand-gold/50 text-brand-gold rounded-full px-6 py-2.5 text-sm font-medium hover:bg-brand-gold hover:text-brand-navy transition-all duration-200 group/btn"
                  >
                    Request Info
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
