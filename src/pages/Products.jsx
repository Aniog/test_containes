import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Package } from 'lucide-react';
import CTABanner from '@/components/layout/CTABanner';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic components.',
    items: ['Consumer Electronics', 'LED Lighting', 'PCBs & Components', 'Cables & Chargers', 'Smart Home Devices', 'Industrial Electronics'],
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
    imgId: 'cat-electronics-img-a1b2c3',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Indoor and outdoor furniture, home décor, kitchenware, storage solutions, and soft furnishings.',
    items: ['Indoor Furniture', 'Outdoor Furniture', 'Home Décor', 'Kitchenware', 'Storage Solutions', 'Bedding & Textiles'],
    titleId: 'cat-furniture-title',
    descId: 'cat-furniture-desc',
    imgId: 'cat-furniture-img-d4e5f6',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, accessories, fabrics, and private label fashion brands.',
    items: ['Casual Wear', 'Sportswear', 'Workwear & Uniforms', 'Accessories', 'Fabrics & Materials', 'Private Label Fashion'],
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
    imgId: 'cat-apparel-img-g7h8i9',
  },
  {
    id: 'industrial',
    title: 'Industrial Equipment',
    desc: 'Machinery, tools, safety equipment, industrial components, and manufacturing supplies.',
    items: ['Machinery & Equipment', 'Hand & Power Tools', 'Safety Equipment', 'Industrial Components', 'Hydraulics & Pneumatics', 'Welding Equipment'],
    titleId: 'cat-industrial-title',
    descId: 'cat-industrial-desc',
    imgId: 'cat-industrial-img-j1k2l3',
  },
  {
    id: 'consumer',
    title: 'Consumer Products',
    desc: 'General merchandise, gifts, promotional items, seasonal products, and everyday consumer goods.',
    items: ['General Merchandise', 'Gifts & Novelties', 'Promotional Items', 'Seasonal Products', 'Office Supplies', 'Pet Products'],
    titleId: 'cat-consumer-title',
    descId: 'cat-consumer-desc',
    imgId: 'cat-consumer-img-m4n5o6',
  },
  {
    id: 'packaging',
    title: 'Packaging Materials',
    desc: 'Custom packaging, boxes, bags, labels, and branded packaging solutions for retail and e-commerce.',
    items: ['Custom Boxes', 'Retail Packaging', 'Bags & Pouches', 'Labels & Stickers', 'Protective Packaging', 'E-commerce Packaging'],
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
    imgId: 'cat-packaging-img-p7q8r9',
  },
  {
    id: 'toys',
    title: 'Toys & Sporting Goods',
    desc: 'Children\'s toys, outdoor sports equipment, fitness gear, and recreational products.',
    items: ['Children\'s Toys', 'Outdoor Sports', 'Fitness Equipment', 'Camping Gear', 'Water Sports', 'Team Sports Equipment'],
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
    imgId: 'cat-toys-img-s1t2u3',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, health devices, supplements packaging, and wellness products.',
    items: ['Personal Care', 'Cosmetics & Skincare', 'Health Devices', 'Wellness Products', 'Hair Care', 'Oral Care'],
    titleId: 'cat-health-title',
    descId: 'cat-health-desc',
    imgId: 'cat-health-img-v4w5x6',
  },
  {
    id: 'auto',
    title: 'Auto Parts & Accessories',
    desc: 'Automotive components, car accessories, motorcycle parts, and vehicle maintenance products.',
    items: ['Car Accessories', 'Replacement Parts', 'Motorcycle Parts', 'Truck Components', 'Car Care Products', 'EV Components'],
    titleId: 'cat-auto-title',
    descId: 'cat-auto-desc',
    imgId: 'cat-auto-img-y7z8a9',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-semibold text-sm uppercase tracking-wider">Product Categories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            Products We Source from China
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We source across a wide range of product categories from China's major manufacturing regions. If your product is not listed, contact us — we likely source it.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-brand-light rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={cat.titleId} className="text-xl font-bold text-brand-navy mb-2">{cat.title}</h2>
                  <p id={cat.descId} className="text-brand-gray text-sm mb-4 leading-relaxed">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="bg-white border border-gray-200 text-brand-navy text-xs px-3 py-1 rounded-full font-medium">
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
      <section className="bg-brand-light py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Package className="w-12 h-12 text-brand-blue mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-brand-navy mb-3">Don't See Your Product?</h2>
          <p className="text-brand-gray mb-6">
            Our sourcing capabilities extend well beyond the categories listed above. If you need a product manufactured in China, contact us and we will assess whether we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-gold hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Send Us Your Requirements <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default Products;
