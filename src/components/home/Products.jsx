import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Dual-axis precision folding',
    description:
      'Our flagship double folding machine delivers simultaneous dual-axis bends with micron-level accuracy. Ideal for high-volume production environments demanding consistent quality.',
    specs: ['Max Thickness: 4mm', 'Bending Length: up to 3200mm', 'Dual-axis CNC control'],
    titleId: 'prod-double-folding-machine-title',
    descId: 'prod-double-folding-machine-desc',
    imgId: 'prod-img-double-folding-machine-9a1b2c',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Compact dual-fold efficiency',
    description:
      'The double folder combines two folding operations in a single pass, dramatically reducing cycle time. Perfect for medium-scale fabrication shops seeking maximum throughput.',
    specs: ['Max Thickness: 3mm', 'Bending Length: up to 2500mm', 'Programmable back gauge'],
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
    imgId: 'prod-img-double-folder-3d4e5f',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile sheet forming',
    description:
      'A robust and versatile sheet metal folder engineered for a wide range of materials and thicknesses. Features an intuitive touchscreen interface for rapid job changeovers.',
    specs: ['Max Thickness: 6mm', 'Bending Length: up to 4000mm', 'Touchscreen CNC'],
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
    imgId: 'prod-img-sheet-metal-folder-6g7h8i',
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    tagline: 'Industrial-grade performance',
    description:
      'Built for the most demanding industrial applications, this machine handles heavy-gauge sheet metal with ease. Servo-electric drive ensures energy efficiency and repeatability.',
    specs: ['Max Thickness: 8mm', 'Bending Length: up to 6000mm', 'Servo-electric drive'],
    titleId: 'prod-sheet-metal-folding-machine-title',
    descId: 'prod-sheet-metal-folding-machine-desc',
    imgId: 'prod-img-sheet-metal-folding-machine-9j0k1l',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'Precision at every angle',
    description:
      'The metal folder is designed for precision angle bending across a full 180° range. Its rigid frame construction eliminates deflection, ensuring perfect bends every time.',
    specs: ['Bending Angle: 0–180°', 'Max Thickness: 5mm', 'Rigid steel frame'],
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
    imgId: 'prod-img-metal-folder-2m3n4o',
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    tagline: 'Automated folding excellence',
    description:
      'Combining automation with precision, the metal folder machine features automatic tool clamping and a multi-axis back gauge system for complex part geometries.',
    specs: ['Auto tool clamping', 'Multi-axis back gauge', 'Max Thickness: 5mm'],
    titleId: 'prod-metal-folder-machine-title',
    descId: 'prod-metal-folder-machine-desc',
    imgId: 'prod-img-metal-folder-machine-5p6q7r',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'The complete folding solution',
    description:
      'Our most comprehensive metal folding machine integrates advanced CNC programming, real-time angle measurement, and automatic crowning for flawless results on every job.',
    specs: ['Real-time angle measurement', 'Auto crowning system', 'Max Thickness: 6mm'],
    titleId: 'prod-metal-folding-machine-title',
    descId: 'prod-metal-folding-machine-desc',
    imgId: 'prod-img-metal-folding-machine-8s9t0u',
  },
];

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`group relative bg-brand-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col ${
        hovered ? 'scale-[1.02]' : 'scale-100'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52 bg-brand-light">
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
        <div className="absolute bottom-3 left-4">
          <span className="bg-brand-gold text-brand-navy text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
            {product.tagline}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          id={product.titleId}
          className="font-heading font-bold text-brand-navy text-xl mb-2"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="text-brand-steel/80 text-sm leading-relaxed mb-4 flex-1"
        >
          {product.description}
        </p>

        {/* Specs */}
        <ul className="space-y-1.5 mb-5">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2 text-xs text-brand-steel">
              <span className="w-1 h-1 rounded-full bg-brand-gold flex-shrink-0" />
              {spec}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="flex items-center gap-2 text-brand-gold font-semibold text-sm hover:gap-3 transition-all duration-200 group/link"
        >
          Request Info
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Gold accent bottom border */}
      <div className="h-0.5 bg-gradient-to-r from-brand-gold/0 via-brand-gold to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-24 md:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">
            Our Product Range
          </span>
          <h2
            id="products-section-title"
            className="font-heading font-bold text-brand-navy text-4xl md:text-5xl mt-3 mb-5"
          >
            Machines Built for Mastery
          </h2>
          <p className="text-brand-steel/80 text-lg max-w-2xl mx-auto leading-relaxed">
            From compact double folders to heavy-duty industrial folding machines —
            every ARTITECT machine is engineered to exceed expectations.
          </p>
        </div>

        {/* Product grid */}
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
