import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ title, description, specs, imageQuery }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Image Placeholder */}
      <div className="relative h-56 bg-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/60 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs tracking-[2px] mb-3">
              PRECISION ENGINEERING
            </div>
            <div className="text-white text-xl font-semibold tracking-tight">{title}</div>
          </div>
        </div>
        {/* Decorative element */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-tl-full" />
      </div>

      <div className="p-7 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{description}</p>

        {/* Specs */}
        <div className="space-y-2 mb-6">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-center gap-2 text-xs text-slate-500">
              <div className="w-1 h-1 rounded-full bg-slate-400" />
              <span>{spec}</span>
            </div>
          ))}
        </div>

        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:gap-3 transition-all"
        >
          Request Information <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
