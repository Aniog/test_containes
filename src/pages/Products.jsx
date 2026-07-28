import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Factory, ClipboardCheck, Ship, CheckCircle2 } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      title: 'Electronics & Electrical',
      description: 'Consumer electronics, components, lighting, cables, and electrical accessories.',
      examples: ['USB chargers', 'LED lighting', 'Power banks', 'Circuit boards'],
    },
    {
      title: 'Home & Kitchen',
      description: 'Household goods, kitchenware, storage, cleaning tools, and home decor.',
      examples: ['Cookware', 'Storage containers', 'Cleaning tools', 'Bathroom accessories'],
    },
    {
      title: 'Textiles & Apparel',
      description: 'Fabrics, garments, home textiles, bags, and accessories.',
      examples: ['T-shirts', 'Home textiles', 'Bags', 'Workwear'],
    },
    {
      title: 'Industrial & Hardware',
      description: 'Tools, fasteners, machinery parts, safety equipment, and building materials.',
      examples: ['Hand tools', 'Fasteners', 'Safety gear', 'Metal parts'],
    },
    {
      title: 'Packaging & Printing',
      description: 'Packaging materials, labels, boxes, and printed marketing materials.',
      examples: ['Corrugated boxes', 'Labels', 'Gift boxes', 'Printed materials'],
    },
    {
      title: 'Toys & Gifts',
      description: 'Promotional gifts, toys, party supplies, and seasonal items.',
      examples: ['Promotional items', 'Toys', 'Party supplies', 'Gift sets'],
    },
    {
      title: 'Automotive & Parts',
      description: 'Auto parts, accessories, maintenance tools, and replacement components.',
      examples: ['Brake parts', 'Interior accessories', 'Tools', 'Lighting'],
    },
    {
      title: 'Health & Beauty',
      description: 'Personal care, cosmetics, wellness devices, and hygiene products.',
      examples: ['Skincare tools', 'Hygiene products', 'Wellness devices', 'Packaging'],
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="secondary">Products We Source</Badge>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Products we source from China</h1>
            <p className="mt-4 text-lg text-slate-600">
              We support a wide range of product categories. If you need a reliable supplier for any of the areas below, we can help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category) => (
              <Card key={category.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example) => (
                      <Badge key={example} variant="secondary">{example}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Not sure if we cover your product?</h2>
              <p className="mt-3 text-slate-600">We regularly expand our network. Tell us what you need and we will confirm whether we can help.</p>
              <ul className="mt-8 space-y-4">
                {[
                  'Custom or private-label products',
                  'Industrial components and assemblies',
                  'Packaging and branded materials',
                  'Certified products for regulated markets',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <h3 className="text-lg font-semibold text-slate-900">What we need from you</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><Search className="mt-0.5 h-4 w-4" /> Product description or reference samples</li>
                <li className="flex items-start gap-2"><Factory className="mt-0.5 h-4 w-4" /> Target price range and order volume</li>
                <li className="flex items-start gap-2"><ClipboardCheck className="mt-0.5 h-4 w-4" /> Quality standards and certifications</li>
                <li className="flex items-start gap-2"><Ship className="mt-0.5 h-4 w-4" /> Shipping destination and timeline</li>
              </ul>
              <div className="mt-6">
                <Button asChild>
                  <Link to="/contact">Send a product inquiry</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
