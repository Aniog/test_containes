import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    badge: 'Flagship',
    titleId: 'prod-title-double-folding-machine',
    descId: 'prod-desc-double-folding-machine',
    imgId: 'prod-img-double-folding-machine-9a3b',
    title: 'Double Folding Machine',
    description:
      'Our flagship double folding machine delivers unmatched precision for complex multi-bend profiles. Engineered for high-volume production with minimal setup time.',
    features: ['Dual-axis folding', 'CNC controlled', 'Up to 4mm steel'],
  },
  {
    id: 'double-folder',
    badge: 'Popular',
    titleId: 'prod-title-double-folder',
    descId: 'prod-desc-double-folder',
    imgId: 'prod-img-double-folder-7c1d',
    title: 'Double Folder',
    description:
      'Versatile double folder designed for workshops and fabrication shops requiring consistent, repeatable bends across a wide range of sheet thicknesses.',
    features: ['Quick-change tooling', 'Digital readout', 'Compact footprint'],
  },
  {
    id: 'sheet-metal-folder',
    badge: 'Industrial',
    titleId: 'prod-title-sheet-metal-folder',
    descId: 'prod-desc-sheet-metal-folder',
    imgId: 'prod-img-sheet-metal-folder-2e5f',
    title: 'Sheet Metal Folder',
    description:
      'Heavy-duty sheet metal folder built for demanding industrial environments. Handles large-format sheets with precision and ease.',
    features: ['Wide throat depth', 'Hydraulic clamping', 'Auto back-gauge'],
  },
  {
    id: 'sheet-metal-folding-machine',
    badge: 'Advanced',
    titleId: 'prod-title-sheet-metal-folding-machine',
    descId: 'prod-desc-sheet-metal-folding-machine',
    imgId: 'prod-img-sheet-metal-folding-machine-4g8h',
    title: 'Sheet Metal Folding Machine',
    description:
      'Advanced CNC sheet metal folding machine with programmable sequences for complex part geometries. Ideal for aerospace and automotive applications.',
    features: ['Multi-step programs', 'Servo-electric drive', 'Touch-screen HMI'],
  },
  {
    id: 'metal-folder',
    badge: 'Compact',
    titleId: 'prod-title-metal-folder',
    descId: 'prod-desc-metal-folder',
    imgId: 'prod-img-metal-folder-5i9j',
    title: 'Metal Folder',
    description:
      'Compact and robust metal folder for precision bending of thin to medium gauge metals. Perfect for HVAC, signage, and general fabrication.',
    features: ['Manual & powered', 'Adjustable beam', 'Portable options'],
  },
  {
    id: 'metal-folding-machine',
    badge: 'Heavy Duty',
    titleId: 'prod-title-metal-folding-machine',
    descId: 'prod-desc-metal-folding-machine',
    imgId: 'prod-img-metal-folding-machine-6k0l',
    title: 'Metal Folding Machine',
    description:
      'Industrial-grade metal folding machine for high-capacity production lines. Features automatic material handling and integrated quality control systems.',
    features: ['High-speed cycle', 'Auto-feed system', 'Industry 4.0 ready'],
  },
];

const badgeColors = {
  Flagship: 'bg-gold-500/20 text-gold-400 border-gold-500/30',
  Popular: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Industrial: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  Advanced: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Compact: 'bg-green-500/20 text-green-300 border-green-500/30',
  'Heavy Duty': 'bg-red-500/20 text-red-300 border-red-500/30',
};

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" className="py-24 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Our Product Range
          </span>
          <h2 className="font-serif font-bold text-steel-900 text-4xl md:text-5xl mb-4">
            Precision Folding Machines
          </h2>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto">
            From compact workshop folders to heavy-duty industrial systems — every
            ARTITECT machine is engineered to deliver flawless results.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-gold-500 rounded-full" />
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-steel-100 hover:border-gold-500/30 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52 bg-steel-800">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gold top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                {/* Badge */}
                <span
                  className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeColors[product.badge]}`}
                >
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="font-serif font-bold text-steel-900 text-xl mb-2"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-steel-500 text-sm leading-relaxed mb-4"
                >
                  {product.description}
                </p>

                {/* Feature tags */}
                <ul className="flex flex-wrap gap-2 mb-5">
                  {product.features.map((f) => (
                    <li
                      key={f}
                      className="text-xs bg-steel-50 text-steel-600 border border-steel-200 rounded-full px-3 py-1 font-medium"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-1.5 text-gold-500 hover:text-gold-400 font-semibold text-sm group/btn transition-colors"
                >
                  Request Info
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
