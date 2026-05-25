import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
          Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan — at no cost.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-base transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white/15 px-8 py-4 rounded-lg font-semibold text-base transition-colors"
          >
            Learn How It Works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
