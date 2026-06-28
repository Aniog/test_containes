import React from 'react';
import { Link } from 'react-router-dom';
import InquiryForm from '../components/InquiryForm';

const Products = () => {
  const categories = [
    {
      name: 'Electronics & Components',
      examples: ['PCB assemblies', 'Power supplies', 'Cables and connectors', 'Sensors', 'LED lighting', 'Consumer electronics'],
      notes: 'We work with factories that have relevant certifications (CE, FCC, RoHS) and documented quality processes.',
    },
    {
      name: 'Home & Kitchen',
      examples: ['Small appliances', 'Cookware', 'Storage solutions', 'Cleaning tools', 'Textile products', 'Furniture hardware'],
      notes: 'Common requirements include material safety, food contact compliance, and packaging standards.',
    },
    {
      name: 'Apparel & Textiles',
      examples: ['Garments', 'Workwear', 'Home textiles', 'Bags and accessories', 'Footwear components', 'Technical fabrics'],
      notes: 'We verify production capacity, quality control systems, and social compliance documentation.',
    },
    {
      name: 'Industrial Equipment',
      examples: ['Machinery parts', 'Tooling', 'Safety equipment', 'Material handling', 'Pumps and valves', 'Welding supplies'],
      notes: 'Technical specifications and tolerance requirements are reviewed in detail during supplier qualification.',
    },
    {
      name: 'Automotive Parts',
      examples: ['Aftermarket components', 'Interior trim', 'Fasteners', 'Electrical parts', 'Filters', 'Braking components'],
      notes: 'We focus on suppliers with IATF 16949 or equivalent quality systems for automotive applications.',
    },
    {
      name: 'Consumer Goods',
      examples: ['Personal care items', 'Pet products', 'Toys and games', 'Sports equipment', 'Stationery', 'Giftware'],
      notes: 'We assist with product safety testing coordination and documentation for target markets.',
    },
    {
      name: 'Packaging & Materials',
      examples: ['Custom boxes', 'Protective packaging', 'Labels and tags', 'Raw materials', 'Industrial consumables'],
      notes: 'Material specifications, MOQ, and lead time are key factors in supplier selection.',
    },
    {
      name: 'Hardware & Tools',
      examples: ['Hand tools', 'Fasteners', 'Building hardware', 'Garden tools', 'Measuring equipment', 'Safety gear'],
      notes: 'We verify material grades, heat treatment processes, and finishing quality as applicable.',
    },
  ];

  return (
    <div>
      <section className="bg-[#F8FAFC] py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Products We Source</h1>
            <p className="text-lg text-[#475569]">
              We work across a broad range of product categories. The list below is not exhaustive. 
              If your product is not shown, contact us to discuss whether we can assist.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold mb-3">{category.name}</h3>
                <div className="mb-4">
                  <div className="text-sm font-medium text-[#0A2540] mb-2">Examples:</div>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((ex, i) => (
                      <span key={i} className="text-xs bg-[#F1F5F9] px-3 py-1 rounded text-[#475569]">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[#475569]">{category.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Product Categories We Typically Decline</h2>
            <p className="text-[#475569] mb-4">
              For quality and compliance reasons, we generally do not assist with the following:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-1">
              <li>Food, beverages, and dietary supplements</li>
              <li>Pharmaceuticals and medical devices requiring specific regulatory approvals</li>
              <li>Products with significant intellectual property concerns</li>
              <li>Items subject to strict export controls or sanctions</li>
              <li>Products requiring specialized testing equipment we cannot access</li>
            </ul>
            <p className="text-sm text-[#64748B] mt-4">
              If you are unsure whether your product fits our scope, please inquire. We will let you know promptly.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-3">Discuss Your Product</h2>
              <p className="text-[#475569]">Provide details about what you are sourcing. We will assess feasibility and outline next steps.</p>
            </div>
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
