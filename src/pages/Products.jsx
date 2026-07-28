import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const productCategories = [
  {
    title: 'Electronics & Components',
    description: 'PCBs, consumer electronics, cables, adapters, LED lighting, batteries, power banks, and electronic components.',
    examples: ['USB cables & adapters', 'LED lighting systems', 'PCB assemblies', 'Battery packs', 'Smart home devices'],
    id: 'cat-electronics',
  },
  {
    title: 'Machinery & Hardware',
    description: 'Industrial equipment, power tools, hardware fasteners, bearings, valves, pumps, and mechanical parts.',
    examples: ['Power tools', 'Fasteners & fittings', 'Bearings', 'Industrial valves', 'CNC machined parts'],
    id: 'cat-machinery',
  },
  {
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, bags, shoes, accessories, and home textile products from verified mills and factories.',
    examples: ['Cotton & synthetic fabrics', 'Casual & workwear', 'Handbags & backpacks', 'Footwear', 'Bedding & towels'],
    id: 'cat-textiles',
  },
  {
    title: 'Packaging Materials',
    description: 'Paper boxes, plastic containers, glass bottles, metal cans, and custom branded packaging solutions.',
    examples: ['Corrugated boxes', 'Plastic containers', 'Glass bottles', 'Metal tins', 'Custom printed packaging'],
    id: 'cat-packaging',
  },
  {
    title: 'Home & Furniture',
    description: 'Indoor and outdoor furniture, kitchenware, home decor, bedding, storage solutions, and garden products.',
    examples: ['Office furniture', 'Kitchenware', 'Home decor', 'Outdoor furniture', 'Storage organizers'],
    id: 'cat-home',
  },
  {
    title: 'Automotive Parts',
    description: 'Auto accessories, replacement parts, car electronics, custom automotive components, and tools.',
    examples: ['Car accessories', 'Replacement parts', 'Car electronics', 'Diagnostic tools', 'Custom components'],
    id: 'cat-automotive',
  },
  {
    title: 'Medical & Health',
    description: 'Medical devices, health supplements packaging, personal protective equipment, and wellness products.',
    examples: ['Medical consumables', 'PPE supplies', 'Health devices', 'Wellness products', 'Lab equipment'],
    id: 'cat-medical',
  },
  {
    title: 'Sports & Outdoor',
    description: 'Fitness equipment, camping gear, sporting goods, bicycle parts, and outdoor accessories.',
    examples: ['Fitness equipment', 'Camping gear', 'Bicycle parts', 'Sporting goods', 'Outdoor accessories'],
    id: 'cat-sports',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-800 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-teal-400 uppercase tracking-wider">Industries</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Products We Source
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We source a wide range of products across multiple industries. If you do not see your category, contact us anyway. Chances are we can help.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {productCategories.map((category) => (
              <div key={category.id} className="flex flex-col sm:flex-row gap-5 bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="sm:w-48 h-48 sm:h-auto shrink-0">
                  <img
                    data-strk-img-id={category.id}
                    data-strk-img={`[${category.id}-title] [${category.id}-desc]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col">
                  <h2 id={`${category.id}-title`} className="text-lg font-bold text-slate-800 mb-2">{category.title}</h2>
                  <p id={`${category.id}-desc`} className="text-sm text-slate-600 mb-4 flex-1">{category.description}</p>
                  <ul className="space-y-1.5 mb-4">
                    {category.examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="text-xs text-slate-600">{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom sourcing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Do Not See Your Product?</h2>
          <p className="text-lg text-slate-600 mb-8">
            We source across many industries and product categories. Even if your product is not listed above, reach out. We will let you know honestly if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-md transition-colors"
          >
            Request a Free Assessment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
