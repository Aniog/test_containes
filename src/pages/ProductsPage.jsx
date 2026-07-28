import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, semiconductors, cables, connectors, and electronic accessories.',
    imgId: 'cat-electronics-v1w2x3',
    examples: ['Smartphones & Accessories', 'PCB Assembly', 'LED Lighting', 'Audio Equipment', 'Smart Home Devices'],
  },
  {
    name: 'Machinery & Industrial Equipment',
    description: 'CNC machines, packaging equipment, construction machinery, and industrial automation systems.',
    imgId: 'cat-machinery-y4z5a6',
    examples: ['CNC Machines', 'Packaging Equipment', 'Construction Machinery', 'Agricultural Equipment', 'Industrial Automation'],
  },
  {
    name: 'Textiles & Apparel',
    description: 'Fabrics, garments, home textiles, footwear, and fashion accessories from major textile hubs.',
    imgId: 'cat-textiles-b7c8d9',
    examples: ['Custom Garments', 'Home Textiles', 'Sportswear', 'Footwear', 'Fashion Accessories'],
  },
  {
    name: 'Home & Garden Products',
    description: 'Furniture, kitchenware, garden tools, home decor, and household items.',
    imgId: 'cat-home-e1f2g3',
    examples: ['Furniture', 'Kitchenware', 'Garden Tools', 'Home Decor', 'Storage Solutions'],
  },
  {
    name: 'Auto Parts & Accessories',
    description: 'OEM auto parts, aftermarket accessories, car electronics, and motorcycle components.',
    imgId: 'cat-auto-h4i5j6',
    examples: ['Engine Components', 'Body Parts', 'Car Electronics', 'Motorcycle Parts', 'Accessories'],
  },
  {
    name: 'Packaging & Printing',
    description: 'Custom packaging, labels, boxes, bags, and printed materials for all industries.',
    imgId: 'cat-packaging-k7l8m9',
    examples: ['Custom Boxes', 'Labels & Stickers', 'Plastic Bags', 'Paper Packaging', 'Printed Materials'],
  },
  {
    name: 'Building Materials & Hardware',
    description: 'Construction materials, tools, sanitary ware, doors, windows, and building hardware.',
    imgId: 'cat-building-n1o2p3',
    examples: ['Tiles & Flooring', 'Sanitary Ware', 'Doors & Windows', 'Tools & Hardware', 'Building Materials'],
  },
  {
    name: 'Toys & Gifts',
    description: 'Children\'s toys, promotional gifts, party supplies, and seasonal decorations.',
    imgId: 'cat-toys-q4r5s6',
    examples: ['Educational Toys', 'Plush Toys', 'Promotional Gifts', 'Party Supplies', 'Seasonal Decorations'],
  },
  {
    name: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare, hair care, beauty tools, and personal care products.',
    imgId: 'cat-beauty-t7u8v9',
    examples: ['Skincare Products', 'Makeup', 'Hair Care', 'Beauty Tools', 'Personal Care'],
  },
];

export default function ProductsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
            <p className="text-lg text-slate-300">
              From consumer electronics to industrial machinery, we source virtually any product manufactured in China. Here are our main categories.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="card group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img
                    data-strk-img-id={category.imgId}
                    data-strk-img={`[category-name-${index}] [products-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 id={`category-name-${index}`} className="text-xl font-semibold text-slate-900 mb-3">{category.name}</h3>
                <p className="text-slate-600 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.examples.map((example, idx) => (
                    <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="section-title">Don't See Your Product Category?</h2>
          <p className="section-subtitle mx-auto mb-8">
            We source products across all manufacturing sectors. Tell us what you need, and we will find the right supplier.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
