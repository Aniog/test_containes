import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding',
    slug: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Dual-Axis Precision',
    description:
      'Our flagship double folding machine delivers simultaneous dual-axis bending with micron-level accuracy. Engineered for high-volume production environments demanding consistent, repeatable results.',
    specs: ['Max Sheet Width: 3200mm', 'Folding Angle: 0–135°', 'Material Thickness: up to 3mm', 'CNC Controlled'],
    highlights: ['Simultaneous dual-axis operation', 'Automatic back gauge system', 'Touch-screen CNC interface'],
    imgId: 'prod-double-fold-8f2a9c',
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
  },
  {
    id: 'double-folder',
    slug: 'double-folder',
    name: 'Double Folder',
    tagline: 'Versatile & Compact',
    description:
      'The ARTITECT Double Folder combines compact footprint with industrial-grade capability. Ideal for workshops and fabrication shops requiring flexible folding operations across varied sheet metal profiles.',
    specs: ['Max Sheet Width: 2500mm', 'Folding Angle: 0–120°', 'Material Thickness: up to 2.5mm', 'Hydraulic Drive'],
    highlights: ['Space-efficient design', 'Quick tooling changeover', 'Hydraulic clamping beam'],
    imgId: 'prod-double-folder-3b7d1e',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    slug: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Industrial Standard',
    description:
      'Built to handle the full spectrum of sheet metal folding tasks, this machine is the industry standard for precision bending. Robust construction ensures decades of reliable service in demanding environments.',
    specs: ['Max Sheet Width: 4000mm', 'Folding Angle: 0–150°', 'Material Thickness: up to 4mm', 'Servo-Electric Drive'],
    highlights: ['Heavy-duty steel frame', 'Programmable bend sequences', 'Auto-crowning system'],
    imgId: 'prod-sheet-folder-9c4f2a',
    titleId: 'prod-sheet-folder-title',
    descId: 'prod-sheet-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    slug: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'High-Speed Production',
    description:
      'Designed for high-throughput production lines, the ARTITECT Metal Folding Machine delivers rapid cycle times without compromising on accuracy. Advanced servo technology ensures energy efficiency and precision.',
    specs: ['Max Sheet Width: 3600mm', 'Folding Angle: 0–135°', 'Material Thickness: up to 3.5mm', 'Servo-Hydraulic'],
    highlights: ['High-speed servo drives', 'Energy recovery system', 'Remote diagnostics ready'],
    imgId: 'prod-metal-fold-5e8b3d',
    titleId: 'prod-metal-fold-title',
    descId: 'prod-metal-fold-desc',
  },
  {
    id: 'metal-folder',
    slug: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'Precision Craftsmanship',
    description:
      'The ARTITECT Metal Folder is engineered for precision craftsmanship in architectural metalwork, HVAC, and custom fabrication. Delivers clean, sharp bends on a wide range of metals including stainless steel and aluminium.',
    specs: ['Max Sheet Width: 2000mm', 'Folding Angle: 0–135°', 'Material Thickness: up to 2mm', 'Electric Drive'],
    highlights: ['Stainless & aluminium capable', 'Precision back gauge', 'Low-noise operation'],
    imgId: 'prod-metal-folder-2a6c9f',
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
  },
  {
    id: 'sheet-metal-folding',
    slug: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    tagline: 'Complete Solution',
    description:
      'A complete sheet metal folding solution for manufacturers who demand versatility. Handles complex multi-bend profiles with ease, supported by intuitive CNC programming and a comprehensive tooling library.',
    specs: ['Max Sheet Width: 3000mm', 'Folding Angle: 0–140°', 'Material Thickness: up to 3mm', 'Full CNC'],
    highlights: ['Multi-bend profile capability', 'Extensive tooling library', 'Industry 4.0 ready'],
    imgId: 'prod-sm-folding-7d1e4b',
    titleId: 'prod-sm-folding-title',
    descId: 'prod-sm-folding-desc',
  },
];

const ProductCard = ({ product }) => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="group bg-steel-800 border border-steel-600 hover:border-gold-500/60 transition-all duration-300 flex flex-col overflow-hidden shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/50">
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-steel-700">
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-900/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="bg-gold-500 text-steel-900 text-xs font-semibold px-3 py-1 tracking-widest uppercase">
            {product.tagline}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3
          id={product.titleId}
          className="text-steel-100 font-bold text-xl mb-2 group-hover:text-gold-400 transition-colors duration-200"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="text-steel-400 text-sm leading-relaxed mb-5 flex-1"
        >
          {product.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5">
          {product.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-steel-200 text-sm">
              <CheckCircle className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Specs */}
        <div className="border-t border-steel-600/60 pt-4 mb-5">
          <div className="grid grid-cols-2 gap-1.5">
            {product.specs.map((spec) => (
              <span key={spec} className="text-steel-400 text-xs">
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={scrollToContact}
          className="inline-flex items-center justify-center gap-2 border border-gold-500/60 hover:bg-gold-500 hover:border-gold-500 text-gold-500 hover:text-steel-900 font-semibold text-xs tracking-widest uppercase px-6 py-3 transition-all duration-200 group/btn"
        >
          Request Quote
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
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
    <section id="products" ref={containerRef} className="bg-steel-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase">
              Our Product Range
            </span>
          </div>
          <h2
            id="products-section-title"
            className="text-3xl md:text-4xl font-extrabold text-steel-100 mb-4"
          >
            Sheet Metal Folding Machines
          </h2>
          <p className="text-steel-400 text-lg max-w-2xl leading-relaxed">
            From compact workshop folders to high-capacity industrial systems — every ARTITECT machine
            is engineered to deliver precision, reliability, and long-term value.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
