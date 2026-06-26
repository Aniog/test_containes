import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics',
      items: ['Smart home devices', 'Audio equipment', 'Power banks', 'Cables and accessories', 'LED lighting'],
    },
    {
      name: 'Home & Garden',
      items: ['Kitchenware', 'Furniture components', 'Garden tools', 'Home textiles', 'Storage solutions'],
    },
    {
      name: 'Industrial Equipment',
      items: ['Machinery parts', 'Tools and hardware', 'Safety equipment', 'Material handling', 'Maintenance supplies'],
    },
    {
      name: 'Textiles & Apparel',
      items: ['Workwear', 'Fashion accessories', 'Home textiles', 'Technical fabrics', 'Uniforms'],
    },
    {
      name: 'Auto Parts',
      items: ['Aftermarket accessories', 'Replacement components', 'Maintenance items', 'Interior trim', 'Electrical parts'],
    },
    {
      name: 'Packaging Materials',
      items: ['Custom boxes', 'Protective packaging', 'Labels and tags', 'Shipping supplies', 'Retail displays'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-[#1E3A5F] mb-4">Products We Source</h1>
        <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
          Categories and product types we regularly source for clients.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {categories.map((category, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-8">
            <h2 className="text-xl font-semibold text-[#1E3A5F] mb-6">{category.name}</h2>
            <ul className="space-y-3">
              {category.items.map((item, j) => (
                <li key={j} className="text-[#1F2937] flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#6B7280]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-[#F8FAFC] p-10 rounded-xl text-center">
        <h3 className="text-xl font-semibold mb-3">Don't see your product listed?</h3>
        <p className="text-[#6B7280] mb-6 max-w-md mx-auto">
          We source across many additional categories. Share your requirements and we'll assess feasibility.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#162d4a] transition-colors">
          Inquire About Your Product <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Products;
