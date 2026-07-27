import React from 'react';

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics',
      items: ['Smart home devices', 'Audio equipment', 'Power banks', 'Cables and accessories', 'LED lighting', 'Computer peripherals'],
    },
    {
      name: 'Home & Garden',
      items: ['Kitchenware', 'Home textiles', 'Garden tools', 'Storage solutions', 'Decorative items', 'Cleaning supplies'],
    },
    {
      name: 'Apparel & Textiles',
      items: ['Clothing and garments', 'Fabric and materials', 'Footwear', 'Bags and accessories', 'Workwear', 'Uniforms'],
    },
    {
      name: 'Industrial Equipment',
      items: ['Machinery parts', 'Tools and hardware', 'Safety equipment', 'Material handling', 'Packaging machinery', 'Maintenance supplies'],
    },
    {
      name: 'Auto Parts & Accessories',
      items: ['Aftermarket parts', 'Car accessories', 'Maintenance tools', 'Tires and wheels', 'Interior components', 'Electrical systems'],
    },
    {
      name: 'Furniture & Fixtures',
      items: ['Home furniture', 'Office furniture', 'Outdoor furniture', 'Commercial fixtures', 'Storage systems', 'Custom fabrication'],
    },
    {
      name: 'Packaging Materials',
      items: ['Custom boxes', 'Protective packaging', 'Labels and tags', 'Shipping supplies', 'Retail packaging', 'Sustainable options'],
    },
    {
      name: 'Medical & Healthcare',
      items: ['Medical devices', 'Protective equipment', 'Healthcare supplies', 'Wellness products', 'Diagnostic tools', 'Disposable items'],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-semibold text-[#0F172A] mb-4">Products We Source</h1>
        <p className="text-xl text-[#64748B]">We work across a wide range of product categories and industries</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {categories.map((category, idx) => (
          <div key={idx} className="border border-[#E2E8F0] rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-6">{category.name}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-[#1E293B]">
              {category.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#1E40AF] mt-1">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-[#F8FAFC] rounded-xl p-10 text-center">
        <h2 className="text-2xl font-semibold mb-3">Don't see your category?</h2>
        <p className="text-[#64748B] mb-6">We source across many additional categories. Contact us to discuss your specific requirements.</p>
        <a href="/contact" className="inline-flex px-8 py-3 bg-[#0F172A] text-white rounded-lg font-medium hover:bg-[#1E293B]">Discuss Your Needs</a>
      </div>
    </div>
  );
};

export default Products;
