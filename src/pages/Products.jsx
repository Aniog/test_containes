import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      title: 'Consumer Electronics',
      items: ['Smart home devices', 'Audio equipment', 'Power banks & chargers', 'Wearable technology', 'LED lighting products'],
    },
    {
      title: 'Home & Garden',
      items: ['Kitchen appliances', 'Home textiles', 'Garden tools', 'Storage solutions', 'Decorative items'],
    },
    {
      title: 'Industrial Equipment',
      items: ['Machinery components', 'Safety equipment', 'Material handling', 'Measuring instruments', 'Maintenance supplies'],
    },
    {
      title: 'Textiles & Apparel',
      items: ['Workwear & uniforms', 'Home textiles', 'Technical fabrics', 'Accessories', 'Promotional items'],
    },
    {
      title: 'Automotive Parts',
      items: ['Aftermarket accessories', 'Replacement components', 'Maintenance parts', 'Interior trim', 'Electrical systems'],
    },
    {
      title: 'Furniture & Furnishings',
      items: ['Office furniture', 'Home furniture', 'Outdoor furniture', 'Contract seating', 'Storage systems'],
    },
    {
      title: 'Tools & Hardware',
      items: ['Hand tools', 'Power tool accessories', 'Fasteners', 'Building hardware', 'Safety equipment'],
    },
    {
      title: 'Packaging Materials',
      items: ['Custom boxes', 'Protective packaging', 'Labels & tags', 'Shipping supplies', 'Retail displays'],
    },
    {
      title: 'Medical & Healthcare',
      items: ['Medical devices', 'Personal protective equipment', 'Healthcare supplies', 'Wellness products', 'Diagnostic equipment'],
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-6">Products We Source</h1>
          <p className="text-xl text-slate-300">We work across diverse product categories with established supplier networks in each sector.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="border border-slate-200 rounded-xl p-8">
              <h3 className="font-semibold text-xl mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-slate-600 flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Don't See Your Product?</h2>
          <p className="text-slate-600 mb-8">We work with suppliers across many additional categories. Contact us to discuss your specific sourcing needs.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded font-medium hover:bg-slate-800 transition-colors">
            Discuss Your Requirements <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;