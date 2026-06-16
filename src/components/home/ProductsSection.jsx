import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, X } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    titleId: 'prod-title-double-folding-machine',
    descId: 'prod-desc-double-folding-machine',
    imgId: 'prod-img-double-folding-machine-d4e5f6',
    name: 'Double Folding Machine',
    shortDesc: 'High-precision double folding for complex sheet metal profiles with consistent accuracy.',
    fullDesc: 'Our Double Folding Machine is engineered for demanding industrial applications requiring two sequential folds in a single pass. Featuring servo-driven axes, programmable bend sequences, and a robust steel frame, it delivers repeatable accuracy across high-volume production runs. Ideal for HVAC, automotive, and architectural metalwork.',
    specs: [
      { label: 'Folding Length', value: 'Up to 4000mm' },
      { label: 'Material Thickness', value: '0.5 – 4mm (mild steel)' },
      { label: 'Bend Angle', value: '0° – 135°' },
      { label: 'Control System', value: 'CNC with touchscreen HMI' },
    ],
  },
  {
    id: 'double-folder',
    titleId: 'prod-title-double-folder',
    descId: 'prod-desc-double-folder',
    imgId: 'prod-img-double-folder-g7h8i9',
    name: 'Double Folder',
    shortDesc: 'Versatile double folder designed for precision bending of sheet metal panels and profiles.',
    fullDesc: 'The ARTITECT Double Folder combines robust construction with intuitive operation. Its dual-beam design allows simultaneous up and down folding, dramatically reducing cycle times. The machine supports a wide range of materials including stainless steel, aluminium, and galvanised sheet, making it the go-to choice for fabrication shops.',
    specs: [
      { label: 'Folding Length', value: 'Up to 3000mm' },
      { label: 'Material Thickness', value: '0.4 – 3mm' },
      { label: 'Productivity', value: 'Up to 600 bends/hour' },
      { label: 'Drive System', value: 'Electro-hydraulic servo' },
    ],
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-title-sheet-metal-folder',
    descId: 'prod-desc-sheet-metal-folder',
    imgId: 'prod-img-sheet-metal-folder-j1k2l3',
    name: 'Sheet Metal Folder',
    shortDesc: 'Industrial-grade sheet metal folder for clean, burr-free bends on a wide range of metals.',
    fullDesc: 'Designed for precision and longevity, the ARTITECT Sheet Metal Folder features a hardened tool steel beam, automatic back gauge positioning, and a user-friendly CNC controller. It handles mild steel, stainless, aluminium, and copper with equal ease, producing clean, burr-free bends every time.',
    specs: [
      { label: 'Folding Length', value: 'Up to 2500mm' },
      { label: 'Material Thickness', value: '0.3 – 2.5mm' },
      { label: 'Back Gauge', value: 'Automatic CNC positioning' },
      { label: 'Tooling', value: 'Quick-change modular system' },
    ],
  },
  {
    id: 'sheet-metal-folding-machine',
    titleId: 'prod-title-sheet-metal-folding-machine',
    descId: 'prod-desc-sheet-metal-folding-machine',
    imgId: 'prod-img-sheet-metal-folding-machine-m4n5o6',
    name: 'Sheet Metal Folding Machine',
    shortDesc: 'Full-featured folding machine for high-throughput sheet metal fabrication environments.',
    fullDesc: 'The ARTITECT Sheet Metal Folding Machine is built for high-throughput environments. With its advanced CNC control, automatic tool clamping, and integrated safety systems, it maximises uptime and operator safety. Suitable for roofing, cladding, ductwork, and precision enclosure manufacturing.',
    specs: [
      { label: 'Folding Length', value: 'Up to 6000mm' },
      { label: 'Material Thickness', value: '0.5 – 6mm' },
      { label: 'Positioning Accuracy', value: '±0.1mm' },
      { label: 'Safety', value: 'Laser guarding, CE certified' },
    ],
  },
  {
    id: 'metal-folder',
    titleId: 'prod-title-metal-folder',
    descId: 'prod-desc-metal-folder',
    imgId: 'prod-img-metal-folder-p7q8r9',
    name: 'Metal Folder',
    shortDesc: 'Compact and powerful metal folder for workshops and light industrial applications.',
    fullDesc: 'The ARTITECT Metal Folder is the ideal solution for workshops requiring a compact yet powerful folding machine. Its space-saving design does not compromise on capability — it handles a full range of metals and profiles with precision. Easy to set up, easy to operate, and built to last.',
    specs: [
      { label: 'Folding Length', value: 'Up to 1500mm' },
      { label: 'Material Thickness', value: '0.3 – 2mm' },
      { label: 'Footprint', value: 'Compact workshop design' },
      { label: 'Operation', value: 'Manual / semi-automatic' },
    ],
  },
  {
    id: 'metal-folding-machine',
    titleId: 'prod-title-metal-folding-machine',
    descId: 'prod-desc-metal-folding-machine',
    imgId: 'prod-img-metal-folding-machine-s1t2u3',
    name: 'Metal Folding Machine',
    shortDesc: 'Heavy-duty metal folding machine engineered for demanding production environments.',
    fullDesc: 'Built for the most demanding production environments, the ARTITECT Metal Folding Machine delivers unmatched rigidity and precision. Its heavy-duty welded frame, precision-ground beam, and advanced CNC system ensure consistent results even on the toughest materials and longest production runs.',
    specs: [
      { label: 'Folding Length', value: 'Up to 8000mm' },
      { label: 'Material Thickness', value: '1 – 8mm (mild steel)' },
      { label: 'Frame', value: 'Heavy-duty welded steel' },
      { label: 'Control', value: 'Multi-axis CNC, Industry 4.0 ready' },
    ],
  },
];

