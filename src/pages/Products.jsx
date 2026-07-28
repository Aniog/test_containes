import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PackageCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const categories = [
  {
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, connectors, sensors, and related components.',
    examples: ['Audio devices', 'Wearables', 'Power supplies', 'LED lighting'],
  },
  {
    title: 'Home & Kitchen',
    description: 'Household goods, kitchenware, storage, cleaning tools, and small appliances.',
    examples: ['Cookware', 'Storage containers', 'Cleaning tools', 'Small appliances'],
  },
  {
    title: 'Furniture & Lighting',
    description: 'Indoor and outdoor furniture, commercial fixtures, and lighting systems.',
    examples: ['Office furniture', 'Outdoor seating', 'LED fixtures', 'Shelving'],
  },
  {
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, home textiles, bags, and accessories.',
    examples: ['Casual wear', 'Home textiles', 'Bags', 'Workwear'],
  },
  {
    title: 'Hardware & Tools',
    description: 'Hand tools, power tools, fasteners, and building hardware.',
    examples: ['Hand tools', 'Power tools', 'Fasteners', 'Locks and hinges'],
  },
  {
    title: 'Packaging & Labels',
    description: 'Retail packaging, shipping boxes, labels, and protective materials.',
    examples: ['Retail boxes', 'Shipping materials', 'Labels', 'Protective packaging'],
  },
];

const Products = () => {
  return (
    <div className="flex-1">
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge className="bg-white/10 text-white hover:bg-white/20">Products We Source</Badge>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Broad sourcing coverage across common import categories
          </h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            We regularly source across a wide range of product categories. If your category is not listed, contact us anyway.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.title} className="border-slate-200 bg-white">
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <PackageCheck className="h-5 w-5 text-slate-900" />
                  <h2 className="text-base font-semibold text-slate-900">{category.title}</h2>
                </div>
                <p className="mt-2 text-sm text-slate-600">{category.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <Badge key={example} variant="outline" className="border-slate-200 text-slate-700">
                      {example}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-10 border-slate-200 bg-slate-50">
          <div className="p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900">Need a different product category?</h2>
            <p className="mt-2 text-sm text-slate-600">
              Tell us what you are looking for. We will let you know if we can help and what the likely timeline is.
            </p>
            <div className="mt-5">
              <Button asChild className="bg-slate-900 text-white hover:bg-slate-800">
                <Link to="/contact">
                  Request sourcing help <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Products;
