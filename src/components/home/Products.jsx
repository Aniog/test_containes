import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision dual-action folding system for complex sheet metal bends with repeatable accuracy.',
    features: ['Dual synchronized folding beams', 'CNC-controlled positioning', 'Touchscreen HMI interface'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile folder designed for general-purpose sheet metal work with fast setup and changeover.',
    features: ['Quick-change tooling system', 'Adjustable backgauge', 'Safety light curtains'],
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Heavy-duty folding machine built for thick materials and high-volume production environments.',
    features: ['Reinforced frame construction', 'High-tonnage capacity', 'Low maintenance design'],
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="products-title" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Precision Folding Solutions
          </h2>
          <p id="products-subtitle" className="text-lg text-slate-600">
            From double folder machines to heavy-duty metal folding systems, our machinery
            delivers the accuracy and reliability your production line demands.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.06A2 2 0 013 10.94V5a2 2 0 012-2h14a2 2 0 012 2v5.94a2 2 0 01-1.32 1.85l-5.1 3.06a2 2 0 01-2.16 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 7.5l3-1.5M8.5 7.5l-3-1.5" />
                  </svg>
                  <p className="text-sm font-medium">{product.title}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-slate-600 mb-5 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Also offering: Double Folder, Sheet Metal Folder, Metal Folder, Metal Folding Machine
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Request Full Catalog
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
