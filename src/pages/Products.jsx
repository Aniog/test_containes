import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, connectors, smart home devices, and electronic accessories.',
    items: ['LED Lighting', 'PCB Assembly', 'Consumer Electronics', 'Cables & Connectors', 'Smart Devices'],
    imgId: 'prod-electronics-img-3a7c2e',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, bathroom fixtures, garden tools, home decor, and storage solutions.',
    items: ['Furniture', 'Kitchenware', 'Bathroom Fixtures', 'Garden Tools', 'Home Decor'],
    imgId: 'prod-home-img-6d1f8b',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, uniforms, fabrics, accessories, bags, and footwear from certified textile factories.',
    items: ['Clothing & Sportswear', 'Uniforms & Workwear', 'Bags & Luggage', 'Footwear', 'Fabrics & Textiles'],
    imgId: 'prod-apparel-img-9b4e5a',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    desc: 'CNC machines, industrial equipment, tools, hardware, valves, pumps, and manufacturing components.',
    items: ['CNC Machines', 'Industrial Tools', 'Valves & Pumps', 'Hardware & Fasteners', 'Safety Equipment'],
    imgId: 'prod-industrial-img-2c8f7d',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, corrugated boxes, labels, plastic containers, glass bottles, and printing services.',
    items: ['Custom Boxes', 'Plastic Containers', 'Glass Bottles', 'Labels & Stickers', 'Flexible Packaging'],
    imgId: 'prod-packaging-img-5a3d9c',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto parts, car accessories, tires, filters, brake components, and vehicle electronics.',
    items: ['Brake Components', 'Filters & Belts', 'Car Electronics', 'Interior Accessories', 'Tires & Wheels'],
    imgId: 'prod-auto-img-8e2b6f',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, supplements, medical devices, personal care products, and salon equipment.',
    items: ['Skincare & Cosmetics', 'Supplements', 'Medical Devices', 'Personal Care', 'Salon Equipment'],
    imgId: 'prod-health-img-1f7a4c',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'toys-sports',
    title: 'Toys & Sporting Goods',
    desc: 'Children toys, outdoor equipment, fitness gear, camping supplies, and recreational products.',
    items: ['Children Toys', 'Fitness Equipment', 'Outdoor Gear', 'Camping Supplies', 'Board Games'],
    imgId: 'prod-toys-img-4d9c2a',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
  },
];

const Products = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="bg-brand-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            Products We Source
          </h1>
          <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
            We source across 50+ product categories from verified Chinese manufacturers. If it is made in China, we can source it for you.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white border border-brand-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="text-base font-semibold text-brand-navy mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-xs text-brand-gray-600 leading-relaxed mb-3">{cat.desc}</p>
                  <ul className="space-y-1 list-none p-0 m-0">
                    {cat.items.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-brand-green flex-shrink-0" />
                        <span className="text-xs text-brand-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-16 md:py-20 bg-brand-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            Do Not See Your Product?
          </h2>
          <p className="text-brand-gray-600 text-lg mb-8">
            We source custom and niche products too. Send us your requirements and we will find the right manufacturer for you.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-orange text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-orange-600 transition-colors no-underline"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
