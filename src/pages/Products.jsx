import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    { name: 'Electronics & Components', examples: 'PCBs, connectors, power supplies, sensors' },
    { name: 'Home & Kitchen', examples: 'Appliances, cookware, textiles, furniture' },
    { name: 'Industrial Equipment', examples: 'Machinery parts, tools, safety equipment' },
    { name: 'Apparel & Textiles', examples: 'Clothing, fabrics, accessories, uniforms' },
    { name: 'Consumer Goods', examples: 'Toys, gifts, stationery, packaging' },
    { name: 'Automotive Parts', examples: 'Components, accessories, aftermarket parts' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#1F2937] mb-4">Products We Source</h1>
        <p className="text-lg text-[#4B5563]">We work across a wide range of product categories.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {categories.map((category, index) => (
          <div key={index} className="p-6 border border-slate-200 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-[#1F2937]">{category.name}</h3>
            <p className="text-[#4B5563] text-sm">{category.examples}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#F3F4F6] p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-3 text-[#1F2937]">Don't see your category?</h2>
        <p className="text-[#4B5563] mb-6">We source across many industries. Contact us to discuss your specific requirements.</p>
        <Link to="/contact" className="inline-block px-6 py-2.5 bg-[#1E3A5F] text-white font-medium rounded hover:bg-[#2E5A8B] transition-colors">Discuss Your Needs</Link>
      </div>
    </div>
  );
};

export default Products;
