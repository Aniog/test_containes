import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding',
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
    imgId: 'prod-img-double-folding-9a3b1c',
    title: 'Double Folding Machine',
    desc: 'High-performance double folding machine engineered for complex sheet metal bends with exceptional repeatability and tight tolerances.',
    specs: ['Up to 4000mm working length', 'Dual-beam folding system', 'CNC controlled'],
    badge: 'Flagship',
  },
  {
    id: 'double-folder',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
    imgId: 'prod-img-double-folder-7d2e4f',
    title: 'Double Folder',
    desc: 'Versatile double folder designed for high-volume production environments, delivering consistent quality on every fold cycle.',
    specs: ['Automatic back gauge', 'Touch-screen HMI', 'Quick tool change'],
    badge: 'Popular',
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
    imgId: 'prod-img-sheet-metal-folder-5c8a2d',
    title: 'Sheet Metal Folder',
    desc: 'Precision sheet metal folder built for fabricators who demand accuracy and speed across a wide range of material thicknesses.',
    specs: ['Up to 3mm mild steel', 'Programmable sequences', 'Compact footprint'],
    badge: null,
  },
  {
    id: 'sheet-metal-folding',
    titleId: 'prod-sheet-metal-folding-title',
    descId: 'prod-sheet-metal-folding-desc',
    imgId: 'prod-img-sheet-metal-folding-1b6f9e',
    title: 'Sheet Metal Folding Machine',
    desc: 'Industrial sheet metal folding machine combining robust construction with intuitive controls for demanding production lines.',
    specs: ['Heavy-duty frame', 'Servo-electric drive', 'Remote diagnostics'],
    badge: null,
  },
  {
    id: 'metal-folder',
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
    imgId: 'prod-img-metal-folder-3e7c0a',
    title: 'Metal Folder',
    desc: 'Compact and reliable metal folder ideal for workshops and light industrial applications requiring precise angle control.',
    specs: ['Manual & CNC options', 'Angle accuracy ±0.1°', 'Low maintenance'],
    badge: null,
  },
  {
    id: 'metal-folding',
    titleId: 'prod-metal-folding-title',
    descId: 'prod-metal-folding-desc',
    imgId: 'prod-img-metal-folding-8h4k2m',
    title: 'Metal Folding Machine',
    desc: 'Advanced metal folding machine with multi-axis capability, designed for complex profiles and high-precision architectural metalwork.',
    specs: ['Multi-axis control', 'Profile memory storage', 'Industry 4.0 ready'],
    badge: 'Advanced',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="bg-offwhite py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs font-body font-semibold tracking-widest uppercase">
              Our Product Range
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-heading font-bold text-navy text-4xl lg:text-5xl tracking-tight mb-4">
            Folding Machines for Every Need
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to heavy-duty industrial systems — ARTITECT MACHINERY has the right solution for your fabrication requirements.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group border border-gray-100 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-gold text-navy text-xs font-heading font-semibold px-3 py-1 rounded-full tracking-wide">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <h3
                  id={product.titleId}
                  className="font-heading font-bold text-navy text-xl mb-3"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="font-body text-gray-500 text-sm leading-relaxed mb-5"
                >
                  {product.desc}
                </p>

                {/* Specs */}
                <ul className="space-y-2 mb-6 flex-1">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm font-body text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-gold font-heading font-semibold text-sm hover:gap-3 transition-all duration-200 group/link"
                >
                  Request Info
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
