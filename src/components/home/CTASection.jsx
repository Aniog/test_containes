import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Upgrade Your Production?
          </h2>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Get in touch with our experts to discuss your folding machine requirements. We offer free consultations and custom quotes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 border border-slate-600 hover:border-accent text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
