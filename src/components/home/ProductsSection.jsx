import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
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
      'Our flagship double folding machine delivers simultaneous dual-axis bending with micron-level accuracy. Ideal for high-volume production environments requiring consistent, repeatable results.',
    specs: ['Up to 4000mm working length', 'Dual-axis simultaneous bending', 'CNC-controlled back gauge', 'Touchscreen HMI interface'],
    badge: 'Best Seller',
  },
  {
    id: 'double-folder',
    titleId: 'prod-title-df',
    descId: 'prod-desc-df',
    imgId: 'prod-img-df-7c4d2e',
    name: 'Double Folder',
    tagline: 'Versatile industrial folder',
    description:
      'The ARTITECT Double Folder combines robust construction with intuitive operation. Engineered for workshops and fabrication shops that demand flexibility without compromising on quality.',
    specs: ['Adjustable folding beam', 'Quick-change tooling system', 'Manual & semi-automatic modes', 'Heavy-gauge steel frame'],
    badge: 'Popular',
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-title-smf',
    descId: 'prod-desc-smf',
    imgId: 'prod-img-smf-5e6f3a',
    name: 'Sheet Metal Folder',
    tagline: 'Precision for every gauge',
    description:
      'Designed for sheet metal fabricators who need reliable, precise folding across a wide range of material gauges. The ARTITECT Sheet Metal Folder handles mild steel, stainless, and aluminium with ease.',
    specs: ['Handles 0.5mm–6mm thickness', 'Stainless & aluminium compatible', 'Programmable fold sequences', 'Safety light curtain included'],
    badge: null,
  },
  {
    id: 'sheet-metal-folding-machine',
    titleId: 'prod-title-smfm',
    descId: 'prod-desc-smfm',
    imgId: 'prod-img-smfm-2b8c4d',
    name: 'Sheet Metal Folding Machine',
    tagline: 'Industrial-grade automation',
    description:
      'A fully automated sheet metal folding machine built for large-scale industrial production. Features servo-electric drive technology for energy efficiency and ultra-precise positioning.',
    specs: ['Servo-electric drive system', 'Automatic material feeding', 'Multi-step programming', 'Remote diagnostics ready'],
    badge: 'New',
  },
  {
    id: 'metal-folder',
    titleId: 'prod-title-mf',
    descId: 'prod-desc-mf',
    imgId: 'prod-img-mf-1a9e5f',
    name: 'Metal Folder',
    tagline: 'Compact and powerful',
    description:
      'The ARTITECT Metal Folder is the go-to solution for smaller workshops and custom fabrication. Compact footprint, powerful performance — perfect for bespoke metalwork and prototyping.',
    specs: ['Compact workshop design', 'Up to 2000mm working length', 'Easy blade adjustment', 'Low maintenance design'],
    badge: null,
  },
  {
    id: 'metal-folding-machine',
    titleId: 'prod-title-mfm',
    descId: 'prod-desc-mfm',
    imgId: 'prod-img-mfm-6d7a8b',
    name: 'Metal Folding Machine',
    tagline: 'High-speed production folding',
    description:
      'Built for speed and endurance, the ARTITECT Metal Folding Machine is engineered for continuous production cycles. Robust, reliable, and ready for the most demanding environments.',
    specs: ['High-cycle production rated', 'Hydraulic clamping beam', 'Integrated angle measurement', 'CE certified & safety compliant'],
    badge: null,
  },
];

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col">
    {/* Image */}
    <div className="relative overflow-hidden bg-surface h-56">
      {product.badge && (
        <div className="absolute top-4 left-4 z-10 bg-gold text-navy text-xs font-bold uppercase tracking-wider px-3 py-1">
          {product.badge}
        </div>
      )}
      <img
        data-strk-img-id={product.imgId}
        data-strk-img={`[${product.descId}] [${product.titleId}]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1">
      <p className="text-steel text-xs font-semibold uppercase tracking-widest mb-1">{product.tagline}</p>
      <h3 id={product.titleId} className="text-navy text-xl font-bold mb-3">{product.name}</h3>
      <p id={product.descId} className="text-muted text-sm leading-relaxed mb-5">{product.description}</p>

      {/* Specs */}
      <ul className="space-y-2 mb-6 flex-1">
        {product.specs.map((spec) => (
          <li key={spec} className="flex items-start gap-2 text-sm text-navy/80">
            <CheckCircle className="w-4 h-4 text-steel mt-0.5 flex-shrink-0" />
            {spec}
          </li>
        ))}
      </ul>

      <button
        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="inline-flex items-center gap-2 text-steel text-sm font-semibold hover:text-sky transition-colors group/btn mt-auto"
      >
        Request Info
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-steel text-sm font-semibold uppercase tracking-widest mb-3">Our Product Range</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy tracking-tight mb-5">
            Machines Built for Precision
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to fully automated industrial systems,
            ARTITECT MACHINERY offers a complete range of sheet metal folding solutions.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-muted mb-4">Need a custom solution or can't find what you're looking for?</p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-navy text-surface px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-steel transition-colors duration-200"
          >
            Talk to Our Engineers
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
