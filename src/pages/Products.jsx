import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    {
      title: 'Electronics & Components',
      items: ['PCB assemblies', 'Power supplies', 'Connectors and cables', 'Sensors and modules', 'Consumer electronics'],
    },
    {
      title: 'Home & Garden',
      items: ['Furniture and furnishings', 'Kitchenware and appliances', 'Home textiles', 'Garden tools and equipment', 'Decorative items'],
    },
    {
      title: 'Fashion & Textiles',
      items: ['Apparel and accessories', 'Footwear', 'Bags and luggage', 'Home textiles', 'Technical fabrics'],
    },
    {
      title: 'Industrial Equipment',
      items: ['Machinery components', 'Tools and hardware', 'Safety equipment', 'Packaging machinery', 'Material handling'],
    },
    {
      title: 'Consumer Goods',
      items: ['Toys and games', 'Sports equipment', 'Pet products', 'Health and wellness', 'Personal care items'],
    },
    {
      title: 'Automotive & Transportation',
      items: ['Aftermarket parts', 'Vehicle accessories', 'Electric vehicle components', 'Logistics equipment', 'Marine products'],
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-semibold mb-4">Products We Source</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            We work with suppliers across a wide range of product categories and industries.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="p-8 border border-slate-200 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-5">{category.title}</h3>
              <ul className="space-y-2.5">
                {category.items.map((item, i) => (
                  <li key={i} className="text-slate-600 flex items-start gap-2">
                    <span className="text-blue-800 mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Don't See Your Product Category?</h2>
          <p className="text-slate-600 mb-8">
            We source across many additional categories. Contact us to discuss your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-colors"
          >
            Inquire About Your Product
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
