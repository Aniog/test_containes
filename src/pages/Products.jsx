import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Package } from 'lucide-react';

const categories = [
  {
    title: 'Electronics & Electrical',
    description: 'Consumer electronics, components, lighting, cables, and electrical accessories.',
    examples: ['Smart home devices', 'LED lighting', 'Power adapters', 'Circuit board assemblies'],
  },
  {
    title: 'Home & Kitchen',
    description: 'Household goods, kitchenware, storage solutions, and home improvement products.',
    examples: ['Cookware', 'Storage containers', 'Bathroom accessories', 'Cleaning tools'],
  },
  {
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, home textiles, bags, and fashion accessories.',
    examples: ['Cotton and synthetic fabrics', 'Casual wear', 'Home linen', 'Backpacks and totes'],
  },
  {
    title: 'Furniture & Decor',
    description: 'Indoor and outdoor furniture, home decor, lighting fixtures, and display systems.',
    examples: ['Office furniture', 'Outdoor sets', 'Wall art', 'Retail display fixtures'],
  },
  {
    title: 'Auto & Industrial',
    description: 'Automotive parts, hardware, tools, and industrial equipment components.',
    examples: ['Brake components', 'Fasteners', 'Hand tools', 'Bearings and seals'],
  },
  {
    title: 'Toys & Gifts',
    description: 'Promotional gifts, toys, party supplies, and seasonal products.',
    examples: ['Plush toys', 'Promotional pens', 'Party decorations', 'Gift packaging'],
  },
];

const Products = () => {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">Products we source</h1>
            <p className="mt-4 text-lg text-slate-600">
              We support a wide range of product categories. If your product is not listed, contact us to confirm coverage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div key={category.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Package className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-slate-900">{category.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{category.description}</p>
                <ul className="mt-4 space-y-2">
                  {category.examples.map((example) => (
                    <li key={example} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Request sourcing help <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/case-studies">See case studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Not sure if we cover your product?</h2>
              <p className="mt-3 text-lg text-slate-600">
                We regularly expand our network and supplier base. Send us your product details and we will confirm whether we can help.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Custom and private-label products',
                  'Prototype to mass production support',
                  'Compliance checks for target markets',
                  'Supplier development for repeat orders',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-100">
                <img
                  alt="Product samples on a factory table"
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                />
              </div>
              <p className="mt-4 text-sm text-slate-600">
                We review samples, packaging, and documentation to make sure they meet your requirements before mass production.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
