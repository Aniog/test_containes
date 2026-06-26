import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics',
      items: ['Smart home devices', 'Audio equipment', 'Power banks', 'Cables and accessories', 'LED lighting'],
    },
    {
      name: 'Home & Garden',
      items: ['Kitchenware', 'Home textiles', 'Garden tools', 'Storage solutions', 'Decorative items'],
    },
    {
      name: 'Apparel & Textiles',
      items: ['Clothing and garments', 'Fabric and materials', 'Footwear', 'Bags and accessories', 'Workwear'],
    },
    {
      name: 'Industrial Components',
      items: ['Fasteners and hardware', 'Machined parts', 'Electronic components', 'Packaging materials', 'Raw materials'],
    },
    {
      name: 'Promotional Products',
      items: ['Custom branded items', 'Trade show displays', 'Corporate gifts', 'Event merchandise', 'Print materials'],
    },
    {
      name: 'Furniture & Furnishings',
      items: ['Home furniture', 'Office furniture', 'Outdoor furniture', 'Lighting fixtures', 'Soft furnishings'],
    },
    {
      name: 'Packaging Materials',
      items: ['Custom boxes', 'Labels and stickers', 'Protective packaging', 'Retail displays', 'Shipping supplies'],
    },
    {
      name: 'Automotive Parts',
      items: ['Aftermarket accessories', 'Replacement parts', 'Tools and equipment', 'Interior components', 'Maintenance supplies'],
    },
  ];

  return (
    <div>
      <section className="bg-[#1a365d] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-semibold mb-4">Products We Source</h1>
          <p className="text-xl text-[#a0aec0]">Categories and product types we regularly source for our clients</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="border border-[#e2e8f0] rounded-lg p-8">
                <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-[#4a5568] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3182ce] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7fafc]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Don't See Your Product?</h2>
          <p className="text-[#4a5568] mb-6">We source across many additional categories. Contact us to discuss your specific requirements.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#3182ce] text-white px-6 py-3 rounded-md font-medium hover:bg-[#2b6cb0]">
            Inquire About Your Product <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
