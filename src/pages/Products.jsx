import { useEffect, useRef } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SectionHeader, CTAButton, TrustBar } from '@/components/ui/SharedComponents';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Technology',
    desc: 'Consumer electronics, smart home devices, LED lighting, power banks, cables, and electronic components.',
    examples: ['Bluetooth speakers', 'Smart home devices', 'LED lighting', 'Phone accessories', 'PCB components'],
    hubs: 'Shenzhen, Dongguan',
    imgId: 'prod-img-electronics-ss1',
    titleId: 'prod-title-electronics',
    descId: 'prod-desc-electronics',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Clothing, sportswear, workwear, bags, shoes, and home textiles including bedding and towels.',
    examples: ['T-shirts and hoodies', 'Sportswear', 'Bags and backpacks', 'Bedding sets', 'Workwear uniforms'],
    hubs: 'Guangzhou, Hangzhou, Yiwu',
    imgId: 'prod-img-textiles-ss2',
    titleId: 'prod-title-textiles',
    descId: 'prod-desc-textiles',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Décor',
    desc: 'Indoor and outdoor furniture, home accessories, kitchenware, and decorative items.',
    examples: ['Office furniture', 'Outdoor furniture', 'Kitchen accessories', 'Home décor', 'Storage solutions'],
    hubs: 'Foshan, Guangzhou',
    imgId: 'prod-img-furniture-ss3',
    titleId: 'prod-title-furniture',
    descId: 'prod-desc-furniture',
  },
  {
    id: 'hardware',
    title: 'Hardware & Tools',
    desc: 'Hand tools, power tools, fasteners, construction hardware, and industrial equipment.',
    examples: ['Hand tools', 'Power tools', 'Fasteners and bolts', 'Safety equipment', 'Construction hardware'],
    hubs: 'Yongkang, Wenzhou',
    imgId: 'prod-img-hardware-ss4',
    titleId: 'prod-title-hardware',
    descId: 'prod-desc-hardware',
  },
  {
    id: 'toys',
    title: 'Toys, Gifts & Promotional Items',
    desc: 'Children\'s toys, educational products, promotional merchandise, and seasonal gift items.',
    examples: ['Educational toys', 'Plush toys', 'Promotional gifts', 'Seasonal items', 'Stationery'],
    hubs: 'Shantou, Yiwu',
    imgId: 'prod-img-toys-ss5',
    titleId: 'prod-title-toys',
    descId: 'prod-desc-toys',
  },
  {
    id: 'industrial',
    title: 'Industrial & Mechanical Parts',
    desc: 'Precision parts, castings, machined components, hydraulic equipment, and industrial machinery.',
    examples: ['CNC machined parts', 'Castings and forgings', 'Hydraulic components', 'Bearings', 'Valves and fittings'],
    hubs: 'Ningbo, Suzhou, Tianjin',
    imgId: 'prod-img-industrial-ss6',
    titleId: 'prod-title-industrial',
    descId: 'prod-desc-industrial',
  },
  {
    id: 'health',
    title: 'Health, Beauty & Personal Care',
    desc: 'Cosmetics, skincare, health supplements, medical devices, and personal care products.',
    examples: ['Skincare products', 'Hair care', 'Vitamins and supplements', 'Medical devices', 'Fitness equipment'],
    hubs: 'Guangzhou, Shanghai',
    imgId: 'prod-img-health-ss7',
    titleId: 'prod-title-health',
    descId: 'prod-desc-health',
  },
  {
    id: 'packaging',
    title: 'Packaging & Paper Products',
    desc: 'Custom packaging, corrugated boxes, paper bags, labels, and printing services.',
    examples: ['Custom boxes', 'Paper bags', 'Labels and stickers', 'Retail packaging', 'Eco-friendly packaging'],
    hubs: 'Dongguan, Shenzhen',
    imgId: 'prod-img-packaging-ss8',
    titleId: 'prod-title-packaging',
    descId: 'prod-desc-packaging',
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
      {/* Header */}
      <section className="bg-brand-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Product Categories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Products We Source from China
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              We have established supplier networks across China's major manufacturing regions. If your product isn't listed, contact us — we source across most categories.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Categories Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What We Source"
            title="Our Product Categories"
            subtitle="From consumer goods to industrial components — we source across China's key manufacturing sectors."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="aspect-[16/7] overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] China manufacturing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 id={cat.titleId} className="text-xl font-bold text-brand-dark">{cat.title}</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500 flex-shrink-0">
                      <MapPin className="w-3 h-3" />
                      <span>{cat.hubs}</span>
                    </div>
                  </div>
                  <p id={cat.descId} className="text-gray-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-brand-blue-light text-brand-blue text-xs font-medium px-2.5 py-1 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 tracking-tight">
            Don't see your product category?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            We source across most manufacturing categories in China. Contact us with your product details and we'll let you know if we can help.
          </p>
          <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
            Ask About Your Product
            <ArrowRight className="w-5 h-5" />
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
