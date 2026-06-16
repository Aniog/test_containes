import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaBanner = () => {
  return (
    <section className="py-20 md:py-28 bg-navy-medium relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your{' '}
          <span className="text-gold">Production Line?</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Join over 2,000 satisfied customers who have upgraded their metal
          fabrication capabilities with ARTITECT machinery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base"
          >
            View Product Catalog
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
