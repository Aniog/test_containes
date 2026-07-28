import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
      <div className="container-wide text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Source Products from China?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Get a free sourcing quote today. Tell us what products you need, and our team will provide a detailed proposal within 24 hours.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/contact" className="bg-white text-accent-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 text-lg">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <a href="tel:+8613800138000" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
            <Phone className="w-5 h-5" />
            <span>+86 138-0013-8000</span>
          </a>
          <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            <span>info@ssourcingchina.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
