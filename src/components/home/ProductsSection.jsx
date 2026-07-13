import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Check } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'double-folding-machine',
    titleId: 'prod-double-folding-machine-title',
    descId: 'prod-double-folding-machine-desc',
    name: 'Double Folding Machine',
    tagline: 'Dual-action precision folding',
    description: 'Our flagship double folding machine delivers simultaneous dual-bend operations with micron-level accuracy. Engineered for high-volume production environments demanding consistent, repeatable results.',
    specs: ['Bending Length: up to 4000mm', 'Material Thickness: 0.5–6mm', 'Dual-axis CNC control', 'Automatic back gauge'],
    badge: 'Flagship',
  },
  {
    id: 'double-folder',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
    name: 'Double Folder',
    tagline: 'Compact dual-fold efficiency',
    description: 'The ARTITECT Double Folder combines a compact footprint with industrial-grade performance. Ideal for workshops and mid-scale production lines requiring versatile folding capabilities.',
    specs: ['Bending Length: up to 2500mm', 'Material Thickness: 0.5–4mm', 'Touchscreen HMI', 'Quick-change tooling'],
    badge: 'Popular',
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
    name: 'Sheet Metal Folder',
    tagline: 'Universal sheet forming solution',
    description: 'Versatile and robust, the Sheet Metal Folder handles a wide range of materials and profiles. Its adaptive clamping system ensures clean, burr-free bends across stainless steel, aluminum, and mild steel.',
    specs: ['Bending Length: up to 3000mm', 'Material Thickness: 0.3–5mm', 'Servo-electric drive', 'Multi-profile tooling'],
    badge: null,
  },
  {
    id: 'sheet-metal-folding-machine',
    titleId: 'prod-sheet-metal-folding-machine-title',
    descId: 'prod-sheet-metal-folding-machine-desc',
    name: 'Sheet Metal Folding Machine',
    tagline: 'Heavy-duty industrial folder',
    description: 'Built for demanding industrial applications, this heavy-duty folding machine handles thick-gauge materials with ease. Features advanced safety systems and Industry 4.0 connectivity.',
    specs: ['Bending Length: up to 6000mm', 'Material Thickness: up to 10mm', 'Industry 4.0 ready', 'Remote diagnostics'],
    badge: 'Heavy Duty',
  },
  {
    id: 'metal-folder',
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
    name: 'Metal Folder',
    tagline: 'Precision at every angle',
    description: 'The ARTITECT Metal Folder is engineered for precision angle control across complex profiles. Its intelligent angle correction system automatically compensates for material springback.',
    specs: ['Bending Length: up to 2000mm', 'Angle accuracy: ±0.1°', 'Springback compensation', 'Programmable sequences'],
    badge: null,
  },
  {
    id: 'metal-folding-machine',
    titleId: 'prod-metal-folding-machine-title',
    descId: 'prod-metal-folding-machine-desc',
    name: 'Metal Folding Machine',
    tagline: 'Automated production excellence',
    description: 'Designed for fully automated production lines, this machine integrates seamlessly with robotic loading systems. Maximizes throughput while maintaining the precision ARTITECT is known for.',
    specs: ['Bending Length: up to 4000mm', 'Robot-ready interface', 'Automated tool change', 'Real-time monitoring'],
    badge: 'Automated',
  },
];

function SpecList({ specs }) {
  return (
    <ul className="space-y-2.5">
      {specs.map((spec) => (
        <li key={spec} className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-brand-accent/15 flex items-center justify-center shrink-0">
            <Check size={12} className="text-brand-accent" />
          </div>
          <span className="font-sans text-brand-dark text-sm">{spec}</span>
        </li>
      ))}
    </ul>
  );
}

