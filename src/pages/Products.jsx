import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, smart devices, and electronic accessories.',
    examples: ['LED lighting', 'Smart home devices', 'Cables & connectors', 'PCBs & components', 'Portable chargers'],
    imgId: 'pcat-electronics-img-a1b2c3',
    titleId: 'pcat-electronics-title',
    descId: 'pcat-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, kitchenware, and household accessories.',
    examples: ['Office chairs & desks', 'Storage shelving', 'Kitchen accessories', 'Home décor', 'Outdoor furniture'],
    imgId: 'pcat-furniture-img-d4e5f6',
    titleId: 'pcat-furniture-title',
    descId: 'pcat-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, bags, shoes, and fabric accessories for retail and wholesale buyers.',
    examples: ['Activewear & sportswear', 'T-shirts & hoodies', 'Bags & backpacks', 'Shoes & footwear', 'Hats & accessories'],
    imgId: 'pcat-apparel-img-g7h8i9',
    titleId: 'pcat-apparel-title',
    descId: 'pcat-apparel-desc',
  },
  {
    id: 'machinery',
    title: 'Machinery & Industrial Tools',
    desc: 'Industrial equipment, power tools, hardware, mechanical parts, and manufacturing machinery.',
    examples: ['Power tools', 'Hand tools & hardware', 'Industrial machinery', 'Pumps & motors', 'Safety equipment'],
    imgId: 'pcat-machinery-img-j0k1l2',
    titleId: 'pcat-machinery-title',
    descId: 'pcat-machinery-desc',
  },
  {
    id: 'health',
    title: 'Health, Beauty & Personal Care',
    desc: 'Personal care products, medical devices, supplements, cosmetics, and wellness products.',
    examples: ['Skincare & cosmetics', 'Medical devices', 'Fitness equipment', 'Supplements packaging', 'Personal care tools'],
    imgId: 'pcat-health-img-m3n4o5',
    titleId: 'pcat-health-title',
    descId: 'pcat-health-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Sporting Goods',
    desc: 'Children\'s toys, outdoor equipment, fitness gear, games, and recreational products.',
    examples: ['Children\'s toys', 'Outdoor sports gear', 'Fitness equipment', 'Board games', 'Camping gear'],
    imgId: 'pcat-toys-img-p6q7r8',
    titleId: 'pcat-toys-title',
    descId: 'pcat-toys-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, boxes, bags, labels, and printed materials for retail and e-commerce.',
    examples: ['Custom boxes', 'Retail packaging', 'Labels & stickers', 'Poly bags', 'Gift packaging'],
    imgId: 'pcat-packaging-img-s9t0u1',
    titleId: 'pcat-packaging-title',
    descId: 'pcat-packaging-desc',
  },
  {
    id: 'auto',
    title: 'Auto Parts & Accessories',
    desc: 'Automotive components, car accessories, motorcycle parts, and vehicle maintenance products.',
    examples: ['Car accessories', 'Replacement parts', 'Motorcycle parts', 'Car care products', 'EV accessories'],
    imgId: 'pcat-auto-img-v2w3x4',
    titleId: 'pcat-auto-title',
    descId: 'pcat-auto-desc',
  },
  {
    id: 'food',
    title: 'Food & Agricultural Products',
    desc: 'Processed foods, dried goods, spices, agricultural products, and food packaging.',
    examples: ['Dried fruits & nuts', 'Spices & seasonings', 'Tea & herbal products', 'Canned goods', 'Food packaging'],
    imgId: 'pcat-food-img-y5z6a7',
    titleId: 'pcat-food-title',
    descId: 'pcat-food-desc',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-800 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Product Categories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Products We Source from China
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We work across a wide range of product categories, connecting global buyers with
            verified Chinese manufacturers for each specific product type.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
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
                <div className="p-5">
                  <h3 id={cat.titleId} className="font-bold text-slate-900 mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-sm text-slate-600 mb-4 leading-relaxed">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex) => (
                      <span
                        key={ex}
                        className="text-xs bg-blue-50 text-brand-blue border border-blue-100 px-2 py-0.5 rounded-full"
                      >
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
      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-slate-600 mb-6">
            We source a wide variety of products beyond the categories listed above. Contact us
            and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Ask About Your Product <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
