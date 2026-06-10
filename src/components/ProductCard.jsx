import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const ProductCard = ({ product, onQuoteClick }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Product Image */}
      <div className="relative h-72 bg-slate-100 overflow-hidden">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[product-${product.id}-desc] [product-${product.id}-title] sheet metal folding machine industrial`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold tracking-wide text-slate-700">
          {product.capacity}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <div>
          <h3 
            id={`product-${product.id}-title`}
            className="text-2xl font-semibold tracking-tight text-slate-900 mb-2"
          >
            {product.title}
          </h3>
          <p 
            id={`product-${product.id}-desc`}
            className="text-slate-600 mb-6 leading-relaxed"
          >
            {product.description}
          </p>
        </div>

        {/* Key Specs */}
        <div className="mb-6 pt-6 border-t border-slate-100">
          <div className="text-xs font-semibold tracking-[2px] text-slate-500 mb-3">KEY SPECIFICATIONS</div>
          <ul className="space-y-2">
            {product.specs.map((spec, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-4">
          <button
            onClick={() => onQuoteClick(product.title)}
            className="w-full group/btn inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 active:scale-[0.985] transition-all"
          >
            Request Quote for {product.shortName}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
