import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';

export default function InquiryCTA() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-brand-700 to-brand-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Ready to Start Sourcing?
        </h2>
        <p className="mt-4 text-lg text-brand-200 max-w-xl mx-auto leading-relaxed">
          Tell us what you need and we will get back to you with a free quote and supplier recommendations within 24 hours.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-lg hover:bg-brand-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <Send className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <p className="mt-6 text-sm text-brand-300">No commitment. 100% confidential.</p>
      </div>
    </section>
  );
}
