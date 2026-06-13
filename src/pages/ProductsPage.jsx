import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const categories = [
  {
    name: 'Electronics & Components',
    icon: '📱',
    description: 'Consumer electronics, PCBs, cables, connectors, semiconductors, smart devices, and electronic components.',
    examples: ['Smartphones & accessories', 'PCB assemblies', 'LED lighting components', 'Cables & connectors', 'Smart home devices']
  },
  {
    name: 'Home & Garden Products',
    icon: '🏠',
    description: 'Furniture, decor, kitchenware, garden tools, outdoor furniture, and home improvement products.',
    examples: ['Kitchen appliances', 'Bathroom fixtures', 'Garden tools', 'Home decor items', 'Storage solutions']
  },
  {
    name: 'Apparel & Textiles',
    icon: '👕',
    description: 'Clothing, fabrics, accessories, footwear, and textile products for all markets.',
    examples: ['Men\'s & women\'s clothing', 'Sportswear', 'Bags & accessories', 'Footwear', 'Custom textiles']
  },
  {
    name: 'Industrial Equipment',
    icon: '⚙️',
    description: 'Machinery, tools, industrial components, automation equipment, and manufacturing supplies.',
    examples: ['CNC machines', 'Packaging equipment', 'Industrial pumps', 'Automation systems', 'Safety equipment']
  },
  {
    name: 'Packaging & Printing',
    icon: '📦',
    description: 'Custom packaging, labels, boxes, bags, printing services, and promotional materials.',
    examples: ['Custom boxes', 'Product labels', 'Shopping bags', 'Promotional materials', 'Food packaging']
  },
  {
    name: 'Toys & Gifts',
    icon: '🎁',
    description: 'Children\'s toys, promotional gifts, holiday decorations, and novelty items.',
    examples: ['Educational toys', 'Plush toys', 'Promotional gifts', 'Holiday decorations', 'Board games']
  },
  {
    name: 'Automotive Parts',
    icon: '🚗',
    description: 'Auto parts, accessories, motorcycle components, and aftermarket products.',
    examples: ['Engine components', 'Body parts', 'Interior accessories', 'Lighting systems', 'Electrical parts']
  },
  {
    name: 'Health & Beauty',
    icon: '💄',
    description: 'Cosmetics, skincare, personal care products, health supplements, and beauty tools.',
    examples: ['Skincare products', 'Makeup', 'Hair care tools', 'Health supplements', 'Beauty accessories']
  },
  {
    name: 'Sports & Outdoor',
    icon: '⚽',
    description: 'Sports equipment, outdoor gear, fitness products, and recreational items.',
    examples: ['Fitness equipment', 'Camping gear', 'Sports apparel', 'Outdoor tools', 'Water sports equipment']
  },
  {
    name: 'Furniture & Lighting',
    icon: '🪑',
    description: 'Indoor and outdoor furniture, lighting fixtures, lamps, and decorative lighting.',
    examples: ['Office furniture', 'Outdoor furniture', 'LED lighting', 'Decorative lamps', 'Light fixtures']
  },
  {
    name: 'Hardware & Tools',
    icon: '🔧',
    description: 'Hand tools, power tools, fasteners, building materials, and hardware supplies.',
    examples: ['Power tools', 'Hand tools', 'Fasteners & screws', 'Building materials', 'Security hardware']
  },
  {
    name: 'Custom Manufacturing',
    icon: '🏭',
    description: 'OEM and ODM services for custom products, prototypes, and specialized manufacturing.',
    examples: ['Product prototyping', 'Custom molds', 'OEM production', 'ODM development', 'Specialized manufacturing']
  }
];

export default function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Products We Source</h1>
            <p className="text-lg text-slate-300">We source a wide range of products from verified Chinese manufacturers across multiple industries. If you do not see your product category listed, contact us anyway.</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat, index) => (
              <div key={index} className="card">
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{cat.name}</h2>
                <p className="text-slate-600 text-sm mb-4">{cat.description}</p>
                <ul className="space-y-2">
                  {cat.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Do Not See Your Product?</h2>
            <p className="text-slate-600 text-lg mb-8">We source many more product categories than listed here. Contact us with your specific requirements and we will find the right supplier.</p>
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Request a Custom Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
