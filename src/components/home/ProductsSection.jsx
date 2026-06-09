import React from 'react';
import { Settings, Layers, Shield, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'Advanced dual-action folding system for complex sheet metal operations. Perfect for high-volume production with consistent precision.',
    features: ['Dual folding heads', 'Automated alignment', 'High-speed operation'],
    icon: Settings,
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Compact yet powerful double folder designed for versatile bending applications. Ideal for workshops with limited space.',
    features: ['Space-efficient design', 'Quick setup', 'Multiple bend angles'],
    icon: Layers,
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Professional-grade sheet metal folder engineered for accuracy and durability. Handles various metal thicknesses with ease.',
    features: ['Heavy-duty construction', 'Precision gauges', 'Easy adjustment'],
    icon: Shield,
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Industrial sheet metal folding machine with advanced control systems. Delivers repeatable results for demanding applications.',
    features: ['Digital controls', 'Repeatability ±0.1mm', 'Safety interlocks'],
    icon: Settings,
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Versatile metal folder suitable for a wide range of materials including steel, aluminum, and stainless steel.',
    features: ['Multi-material support', 'Adjustable pressure', 'Durable blades'],
    icon: Layers,
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Robust metal folder machine built for continuous operation in industrial environments. Maximum uptime guaranteed.',
    features: ['Continuous operation', 'Low maintenance', 'Extended warranty'],
    icon: Shield,
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Premium metal folding machine combining traditional craftsmanship with modern technology. The ultimate fabrication solution.',
    features: ['Smart technology', 'Energy efficient', 'Operator-friendly'],
    icon: Settings,
  },
];

const ProductCard = ({ product }) => {
  const Icon = product.icon;
  
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200">
      {/* Image Area */}
      <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-16 h-16 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-slate-700">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Premium Folding Machinery
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Discover our comprehensive range of sheet metal folding machines, 
            engineered for precision, durability, and exceptional performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
