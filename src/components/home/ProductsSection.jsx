import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    title: 'Electronics & Components',
    description: 'PCBs, consumer electronics, cables, adapters, LED lighting, batteries, and electronic components.',
    id: 'prod-electronics-1a2b',
  },
  {
    title: 'Machinery & Hardware',
    description: 'Industrial equipment, power tools, hardware fasteners, bearings, valves, and mechanical parts.',
    id: 'prod-machinery-2b3c',
  },
  {
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, bags, shoes, accessories, and home textile products from verified mills.',
    id: 'prod-textiles-3c4d',
  },
  {
    title: 'Packaging Materials',
    description: 'Paper boxes, plastic containers, glass bottles, metal cans, and custom branded packaging.',
    id: 'prod-packaging-4d5e',
  },
  {
    title: 'Home & Furniture',
    description: 'Indoor and outdoor furniture, kitchenware, home decor, bedding, and storage solutions.',
    id: 'prod-home-5e6f',
  },
  {
    title: 'Automotive Parts',
    description: 'Auto accessories, replacement parts, car electronics, and custom automotive components.',
    id: 'prod-automotive-6f7g',
  },
];

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Industries</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-4">Products We Source</h2>
          <p className="text-lg text-slate-600">
            We source a wide range of products across multiple industries. If you do not see your category, contact us anyway.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  data-strk-img-id={product.id}
                  data-strk-img={`[${product.id}-title] [${product.id}-desc]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 id={`${product.id}-title`} className="text-lg font-semibold text-slate-800 mb-2">{product.title}</h3>
                <p id={`${product.id}-desc`} className="text-sm text-slate-600 leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white font-semibold rounded-md transition-colors"
          >
            View All Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
