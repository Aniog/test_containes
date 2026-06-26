import React from 'react';
import { products } from '../data/products';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Machinery</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Discover our range of elegant, high-performance sheet metal folding machines. Engineered for precision, built for durability.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-all hover:shadow-md group">
              {/* Image Placeholder area */}
              <div className="h-64 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                 <img
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={`https://images.unsplash.com/photo-${1504917595217 + index}?auto=format&fit=crop&q=80&w=800`}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                    {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold text-primary mb-3">{product.title}</h2>
                <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <ChevronRight className="w-4 h-4 text-secondary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <Link to="/contact" className="inline-flex flex-row items-center justify-center w-full bg-slate-50 hover:bg-slate-100 text-primary font-medium py-3 px-4 rounded-lg transition-colors border border-slate-200">
                    Request Pricing <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;