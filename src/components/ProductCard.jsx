import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ title, description, specs, onInquiry }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Visual Header */}
      <div className="h-48 bg-gradient-to-br from-[#1a1f2e] to-[#2a3142] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-[length:4px_4px]"></div>
        <div className="relative z-10 text-center px-6">
          <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-white/80 text-xs tracking-[2px] mb-3">
            PRECISION ENGINEERING
          </div>
          <h3 className="text-white text-xl font-semibold tracking-tight">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
          {description}
        </p>

        {/* Specs */}
        <div className="mb-5 pt-4 border-t border-gray-100">
          <div className="text-xs font-medium text-gray-400 tracking-widest mb-2.5">KEY SPECIFICATIONS</div>
          <ul className="space-y-1.5">
            {specs.map((spec, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-[#c5a46e] mt-1">•</span>
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <button
          onClick={onInquiry}
          className="w-full flex items-center justify-center gap-2 px-5 py-3 border border-[#1a1f2e] text-[#1a1f2e] text-sm font-medium rounded-lg hover:bg-[#1a1f2e] hover:text-white transition-all group-hover:bg-[#1a1f2e] group-hover:text-white"
        >
          Request Information
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
