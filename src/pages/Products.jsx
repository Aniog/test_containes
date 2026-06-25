import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '../components/ui/CTAButton';
import SectionHeader from '../components/ui/SectionHeader';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    items: ['PCB assemblies', 'LED lighting', 'Consumer electronics', 'Cables & connectors', 'Power supplies', 'Smart home devices'],
    imgId: 'prod-electronics-img-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    desc: 'Electronic components, assemblies, and consumer devices from certified EMS factories.',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Goods',
    items: ['Sofas & seating', 'Tables & desks', 'Storage furniture', 'Outdoor furniture', 'Mattresses', 'Home décor'],
    imgId: 'prod-furniture-img-d4e5f6',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    desc: 'Residential and commercial furniture from verified wood, metal, and upholstery factories.',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    items: ['Garments & clothing', 'Sportswear', 'Workwear & uniforms', 'Bags & accessories', 'Fabrics & yarn', 'Home textiles'],
    imgId: 'prod-apparel-img-g7h8i9',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
    desc: 'Clothing, textiles, and accessories from audited garment factories with ethical compliance.',
  },
  {
    id: 'hardware',
    name: 'Hardware & Tools',
    items: ['Hand tools', 'Power tools', 'Fasteners & fixings', 'Locks & security', 'Plumbing fittings', 'Construction hardware'],
    imgId: 'prod-hardware-img-j1k2l3',
    titleId: 'prod-hardware-title',
    descId: 'prod-hardware-desc',
    desc: 'Industrial and consumer hardware from manufacturers with relevant quality certifications.',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    items: ['Corrugated boxes', 'Retail packaging', 'Labels & stickers', 'Bags & pouches', 'Gift boxes', 'Custom printing'],
    imgId: 'prod-packaging-img-m4n5o6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    desc: 'Custom packaging solutions for retail, e-commerce, and industrial applications.',
  },
  {
    id: 'plastics',
    name: 'Plastics & Rubber',
    items: ['Injection molded parts', 'Plastic containers', 'Rubber seals & gaskets', 'Silicone products', 'PVC products', 'Custom molding'],
    imgId: 'prod-plastics-img-p7q8r9',
    titleId: 'prod-plastics-title',
    descId: 'prod-plastics-desc',
    desc: 'Plastic and rubber components from injection molding and extrusion specialists.',
  },
  {
    id: 'sporting',
    name: 'Sporting & Outdoor',
    items: ['Fitness equipment', 'Camping gear', 'Bicycles & accessories', 'Water sports', 'Team sports equipment', 'Outdoor furniture'],
    imgId: 'prod-sporting-img-s1t2u3',
    titleId: 'prod-sporting-title',
    descId: 'prod-sporting-desc',
    desc: 'Sports, fitness, and outdoor products from specialized manufacturers.',
  },
  {
    id: 'medical',
    name: 'Medical & Safety',
    items: ['PPE & safety gear', 'Medical disposables', 'Diagnostic equipment', 'Rehabilitation aids', 'Hospital furniture', 'Lab supplies'],
    imgId: 'prod-medical-img-v4w5x6',
    titleId: 'prod-medical-title',
    descId: 'prod-medical-desc',
    desc: 'Medical devices and safety products from ISO 13485 and CE-certified manufacturers.',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#0d2b4e] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#e8621a] text-sm font-semibold uppercase tracking-wider">Product Categories</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">Products We Source</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We source across a wide range of product categories. If your product isn't listed, contact us — we likely have relevant supplier connections.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-52 overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={cat.titleId} className="text-xl font-bold text-[#0d2b4e] mb-2">{cat.name}</h2>
                  <p id={cat.descId} className="text-gray-600 text-sm mb-4 leading-relaxed">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="bg-[#f4f6f9] text-[#0d2b4e] text-xs font-medium px-3 py-1 rounded-full border border-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 bg-[#f4f6f9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="Don't See Your Product?"
            heading="We Source Almost Anything Made in China"
            subtext="If your product category isn't listed above, reach out. Our network covers thousands of factories across China's major manufacturing hubs."
          />
          <div className="mt-8">
            <CTAButton to="/contact" variant="primary">Tell Us What You Need</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