const ProductCard = ({ product, onSelect }) => (
  <div className="group bg-brand-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
    <div className="overflow-hidden aspect-[4/3] bg-gray-100">
      <img
        alt={product.name}
        data-strk-img-id={product.imgId}
        data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 id={product.titleId} className="font-heading font-700 text-brand-navy text-xl mb-3">
        {product.name}
      </h3>
      <p id={product.descId} className="font-body text-gray-600 text-sm leading-relaxed flex-1 mb-5">
        {product.shortDesc}
      </p>
      <button
        onClick={() => onSelect(product)}
        className="flex items-center gap-2 text-brand-gold font-body font-semibold text-sm uppercase tracking-widest hover:gap-4 transition-all duration-200 group/btn"
      >
        Learn More <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const ProductModal = ({ product, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, modalRef.current);
  }, [product]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/80 backdrop-blur-sm" onClick={onClose}>
      <div
        ref={modalRef}
        className="bg-brand-white max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            alt={product.name}
            data-strk-img-id={`modal-img-${product.id}-v9w0x1`}
            data-strk-img={`[modal-desc-${product.id}] [modal-title-${product.id}]`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full aspect-video object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-brand-navy/80 text-brand-white p-2 hover:bg-brand-navy transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-8">
          <p className="font-body text-brand-gold uppercase tracking-widest text-xs font-semibold mb-2">Product Details</p>
          <h2 id={`modal-title-${product.id}`} className="font-heading font-800 text-brand-navy text-3xl mb-4">{product.name}</h2>
          <p id={`modal-desc-${product.id}`} className="font-body text-gray-600 leading-relaxed mb-8">{product.fullDesc}</p>

          <div className="border-t border-gray-200 pt-6">
            <h4 className="font-heading font-700 text-brand-navy text-sm uppercase tracking-widest mb-4">Technical Specifications</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.specs.map((spec) => (
                <div key={spec.label} className="bg-brand-light p-4">
                  <div className="font-body text-brand-silver text-xs uppercase tracking-widest mb-1">{spec.label}</div>
                  <div className="font-heading font-600 text-brand-navy text-sm">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); onClose(); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
              className="flex-1 text-center bg-brand-gold text-brand-navy font-heading font-semibold py-3 uppercase tracking-widest text-sm hover:bg-brand-gold-light transition-colors"
            >
              Request a Quote
            </a>
            <button
              onClick={onClose}
              className="flex-1 border-2 border-brand-navy text-brand-navy font-heading font-semibold py-3 uppercase tracking-widest text-sm hover:bg-brand-navy hover:text-brand-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="bg-brand-light py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold mb-3">Our Range</p>
          <h2 id="products-section-title" className="font-heading font-800 text-brand-navy text-4xl md:text-5xl mb-4">
            Folding Machine Solutions
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mb-6" />
          <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to heavy-duty industrial folding machines — every ARTITECT machine is built with precision engineering and lasting quality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={setSelected} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default ProductsSection;
