import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

// Static img IDs defined as module-level constants so the build validator
// can resolve them as static string literals (not dynamic member expressions).
const IMG_DFM  = 'prod-img-dfm-3a7b2c';
const IMG_DF   = 'prod-img-df-8e4f1a';
const IMG_SMF  = 'prod-img-smf-2d9c5e';
const IMG_SMFM = 'prod-img-smfm-6b1d8f';
const IMG_MF   = 'prod-img-mf-4c7a3b';
const IMG_MFM  = 'prod-img-mfm-9e2f7d';

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Dual-Axis Precision',
    description:
      'Our flagship double folding machine delivers simultaneous dual-axis bending with micron-level accuracy. Ideal for high-volume production environments requiring consistent, repeatable folds.',
    specs: ['Bending Length: up to 4000mm', 'Material Thickness: 0.5–6mm', 'Folding Angle: 0–135°', 'CNC Control System'],
    badge: 'Best Seller',
    titleId: 'prod-title-double-folding-machine',
    descId: 'prod-desc-double-folding-machine',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Compact & Versatile',
    description:
      'The ARTITECT Double Folder combines a compact footprint with industrial-grade performance. Perfect for workshops and fabrication shops needing flexibility without sacrificing precision.',
    specs: ['Bending Length: up to 2500mm', 'Material Thickness: 0.3–4mm', 'Hydraulic Drive', 'Touch-Screen Interface'],
    badge: 'Popular',
    titleId: 'prod-title-double-folder',
    descId: 'prod-desc-double-folder',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Industrial Workhorse',
    description:
      'Built for demanding industrial applications, the Sheet Metal Folder handles a wide range of materials and thicknesses. Robust construction ensures years of reliable operation.',
    specs: ['Bending Length: up to 3000mm', 'Material Thickness: 0.5–8mm', 'Servo-Electric Drive', 'Auto Back-Gauge'],
    badge: null,
    titleId: 'prod-title-sheet-metal-folder',
    descId: 'prod-desc-sheet-metal-folder',
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    tagline: 'High-Speed Production',
    description:
      'Engineered for high-speed production lines, this machine integrates seamlessly with automated workflows. Advanced tooling options allow complex profiles in a single setup.',
    specs: ['Bending Length: up to 5000mm', 'Material Thickness: 0.5–10mm', 'Programmable Sequences', 'Remote Diagnostics'],
    badge: 'New',
    titleId: 'prod-title-sheet-metal-folding-machine',
    descId: 'prod-desc-sheet-metal-folding-machine',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'Precision at Every Angle',
    description:
      'The ARTITECT Metal Folder is designed for precision bending of steel, aluminium, and stainless steel. Its rigid frame and precision-ground beam ensure consistent results across every batch.',
    specs: ['Bending Length: up to 3500mm', 'Material Thickness: 0.4–6mm', 'Electro-Hydraulic System', 'Safety Light Curtain'],
    badge: null,
    titleId: 'prod-title-metal-folder',
    descId: 'prod-desc-metal-folder',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'Smart Automation Ready',
    description:
      'Our most advanced metal folding machine features Industry 4.0 connectivity, real-time monitoring, and predictive maintenance alerts — keeping your production line running at peak efficiency.',
    specs: ['Bending Length: up to 6000mm', 'Material Thickness: 0.5–12mm', 'IoT-Ready Platform', 'Multi-Axis CNC'],
    badge: 'Premium',
    titleId: 'prod-title-metal-folding-machine',
    descId: 'prod-desc-metal-folding-machine',
  },
];

const CardBody = ({ p }) => (
  <div className="p-7 flex flex-col flex-1">
    <p className="text-brand-gold font-heading font-semibold text-xs tracking-widest uppercase mb-2">{p.tagline}</p>
    <h3 id={p.titleId} className="font-heading font-bold text-brand-navy text-xl mb-3">{p.name}</h3>
    <p id={p.descId} className="font-body text-brand-steel/80 text-sm leading-relaxed mb-5">{p.description}</p>
    <ul className="space-y-1.5 mb-6 flex-1">
      {p.specs.map((spec) => (
        <li key={spec} className="flex items-center gap-2 text-brand-navy/70 text-xs font-body">
          <ChevronRight size={12} className="text-brand-gold flex-shrink-0" />
          {spec}
        </li>
      ))}
    </ul>
    <button
      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
      className="mt-auto flex items-center gap-2 text-brand-steel font-heading font-semibold text-sm hover:text-brand-gold transition-colors bg-transparent border-none cursor-pointer p-0 group"
    >
      Request Info
      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
);

