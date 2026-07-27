import React from 'react';

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics',
      items: ['Smart home devices', 'Audio equipment', 'Power banks', 'LED lighting', 'Cables & accessories']
    },
    {
      name: 'Home & Garden',
      items: ['Kitchenware', 'Home textiles', 'Garden tools', 'Storage solutions', 'Decorative items']
    },
    {
      name: 'Textiles & Apparel',
      items: ['Garments', 'Fabric materials', 'Home textiles', 'Workwear', 'Fashion accessories']
    },
    {
      name: 'Furniture & Fixtures',
      items: ['Home furniture', 'Office furniture', 'Hardware fittings', 'Lighting fixtures', 'Bathroom fixtures']
    },
    {
      name: 'Industrial Components',
      items: ['Mechanical parts', 'Fasteners', 'Electronic components', 'Packaging materials', 'Raw materials']
    },
    {
      name: 'Packaging & Materials',
      items: ['Custom packaging', 'Shipping supplies', 'Labeling materials', 'Protective packaging', 'Eco-friendly options']
    }
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4 text-white">Products We Source</h1>
          <p className="text-xl text-slate-300 max-w-2xl">We source across multiple product categories for international buyers.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="card">
                <h3 className="font-semibold text-xl mb-4">{cat.name}</h3>
                <ul className="space-y-2 text-slate-600">
                  {cat.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex gap-2">
                      <span className="text-blue-800">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container text-center">
          <h2 className="section-title">Don't See Your Category?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">We work across additional product categories. Contact us with your specific sourcing requirements.</p>
          <a href="/contact" className="btn-primary">Inquire About Your Product</a>
        </div>
      </section>
    </div>
  );
};

export default Products;