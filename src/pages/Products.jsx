import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic components.',
    examples: ['Bluetooth speakers', 'LED strip lights', 'USB accessories', 'Smart home devices', 'PCB assemblies'],
    imgId: 'prod-electronics-img-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Indoor and outdoor furniture, home décor, storage solutions, kitchenware, and bedding products.',
    examples: ['Office chairs', 'Outdoor furniture', 'Storage racks', 'Kitchenware sets', 'Decorative items'],
    imgId: 'prod-furniture-img-d4e5f6',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, bags, accessories, and technical fabrics for fashion and industrial use.',
    examples: ['T-shirts & hoodies', 'Sportswear', 'Workwear uniforms', 'Bags & backpacks', 'Technical fabrics'],
    imgId: 'prod-apparel-img-g7h8i9',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'industrial',
    title: 'Industrial Equipment',
    desc: 'Machinery, tools, hardware, safety equipment, and industrial components for manufacturing and construction.',
    examples: ['Power tools', 'Safety equipment', 'Industrial hardware', 'Machinery parts', 'Fasteners'],
    imgId: 'prod-industrial-img-j1k2l3',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging Materials',
    desc: 'Custom packaging, corrugated boxes, bags, labels, and branded packaging solutions for retail and e-commerce.',
    examples: ['Custom printed boxes', 'Poly bags', 'Foam inserts', 'Labels & stickers', 'Gift packaging'],
    imgId: 'prod-packaging-img-m4n5o6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'consumer',
    title: 'Consumer Products',
    desc: 'General merchandise, promotional items, seasonal products, and private label goods for retail and e-commerce.',
    examples: ['Promotional gifts', 'Seasonal décor', 'Private label products', 'Stationery', 'Office supplies'],
    imgId: 'prod-consumer-img-p7q8r9',
    titleId: 'prod-consumer-title',
    descId: 'prod-consumer-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Sporting Goods',
    desc: 'Children\'s toys, educational products, outdoor sports equipment, fitness gear, and recreational items.',
    examples: ['Educational toys', 'Outdoor play equipment', 'Fitness accessories', 'Sports gear', 'Board games'],
    imgId: 'prod-toys-img-s1t2u3',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
  },
  {
    id: 'auto',
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto parts, car accessories, tools, and components for automotive retail and repair businesses.',
    examples: ['Car accessories', 'Aftermarket parts', 'Lighting upgrades', 'Interior accessories', 'Tools'],
    imgId: 'prod-auto-img-v4w5x6',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, wellness items, medical devices, and health supplements.',
    examples: ['Skincare products', 'Hair accessories', 'Wellness devices', 'Cosmetic tools', 'Personal care'],
    imgId: 'prod-health-img-y7z8a9',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#1a2e4a] py-16 md:py-24">
        <div className="section-container text-center">
          <span className="inline-block bg-[#e85d26]/20 text-[#e85d26] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Product Categories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Products We Source from China
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We source across a wide range of industries, working with verified manufacturers in China's major production hubs.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative overflow-hidden h-48">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 id={cat.titleId} className="font-bold text-[#1a2e4a] text-xl mb-2">{cat.title}</h2>
                  <p id={cat.descId} className="text-[#6b7280] text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-[#f3f4f6] text-[#1f2937] text-xs px-2.5 py-1 rounded-full">
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

      {/* Not Listed */}
      <section className="bg-[#f3f4f6] py-16">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e4a] mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-[#6b7280] text-lg mb-8 max-w-xl mx-auto">
            We source a wide variety of products beyond the categories listed above. Contact us with your requirements and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#e85d26] hover:bg-[#c94d1e] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Submit Your Sourcing Inquiry <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
