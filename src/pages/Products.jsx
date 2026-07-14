import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, cables, connectors, LED lighting, power supplies, and electronic accessories.',
    examples: ['LED lighting', 'PCB assemblies', 'Cables & connectors', 'Smart home devices', 'Power banks'],
    imgId: 'prod-page-electronics-img-a1b2',
    titleId: 'prod-page-electronics-title',
    descId: 'prod-page-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, kitchenware, and household products.',
    examples: ['Office chairs & desks', 'Storage furniture', 'Kitchen accessories', 'Home décor', 'Outdoor furniture'],
    imgId: 'prod-page-furniture-img-c3d4',
    titleId: 'prod-page-furniture-title',
    descId: 'prod-page-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fabrics, and fashion accessories for retail and wholesale buyers.',
    examples: ['Sportswear & activewear', 'Workwear & uniforms', 'Fashion accessories', 'Fabrics & textiles', 'Bags & luggage'],
    imgId: 'prod-page-apparel-img-e5f6',
    titleId: 'prod-page-apparel-title',
    descId: 'prod-page-apparel-desc',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery & Tools',
    desc: 'Manufacturing equipment, hand tools, power tools, spare parts, and industrial components.',
    examples: ['CNC machinery', 'Hand & power tools', 'Hydraulic equipment', 'Spare parts', 'Safety equipment'],
    imgId: 'prod-page-machinery-img-g7h8',
    titleId: 'prod-page-machinery-title',
    descId: 'prod-page-machinery-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom boxes, labels, bags, promotional materials, and branded packaging for retail and e-commerce.',
    examples: ['Custom printed boxes', 'Product labels', 'Poly bags & mailers', 'Promotional materials', 'Gift packaging'],
    imgId: 'prod-page-packaging-img-i9j0',
    titleId: 'prod-page-packaging-title',
    descId: 'prod-page-packaging-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Sporting Goods',
    desc: 'Toys, games, outdoor equipment, fitness gear, and recreational products.',
    examples: ['Children\'s toys', 'Board games', 'Fitness equipment', 'Outdoor gear', 'Sports accessories'],
    imgId: 'prod-page-toys-img-k1l2',
    titleId: 'prod-page-toys-title',
    descId: 'prod-page-toys-desc',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, medical devices, and wellness products.',
    examples: ['Skincare products', 'Hair care', 'Medical devices', 'Supplements packaging', 'Wellness accessories'],
    imgId: 'prod-page-health-img-m3n4',
    titleId: 'prod-page-health-title',
    descId: 'prod-page-health-desc',
  },
  {
    id: 'auto',
    title: 'Automotive Parts',
    desc: 'Car accessories, replacement parts, tools, and automotive electronics.',
    examples: ['Car accessories', 'Replacement parts', 'Automotive electronics', 'Tires & wheels', 'Workshop tools'],
    imgId: 'prod-page-auto-img-o5p6',
    titleId: 'prod-page-auto-title',
    descId: 'prod-page-auto-desc',
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
      {/* Page Header */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-2">Product Categories</p>
          <h1 id="products-page-title" className="text-white text-4xl md:text-5xl font-bold mb-4">
            Products We Source from China
          </h1>
          <p id="products-page-subtitle" className="text-blue-200 text-lg max-w-2xl mx-auto">
            We work across a wide range of product categories, connecting buyers with the right manufacturers for their specific needs.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative h-44 overflow-hidden">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-subtitle] [products-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h2 id={cat.titleId} className="text-neutral-900 font-semibold text-base mb-2">{cat.title}</h2>
                  <p id={cat.descId} className="text-neutral-500 text-sm leading-relaxed mb-3">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.slice(0, 3).map((ex) => (
                      <span key={ex} className="bg-neutral-100 text-neutral-600 text-xs px-2 py-0.5 rounded-full">{ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-500 text-base mb-4">Don't see your product category? We source a wide range of goods.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-red text-white px-7 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Ask About Your Product <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
