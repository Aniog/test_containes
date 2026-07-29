import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: 'Electronics & Components',
      description: 'Consumer electronics, circuit boards, connectors, sensors, and electronic assemblies.',
      examples: ['Smart home devices', 'Wearables', 'Audio equipment', 'LED lighting'],
    },
    {
      name: 'Home & Kitchen',
      description: 'Household goods, kitchenware, storage solutions, and home organization products.',
      examples: ['Cookware', 'Storage containers', 'Cleaning tools', 'Small appliances'],
    },
    {
      name: 'Textiles & Apparel',
      description: 'Clothing, fabrics, home textiles, bags, and fashion accessories.',
      examples: ['Casual wear', 'Uniforms', 'Home textiles', 'Bags and luggage'],
    },
    {
      name: 'Hardware & Tools',
      description: 'Hand tools, power tools, fasteners, and industrial hardware.',
      examples: ['Hand tools', 'Power tool accessories', 'Fasteners', 'Safety equipment'],
    },
    {
      name: 'Gifts & Promotional',
      description: 'Corporate gifts, promotional items, stationery, and custom-branded products.',
      examples: ['Custom pens', 'Tech gifts', 'Apparel', 'Eco-friendly items'],
    },
    {
      name: 'Toys & Recreation',
      description: 'Outdoor toys, educational toys, sports equipment, and recreational gear.',
      examples: ['Outdoor play', 'STEM toys', 'Sports accessories', 'Camping gear'],
    },
    {
      name: 'Automotive Parts',
      description: 'Replacement parts, accessories, and components for passenger and commercial vehicles.',
      examples: ['Interior accessories', 'Lighting', 'Maintenance parts', 'EV components'],
    },
    {
      name: 'Beauty & Personal Care',
      description: 'Skincare, haircare, cosmetics, and personal grooming products.',
      examples: ['Skincare sets', 'Hair tools', 'Makeup accessories', 'Bath and body'],
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Products We Source</h1>
            <p className="mt-4 text-slate-600 text-lg">
              We source across a wide range of categories with experienced specialists who understand your market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div key={category.name} className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-slate-900 mb-2">{category.name}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <span key={example} className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Do not see your category? We regularly take on new product types.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors">
              Tell us what you need <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
