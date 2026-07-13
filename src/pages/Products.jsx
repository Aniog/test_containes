import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';
import CTABanner from '../components/shared/CTABanner';

const categories = [
  {
    id: 'electronics',
    label: 'Electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, cables, LED lighting, batteries, and electronic accessories.',
    products: ['Consumer Electronics', 'PCBs & Components', 'LED Lighting', 'Cables & Connectors', 'Batteries', 'Smart Home Devices'],
    imgId: 'prod-page-electronics-1a2b',
    titleId: 'prod-page-electronics-title',
    descId: 'prod-page-electronics-desc',
  },
  {
    id: 'furniture',
    label: 'Furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, soft furnishings, and kitchenware.',
    products: ['Office Furniture', 'Home Décor', 'Storage Solutions', 'Kitchenware', 'Bedding & Textiles', 'Outdoor Furniture'],
    imgId: 'prod-page-furniture-2b3c',
    titleId: 'prod-page-furniture-title',
    descId: 'prod-page-furniture-desc',
  },
  {
    id: 'apparel',
    label: 'Apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, uniforms, fabrics, and fashion accessories.',
    products: ['Casual Clothing', 'Sportswear', 'Workwear & Uniforms', 'Fabrics & Yarn', 'Fashion Accessories', 'Bags & Luggage'],
    imgId: 'prod-page-apparel-3c4d',
    titleId: 'prod-page-apparel-title',
    descId: 'prod-page-apparel-desc',
  },
  {
    id: 'machinery',
    label: 'Machinery',
    title: 'Industrial Machinery & Tools',
    desc: 'Manufacturing equipment, power tools, hand tools, spare parts, and industrial components.',
    products: ['Manufacturing Equipment', 'Power Tools', 'Hand Tools', 'Spare Parts', 'Industrial Components', 'Safety Equipment'],
    imgId: 'prod-page-machinery-4d5e',
    titleId: 'prod-page-machinery-title',
    descId: 'prod-page-machinery-desc',
  },
  {
    id: 'packaging',
    label: 'Packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, promotional materials, and display solutions.',
    products: ['Custom Boxes', 'Printed Labels', 'Plastic Bags', 'Paper Packaging', 'Display Stands', 'Promotional Materials'],
    imgId: 'prod-page-packaging-5e6f',
    titleId: 'prod-page-packaging-title',
    descId: 'prod-page-packaging-desc',
  },
  {
    id: 'toys',
    label: 'Toys & Sports',
    title: 'Toys & Sporting Goods',
    desc: "Children's toys, outdoor equipment, fitness gear, hobby products, and games.",
    products: ["Children's Toys", 'Outdoor Equipment', 'Fitness Gear', 'Hobby Products', 'Board Games', 'Sports Accessories'],
    imgId: 'prod-page-toys-6f7a',
    titleId: 'prod-page-toys-title',
    descId: 'prod-page-toys-desc',
  },
  {
    id: 'health',
    label: 'Health & Beauty',
    title: 'Health, Beauty & Personal Care',
    desc: 'Cosmetics, skincare, health supplements, medical devices, and personal care products.',
    products: ['Cosmetics & Skincare', 'Hair Care', 'Health Supplements', 'Medical Devices', 'Personal Care', 'Wellness Products'],
    imgId: 'prod-page-health-7a8b',
    titleId: 'prod-page-health-title',
    descId: 'prod-page-health-desc',
  },
  {
    id: 'auto',
    label: 'Auto Parts',
    title: 'Automotive Parts & Accessories',
    desc: 'Car parts, motorcycle accessories, EV components, and automotive tools.',
    products: ['Car Parts', 'Motorcycle Accessories', 'EV Components', 'Automotive Tools', 'Car Electronics', 'Tires & Wheels'],
    imgId: 'prod-page-auto-8b9c',
    titleId: 'prod-page-auto-title',
    descId: 'prod-page-auto-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  const displayed = activeCategory
    ? categories.filter((c) => c.id === activeCategory)
    : categories;

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
              Product Categories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 tracking-tight">
              Products We Source from China
            </h1>
            <p className="text-slate-300 text-lg mt-4 leading-relaxed">
              We have established supplier networks across all major Chinese manufacturing sectors.
              If you don't see your product category, contact us — we can source almost anything made in China.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            <button
              onClick={() => setActiveCategory(null)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !activeCategory
                  ? 'bg-brand-blue text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-brand-blue text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayed.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:,"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={cat.titleId} className="text-xl font-bold text-slate-900 mb-2">
                    {cat.title}
                  </h2>
                  <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cat.products.map((p) => (
                      <span
                        key={p}
                        className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:underline"
                  >
                    Source This Category <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Don't See Your Product Category?"
        subtitle="We source a wide range of products beyond the categories listed. Contact us with your requirements."
        buttonText="Submit a Sourcing Inquiry"
        buttonLink="/contact"
      />
    </div>
  );
}
