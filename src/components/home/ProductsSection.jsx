import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    imgId: 'prod-img-dfm-3k8p2x',
    titleId: 'prod-title-double-folding-machine',
    descId: 'prod-desc-double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Dual-action precision folding',
    description: 'Our flagship double folding machine delivers simultaneous dual-fold operations with micron-level accuracy. Ideal for high-volume production environments requiring consistent, repeatable bends.',
    specs: ['Max Thickness: 3mm Steel', 'Folding Length: Up to 3000mm', 'Dual Beam System', 'CNC Controlled'],
    badge: 'Best Seller',
  },
  {
    id: 'double-folder',
    imgId: 'prod-img-df-9m4r7y',
    titleId: 'prod-title-double-folder',
    descId: 'prod-desc-double-folder',
    name: 'Double Folder',
    tagline: 'Compact dual-fold efficiency',
    description: 'The ARTITECT Double Folder combines a compact footprint with powerful dual-fold capability. Perfect for workshops and mid-scale fabrication facilities needing versatility without compromise.',
    specs: ['Max Thickness: 2.5mm Steel', 'Folding Length: Up to 2500mm', 'Hydraulic Drive', 'Touch Screen Interface'],
    badge: 'Popular',
  },
  {
    id: 'sheet-metal-folder',
    imgId: 'prod-img-smf-6j1w5n',
    titleId: 'prod-title-sheet-metal-folder',
    descId: 'prod-desc-sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile sheet forming',
    description: 'Engineered for versatility, the ARTITECT Sheet Metal Folder handles a wide range of materials and thicknesses. Its intuitive controls make it accessible for operators of all skill levels.',
    specs: ['Max Thickness: 4mm Mild Steel', 'Folding Length: Up to 4000mm', 'Servo-Electric Drive', 'Auto Back Gauge'],
    badge: 'Versatile',
  },
  {
    id: 'sheet-metal-folding-machine',
    imgId: 'prod-img-smfm-2b9e4c',
    titleId: 'prod-title-sheet-metal-folding-machine',
    descId: 'prod-desc-sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    tagline: 'Industrial-grade performance',
    description: 'Built for demanding industrial applications, this heavy-duty sheet metal folding machine offers unmatched rigidity and precision. Handles stainless steel, aluminum, and galvanized sheets with ease.',
    specs: ['Max Thickness: 6mm Steel', 'Folding Length: Up to 6000mm', 'Heavy-Duty Frame', 'Multi-Axis CNC'],
    badge: 'Heavy Duty',
  },
  {
    id: 'metal-folder',
    imgId: 'prod-img-mf-5h3t8v',
    titleId: 'prod-title-metal-folder',
    descId: 'prod-desc-metal-folder',
    name: 'Metal Folder',
    tagline: 'Precision at every angle',
    description: 'The ARTITECT Metal Folder is designed for precision angle forming across diverse metal types. Its robust construction ensures long service life even in continuous production environments.',
    specs: ['Max Thickness: 3mm Steel', 'Folding Length: Up to 3200mm', 'Pneumatic Clamping', 'Digital Angle Display'],
    badge: 'Reliable',
  },
  {
    id: 'metal-folding-machine',
    imgId: 'prod-img-mfm-7q6s1d',
    titleId: 'prod-title-metal-folding-machine',
    descId: 'prod-desc-metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'Complete folding solutions',
    description: 'Our comprehensive metal folding machine range covers every production need — from light-gauge architectural panels to heavy structural components. Customizable configurations available.',
    specs: ['Max Thickness: 5mm Steel', 'Folding Length: Up to 5000mm', 'Modular Design', 'Remote Diagnostics'],
    badge: 'Customizable',
  },
];

const badgeColors = {
  'Best Seller': 'bg-brand-gold text-brand-navy',
  'Popular': 'bg-brand-blue text-white',
  'Versatile': 'bg-emerald-600 text-white',
  'Heavy Duty': 'bg-red-700 text-white',
  'Reliable': 'bg-purple-700 text-white',
  'Customizable': 'bg-teal-600 text-white',
};

const ProductCard = ({ product }) => (
  <div className="group bg-brand-steel rounded-2xl overflow-hidden border border-brand-gold/15 hover:border-brand-gold/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col">
    {/* Image */}
    <div className="relative overflow-hidden h-52">
      <img
        alt={product.name}
        data-strk-img-id={product.imgId}
        data-strk-img={`[${product.descId}] [${product.titleId}] sheet metal folding machine industrial`}
        data-strk-img-ratio="3x2"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-steel/80 to-transparent" />
      {/* Badge */}
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${badgeColors[product.badge]}`}
        style={{ fontFamily: 'Montserrat, sans-serif' }}>
        {product.badge}
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1">
      <p className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        {product.tagline}
      </p>
      <h3
        id={product.titleId}
        className="text-white font-bold text-xl mb-3"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {product.name}
      </h3>
      <p id={product.descId} className="text-brand-silver text-sm leading-relaxed mb-5 flex-1">
        {product.description}
      </p>

      {/* Specs */}
      <ul className="space-y-2 mb-6">
        {product.specs.map((spec) => (
          <li key={spec} className="flex items-center gap-2 text-sm text-brand-silver">
            <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
            {spec}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="flex items-center justify-center gap-2 w-full border border-brand-gold/50 text-brand-gold py-3 rounded-lg text-sm font-semibold hover:bg-brand-gold hover:text-brand-navy transition-all duration-200 cursor-pointer"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        Request Info
        <ArrowRight className="w-4 h-4" />
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
    <section id="products" ref={containerRef} className="bg-brand-navy py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-5 py-2 mb-6">
            <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our Product Range
            </span>
          </div>
          <h2
            className="text-white font-bold mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Precision Folding Machines
          </h2>
          <p className="text-brand-silver text-lg max-w-2xl mx-auto leading-relaxed">
            From compact double folders to heavy-duty industrial folding machines — every ARTITECT machine is engineered for accuracy, longevity, and ease of use.
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
