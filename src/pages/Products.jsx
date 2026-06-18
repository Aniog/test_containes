import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Package } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic components.',
    examples: ['LED lighting', 'Smart home devices', 'PCBs & components', 'Cables & chargers', 'Consumer electronics'],
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
    imgId: 'cat-electronics-img-a1b2c3',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Décor',
    desc: 'Indoor and outdoor furniture, home accessories, decorative items, and storage solutions from Foshan and Guangdong factories.',
    examples: ['Office furniture', 'Outdoor furniture', 'Home accessories', 'Storage solutions', 'Decorative items'],
    titleId: 'cat-furniture-title',
    descId: 'cat-furniture-desc',
    imgId: 'cat-furniture-img-d4e5f6',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fabrics, and accessories from Guangzhou, Hangzhou, and Zhejiang manufacturers.',
    examples: ['Sportswear', 'Workwear & uniforms', 'Private label clothing', 'Fabrics & textiles', 'Fashion accessories'],
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
    imgId: 'cat-apparel-img-g7h8i9',
  },
  {
    id: 'industrial',
    name: 'Industrial Equipment',
    desc: 'Machinery, tools, hardware, safety equipment, and industrial components for manufacturing and construction.',
    examples: ['Power tools', 'Safety equipment', 'Hardware & fasteners', 'Machinery parts', 'Industrial supplies'],
    titleId: 'cat-industrial-title',
    descId: 'cat-industrial-desc',
    imgId: 'cat-industrial-img-j1k2l3',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    desc: 'Toys, educational products, baby gear, and children\'s accessories from certified factories meeting EN71 and ASTM standards.',
    examples: ['Educational toys', 'Baby gear', 'Outdoor play equipment', 'Plush toys', 'Board games'],
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
    imgId: 'cat-toys-img-m4n5o6',
  },
  {
    id: 'packaging',
    name: 'Packaging Materials',
    desc: 'Custom packaging, boxes, bags, labels, and protective materials for retail, e-commerce, and industrial use.',
    examples: ['Custom boxes', 'Retail packaging', 'Eco-friendly packaging', 'Labels & stickers', 'Protective materials'],
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
    imgId: 'cat-packaging-img-p7q8r9',
  },
  {
    id: 'auto',
    name: 'Auto Parts & Accessories',
    desc: 'OEM and aftermarket auto parts, car accessories, and vehicle components from certified Chinese manufacturers.',
    examples: ['Car accessories', 'OEM parts', 'Lighting systems', 'Interior accessories', 'Maintenance tools'],
    titleId: 'cat-auto-title',
    descId: 'cat-auto-desc',
    imgId: 'cat-auto-img-s1t2u3',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, medical devices, and wellness products from GMP-certified factories.',
    examples: ['Skincare products', 'Personal care', 'Medical devices', 'Wellness products', 'Cosmetics'],
    titleId: 'cat-health-title',
    descId: 'cat-health-desc',
    imgId: 'cat-health-img-v4w5x6',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    desc: 'Sports equipment, outdoor gear, fitness products, and camping accessories from specialized manufacturers.',
    examples: ['Fitness equipment', 'Camping gear', 'Sports accessories', 'Outdoor furniture', 'Water sports'],
    titleId: 'cat-sports-title',
    descId: 'cat-sports-desc',
    imgId: 'cat-sports-img-y7z8a9',
  },
  {
    id: 'building',
    name: 'Building Materials',
    desc: 'Construction materials, flooring, tiles, hardware, and building components for residential and commercial projects.',
    examples: ['Flooring & tiles', 'Hardware', 'Insulation materials', 'Doors & windows', 'Construction tools'],
    titleId: 'cat-building-title',
    descId: 'cat-building-desc',
    imgId: 'cat-building-img-b2c3d4',
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
      <section className="bg-[#1B2B4B] py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Product Categories</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Products We Source</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We source across a wide range of product categories from China's major manufacturing regions. If your product isn't listed, contact us — we likely have relevant supplier contacts.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-[#1B2B4B] mb-2">{cat.name}</h3>
                  <p id={cat.descId} className="text-gray-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">{ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed CTA */}
      <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <Package className="w-10 h-10 text-[#2E6DA4] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#1B2B4B] mb-3">Don't See Your Product?</h2>
            <p className="text-gray-600 mb-6">
              We source a wide variety of products beyond this list. If you have a specific product in mind, contact us and we'll let you know if we can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Ask About Your Product <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
