import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics',
      items: ['Smartphones & Accessories', 'Audio Equipment', 'Wearables', 'Home Automation', 'Power Banks & Chargers'],
      note: 'Typical MOQ: 500-1,000 units'
    },
    {
      name: 'Home Appliances',
      items: ['Kitchen Appliances', 'Cleaning Equipment', 'Air Treatment', 'Small Appliances', 'Personal Care Devices'],
      note: 'Typical MOQ: 200-500 units'
    },
    {
      name: 'Furniture & Home Decor',
      items: ['Indoor Furniture', 'Outdoor Furniture', 'Lighting Fixtures', 'Textiles & Linens', 'Decorative Items'],
      note: 'Typical MOQ: 50-200 units'
    },
    {
      name: 'Industrial Equipment',
      items: ['Manufacturing Tools', 'Material Handling', 'Safety Equipment', 'Measuring Instruments', 'Maintenance Supplies'],
      note: 'Typical MOQ: Varies by product'
    },
    {
      name: 'Textiles & Apparel',
      items: ['Clothing & Garments', 'Workwear & Uniforms', 'Home Textiles', 'Bags & Accessories', 'Footwear'],
      note: 'Typical MOQ: 300-1,000 units'
    },
    {
      name: 'Automotive Parts',
      items: ['Aftermarket Accessories', 'Replacement Parts', 'Maintenance Items', 'Interior Components', 'Electrical Parts'],
      note: 'Typical MOQ: 100-500 units'
    },
    {
      name: 'Packaging Materials',
      items: ['Custom Boxes & Cartons', 'Protective Packaging', 'Labels & Tags', 'Shipping Supplies', 'Retail Displays'],
      note: 'Typical MOQ: 1,000-5,000 units'
    },
    {
      name: 'Building Supplies',
      items: ['Hardware & Tools', 'Plumbing Fixtures', 'Electrical Components', 'Flooring Materials', 'Construction Accessories'],
      note: 'Typical MOQ: Varies by product'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-semibold mb-4">Products We Source</h1>
        <p className="text-lg text-slate-600">We work across a wide range of product categories. Each category has established supplier networks and quality standards.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category, i) => (
          <div key={i} className="border border-slate-200 rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
            <ul className="space-y-2 text-sm text-slate-600 mb-4">
              {category.items.map((item, j) => (
                <li key={j}>• {item}</li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 border-t pt-4">{category.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-slate-50 rounded-lg p-10 text-center">
        <h2 className="text-2xl font-semibold mb-3">Don't see your product category?</h2>
        <p className="text-slate-600 mb-6 max-w-md mx-auto">We source across many additional categories. Contact us with your specific requirements.</p>
        <Link to="/contact"><Button>Submit Your Product Inquiry</Button></Link>
      </div>
    </div>
  );
};

export default Products;