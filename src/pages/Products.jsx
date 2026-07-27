import React from 'react';
import { Link } from 'react-router-dom';
import { PackageCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    title: 'Electronics & Components',
    description: 'Consumer electronics, circuit boards, connectors, sensors, and electronic assemblies.',
    examples: ['Smart home devices', 'LED lighting', 'Power supplies', 'Audio/video equipment'],
  },
  {
    title: 'Home & Kitchen',
    description: 'Household goods, kitchenware, storage solutions, and home improvement products.',
    examples: ['Cookware and bakeware', 'Storage containers', 'Cleaning tools', 'Small appliances'],
  },
  {
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, home textiles, and fashion accessories with quality and compliance checks.',
    examples: ['Casual wear', 'Uniforms', 'Bedding and towels', 'Bags and luggage'],
  },
  {
    title: 'Hardware & Tools',
    description: 'Hand tools, power tools, fasteners, and industrial hardware components.',
    examples: ['Hand tool sets', 'Power tool accessories', 'Fasteners', 'Safety equipment'],
  },
  {
    title: 'Garden & Outdoor',
    description: 'Garden tools, outdoor furniture, camping gear, and landscaping equipment.',
    examples: ['Patio furniture', 'Garden tools', 'Camping equipment', 'Outdoor lighting'],
  },
  {
    title: 'Toys & Gifts',
    description: 'Toys, promotional items, seasonal gifts, and novelty products with safety awareness.',
    examples: ['Educational toys', 'Promotional gifts', 'Seasonal items', 'Craft supplies'],
  },
  {
    title: 'Auto Parts',
    description: 'Vehicle components, replacement parts, and automotive accessories.',
    examples: ['Brake components', 'Filters', 'Lighting', 'Interior accessories'],
  },
  {
    title: 'Health & Beauty',
    description: 'Personal care items, beauty tools, wellness products, and packaging.',
    examples: ['Skincare tools', 'Hair accessories', 'Wellness devices', 'Packaging solutions'],
  },
];

const Products = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Products We Source</h1>
          <p className="mt-4 text-slate-600">We support a wide range of product categories. If your product is not listed, contact us and we’ll assess feasibility.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <PackageCheck className="h-5 w-5 text-slate-700" />
                <h2 className="text-lg font-semibold text-slate-900">{category.title}</h2>
              </div>
              <p className="mt-3 text-sm text-slate-600">{category.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {category.examples.map((example) => (
                  <li key={example} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Don’t see your product?</h3>
          <p className="mt-2 text-sm text-slate-600">Tell us what you need. We’ll let you know if we can help and what the realistic next steps are.</p>
          <div className="mt-4">
            <Button asChild>
              <Link to="/contact" className="inline-flex items-center gap-2">
                Contact us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
