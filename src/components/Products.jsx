import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Double Folding Machine',
      description: 'Heavy-duty double-acting folder for precision sheet metal fabrication. Features advanced control systems and robust construction.',
      specs: ['Max bending length: 3200mm', 'Bending force: up to 160 tons', 'NC control system'],
      popular: true,
    },
    {
      id: 2,
      name: 'Sheet Metal Folding Machine',
      description: 'Versatile folding machine ideal for medium to large-scale production. Combines efficiency with exceptional accuracy.',
      specs: ['Max bending length: 2500mm', 'Bending force: up to 100 tons', 'CNC touchscreen control'],
      popular: true,
    },
    {
      id: 3,
      name: 'Metal Folder Machine',
      description: 'Compact yet powerful metal folder designed for workshops with limited space. Delivers professional results every time.',
      specs: ['Max bending length: 2000mm', 'Bending force: up to 75 tons', 'Manual/NC options'],
      popular: false,
    },
    {
      id: 4,
      name: 'Heavy Duty Double Folder',
      description: 'Industrial-grade double folder built for continuous operation. Perfect for high-volume manufacturing environments.',
      specs: ['Max bending length: 4000mm', 'Bending force: up to 200 tons', 'PLC control system'],
      popular: false,
    },
    {
      id: 5,
      name: 'CNC Metal Folding Machine',
      description: 'Computer-controlled precision folding with programmable angles and sequences. Ideal for complex fabrication projects.',
      specs: ['Max bending length: 3000mm', 'Bending force: up to 130 tons', 'Full CNC programming'],
      popular: true,
    },
    {
      id: 6,
      name: 'Manual Sheet Metal Folder',
      description: 'Cost-effective manual folder for smaller operations. Easy to operate with consistent bending quality.',
      specs: ['Max bending length: 1500mm', 'Bending force: up to 50 tons', 'Hand lever operation'],
      popular: false,
    },
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-amber-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Premium Sheet Metal{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
              Folding Solutions
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Discover our comprehensive range of sheet metal folding machines, designed to meet the demands 
            of modern fabrication shops with precision, durability, and exceptional performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300"
            >
              {/* Product Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-slate-300/50 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-16 h-16 text-slate-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="10" y="50" width="80" height="40" rx="2" />
                      <rect x="15" y="15" width="70" height="35" rx="2" />
                      <circle cx="50" cy="32" r="8" />
                      <line x1="20" y1="70" x2="20" y2="85" />
                      <line x1="80" y1="70" x2="80" y2="85" />
                    </svg>
                  </div>
                </div>
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Specs */}
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-500">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors group/link"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-slate-800/25"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;