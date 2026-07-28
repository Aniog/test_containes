import { Link } from 'react-router-dom';
import { ArrowRight, Shield } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-padding bg-brand-600">
      <div className="section-container text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Free Consultation — No Commitment
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Ready to Start Sourcing from China?
          </h2>
          <p className="mt-4 text-lg text-brand-100 leading-relaxed">
            Tell us what you need. We'll provide a free sourcing plan and quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link to="/contact" className="btn-white text-base px-8 py-3.5 gap-2">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+861234567890" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Or call us: +86 123 4567 890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
