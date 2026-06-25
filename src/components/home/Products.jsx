import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Dual-action precision folding',
    description:
      'Our flagship double folding machine delivers two precise folds in a single pass, dramatically increasing throughput while maintaining tight tolerances for complex sheet metal profiles.',
    specs: ['Up to 4mm mild steel', 'Folding length: 1000–4000mm', 'CNC controlled', 'Hydraulic drive'],
    imgId: 'prod-double-fold-8a1c3d',
    titleId: 'prod-double-folding-machine-title',
    descId: 'prod-double-folding-machine-desc',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Compact & versatile',
    description:
      'The double folder is engineered for workshops requiring flexibility. Its compact footprint and intuitive controls make it ideal for both high-volume production and custom fabrication.',
    specs: ['Up to 3mm stainless steel', 'Folding length: 800–3000mm', 'Digital angle readout', 'Quick-change tooling'],
    imgId: 'prod-double-folder-5b2e7f',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Industrial-grade accuracy',
    description:
      'Designed for demanding industrial environments, our sheet metal folder handles a wide range of materials and thicknesses with consistent, repeatable accuracy across every production run.',
    specs: ['Up to 6mm mild steel', 'Folding length: 1200–6000mm', 'Servo-electric drive', 'Automatic back gauge'],
    imgId: 'prod-sheet-folder-3c9d1a',
    titleId: 'prod-sheet-folder-title',
    descId: 'prod-sheet-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'Heavy-duty performance',
    description:
      'Built for the most demanding applications, our metal folding machine combines robust construction with advanced CNC technology to deliver exceptional performance on thick and heavy-gauge materials.',
    specs: ['Up to 8mm mild steel', 'Folding length: 2000–8000mm', 'Full CNC automation', 'Remote diagnostics'],
    imgId: 'prod-metal-fold-9e4f2c',
    titleId: 'prod-metal-folding-machine-title',
    descId: 'prod-metal-folding-machine-desc',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="products" ref={containerRef} className="bg-[#F7F8FA] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
            Our Product Range
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1B2A4A] mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Precision Folding Machines
          </h2>
          <p className="text-[#5A6A82] text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to heavy-duty industrial systems — every machine is built to deliver consistent, precise results.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-[#DDE3EC] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden bg-[#1B2A4A]/5">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#C9A84C] text-[#1B2A4A] text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                  {product.tagline}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-[#1B2A4A] mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {product.name}
                </h3>
                <p id={product.descId} className="text-[#5A6A82] text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-xs text-[#1B2A4A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-[#1B2A4A] font-semibold text-sm hover:text-[#C9A84C] transition-colors group/link"
                >
                  Enquire About This Machine
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
