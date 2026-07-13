import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics',
      items: ['Smart home devices', 'Audio equipment', 'Power banks', 'Wearables', 'LED lighting'],
    },
    {
      name: 'Home & Garden',
      items: ['Kitchenware', 'Storage solutions', 'Garden tools', 'Home textiles', 'Decor items'],
    },
    {
      name: 'Apparel & Textiles',
      items: ['Casual clothing', 'Workwear', 'Accessories', 'Fabrics', 'Home textiles'],
    },
    {
      name: 'Industrial Equipment',
      items: ['Machinery parts', 'Tools & hardware', 'Safety equipment', 'Packaging machinery', 'Components'],
    },
    {
      name: 'Furniture & Furnishings',
      items: ['Home furniture', 'Office furniture', 'Outdoor furniture', 'Mattresses', 'Fixtures'],
    },
    {
      name: 'Automotive Parts',
      items: ['Aftermarket accessories', 'Replacement parts', 'Interior trim', 'Lighting', 'Tools'],
    },
    {
      name: 'Packaging Materials',
      items: ['Custom boxes', 'Protective packaging', 'Labels & tags', 'Shipping supplies', 'Retail displays'],
    },
    {
      name: 'Promotional Products',
      items: ['Branded merchandise', 'Trade show items', 'Corporate gifts', 'Event supplies', 'Print materials'],
    },
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Products We Source</h1>
          <p className="text-lg text-slate-300">Categories and product types we regularly source for international buyers.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg p-8">
              <h3 className="font-semibold text-xl mb-4">{cat.name}</h3>
              <ul className="grid grid-cols-1 gap-y-2 text-sm text-slate-600">
                {cat.items.map((item, iIdx) => (
                  <li key={iIdx}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-3">Don't see your product category?</h3>
          <p className="text-slate-600 mb-6">We source across many additional categories. Contact us to discuss your specific requirements.</p>
          <Button asChild>
            <Link to="/contact">Request a Sourcing Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Products