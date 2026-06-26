import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function ProductCard({ product, index }) {
  return (
    <div
      className="group bg-white rounded-lg border border-border-light overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Image area */}
      <div className="relative h-56 md:h-64 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bronze-light/20 flex items-center justify-center">
              {product.icon}
            </div>
            <h3 className="text-white font-heading text-xl">{product.name}</h3>
          </div>
        </div>
        {/* Decorative overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-bronze-light/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <p className="text-navy-600 mb-4 leading-relaxed">
          {product.description}
        </p>

        <div className="space-y-2 mb-6">
          {product.features.slice(0, 4).map((feature, i) => (
            <div key={i} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-bronze-light mt-0.5 shrink-0" />
              <span className="text-sm text-navy-600">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border-light">
          <span className="text-sm text-navy-500 font-medium">{product.category}</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-sm font-semibold text-navy-900 hover:text-bronze-light transition-colors group/link"
          >
            Inquire
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}