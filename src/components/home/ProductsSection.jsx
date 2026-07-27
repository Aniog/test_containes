import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    title: 'Electronics & Tech',
    description: 'Consumer electronics, gadgets, phone accessories, cables, chargers, smart home devices, and PC peripherals.',
    imgId: 'prod-electronics-c1d2e3',
    titleId: 'products-electronics-title',
    descId: 'products-electronics-desc',
  },
  {
    title: 'Apparel & Textiles',
    description: 'Garments, sportswear, bags, shoes, hats, fabrics, and custom branded clothing with printing or embroidery.',
    imgId: 'prod-textiles-b2a4f6',
    titleId: 'products-textiles-title',
    descId: 'products-textiles-desc',
  },
  {
    title: 'Home & Garden',
    description: 'Furniture, kitchenware, bathroom accessories, garden tools, lighting, and home decor items.',
    imgId: 'prod-home-garden-d7e8f9',
    titleId: 'products-home-title',
    descId: 'products-home-desc',
  },
  {
    title: 'Industrial & Hardware',
    description: 'Machinery parts, metal components, tools, fasteners, pumps, valves, and construction materials.',
    imgId: 'prod-hardware-a5b6c7',
    titleId: 'products-hardware-title',
    descId: 'products-hardware-desc',
  },
  {
    title: 'Packaging & Printing',
    description: 'Custom boxes, bags, labels, gift packaging, retail displays, and branded marketing materials.',
    imgId: 'prod-packaging-e1f2a3',
    titleId: 'products-packaging-title',
    descId: 'products-packaging-desc',
  },
  {
    title: 'Beauty & Personal Care',
    description: 'Skincare, cosmetics, hair care, grooming tools, and health supplements with OEM/ODM options.',
    imgId: 'prod-beauty-g4h5i6',
    titleId: 'products-beauty-title',
    descId: 'products-beauty-desc',
  },
];

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Industries</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-4">
            Products We Source
          </h2>
          <p className="text-slate-600 text-lg">
            We have experience sourcing across a wide range of product categories. If it is manufactured in China, we can help you source it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 id={cat.titleId} className="text-lg font-semibold text-slate-800 mb-2">{cat.title}</h3>
                <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
          >
            View All Product Categories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;