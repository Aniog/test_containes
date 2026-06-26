import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const categories = [
  {
    title: 'Electronics & Electrical',
    description: 'Consumer electronics, components, lighting, cables, and electrical accessories.',
    examples: ['Smart home devices', 'LED lighting', 'Power adapters', 'Circuit boards'],
  },
  {
    title: 'Home & Living',
    description: 'Furniture, decor, kitchenware, bedding, and home organization products.',
    examples: ['Wooden furniture', 'Textiles', 'Kitchen gadgets', 'Storage solutions'],
  },
  {
    title: 'Apparel & Textiles',
    description: 'Clothing, fabrics, accessories, and custom garment manufacturing.',
    examples: ['Casual wear', 'Sportswear', 'Bags and luggage', 'Uniforms'],
  },
  {
    title: 'Hardware & Tools',
    description: 'Hand tools, power tools, fasteners, and industrial hardware.',
    examples: ['Wrenches and sockets', 'Power drills', 'Hinges and locks', 'Fasteners'],
  },
  {
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, boxes, and printed materials.',
    examples: ['Corrugated boxes', 'Flexible packaging', 'Labels and stickers', 'Gift boxes'],
  },
  {
    title: 'Toys & Gifts',
    description: 'Promotional gifts, toys, party supplies, and seasonal items.',
    examples: ['Plush toys', 'Promotional items', 'Party supplies', 'Craft kits'],
  },
  {
    title: 'Automotive Parts',
    description: 'Car accessories, replacement parts, and automotive components.',
    examples: ['Interior accessories', 'Lighting', 'Filters', 'Brake components'],
  },
  {
    title: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare, haircare, and personal care products.',
    examples: ['Skincare sets', 'Hair tools', 'Makeup brushes', 'Bath products'],
  },
];

const Products = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Products We Source
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              We source a wide range of products across multiple industries. If you do not see your category listed, contact us anyway. We often handle requests outside our main categories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category.title}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{category.description}</p>
                <ul className="mt-4 space-y-2">
                  {category.examples.map((example) => (
                    <li key={example} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
            <h3 className="text-xl font-semibold text-slate-900">Do not see your product category?</h3>
            <p className="mt-2 text-slate-600">
              We regularly source products outside our listed categories. Tell us what you need and we will let you know if we can help.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-slate-800"
            >
              Inquire About Your Product
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
