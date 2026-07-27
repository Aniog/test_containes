import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  { id: 'electronics', imgId: 'products-electronics-a1b2c3', titleId: 'products-electronics-title', descId: 'products-electronics-desc', title: 'Electronics & Components', description: 'Consumer electronics, PCBs, LED lighting, cables, connectors, smart home devices, and electronic accessories.' },
  { id: 'textiles', imgId: 'products-textiles-d4e5f6', titleId: 'products-textiles-title', descId: 'products-textiles-desc', title: 'Textiles & Apparel', description: 'Clothing, sportswear, uniforms, fabrics, home textiles, bags, and fashion accessories.' },
  { id: 'furniture', imgId: 'products-furniture-g7h8i9', titleId: 'products-furniture-title', descId: 'products-furniture-desc', title: 'Furniture & Home Decor', description: 'Office furniture, home furniture, outdoor furniture, lighting fixtures, and decorative items.' },
  { id: 'machinery', imgId: 'products-machinery-j1k2l3', titleId: 'products-machinery-title', descId: 'products-machinery-desc', title: 'Machinery & Equipment', description: 'Industrial machinery, CNC machines, packaging equipment, food processing machines, and spare parts.' },
  { id: 'automotive', imgId: 'products-automotive-m4n5o6', titleId: 'products-automotive-title', descId: 'products-automotive-desc', title: 'Auto Parts & Accessories', description: 'Engine parts, body parts, interior accessories, tires, batteries, and aftermarket components.' },
  { id: 'beauty', imgId: 'products-beauty-p7q8r9', titleId: 'products-beauty-title', descId: 'products-beauty-desc', title: 'Beauty & Personal Care', description: 'Skincare, cosmetics, hair care products, beauty tools, packaging, and private label formulations.' },
  { id: 'packaging', imgId: 'products-packaging-s1t2u3', titleId: 'products-packaging-title', descId: 'products-packaging-desc', title: 'Packaging & Printing', description: 'Custom boxes, labels, bags, bottles, jars, flexible packaging, and point-of-sale displays.' },
  { id: 'construction', imgId: 'products-construction-v4w5x6', titleId: 'products-construction-title', descId: 'products-construction-desc', title: 'Building & Construction', description: 'Steel structures, tiles, sanitary ware, pipes, fittings, doors, windows, and hardware.' },
  { id: 'toys', imgId: 'products-toys-y7z8a9', titleId: 'products-toys-title', descId: 'products-toys-desc', title: 'Toys & Baby Products', description: 'Plush toys, educational toys, baby gear, strollers, car seats, and children\'s furniture.' },
  { id: 'sports', imgId: 'products-sports-b1c2d3', titleId: 'products-sports-title', descId: 'products-sports-desc', title: 'Sports & Outdoor', description: 'Fitness equipment, camping gear, bicycles, water sports, and outdoor furniture.' },
  { id: 'medical', imgId: 'products-medical-e4f5g6', titleId: 'products-medical-title', descId: 'products-medical-desc', title: 'Medical & Health', description: 'Medical devices, disposables, rehabilitation equipment, lab supplies, and health supplements.' },
  { id: 'food', imgId: 'products-food-h7i8j9', titleId: 'products-food-title', descId: 'products-food-desc', title: 'Food & Beverage', description: 'Snacks, tea, spices, canned goods, beverages, and food processing ingredients.' },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="products-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Products We Source
          </h1>
          <p id="products-page-subtitle" className="mt-4 text-gray-300 text-lg max-w-2xl">
            We source across dozens of product categories. If it's manufactured in China, we can find the right supplier for you.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-brand-dark mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-brand-gray text-sm leading-relaxed">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Products Note */}
      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark tracking-tight">
            Don't See Your Product Category?
          </h2>
          <p className="mt-4 text-brand-gray text-lg">
            We source products across virtually every industry. Contact us with your specific requirements and we'll let you know how we can help.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
