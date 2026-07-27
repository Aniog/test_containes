import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, sensors, LED lighting, cables, connectors, and electronic assemblies. We source from Guangdong\'s electronics manufacturing hubs.',
    examples: 'Smart home devices, LED panels, circuit boards, power adapters, USB accessories',
    imgId: 'prod-electronics-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden Products',
    desc: 'Furniture, kitchenware, home textiles, garden tools, lighting fixtures, and decorative items. Strong supplier networks in Foshan and surrounding areas.',
    examples: 'Kitchen utensils, outdoor furniture, ceramic tiles, home storage, garden equipment',
    imgId: 'prod-home-d4e5f6',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Garments, fabrics, bags, shoes, and fashion accessories. We work with suppliers in Guangdong and Zhejiang textile clusters.',
    examples: 'T-shirts, sportswear, handbags, footwear, upholstery fabrics',
    imgId: 'prod-textiles-g7h8i9',
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
  },
  {
    id: 'machinery',
    title: 'Industrial & Machinery',
    desc: 'Processing equipment, CNC parts, pumps, valves, motors, and industrial tools. Sourced from Jiangsu and Zhejiang manufacturing regions.',
    examples: 'CNC machined parts, hydraulic valves, industrial pumps, conveyor systems, metal fabrication',
    imgId: 'prod-machinery-j1k2l3',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bottles, and printing materials. Wide supplier coverage across multiple regions.',
    examples: 'Custom boxes, food-grade packaging, cosmetic containers, product labels, flexible packaging',
    imgId: 'prod-packaging-m4n5o6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Car parts, motorcycle components, EV accessories, and automotive tools. Sourced from specialized automotive manufacturing zones.',
    examples: 'Brake components, EV charging cables, car seat covers, motorcycle parts, diagnostic tools',
    imgId: 'prod-auto-p7q8r9',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    id: 'building-materials',
    title: 'Building Materials',
    desc: 'Ceramic tiles, sanitary ware, hardware, doors, windows, and construction materials from China\'s building material production centers.',
    examples: 'Floor tiles, bathroom fixtures, door handles, aluminum profiles, glass panels',
    imgId: 'prod-building-s1t2u3',
    titleId: 'prod-building-title',
    descId: 'prod-building-desc',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, health devices, and wellness items with compliance support for destination market regulations.',
    examples: 'Skincare products, hair tools, fitness equipment, massage devices, cosmetic packaging',
    imgId: 'prod-health-v4w5x6',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="products-page-title" className="text-3xl md:text-4xl font-bold text-white mb-4">Products We Source</h1>
          <p id="products-page-subtitle" className="text-primary-200 text-lg max-w-2xl">
            We work across a wide range of product categories — from consumer goods to industrial equipment. If it's made in China, we can help you source it.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-neutral-50 border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-subtitle] [products-page-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-56 object-cover bg-neutral-200"
                />
                <div className="p-6 md:p-8">
                  <h2 id={cat.titleId} className="text-lg md:text-xl font-bold text-neutral-800 mb-2">{cat.title}</h2>
                  <p id={cat.descId} className="text-neutral-500 text-sm leading-relaxed mb-3">{cat.desc}</p>
                  <div className="bg-white border border-neutral-200 rounded p-3">
                    <span className="text-neutral-400 text-xs font-medium uppercase tracking-wide mb-1 block">Common examples</span>
                    <p className="text-neutral-600 text-sm">{cat.examples}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">Don't See Your Product Category?</h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto mb-8">
            We source far more categories than listed here. Tell us what you need and we'll assess whether we can help.
          </p>
          <Link
            to="/contact"
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md text-base font-semibold transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
