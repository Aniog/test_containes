import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Dual-action precision folding',
    description:
      'Our flagship double folding machine delivers simultaneous dual-bend operations with exceptional repeatability. Ideal for high-volume production environments requiring consistent, precise folds.',
    specs: ['Max Sheet Width: 3000mm', 'Folding Angle: 0–135°', 'Material Thickness: up to 3mm', 'Cycle Time: <8 sec'],
    badge: 'Best Seller',
    badgeColor: 'bg-copper-gold text-white',
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
    imgId: 'prod-img-double-folding-4a1b2c',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Compact dual-fold efficiency',
    description:
      'The Double Folder series combines a compact footprint with industrial-grade performance. Perfect for workshops and fabrication shops that demand versatility without sacrificing accuracy.',
    specs: ['Max Sheet Width: 2000mm', 'Folding Angle: 0–120°', 'Material Thickness: up to 2mm', 'Digital Angle Display'],
    badge: 'Popular',
    badgeColor: 'bg-precision-blue text-white',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
    imgId: 'prod-img-double-folder-5d6e7f',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile sheet metal forming',
    description:
      'Engineered for versatility, the Sheet Metal Folder handles a wide range of materials and thicknesses. CNC-controlled with intuitive programming for complex bend sequences.',
    specs: ['Max Sheet Width: 2500mm', 'CNC Controlled', 'Material: Steel, Aluminum, Copper', 'Auto Back-gauge'],
    badge: 'CNC Ready',
    badgeColor: 'bg-iron-blue text-white border border-sky-accent/40',
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
    imgId: 'prod-img-sheet-metal-folder-8g9h0i',
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    tagline: 'Heavy-duty industrial folding',
    description:
      'Built for demanding industrial applications, the Metal Folder Machine handles heavy-gauge materials with ease. Robust construction ensures years of reliable, high-output performance.',
    specs: ['Max Sheet Width: 4000mm', 'Heavy Gauge: up to 6mm', 'Hydraulic Drive System', 'Safety Light Curtain'],
    badge: 'Heavy Duty',
    badgeColor: 'bg-dark-gray text-white',
    titleId: 'prod-metal-folder-machine-title',
    descId: 'prod-metal-folder-machine-desc',
    imgId: 'prod-img-metal-folder-machine-1j2k3l',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'Precision automated folding',
    description:
      'The Metal Folding Machine series features advanced servo-electric drives for energy-efficient, ultra-precise folding. Ideal for architectural panels, HVAC components, and precision enclosures.',
    specs: ['Servo-Electric Drive', 'Energy Efficient', 'Angle Accuracy: ±0.1°', 'Remote Diagnostics'],
    badge: 'Eco Series',
    badgeColor: 'bg-green-700 text-white',
    titleId: 'prod-metal-folding-machine-title',
    descId: 'prod-metal-folding-machine-desc',
    imgId: 'prod-img-metal-folding-machine-4m5n6o',
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    tagline: 'Professional-grade sheet forming',
    description:
      'Our professional Sheet Metal Folding Machine is the go-to solution for fabricators who need reliable, repeatable results. Features a user-friendly touchscreen interface and quick-change tooling.',
    specs: ['Touchscreen HMI', 'Quick-Change Tooling', 'Max Sheet Width: 3200mm', 'Programmable Sequences'],
    badge: 'Pro Series',
    badgeColor: 'bg-copper-gold text-white',
    titleId: 'prod-sheet-metal-folding-machine-title',
    descId: 'prod-sheet-metal-folding-machine-desc',
    imgId: 'prod-img-sheet-metal-folding-machine-7p8q9r',
  },
];

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden border border-light-gray shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-warm-white h-52">
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${product.badgeColor}`}>
          {product.badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="text-sky-accent text-xs font-semibold tracking-widest uppercase mb-1">
          {product.tagline}
        </div>
        <h3 id={product.titleId} className="font-heading font-bold text-dark-gray text-xl mb-3">
          {product.name}
        </h3>
        <p id={product.descId} className="text-mid-gray text-sm leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        {/* Specs */}
        <ul className="space-y-1.5 mb-5">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2 text-xs text-dark-gray">
              <ChevronRight size={12} className="text-precision-blue flex-shrink-0" />
              {spec}
            </li>
          ))}
        </ul>

        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center justify-center gap-2 w-full bg-steel-navy hover:bg-precision-blue text-white text-sm font-semibold py-3 rounded-lg transition-colors group/btn"
        >
          Request Info
          <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
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
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-precision-blue/10 text-precision-blue text-xs font-semibold px-4 py-2 rounded-full mb-4 tracking-widest uppercase">
            Our Product Range
          </div>
          <h2 id="products-section-title" className="font-heading font-bold text-steel-navy text-4xl md:text-5xl mb-4">
            Folding Machines for Every Need
          </h2>
          <p className="text-mid-gray text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to heavy-duty industrial systems — Artitect Machinery delivers precision-engineered solutions for every sheet metal application.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-mid-gray mb-4">Need a custom solution or can't find what you're looking for?</p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 border-2 border-precision-blue text-precision-blue hover:bg-precision-blue hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
          >
            Talk to Our Engineers
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
