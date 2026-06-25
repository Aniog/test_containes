import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    items: ['Consumer electronics', 'PCBs and components', 'LED lighting', 'Cables and connectors', 'Smart home devices', 'Power banks and chargers'],
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    imgId: 'prod-electronics-img-a1b2c3',
    desc: 'Consumer electronics, components, and smart devices from certified Chinese manufacturers.',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Décor',
    items: ['Office furniture', 'Bedroom furniture', 'Outdoor furniture', 'Home décor accessories', 'Lighting fixtures', 'Storage solutions'],
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    imgId: 'prod-furniture-img-d4e5f6',
    desc: 'Office, bedroom, and outdoor furniture from factories across Guangdong and Zhejiang.',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    items: ['Casual and sportswear', 'Workwear and uniforms', 'Bags and accessories', 'Fabrics and textiles', 'Private label clothing', 'Footwear'],
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
    imgId: 'prod-apparel-img-g7h8i9',
    desc: 'Apparel, textiles, and accessories for private label and wholesale buyers.',
  },
  {
    id: 'industrial',
    name: 'Industrial & Machinery',
    items: ['Machine parts and components', 'Tools and hardware', 'Safety equipment', 'Packaging machinery', 'Agricultural equipment', 'Construction materials'],
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
    imgId: 'prod-industrial-img-j1k2l3',
    desc: 'Industrial parts, tools, and machinery from verified Chinese manufacturers.',
  },
  {
    id: 'homegoods',
    name: 'Home & Kitchen',
    items: ['Kitchenware and cookware', 'Bathroom accessories', 'Cleaning products', 'Garden tools', 'Pet products', 'Baby and children\'s products'],
    titleId: 'prod-homegoods-title',
    descId: 'prod-homegoods-desc',
    imgId: 'prod-homegoods-img-m4n5o6',
    desc: 'Kitchenware, bathroom accessories, and everyday home products.',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    items: ['Personal care products', 'Fitness equipment', 'Medical devices (Class I)', 'Supplements packaging', 'Cosmetic packaging', 'Wellness accessories'],
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
    imgId: 'prod-health-img-p7q8r9',
    desc: 'Personal care, fitness, and wellness products from compliant Chinese factories.',
  },
  {
    id: 'toys',
    name: 'Toys & Sporting Goods',
    items: ['Children\'s toys', 'Educational toys', 'Outdoor sports equipment', 'Fitness accessories', 'Camping gear', 'Water sports products'],
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
    imgId: 'prod-toys-img-s1t2u3',
    desc: 'Toys, sporting goods, and outdoor equipment with CE and ASTM compliance support.',
  },
  {
    id: 'packaging',
    name: 'Packaging & Print',
    items: ['Custom boxes and cartons', 'Bags and pouches', 'Labels and stickers', 'Promotional materials', 'Gift packaging', 'Eco-friendly packaging'],
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    imgId: 'prod-packaging-img-v4w5x6',
    desc: 'Custom packaging, print materials, and branded packaging solutions.',
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
      <section className="bg-gradient-to-br from-[#0f2d5e] to-[#1a4f8a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-widest mb-3">Product Categories</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Products We Source from China</h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              We source across a wide range of product categories. If you don't see your product listed, contact us — we likely have relevant factory contacts.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-slate-100 overflow-hidden">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="text-base font-bold text-slate-900 mb-1">{cat.name}</h3>
                  <p id={cat.descId} className="text-xs text-slate-500 mb-3">{cat.desc}</p>
                  <ul className="space-y-1">
                    {cat.items.map((item) => (
                      <li key={item} className="text-xs text-slate-600 flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-[#2563eb] rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Don't See Your Product?</h2>
          <p className="text-slate-600 mb-6">
            Our sourcing network covers thousands of product types across China's major manufacturing regions. Contact us with your product details and we'll assess feasibility within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1a4f8a] text-white font-semibold px-6 py-3 rounded-lg transition-colors no-underline"
          >
            Submit a Sourcing Inquiry <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
