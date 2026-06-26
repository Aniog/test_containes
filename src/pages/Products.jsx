import React from 'react';
import { Smartphone, Home, Cpu, Watch, ShoppingBag, Wrench } from 'lucide-react';

const Products = () => {
  const categories = [
    { name: 'Electronics & Tech', icon: Smartphone, desc: 'Consumer electronics, PCB, components, and creative gadgets.', id: 'prod-cat-elec' },
    { name: 'Home & Kitchen', icon: Home, desc: 'Furniture, kitchenware, appliances, and smart home devices.', id: 'prod-cat-home' },
    { name: 'Outdoor & Sports', icon: Watch, desc: 'Camping gear, fitness equipment, and sportswear.', id: 'prod-cat-outdoor' },
    { name: 'Industrial Parts', icon: Cpu, desc: 'Precision machining, molds, valves, and industrial supplies.', id: 'prod-cat-ind' },
    { name: 'Fashion & Textiles', icon: ShoppingBag, desc: 'Apparel, accessories, bags, and luxury fabrics.', id: 'prod-cat-fashion' },
    { name: 'Tools & Hardware', icon: Wrench, desc: 'Power tools, safety equipment, and construction hardware.', id: 'prod-cat-tool' },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-slate-900 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Products We Source</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Leveraging our network of 500+ verified factories across China's major manufacturing hubs.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((cat, idx) => (
              <div key={idx} className="group border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="h-48 overflow-hidden">
                  <img 
                    data-strk-img-id={`cat-img-${cat.id}`}
                    data-strk-img={`[cat-name-${idx}] manufacturing china`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={cat.name}
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-slate-50 text-brand-blue rounded-lg flex items-center justify-center mb-6">
                    <cat.icon size={24} />
                  </div>
                  <h3 id={`cat-name-${idx}`} className="text-xl font-bold text-slate-900 mb-3">{cat.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-0">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-slate-50 rounded-3xl text-center border border-slate-200">
            <h2 className="text-2xl font-bold mb-4">Don't see your category?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Our scouting team can find almost any product manufactured in China. Send us your specs, and we'll start a feasibility study for free.
            </p>
            <button className="bg-brand-blue text-white px-8 py-3 rounded-md font-bold hover:bg-slate-800 transition-all">
              Request Category Info
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
