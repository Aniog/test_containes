import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaBanner = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-steel-dark to-steel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          Ready to Transform Your Metal Folding Operations?
        </h2>
        <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Join thousands of satisfied manufacturers worldwide. Get a personalized quote for your production needs today.
        </p>
        <a
          href="#contact"
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 bg-amber text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-amber-light transition-colors text-sm"
        >
          Get Your Free Quote
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
