import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    category: 'Double Folder Series',
    description:
      'Our flagship double folding machine delivers unmatched precision for complex sheet metal profiles. Engineered for high-volume production with consistent, repeatable results.',
    specs: ['Up to 4000mm working length', 'Material thickness up to 3mm', 'CNC controlled back gauge', 'Automatic tool clamping'],
    imgId: 'prod-dfm-8a3b1c',
    titleId: 'prod-double-folding-machine-title',
    descId: 'prod-double-folding-machine-desc',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    category: 'Folder Series',
    description:
      'Versatile sheet metal folder designed for workshops and production facilities. Combines ease of use with industrial-grade durability for all standard folding operations.',
    specs: ['Working length 1000–3000mm', 'Mild steel up to 2.5mm', 'Hydraulic clamping beam', 'Digital angle readout'],
    imgId: 'prod-smf-9c4d2e',
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    category: 'Folding Machine Series',
    description:
      'Heavy-duty metal folding machine built for demanding industrial environments. Features robust construction and advanced control systems for maximum productivity.',
    specs: ['Bending force up to 200 tons', 'Stainless steel capability', 'Servo-electric drive', 'Touch-screen HMI control'],
    imgId: 'prod-mfm-7e5f3a',
    titleId: 'prod-metal-folding-machine-title',
    descId: 'prod-metal-folding-machine-desc',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    category: 'Double Folder Series',
    description:
      'Compact double folder ideal for precision work on smaller components. Perfect for HVAC, signage, and architectural metalwork with tight tolerances.',
    specs: ['Working length up to 2000mm', 'Aluminium up to 4mm', 'Manual & CNC versions', 'Quick-change tooling'],
    imgId: 'prod-df-6b7c4d',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    category: 'Folder Series',
    description:
      'Professional metal folder for fabrication shops requiring reliable, accurate bending. Simple operation with advanced safety features and ergonomic design.',
    specs: ['Capacity up to 2500mm', 'Mild & stainless steel', 'Mechanical back gauge', 'Safety light curtain'],
    imgId: 'prod-mf-5a8e2f',
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    category: 'Folding Machine Series',
    description:
      'Advanced metal folder machine combining speed and precision for modern manufacturing. Ideal for automotive, aerospace, and construction component production.',
    specs: ['High-speed operation', 'Multi-axis CNC control', 'Automatic material handling', 'Industry 4.0 ready'],
    imgId: 'prod-mfmx-4c9d1e',
    titleId: 'prod-metal-folder-machine-title',
    descId: 'prod-metal-folder-machine-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeProduct]);

  return (
    <section id="products" className="py-24 bg-[#F5F6F8]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-[#C9A84C] font-semibold">
            Our Product Range
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mt-3 mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Precision Folding Machines
          </h2>
          <p className="text-[#8A9BB0] text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to heavy-duty industrial systems — every
            ARTITECT machine is built to deliver flawless results, shift after shift.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-[#E8EAED] flex flex-col"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-52 bg-[#1C3A5E]">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] sheet metal folding machine industrial`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C9A84C]/90 text-[#0D1B2A] text-xs font-bold tracking-wider uppercase">
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-[#0D1B2A] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {product.name}
                </h3>
                <p id={product.descId} className="text-[#8A9BB0] text-sm leading-relaxed mb-5 flex-1">
                  {product.description}
                </p>

                {/* Specs */}
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-[#2E3A4A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => {
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 text-[#C9A84C] text-sm font-semibold tracking-wide hover:gap-3 transition-all duration-200 group/btn"
                >
                  Request Specifications
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
