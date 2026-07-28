import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCB assemblies, LED lighting, power supplies, cables, connectors, and electronic accessories.',
    examples: ['LED panel lights', 'USB cables', 'Power adapters', 'PCB assemblies', 'Smart home devices'],
    titleId: 'prod-page-electronics-title',
    descId: 'prod-page-electronics-desc',
    imgId: 'prod-page-electronics-img-5a2c8d',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Clothing, sportswear, uniforms, home textiles, bags, and fabric sourcing with certification support.',
    examples: ['Sportswear', 'Work uniforms', 'Bed linens', 'Promotional bags', 'Custom fabrics'],
    titleId: 'prod-page-textiles-title',
    descId: 'prod-page-textiles-desc',
    imgId: 'prod-page-textiles-img-7e3b1f',
  },
  {
    id: 'hardware',
    title: 'Hardware & Tools',
    desc: 'Hand tools, power tools, fasteners, metal parts, CNC machined components, and industrial hardware.',
    examples: ['Hand tools', 'Fasteners', 'CNC parts', 'Die-cast components', 'Garden tools'],
    titleId: 'prod-page-hardware-title',
    descId: 'prod-page-hardware-desc',
    imgId: 'prod-page-hardware-img-9d4a2e',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Products',
    desc: 'Office furniture, home decor, kitchenware, bathroom fixtures, and custom furniture manufacturing.',
    examples: ['Office chairs', 'Kitchen utensils', 'Bathroom vanities', 'Storage solutions', 'Decorative items'],
    titleId: 'prod-page-furniture-title',
    descId: 'prod-page-furniture-desc',
    imgId: 'prod-page-furniture-img-2b6c3a',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, corrugated boxes, labels, promotional materials, and specialty printing services.',
    examples: ['Custom boxes', 'Product labels', 'Shopping bags', 'Display stands', 'Promotional materials'],
    titleId: 'prod-page-packaging-title',
    descId: 'prod-page-packaging-desc',
    imgId: 'prod-page-packaging-img-4f8d1c',
  },
  {
    id: 'automotive',
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto parts, car accessories, motorcycle components, and vehicle electronics.',
    examples: ['Car LED lights', 'Floor mats', 'Phone mounts', 'Dash cameras', 'Seat covers'],
    titleId: 'prod-page-automotive-title',
    descId: 'prod-page-automotive-desc',
    imgId: 'prod-page-automotive-img-6c2e9b',
  },
  {
    id: 'building',
    title: 'Building Materials',
    desc: 'Tiles, sanitary ware, doors, windows, solar panels, and construction hardware.',
    examples: ['Ceramic tiles', 'Faucets', 'Solar panels', 'Aluminum profiles', 'Glass panels'],
    titleId: 'prod-page-building-title',
    descId: 'prod-page-building-desc',
    imgId: 'prod-page-building-img-8a1d4f',
  },
  {
    id: 'toys',
    title: 'Toys & Recreational',
    desc: 'Children\'s toys, outdoor equipment, fitness gear, and recreational products with safety compliance.',
    examples: ['Educational toys', 'Outdoor play sets', 'Fitness equipment', 'Board games', 'Inflatable products'],
    titleId: 'prod-page-toys-title',
    descId: 'prod-page-toys-desc',
    imgId: 'prod-page-toys-img-3e7a2c',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-primary-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Product Categories</p>
          <h1 id="products-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Products We Source
          </h1>
          <p id="products-page-subtitle" className="mt-4 text-neutral-500 max-w-2xl mx-auto text-lg">
            We source across dozens of product categories from China's major manufacturing regions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-neutral-900 mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-neutral-500 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.slice(0, 3).map((ex, idx) => (
                      <span key={idx} className="text-xs bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded-md">
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

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
            We source virtually any manufactured product from China. Contact us with your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-accent-dark transition-colors"
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
