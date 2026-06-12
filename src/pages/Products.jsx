import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import CTABanner from '../components/layout/CTABanner';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, batteries, smart home devices, and electronic components.',
    items: ['Consumer Electronics', 'PCB & Components', 'LED Lighting', 'Cables & Connectors', 'Smart Home Devices', 'Batteries & Power'],
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
    imgId: 'cat-electronics-img-a1b2c3',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, kitchenware, storage solutions, and soft furnishings from Guangdong and Zhejiang.',
    items: ['Office Furniture', 'Home Décor', 'Kitchenware', 'Storage Solutions', 'Soft Furnishings', 'Outdoor Furniture'],
    titleId: 'cat-furniture-title',
    descId: 'cat-furniture-desc',
    imgId: 'cat-furniture-img-d4e5f6',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fabrics, and accessories from China\'s major textile manufacturing hubs.',
    items: ['Clothing & Garments', 'Sportswear', 'Workwear & Uniforms', 'Fabrics & Textiles', 'Bags & Accessories', 'Footwear'],
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
    imgId: 'cat-apparel-img-g7h8i9',
  },
  {
    id: 'industrial',
    title: 'Industrial Equipment',
    desc: 'Machinery, tools, safety equipment, and industrial components for manufacturing and construction sectors.',
    items: ['Machinery & Equipment', 'Hand & Power Tools', 'Safety Equipment', 'Industrial Components', 'Hydraulics & Pneumatics', 'Welding Equipment'],
    titleId: 'cat-industrial-title',
    descId: 'cat-industrial-desc',
    imgId: 'cat-industrial-img-j1k2l3',
  },
  {
    id: 'packaging',
    title: 'Packaging Materials',
    desc: 'Custom packaging, corrugated boxes, plastic packaging, labels, and eco-friendly packaging solutions.',
    items: ['Custom Boxes', 'Corrugated Packaging', 'Plastic Packaging', 'Labels & Stickers', 'Eco-Friendly Packaging', 'Retail Packaging'],
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
    imgId: 'cat-packaging-img-m4n5o6',
  },
  {
    id: 'consumer',
    title: 'Consumer Products',
    desc: 'Health and beauty products, sports equipment, pet products, and general consumer goods.',
    items: ['Health & Beauty', 'Sports & Fitness', 'Pet Products', 'Baby Products', 'Garden & Outdoor', 'Cleaning Products'],
    titleId: 'cat-consumer-title',
    descId: 'cat-consumer-desc',
    imgId: 'cat-consumer-img-p7q8r9',
  },
  {
    id: 'automotive',
    title: 'Automotive Parts',
    desc: 'OEM and aftermarket automotive parts, accessories, and components for global automotive markets.',
    items: ['OEM Parts', 'Aftermarket Accessories', 'Lighting & Electrical', 'Interior Accessories', 'Tires & Wheels', 'Engine Components'],
    titleId: 'cat-auto-title',
    descId: 'cat-auto-desc',
    imgId: 'cat-auto-img-q1r2s3',
  },
  {
    id: 'toys',
    title: 'Toys & Gifts',
    desc: 'Toys, games, promotional gifts, and novelty items from China\'s toy manufacturing capital in Guangdong.',
    items: ['Children\'s Toys', 'Educational Toys', 'Promotional Gifts', 'Seasonal Items', 'Plush & Stuffed Toys', 'Games & Puzzles'],
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
    imgId: 'cat-toys-img-t4u5v6',
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
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Product Categories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">Products We Source</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            We source across a wide range of manufacturing categories from China's key industrial regions. Don't see your product? Contact us — we likely can help.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 md:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-52 bg-gray-100 overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={cat.titleId} className="text-xl font-bold text-text-dark mb-2">{cat.title}</h2>
                  <p id={cat.descId} className="text-gray-500 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="bg-blue-50 text-primary text-xs font-medium px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 border border-gray-100 text-center">
            <h2 className="text-2xl font-bold text-text-dark mb-3">Don't See Your Product?</h2>
            <p className="text-gray-500 mb-6 max-w-xl mx-auto">
              Our sourcing network covers most manufacturing categories in China. Send us your product details and we will assess whether we can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Submit a Sourcing Request <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
