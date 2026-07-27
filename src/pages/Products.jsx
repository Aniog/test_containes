import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCB assemblies, LED lighting, cables, connectors, smart home devices, and IoT products.',
    items: ['LED Lighting', 'PCB Assembly', 'Consumer Electronics', 'Cables & Connectors', 'Smart Home Devices', 'Power Supplies'],
    imgId: 'products-electronics-a1b2c3',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Clothing, uniforms, sportswear, home textiles, fabrics, and fashion accessories from certified factories.',
    items: ['Workwear & Uniforms', 'Sportswear', 'Home Textiles', 'Fabrics & Materials', 'Fashion Accessories', 'Bags & Luggage'],
    imgId: 'products-textiles-d4e5f6',
  },
  {
    id: 'machinery',
    title: 'Machinery & Equipment',
    desc: 'Industrial machinery, CNC machines, packaging equipment, agricultural tools, and automotive parts.',
    items: ['CNC Machines', 'Packaging Equipment', 'Agricultural Machinery', 'Auto Parts', 'Industrial Tools', 'Pumps & Valves'],
    imgId: 'products-machinery-g7h8i9',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, bathroom fixtures, garden tools, outdoor furniture, and home decor items.',
    items: ['Furniture', 'Kitchenware', 'Bathroom Fixtures', 'Garden Tools', 'Home Decor', 'Outdoor Furniture'],
    imgId: 'products-home-j0k1l2',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, corrugated boxes, labels, promotional materials, and display stands.',
    items: ['Custom Boxes', 'Labels & Stickers', 'Display Stands', 'Promotional Items', 'Plastic Packaging', 'Paper Products'],
    imgId: 'products-packaging-m3n4o5',
  },
  {
    id: 'building',
    title: 'Building Materials',
    desc: 'Construction materials, hardware, plumbing, electrical fittings, tiles, and architectural elements.',
    items: ['Tiles & Flooring', 'Hardware & Fittings', 'Plumbing Supplies', 'Electrical Components', 'Steel & Metal', 'Glass Products'],
    imgId: 'products-building-p6q7r8',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, personal care products, medical devices, and health supplements packaging.',
    items: ['Cosmetics', 'Skincare Products', 'Personal Care', 'Medical Devices', 'Supplement Packaging', 'Beauty Tools'],
    imgId: 'products-health-s9t0u1',
  },
  {
    id: 'toys-sports',
    title: 'Toys & Sports',
    desc: 'Children toys, outdoor sports equipment, fitness gear, and recreational products.',
    items: ['Educational Toys', 'Outdoor Sports Gear', 'Fitness Equipment', 'Board Games', 'Inflatable Products', 'Camping Gear'],
    imgId: 'products-toys-v2w3x4',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="products-page-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
              Products We Source
            </h1>
            <p id="products-page-subtitle" className="text-lg text-white/80">
              We source across 50+ product categories from verified Chinese manufacturers. If it is made in China, we can find it for you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[products-cat-${cat.id}-desc] [products-cat-${cat.id}-title] [products-page-subtitle]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={`products-cat-${cat.id}-title`} className="text-xl font-bold text-neutral-900 mb-2">{cat.title}</h2>
                  <p id={`products-cat-${cat.id}-desc`} className="text-neutral-600 text-sm mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="inline-flex px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-100 text-neutral-700">
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

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Don't See Your Product?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            We source virtually any product manufactured in China. Send us your requirements and we will find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
