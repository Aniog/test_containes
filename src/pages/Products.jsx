import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const allCategories = [
  {
    id: 'electronics',
    category: 'Electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, and electronic accessories.',
    examples: ['LED Lighting', 'Power Banks', 'Smart Home Devices', 'PCB Assemblies', 'Cables & Connectors'],
    imgId: 'prod-page-electronics-4a2b7c',
    titleId: 'prod-page-electronics-title',
    descId: 'prod-page-electronics-desc',
  },
  {
    id: 'furniture',
    category: 'Furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, kitchenware, and household products.',
    examples: ['Office Chairs', 'Storage Shelving', 'Kitchen Accessories', 'Decorative Items', 'Bedding'],
    imgId: 'prod-page-furniture-7d3e1f',
    titleId: 'prod-page-furniture-title',
    descId: 'prod-page-furniture-desc',
  },
  {
    id: 'apparel',
    category: 'Apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, uniforms, fabrics, and fashion accessories.',
    examples: ['Sportswear', 'Workwear & Uniforms', 'Fashion Accessories', 'Bags & Luggage', 'Fabrics'],
    imgId: 'prod-page-apparel-2c8f5a',
    titleId: 'prod-page-apparel-title',
    descId: 'prod-page-apparel-desc',
  },
  {
    id: 'machinery',
    category: 'Machinery',
    title: 'Machinery & Industrial',
    desc: 'Industrial equipment, power tools, hardware, fasteners, and manufacturing machinery.',
    examples: ['Power Tools', 'Industrial Pumps', 'Hardware & Fasteners', 'Safety Equipment', 'Generators'],
    imgId: 'prod-page-machinery-5b1d9e',
    titleId: 'prod-page-machinery-title',
    descId: 'prod-page-machinery-desc',
  },
  {
    id: 'plastics',
    category: 'Plastics',
    title: 'Plastics & Packaging',
    desc: 'Plastic products, packaging materials, containers, custom injection-molded parts.',
    examples: ['Custom Molded Parts', 'Packaging Materials', 'Plastic Containers', 'Foam Packaging', 'Labels'],
    imgId: 'prod-page-plastics-8e4a2c',
    titleId: 'prod-page-plastics-title',
    descId: 'prod-page-plastics-desc',
  },
  {
    id: 'health',
    category: 'Health & Beauty',
    title: 'Health & Beauty',
    desc: 'Personal care products, medical devices, wellness items, and cosmetics.',
    examples: ['Personal Care Products', 'Medical Devices', 'Supplements Packaging', 'Cosmetics', 'Fitness Equipment'],
    imgId: 'prod-page-health-3f7b1d',
    titleId: 'prod-page-health-title',
    descId: 'prod-page-health-desc',
  },
  {
    id: 'toys',
    category: 'Toys',
    title: 'Toys & Games',
    desc: 'Children\'s toys, educational games, outdoor play equipment, and hobby products.',
    examples: ['Educational Toys', 'Outdoor Play Equipment', 'Board Games', 'RC Vehicles', 'Plush Toys'],
    imgId: 'prod-page-toys-6c2e8a',
    titleId: 'prod-page-toys-title',
    descId: 'prod-page-toys-desc',
  },
  {
    id: 'sports',
    category: 'Sports',
    title: 'Sports & Outdoor',
    desc: 'Sports equipment, outdoor gear, camping products, and fitness accessories.',
    examples: ['Fitness Equipment', 'Camping Gear', 'Cycling Accessories', 'Water Sports', 'Team Sports Equipment'],
    imgId: 'prod-page-sports-1a5d3f',
    titleId: 'prod-page-sports-title',
    descId: 'prod-page-sports-desc',
  },
  {
    id: 'automotive',
    category: 'Automotive',
    title: 'Automotive Parts',
    desc: 'Car accessories, replacement parts, tools, and automotive electronics.',
    examples: ['Car Accessories', 'Replacement Parts', 'Automotive Electronics', 'Tires & Wheels', 'Tools'],
    imgId: 'prod-page-auto-9b4f2e',
    titleId: 'prod-page-auto-title',
    descId: 'prod-page-auto-desc',
  },
  {
    id: 'construction',
    category: 'Construction',
    title: 'Construction & Building',
    desc: 'Building materials, hardware, tools, and construction equipment.',
    examples: ['Building Materials', 'Hardware', 'Power Tools', 'Safety Equipment', 'Flooring'],
    imgId: 'prod-page-construction-4d8a1c',
    titleId: 'prod-page-construction-title',
    descId: 'prod-page-construction-desc',
  },
  {
    id: 'food',
    category: 'Food',
    title: 'Food & Beverage Equipment',
    desc: 'Food processing equipment, packaging machinery, and food service products.',
    examples: ['Food Processing Equipment', 'Packaging Machinery', 'Kitchen Equipment', 'Food Containers', 'Utensils'],
    imgId: 'prod-page-food-7e3b5d',
    titleId: 'prod-page-food-title',
    descId: 'prod-page-food-desc',
  },
  {
    id: 'gifts',
    category: 'Gifts',
    title: 'Gifts & Promotional Items',
    desc: 'Corporate gifts, promotional merchandise, branded items, and novelty products.',
    examples: ['Corporate Gifts', 'Branded Merchandise', 'Promotional Items', 'Novelty Products', 'Seasonal Items'],
    imgId: 'prod-page-gifts-2c6f9a',
    titleId: 'prod-page-gifts-title',
    descId: 'prod-page-gifts-desc',
  },
];

const filterCategories = ['All', ...new Set(allCategories.map((c) => c.category))];

export default function Products() {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? allCategories
    : allCategories.filter((c) => c.category === activeFilter);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeFilter]);

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Product Categories</span>
          <h1 id="products-page-title" className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            Products We Source from China
          </h1>
          <p id="products-page-subtitle" className="text-blue-200 text-lg max-w-2xl mx-auto">
            We have experience sourcing across 30+ product categories. If your product isn't listed, contact us — we likely have relevant supplier contacts.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === cat
                    ? 'bg-brand-blue text-white'
                    : 'bg-brand-gray text-brand-text hover:bg-brand-blue-light hover:text-brand-blue border border-brand-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((cat) => (
              <div key={cat.id} className="bg-brand-gray rounded-xl overflow-hidden border border-brand-border hover:shadow-md transition-shadow group">
                <div className="relative h-40 overflow-hidden bg-brand-blue-light">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-subtitle] [products-page-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-brand-blue text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      {cat.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="font-semibold text-brand-text mb-1.5 text-sm">{cat.title}</h3>
                  <p id={cat.descId} className="text-brand-muted text-xs leading-relaxed mb-3">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.examples.slice(0, 3).map((ex) => (
                      <span key={ex} className="bg-brand-blue-light text-brand-blue text-xs px-2 py-0.5 rounded-full">
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
      <section className="py-16 bg-brand-blue-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-text mb-4">Don't See Your Product?</h2>
          <p className="text-brand-muted mb-8">
            We source across many more categories. Contact us with your product details and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Submit a Sourcing Request <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
