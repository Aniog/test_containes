import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    {
      name: 'Electronics & Components',
      items: [
        'Consumer electronics (speakers, chargers, cables)',
        'Electronic components and PCBs',
        'LED lighting and fixtures',
        'Power supplies and batteries',
        'Smart home devices',
      ],
    },
    {
      name: 'Home & Kitchen',
      items: [
        'Kitchen appliances and cookware',
        'Home textiles and bedding',
        'Furniture and furnishings',
        'Cleaning and organization products',
        'Garden and outdoor equipment',
      ],
    },
    {
      name: 'Apparel & Textiles',
      items: [
        'Clothing and fashion accessories',
        'Workwear and uniforms',
        'Home textiles and linens',
        'Bags, luggage, and cases',
        'Footwear and components',
      ],
    },
    {
      name: 'Industrial Equipment',
      items: [
        'Machinery and tooling',
        'Safety equipment and PPE',
        'Material handling equipment',
        'Workshop and maintenance tools',
        'Industrial consumables',
      ],
    },
    {
      name: 'Automotive Parts',
      items: [
        'Aftermarket replacement parts',
        'Accessories and interior trim',
        'Maintenance and repair items',
        'Tires, wheels, and components',
        'Electrical and lighting systems',
      ],
    },
    {
      name: 'Consumer Goods',
      items: [
        'Personal care and beauty products',
        'Toys and recreational items',
        'Pet products and accessories',
        'Sports and fitness equipment',
        'Seasonal and promotional goods',
      ],
    },
    {
      name: 'Packaging & Materials',
      items: [
        'Custom packaging solutions',
        'Shipping and protective materials',
        'Retail display and point-of-sale',
        'Raw materials and components',
        'Labeling and identification products',
      ],
    },
    {
      name: 'Hardware & Tools',
      items: [
        'Hand tools and power tools',
        'Fasteners and hardware',
        'Building materials and supplies',
        'Plumbing and electrical fittings',
        'Security and locking devices',
      ],
    },
  ];

  const capabilities = [
    'Private label and OEM manufacturing',
    'Custom product development',
    'Small to large production volumes',
    'Compliance documentation support',
    'Packaging and labeling customization',
  ];

  return (
    <div>
      <section className="bg-[#0F172A] text-white py-14">
        <div className="container">
          <h1 className="text-white text-3xl md:text-4xl font-semibold mb-4">Products We Source</h1>
          <p className="text-[#94A3B8] max-w-2xl">
            We source across a wide range of categories. If your product is not listed, contact us — we likely have relevant supplier relationships.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, idx) => (
              <div key={idx} className="card">
                <h2 className="font-semibold text-lg mb-4">{category.name}</h2>
                <ul className="space-y-2 text-sm text-[#475569]">
                  {category.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <span className="text-[#0EA5E9] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white border-y border-[#E2E8F0]">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="section-title mb-4">Sourcing Capabilities</h2>
            <p className="text-[#475569] mb-6">
              We work with manufacturers who offer flexible production arrangements and support for international buyers.
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <span className="text-[#0EA5E9] mt-1">✓</span>
                  <span className="text-[#334155]">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="section-title mb-3">Looking for a Specific Product?</h2>
          <p className="text-[#475569] mb-6 max-w-xl mx-auto">
            Tell us what you need to source. We will assess feasibility and provide supplier options.
          </p>
          <Link to="/contact" className="btn-primary">Submit Your Requirements</Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
