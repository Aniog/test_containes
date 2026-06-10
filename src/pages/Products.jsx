import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';

const categories = [
  {
    title: 'Electronics & Electrical',
    description: 'Consumer electronics, components, LED lighting, cables, and electrical equipment.',
    examples: ['Smart home devices', 'Electronic components', 'LED lighting', 'Power supplies', 'Consumer electronics'],
  },
  {
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, home textiles, and fashion accessories.',
    examples: ['Cotton fabrics', 'Garments', 'Home textiles', 'Sportswear', 'Fashion accessories'],
  },
  {
    title: 'Home & Garden',
    description: 'Furniture, decor, kitchenware, and outdoor products.',
    examples: ['Furniture', 'Kitchenware', 'Home decor', 'Garden tools', 'Storage solutions'],
  },
  {
    title: 'Industrial & Machinery',
    description: 'Manufacturing equipment, tools, and industrial components.',
    examples: ['Manufacturing equipment', 'Industrial tools', 'Pumps & valves', 'Bearings', 'Metal parts'],
  },
  {
    title: 'Toys & Gifts',
    description: 'Toys, promotional items, gifts, and party supplies.',
    examples: ['Educational toys', 'Promotional gifts', 'Party supplies', 'Craft items', 'Seasonal gifts'],
  },
  {
    title: 'Health & Beauty',
    description: 'Personal care, cosmetics, and wellness products.',
    examples: ['Skincare', 'Hair care', 'Makeup', 'Wellness products', 'Personal care devices'],
  },
  {
    title: 'Automotive Parts',
    description: 'Car parts, accessories, and aftermarket components.',
    examples: ['Engine parts', 'Body parts', 'Interior accessories', 'Lighting', 'Tools & equipment'],
  },
  {
    title: 'Packaging & Printing',
    description: 'Packaging materials, labels, and printing services.',
    examples: ['Custom packaging', 'Labels & stickers', 'Printing services', 'Shipping supplies', 'Display materials'],
  },
];

export default function Products() {
  return (
    <div>
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Products We Source</h1>
            <p className="mt-4 text-lg text-slate-600">
              We source a wide range of products across multiple industries. If you don't see your product category listed, contact us anyway—we likely can help.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Card key={category.title} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <CardDescription className="text-base text-slate-600">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example) => (
                      <span
                        key={example}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm"
                      >
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        {example}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Not Finding What You Need */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Don't See Your Product?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            We source many more products than what's listed here. If you have a specific product in mind, reach out and we'll let you know if we can help.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Inquire About Your Product
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
