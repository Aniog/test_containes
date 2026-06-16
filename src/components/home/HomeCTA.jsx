import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeCTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
          Ready to Upgrade Your Production?
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
          Get in touch with our engineering team to find the perfect folding machine for your workshop. Custom configurations available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-navy-900 font-semibold rounded-lg px-8 py-3.5 transition-colors"
          >
            Contact Our Team
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-navy-900 font-semibold rounded-lg px-8 py-3.5 transition-colors"
          >
            Browse Catalog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
