import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'Advanced dual-axis folding system for complex sheet metal fabrication. Features precision control and automated bending sequences.',
    specs: ['Max Width: 3200mm', 'Thickness: 0.5-6mm', 'Bending Force: 220T'],
    image: 'double-folding-machine',
    featured: true,
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Heavy-duty double folder for high-volume production environments. Engineered for continuous operation with minimal maintenance.',
    specs: ['Max Width: 2500mm', 'Thickness: 0.8-4mm', 'Speed: 12m/min'],
    image: 'double-folder',
    featured: false,
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile folder ideal for general fabrication shops. Perfect balance of performance and affordability for everyday operations.',
    specs: ['Max Width: 2000mm', 'Thickness: 0.5-3mm', 'Weight: 2800kg'],
    image: 'sheet-metal-folder',
    featured: false,
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'CNC-controlled folding machine with touch-screen interface. Programmable sequences and memory storage for repeat orders.',
    specs: ['Max Width: 3200mm', 'Thickness: 0.5-6mm', 'CNC Control'],
    image: 'sheet-metal-folding-machine',
    featured: true,
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Industrial-grade folder built for demanding workshop conditions. Robust construction ensures years of reliable service.',
    specs: ['Max Width: 2500mm', 'Thickness: 0.8-5mm', 'Power: 15kW'],
    image: 'metal-folder',
    featured: false,
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Complete folding solution with integrated material handling. Includes safety guards and emergency stop systems.',
    specs: ['Max Width: 3000mm', 'Thickness: 0.6-5mm', 'Safety: CE Certified'],
    image: 'metal-folder-machine',
    featured: false,
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Premium folding machine with servo-driven backgauge. Achieves tight tolerances and consistent results across large batches.',
    specs: ['Max Width: 3200mm', 'Thickness: 0.5-6mm', 'Backgauge: Servo'],
    image: 'metal-folding-machine',
    featured: false,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Precision-Engineered Folding Solutions
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our comprehensive range of sheet metal folding machines, designed to meet the demands of modern fabrication.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group relative bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 ${
                product.featured ? 'ring-2 ring-amber-500 ring-offset-4' : ''
              }`}
            >
              {/* Featured Badge */}
              {product.featured && (
                <div className="absolute top-4 right-4 z-10 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              )}

              {/* Product Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 200 150" className="w-3/4 h-3/4" fill="none">
                  <rect x="20" y="50" width="160" height="50" rx="4" fill="#64748B" />
                  <rect x="35" y="40" width="130" height="15" rx="2" fill="#94A3B8" />
                  <rect x="50" y="100" width="20" height="30" rx="2" fill="#475569" />
                  <rect x="130" y="100" width="20" height="30" rx="2" fill="#475569" />
                  <circle cx="60" cy="75" r="12" fill="#D97706" />
                  <circle cx="140" cy="75" r="12" fill="#D97706" />
                  <rect x="70" y="65" width="60" height="20" rx="2" fill="#1E293B" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Specs */}
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-slate-500">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm hover:text-amber-700 transition-colors group/link"
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">Need help choosing the right machine for your application?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 hover:shadow-xl"
          >
            Contact Our Experts
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;