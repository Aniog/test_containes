import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics',
      items: ['Smart home devices', 'Audio equipment', 'Power banks & chargers', 'LED lighting', 'Wearables'],
      note: 'Established supplier base with experience in CE, FCC, and RoHS compliance.',
    },
    {
      name: 'Home & Kitchen',
      items: ['Cookware & bakeware', 'Small appliances', 'Storage solutions', 'Tableware', 'Cleaning tools'],
      note: 'Suppliers with LFGB, FDA, and food-contact material certifications.',
    },
    {
      name: 'Textiles & Apparel',
      items: ['Workwear & uniforms', 'Home textiles', 'Fashion accessories', 'Promotional items', 'Technical fabrics'],
      note: 'OEKO-TEX and GOTS certified options available.',
    },
    {
      name: 'Industrial Components',
      items: ['Fasteners & hardware', 'Machined parts', 'Plastic injection molding', 'Sheet metal fabrication', 'Assemblies'],
      note: 'ISO 9001 certified manufacturers with engineering support.',
    },
    {
      name: 'Packaging Materials',
      items: ['Corrugated boxes', 'Plastic packaging', 'Labels & printing', 'Protective packaging', 'Sustainable options'],
      note: 'FSC certified and recyclable material sourcing available.',
    },
    {
      name: 'Automotive Parts',
      items: ['Aftermarket accessories', 'Replacement components', 'Tooling & fixtures', 'Interior trim', 'Electrical parts'],
      note: 'IATF 16949 certified suppliers for automotive-grade requirements.',
    },
  ];

  return (
    <div>
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Products We Source</h1>
          <p className="text-lg text-[#475569] max-w-2xl">We maintain active supplier relationships across these categories and can support additional product types upon request.</p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <div key={idx} className="border border-[#E2E8F0] rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <ul className="space-y-2 mb-6 text-sm text-[#475569]">
                {category.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2">
                    <span className="text-[#1E40AF] mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#64748B] border-t border-[#E2E8F0] pt-4">{category.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Need to source a different product?</h2>
            <p className="text-[#475569] mb-8">We regularly work with clients on specialized or emerging product categories. Share your requirements and we will assess feasibility.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1E40AF] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#1E3A8A] transition-colors">
              Discuss Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
