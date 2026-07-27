import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/shared/SectionHeading.jsx';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: 'electronics-components',
      title: 'Electronics & Components',
      description: 'PCBs, LED lighting, consumer electronics, cables, connectors, IoT devices, and electronic accessories.',
      imgId: 'products-electronics-b1c2d3',
    },
    {
      id: 'textiles-apparel',
      title: 'Textiles & Apparel',
      description: 'Clothing, sportswear, uniforms, fabrics, home textiles, bags, shoes, and fashion accessories.',
      imgId: 'products-textiles-e4f5g6',
    },
    {
      id: 'furniture-home',
      title: 'Furniture & Home Goods',
      description: 'Office furniture, home décor, kitchenware, bathroom fixtures, storage solutions, and garden products.',
      imgId: 'products-furniture-h7i8j9',
    },
    {
      id: 'machinery-equipment',
      title: 'Machinery & Equipment',
      description: 'Industrial machinery, CNC machines, packaging equipment, agricultural machinery, and spare parts.',
      imgId: 'products-machinery-k1l2m3',
    },
    {
      id: 'packaging-printing',
      title: 'Packaging & Printing',
      description: 'Custom packaging, labels, corrugated boxes, plastic containers, paper products, and printing services.',
      imgId: 'products-packaging-n4o5p6',
    },
    {
      id: 'auto-parts',
      title: 'Auto Parts & Accessories',
      description: 'Car accessories, replacement parts, tires, batteries, interior trim, and aftermarket components.',
      imgId: 'products-auto-q7r8s9',
    },
    {
      id: 'building-materials',
      title: 'Building Materials',
      description: 'Steel, aluminum profiles, tiles, sanitary ware, doors, windows, and construction hardware.',
      imgId: 'products-building-t1u2v3',
    },
    {
      id: 'health-beauty',
      title: 'Health & Beauty',
      description: 'Cosmetics, skincare, supplements, medical devices, personal care products, and salon equipment.',
      imgId: 'products-health-w4x5y6',
    },
    {
      id: 'toys-gifts',
      title: 'Toys & Promotional Gifts',
      description: 'Toys, games, promotional items, corporate gifts, stationery, and seasonal products.',
      imgId: 'products-toys-z7a8b9',
    },
    {
      id: 'food-agriculture',
      title: 'Food & Agriculture',
      description: 'Food ingredients, agricultural products, tea, spices, dried goods, and food processing equipment.',
      imgId: 'products-food-c1d2e3',
    },
    {
      id: 'sports-outdoor',
      title: 'Sports & Outdoor',
      description: 'Fitness equipment, camping gear, bicycles, water sports, outdoor furniture, and sports apparel.',
      imgId: 'products-sports-f4g5h6',
    },
    {
      id: 'pet-products',
      title: 'Pet Products',
      description: 'Pet food, toys, grooming tools, cages, aquarium supplies, and pet accessories.',
      imgId: 'products-pet-i7j8k9',
    },
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Products We Source
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We source across dozens of product categories from China's leading manufacturing regions. If it's made in China, we can source it.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Product Categories"
            title="What We Can Source for You"
            description="From electronics to textiles, machinery to consumer goods — our team has experience sourcing across all major product categories."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[products-${cat.id}-desc] [products-${cat.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 id={`products-${cat.id}-title`} className="text-base font-semibold text-neutral-900 mb-2">
                    {cat.title}
                  </h3>
                  <p id={`products-${cat.id}-desc`} className="text-sm text-neutral-500 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-neutral-500 text-lg mb-8">
            We source virtually any product manufactured in China. Contact us with your specific requirements and we'll let you know how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-accent-dark transition-colors text-base"
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
