import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: 'electronics',
      title: 'Consumer Electronics',
      descId: 'electronics-desc',
      description: 'Smartphones accessories, audio equipment, smart home devices, wearables, and electronic components.',
      keywords: 'Smartwatches, Earbuds, Power Banks, Chargers, Bluetooth Speakers'
    },
    {
      id: 'home-garden',
      title: 'Home & Garden',
      descId: 'home-garden-desc',
      description: 'Furniture, home decor, kitchenware, organize & storage items, and outdoor living products.',
      keywords: 'Patio Furniture, Kitchen Gadgets, Bedding, LED Lighting, Planters'
    },
    {
      id: 'apparel',
      title: 'Apparel & Textiles',
      descId: 'apparel-desc',
      description: 'Clothing, activewear, fabrics, footwear, and fashion accessories. We work with specialized textile hubs.',
      keywords: 'Sportswear, Uniforms, T-Shirts, Bags, Hats'
    },
    {
      id: 'toys',
      title: 'Toys & Hobbies',
      descId: 'toys-desc',
      description: 'Educational toys, action figures, outdoor play equipment, and hobby craft supplies. Safety certified.',
      keywords: 'Wooden Toys, Puzzles, Plush Toys, Remote Control, Board Games'
    },
    {
      id: 'packaging',
      title: 'Packaging & Print',
      descId: 'packaging-desc',
      description: 'Custom boxes, eco-friendly packaging, labels, inserts, and retail display materials.',
      keywords: 'Corrugated Boxes, Mailers, Stickers, Biodegradable Bags'
    },
    {
      id: 'industrial',
      title: 'Industrial & Hardware',
      descId: 'industrial-desc',
      description: 'Machinery parts, tools, building materials, and heavy-duty equipment for commercial use.',
      keywords: 'Hand Tools, Fasteners, Safety Equipment, Valves'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <div className="bg-slate-900 py-16 lg:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 id="page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">Products We Source</h1>
          <p id="page-subtitle" className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our network spans across China's major manufacturing hubs, allowing us to source a wide variety of product categories.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="py-20 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow">
                <div className="relative aspect-video">
                  <img
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={`cat-img-${category.id}`}
                    data-strk-img={`[cat-title-${category.id}] [${category.descId}] products manufacturing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`cat-title-${category.id}`} className="text-xl font-bold text-slate-900 mb-3">{category.title}</h3>
                  <p id={category.descId} className="text-slate-600 mb-4">{category.description}</p>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Examples:</span>
                    <p className="text-sm text-slate-700 font-medium">{category.keywords}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Don't see your product category?</h3>
            <p className="text-lg text-slate-600 mb-8">
              We have sourced everything from custom complex machinery to simple daily commodities. If it's made in China, we can find a reliable manufacturer for it.
            </p>
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-block">
              Tell us what you're looking for
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
