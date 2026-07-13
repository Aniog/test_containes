import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Dual-action precision folding',
    description:
      'Our flagship double folding machine delivers two-stage bending in a single pass, dramatically reducing cycle time while maintaining micron-level accuracy on sheet metal workpieces.',
    specs: ['Bending Length: up to 3000mm', 'Material Thickness: 0.5–6mm', 'Folding Angle: 0–135°'],
    titleId: 'prod-double-folding-machine-title',
    descId: 'prod-double-folding-machine-desc',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Compact dual-fold efficiency',
    description:
      'The ARTITECT Double Folder is engineered for high-volume production environments. Its robust frame and precision tooling ensure consistent results across thousands of cycles.',
    specs: ['Bending Length: up to 2500mm', 'Material Thickness: 0.3–4mm', 'Cycle Time: <8 sec'],
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile sheet forming',
    description:
      'Designed for versatility, the Sheet Metal Folder handles a wide range of materials and profiles. Ideal for HVAC, cladding, and architectural metalwork applications.',
    specs: ['Bending Length: up to 4000mm', 'Material Thickness: 0.4–5mm', 'Tooling: Quick-change'],
    titleId: 'prod-sheet-folder-title',
    descId: 'prod-sheet-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'Heavy-duty industrial folding',
    description:
      'Built for the most demanding industrial applications, the Metal Folding Machine combines a heavy-duty steel frame with CNC-controlled precision for repeatable, high-quality bends.',
    specs: ['Bending Length: up to 6000mm', 'Material Thickness: 1–10mm', 'CNC Control: 4-axis'],
    titleId: 'prod-metal-folding-machine-title',
    descId: 'prod-metal-folding-machine-desc',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'Precision manual & CNC options',
    description:
      'Available in both manual and CNC configurations, the Metal Folder is the go-to choice for workshops and fabrication shops requiring flexibility without compromising on quality.',
    specs: ['Bending Length: up to 2000mm', 'Material Thickness: 0.5–3mm', 'Options: Manual / CNC'],
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    tagline: 'Automated production folding',
    description:
      'The Metal Folder Machine integrates seamlessly into automated production lines. Its servo-driven beam and programmable back gauge ensure zero-defect output at production speed.',
    specs: ['Bending Length: up to 3500mm', 'Material Thickness: 0.5–8mm', 'Back Gauge: CNC servo'],
    titleId: 'prod-folder-machine-title',
    descId: 'prod-folder-machine-desc',
  },
];

const ProductsSection = () => {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Products' },
    { id: 'double', label: 'Double Folding' },
    { id: 'sheet', label: 'Sheet Metal' },
    { id: 'metal', label: 'Metal Folder' },
  ];

  const filteredProducts = products.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'double') return p.id.includes('double');
    if (activeFilter === 'sheet') return p.id.includes('sheet');
    if (activeFilter === 'metal') return p.id.includes('metal');
    return true;
  });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeFilter]);

  return (
    <section id="products" className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-brand-accent" />
            <span className="font-inter font-semibold text-brand-accent text-xs tracking-[0.25em] uppercase">
              Our Product Range
            </span>
            <div className="h-px w-10 bg-brand-accent" />
          </div>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-brand-navy mb-4">
            Engineered for Excellence
          </h2>
          <p className="font-inter text-brand-mid text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to heavy-duty industrial machines, every
            ARTITECT product is built to deliver precision and reliability.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`font-inter font-medium text-sm px-6 py-2.5 rounded-full border transition-all duration-200 ${
                activeFilter === f.id
                  ? 'bg-brand-navy text-white border-brand-navy'
                  : 'bg-white text-brand-dark border-brand-mid/30 hover:border-brand-navy hover:text-brand-navy'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Image — data-strk-img-id must be a static string literal per product */}
              <div className="relative overflow-hidden h-52 bg-brand-light">
                {product.id === 'double-folding-machine' && (
                  <img
                    alt={product.name}
                    data-strk-img-id="prod-double-folding-machine-img-9a3b1c"
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {product.id === 'double-folder' && (
                  <img
                    alt={product.name}
                    data-strk-img-id="prod-double-folder-img-7f4d2e"
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {product.id === 'sheet-metal-folder' && (
                  <img
                    alt={product.name}
                    data-strk-img-id="prod-sheet-metal-folder-img-2c8e5a"
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {product.id === 'metal-folding-machine' && (
                  <img
                    alt={product.name}
                    data-strk-img-id="prod-metal-folding-machine-img-5b1f9d"
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {product.id === 'metal-folder' && (
                  <img
                    alt={product.name}
                    data-strk-img-id="prod-metal-folder-img-3d7a4b"
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {product.id === 'metal-folder-machine' && (
                  <img
                    alt={product.name}
                    data-strk-img-id="prod-metal-folder-machine-img-6e2c8f"
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7">
                <div className="mb-1">
                  <span className="font-inter text-xs font-semibold text-brand-accent tracking-widest uppercase">
                    {product.tagline}
                  </span>
                </div>
                <h3
                  id={product.titleId}
                  className="font-playfair font-bold text-xl text-brand-navy mb-3"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="font-inter text-sm text-brand-mid leading-relaxed mb-5 flex-1"
                >
                  {product.description}
                </p>

                <ul className="space-y-1.5 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 font-inter text-xs text-brand-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 font-inter font-semibold text-sm text-brand-accent hover:text-brand-accent-light transition-colors group/btn bg-transparent border-none cursor-pointer p-0"
                >
                  Request Info
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
