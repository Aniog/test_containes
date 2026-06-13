import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

const categories = [
  {
    name: 'Electronics & Components',
    items: 'Consumer electronics, PCBs, sensors, IoT devices, batteries, cables, displays',
  },
  {
    name: 'Industrial Machinery',
    items: 'CNC equipment, packaging machinery, automation systems, power tools, pumps, valves',
  },
  {
    name: 'Textiles & Garments',
    items: 'Apparel, fabrics, technical textiles, uniforms, sportswear, accessories, yarn',
  },
  {
    name: 'Home & Lifestyle',
    items: 'Furniture, kitchenware, home decor, lighting, storage solutions, mattresses',
  },
  {
    name: 'Automotive Parts',
    items: 'Vehicle components, aftermarket parts, EV parts, tires, batteries, accessories',
  },
  {
    name: 'Packaging & Labels',
    items: 'Custom packaging, corrugated boxes, labels, eco-friendly materials, bottles',
  },
  {
    name: 'Medical & Healthcare',
    items: 'Medical devices, PPE, diagnostic equipment, hospital supplies, fitness equipment',
  },
  {
    name: 'Food Processing & Equipment',
    items: 'Processing machinery, packaging equipment, ingredients, food containers',
  },
  {
    name: 'Building & Construction',
    items: 'Hardware, pipes, fittings, lighting, tiles, flooring, construction tools, safety gear',
  },
  {
    name: 'Chemicals & Raw Materials',
    items: 'Industrial chemicals, adhesives, coatings, plastic resins, additives, compounds',
  },
  {
    name: 'Personal Care & Cosmetics',
    items: 'Skincare, haircare, makeup, packaging, brushes, supplement bottles, essential oils',
  },
  {
    name: 'Sports & Outdoor',
    items: 'Camping gear, fitness equipment, cycling parts, outdoor apparel, water sports gear',
  },
];

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Products We Source</h1>
            <p className="text-lg lg:text-xl text-primary-100">
              From electronics to heavy machinery, we source across all major product categories from Chinese manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="p-6 bg-white border border-neutral-200 rounded-xl hover:border-primary-200 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{cat.name}</h3>
                <p className="text-sm text-neutral-600">{cat.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Can't Find Your Product? */}
      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Can not Find Your Product Category?</h2>
          <p className="text-lg text-neutral-600 mb-8">
            We source virtually anything manufactured in China. If you do not see your product listed, contact us and we will find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            Ask About Your Product <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}