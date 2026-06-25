import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding',
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
    imgId: 'prod-img-double-folding-9a3b1c',
    title: 'Double Folding Machine',
    subtitle: 'AM-DF Series',
    description:
      'High-performance double folding machine engineered for complex sheet metal profiles. Delivers consistent, repeatable bends with exceptional accuracy across high-volume production runs.',
    specs: ['Folding Length: up to 3000mm', 'Material Thickness: 0.5–4mm', 'Bending Angle: 0–135°'],
  },
  {
    id: 'double-folder',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
    imgId: 'prod-img-double-folder-4d7e2f',
    title: 'Double Folder',
    subtitle: 'AM-DFX Series',
    description:
      'Versatile double folder designed for precision forming of sheet metal panels. Ideal for HVAC, cladding, and architectural metalwork with smooth, burr-free fold edges.',
    specs: ['Folding Length: up to 4000mm', 'Material Thickness: 0.3–3mm', 'Cycle Time: <8 sec'],
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
    imgId: 'prod-img-sheet-metal-folder-8c5a3d',
    title: 'Sheet Metal Folder',
    subtitle: 'AM-SMF Series',
    description:
      'Industrial sheet metal folder built for demanding fabrication environments. Features CNC control for programmable bend sequences and automatic back-gauge positioning.',
    specs: ['Folding Length: up to 2500mm', 'Material Thickness: 0.5–6mm', 'CNC Controlled'],
  },
  {
    id: 'metal-folder',
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
    imgId: 'prod-img-metal-folder-2e9f4b',
    title: 'Metal Folder Machine',
    subtitle: 'AM-MF Series',
    description:
      'Compact yet powerful metal folder machine suited for workshops and production lines. Combines robust construction with intuitive controls for operators of all skill levels.',
    specs: ['Folding Length: up to 2000mm', 'Material Thickness: 0.4–3mm', 'Manual & CNC Modes'],
  },
  {
    id: 'metal-folding',
    titleId: 'prod-metal-folding-title',
    descId: 'prod-metal-folding-desc',
    imgId: 'prod-img-metal-folding-6b1d8e',
    title: 'Metal Folding Machine',
    subtitle: 'AM-MFX Series',
    description:
      'Advanced metal folding machine with servo-electric drive for energy-efficient, high-precision bending. Suitable for stainless steel, aluminium, and galvanised sheet.',
    specs: ['Folding Length: up to 3500mm', 'Material Thickness: 0.3–5mm', 'Servo-Electric Drive'],
  },
  {
    id: 'sheet-metal-folding',
    titleId: 'prod-sheet-metal-folding-title',
    descId: 'prod-sheet-metal-folding-desc',
    imgId: 'prod-img-sheet-metal-folding-3f7c9a',
    title: 'Sheet Metal Folding Machine',
    subtitle: 'AM-SMFX Series',
    description:
      'Premium sheet metal folding machine with multi-axis CNC and touchscreen HMI. Designed for complex profiles and tight tolerances in aerospace, automotive, and construction.',
    specs: ['Folding Length: up to 5000mm', 'Material Thickness: 0.5–8mm', 'Multi-Axis CNC'],
  },
];

const ProductCard = ({ product }) => (
  <div className="group bg-navy-mid border border-navy-light rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 hover:border-gold/30 transition-all duration-300">
    {/* Product Image */}
    <div className="relative overflow-hidden h-52 bg-navy-light">
      <img
        alt={product.title}
        data-strk-img-id={product.imgId}
        data-strk-img={`[${product.descId}] [${product.titleId}]`}
        data-strk-img-ratio="3x2"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-mid/60 to-transparent" />
      <div className="absolute top-4 left-4">
        <span
          className="px-3 py-1 bg-gold/90 text-navy-deep text-xs font-semibold rounded-full"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {product.subtitle}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3
        id={product.titleId}
        className="text-xl font-bold text-off-white mb-3"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {product.title}
      </h3>
      <p
        id={product.descId}
        className="text-slate-cool text-sm leading-relaxed mb-5"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {product.description}
      </p>

      {/* Specs */}
      <ul className="space-y-1.5 mb-6">
        {product.specs.map((spec) => (
          <li key={spec} className="flex items-center gap-2 text-xs text-slate-cool" style={{ fontFamily: 'Inter, sans-serif' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
            {spec}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all duration-200"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        Request Info
        <ArrowRight size={16} />
      </a>
    </div>
  </div>
);

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-24 md:py-32 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span
              className="text-xs font-semibold tracking-[0.3em] text-gold uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Our Product Range
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-off-white mb-5"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Folding Machines for Every Need
          </h2>
          <p
            className="text-slate-cool text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            From compact workshop folders to large-format CNC folding systems — ARTITECT MACHINERY has the right solution for your production requirements.
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
