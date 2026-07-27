import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics',
      items: ['Smart home devices', 'Audio equipment', 'Power banks and chargers', 'LED lighting products', 'Wearable technology'],
    },
    {
      name: 'Home & Garden',
      items: ['Furniture and furnishings', 'Kitchenware and cookware', 'Home textiles', 'Garden tools and equipment', 'Storage solutions'],
    },
    {
      name: 'Industrial & Tools',
      items: ['Hand tools and power tools', 'Safety equipment', 'Fasteners and hardware', 'Machinery components', 'Packaging materials'],
    },
    {
      name: 'Apparel & Textiles',
      items: ['Workwear and uniforms', 'Fashion accessories', 'Home textiles', 'Technical fabrics', 'Promotional products'],
    },
    {
      name: 'Automotive & Parts',
      items: ['Aftermarket accessories', 'Replacement parts', 'Maintenance equipment', 'Vehicle safety products', 'Tires and wheels'],
    },
    {
      name: 'Health & Wellness',
      items: ['Medical devices and supplies', 'Fitness equipment', 'Personal care products', 'Health monitoring devices', 'Protective equipment'],
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-4">Products We Source</h1>
          <p className="text-xl text-slate-300">We work across diverse product categories for clients worldwide.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, i) => (
              <div key={i} className="border rounded-lg p-8">
                <h3 className="font-semibold text-xl mb-6">{category.name}</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  {category.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 border-t">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Don't see your product category?</h3>
          <p className="text-slate-600 mb-6">We source across many additional categories. Contact us to discuss your specific requirements.</p>
          <Link to="/contact"><Button>Get a Free Sourcing Quote</Button></Link>
        </div>
      </section>
    </div>
  );
};

export default Products;