import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Dual-action precision folding',
    description: 'Our flagship double folding machine delivers two precise folds in a single pass, dramatically increasing throughput for high-volume sheet metal fabrication.',
    specs: ['Up to 4mm mild steel', 'Dual-axis control', 'CNC programmable', 'Auto back-gauge'],
    badge: 'Best Seller',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
    imgId: 'prod-img-dfm-9a3b1c',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Compact dual-fold solution',
    description: 'The double folder is engineered for workshops requiring consistent, repeatable dual folds with minimal setup time and maximum operator comfort.',
    specs: ['3mm capacity', 'Digital readout', 'Quick-change tooling', 'Safety guards'],
    badge: 'Popular',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
    imgId: 'prod-img-df-7c4d2e',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile industrial folding',
    description: 'A robust sheet metal folder designed for versatility across a wide range of materials and thicknesses, from light gauge to heavy structural steel.',
    specs: ['Up to 6mm capacity', 'Hydraulic drive', 'Programmable stops', 'Wide bed options'],
    badge: 'Heavy Duty',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
    imgId: 'prod-img-smf-5e6f3a',
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    tagline: 'Professional-grade folding',
    description: 'The metal folder machine combines industrial strength with intuitive controls, making it the preferred choice for professional fabricators worldwide.',
    specs: ['Multi-material support', 'Touch-screen HMI', 'Auto-correction', 'Remote diagnostics'],
    badge: 'Pro Series',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
    imgId: 'prod-img-mfm-2b8c9d',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'High-speed production folding',
    description: 'Built for high-speed production environments, this metal folding machine delivers consistent accuracy at scale with minimal operator intervention.',
    specs: ['High-speed servo', 'Batch programming', 'Auto-loading ready', 'Industry 4.0 ready'],
    badge: 'High Speed',
    titleId: 'prod-mfmx-title',
    descId: 'prod-mfmx-desc',
    imgId: 'prod-img-mfmx-4f1a7b',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'Compact workshop essential',
    description: 'The compact metal folder is the ideal entry-level solution for small workshops and custom fabricators who need reliable, accurate folding without the bulk.',
    specs: ['Compact footprint', 'Manual & CNC modes', 'Easy maintenance', 'Affordable'],
    badge: 'Entry Pro',
    titleId: 'prod-mf-title',
    descId: 'prod-mf-desc',
    imgId: 'prod-img-mf-6d2e8f',
  },
];

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const handleContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" ref={containerRef} className="bg-steel-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-inter font-semibold uppercase tracking-widest mb-3 block">
            Our Product Range
          </span>
          <h2 className="font-barlow font-bold text-4xl md:text-5xl text-steel-100 tracking-tight mb-4">
            Engineered for Every Application
          </h2>
          <p className="font-inter text-steel-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to high-speed industrial systems — every ARTITECT machine is built with uncompromising precision.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-steel-800 border border-steel-700 rounded-2xl overflow-hidden hover:border-gold-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] sheet metal folding machine industrial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-800/80 to-transparent" />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-500 text-steel-900 text-xs font-inter font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gold-500 text-xs font-inter font-semibold uppercase tracking-widest mb-1">
                  {product.tagline}
                </p>
                <h3
                  id={product.titleId}
                  className="font-barlow font-bold text-xl text-steel-100 mb-3"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="font-inter text-steel-400 text-sm leading-relaxed mb-5 flex-1"
                >
                  {product.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {product.specs.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-1.5 text-steel-300 text-xs font-inter"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold-500 shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleContact}
                  className="w-full flex items-center justify-center gap-2 border border-gold-500/40 hover:border-gold-500 hover:bg-gold-500/10 text-gold-500 font-inter font-semibold text-sm py-2.5 rounded-xl transition-all duration-200"
                >
                  Request Info
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
