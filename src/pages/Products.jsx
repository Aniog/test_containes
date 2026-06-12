import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    imgId: 'prod-electronics-img-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic components.',
    examples: ['Bluetooth speakers', 'LED strip lights', 'USB accessories', 'Smart home devices', 'PCB assemblies'],
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Decor',
    imgId: 'prod-furniture-img-d4e5f6',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    desc: 'Indoor and outdoor furniture, home accessories, decorative items, and storage solutions from Foshan and Guangdong.',
    examples: ['Office chairs', 'Dining tables', 'Sofas', 'Wall art', 'Storage shelves'],
  },
  {
    id: 'clothing',
    title: 'Clothing & Textiles',
    imgId: 'prod-clothing-img-g7h8i9',
    titleId: 'prod-clothing-title',
    descId: 'prod-clothing-desc',
    desc: 'Apparel, sportswear, workwear, fashion accessories, and technical textiles from Guangzhou and Zhejiang.',
    examples: ['T-shirts & hoodies', 'Sportswear', 'Workwear uniforms', 'Bags & accessories', 'Fabric rolls'],
  },
  {
    id: 'machinery',
    title: 'Machinery & Industrial',
    imgId: 'prod-machinery-img-j1k2l3',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
    desc: 'Industrial equipment, power tools, hardware, and manufacturing machinery from Zhejiang and Jiangsu.',
    examples: ['Power tools', 'CNC equipment', 'Pumps & motors', 'Hardware fittings', 'Safety equipment'],
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    imgId: 'prod-toys-img-m4n5o6',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
    desc: 'Educational toys, outdoor play equipment, baby care products, and children\'s accessories from Guangdong.',
    examples: ['Educational toys', 'Plush toys', 'Baby monitors', 'Strollers', 'Children\'s furniture'],
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    imgId: 'prod-health-img-p7q8r9',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
    desc: 'Personal care products, cosmetics, wellness devices, and health supplements from certified manufacturers.',
    examples: ['Skincare products', 'Hair care', 'Massage devices', 'Fitness equipment', 'Medical devices'],
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    imgId: 'prod-sports-img-s1t2u3',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
    desc: 'Fitness equipment, outdoor gear, camping products, and sporting goods from specialized manufacturers.',
    examples: ['Gym equipment', 'Camping gear', 'Cycling accessories', 'Water sports', 'Team sports gear'],
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    imgId: 'prod-packaging-img-v4w5x6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    desc: 'Custom packaging, printed materials, labels, boxes, and promotional items for retail and e-commerce.',
    examples: ['Custom boxes', 'Paper bags', 'Labels & stickers', 'Promotional items', 'Display stands'],
  },
  {
    id: 'auto',
    title: 'Auto Parts & Accessories',
    imgId: 'prod-auto-img-y7z8a9',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
    desc: 'Automotive components, car accessories, and replacement parts from verified manufacturers.',
    examples: ['Car accessories', 'Replacement parts', 'Lighting systems', 'Interior accessories', 'Tools'],
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-primary/20 border border-primary/30 text-blue-300 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            Products We Source
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Product Categories We Source
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            We source across a wide range of product categories from verified Chinese manufacturers. If your product isn't listed, contact us — we likely cover it.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-[3x2] bg-gray-100 overflow-hidden">
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
                  <h2 id={cat.titleId} className="text-xl font-bold text-gray-900 mb-2">{cat.title}</h2>
                  <p id={cat.descId} className="text-gray-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We source a wide variety of products beyond the categories listed above. Contact us with your requirements and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Ask About Your Product <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
