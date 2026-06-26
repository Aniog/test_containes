import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function InquiryCTA() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-2xl px-6 py-12 md:px-12 md:py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Tell us about your product requirements and get a free sourcing quote. Our team responds within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-md hover:bg-accent-hover transition-colors text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
