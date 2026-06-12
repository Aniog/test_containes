import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-20 bg-brand-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-4">
          Ready to Start?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Get a Free Sourcing Quote Today
        </h2>
        <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Tell us what you need and we will respond within one business day with a plan and a quote.
          No obligation, no upfront payment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-gold text-white font-bold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="mailto:info@ssourcingchina.com"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-lg text-base hover:border-white hover:bg-white/10 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}
