import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic accessories.',
    examples: ['LED lighting', 'Power banks', 'Smart home devices', 'PCB assemblies', 'Cables & connectors'],
    imgId: 'pcat-electronics-3a7b2c',
    titleId: 'pcat-electronics-title',
    descId: 'pcat-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, soft furnishings, kitchenware, and household accessories.',
    examples: ['Office chairs & desks', 'Storage furniture', 'Home décor', 'Kitchenware', 'Bedding & textiles'],
    imgId: 'pcat-furniture-8c4d1e',
    titleId: 'pcat-furniture-title',
    descId: 'pcat-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Garments, sportswear, workwear, uniforms, fabrics, and fashion accessories for private label and wholesale.',
    examples: ['Sportswear', 'Workwear & uniforms', 'Fashion garments', 'Fabrics & materials', 'Bags & accessories'],
    imgId: 'pcat-apparel-5e2b8f',
    titleId: 'pcat-apparel-title',
    descId: 'pcat-apparel-desc',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    desc: 'Manufacturing equipment, tools, spare parts, industrial supplies, and automation components.',
    examples: ['CNC machines', 'Hydraulic equipment', 'Power tools', 'Spare parts', 'Safety equipment'],
    imgId: 'pcat-machinery-1d7c3a',
    titleId: 'pcat-machinery-title',
    descId: 'pcat-machinery-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, promotional materials, and branded merchandise.',
    examples: ['Custom boxes', 'Printed labels', 'Retail packaging', 'Promotional items', 'Paper bags'],
    imgId: 'pcat-packaging-9b5e2d',
    titleId: 'pcat-packaging-title',
    descId: 'pcat-packaging-desc',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, supplements, medical devices, and wellness goods.',
    examples: ['Skincare products', 'Supplements', 'Medical devices', 'Fitness equipment', 'Wellness accessories'],
    imgId: 'pcat-health-4f8a2b',
    titleId: 'pcat-health-title',
    descId: 'pcat-health-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Games',
    desc: 'Children\'s toys, educational games, outdoor play equipment, and hobby products.',
    examples: ['Educational toys', 'Outdoor play equipment', 'Board games', 'RC vehicles', 'Plush toys'],
    imgId: 'pcat-toys-7c3d1e',
    titleId: 'pcat-toys-title',
    descId: 'pcat-toys-desc',
  },
  {
    id: 'automotive',
    title: 'Automotive Parts',
    desc: 'Car accessories, replacement parts, tools, and aftermarket automotive components.',
    examples: ['Car accessories', 'Replacement parts', 'Lighting', 'Tools & equipment', 'Interior accessories'],
    imgId: 'pcat-auto-2a9f5c',
    titleId: 'pcat-auto-title',
    descId: 'pcat-auto-desc',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    desc: 'Sports equipment, outdoor gear, fitness accessories, and recreational products.',
    examples: ['Fitness equipment', 'Camping gear', 'Sports apparel', 'Cycling accessories', 'Water sports'],
    imgId: 'pcat-sports-6e4b1f',
    titleId: 'pcat-sports-title',
    descId: 'pcat-sports-desc',
  },
];

export default function ProductsWeSouce() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="container-xl">
          <div className="max-w-2xl">
            <span className="text-blue-300 text-sm font-semibold uppercase tracking-wider">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Products We Source
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We work across a wide range of product categories, connecting buyers with
              the right manufacturers in China's key industrial regions.
            </p>
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="card group flex flex-col">
                <div className="h-44 rounded-lg overflow-hidden bg-gray-100 mb-4 -mx-2 -mt-2">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                  />
                </div>
                <h3 id={cat.titleId} className="font-semibold text-brand-dark mb-2">{cat.title}</h3>
                <p id={cat.descId} className="text-brand-mid text-sm leading-relaxed mb-4 flex-1">{cat.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.examples.map((ex) => (
                    <span key={ex} className="bg-blue-50 text-brand-blue text-xs px-2.5 py-1 rounded-full font-medium">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-brand-light rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl font-bold text-brand-dark mb-3">
              Don't see your product category?
            </h2>
            <p className="text-brand-mid mb-6 max-w-xl mx-auto">
              We source a wide variety of products beyond the categories listed above.
              Contact us with your requirements and we'll let you know if we can help.
            </p>
            <Link to="/contact#quote" className="btn-primary inline-flex items-center gap-2">
              Submit Your Requirements <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