const ProductsSection = () => {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'double', label: 'Double Folder Series' },
    { id: 'sheet', label: 'Sheet Metal Series' },
    { id: 'metal', label: 'Metal Folder Series' },
  ];

  const filtered = products.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'double') return p.id.startsWith('double');
    if (filter === 'sheet') return p.id.startsWith('sheet');
    if (filter === 'metal') return p.id.startsWith('metal');
    return true;
  });

  const filteredIds = new Set(filtered.map((p) => p.id));

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filter]);

  return (
    <section id="products" ref={containerRef} className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-gold font-heading font-semibold text-xs tracking-[0.3em] uppercase mb-4">
            Our Product Range
          </p>
          <h2
            id="products-title"
            className="font-heading font-extrabold text-brand-navy text-4xl lg:text-5xl mb-5"
          >
            Folding Machines for Every Need
          </h2>
          <p
            id="products-subtitle"
            className="font-body text-brand-steel/80 text-lg max-w-2xl mx-auto"
          >
            From compact workshop folders to large-scale industrial systems, ARTITECT MACHINERY
            offers a complete range of precision sheet metal folding solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`font-heading font-semibold text-sm rounded-full px-6 py-2.5 border transition-all duration-200 cursor-pointer ${
                filter === cat.id
                  ? 'bg-brand-navy text-brand-white border-brand-navy'
                  : 'bg-transparent text-brand-steel border-brand-silver/40 hover:border-brand-navy hover:text-brand-navy'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid — each card uses a module-level constant for data-strk-img-id
            so the build validator can resolve it as a static string literal. */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Double Folding Machine */}
          {filteredIds.has('double-folding-machine') && (() => {
            const p = products[0];
            return (
              <article key={p.id} className="bg-brand-white rounded-2xl overflow-hidden shadow-md border border-brand-silver/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative overflow-hidden h-52 bg-brand-light">
                  <img alt={p.name} data-strk-img-id="prod-img-dfm-3a7b2c" data-strk-img={`[${p.descId}] [${p.titleId}] sheet metal folding machine industrial`} data-strk-img-ratio="4x3" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" className="w-full h-full object-cover" />
                  {p.badge && <span className="absolute top-4 left-4 bg-brand-gold text-brand-navy font-heading font-bold text-xs px-3 py-1 rounded-full">{p.badge}</span>}
                </div>
                <CardBody p={p} />
              </article>
            );
          })()}

          {/* Double Folder */}
          {filteredIds.has('double-folder') && (() => {
            const p = products[1];
            return (
              <article key={p.id} className="bg-brand-white rounded-2xl overflow-hidden shadow-md border border-brand-silver/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative overflow-hidden h-52 bg-brand-light">
                  <img alt={p.name} data-strk-img-id="prod-img-df-8e4f1a" data-strk-img={`[${p.descId}] [${p.titleId}] sheet metal folding machine industrial`} data-strk-img-ratio="4x3" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" className="w-full h-full object-cover" />
                  {p.badge && <span className="absolute top-4 left-4 bg-brand-gold text-brand-navy font-heading font-bold text-xs px-3 py-1 rounded-full">{p.badge}</span>}
                </div>
                <CardBody p={p} />
              </article>
            );
          })()}

          {/* Sheet Metal Folder */}
          {filteredIds.has('sheet-metal-folder') && (() => {
            const p = products[2];
            return (
              <article key={p.id} className="bg-brand-white rounded-2xl overflow-hidden shadow-md border border-brand-silver/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative overflow-hidden h-52 bg-brand-light">
                  <img alt={p.name} data-strk-img-id="prod-img-smf-2d9c5e" data-strk-img={`[${p.descId}] [${p.titleId}] sheet metal folding machine industrial`} data-strk-img-ratio="4x3" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" className="w-full h-full object-cover" />
                  {p.badge && <span className="absolute top-4 left-4 bg-brand-gold text-brand-navy font-heading font-bold text-xs px-3 py-1 rounded-full">{p.badge}</span>}
                </div>
                <CardBody p={p} />
              </article>
            );
          })()}

          {/* Sheet Metal Folding Machine */}
          {filteredIds.has('sheet-metal-folding-machine') && (() => {
            const p = products[3];
            return (
              <article key={p.id} className="bg-brand-white rounded-2xl overflow-hidden shadow-md border border-brand-silver/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative overflow-hidden h-52 bg-brand-light">
                  <img alt={p.name} data-strk-img-id="prod-img-smfm-6b1d8f" data-strk-img={`[${p.descId}] [${p.titleId}] sheet metal folding machine industrial`} data-strk-img-ratio="4x3" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" className="w-full h-full object-cover" />
                  {p.badge && <span className="absolute top-4 left-4 bg-brand-gold text-brand-navy font-heading font-bold text-xs px-3 py-1 rounded-full">{p.badge}</span>}
                </div>
                <CardBody p={p} />
              </article>
            );
          })()}

          {/* Metal Folder */}
          {filteredIds.has('metal-folder') && (() => {
            const p = products[4];
            return (
              <article key={p.id} className="bg-brand-white rounded-2xl overflow-hidden shadow-md border border-brand-silver/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative overflow-hidden h-52 bg-brand-light">
                  <img alt={p.name} data-strk-img-id="prod-img-mf-4c7a3b" data-strk-img={`[${p.descId}] [${p.titleId}] sheet metal folding machine industrial`} data-strk-img-ratio="4x3" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" className="w-full h-full object-cover" />
                  {p.badge && <span className="absolute top-4 left-4 bg-brand-gold text-brand-navy font-heading font-bold text-xs px-3 py-1 rounded-full">{p.badge}</span>}
                </div>
                <CardBody p={p} />
              </article>
            );
          })()}

          {/* Metal Folding Machine */}
          {filteredIds.has('metal-folding-machine') && (() => {
            const p = products[5];
            return (
              <article key={p.id} className="bg-brand-white rounded-2xl overflow-hidden shadow-md border border-brand-silver/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative overflow-hidden h-52 bg-brand-light">
                  <img alt={p.name} data-strk-img-id="prod-img-mfm-9e2f7d" data-strk-img={`[${p.descId}] [${p.titleId}] sheet metal folding machine industrial`} data-strk-img-ratio="4x3" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" className="w-full h-full object-cover" />
                  {p.badge && <span className="absolute top-4 left-4 bg-brand-gold text-brand-navy font-heading font-bold text-xs px-3 py-1 rounded-full">{p.badge}</span>}
                </div>
                <CardBody p={p} />
              </article>
            );
          })()}

        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
