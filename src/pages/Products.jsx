import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics',
      items: ['Smart home devices', 'Audio equipment', 'Power banks', 'Cables and accessories', 'LED lighting', 'Computer peripherals'],
    },
    {
      name: 'Home & Garden',
      items: ['Kitchenware', 'Home textiles', 'Storage solutions', 'Garden tools', 'Decorative items', 'Cleaning supplies'],
    },
    {
      name: 'Industrial Components',
      items: ['Fasteners and hardware', 'Machined parts', 'Electrical components', 'Pneumatic fittings', 'Bearings', 'Seals and gaskets'],
    },
    {
      name: 'Textiles & Apparel',
      items: ['Garments', 'Workwear', 'Home textiles', 'Bags and luggage', 'Footwear', 'Accessories'],
    },
    {
      name: 'Furniture & Furnishings',
      items: ['Office furniture', 'Home furniture', 'Outdoor furniture', 'Mattresses', 'Lighting fixtures', 'Window treatments'],
    },
    {
      name: 'Automotive Parts',
      items: ['Aftermarket accessories', 'Replacement parts', 'Maintenance supplies', 'Tools and equipment', 'Safety products'],
    },
    {
      name: 'Packaging Materials',
      items: ['Corrugated boxes', 'Plastic packaging', 'Labels and tags', 'Protective materials', 'Custom packaging'],
    },
    {
      name: 'Promotional Products',
      items: ['Branded merchandise', 'Trade show displays', 'Corporate gifts', 'Event supplies', 'Print materials'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-slate-900 mb-4">Products We Source</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We regularly source across these product categories for international buyers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category, idx) => (
          <div key={idx} className="border border-slate-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">{category.name}</h2>
            <ul className="grid grid-cols-1 gap-y-2 text-slate-600">
              {category.items.map((item, iIdx) => (
                <li key={iIdx} className="flex items-center gap-2">
                  <span className="text-blue-800">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-slate-50 p-10 rounded-lg">
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Don't see your product category?</h3>
        <p className="text-slate-600 mb-6">We can source most manufactured goods. Contact us to discuss your specific requirements.</p>
        <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 bg-blue-800 text-white font-medium rounded hover:bg-blue-900 transition-colors">
          Discuss Your Needs
        </Link>
      </div>
    </div>
  );
};

export default Products;
