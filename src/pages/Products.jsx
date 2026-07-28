import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Consumer Electronics',
    items: ['Audio devices', 'Wearables', 'Smart home accessories', 'Charging solutions'],
  },
  {
    name: 'Home and Kitchen',
    items: ['Storage organizers', 'Kitchen tools', 'Bathroom accessories', 'Home decor'],
  },
  {
    name: 'Industrial and Hardware',
    items: ['Fasteners', 'Fittings', 'Safety equipment', 'Material handling parts'],
  },
  {
    name: 'Packaging and Printing',
    items: ['Custom boxes', 'Labels', 'Printed materials', 'E-commerce packaging'],
  },
  {
    name: 'Textiles and Apparel',
    items: ['Casual wear', 'Home textiles', 'Bags', 'Accessories'],
  },
  {
    name: 'Toys and Gifts',
    items: ['Educational toys', 'Promotional gifts', 'Seasonal items', 'Craft supplies'],
  },
];

const Products = () => {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Products We Source</h1>
            <p className="mt-3 text-slate-600">We support a broad range of product categories. If your category is not listed, tell us and we will assess feasibility.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">{category.name}</h2>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-white">
                        <span className="text-[10px]">✓</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h3 className="text-lg font-semibold text-slate-900">Have a specific product in mind?</h3>
            <p className="mt-2 text-sm text-slate-600">Share your product specs and we will check supplier availability, pricing, and lead times.</p>
            <div className="mt-4">
              <Link to="/contact"><Button>Request Product Sourcing</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
