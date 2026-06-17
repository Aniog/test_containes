import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const ProductCard = ({ product, onRequestQuote }) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col">
      {/* Product Image Placeholder */}
      <div className="relative h-56 bg-gradient-to-br from-[#1a252f] to-[#2a3a47] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-[length:4px_4px]"></div>
        <div className="relative z-10 text-center px-6">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white/80 text-xs tracking-[2px] mb-4">
            {product.category}
          </div>
          <div className="text-white text-2xl font-semibold tracking-tight">{product.name}</div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="mb-6">
          <p className="text-gray-600 leading-relaxed text-[15px]">{product.description}</p>
        </div>

        {/* Key Specs */}
        <div className="mb-6">
          <div className="text-xs font-semibold tracking-[1.5px] text-gray-400 mb-3">KEY SPECIFICATIONS</div>
          <div className="grid grid-cols-2 gap-3">
            {product.specs.map((spec, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="text-emerald-600 mt-0.5 flex-shrink-0" size={15} />
                <span className="text-sm text-gray-700">{spec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-8 flex-1">
          <div className="text-xs font-semibold tracking-[1.5px] text-gray-400 mb-3">FEATURES</div>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-center gap-2">
                <div className="w-1 h-1 bg-[#1a252f] rounded-full"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <button
          onClick={() => onRequestQuote(product)}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1a252f] text-white font-medium rounded-lg hover:bg-[#2a3a47] transition-colors group-hover:bg-[#2a3a47]"
        >
          Request Quote
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
