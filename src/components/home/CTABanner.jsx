import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-16 md:py-20 bg-brand-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Tell us what you need. We'll find the right supplier, verify the factory, and manage quality — so you can focus on growing your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-600 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand-navy transition-colors"
          >
            Learn How It Works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
