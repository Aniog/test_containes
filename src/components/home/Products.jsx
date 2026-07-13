import { ArrowRight } from 'lucide-react';

const products = [
  {
    key: 'double-folding',
    name: 'Double Folding Machine',
    tagline: 'Dual-action precision for complex profiles',
    description:
      'Our flagship double folding machine delivers two-stage bending in a single pass. Engineered for high-volume production with consistent accuracy across every cycle.',
    specs: ['Working length: 1000–4000mm', 'Max material thickness: 3mm', 'Folding angle: 0–135°', 'CNC control system'],
    imgId: 'prod-double-fold-img-b2c841',
    titleId: 'prod-double-fold-title-b2c841',
    descId: 'prod-double-fold-desc-b2c841',
    badge: 'Flagship',
  },
  {
    key: 'double-folder',
    name: 'Double Folder',
    tagline: 'Versatile folding for diverse applications',
    description:
      'The ARTITECT Double Folder combines robust construction with intuitive controls. Ideal for workshops and fabrication shops requiring flexibility across material types.',
    specs: ['Working length: 800–3000mm', 'Max material thickness: 2.5mm', 'Programmable stops', 'Quick-change tooling'],
    imgId: 'prod-double-folder-img-d4e952',
    titleId: 'prod-double-folder-title-d4e952',
    descId: 'prod-double-folder-desc-d4e952',
    badge: 'Popular',
  },
  {
    key: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Precision bending for sheet metal fabrication',
    description:
      'Designed for sheet metal professionals, this folder handles a wide range of gauges with exceptional repeatability. Compact footprint, industrial-grade performance.',
    specs: ['Working length: 600–2500mm', 'Gauge range: 0.5–2mm', 'Digital angle readout', 'Foot pedal operation'],
    imgId: 'prod-sheet-folder-img-f6a063',
    titleId: 'prod-sheet-folder-title-f6a063',
    descId: 'prod-sheet-folder-desc-f6a063',
    badge: null,
  },
  {
    key: 'sheet-metal-folding',
    name: 'Sheet Metal Folding Machine',
    tagline: 'Heavy-duty folding for demanding environments',
    description:
      'Built for demanding industrial environments, this machine handles heavy-gauge sheet metal with ease. Reinforced frame and precision-ground tooling ensure long-term reliability.',
    specs: ['Working length: up to 6000mm', 'Max material thickness: 4mm', 'Hydraulic clamping', 'Servo-electric drive'],
    imgId: 'prod-sheet-folding-img-a8b174',
    titleId: 'prod-sheet-folding-title-a8b174',
    descId: 'prod-sheet-folding-desc-a8b174',
    badge: 'Heavy Duty',
  },
  {
    key: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'Compact and capable for every workshop',
    description:
      'The ARTITECT Metal Folder is the go-to choice for small to mid-size fabrication shops. Easy to operate, easy to maintain, and built to last.',
    specs: ['Working length: 500–2000mm', 'Max material thickness: 2mm', 'Manual & powered options', 'Portable configurations'],
    imgId: 'prod-metal-folder-img-c0d285',
    titleId: 'prod-metal-folder-title-c0d285',
    descId: 'prod-metal-folder-desc-c0d285',
    badge: null,
  },
  {
    key: 'metal-folding',
    name: 'Metal Folding Machine',
    tagline: 'Automated precision for high-output production',
    description:
      'Our automated metal folding machine integrates seamlessly into production lines. Programmable sequences, fast cycle times, and minimal operator intervention.',
    specs: ['Working length: 1000–5000mm', 'Max material thickness: 3.5mm', 'Automated back gauge', 'Industry 4.0 ready'],
    imgId: 'prod-metal-folding-img-e2f396',
    titleId: 'prod-metal-folding-title-e2f396',
    descId: 'prod-metal-folding-desc-e2f396',
    badge: 'Automated',
  },
];

const ProductCard = ({ product }) => (
  <div className="group bg-steel-blue rounded-2xl overflow-hidden border border-slate-mid/50 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 flex flex-col">
    {/* Image */}
    <div className="relative overflow-hidden h-52 bg-navy-deep">
      <img
        data-strk-img-id={product.imgId}
        data-strk-img={`[${product.descId}] [${product.titleId}] [products-subtitle-7c3d21] [products-title-7c3d21]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={product.name}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-steel-blue/80 to-transparent" />
      {product.badge && (
        <span className="absolute top-4 right-4 bg-gold text-navy-deep text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
          {product.badge}
        </span>
      )}
      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
    </div>

    {/* Content */}
    <div className="p-7 flex flex-col flex-1">
      <h3
        id={product.titleId}
        className="font-serif font-bold text-xl text-off-white mb-1"
      >
        {product.name}
      </h3>
      <p className="text-gold text-sm font-medium mb-3 tracking-wide">{product.tagline}</p>
      <p
        id={product.descId}
        className="text-light-gray text-sm leading-relaxed mb-5 flex-1"
      >
        {product.description}
      </p>

      {/* Specs */}
      <ul className="space-y-1.5 mb-6">
        {product.specs.map((spec) => (
          <li key={spec} className="flex items-center gap-2 text-xs text-light-gray">
            <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
            {spec}
          </li>
        ))}
      </ul>

      <button
        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all group/btn"
      >
        Request Info
        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const Products = () => (
  <section id="products" className="bg-navy-deep py-24">
    <div className="max-w-7xl mx-auto px-6">
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Our Range</span>
          <div className="h-px w-10 bg-gold" />
        </div>
        <h2
          id="products-title-7c3d21"
          className="font-serif font-bold text-4xl md:text-5xl text-off-white mb-4"
        >
          Folding Machines for Every Need
        </h2>
        <p
          id="products-subtitle-7c3d21"
          className="text-light-gray text-lg max-w-2xl mx-auto leading-relaxed"
        >
          From compact workshop folders to heavy-duty industrial folding machines — ARTITECT MACHINERY has the right solution for your sheet metal fabrication requirements.
        </p>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.key} product={product} />
        ))}
      </div>
    </div>
  </section>
);

export default Products;
