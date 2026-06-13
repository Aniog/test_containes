import { useEffect, useRef } from 'react';
import { ArrowRight, Layers, Repeat2, Square, Wrench } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding',
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
    imgId: 'prod-img-double-folding-8a3f1c',
    icon: Layers,
    title: 'Double Folding Machine',
    subtitle: 'DF Series',
    description:
      'Our flagship double folding machine delivers two precise bends in a single pass. Ideal for high-volume production with consistent accuracy across all material gauges.',
    specs: ['Up to 4mm mild steel', '3200mm working length', '±0.1mm accuracy'],
  },
  {
    id: 'double-folder',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
    imgId: 'prod-img-double-folder-2b7e4d',
    icon: Repeat2,
    title: 'Double Folder',
    subtitle: 'DF-Pro Series',
    description:
      'The professional double folder for complex profiles. Features programmable beam angles and automatic back gauge positioning for repeatable, high-precision results.',
    specs: ['CNC controlled', 'Auto back gauge', 'Multi-profile memory'],
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
    imgId: 'prod-img-sheet-metal-folder-5c9a2e',
    icon: Square,
    title: 'Sheet Metal Folder',
    subtitle: 'SMF Series',
    description:
      'Versatile sheet metal folding machine designed for fabrication shops. Handles a wide range of materials from thin aluminum to heavy-gauge stainless steel with ease.',
    specs: ['Stainless & aluminum', 'Quick-change tooling', 'Foot pedal control'],
  },
  {
    id: 'metal-folder',
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
    imgId: 'prod-img-metal-folder-9d1b7f',
    icon: Wrench,
    title: 'Metal Folder Machine',
    subtitle: 'MF Industrial Series',
    description:
      'Heavy-duty metal folder machine built for industrial environments. Robust construction ensures longevity and consistent performance under continuous operation.',
    specs: ['Heavy-duty frame', 'Hydraulic assist', '24/7 operation ready'],
  },
];

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" ref={containerRef} className="bg-[#F7F8FA] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C8922A]" />
            <span className="text-[#C8922A] text-xs tracking-[0.4em] uppercase font-inter font-medium">
              Our Product Range
            </span>
            <div className="w-8 h-px bg-[#C8922A]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Folding Machines Built for Precision
          </h2>
          <p className="text-slate-500 font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to full industrial double folding systems — every machine is engineered to deliver flawless results.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="bg-white border border-slate-200 overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden bg-[#1B3A5C]">
                  <img
                    alt={product.title}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#C8922A] p-2">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[#C8922A] text-xs tracking-widest uppercase font-inter font-medium">
                      {product.subtitle}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <h3
                    id={product.titleId}
                    className="text-2xl font-semibold text-[#0D1B2A] mb-3"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {product.title}
                  </h3>
                  <p id={product.descId} className="text-slate-500 font-inter text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <ul className="space-y-2 mb-6">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-sm font-inter text-slate-600">
                        <div className="w-1.5 h-1.5 bg-[#C8922A] rounded-full shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={handleContact}
                    className="flex items-center gap-2 text-[#C8922A] hover:text-[#E8B04A] font-inter font-semibold text-sm tracking-wide uppercase transition-colors group/btn"
                  >
                    Request Specifications
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
