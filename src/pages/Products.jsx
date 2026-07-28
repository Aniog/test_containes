import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, connectors, smart home devices, and electronic accessories.',
    examples: ['LED lighting', 'USB cables & chargers', 'Smart home devices', 'PCB assemblies', 'Bluetooth speakers'],
    imgId: 'prod-electronics-img-4a2b8c',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, home decor, garden tools, storage solutions, and household products.',
    examples: ['Furniture', 'Kitchenware', 'Home decor', 'Garden tools', 'Storage solutions'],
    imgId: 'prod-home-img-7c3d9e',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, uniforms, fabrics, accessories, bags, and footwear manufacturing.',
    examples: ['Casual wear', 'Sportswear', 'Work uniforms', 'Bags & accessories', 'Footwear'],
    imgId: 'prod-apparel-img-2d5f1a',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    desc: 'CNC parts, industrial equipment, tools, hardware, pumps, valves, and manufacturing machinery.',
    examples: ['CNC machined parts', 'Industrial tools', 'Pumps & valves', 'Hardware & fasteners', 'Packaging machinery'],
    imgId: 'prod-industrial-img-8e6a3b',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto parts, car accessories, EV components, tires, and vehicle electronics.',
    examples: ['Brake pads & rotors', 'Car electronics', 'Interior accessories', 'EV components', 'Lighting systems'],
    imgId: 'prod-auto-img-1f4c7d',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, supplements, medical devices, personal care products, and packaging.',
    examples: ['Skincare products', 'Cosmetics packaging', 'Health supplements', 'Personal care devices', 'Medical supplies'],
    imgId: 'prod-health-img-5b8e2f',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, printing services, and display materials.',
    examples: ['Custom boxes', 'Product labels', 'Shopping bags', 'Display stands', 'Blister packaging'],
    imgId: 'prod-packaging-img-9c1d4a',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'building',
    title: 'Building Materials',
    desc: 'Construction materials, tiles, sanitary ware, doors, windows, and architectural hardware.',
    examples: ['Ceramic tiles', 'Sanitary ware', 'Doors & windows', 'Steel structures', 'Solar panels'],
    imgId: 'prod-building-img-6d3e7f',
    titleId: 'prod-building-title',
    descId: 'prod-building-desc',
  },
];

const Products = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Products We Source
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            We source across dozens of product categories. If it's manufactured in China, we can help you find the right supplier.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 id={cat.titleId} className="text-xl font-bold text-brand-text mb-2">{cat.title}</h2>
                  <p id={cat.descId} className="text-brand-muted text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-brand-blue text-xs font-medium rounded-full">
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

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-text mb-4">Don't See Your Product Category?</h2>
          <p className="text-brand-muted mb-8">
            We source products across virtually all manufacturing sectors in China. 
            Contact us with your specific requirements and we'll let you know how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
