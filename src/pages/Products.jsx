import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    label: 'Electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic accessories.',
    examples: ['LED lighting', 'Power banks', 'Smart home devices', 'PCB assemblies', 'Cables & connectors', 'Surveillance cameras'],
    imgId: 'products-electronics-main-3a7f2c',
    titleId: 'products-electronics-main-title',
    descId: 'products-electronics-main-desc',
  },
  {
    id: 'furniture',
    label: 'Furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, kitchenware, and household products from verified Chinese manufacturers.',
    examples: ['Office chairs & desks', 'Sofas & beds', 'Storage shelving', 'Kitchen accessories', 'Home décor', 'Garden furniture'],
    imgId: 'products-furniture-main-8b1e4d',
    titleId: 'products-furniture-main-title',
    descId: 'products-furniture-main-desc',
  },
  {
    id: 'apparel',
    label: 'Apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, uniforms, fabrics, and fashion accessories from certified textile factories.',
    examples: ['T-shirts & hoodies', 'Sportswear', 'Workwear & uniforms', 'Bags & accessories', 'Fabrics & materials', 'Socks & underwear'],
    imgId: 'products-apparel-main-5c9a3f',
    titleId: 'products-apparel-main-title',
    descId: 'products-apparel-main-desc',
  },
  {
    id: 'machinery',
    label: 'Machinery',
    title: 'Machinery & Industrial',
    desc: 'Industrial equipment, tools, spare parts, and manufacturing machinery for businesses and industrial buyers.',
    examples: ['Power tools', 'Industrial pumps', 'CNC machine parts', 'Safety equipment', 'Hydraulic components', 'Conveyor systems'],
    imgId: 'products-machinery-main-2d6b8a',
    titleId: 'products-machinery-main-title',
    descId: 'products-machinery-main-desc',
  },
  {
    id: 'packaging',
    label: 'Packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, and promotional printed materials for brands and retailers.',
    examples: ['Custom boxes', 'Paper bags', 'Labels & stickers', 'Promotional materials', 'Plastic packaging', 'Gift packaging'],
    imgId: 'products-packaging-main-9e4c1b',
    titleId: 'products-packaging-main-title',
    descId: 'products-packaging-main-desc',
  },
  {
    id: 'toys',
    label: 'Toys & Baby',
    title: 'Toys & Baby Products',
    desc: 'Toys, educational products, baby gear, and children\'s accessories from EN71 and ASTM certified factories.',
    examples: ['Plush toys', 'Educational toys', 'Baby strollers', 'Baby clothing', 'Outdoor play equipment', 'Board games'],
    imgId: 'products-toys-main-6f2a7d',
    titleId: 'products-toys-main-title',
    descId: 'products-toys-main-desc',
  },
  {
    id: 'health',
    label: 'Health & Beauty',
    title: 'Health & Beauty Products',
    desc: 'Personal care products, cosmetics, medical devices, fitness equipment, and wellness products.',
    examples: ['Skincare products', 'Fitness equipment', 'Medical gloves', 'Massage devices', 'Hair accessories', 'Supplements packaging'],
    imgId: 'products-health-main-1b8e5c',
    titleId: 'products-health-main-title',
    descId: 'products-health-main-desc',
  },
  {
    id: 'auto',
    label: 'Auto Parts',
    title: 'Automotive Parts & Accessories',
    desc: 'Car parts, accessories, tools, and components for automotive distributors and retailers.',
    examples: ['Car accessories', 'LED car lights', 'Tires & wheels', 'Engine parts', 'Car care products', 'EV components'],
    imgId: 'products-auto-main-4a3f9b',
    titleId: 'products-auto-main-title',
    descId: 'products-auto-main-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('electronics');

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  const active = categories.find((c) => c.id === activeCategory);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-dark py-20">
        <div className="section-container text-center">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">What We Source</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Products We Source
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We source across a wide range of product categories from verified Chinese manufacturers.
            Don't see your product? Contact us — we can source almost anything made in China.
          </p>
        </div>
      </section>

      {/* Category Tabs + Detail */}
      <section className="section-padding bg-white">
        <div className="section-container">
          {/* Tab Bar */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-brand-border pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-brand-navy text-white'
                    : 'bg-brand-light-blue text-brand-body hover:bg-brand-navy/10 hover:text-brand-navy'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Active Category Detail */}
          {active && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="rounded-2xl overflow-hidden h-72 md:h-96">
                <img
                  alt={active.title}
                  data-strk-img-id={active.imgId}
                  data-strk-img={`[${active.descId}] [${active.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 id={active.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">
                  {active.title}
                </h2>
                <p id={active.descId} className="text-brand-body leading-relaxed mb-6">
                  {active.desc}
                </p>
                <h3 className="text-sm font-semibold text-brand-dark uppercase tracking-wider mb-3">
                  Example Products
                </h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {active.examples.map((ex) => (
                    <span
                      key={ex}
                      className="bg-brand-light-blue text-brand-navy text-sm px-3 py-1.5 rounded-lg font-medium"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Source This Product Category
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="section-padding bg-brand-light-blue">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">All Product Categories</h2>
            <p className="text-brand-body max-w-xl mx-auto">
              A quick overview of all the product categories we regularly source from China.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-xl p-5 border border-brand-border text-left hover:shadow-md hover:border-brand-navy/30 transition-all group"
              >
                <h3 className="text-base font-semibold text-brand-dark mb-1 group-hover:text-brand-navy transition-colors">
                  {cat.title}
                </h3>
                <p className="text-brand-muted text-xs leading-relaxed line-clamp-2">{cat.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Product?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            We can source almost any product manufactured in China. Contact us with your requirements.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Send Us Your Product Requirements
          </Link>
        </div>
      </section>
    </div>
  );
}
