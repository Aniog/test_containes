import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, cables, LED lighting, smart home devices, batteries, and electronic accessories.',
    examples: ['LED lighting', 'Smart home devices', 'PCBs & components', 'Cables & connectors', 'Batteries & chargers'],
    imgId: 'products-electronics-a1b2c3',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Décor',
    description: 'Office furniture, sofas, tables, chairs, shelving, decorative items, and storage solutions for residential and commercial use.',
    examples: ['Office chairs & desks', 'Sofas & seating', 'Storage & shelving', 'Decorative accessories', 'Outdoor furniture'],
    imgId: 'products-furniture-d4e5f6',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    description: 'Clothing, sportswear, uniforms, workwear, fabrics, and fashion accessories for retail and wholesale buyers.',
    examples: ['T-shirts & hoodies', 'Sportswear & activewear', 'Uniforms & workwear', 'Fabrics & materials', 'Bags & accessories'],
    imgId: 'products-apparel-g7h8i9',
  },
  {
    id: 'machinery',
    title: 'Machinery & Industrial Tools',
    description: 'Industrial equipment, power tools, hand tools, spare parts, and manufacturing machinery for B2B buyers.',
    examples: ['Power tools', 'Hand tools', 'Industrial equipment', 'Spare parts', 'Safety equipment'],
    imgId: 'products-machinery-j1k2l3',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    description: 'Custom boxes, bags, labels, promotional materials, and branded packaging for retail and e-commerce businesses.',
    examples: ['Custom boxes', 'Poly bags & mailers', 'Labels & stickers', 'Promotional materials', 'Gift packaging'],
    imgId: 'products-packaging-m4n5o6',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    description: 'Personal care products, cosmetics, supplements, medical devices, and wellness products.',
    examples: ['Skincare & cosmetics', 'Supplements & vitamins', 'Medical devices', 'Personal care tools', 'Wellness products'],
    imgId: 'products-health-p7q8r9',
  },
  {
    id: 'toys',
    title: 'Toys & Games',
    description: 'Children\'s toys, educational games, outdoor play equipment, and hobby products for retail and wholesale.',
    examples: ['Educational toys', 'Outdoor play equipment', 'Board games', 'RC vehicles', 'Plush toys'],
    imgId: 'products-toys-s1t2u3',
  },
  {
    id: 'automotive',
    title: 'Automotive Parts',
    description: 'Car accessories, replacement parts, tools, and aftermarket components for automotive retailers and workshops.',
    examples: ['Car accessories', 'Replacement parts', 'Lighting & electronics', 'Tools & equipment', 'Tires & wheels'],
    imgId: 'products-auto-v4w5x6',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoors',
    description: 'Fitness equipment, outdoor gear, sporting goods, and camping accessories for retail and e-commerce.',
    examples: ['Fitness equipment', 'Camping gear', 'Cycling accessories', 'Water sports', 'Team sports equipment'],
    imgId: 'products-sports-y7z8a9',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="bg-white" ref={containerRef}>
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              Products We Source from China
            </h1>
            <p className="text-slate-400 text-lg">
              We work across 50+ product categories. If it's manufactured in China, we can source it — with full quality control and supplier verification.
            </p>
          </div>
        </div>
      </div>

      {/* Categories grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="border border-slate-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
              <div className="aspect-video overflow-hidden bg-slate-100">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[products-${cat.id}-desc] [products-${cat.id}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 id={`products-${cat.id}-title`} className="text-lg font-bold text-slate-900 mb-2">{cat.title}</h2>
                <p id={`products-${cat.id}-desc`} className="text-slate-500 text-sm leading-relaxed mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.examples.map((ex) => (
                    <span key={ex} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full">{ex}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-700 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't see your product category?</h2>
          <p className="text-blue-200 mb-8">We source a wide range of products. Contact us and we'll let you know if we can help.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Ask About Your Product <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
