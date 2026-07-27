import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Source from China?
        </h2>
        <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Tell us what you need and we'll get back to you within 24 hours with a free sourcing consultation and quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            Learn How It Works
          </Link>
        </div>
        <p className="text-blue-200 text-sm mt-6">
          No commitment required. Free initial consultation.
        </p>
      </div>
    </section>
  );
}
