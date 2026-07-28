import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

export default function HomeCTA() {
  return (
    <section className="py-20 md:py-28 bg-brand-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/15 text-blue-100 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <Mail className="w-3.5 h-3.5" />
          Free Consultation — No Obligation
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Source Smarter from China?
        </h2>
        <p className="text-blue-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Tell us what you need. We'll review your requirements and provide a free sourcing assessment within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
          >
            Learn How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
