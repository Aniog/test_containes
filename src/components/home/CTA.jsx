import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-4">
          Get Started Today
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Elevate Your Metal Fabrication?
        </h2>
        <p className="text-navy-200 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Contact our team of experts to find the perfect folding solution for your 
          production needs. We offer customized configurations and competitive pricing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200"
          >
            Request a Quote <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
