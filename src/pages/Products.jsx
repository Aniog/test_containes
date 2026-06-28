import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    {
      name: 'Electronics & Components',
      items: ['PCB assemblies', 'Power supplies', 'Connectors', 'Sensors', 'LED products', 'Consumer electronics'],
    },
    {
      name: 'Home & Garden',
      items: ['Furniture', 'Kitchenware', 'Home textiles', 'Garden tools', 'Decorative items', 'Storage solutions'],
    },
    {
      name: 'Fashion & Apparel',
      items: ['Clothing', 'Footwear', 'Accessories', 'Bags & luggage', 'Sportswear', 'Workwear'],
    },
    {
      name: 'Industrial Equipment',
      items: ['Machinery parts', 'Tools & hardware', 'Safety equipment', 'Material handling', 'Packaging machinery', 'Maintenance supplies'],
    },
    {
      name: 'Consumer Goods',
      items: ['Household products', 'Personal care items', 'Toys & games', 'Pet products', 'Seasonal goods', 'Gifts & premiums'],
    },
    {
      name: 'Automotive Parts',
      items: ['Aftermarket accessories', 'Replacement parts', 'Maintenance items', 'Interior components', 'Electrical systems', 'Body parts'],
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Products We Source</h1>
          <p className="text-lg text-slate-300">Categories and product types we regularly source for international clients.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10">
          {categories.map((category, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg p-8">
              <h2 className="text-xl font-semibold mb-6">{category.name}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-600">
                {category.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Don't See Your Product?</h2>
          <p className="text-slate-600 mb-6">We work across many additional categories. Contact us to discuss your specific requirements.</p>
          <Link to="/contact" className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium bg-slate-900 text-white rounded-md hover:bg-slate-800">
            Inquire About Your Product
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;