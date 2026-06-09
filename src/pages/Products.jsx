import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics & Components',
      items: ['LED lighting and fixtures', 'Power supplies and adapters', 'Electronic components', 'Consumer gadgets', 'Audio equipment', 'Smart home devices'],
    },
    {
      name: 'Home & Kitchen Products',
      items: ['Kitchen appliances', 'Cookware and utensils', 'Home textiles', 'Furniture and decor', 'Storage solutions', 'Cleaning supplies'],
    },
    {
      name: 'Industrial Equipment & Machinery',
      items: ['Manufacturing equipment', 'Tools and hardware', 'Safety equipment', 'Material handling', 'Industrial components', 'Maintenance supplies'],
    },
    {
      name: 'Textiles & Apparel',
      items: ['Garments and clothing', 'Fabrics and materials', 'Home textiles', 'Workwear and uniforms', 'Accessories', 'Technical textiles'],
    },
    {
      name: 'Automotive Parts & Accessories',
      items: ['Aftermarket parts', 'Vehicle accessories', 'Maintenance items', 'Interior components', 'Exterior trim', 'Electrical components'],
    },
    {
      name: 'Building Materials & Hardware',
      items: ['Construction materials', 'Fasteners and fittings', 'Plumbing supplies', 'Electrical hardware', 'Tools and equipment', 'Safety products'],
    },
    {
      name: 'Packaging & Printing Supplies',
      items: ['Custom packaging', 'Labels and tags', 'Shipping materials', 'Printed materials', 'Retail displays', 'Protective packaging'],
    },
    {
      name: 'Medical & Healthcare Products',
      items: ['Medical devices', 'Healthcare supplies', 'Personal protective equipment', 'Wellness products', 'Diagnostic equipment', 'Rehabilitation aids'],
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">Products We Source</h1>
          <p className="text-xl text-slate-300">
            Established supplier networks across diverse product categories.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {categories.map((category, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold mb-4 pb-3 border-b border-gray-200">{category.name}</h2>
              <ul className="space-y-2.5">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle className="text-emerald-600 flex-shrink-0" size={16} />
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
          <h2 className="text-2xl font-semibold mb-4">Don't See Your Product Category?</h2>
          <p className="text-slate-600 mb-8">
            We work across additional categories and can assess sourcing feasibility for your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Inquire About Your Product <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;