import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="bg-navy-700 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-navy-100 text-lg mb-8 max-w-2xl mx-auto">
          Tell us what you need. We'll find the right suppliers, verify them, and manage the process — so you can focus on your business.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-redhov text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
