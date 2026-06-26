import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    shortName: 'Double Folding',
    description:
      'High-capacity double folding system engineered for consistent, repeatable bends across a wide range of sheet metal gauges.',
    specs: ['Max capacity: 4mm mild steel', 'Bending length: 3200mm', 'Hydraulic crowning'],
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    shortName: 'Double Folder',
    description:
      'Compact yet powerful double folder designed for workshops that demand speed without sacrificing accuracy.',
    specs: ['Max capacity: 3mm mild steel', 'Bending length: 2500mm', 'CNC backgauge'],
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    shortName: 'Sheet Metal Folder',
    description:
      'Versatile sheet metal folder built for precision fabrication. Ideal for HVAC, architectural, and custom metalwork.',
    specs: ['Max capacity: 2.5mm mild steel', 'Bending length: 2000mm', 'Manual & CNC options'],
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    shortName: 'Sheet Metal Folding',
    description:
      'Full-featured folding machine with advanced crowning compensation and touch-screen controls for complex profiles.',
    specs: ['Max capacity: 6mm mild steel', 'Bending length: 4000mm', 'Automatic crowning'],
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    shortName: 'Metal Folder',
    description:
      'Rugged metal folder for heavy-duty applications. Built to last with hardened tooling and a reinforced frame.',
    specs: ['Max capacity: 5mm mild steel', 'Bending length: 3000mm', 'Hardened tool steel'],
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    shortName: 'Metal Folder Machine',
    description:
      'Professional-grade metal folder machine combining traditional craftsmanship with modern CNC automation.',
    specs: ['Max capacity: 4mm mild steel', 'Bending length: 3200mm', 'Siemens CNC control'],
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    shortName: 'Metal Folding',
    description:
      'The flagship metal folding machine from ARTITECT. Designed for production environments that never compromise on quality.',
    specs: ['Max capacity: 8mm mild steel', 'Bending length: 6000mm', 'Industry 4.0 ready'],
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-32 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#c9a44c] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            Our Lineup
          </span>
          <h2 id="products-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] tracking-tight mb-4">
            Precision Folding Machines
          </h2>
          <p id="products-subtitle" className="text-[#a0a0a8] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshops to high-volume production floors, we build the machine that fits your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-[#1c1c1f] border border-[#2a2a2e] rounded-lg overflow-hidden hover:border-[#c9a44c]/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-[#141416] overflow-hidden relative">
                <img
                  alt={product.name}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  data-strk-img-id={`product-img-${product.id}`}
                  data-strk-img={`[product-desc-${product.id}] [product-title-${product.id}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1f] to-transparent opacity-60" />
              </div>
              <div className="p-6 md:p-8">
                <h3
                  id={`product-title-${product.id}`}
                  className="text-[#f5f5f5] font-bold text-lg md:text-xl mb-2 group-hover:text-[#c9a44c] transition-colors"
                >
                  {product.name}
                </h3>
                <p
                  id={`product-desc-${product.id}`}
                  className="text-[#a0a0a8] text-sm leading-relaxed mb-4"
                >
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-[#a0a0a8] text-xs">
                      <span className="w-1.5 h-1.5 bg-[#c9a44c] rounded-full shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