function PanelContent({ product, onContact }) {
  return (
    <div className="p-8 lg:p-12">
      <div className="font-sans text-brand-accent text-xs uppercase tracking-[0.25em] font-medium mb-2">
        {product.tagline}
      </div>
      <h3 id={product.titleId} className="font-serif font-bold text-brand-dark text-2xl md:text-3xl mb-4">
        {product.name}
      </h3>
      <p id={product.descId} className="font-sans text-brand-mid text-base leading-relaxed mb-8">
        {product.description}
      </p>
      <div className="mb-8">
        <h4 className="font-sans font-semibold text-brand-dark text-sm uppercase tracking-wider mb-4">
          Key Specifications
        </h4>
        <SpecList specs={product.specs} />
      </div>
      <button
        onClick={onContact}
        className="inline-flex items-center gap-2 bg-brand-accent text-brand-navy font-sans font-semibold px-7 py-3.5 rounded-full hover:bg-brand-accent-light transition-all duration-200 cursor-pointer border-none text-sm"
      >
        Request Specifications
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

function Badge({ text }) {
  if (!text) return null;
  return (
    <div className="absolute top-4 left-4 z-10 bg-brand-accent text-brand-navy font-sans font-semibold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider">
      {text}
    </div>
  );
}

const PANEL_CLASS = 'grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-light';
const IMG_CLASS = 'w-full h-full object-cover';
const IMG_WRAP = 'relative aspect-[4/3] bg-brand-light overflow-hidden';

export default function ProductsSection() {
  const containerRef = useRef(null);
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const goContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  const isActive = (id) => activeProduct === id;

  return (
    <section id="products" ref={containerRef} className="bg-brand-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-accent" />
            <span className="font-sans text-brand-accent text-xs uppercase tracking-[0.3em] font-medium">Our Range</span>
            <div className="w-8 h-px bg-brand-accent" />
          </div>
          <h2 id="products-title" className="font-serif font-bold text-brand-dark text-3xl md:text-4xl lg:text-5xl mb-4">
            Precision Folding Machines
          </h2>
          <p id="products-subtitle" className="font-sans text-brand-mid text-lg max-w-2xl mx-auto">
            From compact workshop folders to heavy-duty industrial systems — every ARTITECT machine is built to exceed expectations.
          </p>
        </div>

        {/* Product Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {PRODUCTS.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(product.id)}
              className={`font-sans text-sm font-medium px-5 py-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
                isActive(product.id)
                  ? 'bg-brand-accent text-brand-navy border-brand-accent'
                  : 'bg-transparent text-brand-mid border-brand-mid/30 hover:border-brand-accent hover:text-brand-dark'
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Product Detail Panels — each with a hardcoded static data-strk-img-id */}
        <div className="relative">

          {/* Panel 0: Double Folding Machine */}
          <div className={`${PANEL_CLASS} ${isActive('double-folding-machine') ? 'block' : 'hidden'}`}>
            <div className={IMG_WRAP}>
              <Badge text={PRODUCTS[0].badge} />
              <img alt={PRODUCTS[0].name}
                data-strk-img-id="prod-img-double-folding-machine-9a1b2c"
                data-strk-img="[prod-double-folding-machine-desc] [prod-double-folding-machine-title] [products-subtitle] [products-title]"
                data-strk-img-ratio="4x3" data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" className={IMG_CLASS} />
            </div>
            <PanelContent product={PRODUCTS[0]} onContact={goContact} />
          </div>

          {/* Panel 1: Double Folder */}
          <div className={`${PANEL_CLASS} ${isActive('double-folder') ? 'block' : 'hidden'}`}>
            <div className={IMG_WRAP}>
              <Badge text={PRODUCTS[1].badge} />
              <img alt={PRODUCTS[1].name}
                data-strk-img-id="prod-img-double-folder-3d4e5f"
                data-strk-img="[prod-double-folder-desc] [prod-double-folder-title] [products-subtitle] [products-title]"
                data-strk-img-ratio="4x3" data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" className={IMG_CLASS} />
            </div>
            <PanelContent product={PRODUCTS[1]} onContact={goContact} />
          </div>

          {/* Panel 2: Sheet Metal Folder */}
          <div className={`${PANEL_CLASS} ${isActive('sheet-metal-folder') ? 'block' : 'hidden'}`}>
            <div className={IMG_WRAP}>
              <Badge text={PRODUCTS[2].badge} />
              <img alt={PRODUCTS[2].name}
                data-strk-img-id="prod-img-sheet-metal-folder-6g7h8i"
                data-strk-img="[prod-sheet-metal-folder-desc] [prod-sheet-metal-folder-title] [products-subtitle] [products-title]"
                data-strk-img-ratio="4x3" data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" className={IMG_CLASS} />
            </div>
            <PanelContent product={PRODUCTS[2]} onContact={goContact} />
          </div>

          {/* Panel 3: Sheet Metal Folding Machine */}
          <div className={`${PANEL_CLASS} ${isActive('sheet-metal-folding-machine') ? 'block' : 'hidden'}`}>
            <div className={IMG_WRAP}>
              <Badge text={PRODUCTS[3].badge} />
              <img alt={PRODUCTS[3].name}
                data-strk-img-id="prod-img-sheet-metal-folding-machine-9j0k1l"
                data-strk-img="[prod-sheet-metal-folding-machine-desc] [prod-sheet-metal-folding-machine-title] [products-subtitle] [products-title]"
                data-strk-img-ratio="4x3" data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" className={IMG_CLASS} />
            </div>
            <PanelContent product={PRODUCTS[3]} onContact={goContact} />
          </div>

          {/* Panel 4: Metal Folder */}
          <div className={`${PANEL_CLASS} ${isActive('metal-folder') ? 'block' : 'hidden'}`}>
            <div className={IMG_WRAP}>
              <Badge text={PRODUCTS[4].badge} />
              <img alt={PRODUCTS[4].name}
                data-strk-img-id="prod-img-metal-folder-2m3n4o"
                data-strk-img="[prod-metal-folder-desc] [prod-metal-folder-title] [products-subtitle] [products-title]"
                data-strk-img-ratio="4x3" data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" className={IMG_CLASS} />
            </div>
            <PanelContent product={PRODUCTS[4]} onContact={goContact} />
          </div>

          {/* Panel 5: Metal Folding Machine */}
          <div className={`${PANEL_CLASS} ${isActive('metal-folding-machine') ? 'block' : 'hidden'}`}>
            <div className={IMG_WRAP}>
              <Badge text={PRODUCTS[5].badge} />
              <img alt={PRODUCTS[5].name}
                data-strk-img-id="prod-img-metal-folding-machine-5p6q7r"
                data-strk-img="[prod-metal-folding-machine-desc] [prod-metal-folding-machine-title] [products-subtitle] [products-title]"
                data-strk-img-ratio="4x3" data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" className={IMG_CLASS} />
            </div>
            <PanelContent product={PRODUCTS[5]} onContact={goContact} />
          </div>

        </div>

        {/* Product Grid Overview */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <button
              key={product.id}
              onClick={() => {
                setActiveProduct(product.id);
                document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`text-left p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer bg-white group ${
                isActive(product.id)
                  ? 'border-brand-accent shadow-lg shadow-brand-accent/10'
                  : 'border-brand-light hover:border-brand-accent/50 hover:shadow-md'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-sm bg-brand-accent/60" />
                </div>
                {product.badge && (
                  <span className="font-sans text-xs font-medium text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <h4 className="font-sans font-semibold text-brand-dark text-base mb-1 group-hover:text-brand-accent transition-colors">
                {product.name}
              </h4>
              <p className="font-sans text-brand-mid text-sm">{product.tagline}</p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
