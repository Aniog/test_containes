import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Electronics & Components',
    examples: 'Consumer electronics, power supplies, cables, PCBs, sensors, small appliances, smart home devices',
    notes: 'We work with both ODM and OEM projects. We verify component sourcing and assembly quality.',
  },
  {
    name: 'Home & Kitchen',
    examples: 'Cookware, small kitchen appliances, storage solutions, cleaning tools, tableware, home organization',
    notes: 'Common focus areas include material safety (food contact), durability testing, and packaging quality.',
  },
  {
    name: 'Apparel & Textiles',
    examples: 'Clothing, workwear, home textiles, bags, accessories, promotional apparel',
    notes: 'We audit fabric quality, stitching, color consistency, and compliance with international safety standards.',
  },
  {
    name: 'Industrial & Machinery',
    examples: 'Tools, hardware, fasteners, pumps, valves, motors, fabrication equipment, spare parts',
    notes: 'We verify manufacturing capability, material certifications, and dimensional accuracy.',
  },
  {
    name: 'Beauty & Personal Care',
    examples: 'Cosmetics, skincare, haircare, grooming tools, packaging for beauty products',
    notes: 'We focus on formulation consistency, packaging integrity, and regulatory documentation.',
  },
  {
    name: 'Sports & Outdoors',
    examples: 'Fitness equipment, camping gear, outdoor furniture, sports accessories, seasonal products',
    notes: 'We manage seasonal production timelines and verify performance and safety claims.',
  },
  {
    name: 'Furniture & Home Decor',
    examples: 'Indoor and outdoor furniture, lighting, decorative items, mirrors, shelving',
    notes: 'We inspect structural integrity, finish quality, packaging, and compliance with import regulations.',
  },
  {
    name: 'Automotive Parts',
    examples: 'Aftermarket parts, accessories, consumables, tools, and workshop equipment',
    notes: 'We verify material specifications, fitment, and consistency across production batches.',
  },
  {
    name: 'Packaging & Materials',
    examples: 'Custom packaging, labels, protective materials, industrial consumables',
    notes: 'We help buyers source sustainable options and verify material specifications and print quality.',
  },
];

const industries = [
  'Retail & E-commerce Brands',
  'Wholesalers & Distributors',
  'Industrial Equipment Companies',
  'OEM / Private Label Brands',
  'Promotional Products Companies',
  'Startups & Product Developers',
];

export default function Products() {
  return (
    <div>
      <section className="bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-medium text-slate-400 mb-3">PRODUCTS WE SOURCE</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-none mb-6">
              We source across a wide range of categories
            </h1>
            <p className="text-xl text-slate-300">
              From consumer goods to industrial components, we help buyers find capable manufacturers and manage production with discipline.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-xl tracking-tight mb-3">{cat.name}</h3>
              <p className="text-slate-600 mb-3">{cat.examples}</p>
              <p className="text-sm text-slate-500">{cat.notes}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight mb-8">Who we work with</h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 text-slate-700">
            {industries.map((ind, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="mt-2 block w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                <span>{ind}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-600 max-w-3xl">
            If your product category is not listed above, we can still help. Many of our most successful projects started with buyers who were told their product was "too specialized."
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">Tell us what you need to source</h2>
        <p className="text-slate-600 mb-8">We will assess feasibility and provide a clear proposal within a few days.</p>
        <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800">
          Get a Free Sourcing Quote
        </Link>
      </section>
    </div>
  );
}
