import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Wrench, Shirt, HardHat, Car, UtensilsCrossed, ToyBrick, Zap } from 'lucide-react';

const categories = [
  { icon: Cpu, title: 'Electronics & Components', items: 'PCBs, sensors, cables, consumer electronics' },
  { icon: Wrench, title: 'Machinery & Equipment', items: 'Industrial machines, tools, automation' },
  { icon: Shirt, title: 'Textiles & Apparel', items: 'Fabrics, garments, accessories, footwear' },
  { icon: HardHat, title: 'Building Materials', items: 'Steel, tiles, fixtures, hardware' },
  { icon: Car, title: 'Auto Parts & Accessories', items: 'OEM parts, aftermarket, accessories' },
  { icon: UtensilsCrossed, title: 'Home & Kitchen', items: 'Furniture, cookware, decor, appliances' },
  { icon: ToyBrick, title: 'Toys & Gifts', items: 'Educational toys, promotional items, crafts' },
  { icon: Zap, title: 'New Energy Products', items: 'Solar panels, batteries, EV components' },
];

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">Products We Source</span>
          <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Sourcing Across All Major Product Categories
          </h2>
          <p id="products-subtitle" className="text-lg text-slate-600">
            Whether you need industrial components or consumer goods, we have the network and expertise to find the right suppliers.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group p-5 rounded-xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                <cat.icon className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{cat.title}</h3>
              <p className="text-sm text-slate-500">{cat.items}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
          >
            View All Product Categories
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
