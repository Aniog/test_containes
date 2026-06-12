import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding',
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
    imgId: 'prod-img-double-folding-9a3b1c',
    title: 'Double Folding Machine',
    desc: 'High-performance double folding machine engineered for complex sheet metal bends with exceptional repeatability and tight tolerances.',
    specs: ['Folding Length: up to 3000mm', 'Material Thickness: 0.5–6mm', 'Dual-axis CNC Control'],
    badge: 'Bestseller',
  },
  {
    id: 'double-folder',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
    imgId: 'prod-img-double-folder-4d7e2f',
    title: 'Double Folder',
    desc: 'Versatile double folder designed for high-volume production environments, delivering consistent quality across every fold cycle.',
    specs: ['Folding Length: up to 2500mm', 'Material Thickness: 0.3–4mm', 'Servo-driven Beam'],
    badge: 'Popular',
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
    imgId: 'prod-img-sheet-metal-folder-8c5a3d',
    title: 'Sheet Metal Folder',
    desc: 'Precision sheet metal folder built for fabricators who require accuracy and speed in every production run.',
    specs: ['Folding Length: up to 4000mm', 'Material Thickness: 0.5–8mm', 'Hydraulic Drive System'],
    badge: null,
  },
  {
    id: 'sheet-metal-folding',
    titleId: 'prod-sheet-metal-folding-title',
    descId: 'prod-sheet-metal-folding-desc',
    imgId: 'prod-img-sheet-metal-folding-2e9f4b',
    title: 'Sheet Metal Folding Machine',
    desc: 'Industrial-grade sheet metal folding machine with advanced CNC programming for complex multi-bend profiles.',
    specs: ['Folding Length: up to 3500mm', 'Material Thickness: 0.5–6mm', 'Touch-screen CNC Interface'],
    badge: 'New',
  },
  {
    id: 'metal-folder',
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
    imgId: 'prod-img-metal-folder-6b1d8e',
    title: 'Metal Folder',
    desc: 'Compact and robust metal folder ideal for workshops and mid-scale production, combining ease of use with professional results.',
    specs: ['Folding Length: up to 2000mm', 'Material Thickness: 0.3–3mm', 'Manual & CNC Modes'],
    badge: null,
  },
  {
    id: 'metal-folding',
    titleId: 'prod-metal-folding-title',
    descId: 'prod-metal-folding-desc',
    imgId: 'prod-img-metal-folding-3f7c9a',
    title: 'Metal Folding Machine',
    desc: 'Heavy-duty metal folding machine designed for demanding industrial applications with superior structural rigidity.',
    specs: ['Folding Length: up to 6000mm', 'Material Thickness: 1–12mm', 'Electro-hydraulic CNC'],
    badge: 'Heavy Duty',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="bg-[#F8F7F4] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase">
              Our Product Range
            </span>
            <div className="h-px w-10 bg-[#C9A84C]" />
          </div>
          <h2 id="products-title" className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1C2C] mb-4">
            Precision Folding Machines
          </h2>
          <p className="text-[#8A9BB0] text-lg max-w-2xl mx-auto leading-relaxed">
            Every machine in our lineup is engineered to deliver flawless bends,
            maximum uptime, and long-term reliability for your production floor.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#C9A84C]/10 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52 bg-[#1A3A5C]">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#C9A84C] text-[#0B1C2C] text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 id={product.titleId} className="text-xl font-bold text-[#0B1C2C] mb-2">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-[#8A9BB0] text-sm leading-relaxed mb-4">
                  {product.desc}
                </p>

                {/* Specs */}
                <ul className="space-y-1.5 mb-6 flex-1">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-[#1A3A5C]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className="flex items-center justify-center gap-2 w-full border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0B1C2C] font-semibold text-sm py-2.5 rounded-full transition-all duration-200"
                >
                  Enquire Now
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
