import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Tell us what you need. We will review your request and send a free
          sourcing proposal within 24 hours — no upfront fees.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-brand-800 hover:bg-slate-100 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-400 bg-transparent px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
