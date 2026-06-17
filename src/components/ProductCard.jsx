import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product, onRequestQuote }) => {
  return (
    <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col">
      {/* Image Area */}
      <div className="relative h-56 bg-slate-100 overflow-hidden">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[product-${product.id}-desc] [product-${product.id}-title] industrial metal folding machine precision engineering`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700 border border-slate-200">
          {product.capacity}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <h3 id={`product-${product.id}-title`} className="text-xl font-semibold text-slate-900 tracking-[-0.3px] mb-1">
            {product.title}
          </h3>
          <p className="text-sm text-slate-500">{product.subtitle}</p>
        </div>

        <p id={`product-${product.id}-desc`} className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
          {product.description}
        </p>

        {/* Key Specs */}
        <div className="grid grid-cols-2 gap-3 mb-6 pt-4 border-t border-slate-100">
          {product.specs.map((spec, index) => (
            <div key={index} className="text-xs">
              <div className="text-slate-400 mb-0.5">{spec.label}</div>
              <div className="font-medium text-slate-700">{spec.value}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => onRequestQuote(product.title)}
          className="w-full flex items-center justify-center gap-2 px-5 py-3 border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-colors group-hover:border-slate-900 group-hover:text-slate-900"
        >
          Request Information
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
