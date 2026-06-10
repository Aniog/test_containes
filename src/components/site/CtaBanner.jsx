import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CtaBanner({
  title = "Ready to source from China with confidence?",
  description = "Tell us what you need. We'll send back a clear sourcing plan, supplier shortlist and indicative pricing within one business day.",
  primaryLabel = "Get a Free Sourcing Quote",
  primaryTo = "/contact",
  secondaryLabel = "How it works",
  secondaryTo = "/how-it-works",
}) {
  return (
    <section className="bg-brand-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
              {title}
            </h2>
            <p className="mt-4 text-brand-100/90 text-base md:text-lg max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <Link
              to={primaryTo}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-500 hover:bg-accent-600 text-white font-semibold px-5 py-3 transition"
            >
              {primaryLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={secondaryTo}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 hover:border-white/40 text-white font-semibold px-5 py-3 transition"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
