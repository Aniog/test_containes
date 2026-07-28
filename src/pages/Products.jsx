import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: 'Electronics & Components',
      description: 'Consumer electronics, electronic components, circuit boards, connectors, and related accessories.',
      examples: ['Smart devices', 'LED lighting', 'Power supplies', 'Electronic components'],
    },
    {
      name: 'Home & Garden',
      description: 'Furniture, home decor, kitchenware, garden tools, and household essentials.',
      examples: ['Outdoor furniture', 'Kitchen appliances', 'Home decor', 'Garden tools'],
    },
    {
      name: 'Textiles & Apparel',
      description: 'Clothing, fabrics, home textiles, bags, and fashion accessories.',
      examples: ['Casual wear', 'Sportswear', 'Home textiles', 'Bags & luggage'],
    },
    {
      name: 'Automotive Parts',
      description: 'Auto components, spare parts, accessories, and aftermarket products.',
      examples: ['Engine parts', 'Brake systems', 'Interior accessories', 'Lighting'],
    },
    {
      name: 'Industrial Equipment',
      description: 'Machinery, tools, equipment, and industrial supplies.',
      examples: ['Power tools', 'Measuring instruments', 'Safety equipment', 'Material handling'],
    },
    {
      name: 'Consumer Goods',
      description: 'Everyday consumer products, personal care items, and household goods.',
      examples: ['Personal care', 'Cleaning supplies', 'Storage solutions', 'Pet supplies'],
    },
    {
      name: 'Toys & Recreation',
      description: 'Toys, games, sports equipment, and outdoor recreation products.',
      examples: ['Educational toys', 'Outdoor sports', 'Board games', 'Fitness equipment'],
    },
    {
      name: 'Health & Beauty',
      description: 'Beauty products, personal care, health supplements, and wellness items.',
      examples: ['Skincare', 'Hair care', 'Supplements', 'Beauty tools'],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Products We Source</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We source a wide range of products across multiple industries. If you do not see your product category here, contact us anyway - we likely can help.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{category.name}</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">{category.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Looking for Something Specific?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Tell us what you need to source, and we will find the right suppliers and products for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Request a Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
