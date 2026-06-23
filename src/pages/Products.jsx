import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics',
      items: ['Smart home devices', 'Audio equipment', 'Power banks', 'Cables and accessories', 'Wearables'],
    },
    {
      name: 'Home & Kitchen',
      items: ['Cookware and bakeware', 'Small appliances', 'Storage solutions', 'Textiles and linens', 'Decor items'],
    },
    {
      name: 'Apparel & Textiles',
      items: ['Casual clothing', 'Workwear', 'Home textiles', 'Accessories', 'Footwear components'],
    },
    {
      name: 'Industrial Components',
      items: ['Fasteners and hardware', 'Machined parts', 'Electrical components', 'Pneumatic fittings', 'Seals and gaskets'],
    },
    {
      name: 'Packaging Materials',
      items: ['Custom boxes', 'Protective packaging', 'Labels and tags', 'Shipping supplies', 'Retail displays'],
    },
    {
      name: 'Furniture & Fixtures',
      items: ['Home furniture', 'Office furniture', 'Lighting fixtures', 'Hardware and fittings', 'Outdoor furniture'],
    },
    {
      name: 'Automotive Parts',
      items: ['Aftermarket accessories', 'Replacement components', 'Maintenance supplies', 'Interior trim', 'Electrical parts'],
    },
    {
      name: 'Medical Supplies',
      items: ['PPE and disposables', 'Diagnostic equipment', 'Rehabilitation aids', 'First aid supplies', 'Laboratory consumables'],
    },
    {
      name: 'Toys & Games',
      items: ['Educational toys', 'Outdoor play equipment', 'Board games', 'Plush items', 'Party supplies'],
    },
    {
      name: 'Sports & Outdoors',
      items: ['Fitness equipment', 'Camping gear', 'Sports accessories', 'Outdoor apparel', 'Recreational products'],
    },
    {
      name: 'Beauty & Personal Care',
      items: ['Cosmetic tools', 'Hair accessories', 'Skincare devices', 'Packaging components', 'Salon supplies'],
    },
    {
      name: 'Construction Materials',
      items: ['Building hardware', 'Electrical supplies', 'Plumbing fittings', 'Safety equipment', 'Tools and accessories'],
    },
  ];

  return (
    <div>
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold text-[#0F172A] mb-4">Products We Source</h1>
          <p className="text-xl text-[#475569]">Categories and product types we regularly source for clients.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <div key={idx} className="border border-[#E2E8F0] rounded-xl p-8">
              <h3 className="font-semibold text-xl text-[#0F172A] mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.items.map((item, iIdx) => (
                  <li key={iIdx} className="text-sm text-[#475569] flex gap-2">
                    <span className="text-[#1E40AF] mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">Don't See Your Product?</h2>
          <p className="text-[#475569] mb-8">We source across many additional categories. Contact us to discuss your specific requirements.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#1E40AF] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1E3A8A] transition-colors"
          >
            Discuss Your Sourcing Needs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
