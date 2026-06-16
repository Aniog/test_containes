import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const products = [
  {
    id: 'dfm-pro',
    title: 'Double Folder Pro Series',
    subtitle: 'High-speed automated double folding',
    description: 'Our flagship double folder designed for maximum productivity in high-volume environments. Features elegant up-and-down bending without turning the sheet.',
    features: ['Up & down progressive folding', 'Fully motorized control', 'Max thickness: 2.5mm (Steel)', 'Operating length: up to 3200mm'],
    imgId: 'product-img-dfm-pro',
    titleId: 'prod-title-dfm-pro',
    descId: 'prod-desc-dfm-pro'
  },
  {
    id: 'cnc-master',
    title: 'CNC Master Folder',
    subtitle: 'Precision CNC metal folding machine',
    description: 'An elegant solution for complex profiles. The CNC Master Folder offers unparalleled accuracy with user-friendly touchscreen programming.',
    features: ['Graphic touchscreen CNC', 'Automatic crowning', 'Max thickness: 3.0mm (Steel)', 'Operating length: up to 4000mm'],
    imgId: 'product-img-cnc-master',
    titleId: 'prod-title-cnc-master',
    descId: 'prod-desc-cnc-master'
  },
  {
    id: 'compact-fold',
    title: 'Compact Metal Folder',
    subtitle: 'Space-saving precision metal folding',
    description: 'Perfect for diverse architectural profiles and smaller workshops. Delivers the legendary ARTITECT precision in a notably smaller footprint.',
    features: ['Ergonomic low-profile design', 'Fast tooling change system', 'Max thickness: 1.5mm (Steel)', 'Operating length: up to 2500mm'],
    imgId: 'product-img-compact-fold',
    titleId: 'prod-title-compact-fold',
    descId: 'prod-desc-compact-fold'
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="products-section-title" className="text-sm font-bold text-amber-500 tracking-widest uppercase mb-2">Our Machinery</h2>
          <h3 id="products-section-heading" className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-display">
            Precision Metal Folding Solutions
          </h3>
          <p id="products-section-desc" className="text-lg text-slate-600">
            From our advanced double folding machines to our state-of-the-art CNC controllers, every ARTITECT product is engineered for durability, elegance, and extreme ease of use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-heading] industrial machinery`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-amber-500 mb-1">{product.subtitle}</p>
                  <h4 id={product.titleId} className="text-2xl font-bold text-slate-800">{product.title}</h4>
                </div>
                
                <p id={product.descId} className="text-slate-600 mb-6 flex-grow">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-900 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-blue-900 border border-slate-200 hover:border-blue-900 text-slate-700 hover:text-white py-3 px-4 rounded-md font-medium transition-colors group">
                  View Specifications
                  <ArrowRight className="w-4 h-4 text-amber-500 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">Need a machine tailored to your specific production line?</p>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-semibold transition-colors shadow-md">
            Discuss Custom Solutions
          </a>
        </div>

      </div>
    </section>
  );
};

export default Products;