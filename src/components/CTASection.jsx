import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to start sourcing from China?
            </h2>
            <p className="mt-4 text-slate-300 text-lg leading-relaxed">
              Send us your product details. We will review feasibility, identify
              shortlisted suppliers, and reply with a clear quote within 1–2
              business days.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-3 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 text-white hover:bg-white/10 font-medium px-6 py-3"
            >
              See how it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
